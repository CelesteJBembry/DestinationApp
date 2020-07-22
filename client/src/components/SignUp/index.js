import React, { useState } from "react";
//import { Link } from "@reach/router";
import {auth, generateUserDocument} from "../../firebase";
import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

  const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  return (
    <Form className="text-3xl mb-2 text-center font-bold">
    <div className="mt-8">
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && (
          <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
            {error}
          </div>
        )}
        
        {/* <form className="">
          <label htmlFor="displayName" className="block">
            Display Name:
          </label> */}
                <h3 className="text-3xl mb-2 text-center font-bold">Sign Up</h3>

          <Form.Label>Display Name</Form.Label>{" "}
          
          <input
            type="text"
            className="my-1 p-1 w-full "
            name="displayName"
            value={displayName}
            placeholder="E.g: Celeste"
            id="displayName"
            onChange={event => onChangeHandler(event)}
          />
          {/* <label htmlFor="userEmail" className="block">
            Email:
          </label> */} 
          {" "}<br></br>{" "}
          <Form.Label>Email Address</Form.Label>{" "}
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: celeste@gmail.com"
            id="userEmail"
            onChange={event => onChangeHandler(event)}
          />
          {/* <label htmlFor="userPassword" className="block">
            Password:
          </label> */}
          {" "}<br></br>{" "}
          <Form.Label>Password</Form.Label>{" "}
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={event => onChangeHandler(event)}
          />
                    {" "}<br></br>{" "}

          <Button variant="outline-primary" type="submit"
            // onClick={event => {
            //   createUserWithEmailAndPasswordHandler(event, email, password);
            // }}>
          ><Link to="/Quiz">Sign up</Link>
          </Button>

        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="signUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link>{" "}
          <br />{" "}
          <Link to = "passwordReset" className="text-blue-500 hover:text-blue-600">
          {" "}Forgot Password?
          </Link>
        </p>

      </div>
    </div>
    </Form>
  );
};
export default SignUp;