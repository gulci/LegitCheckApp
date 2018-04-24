const initialState = {
  items: [],
  varieties: [],
  tells: [],
};

const guides = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'SET_GUIDES_ITEMS': {
      newState.items = action.data;
      return newState;
    }
    case 'SET_GUIDES_VARIETIES': {
      newState.varieties = action.data;
      return newState;
    }
    case 'SET_GUIDES_TELLS': {
      newState.varieties = action.data;
      return newState;
    }
    default: {
      return state;
    }
  }
};

module.exports = guides;
