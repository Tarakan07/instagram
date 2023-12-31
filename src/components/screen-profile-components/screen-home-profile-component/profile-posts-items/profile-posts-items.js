import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	VirtualizedList,
	Image,
	FlatList,
	Dimensions,
} from "react-native";
import THEME from "../../../../THEME";
const ProfilePostsItems = ({ data }) => {
	return (
		<View style={styles.container}>
			{data.map((post) => {
				return (
					<View key={post.id} style={styles.post}>
						<Pressable
							style={styles.postPressable}
							onLongPress={() => console.log("press long")}
						>
							<Image style={styles.postImage} source={post.image} />
							<Pressable onPress={() => console.log("lalala")}>
								<Text>lalala</Text>
							</Pressable>
						</Pressable>
					</View>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	post: {
		paddingTop: 3,
		width: Dimensions.get("window").width / 3,
		height: Dimensions.get("window").width / 3,
	},
	postPressable: {
		width: "100%",
		height: "100%",
	},
	postImage: {
		width: Dimensions.get("window").width / 3 - 3,
		height: Dimensions.get("window").width / 3 - 3,
	},
});
export default ProfilePostsItems;
