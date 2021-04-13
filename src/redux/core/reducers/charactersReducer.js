import types from '../actions/types/charactersTypes'

const STATE = {
  characters: {}
}

export default (state = STATE, action) => {
  switch (action.type) {
    case types.SET_CHARACTERS:
      return {
        characters: action.payload.results,
        isLoading: false,
        nextPage: action.payload.page + 1,
        prevPage: action.payload.page > 1 ? action.payload.page - 1 : 1,
      }
    case types.IS_LOADING:
      return { ...state, isLoading: true }
    default:
      return state
  }
}
