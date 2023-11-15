const reducer = (initialState, action) => {

    switch (action.type) {
      case "CHANGE_CHECK":
        return{
          ...initialState,
          add_subtract: action.add_subtract
        }
      case "CHANGE_NUMBER":
        return {
          ...initialState,
          number: action.number
        }
      case "ADD":
        return {
          ...initialState,
          count: action.count+action.number

        }

      case "SUBTRACT":
        return {
          ...initialState,
          count: (action.count - action.number)
        }
      case "RESTART":
          return {
            initialState
          }

      default:
        initialState;
    }

}

export default reducer
