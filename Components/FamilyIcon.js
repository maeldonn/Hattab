import React from "react";
import {
	StyleSheet,
	Image,
	TouchableOpacity,
	Alert,
	Platform,
	ToastAndroid,
} from "react-native";

import EnlargeShrink from "../Animations/EnlargeShrink";

import SendSMS from "react-native-sms-x";

class FamilyIcon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shouldEnlarge: false,
		};
	}

	_sendMessage() {
		if (Platform.OS === "android") {
			// TODO : Demander permission à l'utilisateur pour android récent
			SendSMS.send(10, this.props.number, "HATTAB ! On mange.", () => {});
			ToastAndroid.show(
				"Message envoyé à " + this.props.name + ".",
				ToastAndroid.LONG
			);
		} else {
			// TODO : Traiter l'envoie de message sur ios
			Alert.alert(
				"Message envoyé à " + this.props.name + ".",
				"",
				[{ text: "OK" }],
				{
					cancelable: false,
				}
			);
		}
	}

	_call() {
		if (Platform.OS === "android") {
			// Traiter les appels sur android
		} else {
			// TODO : Traiter les appels sur ios
		}
	}

	_doAction() {
		this._toggleShouldEnlarge();
		setTimeout(() => {
			this._toggleShouldEnlarge();
		}, 1000);
		switch (this.props.type) {
			case "call":
				this._call();
				break;
			case "message":
				this._sendMessage();
				break;
			default:
				break;
		}
	}

	_toggleShouldEnlarge = () => {
		const shouldEnlarge = this.state.shouldEnlarge;
		if (shouldEnlarge == true) {
			this.setState({ shouldEnlarge: false });
		} else {
			this.setState({ shouldEnlarge: true });
		}
	};

	render() {
		const { image } = this.props;
		return (
			<EnlargeShrink shouldEnlarge={this.state.shouldEnlarge}>
				<TouchableOpacity
					style={styles.container}
					onPress={() => this._doAction()}>
					<Image source={image} style={styles.image} />
				</TouchableOpacity>
			</EnlargeShrink>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	image: {
		flex: 1,
		height: null,
		width: null,
		borderRadius: 100,
		borderColor: "#000000",
		borderWidth: 5,
	},
});

export default FamilyIcon;
