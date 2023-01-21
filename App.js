import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";

import { colors } from "./src/utils/colors";
import Focus from "./src/features/Focus";
import Timer from "./src/features/Timer";
import FocusHistory from "./src/features/FocusHistory";

export default function App() {
	const [focusSubject, setFocusSubject] = useState(null);
	const [history, setHistory] = useState([]);

	const onTimerEnd = () => {
		setHistory([...history, focusSubject]);
	};

	return (
		<SafeAreaView style={styles.container}>
			{focusSubject ? (
				<Timer
					focusSubject={focusSubject}
					onTimerEnd={onTimerEnd}
					clearSubject={() => setFocusSubject(null)}
				/>
			) : (
				<>
					<Focus addSubject={setFocusSubject} />
					<FocusHistory history={history} />
				</>
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		backgroundColor: colors.darkBlue,
	},
});
