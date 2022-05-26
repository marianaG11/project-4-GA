import React, { useState } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";



export default function AddCommentForm(props){
    const [state, setState] = useState({
        comments: '',
        username: '', //is this needed
    })
 
 
    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };
 
    function handleSubmit(e){
        e.preventDefault()
        //what else is needed here
    };
 
    return (
    <Form reply autoComplete="off" onSubmit={handleSubmit}>
      <Form.TextArea
        type="text"
        name="comments"
        value ={state.comments}
        label="comment"
        placeholder="What did you think about this workout?"
        onChange={handleChange}
      />
      <Button type="submit" content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>

    );
};
