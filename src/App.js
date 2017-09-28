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
      ]
    }
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
    }
    this.setState({
      todoList: updateTodoList
    })
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <h2>Todo List</h2>
          <div className="todo-list">
            <ul>
              {this.state.todoList.map((todoItem, index) => {
                return (
                  <li key={ index }>
                    <button className={ "dot" + (todoItem.done ? " checked" : "") } onClick={ (e) => this.updateTodoListItem("CHECK", e, index) }></button>
                    <div className="text-label">
                      <input type="text" value={ todoItem.textLabel } onChange={ (e) => this.updateTodoListItem("TEXT", e, index) } />
                      <button className="delete"></button>
                    </div>
                  </li>
                );
              })}
              <li>
                <div className="text-label">
                  <span>Write Something</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
