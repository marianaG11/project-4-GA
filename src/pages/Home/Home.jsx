import React, {useState, useEffect} from 'react'; 
import WorkoutGallery from '../../components/WorkoutGallery/WorkoutGallery';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddWorkoutForm from '../../components/AddWorkoutForm/AddWorkoutForm'; 
import * as workoutsAPI from '../../utils/workoutApi';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import { Grid, Header, Icon } from "semantic-ui-react";
import * as likesAPI from "../../utils/likesApi";
import "./Home.css";
import AddCommentForm from '../../components/AddCommentForm/AddCommentForm';

export default function Home({user, handleLogout}){
  const [workouts, setWorkouts] = useState([]);
  console.log(workoutsAPI, 'this is workoutsAPI');
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  async function addLike(workoutId){
    try {
      const data = await likesAPI.create(workoutId)
      console.log(data, 'response from the server when we make a like');
      getWorkouts(); // gets updated workouts w/ likes; fetches the updated docs from DB
    } catch(err){
      console.log(err)
      setError(err.message)
    }
  }

  async function removeLike(likeId){
    try {
      const data = await likesAPI.removeLike(likeId);
      console.log(data, 'response from the server when we remove a like')
      getWorkouts();
      
    } catch(err){
      console.log(err);
      setError(err.message);
    }
  }


  //set up  utility function in handleAddWorkout in the home component
  //holds state that contains all the workouts
  // // C create in Crud
  // // we invoke this function in addPost component when the submit button on our form is clicked
  // // so we need to pass it as a prop
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
  }


  // R read in crud
  async function getWorkouts() {
    try {
      const data = await workoutsAPI.getAll();
      console.log(data, " this is data,");
      setWorkouts([...data.workouts]);
      setLoading(false);
    } catch (err) {
      console.log(err.message, " this is the error");
      setError(err.message);
    }
  }

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getWorkouts();
  }, []);


  if (error) {
    return (
      <>
        <Sidebar handleLogout={handleLogout} user={user}/>
        <ErrorMessage error={error} />;
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Sidebar handleLogout={handleLogout} user={user}/>
        <Loading />
      </>
    );
  } 

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Sidebar handleLogout={handleLogout} user={user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 750 }}>
        <Grid.Row>
        <Header as='h2' icon textAlign='center'>
          <Icon name='users' circular />
          <Header.Content>Friends</Header.Content>
        </Header>
      </Grid.Row>
          <WorkoutGallery
            workouts={workouts}
            numPhotosCol={3}
            isProfile={false}
            loading={loading}
            addLike={addLike}
            removeLike={removeLike}
            user={user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
