// import cx from 'classnames';
import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      inputVal: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputVal: event.target.value });
  }

  handleAddItem = () => {
    if (this.state.inputVal) {
      const newItems = [...this.state.items, { text: this.state.inputVal, isDone: false }];
      this.setState({ items: newItems, inputVal: '' });
    }
  }

  handleToggleDone = (index) => {
    const newItems = [...this.state.items];
    newItems[index].isDone = !newItems[index].isDone;
    this.setState({ items: newItems });
  }

  render() {
    const { items } = this.state;
    const numRemaining = items.filter(item => !item.isDone).length;
    const statusMsg = `${numRemaining} remaining out of ${items.length} tasks`;
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input type="text" 
          value={this.state.inputVal} 
          onChange={this.handleInputChange} 
          />
          <button onClick={this.handleAddItem}>Add Item</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              // className={cx({ 'is-done': item.isDone })}
              className={item.isDone ? 'is-done' : ''}
              onClick={() => this.handleToggleDone(index)}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <div className="task-counter">{statusMsg}</div>
        <style>
        {`
          .is-done {
            text-decoration: line-through;
          }
          .task-counter {
            margin-top: 10px;
            font-style: italic;
          }
        `}
      </style>
      </div>
    );
  }
}

export default TodoList;