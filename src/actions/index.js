export const SAY_HI = 'SAY_HI';
export const CREATE_DECK = 'CREATE_DECK';
export const NEW_CARD = 'NEW_CARD';
export const NEW_QUIZ_RECORD = 'NEW_QUIZ_RECORD';

export const sayHi = (name) => ({
  type: SAY_HI,
  message: `Hi ${name}!`
});

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
