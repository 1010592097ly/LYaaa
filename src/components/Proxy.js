import React, { Component } from 'react'
import axios from "axios"
export default class Proxy extends Component {
    componentDidMount(){
        // axios.get("https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8982130",{
        //     headers:{
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1597637284519587963600898","bc":"310100"}',
        //         'X-Host': 'mall.film-ticket.film.list'
        //     }
        // }).then(res => {
        //     console.log(res)
        // })

        //跨域请求 通过yarn eject进行react-script相关文件配置的抽离
        axios.get("http://47.96.0.211:9000/db/in_theaters?limit=8&page=2").then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                Proxy
            </div>
        )
    }
}
