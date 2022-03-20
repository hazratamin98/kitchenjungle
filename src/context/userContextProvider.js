import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { onAuthStateChanged, getAuth } from "firebase/auth"

const UserAuthContext = createContext({})

export function UserContextProvider({ Children }) {
  const [user, setUser] = useState("")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <UserAuthContext.Provider value={user}>
      <Children />
    </UserAuthContext.Provider>
  )
}

export function useUserAuth() {
  return useContext(UserContextProvider)
}
