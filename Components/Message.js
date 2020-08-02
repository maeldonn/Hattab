import React from "react";
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image,
	Dimensions,
} from "react-native";

import FamilyGrid from "./FamilyGrid";

class Message extends React.Component {
	_displaySendAllButton() {
		return (
			<TouchableOpacity style={styles.all_button}>
				<Image
					source={require("../Images/ic_panpan.jpeg")}
					style={styles.image}
				/>
			</TouchableOpacity>
		);
	}
	render() {
		return (
			<View style={styles.container}>
				<FamilyGrid />
				{this._displaySendAllButton()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	all_button: {
		position: "absolute",
		top: Dimensions.get("window").height / 2,
		alignSelf: "center",
	},
	image: {
		height: Dimensions.get("window").width / 5,
		width: Dimensions.get("window").width / 5,
		borderRadius: 100,
		borderColor: "#000000",
		borderWidth: 3,
	},
});

export default Message;
