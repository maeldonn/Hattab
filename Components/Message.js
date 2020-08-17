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

import FamilyGrid from './FamilyGrid';
import PanPanAnimation from '../Animations/PanpanAnimation';

import SendSMS from 'react-native-sms-x';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldAnim: false,
        };
    }

    _toggleShouldAnim = () => {
        const shouldAnim = this.state.shouldAnim;
        if (shouldAnim == true) {
            this.setState({ shouldAnim: false });
        } else {
            this.setState({ shouldAnim: true });
        }
    };

    _sendMessagetoAll() {
        this._toggleShouldAnim();
        setTimeout(() => {
            this._toggleShouldAnim();
        }, 1000);
        if (Platform.OS === 'android') {
            // TODO : Demander permission à l'utilisateur pour android récent
            SendSMS.send(1, '0686045973', 'HATTAB ! On mange.', () => {});
            SendSMS.send(2, '0786928037', 'HATTAB ! On mange.', () => {});
            SendSMS.send(3, '0640187857', 'HATTAB ! On mange.', () => {});
            SendSMS.send(4, '0684506138', 'HATTAB ! On mange.', () => {});
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

    _displaySendAllButton() {
        return (
            <PanPanAnimation shouldAnim={this.state.shouldAnim}>
                <TouchableOpacity
                    style={styles.all_button}
                    onPress={() => this._sendMessagetoAll()}>
                    <Image
                        source={require('../Images/ic_panpan.jpeg')}
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
                {this._displaySendAllButton()}
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
