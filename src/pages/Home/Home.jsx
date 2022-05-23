import React, {useState, useEffect} from 'react'; 
import WorkoutGallery from '../../components/WorkoutGallery/WorkoutGallery';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddWorkoutForm from '../../components/AddWorkoutForm/AddWorkoutForm'; 
import * as workoutsAPI from '../../utils/workoutApi';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";


export default function Home({user, handleLogout}){
  const [workouts, setWorkouts] = useState([]);
  console.log(workoutsAPI, 'this is workoutsAPI');
  const [posts, setPosts] = useState([]); // <- likes are inside of the each post in the posts array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
    
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
      setPosts([data.workout, ...workouts]);
      // setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  //set up  utility function in handleAddWorkout in the home component
  //holds state that contains all the workouts
  // async function handleAddWorkout(workout){
   
  //   const data = await workoutsAPI.create(workout);
  //   console.log(data)
  // }


    return (
        <>
        <Sidebar />
        <AddWorkoutForm handleAddWorkout={handleAddWorkout}/>
        <WorkoutGallery />
        </>
    )
}