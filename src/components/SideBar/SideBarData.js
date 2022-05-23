import React from "react"; 
import { Icon } from 'semantic-ui-react';


export const SideBarData = [
    {
        title: "Home",
        className: "sidebar-items",
        icon: <Icon className="home"/>, 
        path: "/"
    }, {
        title: "Notes",
        className: "sidebar-items",
        icon: <Icon className="sticky note"/>, 
        path: "/notes"
    }, {
        title: "log Out",
        className: "sidebar-items",
        icon: <Icon className="log out"/>, 
        path: ""
    }
    
]