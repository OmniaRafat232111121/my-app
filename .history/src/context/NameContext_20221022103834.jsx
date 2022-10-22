import React, { createContext, useState } from "react";

export const Name = createContext();
Name.displayName = "Name";

const NameContextProvider = (props) => {
  const [name, setName] = useState("Algorithm Academy");

  return <Name.Provider value={name}>
  {props.children}
  </Name.Provider>;
};

export default NameContextProvider;