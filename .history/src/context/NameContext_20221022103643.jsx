import React,{createContext} from 'React'
export const ameContext=createContext();
export const NameContextProvider=()=>{
    const [name,setName]=useState("Modern Academy")
    return(
        <nameContext.Provider value={name}>
        {props.children}
        </nameContext.Provider>
    )
}
