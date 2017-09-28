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
                    <button className={ "dot" + (todoItem.done ? " checked" : "") }></button>
                    <div className="text-label">
                      <span>{ todoItem.textLabel }</span>
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
