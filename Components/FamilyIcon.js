import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

class FamilyIcon extends React.Component {
	render() {
		const { image, onPress } = this.props;
		return (
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<Image source={image} style={styles.image} />
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: "blue", width: 500, height: 100 },
	image: {},
});

export default FamilyIcon;
