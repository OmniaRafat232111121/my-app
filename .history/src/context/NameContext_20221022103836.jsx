import React, { createContext, useState } from "react";

export const NameContex = createContext();
NameContex.displayName = "Name";

const NameContextProvider = (props) => {
  const [name, setName] = useState("Algorithm Academy");

  return <NameContex.Provider value={name}>
  {props.children}
  </NameContex.Provider>;
};

export default NameContextProvider;