import React from "react";
//import { Router } from "@reach/router";
import { BrowserRouter as Router } from 'react-router-dom'
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ProfilePage from "../ProfilePage";
import PasswordReset from "../PasswordReset";
import destinations from "../../components/Images/destinations.png"


function Application() {
  const user = null;
  return (
      <div>
      <img height = "450" width= "1110" src={destinations} alt={"Miami"}/>      
      <SignUp path="Quiz" />
      
      </div>

      

  );
}
export default Application;

// user ?
//         <ProfilePage />
//       :
   
//         <Router>
//         <SignUp path="Quiz" />
        
//      <SignIn path="/" />
//         <PasswordReset path = "passwordReset" />
//     </Router>