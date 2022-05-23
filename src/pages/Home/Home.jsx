import React from 'react'; 
import WorkoutGallery from '../../components/WorkoutGallery/WorkoutGallery';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddWorkoutForm from '../../components/AddWorkoutForm/AddWorkoutForm'; 



export default function Home(props){
    return (
        <>
        <Sidebar />
        <WorkoutGallery />
        <AddWorkoutForm />
        </>
    )
}