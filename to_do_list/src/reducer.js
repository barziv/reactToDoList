import uuid from "react-uuid";
import config from "./config";

const updateState = (state, payload) => {
  state[payload.id] = {
    'done': payload.isDone,
    'assignment': payload.label
  };

  return state;
};

const addNewAssignment = (state, payload) => {
  state[uuid()] = {
    'done': false,
    'assignment': payload.label
  };

  return state;
};

const deleteAssignment = (state, payload) => {
  delete state[payload.id];
  return state;
};

const loadAssignments = (state, payload) => {
    return payload.state;
}

const ACTION_TYPES_FUNCTIONS = {
  [config.ACTION_TYPES.add]: addNewAssignment,
  [config.ACTION_TYPES.update]: updateState,
  [config.ACTION_TYPES.delete]: deleteAssignment,
  [config.ACTION_TYPES.load]: loadAssignments
};

const initState = {};

const reducer = (state = initState, action) => {
  let actionTypes = config.ACTION_TYPES;
  if (Object.values(actionTypes).includes(action.type)) {
    let newState = Object.create(state);
    newState = ACTION_TYPES_FUNCTIONS[action.type](newState, action.payload);
    return newState;
  }

  return state;
};

export default reducer;