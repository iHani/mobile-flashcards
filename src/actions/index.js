export const SAY_HI = 'SAY_HI';
export const CREATE_DECK = 'CREATE_DECK';

export const sayHi = (name) => ({
  type: SAY_HI,
  message: `Hi ${name}!`
});

export const createDeck = (deckTitle) => ({
  type: CREATE_DECK,
  deckTitle
});
