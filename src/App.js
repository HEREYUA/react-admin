import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Index from './pages/Index/Index';
import Login from './pages/Login/Login';
import NavRoutes from './components/NavRoutes/NavRoutes';
import 'antd/dist/antd.css';
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div >
        <Switch>
            <Route path="/login" component={Login}/>
            <NavRoutes path="/" component={Index}/>
        </Switch>
       </div>
    )
  }
}
