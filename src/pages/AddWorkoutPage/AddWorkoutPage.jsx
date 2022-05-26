
import { Grid } from "semantic-ui-react";
import React, {useState, useEffect} from 'react'; 
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import AddWorkoutForm from '../../components/AddWorkoutForm/AddWorkoutForm'; 
import * as workoutsAPI from '../../utils/workoutApi';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";


export default function AddWorkoutPage({user, handleLogout}){
    const [workouts, setWorkouts] = useState([]);
    console.log(workoutsAPI, 'this is workoutsAPI');
  
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    async function handleAddWorkout(workout) {
        try {
          // setLoading(true);
          const data = await workoutsAPI.create(workout); // our server is going to return
          // the created post, that will be inside of data, which is the response from
          // the server, we then want to set it in state
          console.log(data, data.workout,  " this is response from the server, in handleAddWorkout");
          console.log(workout);
          setWorkouts([data.workout, ...workouts]);
          // setLoading(false);
        } catch (err) {
          console.log(err);
          setError(err.message);
        }
      };

    
      if (error) {
        return (
          <>
            <HeaderNav handleLogout={handleLogout} user={user}/>
            <ErrorMessage error={error} />;
          </>
        );
      };
    
      if (loading) {
        return (
          <>
            <HeaderNav handleLogout={handleLogout} user={user}/>
            <Loading />
          </>
        );
      };



    
    return(
    <Grid centered>
        <Grid.Row>
        <Grid.Column>
          <HeaderNav handleLogout={handleLogout} user={user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 550 }}>
          <AddWorkoutForm handleAddWorkout={handleAddWorkout} />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    );
};