import React from 'react'
import {Breadcrumb} from 'antd'
// import {Link} from 'react-router-dom'

const BreadCrumb = (props)=>(
  <Breadcrumb style={{marginBottom:16}}>
    {props.arr && props.arr.map(item=>{
        return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
      
    })}
  </Breadcrumb>
)
export default BreadCrumb
