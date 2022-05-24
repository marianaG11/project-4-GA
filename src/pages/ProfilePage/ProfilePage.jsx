
import React from 'react';
import { Grid, Image, Segment } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import ProfileDisplay from "../../components/ProfileDisplay/ProfileDisplay";
import Sidebar from "../../components/Sidebar/Sidebar";
import WorkoutGallery from "../../components/WorkoutGallery/WorkoutGallery";
import userService from '../../utils/userService';
import { useParams } from 'react-router-dom'; //useParams hook to figure out the username in the url
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as likesAPI from "../../utils/likesApi";


export default function ProfilePage(props){
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const { username } = useParams();
  

  async function getProfile() {
    try {
      const data = await userService.getProfile(username);
      console.log(data, "this is the data");
      setLoading(() => false);
      setUser(() => data.user);
      setWorkouts(() => data.workouts);
    } catch (err) {
      console.log(err);
      setError("Profile Doesn't exists, CHECK YOUR TERMINAL FOR EXPRESS!");
    }
  };


  // then when the component loads we can use that username to fetch all the users data
  // then we can store that in state
  useEffect(() => {
    getProfile();
  }, []);

  async function addLike(workoutId){
    try {
      const data = await likesAPI.create(workoutId)
      console.log(data, ' <- the response from the server when we make a like');
      getProfile(); // <- to go get the updated workouts with the like
    } catch(err){
      console.log(err)
      setError(err.message)
    }
  };

  async function removeLike(likeId){
    try {
      const data = await likesAPI.removeLike(likeId);
      console.log(data, '<-  this is the response from the server when we remove a like')
      getProfile()
      
    } catch(err){
      console.log(err);
      setError(err.message);
    }
  };


  if (error) {
    return (
      <>
        <Sidebar handleLogout={props.handleLogout} user={props.user}/>
        <ErrorMessage error={error} />;
      </>
    );
  };

  if (loading) {
    return (
      <>
        <Sidebar handleLogout={props.handleLogout} user={props.user}/>
        <Loading />
      </>
    );
  };

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Sidebar handleLogout={props.handleLogout} user={props.user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileDisplay user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 850 }}>
        <WorkoutGallery
            workouts={workouts}
            isProfile={true}
            numPhotosCol={4}
            user={props.user}
            addLike={addLike}
            removeLike={removeLike}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );

    
};
