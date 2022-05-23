import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
function Workout({ workout, isProfile, removeLike, addLike, user }) {
  // call the addLike or the removeLike when we click on the heart!

  // We need to know if the logged in user has liked this particular post!
  // we search the array of objects that is post.likes to see if the logged in users
  // id exists in that array of objects
//   const likeIndex = post.likes.findIndex(
//     (like) => like.userId === user.user._id
//   );

//   const clickHandler =
//     likeIndex > -1
//       ? () => removeLike(post.likes[likeIndex]._id)
//       : () => addLike(post._id);

//   // if the logged users id exists, the heart should be red, because the logged in user has liked the post
//   // and the clicked handler should removeLike
//   const likeColor = likeIndex > -1 ? "red" : "grey";

  // if the logged users id doesn't exist in the post.likes array, then the heart should be
  // grey, because the user hasn't liked the post, and the click handler should be addLike
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
        //   color={likeColor}
        //   onClick={clickHandler}
        />
        {/* {workout.likes.length} Likes */}
      </Card.Content>
    </Card>
  );
};

export default Workout;
