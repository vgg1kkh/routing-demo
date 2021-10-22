import React ,{useState} from 'react'

export const Users = () => {
    const [isLogin, setIsLogin] = useState(false)
    return ( isLogin?
        (<div>
            <h2>User</h2>
            <h2>User Name: Alex</h2>   
        </div>): 
    )
}
