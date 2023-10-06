import {ADD_TODO, DELETE_TODO} from "./action";

const initialState = [
  {
    id: 0,
    completed: false,
  }
]

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {id: 0, completed: false}
        ]
    case DELETE_TODO: return state.filter(todo => todo.id !== action.id);

    default: return state;
  }
}

export default reducer;
