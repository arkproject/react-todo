import React from 'react';
import uuid  from 'node-uuid';
import moment from 'moment';


import { TodoList } from 'TodoList';
import { AddTodo } from 'AddTodo';
import { TodoSearch } from 'TodoSearch';
import TodoAPI from 'TodoAPI';


export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
      // todos: [
      //   {
      //     id: uuid(),
      //     text: 'Walk the dog',
      //     completed: false
      //   }, {
      //     id: uuid(),
      //     text: 'Clean the yard',
      //     completed: true
      //   }, {
      //     id: uuid(),
      //     text: 'Leave mail on porch',
      //     completed: true
      //   }, {
      //     id: uuid(),
      //     text: 'Play video games',
      //     completed: false
      //   }
      // ]
    };
  }
  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false,
          createAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  }
  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
    // alert(id);
  }
  render() {
    const { todos, showCompleted, searchText } = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
        return (
      <div>
        <h1 className='page-title'>Todo app</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch.bind(this)} />
              <TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)} />
              <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
