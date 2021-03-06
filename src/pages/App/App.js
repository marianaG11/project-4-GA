import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import Home from '../Home/Home';
import ProfilePage from "../ProfilePage/ProfilePage";
import WorkoutDetailsPage from "../WorkoutDetailsPage/WorkoutDetailsPage";
import AddWorkoutPage from "../AddWorkoutPage/AddWorkoutPage";


function App() {
  //grab the user from localStorage and set the state
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  //to set the user in our state
  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localStorage decoding the jwt
  };

  function handleLogout() {
    userService.logout();
    setUser(null);
  };

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<Home user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="/:username" element={<ProfilePage user={user} handleLogout={handleLogout} />}
        />
        {/* change later on to be pass in the workout id before /details */}
        <Route path="/workouts/:id" element={<WorkoutDetailsPage user={user} handleLogout={handleLogout}/>} />
        <Route path="/Add" element={<AddWorkoutPage user={user} handleLogout={handleLogout}/>} />
      </Routes>
    );
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
