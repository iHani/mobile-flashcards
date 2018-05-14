import React, { Component } from 'react';
import { Button, Text, KeyboardAvoidingView, Keyboard, StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import { sayHi, createDeck } from '../actions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class CreateDeck extends Component {

  state = {
    deckTitle: '',
  }

  handleCreateDeck = () => {
    const deck = this.state.deckTitle.trim();
    if (deck) {
      //TODO: check if deck exists before creating it
      this.props.creatNeweDeck(deck);
      this.props.navigation.navigate('DeckView', { deck });
      Keyboard.dismiss();
      this.setState({ deckTitle: '' });
    }
  }

  render() {
    const { decks } = this.props.state;
    const { navigate } = this.props.navigation;

    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={styles.container}>
        <View>
          {/* <Text>{JSON.stringify(this.props.state, null, 2)}</Text> */}

          <Text style={styles.headerText}>Create New Deck</Text>

          <TextInput
            value={this.state.deckTitle}
            style={styles.textInput}
            onChangeText={deckTitle => this.setState({ deckTitle })}
            placeholder='Deck title...'
            autoFocus
          />

          <TouchableOpacity
            style={styles.btnCreateDeck}
            onPress={this.handleCreateDeck}
            underlayColor='#fff'>
            <Text style={styles.createDeckText}>Create Deck</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingLeft: 40,
    color: '#07587a'
  },
  textInput: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#0692cc',
    borderRadius: 5,
    width: 'auto',
    fontSize: 25,
    borderColor: '#07587a',
    borderWidth: 2,
    minWidth: 300,
  },
  btnCreateDeck: {
    marginTop: 30,
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 220,
    backgroundColor: '#07587a',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#07587a',
    shadowColor: '#c9dce5',
    shadowOpacity: 98,
    shadowRadius: 5,
    alignItems: 'center'
  },
  createDeckText: {
    color: '#d3f2ff',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

const mapStateToProps = (state, ownProps) => ({
  state,
  ownProps,
  message: state.message
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  creatNeweDeck: (title) => dispatch(createDeck(title)),
  navigate: () => ownProps.navigation.navigate
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeck);
