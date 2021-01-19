const initialState= false

export const themeReducer= ( state= initialState, action)=> {
  switch(action.type) {
    case 'change_theme':
    return action.payload
  }
  return state
}
