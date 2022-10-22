import React, { createContext } from "react";

const counterContext=createContext(0);
const increaseCounter=()=>setCounter(couter+1);
const decrease