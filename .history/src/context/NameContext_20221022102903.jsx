import React,{createContext} from 'React'
export const nameContext=createContext();
export const NameContextProvider=()=>{
    const [name,setName]=useState("Modern Academy")
    return(
        <nameContext.Provider value={va}>
        {props.children}
        </nameContext.Provider>
    )
}
