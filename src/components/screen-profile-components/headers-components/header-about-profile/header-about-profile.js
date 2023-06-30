import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import THEME from "../../../../THEME";
const HeaderAboutProfile = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.back}>
				<Pressable onPress={navigation.goBack}>
					<AntDesign name="arrowleft" size={24} color="black" />
				</Pressable>
			</View>

			<View style={styles.titleBlock}>
				<Text style={styles.title}>Информация об аккаунте</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		alignContent: "center",
		flexDirection: "row",
		paddingHorizontal: THEME.paddingHorisontal,
		width: "100%",
	},
	back: {
		width: "20%",
	},
	titleBlock: {
		width: "80%",
	},
	title: {
		textAlign: "left",
		fontSize: 20,
		fontFamily: THEME.font.InstagramSansBold,
	},
});
export default HeaderAboutProfile;
