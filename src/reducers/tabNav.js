
const INITIAL_STATE = {
  current: 0,
}

export default function changeNav (state = INITIAL_STATE, action,) {

  return {
    ...state,
    current: action.current || 0
  }
}

