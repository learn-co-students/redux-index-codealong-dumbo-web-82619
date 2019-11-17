const initialState = {
  todos: [],
}

const manageTodo = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TODO':
      return {todos: state.todos.concat(action.payload.text)}

    default:
      return state
  }
}

export default manageTodo