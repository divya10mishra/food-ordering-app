import { getMaxListeners } from 'process'
import {createContext} from 'react'

const userContext = createContext({
    user : {
        name: "divya",
        email: "divya@gmail.com"
    }
})

userContext.displayName = "UserContext"

export default userContext