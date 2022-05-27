
import React, { useState } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
import * as commentsAPI from "../../utils/commentsApi";


export default function AddCommentForm(props, workoutId, handleAddComment, comment){
    // const [body, setBody] = useState('');
    const [state, setState] = useState({
        comment:'',
        // username: '', //is this needed
    })
 
 
    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };
 
    
    async function handleAddComment(comment){
        try{
            await commentsAPI.create(comment)
            
        }catch(err){
            console.log(err, 'from handleAddComment')
        }
    }




    function handleSubmit(e){
        e.preventDefault()
        // const comment = props.handleAddComment(comment)
        handleAddComment({
            comment: state.comment,
            workoutId: workoutId,
        })
        console.log(comment, 'in addCommentForm in handleSubmit')
        // const formData = new FormData();
        // formData.append('comment', state.comment)
        // const comment = new Comment()
        // comment.append('body', state.comment)
        // props.handleAddComment(workoutId);
    /////
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     const newComment = props.handleAddComment(commentToBeAdded)
    //     }

    //     function handleSubmit(e){
    //         e.preventDefault()
    //         handleAddComment({
    //             comment: state.comment,
    //             postId: postId,
    //     })
    }


    return (
    <Form reply autoComplete="off" onSubmit={handleSubmit}>
      <Form.TextArea
        type="text"
        name="comment"
        value ={state.comment}
        label="comment"
        placeholder="What did you think about this workout?"
        onChange={handleChange}
      />
      <Button type="submit" content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>

    );
};
