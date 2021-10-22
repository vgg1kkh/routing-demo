import React from 'react'
import { NavLink,BrowserRouter,Route,Switch } from 'react-router-dom'
import { MyMusic } from './MyMusic'



export const History = () => {
    return (
        <div>
            History of 2000Years...
        </div>
    )
}

export const Culture = () => {
    return (
        <div>
            Diversity
        </div>
    )
}

export const Contact = () => {
    return (
        <div>
            Tel: 13822222
        </div>
    )
}


export const JoinUs = () => {
    return (
        <div>
            JoinUs now!
        </div>
    )
}


export const About = (props) => {
    return (
        <div>
            
            <BrowserRouter>
            <NavLink exact to="/about" activeClassName="about-active">企业历史</NavLink>
            <NavLink to="/about/culture" activeClassName="about-active">企业文化</NavLink>
            <NavLink to="/about/contact" activeClassName="about-active">联系我们</NavLink>
            <button onClick={()=>props.history.push('/about/join')}>Join us</button>
            <Switch>
            <Route path="/about/contact" component={Contact} />
            <Route path="/about/culture" component={Culture} />
            <Route path="/about/join" component={Culture} />
            <Route exact path="/about" component={History} />
            
            </Switch>
            
            </BrowserRouter>
            
          
            
        </div>
    )
}
