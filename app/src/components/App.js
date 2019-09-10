import React, { Component } from 'react';
import axios from 'axios'
import '../mock/mock.js'
class App extends Component {//父组件
  constructor(){
    super()
    this.state={
      list:[]
    }
  }
  componentDidMount(){
    axios.get('/getData').then(res=>{
      this.setState({
        list:res.data.list
      })
    })
  }
  huan=()=>{
    axios.get('/getData').then(res=>{
      this.setState({
        list:res.data.list
      })
    })  
  }
  render() {
    return (
      <div>
       <div onClick={()=>{this.huan()}}>换一换</div>
          {
            this.state.list.map((item,index)=>{
              return (
                 <div key={index} className='ul'>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.num}万</p>
                 </div>
              )
            })
          }
      </div>
    );
  }
}

export default App;
