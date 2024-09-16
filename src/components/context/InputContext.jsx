import { createContext, useState } from "react";
export const inputContext = createContext()

const inputContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("")
  return (
    <inputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </inputContext.Provider>
  )
}
export default inputContextProvider