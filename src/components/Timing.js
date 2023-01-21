import React from "react";
import { View, StyleSheet } from "react-native";

import RoundedButton from "./RoundedButton";

const OPTIONS = [10, 20, 30];

const Timing = ({ onChangeTime }) => {
	return (
		<View style={styles.btnWrapper}>
			{OPTIONS.map((option, index) => (
				<RoundedButton
					key={index}
					size={75}
					title={option}
					onPress={() => onChangeTime(option)}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	btnWrapper: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},
});

export default Timing;
