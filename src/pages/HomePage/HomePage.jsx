import React, { useState, useEffect } from "react";
import Greeting from "../../components/Greeting/Greeting";


// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import Loading from "../../components/Loader/Loader";
// import * as postsAPI from "../../utils/postApi";
// import * as likesAPI from '../../utils/likeApi';
// import { Grid } from "semantic-ui-react";


export default function HomePage({user, handleLogout}){
return (
  <div>
    <Greeting handleLogout={handleLogout} user={user}/>
  </div>
  )
};