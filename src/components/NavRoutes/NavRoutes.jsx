import React, { Component } from 'react'
import { Route,Redirect } from 'react-router'
import { observer,inject } from 'mobx-react'

@inject('loginStore')
@observer
 class NavRoutes extends Component {
    render() {
        return (
            // <div>
            //     {
            //         this.props.loginStore.isLogin?<Route {...this.props} /> :
            //         <Redirect to={{
            //             pathname: '/login'
            //           }}/>
            //     }
            // </div>
            <Route {...this.props} /> 
        )
    }
}
export default NavRoutes