import React, { Component } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
export default class Home extends Component {
    render() {
        return (
            <div>
                <BreadCrumb arr={['首页']}/>
                Home
            </div>
        )
    }
}
