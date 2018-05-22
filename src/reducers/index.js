import {
  CREATE_DECK,
  NEW_CARD,
  NEW_QUIZ_RECORD,
  ENABLE_REMINDER_TOGGLE,
  QUIZ_TAKEN_TODAY,
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
    '5/16/2018': {
      'React': 33,
      'JavaScript': 78
    },
    '5/17/2018': {
      'React': 75,
    },
    '5/20/2018': {
      'JavaScript': 50
    },
    '5/22/2018': {
      'React': 100,
      'JavaScript': 100
    }
  },
  isReminderEnabled: true,
  quizTakenToday: false,
};

export default (state = initialState, action) => {
  const { type, deckTitle, card, record, isReminderEnabled } = action;
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
          questions: state.decks[title].questions.concat({ question, answer })
        }
      }
    };

    case NEW_QUIZ_RECORD :
    // day object has only one key, the date in this format m/d/y
    const day = Object.keys(record)[0];
    const { deck, score } = record[day];
    const thatDay = records[day] || {};
    return {
      ...state,
      records: {
        ...records,
        [day]: Object.assign(thatDay, { [deck]: score })
      }
    };

    case ENABLE_REMINDER_TOGGLE :
    return {
      ...state,
      isReminderEnabled
    };

    case QUIZ_TAKEN_TODAY :
    return {
      ...state,
      quizTakenToday: true
    };

    default :
    return state;
  }
}
