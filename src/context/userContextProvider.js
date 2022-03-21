import React, { useState, useContext, createContext } from "react"

export const userAuthContext = createContext()
const userContextProvider = ({ children }) => {
  return (
    <userAuthContext.Provider value={""}>{children}</userAuthContext.Provider>
  )
}

export default userContextProvider
