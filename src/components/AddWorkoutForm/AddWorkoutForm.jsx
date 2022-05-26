import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image,  Segment } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';



export default function AddWorkoutForm(props){
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    caption: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('caption', state.caption)
    props.handleAddWorkout(formData); //calling the function
    navigate('/')
  }


  return (
    
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
              <Form.TextArea
                  className="form-control"
                  name="caption"
                  value={state.caption}
                  placeholder="Write your workout here"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                Add Today's Workout
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}



