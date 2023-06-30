import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import THEME from "../../../../THEME";
const AboutAccount = () => {
	const infoAccount = [
		{ name: "Публикации", count: "13" },
		{ name: "Подписчики", count: "200" },
		{ name: "Подписки", count: "129" },
	];

	return (
		<View style={styles.container}>
			<View style={styles.leftBlock}>
				<View style={styles.leftBlockImage}>
					<Image
						style={styles.profileImage}
						alt="profile"
						source={require("../../../../../assets/images/4ca4126s-960.jpg")}
					/>
				</View>
				<Text style={styles.profileName}>Борик</Text>
			</View>
			<View style={styles.rightBlock}>
				{infoAccount.map((elem, index) => {
					return (
						<View key={index} style={styles.rightBlockInfoAccount}>
							<Text style={styles.infoAccountCount}>{elem.count}</Text>
							<Text style={styles.infoAccountDescr}>{elem.name}</Text>
						</View>
					);
				})}
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		paddingHorizontal: THEME.paddingHorisontal,
		paddingVertical: 20,

		flexDirection: "row",
		alignContent: "flex-start",
		justifyContent: "space-between",
	},
	leftBlock: {},
	leftBlockImage: {},
	profileImage: {
		borderColor: "#000",

		borderWidth: 1,
		width: 80,
		height: 80,
		borderRadius: 50,
	},
	profileName: {
		fontSize: 14,
		fontFamily: THEME.font.InstagramSansMedium,
	},
	rightBlock: {
		marginRight: 15,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rightBlockInfoAccount: {
		marginLeft: 8,
		paddingTop: "8%",
		alignItems: "center",
	},
	infoAccountCount: {
		fontSize: 20,
		fontFamily: THEME.font.InstagramSansBold,
	},
	infoAccountDescr: {
		fontSize: 15,
		fontFamily: THEME.font.InstagramSansRegular,
	},
});
export default AboutAccount;
