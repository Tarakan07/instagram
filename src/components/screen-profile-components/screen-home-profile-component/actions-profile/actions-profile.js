import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
	AntDesign,
	Ionicons,
	Entypo,
	Feather,
	Octicons,
	FontAwesome,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import bottomModalHOC from "../../../../hoc/bottom-modal-hoc";
import ModalItem from "../modal-items";
const ActionsProfile = () => {
	const data = [
		{
			id: 1,
			title: "Настройки и конфиденциальность",
			icon: <AntDesign name="setting" size={24} color="black" />,
		},
		{
			id: 2,
			title: "Ваши действия",
			icon: <Ionicons name="timer-outline" size={24} color="black" />,
		},
		{
			id: 3,
			title: "Архив",
			icon: <Entypo name="back-in-time" size={24} color="black" />,
		},
		{
			id: 4,
			title: "QR-код",
			icon: (
				<MaterialCommunityIcons name="qrcode-scan" size={24} color="black" />
			),
		},
		{
			id: 5,
			title: "Сохраненное",
			icon: <Feather name="bookmark" size={24} color="black" />,
		},
		{
			id: 6,
			title: "Контроль",
			icon: <Octicons name="people" size={24} color="black" />,
		},
		{
			id: 7,
			title: "Контроль",
			icon: <Octicons name="people" size={24} color="black" />,
		},
		{
			id: 8,
			title: "Заказы и платежи",
			icon: <FontAwesome name="credit-card" size={24} color="black" />,
		},

		{
			id: 9,
			title: "Близкие друзья",
			icon: <FontAwesome5 name="list-ul" size={24} color="black" />,
		},
		{
			id: 10,
			title: "Избранное",
			icon: <Feather name="star" size={24} color="black" />,
		},
		{
			id: 11,
			title: "Обновить функции обмена сообщениями",
			icon: <AntDesign name="message1" size={24} color="black" />,
		},
	];

	return (
		<View style={[styles.wrapModal, styles.actionsProfile]}>
			<ModalItem data={data} />
		</View>
	);
};
const styles = StyleSheet.create({
	wrapModal: {
		paddingBottom: 20,
		paddingTop: 5,
	},
});
export default bottomModalHOC(ActionsProfile);
