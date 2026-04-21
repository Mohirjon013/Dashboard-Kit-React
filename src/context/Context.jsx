import { createContext, useState } from "react";

export const Context = createContext()

export const TitleContext = ({children}) => {
    const [path, setPath] = useState("Overview")
    return (
        <Context.Provider value={{path, setPath}}>{children}</Context.Provider>
    )
}