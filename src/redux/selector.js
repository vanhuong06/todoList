import { createSelector } from "@reduxjs/toolkit";

export const searchSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todoRemaining = createSelector(
  searchSelector,
  filterStatusSelector,
  todoListSelector,
  filterPrioritySelector,
  (search, status, todoList, priority) => {
    return todoList.filter((todo) => {
      if(status === 'All') {
        return priority.length ? todo.name.includes(search) && priority.includes(todo.priority) : todo.name.includes(search);
      }
      return (
        todo.name.includes(search) &&
        (status === "Completed"
          ? todo.completed
          : !todo.completed) && (priority.length ? priority.includes(todo.priority) : true)
      );
    });
  }
);
