import React from "react";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";

class FamilyIcon extends React.Component {
	_sendMessage() {
		alert("Message envoyé. DEV = " + __DEV__.toString());
	}

	_call() {}

	_doAction() {
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

	render() {
		const { image } = this.props;
		return (
			<TouchableOpacity
				style={styles.container}
				onPress={() => this._doAction()}>
				<Image source={image} style={styles.image} />
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {},
	image: {
		height: Dimensions.get("window").width / 2.6,
		width: Dimensions.get("window").width / 2.6,
		borderRadius: 100,
		borderColor: "#000000",
		borderWidth: 5,
	},
});

export default FamilyIcon;
