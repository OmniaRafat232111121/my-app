import React, { createContext, useState } from "react";

export const NameContext = createContext();
NameContext.displayName = "Name";

const NameContextProvider = (props) => {
  const [name, setName] = useState("Algorithm Academy");

  return <NameContext.Provider value={name}>
  {props.children}
  </NameContext.Provider>;
};

export default NameContextProvider;