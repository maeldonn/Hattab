import React from 'react';
import { Animated, Dimensions, StyleSheet, Easing } from 'react-native';
import PropTypes from 'prop-types';

class PanpanAnimation extends React.Component {
  // TODO : Faire fonctionner correctement l'animation
  constructor(props) {
    super(props);
    this.state = {
      viewSize: new Animated.Value(this.getSize()),
      spinValue: new Animated.Value(0),
    };
    const { spinValue } = this.state;
    this.spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  }

  componentDidUpdate() {
    const { viewSize, spinValue } = this.state;
    Animated.parallel([
      Animated.spring(viewSize, {
        toValue: this.getSize(),
        useNativeDriver: false,
      }),
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start();
    this.spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
  }

  getSize() {
    const { shouldAnim } = this.props;
    if (shouldAnim) {
      return Dimensions.get('window').width / 3;
    }
    return Dimensions.get('window').width / 5;
  }

  render() {
    const { viewSize } = this.state;
    const { children } = this.props;
    return (
      <Animated.View
        style={[
          {
            width: viewSize,
            height: viewSize,
          },
          { transform: [{ rotate: this.spin }] },
          styles.container,
        ]}
      >
        {children}
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

PanpanAnimation.propTypes = {
  shouldAnim: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default PanpanAnimation;
