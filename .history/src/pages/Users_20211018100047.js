import React ,{useState} from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'

export const Users = () => {
    const [isLogin, setIsLogin] = useState(false)
    return ( isLogin?
        (<div>
            <h2>User</h2>
            <h2>User Name: Alex</h2>   
        </div>): <Redirect
    )
}
