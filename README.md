# tinder-clone
Swipe cards like Tinder!
In this project, I will be demonstrating my understanding with animations in react-native.

# Not yet defined
React Native Application

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
Layout Animation:
* easy to Setup
* not much control

Animated:
* more complicated setup
* handle gesture animations

```js
import { Animated } from 'react-native';

Animated.Value.Animated // What's the current position of the element being animated?
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

### Animated Component Lifecycle and Hierarchy
![alt text](demo/animatedComponentLifeCycle.png "Hierarchy and Lifecycle")



https://www.udemy.com/react-native-advanced/learn/v4/t/lecture/6845196?start=0
