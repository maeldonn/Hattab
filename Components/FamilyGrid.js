import React from "react";
import {
	StyleSheet,
	View,
	Image,
	SafeAreaView,
	Dimensions,
} from "react-native";

import FamilyIcon from "./FamilyIcon";

class FamilyGrid extends React.Component {
	render() {
		const { type } = this.props;
		return (
			<SafeAreaView style={styles.main_container}>
				<View style={styles.logo_container}>
					<Image
						source={require("../Images/ic_logo.png")}
						style={styles.logo}
					/>
				</View>
				<View style={styles.grid}>
					<View style={styles.first_row}>
						<FamilyIcon
							image={require("../Images/ic_mael.jpeg")}
							number='0686045973'
							type={type}
						/>
						<FamilyIcon
							image={require("../Images/ic_nolwenn.jpeg")}
							number='0786928037'
							type={type}
						/>
					</View>
					<View style={styles.second_row}>
						<FamilyIcon
							image={require("../Images/ic_armel.jpeg")}
							number='0640187857'
							type={type}
						/>
						<FamilyIcon
							image={require("../Images/ic_patrick.jpeg")}
							number='0684506138'
							type={type}
						/>
					</View>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	main_container: { flex: 1 },
	logo_container: { flex: 1, alignItems: "center" },
	logo: {
		width: Dimensions.get("window").width - 20,
		height: Dimensions.get("window").height / 5,
		marginTop: 10,
		resizeMode: "contain",
	},
	grid: { flex: 4, justifyContent: "space-around" },
	first_row: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	second_row: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
});

export default FamilyGrid;
