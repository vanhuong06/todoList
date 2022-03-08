// const initState = {
//     filters: {
//         search: '',
//         status: 'all',
//         priority: []
//     },
//     todoList: [
//         {id: 1, name: 'lesson 1', completed: false , priority: 'High'},
//         {id: 2, name: 'lesson 2', completed: true , priority: 'Medium'},
//         {id: 3, name: 'lesson 3', completed: false , priority: 'Low'}
//     ]
// }

import { combineReducers } from "redux";
import filterSlice  from "./../components/Filters/filterSlice";
import toDoListSlice from "./../components/TodoList/toDoListSlice";

// const rootReducer = (state = {} , action) => {
//     console.log({state, action});
//     switch (action.type) {
//         case 'todoList/Add':
//         return {
//             ...state,
//             todoList: [
//                 ...state.todoList,
//                 action.payload
//             ]
//         }
//         case 'filter/search':
//         return {
//             ...state,
//             filters: {
//                 ...state.filters,
//                 search: action.payload
//             }
//         }
//         default:
//             return state;
//     }
// }

const rootReducer = combineReducers({
  filters: filterSlice,
  todoList: toDoListSlice,
});

export default rootReducer;
