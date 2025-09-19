"use client"
import React, {createContext, useState, useContext} from 'react'


const dataContext = createContext<{info:{}, setInfo:any}>({info:{}, setInfo:()=>{}})

function DataProvider({children}: Readonly<{children: React.ReactNode;}>) 
{
    const [info, setInfo] = useState<{}>({})
    return (
        <dataContext.Provider value={{info, setInfo}}>{children}</dataContext.Provider>
    )
}


export function useDataContext ()
{
    return useContext(dataContext)
}

export default DataProvider