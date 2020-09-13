import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import TodoItem from './TodoItem'
@inject('Test')
@observer
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            inputValue:''
        }
        this.handleInputChange= this.handleInputChange.bind(this)
    }
    addItem(){
       this.setState({
           list:[...this.state.list,this.state.inputValue],
           inputValue:''
       })
    }
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    deletItem(index){
        const list=[...this.state.list]
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    delete(){

    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <input value={this.state.inputValue} onChange={this.handleInputChange} />
                <button onClick={this.addItem.bind(this)}>增加</button>
                <TodoItem></TodoItem>
                <ul>
                    {this.state.list.map((item,index)=>{
                        // return <li key={index}>{item}<button onClick={this.deletItem.bind(this,index)}>删除</button></li>
                        return <TodoItem content={item}  key={index} index={index} delete={this.deletItem.bind(this)} />
                    })}
                </ul>
            </div>
        )
    }
    // render() {
    //     return (
    //         <div>
    //             <h1>Home</h1>
    //             <p>msg: {this.props.Test.msg}</p>
    //             <p>
    //                 <input type="text" value={this.props.Test.msg} onChange={this.props.Test.handleChangeMsg} />
    //             </p>
    //         </div>
    //     )
    // }
}

export default Home