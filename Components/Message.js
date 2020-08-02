import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import FamilyIcon from "./FamilyIcon";

class Message extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.screen_container}>
				<Text>Message</Text>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	screen_container: {
		flex: 1,
	},
});

export default Message;
