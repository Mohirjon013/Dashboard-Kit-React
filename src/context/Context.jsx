import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export const TitleContext = ({children}) => {
    const [path, setPath] = useState("Overview")

    // start useLocalStore 
    const useLocalStore = (key, defaultValue) => {
        const [value, setValue] = useState(() => {
            try{
                const valueData = localStorage.getItem(key)
                return valueData ? JSON.parse(valueData) : defaultValue
            }catch(err){
                console.log(err);
                return defaultValue
            }
        })
        useEffect(() => {
            localStorage.setItem(key,JSON.stringify(value))

        },[key,value])

        return [value, setValue]
    }
    // edn useLocalStore 

    const [todo, setTodo] = useLocalStore('todos',[])    
    const [user, setUser] = useLocalStore('users',[])



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

    function deleteUser(id){
        setUser(prev => prev.filter(item => item.id !== id))
    }


    return (
        <Context.Provider value={{path, setPath, todo, setTodo, deleteTodo, isCompleteFunc, user, setUser, deleteUser}}>{children}</Context.Provider>
    )
}