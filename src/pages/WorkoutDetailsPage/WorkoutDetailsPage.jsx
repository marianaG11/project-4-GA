import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'; 
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import CommentsDisplay from '../../components/CommentsDisplay.jsx/CommentsDisplay';
export default function WorkoutDetailsPage({user, handleLogout, workout}){
    
    
    
    
    return (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <HeaderNav handleLogout={handleLogout} user={user}/>
                <div>
                    <h1>Comments <Icon name="comments"></Icon></h1>
                </div>
                <CommentsDisplay user={user}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
};

