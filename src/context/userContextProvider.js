import { Children, createContext } from "react"

const UserContext = createContext({})

const UserContextProvider = ({ Children }) => {
  contextValue = {}
  return (
    <UserContext.Provider value={contextValue}>
      <Children />
    </UserContext.Provider>
  )
}
