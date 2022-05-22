import React, { useState, useEffect } from "react";
import PageHeader from "../../components/Header/Header";
import AddPostForm from "../../components/AddPostForm/AddPostForm";
import PostGallery from "../../components/PostGallery/PostGallery";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader";
import * as postsAPI from "../../utils/postApi";
import * as likesAPI from '../../utils/likeApi';
import { Grid } from "semantic-ui-react";


export default function HomePage(props){
return (
  <>
  <h1>Home</h1>
  </>
  )
};