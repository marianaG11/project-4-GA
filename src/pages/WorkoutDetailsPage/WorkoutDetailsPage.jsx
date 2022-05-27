import React, { useEffect, useState } from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react'; 
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import CommentsDisplay from '../../components/CommentsDisplay.jsx/CommentsDisplay';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as workoutApi from "../../utils/workoutApi";
import * as commentsAPI from "../../utils/commentsApi";

export default function WorkoutDetailsPage({user, handleLogout, workoutId, comment}){
    // console.log(commentsAPI)
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    async function handleAddComment(comment){
        const data = await commentsAPI.create(comment, workoutId);
        await setComments(data);  
    }
    // async function handleAddComment(comment){
    //     try {
    //         setLoading(false);
    //         const data = await commentsApi.create(comment);
    //         console.log(data, " this is a response from server, handleAddPost");
    //         setComments([data.comment, ...comments]);
    //         setLoading(false);
    //     } catch(err){
    //         console.log(err);
    //         setError(err.message);
    //     }
    // };

    async function getComments(){
        try {
            const data = await commentsAPI.getAll();
            // console.log(data, "this is data from getComments")
            setComments([data]);
            setLoading(false);
        } catch(err){
            console.log(err.message, "error from getComments in details page");
            setError(err.message);
        }
    }

    useEffect(() => {
        getComments();
    }, []); 
 
    if (error){
        return(
            <>
                <ErrorMessage error={error} />
            </>
        )
    };

    if (loading) {
        return (
          <>
            <Loading />
          </>
        );
    };


    return (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <HeaderNav handleLogout={handleLogout} user={user}/>
                <div>
                    <h1>Comments <Icon name="comments"></Icon></h1>
                </div>
                <CommentsDisplay user={user} handleAddComment={handleAddComment}/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
};

