import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react';
import Workout from '../Workout/Workout';
import Loader from '../Loader/Loader';

export default function PostWorkout({workouts, numPhotosCol, isProfile, loading, addLike, removeLike, user }){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null}
        {workouts.map((workout) => {
          return (
            <Workout
              workout={workout}
              key={workout._id}
              isProfile={isProfile}
              addLike={addLike}
              removeLike={removeLike}
              user={user}
            />
          );
        })}
      </Card.Group>
  
    )
};