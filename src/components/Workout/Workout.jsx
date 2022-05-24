import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
function Workout({ workout, isProfile, removeLike, addLike, user }) {

  // need to know if the logged in user has liked the workout yet
  //search the array of objects that is workout.likes to see if the logged in users
  // id exists in that array of objects
  const likeIndex = workout.likes.findIndex(
    (like) => like.userId === user._id
  );
    console.log(user)
  // call the addLike or the removeLike when user clicks on the heart icon
  const clickHandler =
    likeIndex > -1 //if findIndex doesn't find an index of the liked object in the workout.likes array, it'll return a -1
      ? () => removeLike(workout.likes[likeIndex]._id)
      : () => addLike(workout._id);

//   // if the logged users id exists, the heart should be red; user liked the workout
//   // and the clicked handler should removeLike
  const likeColor = likeIndex > -1 ? "red" : "grey";

  // if the logged users id doesn't exist in the workout.likes array, then the heart should be
  // grey
  //the click handler should be addLike
  return (
    <Card key={workout._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${workout.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  workout.user.photoUrl
                    ? workout.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {workout.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}

      <Image src={`${workout.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description>{workout.caption}</Card.Description>
      </Card.Content>
      <Card.Content extra textAlign={"right"}>
        <Icon
          name={"heart"}
          size="large"
          color={likeColor}
          onClick={clickHandler}
        />
        {workout.likes.length} Likes
      </Card.Content>
    </Card>
  );
};

export default Workout;
