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
  records: {
    '5/15/2018': {
      HTML: 888,
    }
  }
};

export default (state = initialState, action) => {
  const { type, deckTitle, record } = action;
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
    const day = Object.keys(record)[0];
    const { deck, score } = record[day];
    const thatDay = records[day] || {};

    return {
      ...state,
      records: {
        ...records,
        [day]: Object.assign(thatDay, { [deck]: score })
      },
    };

    default :
    return state;
  }
}
