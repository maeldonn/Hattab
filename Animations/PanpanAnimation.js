import React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";

class EnlargeShrink extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			viewSize: new Animated.Value(this._getSize()),
		};
	}

	_getSize() {
		if (this.props.shouldAnim) {
			return Dimensions.get("window").width / 3;
		}
		return Dimensions.get("window").width / 5;
	}

	componentDidUpdate() {
		Animated.spring(this.state.viewSize, {
			toValue: this._getSize(),
			useNativeDriver: false,
		}).start();
	}

	render() {
		return (
			<Animated.View
				style={[
					{
						width: this.state.viewSize,
						height: this.state.viewSize,
					},
					styles.container,
				]}>
				{this.props.children}
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		top: Dimensions.get("window").height / 2,
		alignSelf: "center",
	},
});

export default EnlargeShrink;
