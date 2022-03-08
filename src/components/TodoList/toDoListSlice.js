// const initState = [
//   { id: 1, name: "lesson 1", completed: false, priority: "High" },
//   { id: 2, name: "lesson 2", completed: true, priority: "Medium" },
//   { id: 3, name: "lesson 3", completed: false, priority: "Low" },
// ];

// const toDoListSlice = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/Add":
//       return [...state, action.payload];
//     case "todoList/Check":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default toDoListSlice;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "lesson 1", completed: false, priority: "High" },
    { id: 2, name: "lesson 2", completed: true, priority: "Medium" },
    { id: 3, name: "lesson 3", completed: false, priority: "Low" },
  ],
  reducers: {
    Add: (state, action) => {
      state.push(action.payload);
    },
    Check: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if(currentTodo){
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
