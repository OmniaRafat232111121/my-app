import React,{createContext} from 'React'
export const nameContext=createContext();
export const NameContextProvider=()=>{
    return(
        <nameContext.Provider>
        {p}
        </nameContext.Provider>
    )
}