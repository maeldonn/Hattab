import React from 'react';
import { Animated, Dimensions, StyleSheet, Easing } from 'react-native';

class EnlargeShrink extends React.Component {
  // TODO : Faire fonctionner correctement l'animation
  constructor(props) {
    super(props);
    this.state = {
      viewSize: new Animated.Value(this._getSize()),
      spinValue: new Animated.Value(0),
    };
    this.spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  }

  _getSize() {
    if (this.props.shouldAnim) {
      return Dimensions.get('window').width / 3;
    }
    return Dimensions.get('window').width / 5;
  }

  componentDidUpdate() {
    Animated.parallel([
      Animated.spring(this.state.viewSize, {
        toValue: this._getSize(),
        useNativeDriver: false,
      }),
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start();
    this.spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  }

  render() {
    return (
      <Animated.View
        style={[
          {
            width: this.state.viewSize,
            height: this.state.viewSize,
          },
          { transform: [{ rotate: this.spin }] },
          styles.container,
        ]}>
        {this.props.children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Dimensions.get('window').height / 1.9, // TODO : Bien centrer Panpan
    alignSelf: 'center',
  },
});

export default EnlargeShrink;
