import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ScreenOrientation from "expo-screen-orientation";

import THEME from "../../../../THEME/index";
const SettingsProfile = () => {
	const [orient, setOrient] = useState("portrait");
	const changeScreen = useCallback(async () => {
		await ScreenOrientation.getOrientationAsync().then((screen) =>
			screen < 3 ? setOrient("portrait") : setOrient("landscape")
		);
	});
	ScreenOrientation.addOrientationChangeListener(changeScreen);
	return (
		<View
			style={[
				styles.container,
				{
					justifyContent: orient == "portrait" ? "space-between" : "flex-start",
				},
			]}
		>
			<View
				style={[
					styles.buttonEdit,
					styles.buttonSetting,
					{ width: orient == "portrait" ? "45%" : "auto" },
				]}
			>
				<Pressable>
					<Text numberOfLines={1} style={styles.buttonText}>
						Редактировать профиль
					</Text>
				</Pressable>
			</View>
			<View
				style={[
					styles.buttonShare,
					styles.buttonSetting,
					{ width: orient == "portrait" ? "45%" : "auto" },
				]}
			>
				<Pressable>
					<Text numberOfLines={1} style={styles.buttonText}>
						Поделиться профилем
					</Text>
				</Pressable>
			</View>
			<View style={styles.buttonInterestingPeople}>
				<Pressable>
					<Feather name="user-plus" size={18} color="black" />
				</Pressable>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: THEME.paddingHorisontal,

		alignContent: "center",
		flexDirection: "row",
		paddingBottom: 15,
	},
	buttonSetting: {
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#000",
		borderRadius: 5,
		paddingLeft: 7,
		paddingRight: 7,

		paddingVertical: 2,
		marginRight: 3,
		// width: "45%",
	},

	buttonText: {
		fontFamily: THEME.font.InstagramSansMedium,
		fontSize: 14,
	},
	buttonInterestingPeople: {
		justifyContent: "center",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "#000",
		paddingLeft: 3,
		paddingRight: 3,
		borderRadius: 5,
	},
});
export default SettingsProfile;
