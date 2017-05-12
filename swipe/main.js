import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/13924904_1095808987165736_1117288878513681805_n.jpg?oh=f204b44ced91a24ee9b8eaa8cc3d1088&oe=59C2F016' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

class App extends React.Component {
  renderCard(item) {
      return (
        <Card
          key={item.id}
          title={item.text}
          image={{ uri: item.uri }}
        >
          <Text style={{ marginBottom: 10 }}>
            I can customize the card further
          </Text>
          <Button
            icon={{ name: 'code' }}
            backgroundColor="#0431D4"
            title="View Now"
          />
        </Card>

      );
  }

  renderNoMoreCards() {
      return (
        <Card title='All Done!'>
          <Text style={{ marginBottom: 10 }}>
            There is no more content.
          </Text>
          <Button
            backgroundColor='#0431D4'
            title='Get more!'
          />
        </Card>
      );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'

  },
});

Expo.registerRootComponent(App);
