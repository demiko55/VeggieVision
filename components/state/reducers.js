const imgInitialState = {
  id: '',
};

export const imgReducer = (state = imgInitialState, action) => {
  switch (action.type) {
    case 'SET_DISPLAY':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};