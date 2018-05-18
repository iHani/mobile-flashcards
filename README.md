# Mobile Flashcards App

Organize your flashcards with decks and cards, and keep track of your studying progress.

## Create React App

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app) using [Redux](https://redux.js.org/) as a state container.

### Demo

Test the app using [expo](https://expo.io) tool, go to ``exp://su-zhh.haniyahya.mobile-flashcards.exp.direct:80)``

## Getting Started
Clone this repo
```sh
git clone https://github.com/iHani/mobile-flashcards.git
cd mobile-flashcards
```

Then run:

```sh
npm install
npm start
```

or

```sh
yarn install
yarn start
```

You should get a QR code to scan and go to the URL where you app is running, or you can just copy the given URL.

This app was tested on IOS device only, styling for Android is WIP.

The app store a record of each quiz taken in this format:

```sh
'5/15/2018': {
  'ReactNative': 98
}
```

Where 'ReactNative' is the deck studied and 98 is the score of the last quiz taken at that day. Yet, the Progress view is also a WIP, and does not reflect the actual dataset from the store.

## What You're Getting

```sh
├── App.js # Entry point of the app.
├── app.json
├── CONTRIBUTING.md
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── README.md - This file.
└── src
    ├── actions
    │   └── index.js # All action generators.
    ├── Components # All application components.
    │   ├── ConnectedToRedux.js #boilerplate
    │   ├── CreateCard.js
    │   ├── CreateDeck.js
    │   ├── DeckList.js
    │   ├── DeckView.js
    │   ├── index.js
    │   ├── Progress.js # WIP
    │   ├── Quiz.js
    │   ├── QuizResult.js
    │   └── Reminder.js
    ├── reducers
    │   └── index.js # All action function reducers.
    └── utils # Utilities and BlogAPI.js.
        └── index.js # helper functions (eg. Notifications).
```

## Contributing

This repository is an assignment project for learning React Native only. Therefore, we most likely will not accept pull requests.

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
