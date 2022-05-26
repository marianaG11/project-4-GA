 
import React from 'react';
import { Menu, Segment, Header, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./HeaderNav.css";
 
 
// //maybe rename class to a function and delete unused items, but keep the format in return
 
// export default class MenuExampleSecondaryPointing extends Component {
//   state = { activeItem: 'home'}
 
//   handleItemClick = (e, { name }) => this.setState({ activeItem: name})
 
//   render() {
//     const { activeItem } = this.state
 
//     return (
   //   <div>
   //     <Header as='h2'>
   //         <Image circular  className="image-header" src='https://react.semantic-ui.com/images/avatar/large/patrick.png' /> Patrick
   //     </Header>
   //     <Menu pointing secondary>
   //       <Menu.Item
   //         name='home'
   //         active={activeItem === 'home'}
   //         onClick={this.handleItemClick}
   //       />
   //       <Menu.Item
   //         name='My Profile'
   //         active={activeItem === 'messages'}
   //         onClick={this.handleItemClick}
   //       />
   //       <Menu.Item
   //         name='Add a Workout'
   //         active={activeItem === 'friends'}
   //         onClick={this.handleItemClick}
   //       />
   //       <Menu.Menu position='right'>
   //         <Menu.Item
//           name='logout'
   //           active={activeItem === 'logout'}
   //           onClick={this.handleItemClick}
   //         />
   //       </Menu.Menu>
   //     </Menu>
   //   </div>
//     )
//   }
// }
 
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
        
  
