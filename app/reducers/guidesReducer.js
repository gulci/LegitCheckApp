const initialState = {
  items: null,
};

const guides = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {

    case 'SET_GUIDES': {
      newState.items = action.data;
      return newState;
    }
    default: {
      return state;
    }
  }
};

module.exports = guides;
