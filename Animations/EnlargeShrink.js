import React from 'react';
import { Animated, Dimensions } from 'react-native';

class EnlargeShrink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewSize: new Animated.Value(this._getSize()),
    };
  }

  _getSize() {
    if (this.props.shouldEnlarge) {
      return Dimensions.get('window').width / 2;
    }
    return Dimensions.get('window').width / 2.6;
  }

  componentDidUpdate() {
    Animated.spring(this.state.viewSize, {
      toValue: this._getSize(),
      useNativeDriver: false,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          width: this.state.viewSize,
          height: this.state.viewSize,
        }}>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default EnlargeShrink;
