import React, { createContext, useState } from "react";

export const  = createContext();
.displayName = "Name";

const NameContextProvider = (props) => {
  const [name, setName] = useState("Algorithm Academy");

  return <.Provider value={name}>
  {props.children}
  </.Provider>;
};

export default NameContextProvider;