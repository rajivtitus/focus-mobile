import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { spacing, fontSizes } from "../utils/sizes";
import { colors } from "../utils/colors";
import Countdown from "../components/Countdown";
import RoundedButton from "../components/RoundedButton";
import Timing from "../components/Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
	1 * ONE_SECOND_IN_MS,
];

const DEFAULT_TIMER = 10;

const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
	useKeepAwake();

	const [isStarted, setIsStarted] = useState(false);
	const [progress, setProgress] = useState(1);
	const [minutes, setMinutes] = useState(DEFAULT_TIMER);

	const onEnd = (reset) => {
		Vibration.vibrate(PATTERN);
		setProgress(1);
		setIsStarted(false);
		setMinutes(DEFAULT_TIMER);
		onTimerEnd();
		reset();
	};

	const onChangeTime = (min) => {
		setMinutes(min);
		setProgress(1);
		setIsStarted(false);
	};

	return (
		<View style={styles.container}>
			<View style={styles.countdownWrapper}>
				<Countdown
					minutes={minutes}
					isPaused={!isStarted}
					onProgress={setProgress}
					onEnd={onEnd}
				/>
				<View style={styles.description}>
					<Text style={styles.title}>Focusing On:</Text>
					<Text style={styles.task}>{focusSubject}</Text>
				</View>
			</View>
			<View style={styles.progress}>
				<ProgressBar
					progress={progress}
					color={colors.progressBar}
					style={{ height: 10 }}
				/>
			</View>
			<View style={styles.timingWrapper}>
				<Timing onChangeTime={onChangeTime} />
			</View>
			<View style={styles.btnWrapper}>
				{isStarted ? (
					<RoundedButton
						title="Pause"
						size={100}
						onPress={() => setIsStarted(false)}
					/>
				) : (
					<RoundedButton
						title="Start"
						size={100}
						onPress={() => setIsStarted(true)}
					/>
				)}
			</View>
			<View style={styles.clearWrapper}>
				<RoundedButton title="clear" size={55} onPress={clearSubject} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: spacing.lg,
	},
	countdownWrapper: {
		flex: 0.45,
		alignItems: "center",
		justifyContent: "center",
	},
	description: {
		paddingTop: spacing.xxl,
	},
	title: {
		fontSize: fontSizes.md,
		color: colors.white,
		fontWeight: "bold",
		textAlign: "center",
	},
	task: {
		fontSize: fontSizes.lg,
		color: colors.white,
		textAlign: "center",
	},
	progress: {
		paddingTop: spacing.lg,
		paddingBottom: spacing.lg,
	},
	timingWrapper: {
		flex: 0.2,
		paddingTop: spacing.md,
	},
	btnWrapper: {
		flex: 0.15,
		alignItems: "center",
		justifyContent: "center",
		paddingBottom: spacing.xl,
	},
	clearWrapper: {
		flex: 0.2,
		justifyContent: "center",
		paddingLeft: spacing.lg,
	},
});

export default Timer;
