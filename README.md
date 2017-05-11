# tinder-clone
Swipe cards like Tinder!
In this React Native application, I will be demonstrating my understanding with animations & gesture system (panResponder) in react-native.


### Setup
```
$ npm install --save-dev eslint-config-rallycoding
$ npm install --save react-redux redux
$ npm install --save firebase
```

Expo XDE
```
    ------ LOG OUTPUTS----------
    |                           |
expo XDE -> JS Packager -> Expo App (Downloaded from App Store )
                ^
                |
                App code
Extra Device API
Easy push notification
Easy on device testing
Common extra components
```
### Animations system in React Native

**Layout Animation:**
* easy to Setup
* not much control

**Animated:**
* more complicated setup
* handle gesture animations

**[AnimatedValueXY](http://facebook.github.io/react-native/releases/0.44/docs/animated.html#animatedvaluexy)** to handle pan gestures.

```js
import { Animated } from 'react-native';

Animated.Value // What's the current position of the element being animated?
Animated.Types.Spring // how is the animation changing?
Animated.Components.View // Apply the animation's current position to an actual Component

// 1. Where is the item right now? Animated.ValueXY
this.position = new Animated.ValueXY(0,0);
// 2. Where is the item moving to? Animated.Spring
Animated.spring(this.position, {
  toValue: { x: 200, y: 500 }
}).start();
// 3. Which element are we moving? Animated.View
<Animated.View style={this.position.getLayout()}>
  <View style={styles.ball} />
</Animated.View>
```

### React Native Elements
Download it at [link](https://github.com/react-native-training/react-native-elements)
```bash
npm install react-native-elements
```

### Pan Responder (aka Gesture System)
![alt text](demo/panResponderSystem.png "Pan Responder System")

1) what are we touching?
2) what component handles touch?
3) how is the gesture changing?


### Animated Component Lifecycle and Hierarchy
![alt text](demo/animatedComponentLifeCycle.png "Hierarchy and Lifecycle")


### Swipe Deck Feature
![alt text](demo/swipeDeck.png "swipe deck")

Prop  | Type  | Purpose
----- | ----- | -------
`renderCard`  |  function  |  Returns JSX to show inside of a card
`renderNoMoreCards`  |  function  |  Returns JSX when no more cards exist
`data`  |  array of objects  |  List of records to use for cards
`onSwpieRight` or `onSwipeLeft`  |  function  |  Called when user swipes left or right on an item

![alt text](demo/swipeDeckProps.png "swipe deck props")


### Testing
Using debugger in `Deck.js`
```js
const panResponder = PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onPanResponderMove: (event, gesture) => {
    debugger;
    console.log('gesture ', gesture);
  },
  onPanResponderRelease: () => {}
});
```
The code above makes use of `debugger`. The program will stop at the breakpoint where `debugger` is written.
![alt text](demo/debugger.png "debugger")

Special thanks to Stephen Grider
https://www.udemy.com/react-native-advanced/learn/v4/t/lecture/6845196?start=0
