import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MaterialIcons, Octicons, Ionicons } from "@expo/vector-icons";
import THEME from "../../../../THEME";
import ProfilePostsItems from "../profile-posts-items";
const data = [
	{
		id: 1,
		image: require("../../../../../assets/images/posts/1.jpg"),
	},
	{
		id: 2,
		image: require("../../../../../assets/images/posts/2.jpg"),
	},
	{
		id: 3,
		image: require("../../../../../assets/images/posts/3.jpg"),
	},
	{
		id: 4,
		image: require("../../../../../assets/images/posts/4.jpg"),
	},
	{
		id: 5,
		image: require("../../../../../assets/images/posts/5.jpg"),
	},
];
const AllPosts = () => <ProfilePostsItems data={data} />;
const VideoPosts = () => <ProfilePostsItems data={data} />;
const MarkPosts = () => <ProfilePostsItems data={data} />;

const renderScene = SceneMap({
	allPosts: AllPosts,
	videoPosts: VideoPosts,
	markPosts: MarkPosts,
});
const TabsProfilePosts = () => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{
			key: "allPosts",
			title: "All posts",
		},
		{
			key: "videoPosts",
			title: "Video",
		},
		{
			key: "markPosts",
			title: "Mark",
		},
	]);

	const renderTabBar = (props) => {
		return (
			<TabBar
				{...props}
				getLabelText={() => null}
				renderIcon={({ route, focused, color }) => {
					if (route.key === "allPosts")
						return (
							<MaterialIcons
								name="grid-on"
								size={24}
								color={focused ? "black" : THEME.colors.gray}
							/>
						);
					if (route.key === "videoPosts")
						return (
							<Octicons
								name="video"
								size={24}
								color={focused ? "black" : THEME.colors.gray}
							/>
						);
					if (route.key === "markPosts")
						return (
							<Ionicons
								name="person-outline"
								size={24}
								color={focused ? "black" : THEME.colors.gray}
							/>
						);
				}}
				indicatorStyle={{
					backgroundColor: "#000",
					width: Dimensions.get("window").width / 3 - 3,
					height: 1.5,
				}}
				style={{ backgroundColor: "#fff", shadowColor: "transparent" }}
			/>
		);
	};

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			renderTabBar={renderTabBar}
			onIndexChange={setIndex}
			initialLayout={{ width: Dimensions.get("window").width }}
			style={styles.container}
		/>
	);
};
const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		height: 500,
	},
});
export default TabsProfilePosts;
