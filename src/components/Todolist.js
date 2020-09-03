import React, { Component } from 'react'
import axios from "axios"
export default class Todolist extends Component {
    state={
        list:[],
        username:'',
        age:''
    }
    //在这个钩子函数里面进行异步操作
    componentDidMount(){
        this.find() //请求接口拿数据
    }
    find = () => {
        axios.get("http://localhost:4000/list").then(res => {
            // console.log(res.data)
            //更改组件自身的状态
            this.setState({
                list:res.data
            })
        })
    }

    //添加按钮
    add = () => {
        // console.log(this.state.username,this.state.age)
        axios.post("http://localhost:4000/list",{
            name:this.state.username,
            age:this.state.age
        }).then(res => {
            console.log("数据添加成功")
            this.find()
        })
        
    }
    //删除按钮
    remove = (id) => {
        axios.delete("http://localhost:4000/list/"+id).then(res => {
            this.find()
        })
    }
    //修改请求
    updata = (item) => {
        let value = prompt("请输入修改的值",item.name+','+item.age)
        // console.log(value.split(','))
        if(value){
            var arr = value.split(",")
            axios.patch("http://localhost:4000/list/"+item.id,{
                name:arr[0],
                age:[1]
            }).then(res => {
                this.find()
            })
        }
        
    }
    //模糊查询
    blurFind = () => {
        let value = prompt("请输入查询信息")
        axios.get("http://localhost:4000/list?name_like="+value).then(res => {
            console.log(res.data)
            this.setState({
                list:res.data
            })
        })
    }

    input = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render() {
        let {username,list,age} = this.state 
        return (
            <div>
                <input id='username' onChange={this.input} value={username} type="text" placeholder="请输入用户名"/>
                <input id='age' onChange={this.input} value={age} type="text" placeholder="请输入年龄"/>
                <button onClick={this.add}>添加</button>
                <button onClick={this.blurFind}>查询</button>
                <button onClick={()=>{this.find()}}>返回</button>
                <ul>
                    {
                        list.map((item,index) => {
                        return <li key={index}>
                            {item.name}
                            <span>------</span>
                            {item.age}
                            <button onClick={this.remove.bind(this,item.id)}>删除</button>
                            <button onClick={this.updata.bind(this,item)}>修改</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
