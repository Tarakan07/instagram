import React from "react";
import { View, Text, StyleSheet } from "react-native";
import bottomModalHOC from "../../../../hoc/bottom-modal-hoc";
import ModalItem from "../modal-items";
import {
	Ionicons,
	Feather,
	SimpleLineIcons,
	MaterialIcons,
} from "@expo/vector-icons";

import THEME from "../../../../THEME";
const CreatePost = () => {
	const data = [
		{
			id: 1,
			title: "Видео Reels",
			icon: <MaterialIcons name="ondemand-video" size={25} color="black" />,
		},
		{
			id: 2,
			title: "Публикация",
			icon: <MaterialIcons name="grid-on" size={25} color="black" />,
		},
		{
			id: 3,
			title: "История",
			icon: <MaterialIcons name="history-toggle-off" size={25} color="black" />,
		},
		{
			id: 4,
			title: "Актуальное из историй",
			icon: (
				<Ionicons name="ios-heart-circle-outline" size={25} color="black" />
			),
		},
		{
			id: 5,
			title: "Выйти в эфир",
			icon: <Feather name="radio" size={25} color="black" />,
		},
		{
			id: 6,
			title: "Советы",
			icon: <SimpleLineIcons name="book-open" size={25} color="black" />,
		},
	];

	return (
		<View style={[styles.wrapModal, styles.createPost]}>
			<View style={styles.wrapTitleModal}>
				<Text style={styles.titleModal}>Создать</Text>
			</View>
			<ModalItem data={data} />
		</View>
	);
};

const styles = StyleSheet.create({
	wrapModal: {
		paddingBottom: 20,
		paddingTop: 5,
	},

	wrapTitleModal: {
		paddingBottom: 8,
		flexDirection: "row",
		justifyContent: "center",
		borderBottomColor: THEME.colors.gray,
		borderBottomWidth: 0.5,
	},

	titleModal: {
		fontSize: 18,
		fontFamily: THEME.font.InstagramSansBold,
	},
});
export default bottomModalHOC(CreatePost);
