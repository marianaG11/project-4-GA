import React, { useState } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react';
export default function AddCommentForm(props){
    const [selectedFile, setSelectedFile] = useState('');
    const [state, setState] = useState({
        comments: ''
    })
 
    function handleFileInput(e){
        setSelectedFile(e.target.files[0])
    };
 
    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    };
 
    function handleSubmit(e){
        e.preventDefault()
        //what else is needed here
    }
 
    return (
    <Form reply>
      <Form.TextArea />
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>

    )
};
