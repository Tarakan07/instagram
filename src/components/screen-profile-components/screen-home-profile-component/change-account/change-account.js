import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import bottomModalHOC from "../../../../hoc/bottom-modal-hoc";

import THEME from "../../../../THEME";

const ChangeAccount = () => {
	const addNewAccount = {
		id: 0,
		img: "",
		title: "Добавление аккаунта",
		choose: false,
	};
	const changeAccountBlock = [
		{
			id: 1,
			img: "4ca4126s-960",
			title: "boriklalala",

			choose: true,
		},
		addNewAccount,
	];

	return (
		<View style={[styles.changeAccount, styles.wrapModal]}>
			{changeAccountBlock.map((el) => {
				return (
					<View key={el.id} style={styles.row}>
						<View style={styles.infoAccount}>
							<View style={styles.infoAccountWrapImg}>
								{el.img.length > 1 ? (
									<Image
										source={require("../../../../../assets/images/4ca4126s-960.jpg")}
										style={styles.infoAccountImage}
									/>
								) : (
									<AntDesign name="pluscircleo" size={45} color="black" />
								)}
							</View>
							<Text style={styles.infoAccountText}>{el.title}</Text>
						</View>
						<View style={styles.chooseAccount}>
							{el.choose ? (
								<MaterialCommunityIcons
									name="record-circle"
									size={24}
									color="#0000FF"
								/>
							) : null}
						</View>
					</View>
				);
			})}
		</View>
	);
};

const styles = StyleSheet.create({
	wrapModal: {
		paddingTop: 10,
		paddingBottom: 13,
	},
	changeAccount: {
		height: 170,
	},
	row: {
		paddingHorizontal: THEME.paddingHorisontal,
		paddingTop: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	infoAccount: {
		flexDirection: "row",
		alignItems: "center",
	},
	infoAccountWrapImg: {
		width: 55,

		alignItems: "center",
	},
	infoAccountImage: {
		width: 50,
		height: 50,
		borderRadius: 50,
		borderWidth: 1,
		borderColor: "#000",
	},
	infoAccountText: {
		fontFamily: THEME.font.InstagramSansRegular,
		fontSize: 16,
		paddingLeft: 10,
	},
});
export default bottomModalHOC(ChangeAccount);
