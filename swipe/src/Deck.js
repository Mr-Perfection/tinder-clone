import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_DURATION = 250;

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}

  }

  constructor(props) {
      super(props);

      const position = new Animated.ValueXY();
      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
          position.setValue({ x: gesture.dx, y: gesture.dy });
          // debugger;
          // console.log('gesture ', gesture);
        },
        onPanResponderRelease: (event, gesture) => {
          const dx = gesture.dx;

          if (dx > SWIPE_THRESHOLD) {
            this.forceSwipe('right');
          } else if (dx < -SWIPE_THRESHOLD) {
            this.forceSwipe('left');
          } else {
              this.resetPosition();
          }
        }
      });

      //this.panResponder = panResponder;
      this.state = { panResponder, position, index: 0 };
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const { index } = this.state;
    const item = data[index];

    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2.0, 0, SCREEN_WIDTH * 2.0],
      outputRange: ['-120deg', '0deg', '120deg']
    });
    return {
      ...this.state.position.getLayout(),
      transform: [{ rotate }]
    };
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_DURATION
    }).start(() => { this.onSwipeComplete(direction); });
  }

  forceSwipeLeft() {
    Animated.timing(this.state.position, {
      toValue: { x: -SCREEN_WIDTH, y: 0 },
      duration: SWIPE_DURATION
    }).start();
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  renderCards() {
    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }

    return this.props.data.map((item, i) => {
      if (i < this.state.index) { return null; }
      if (i === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }

      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <Animated.View>
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;
