import React, { Component } from 'react'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
export default class Test extends Component {
    render() {
        return (
            <div>
                 <BreadCrumb arr={['测试']}/>
                Test
            </div>
        )
    }
}
