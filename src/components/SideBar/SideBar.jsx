import React, {useState} from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { SideBarData } from '../SideBar/SideBarData'; 
import '../SideBar/SideBar.css';

export default function SideBar({user, handleLogout}){
  const [sideBar, setSideBar] = useState(false) //false bc not showing at first
  const showSideBar = () => setSideBar(!sideBar) //updates to open sidebar

  return (
    <>
      <div className="sideBar">
        <Link to="#" className="menu">
          <Icon name="bars" onClick={showSideBar}></Icon>
        </Link>
      </div>
      <nav className={sideBar ? 'sideBar-menu active': 'sideBar-menu'}>
        <ul className="items">
          <li className="sideBar-toggle">
            <Link to="#" className="menu">
              <Icon name="close"></Icon>
            </Link>
          </li>
          {SideBarData.map((item, index)=> {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>

  )
}


// export default function SideBar({ user, handleLogout }){
//   const [sideBar, setSideBar] = useState(false)
//   const showSideBar = () => setSideBar(!sideBar)
//   return (
//     <>
//     <div className="sidebar">
//       <Link to="#" className="menu">
//         <Icon name="bars" onClick={showSideBar}></Icon>
//       </Link>
//     </div>
//     <nav className={sideBar ? 'sideBar-menu active': 'sideBar-menu'}>
//       <ul className="items">
//         <li className="sideBar-toggle">
//         <Link to="#" className="menu">
//           <Icon name="bars"></Icon>
//         </Link>
//         </li>
//       </ul>
//     </nav>
//         <Link to="" onClick={handleLogout}>
//           <Icon name="sign-out">Sign-Out</Icon>
//         </Link>
//        <Link to={`/${user?.username}`}>
//           <Image
//             src={
//               user?.photoUrl
//                 ? user?.photoUrl
//                 : "https://react.semantic-ui.com/images/wireframe/square-image.png"
//             }
//             avatar
//           ></Image>
//         </Link>
    
//     </>
//   )
// }

// const IconExampleLink = () => (
//   <div>
//     <Icon link name='close' />
//     <Icon link name='help' />
//   </div>
// )

// export default IconExampleLink

