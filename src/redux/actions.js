// Action creator
export const addTodo = (data) => {
  return {
    type: "todoList/Add",
    payload: data,
  };
};

export const toggleCheckboxChange = (_id) => {
  return {
    type: "todoList/Check",
    payload: _id,
  };
};

export const search = (text) => {
  return {
    type: "filter/search",
    payload: text,
  };
};

export const searchStatus = (status) => {
  return {
    type: "filter/searchStatus",
    payload: status,
  };
};

export const searchPriority = (priority) => {
  return {
    type: "filter/searchPriority",
    payload: priority,
  };
};
