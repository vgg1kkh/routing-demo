import React from 'react'
import { NavLink,BrowserRouter,Route,Switch } from 'react-router-dom'




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


export const Join = () => {
    return (
        <div>
            {console.log("JoinUs is executed.")}
            JoinUs now!
        </div>
    )
}



export class About extends React.Component {

    jumpTo= ()=>{
        console.log(this.props.history);
        this.props.history.push('/about/join')
    }
    render(){
        return (
            <div>
                {console.log("About is executed.")}
                <BrowserRouter>
                <NavLink exact to="/about" activeClassName="about-active">企业历史</NavLink>
                <NavLink to="/about/culture" activeClassName="about-active">企业文化</NavLink>
                <NavLink to="/about/contact" activeClassName="about-active">联系我们</NavLink>
                <button onClick={()=>this.jumpTo()}>Join us</button>
                <button onClick={this.history.push('/')}></button>
                <Switch>
                <Route path="/about/contact" component={Contact} />
                <Route path="/about/culture" component={Culture} />
                <Route path="/about/join" component={Join} />
                <Route path="/about" component={History} />
                </Switch>
                </BrowserRouter>
                
              
                
            </div>
        )
    }
    
}
