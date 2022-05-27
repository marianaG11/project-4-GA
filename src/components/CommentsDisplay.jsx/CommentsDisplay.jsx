import React, { Component } from 'react'; 
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import AddCommentForm from '../AddCommentForm/AddCommentForm';

export default function CommentsDisplay({handleChange, handleSubmit, workout, user}){
    return(
  <AddCommentForm />  
    )
};

{/* <Comment.Group>
        <Comment>
      <Comment.Avatar src= {workout.user.photoUrl}/>
      <Comment.Content>
        <Comment.Author as='a'>{workout.user.username}</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text onChange={handleChange}>{workout.comment}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
   <Form reply onClick={handleSubmit}> 
    <Form.TextArea />
    <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form> 
    <AddCommentForm />
    </Comment.Group> */}

//        <Comment>
//           <Comment.Avatar src= {workout.user.photoUrl} user={user}/>
//           <Comment.Content>
//             <Comment.Author as='a'>{workout.user.username}</Comment.Author>
//             <Comment.Metadata>
//               <div>Today at 5:42PM</div>
//             </Comment.Metadata>
//             <Comment.Text onChange={handleChange}>{workout.comment}</Comment.Text>
//             <Comment.Actions>
//               <Comment.Action>Reply</Comment.Action>
//             </Comment.Actions>
//           </Comment.Content>
//         </Comment>
//       <Form reply onClick={handleSubmit}> 
//         <Form.TextArea />
//         <Button content='Add Comment' labelPosition='left' icon='edit' primary type="submit"/>
//         </Form> 
//         <AddCommentForm/>
// 