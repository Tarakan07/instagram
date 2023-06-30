import React from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	FlatList,
	StyleSheet,
	Pressable,
} from "react-native";
import THEME from "../../../../THEME";
const HistoryPosts = () => {
	const data = [
		{
			id: "1",
			image:
				"https://kartinkin.net/uploads/posts/2022-03/1648029656_1-kartinkin-net-p-chertik-kartinki-1.jpg",
			description: "Черт первый",
		},
		{
			id: "2",
			image:
				"https://kartinkin.net/uploads/posts/2022-03/1648029693_22-kartinkin-net-p-chertik-kartinki-24.jpg",
			description: "Черт второй",
		},
		{
			id: "3",
			image:
				"https://kartinkin.net/uploads/posts/2022-03/1648029656_1-kartinkin-net-p-chertik-kartinki-1.jpg",
			description: "Черт первый",
		},
		{
			id: "4",
			image:
				"https://kartinkin.net/uploads/posts/2022-03/1648029693_22-kartinkin-net-p-chertik-kartinki-24.jpg",
			description: "Черт второй",
		},
		{
			id: "5",
			image:
				"https://kartinkin.net/uploads/posts/2022-03/1648029656_1-kartinkin-net-p-chertik-kartinki-1.jpg",
			description: "Черт первый",
		},
		{
			id: "6",
			image:
				"https://kartinkin.net/uploads/posts/2022-03/1648029693_22-kartinkin-net-p-chertik-kartinki-24.jpg",
			description: "Черт второй",
		},
		{
			id: "0",
			image:
				"https://kartinkin.net/uploads/posts/2022-03/1647455766_3-kartinkin-net-p-cherti-kartinki-3.jpg",
			description: "Черт третий",
		},
	];
	return (
		<View style={styles.container}>
			<FlatList
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				style={styles.historyList}
				data={data}
				renderItem={({ item }) => (
					<View style={styles.wrapHistory}>
						<Pressable>
							<View style={styles.wrapHistoryImage}>
								<Image
									style={styles.historyImage}
									source={require("../../../../../assets/images/history.jpg")}
								/>
							</View>
						</Pressable>
						<Text numberOfLines={1} style={styles.historyDescr}>
							{item.description}
						</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingTop: 10,
		paddingHorizontal: THEME.paddingHorisontal,
	},
	wrapHistory: {
		alignItems: "center",
		alignContent: "center",
		justifyContent: "center",
		marginRight: 10,
	},
	wrapHistoryImage: {
		width: 53,
		height: 53,
		borderStyle: "solid",
		borderRadius: 50,

		borderWidth: 1,
		borderColor: "#000",
	},
	historyImage: {
		width: 50,
		height: 50,
		borderRadius: 50,
	},
	historyDescr: {
		fontFamily: THEME.font.InstagramSansRegular,
		fontSize: 12,
		width: 70,
		textAlign: "center",
	},
});
export default HistoryPosts;
