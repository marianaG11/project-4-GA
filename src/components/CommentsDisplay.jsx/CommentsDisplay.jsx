import React, { Component } from 'react'; 
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import AddCommentForm from '../AddCommentForm/AddCommentForm';

export default function CommentsDisplay({}){
    return(
    <Comment.Group>
        <Comment>
      <Comment.Avatar src='/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    {/* <Form reply> */}
    {/* <Form.TextArea />
    <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form> */}
    <AddCommentForm />
    </Comment.Group>
    )
};