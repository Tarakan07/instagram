import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	useWindowDimensions,
	Dimensions,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { MaterialIcons, Octicons, Ionicons } from "@expo/vector-icons";
const FirstRoute = () => (
	<View style={{ flex: 1, backgroundColor: "#ff4081" }}></View>
);
const SecondRoute = () => (
	<View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);
const ThreeRoute = () => <View style={{ flex: 1, backgroundColor: "red" }} />;

const renderScene = SceneMap({
	allPosts: FirstRoute,
	video: SecondRoute,
	mark: ThreeRoute,
});
const ProfilePosts = () => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{
			key: "allPosts",
			title: "All posts",
		},
		{
			key: "video",
			title: "Video",
		},
		{
			key: "mark",
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
						return <MaterialIcons name="grid-on" size={24} color="black" />;
					if (route.key === "video")
						return <Octicons name="video" size={24} color="black" />;
					if (route.key === "mark")
						return <Ionicons name="person-outline" size={24} color="black" />;
				}}
				indicatorStyle={{ backgroundColor: "#000" }}
				style={{ backgroundColor: "#fff" }}
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
export default ProfilePosts;
