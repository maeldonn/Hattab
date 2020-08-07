import React from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
	Alert,
} from "react-native";

import FamilyGrid from "./FamilyGrid";
import PanPanAnimation from "../Animations/PanpanAnimation";

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
		Alert.alert("Messages envoyés à toute la famille.", "", [{ text: "OK" }], {
			cancelable: false,
		});
	}

	_displaySendAllButton() {
		return (
			<PanPanAnimation shouldAnim={this.state.shouldAnim}>
				<TouchableOpacity
					style={styles.all_button}
					onPress={() => this._sendMessagetoAll()}>
					<Image
						source={require("../Images/ic_panpan.jpeg")}
						style={styles.image}
					/>
				</TouchableOpacity>
			</PanPanAnimation>
		);
	}
	render() {
		return (
			<View style={styles.container}>
				<FamilyGrid type='message' />
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
		borderColor: "#000000",
		borderWidth: 3,
	},
});

export default Message;
