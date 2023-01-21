import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

const FocusHistory = ({ history }) => {
	return (
		<View style={styles.container}>
			{history.length ? (
				<>
					<Text style={styles.title}>Things we've focused on:</Text>
					<FlatList
						data={history}
						renderItem={renderItem}
						style={styles.list}
					/>
				</>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: spacing.md,
	},
	title: {
		fontSize: fontSizes.md,
		fontWeight: "bold",
		color: colors.white,
	},
	item: {
		fontSize: fontSizes.md,
		color: colors.white,
		paddingBottom: spacing.sm,
		textTransform: "capitalize",
	},
	list: {
		padding: spacing.sm,
		marginTop: spacing.sm,
	},
});

export default FocusHistory;
