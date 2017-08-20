import React from 'react';
import { connect } from 'react-redux';
import { filterTodo } from '../actions';

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>
  } else {
    return (
      <a href="#"
         onClick={e => {
           e.preventDefault();
           onClick();
         }}>
        {children}
      </a>
    );
  }
};

const FilterLink = connect(
  ({visibilityFilter}, {filter}) => {
    return {
      active: filter === visibilityFilter
    }
  },
  (dispatch, {filter}) => {
    return {
      onClick() {
        dispatch(filterTodo(filter));
      }
    }
  }
)(Link);

export default FilterLink;