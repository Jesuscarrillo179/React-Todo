import React from 'react';
import './App.css';
import ToDoList from './components/TodoList';
import ToDoForm from './components/TodoForm';

const todo = [
  {
    name: 'wash dishes',
    id: 1,
    completed: false
  },
  {
    name: 'wash clothes',
    id: 2,
    completed: true
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemId === item.id){
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.completed === true)
    })
  }

  render() {
    return (
      <div>
        <ToDoForm addItem={this.addItem}/>
        <h2>To Do List:</h2>
        <ToDoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
