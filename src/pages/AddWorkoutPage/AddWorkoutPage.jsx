import React from 'react';
import AddWorkoutForm from '../../components/AddWorkoutForm/AddWorkoutForm';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Grid } from "semantic-ui-react";
export default function AddWorkoutPage(){
    return(
        <Grid>
           <Sidebar />
        <AddWorkoutForm /> 
        </Grid>
        
    );
};