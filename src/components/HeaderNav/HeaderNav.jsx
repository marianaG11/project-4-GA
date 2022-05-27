 
import React from 'react';
import { Menu, Segment, Header, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./HeaderNav.css";

 
export default function HeaderNav({user, handleLogout, workout}){
    return(
     <div>
         <Header as='h2'>
             <Image circular  className="image-header" src = {
               user?.photoUrl
                 ? user?.photoUrl
                 : "https://react.semantic-ui.com/images/wireframe/square-image.png"
             }
             avatar/>{user.username}
   
         </Header>
         <Menu pointing secondary>
     <Link to="/">
       <Menu.Item
           name="home"
       />
         </Link>
         <Link to={`/${user?.username}`}>
       <Menu.Item
         name='My Profile'
       />
     </Link>
     <Link to ='/add'>
     <Menu.Item
             name='Add a Workout'
           />
     </Link>
       <Link to="" onClick={handleLogout}>
       <Menu.Menu position='right'>
         <Menu.Item
               name="logout"
               />
             </Menu.Menu>
               </Link>
               </Menu>
             </div>
         )
        };
        
  
