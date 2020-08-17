import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  ToastAndroid,
} from 'react-native';

import PropTypes from 'prop-types';

import SendSMS from 'react-native-sms-x';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
import EnlargeShrink from '../Animations/EnlargeShrink';

class FamilyIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldEnlarge: false,
    };
  }

  toggleShouldEnlarge = () => {
    const { shouldEnlarge } = this.state;
    if (shouldEnlarge === true) {
      this.setState({ shouldEnlarge: false });
    } else {
      this.setState({ shouldEnlarge: true });
    }
  };

  doAction() {
    const { type } = this.props;
    this.toggleShouldEnlarge();
    setTimeout(() => {
      this.toggleShouldEnlarge();
    }, 1000);
    switch (type) {
      case 'call':
        this.call();
        break;
      case 'message':
        this.sendMessage();
        break;
      default:
        break;
    }
  }

  call() {
    const { number } = this.props;
    if (Platform.OS === 'android') {
      RNImmediatePhoneCall.immediatePhoneCall(number);
    } else {
      // TODO : Traiter les appels sur ios
    }
  }

  sendMessage() {
    const { number, name } = this.props;
    if (Platform.OS === 'android') {
      // TODO : Demander permission à l'utilisateur pour android récent
      SendSMS.send(5, number, 'HATTAB ! On mange.', () => {});
      ToastAndroid.show(`Message envoyé à ${name}.`, ToastAndroid.LONG);
    } else {
      // TODO : Traiter l'envoie de message sur ios
      Alert.alert(`Message envoyé à ${name}.`, '', [{ text: 'OK' }], {
        cancelable: false,
      });
    }
  }

  render() {
    const { image } = this.props;
    const { shouldEnlarge } = this.state;
    return (
      <EnlargeShrink shouldEnlarge={shouldEnlarge}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.doAction()}
        >
          <Image source={image} style={styles.image} />
        </TouchableOpacity>
      </EnlargeShrink>
    );
  }
}

FamilyIcon.propTypes = {
  image: PropTypes.number.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 100,
    borderColor: '#000000',
    borderWidth: 5,
  },
});

export default FamilyIcon;
