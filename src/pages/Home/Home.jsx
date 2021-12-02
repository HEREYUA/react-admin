import React, { Component } from 'react'
import { Table,Space,message } from 'antd';
import {getUserData,deleteUser} from '../../api/home'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'

export default function Home(){
    const columns=[
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align:'center'
           
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            align:'center'
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            align:'center'
          },
          {
            title: 'Action',
            key: 'action',
            align:'center',
            render: ( record) => (
              <Space size="middle">
                <a onClick={()=>deleteUserData(record)}>Delete</a>
              </Space>
            ),
          },
          
    ]
    const [data,setData] =React.useState('')
    
    // 获取数据
    const getData=()=>{
        getUserData().then(resp=>{
            if(resp.status===200){
                setData(resp.data)
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    // 删除数据
    const deleteUserData=(record)=>{
        console.log(record)
        deleteUser({'name':record.name}).then(resp=>{
            if(resp.data.msg){
                    if(resp.data.msg=='删除成功'){
                        message.success(resp.data.msg)
                        getData()
                    }else{
                        message.error(resp.data.msg)
                    }
            }
            console.log(resp.data)

        }).catch(error=>{
            console.log(error)
        })
    }

    // 在组件创建时调用查询数据的函数
    React.useEffect(()=>{
        getData()
    },[])

   
        return (
            <div>
                <BreadCrumb arr={['首页']}/>
                <Table  columns={columns} dataSource={data} />
            </div>
        )
    
}
