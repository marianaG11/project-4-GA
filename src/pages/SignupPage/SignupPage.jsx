import React, { useState } from "react";
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react'
import userService from "../../utils/userService"; //to make the sign up request
import { useNavigate, Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import './SignupPage.css';
export default function SignUpPage(props) {
  const [selectedFile, setSelectedFile] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [state, setState] = useState({
    username: '', 
    email: '',
    password: '', 
    passwordConf: '', 
    bio: ''
  }); 

  function handleChange(e){
    setState({
      ...state, 
      [e.target.name]: e.target.value
    });
  };

  function handleFileInput(e){
    setSelectedFile(e.target.files[0]) //if user uploads a file, it'll be in the first
    //place of the files array
    console.log(e.target.files)
  };

  //multipart/form-data
  //need to set up data as formData in order to properly make the request to our server
  async function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append('photo', selectedFile)

    for (let fieldName in state){
      //append the rest of the data to the form object
      formData.append(fieldName, state[fieldName])
      console.log(fieldName, state[fieldName])
    };

    try {
      await userService.signup(formData); 
      props.handleSignUpOrLogin(); //decode the token from local storage
      // that we just received as a response to our userService.signup fetch call,
      // decode and update the state in our App component
      //when props.handleSignUpOrLOgin is called, it is setting the user to state in the app
      
      navigate('/')
      console.log(formData.forEach((item) => console.log(item))) //loop over the object to view the formData
    
    
    } catch (err){
      //invalid user data
      setError(err.message)
      console.log(err.message)
    }
  }; 
 

  
  return (
  
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle" className="grid-login">
   <Grid.Column style={{ maxWidth: 450 }} className="grid-signup">
     <Header as="h2" color="black" textAlign="center" className="header-signup">
      Start Tracking Your Workouts With Daily
       <Image src="https://www.freepnglogos.com/uploads/dumbbell/dumbbell-barbell-clip-art-etsy-23.jpg" /> 
     </Header>
     <Form autoComplete="off" onSubmit={handleSubmit}>
       <Segment stacked>
         <Form.Input
           name="username"
           placeholder="Username"
           value={state.username}
           onChange={handleChange}
           required
         />
         <Form.Input
           type="email"
           name="email"
           placeholder="Email"
           value={state.email}
           onChange={handleChange}
           required
         />
         <Form.Input
           name="password"
           type="password"
           placeholder="Password"
           value={state.password}
           onChange={handleChange}
           required
         />
         <Form.Input
           name="passwordConf"
           type="password"
           placeholder="Confirm Password"
           value={state.passwordConf}
           onChange={handleChange}
           required
         />
         <Form.TextArea
           name="bio"
           placeholder="List your goals here..."
           onChange={handleChange}
         />
         <Form.Field>
           <Form.Input
             type="file"
             name="photo"
             placeholder="upload image"
             onChange={handleFileInput}
           />
         </Form.Field>
         <Button type="submit" className="btn" color="black">
           Signup
         </Button>
         <Message>
            Already have an account? <Link to="/login">Sign In</Link>
          </Message>
       </Segment>
       {error ? <ErrorMessage error={error} /> : null}
     </Form>
   </Grid.Column>
 </Grid>

  );

}
