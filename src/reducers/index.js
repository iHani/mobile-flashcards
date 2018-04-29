import {
  SAY_HI,
} from '../actions';

const initialState = {
  message: 'EMPTY',
};

export default (state = initialState, action) => {
  switch (action.type) {

    case SAY_HI :
    return {
      ...state,
      message: action.message
    };

      default :
      return state;
    }
  }
