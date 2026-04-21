import { createContext, useState } from "react";

export const Context = createContext()

export const TitleContext = ({children}) => {
    const [path, setPath] = useState("Overview")
    const [todo, setTodo] = useState([])


    function deleteTodo(id){
        setTodo(prev => prev.filter(item => item.id !== id))
    }
    return (
        <Context.Provider value={{path, setPath, todo, setTodo, deleteTodo}}>{children}</Context.Provider>
    )
}