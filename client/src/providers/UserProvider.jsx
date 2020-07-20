import React, { createContext } from "react";
import { auth } from "../firebase";


export const UserContext = createContext({ user: null });