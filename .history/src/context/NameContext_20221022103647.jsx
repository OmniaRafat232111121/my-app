import React,{createContext} from 'React'
export const NameContext=createContext();
export const NameContextProvider=()=>{
    const [name,setName]=useState("Modern Academy")
    return(
        <ameContext.Provider value={name}>
        {props.children}
        </ameContext.Provider>
    )
}
