const initialState = {
  numbers: ''
};

const reducer = (state = initialState, action) => {
  if (action.type === 'DELETE') {
    return {...state, numbers: ''};
  }
  if (action.type === 'ADD') {
    return {...state, numbers: state.numbers + action.numbers};
  }
  if (action.type === 'RESULT') {
    // eslint-disable-next-line no-eval
    let result = eval(state.numbers);
    return {...state, numbers: result};
  }
  return state;
};

export default reducer;