import {
  SAY_HI,
  CREATE_DECK,
  NEW_QUIZ_RECORD,
} from '../actions';

const initialState = {
  decks: {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  },
  records: {}
};

export default (state = initialState, action) => {
  const { type, deckTitle, score } = action;
  const { decks, records } = state;

  switch (type) {

    case SAY_HI :
    return {
      ...state,
      message: action.message,
    };

    case CREATE_DECK :
    return {
      ...state,
      decks: { ...decks, [deckTitle]: { title: deckTitle, questions: [] } }
    };

    case NEW_QUIZ_RECORD :
    console.log('NEW_QUIZ_RECORD', score);
    return {
      ...state,
      records: { ...records, score }
    };

    default :
    return state;
  }
}
