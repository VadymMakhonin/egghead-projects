import React from 'react';
import { connect } from 'react-redux';
import Todo from './todo';
import { getVisibleTodos } from '../helpers';
import { toggleTodo } from '../actions';

const TodoList = ({
  todos,
  onToggleTodo
}) => {
  return (
    <ul>
      {todos.map(todo =>
        <Todo key={todo.id}
              onClick={() => onToggleTodo(todo.id)}
              {...todo}
        />
      )}
    </ul>
  )
};

const mapStateToProps = ({todos, visibilityFilter}) => {
  return {
    todos: getVisibleTodos(todos, visibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      dispatch(toggleTodo(id));
    }
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;