import {
  SAY_HI,
  CREATE_DECK,
  NEW_CARD,
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
  records: { }
};

export default (state = initialState, action) => {
  const { type, deckTitle, card, record } = action;
  const { decks, records } = state;

  switch (type) {

    case CREATE_DECK :
    return {
      ...state,
      decks: { ...decks, [deckTitle]: { title: deckTitle, questions: [] } }
    };

    case NEW_CARD :
    const { title, question, answer } = card;
    return {
      ...state,
      decks: {
        ...decks,
        [title]: {
          title,
          questions: state.decks[title].questions.concat({ question, answer }),
        }
      }
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
