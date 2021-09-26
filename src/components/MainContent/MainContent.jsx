import React, { Component,lazy,Suspense } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
const Home =lazy(()=>import('../../pages/Home/Home'))
const About=lazy(()=>import('../../pages/About/About'))  
const Test = lazy(()=>import('../../pages/Test/Test'))

export default class MainContent extends Component {
    render() {
        return (
            <div style={{padding:16}}>
                <Suspense fallback={<h1>loading.....</h1>}>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/test" component={Test}/>
                    <Redirect   to='/home'/>
                </Switch>
                </Suspense>
              
              
            </div>
        )
    }
}
