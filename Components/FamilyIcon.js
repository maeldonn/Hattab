import React from "react";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";

class FamilyIcon extends React.Component {
	render() {
		const { image } = this.props;
		return (
			<TouchableOpacity style={styles.container}>
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
