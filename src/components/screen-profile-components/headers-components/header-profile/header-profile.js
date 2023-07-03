import React, { useRef } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import {
	Feather,
	Octicons,
	MaterialIcons,
	SimpleLineIcons,
} from "@expo/vector-icons";

import THEME from "../../../../THEME";
const HeaderProfile = ({ navigation, modalComponent, visibleModal }) => {
	const toAboutProfile = () => {
		navigation.navigate("AboutProfile");
	};
	const modalTitle = {
		changeAccount: "changeAccount",
		createPost: "createPost",
		settingsAccount: "settingsAccount",
	};
	return (
		<View style={styles.container}>
			<View style={styles.leftBlock}>
				<View style={styles.aboutAccount}>
					<Pressable style={styles.aboutAccountButton} onPress={toAboutProfile}>
						<Feather
							style={styles.aboutAccountLock}
							name="lock"
							size={12}
							color="black"
						/>
						<Text style={styles.aboutAccountText} includeFontPadding={true}>
							boriklalala
						</Text>
					</Pressable>
				</View>
				<View style={styles.changeAccount}>
					<Pressable
						style={styles.changeAccountButton}
						onPress={() => modalComponent(modalTitle.changeAccount)}
					>
						<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
					</Pressable>
				</View>
			</View>
			<View style={styles.rightBlock}>
				<View style={styles.createAction}>
					<Pressable onPress={() => modalComponent(modalTitle.createPost)}>
						<Octicons name="diff-added" size={24} color="black" />
					</Pressable>
				</View>
				<View style={styles.settingsAccount}>
					<Pressable>
						<SimpleLineIcons name="menu" size={24} color="black" />
					</Pressable>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		height: 35,
		width: "100%",
		flexDirection: "row",
		display: "flex",
		justifyContent: "space-between",

		alignItems: "center",
		backgroundColor: "#fff",
		paddingHorizontal: THEME.paddingHorisontal,
	},
	leftBlock: {
		flexDirection: "row",
	},
	aboutAccount: {},
	aboutAccountButton: {
		flexDirection: "row",
		alignItems: "center",
	},
	aboutAccountLock: {
		paddingTop: 2,
	},
	aboutAccountText: {
		fontFamily: THEME.font.InstagramSansBold,
		marginLeft: 6,
		fontSize: 24,
		textAlignVertical: "center",
	},
	changeAccount: {
		flexDirection: "row",
		alignItems: "center",
	},

	rightBlock: {
		flexDirection: "row",
		marginRight: 15,
		width: "15%",
		justifyContent: "space-between",
	},
});
export default HeaderProfile;
