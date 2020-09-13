import React, { Component } from 'react'
// 子组件通过this.props.content接收父组件传来的值，父组件通过定义属性方式向子组件传值。
class TodoItem extends Component{
    handleDelete(){
       this.props.delete(this.props.index)
    }
    render(){
    return <div onClick={this.handleDelete.bind(this)} >{this.props.content}</div>
    }
}
export default TodoItem