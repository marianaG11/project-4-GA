// import React, {useState} from 'react';

// const FormInput = (props) => {
//     return (
//         <div className="formInput">
//             <label>Comment</label>
//             <input placeholder={props.placeholder} onChange={e=/>
//         </div>
//     )
// }

import React, { useState } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';


export default function AddCommentForm(props, workoutId){
    const [body, setBody] = useState('');
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
 
    function handleSubmit(e){
        e.preventDefault()
        const comment = new Comment()
        comment.append('body', state.comment)
        props.handleAddComment(workoutId);
    };
 
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


// let formData = new FormData();    //formdata object

// formData.append('name', 'ABC');   //append the values with key, value pair
// formData.append('age', 20);

// const config = {     //dont include
//     headers: { 'content-type': 'multipart/form-data' }
// }

//not needed
// axios.post(url, formData, config)
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });