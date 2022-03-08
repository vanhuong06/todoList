// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const filterSlice = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/search":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filter/searchStatus":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filter/searchPriority":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterSlice;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  reducers: {
    search: (state, action) => {
      //mutation 
      state.search = action.payload;
    }, // (type: filter/ search)
    searchStatus: (state, action) => {
      state.status = action.payload;
    },
    searchPriority: (state, action) => {
      state.priority = action.payload;
    }
  }
});
