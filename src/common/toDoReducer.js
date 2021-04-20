const initialState = {
  items: [],
};

export const ActionTypes = {
  SET_ALL_TODO: "SET_ALL_TODO",
  DELETE_TODO: "DELETE_TODO",
  NEW_TODO: "NEW_TODO",
  EDIT_TODO: "EDIT_TODO",
};

export const ActionCreators = {
  getAllToDo: (payload) => ({ type: ActionTypes.SET_ALL_TODO, payload }),
  deleteToDo: (payload) => ({ type: ActionTypes.DELETE_TODO, payload }),
  newToDo: (payload) => ({ type: ActionTypes.NEW_TODO, payload }),
  editToDo: (payload) => ({ type: ActionTypes.EDIT_TODO, payload }),
};

export default function ToDoReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_ALL_TODO:      
      return { ...state, items: [...action.payload] };
    case ActionTypes.DELETE_TODO:
      return {
        ...state,
        toDos: [...state.items.filter((todo) => todo.id !== action.payload.id)],
      };
    case ActionTypes.NEW_TODO:
      return { ...state, items: [...state.items, action.payload] };
    case ActionTypes.EDIT_TODO:
      let toDos = state.items.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = action.payload;
        }
        return todo;
      });
      return { ...state, items: [...toDos] };
    default:
      return state;
  }
}
