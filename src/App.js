import React, { Component } from 'react';

import 'reset-css/reset.css';
import './UIComponents.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { textLabel: "洗衣服", done: false },
        { textLabel: "打掃房間", done: false },
        { textLabel: "買晚餐", done: false }
      ],
      newInput: ""
    }
  }

  addTodoListItem = (e) => {
    e.preventDefault();
    let { newInput, todoList } = this.state;
    let updateTodoList = todoList.slice();
    updateTodoList.push({
      textLabel: newInput,
      done: false
    })
    this.setState({
      todoList: updateTodoList,
      newInput: ""
    })
  }

  updateTodoListItem = (method, e, index) => {
    let updateTodoList = this.state.todoList.slice();
    switch(method) {
      case 'CHECK':
        updateTodoList[index].done = !updateTodoList[index].done;
        break;

      case 'TEXT':
        updateTodoList[index].textLabel = e.target.value;
        break;

      default:
      updateTodoList = this.state.todoList;
    }
    this.setState({
      todoList: updateTodoList
    })
  }

  deleteTodoListItem = (index) => {
    let updateTodoList = this.state.todoList.slice();
    updateTodoList.splice(index, 1);
    this.setState({
      todoList: updateTodoList
    })
  }

  render() {
    let { newInput, todoList } = this.state;
    return (
      <div className="App">
        <div className="main-container">
          <h2>Todo List</h2>
          <div className="todo-list">
            <ul>
              {todoList.map((todoItem, index) => {
                return (
                  <li key={ index }>
                    <button className={ "dot" + (todoItem.done ? " checked" : "") } onClick={ (e) => this.updateTodoListItem("CHECK", e, index) }></button>
                    <div className="text-label">
                      <input type="text" value={ todoItem.textLabel } onChange={ (e) => this.updateTodoListItem("TEXT", e, index) } />
                      <button className="delete" onClick={ (e) => this.deleteTodoListItem(index) }></button>
                    </div>
                  </li>
                );
              })}
              <li>
                <form onSubmit={ (e) => this.addTodoListItem(e) }>
                  <div className="text-label add">
                    <input type="text" value={ newInput } placeholder="Add more todo..." onChange={ (e) => { this.setState({ newInput: e.target.value }) } } />
                    <input type="submit" />
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
