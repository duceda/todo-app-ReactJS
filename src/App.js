import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoForm from './ToDoForm';
import TaskAction from './TaskAction';
import ToDoList from './ToDoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { text: "Tarea 1", completed: false },
        { text: "Tarea 2", completed: false },
        { text: "Tarea 3", completed: false },
        { text: "Tarea 4", completed: true }
      ],
      edit: null
    }
    this.addTask = this.addTask.bind(this);
    this.saveTask = this.saveTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.taskAction = this.taskAction.bind(this);
  }
  getInitialState() {
    return {
      tasks: [
        { text: "Tarea 1", completed: false },
        { text: "Tarea 2", completed: false },
        { text: "Tarea 3", completed: false },
        { text: "Tarea 4", completed: true }
      ]
    }
  }
  addTask(task) {
    if (task.text) {
      this.state.tasks.push(task);
      this.setState(this.state);
    }
  }
  saveTask(index, task) {
    if (task.text) {
      this.state.tasks[index] = task;
      this.state.edit = null;
      this.setState(this.state);
    }
  }
  removeTask(index) {
    if (index >= 0 && this.state.tasks.length > 0) {
      this.state.tasks.splice(index, 1);
      this.setState(this.state);
    }
  }
  editTask(index) {
    if (index >= 0 && this.state.tasks.length > 0) {
      var task = this.state.tasks[index];
      task.index = index
      this.setState({ edit: task });
    }
  }
  taskAction(index) {
    this.state.tasks[index].completed = !
      this.state.tasks[index].completed;
    this.setState(this.state);
  }
  render() {
    return (
      <div>
        <ToDoForm
          add={this.addTask}
          save={this.saveTask}
          edit={this.state.edit} />
        <ToDoList
          tasks={this.state.tasks}
          remove={this.removeTask}
          edit={this.editTask}
          taskAction={this.taskAction} />
      </div>);
  }
}

export default App;