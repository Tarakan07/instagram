import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Pressable,
	Linking,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import THEME from "../../../../THEME";

const InformationAboutAccount = () => {
	return (
		<View style={styles.container}>
			<View style={styles.profileBlock}>
				<Image
					style={styles.imageProfile}
					source={require("../../../../../assets/images/4ca4126s-960.jpg")}
				/>
				<Text style={styles.nameProfile}>boriklalala</Text>
				<Text style={styles.description}>
					Чтобы обеспечить подлинность информации в сообществе, мы отображаем
					сведения об аккаунтах в Instgram. Для их просмотра пользователи могут
					нажать на *** у вас в профиле и выбрать раздел "Об этом аккаунте".{" "}
					<Text
						onPress={() => console.log("sss")}
						style={styles.descriptionLink}
					>
						Причины, почему эта информация важна.
					</Text>
				</Text>
			</View>
			<View style={styles.registrationAccount}>
				<View style={styles.blockCalendar}>
					<MaterialCommunityIcons
						name="calendar-month-outline"
						size={28}
						color="black"
					/>
				</View>
				<View style={styles.blockInfo}>
					<Text style={styles.dateTitle}>Дата регистрации</Text>
					<Text style={styles.date}>июня 2016</Text>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: THEME.paddingHorisontal,

		alignContent: "center",
	},
	profileBlock: {
		alignItems: "center",
	},
	imageProfile: {
		marginTop: 20,
		borderRadius: 50,
		width: 80,
		height: 80,
	},
	nameProfile: {
		marginTop: 10,
		fontFamily: THEME.font.InstagramSansMedium,
		fontSize: 18,
	},
	description: {
		textAlign: "center",
		width: "93%",
		marginTop: 10,
		fontFamily: THEME.font.InstagramSansRegular,
		fontSize: 13,
		color: "gray",
	},

	descriptionLink: {
		color: "#000",
	},
	registrationAccount: {
		marginTop: 30,
		flexDirection: "row",
		alignItems: "center",
	},
	blockCalendar: {
		marginRight: 10,
	},
	dateTitle: {
		fontFamily: THEME.font.InstagramSansRegular,
		fontSize: 16,
	},
	date: {
		fontFamily: THEME.font.InstagramSansRegular,
		fontSize: 14,
		color: "gray",
	},
});
export default InformationAboutAccount;
