import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Alert,
  Platform,
  ToastAndroid,
} from 'react-native';
import SendSMS from 'react-native-sms-x';
import { NUM1, NUM2, NUM3, NUM4 } from 'react-native-dotenv';

import FamilyGrid from './FamilyGrid';
import PanPanAnimation from '../Animations/PanpanAnimation';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldAnim: false,
    };
  }

  toggleShouldAnim = () => {
    const { shouldAnim } = this.state;
    if (shouldAnim === true) {
      this.setState({ shouldAnim: false });
    } else {
      this.setState({ shouldAnim: true });
    }
  };

  sendMessagetoAll() {
    this.toggleShouldAnim();
    setTimeout(() => {
      this.toggleShouldAnim();
    }, 1000);
    if (Platform.OS === 'android') {
      // TODO : Demander permission à l'utilisateur pour android récent
      SendSMS.send(1, NUM1, 'HATTAB ! On mange.', () => {});
      SendSMS.send(2, NUM2, 'HATTAB ! On mange.', () => {});
      SendSMS.send(3, NUM3, 'HATTAB ! On mange.', () => {});
      SendSMS.send(4, NUM4, 'HATTAB ! On mange.', () => {});
      ToastAndroid.show(
        'Messages envoyés à toute la famille.',
        ToastAndroid.LONG
      );
    } else {
      // TODO : Traiter l'envoie de message sur ios
      Alert.alert(
        'Messages envoyés à toute la famille.',
        '',
        [{ text: 'OK' }],
        {
          cancelable: false,
        }
      );
    }
  }

  displaySendAllButton() {
    const { shouldAnim } = this.state;
    return (
      <PanPanAnimation shouldAnim={shouldAnim}>
        <TouchableOpacity
          style={styles.all_button}
          onPress={() => this.sendMessagetoAll()}
        >
          <Image
            source={require('../Images/ic_user.png')} // Replace path
            style={styles.image}
          />
        </TouchableOpacity>
      </PanPanAnimation>
    );
  }

  render() {
    // TODO : Passer le composant qui s'anime au premier plan
    return (
      <View style={styles.container}>
        <FamilyGrid type="message" />
        {this.displaySendAllButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  all_button: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 100,
    borderColor: '#000000',
    borderWidth: 3,
  },
});

export default Message;
