import { createContext, useState } from "react";

export const Context = createContext()

export const TitleContext = ({children}) => {
    const [path, setPath] = useState("Overview")
    const [todo, setTodo] = useState([])


    function deleteTodo(id){
        setTodo(prev => prev.filter(item => item.id !== id))
    }

    function isCompleteFunc(id){
        const findComplete = todo.map(item => {
            if(item.id === id){
                return {...item, isComplete: !item.isComplete}
            }
            return item
        })
        setTodo(findComplete)
    }



    return (
        <Context.Provider value={{path, setPath, todo, setTodo, deleteTodo, isCompleteFunc}}>{children}</Context.Provider>
    )
}