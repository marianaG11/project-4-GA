import React from 'react';
import { Grid } from 'semantic-ui-react'; 
import Sidebar from '../../components/Sidebar/Sidebar';
import CommentsDisplay from '../../components/CommentsDisplay.jsx/CommentsDisplay';

export default function WorkoutDetailsPage(){
    
    
    
    
    return (
        <Grid>
            <Sidebar />
            <CommentsDisplay />
        </Grid>

    )
};