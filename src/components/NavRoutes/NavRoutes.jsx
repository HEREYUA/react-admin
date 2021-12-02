import React, { Component } from 'react'
import { Route,Redirect } from 'react-router'
import { observer,inject } from 'mobx-react'

 function NavRoutes(props){
  
        return (
            // <div>
            //     {
            //         this.props.loginStore.isLogin?<Route {...this.props} /> :
            //         <Redirect to={{
            //             pathname: '/login'
            //           }}/>
            //     }
            // </div>
            <Route {...props} /> 
        )
    
}
export default inject('loginStore')(observer(NavRoutes))