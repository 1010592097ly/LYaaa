import React, { Component } from 'react'

export default class One extends Component {
    constructor (props) {
        super(props)
        console.log("one-constructor 1",this.props)
        this.state={
            oneN:props.n
        }
    }
    /* 前面加static修饰
        在这个钩子函数里面,因为是类的方法,不能访问this
    */
    static getDerivedStateFromProps(props){
        console.log("getDerivedStateFromProps.2",props)
        return {
            oneN:props.n
        }
    }

    componentDidMount(){
        console.log("one-componentDidMount4")
    }
    render() {
        console.log("one-render3")
        return (
            <div>
                <button onClick={()=>{this.setState({oneN:1000})}}>更改自身状态</button>
                one组件---{this.state.oneN}
            </div>
        )
    }
}
