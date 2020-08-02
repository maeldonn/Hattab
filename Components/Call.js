import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import FamilyIcon from "./FamilyIcon";

class Call extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	_call() {}

	render() {
		return (
			<SafeAreaView styles={styles.screen_container}>
				<FamilyIcon
					image={require("../Images/ic_message.png")}
					onPress={this._call}
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	screen_container: {
		flex: 1,
	},
});

export default Call;
