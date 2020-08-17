import React from 'react';
import { Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

class EnlargeShrink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewSize: new Animated.Value(this.getSize()),
    };
  }

  componentDidUpdate() {
    const { viewSize } = this.state;
    Animated.spring(viewSize, {
      toValue: this.getSize(),
      useNativeDriver: false,
    }).start();
  }

  getSize() {
    const { shouldEnlarge } = this.props;
    if (shouldEnlarge) {
      return Dimensions.get('window').width / 2;
    }
    return Dimensions.get('window').width / 2.6;
  }

  render() {
    const { viewSize } = this.state;
    const { children } = this.props;
    return (
      <Animated.View
        style={{
          width: viewSize,
          height: viewSize,
        }}
      >
        {children}
      </Animated.View>
    );
  }
}

EnlargeShrink.propTypes = {
  shouldEnlarge: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default EnlargeShrink;
