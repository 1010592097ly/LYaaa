import React,{Component} from 'react';
// import Todolist from './components/Todolist';
// import Proxy from "./components/Proxy"
import One from "./One"
class App extends Component{
  constructor(){
    super()
    console.log("constructor-app")
    this.state = {
      n:1  //1初始化状态
    }
    // this.handelClick = this.handelClick.bind(this) //2绑定this
  }
  // handelClick(){
  //   console.log(this)
  // }
  componentDidMount(){
    console.log("componentDidMount-app")
  }
  render(){
    console.log("render-app")
      return(
        <div>
          {/* <Todolist/> */}
          {/* <Proxy/> */}
          app
          <button onClick={() => {this.setState({n:this.state.n+1})}}>点我</button>
          <One n ={this.state.n}/>
        </div>
      )
  }
}

export default App;
