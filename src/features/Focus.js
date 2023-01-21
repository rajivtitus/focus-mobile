import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";

import { fontSizes, spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import RoundedButton from "../components/RoundedButton";

const Focus = ({ addSubject }) => {
	const [subject, setSubject] = useState(null);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Focus</Text>
			<View style={styles.inputWrapper}>
				<TextInput
					style={styles.textInput}
					label="What would you like to focus on?"
					value={subject}
					onChangeText={setSubject}
				/>
				<View style={styles.btnWrapper}>
					<RoundedButton
						title="+"
						size={50}
						onPress={() => addSubject(subject)}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: spacing.lg,
	},
	title: {
		color: colors.white,
		fontSize: fontSizes.xxl,
		textTransform: "uppercase",
		textAlign: "center",
		fontWeight: "bold",
	},
	inputWrapper: {
		flexDirection: "row",
		padding: spacing.lg,
	},
	textInput: {
		flex: 0.85,
		marginRight: spacing.md,
	},
	btnWrapper: {
		flex: 0.15,
		justifyContent: "center",
	},
});

export default Focus;
