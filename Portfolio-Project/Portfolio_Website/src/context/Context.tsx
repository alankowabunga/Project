// @ts-ignore
// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import  { createContext, useState } from 'react'

export const GlobalContext = createContext(undefined);

export const Context = ({children}) => {


    const [striped, setStriped] = useState(true);

    
  return (
    <GlobalContext.Provider value={{striped,setStriped}}>{children}</GlobalContext.Provider>
  )
}
