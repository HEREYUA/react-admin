import React, { Component,lazy,Suspense } from 'react'
import { Switch,Redirect } from 'react-router-dom'
import NavRoutes from '../NavRoutes/NavRoutes'
const Home =lazy(()=>import('../../pages/Home/Home'))
const About=lazy(()=>import('../../pages/About/About'))  
const Test = lazy(()=>import('../../pages/Test/Test'))

export default function MainContent(){
 
        return (
            <div style={{padding:16}}>
                <Suspense fallback={<h1>loading.....</h1>}>
                <Switch>
                    <NavRoutes path="/home" component={Home}/>
                    <NavRoutes path="/about" component={About}/>
                    <NavRoutes path="/test" component={Test}/>
                    <Redirect   to='/home'/>
                </Switch>
                </Suspense>
              
              
            </div>
        )
    
}
