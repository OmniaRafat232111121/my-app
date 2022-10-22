import React, { createContext, useState } from "react";

export const NameCo = createContext();
NameCo.displayName = "Name";

const NameContextProvider = (props) => {
  const [name, setName] = useState("Algorithm Academy");

  return <NameCo.Provider value={name}>
  {props.children}
  </NameCo.Provider>;
};

export default NameContextProvider;