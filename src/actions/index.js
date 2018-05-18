export const CREATE_DECK = 'CREATE_DECK';
export const NEW_CARD = 'NEW_CARD';
export const NEW_QUIZ_RECORD = 'NEW_QUIZ_RECORD';
export const ENABLE_REMINDER_TOGGLE = 'ENABLE_REMINDER_TOGGLE';
export const QUIZ_TAKEN_TODAY = 'QUIZ_TAKEN_TODAY';

export const createDeck = (deckTitle) => ({
  type: CREATE_DECK,
  deckTitle
});

export const newCard = (card) => ({
  type: NEW_CARD,
  card
});

export const newQuizRecord = (record) => ({
  type: NEW_QUIZ_RECORD,
  record
});

export const enableReminder = (isReminderEnabled) => ({
  type: ENABLE_REMINDER_TOGGLE,
  isReminderEnabled
});

export const quizTaken = (deckTitle) => ({
  type: QUIZ_TAKEN_TODAY,
});
