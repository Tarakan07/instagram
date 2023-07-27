import React, { useState, useEffect } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	VirtualizedList,
	Pressable,
	Text,
} from "react-native";

import AboutAccount from "../../components/screen-profile-components/screen-home-profile-component/about-account";
import SettingsProfile from "../../components/screen-profile-components/screen-home-profile-component/settings-profile";
import HistoryPosts from "../../components/screen-profile-components/screen-home-profile-component/history-posts";
import TabsProfilePosts from "../../components/screen-profile-components/screen-home-profile-component/tabs-profile-posts";
import HeaderProfile from "./../../components/screen-profile-components/headers-components/header-profile/header-profile";

let scrollPage = true;

const Test = ({ dsp, changeDsp }) => {
	const [state, setState] = useState({ x: 0, y: 0 });
	return (
		<View style={{ width: "100%", height: 400, backgroundColor: "blue" }}>
			<Pressable
				hitSlop={{
					bottom: 100,
					left: 0,
					right: 0,
					top: 0,
				}}
				onLongPress={() => {
					console.log("start");
					changeDsp();
				}}
				onPressOut={() => {
					console.log("end");
					changeDsp();
				}}
			>
				<Text>
					{state.x}I'm pressable! {state.y}
				</Text>
				<View
					style={{
						width: "90%",
						height: 300,
						backgroundColor: "yellow",
						display: dsp ? "flex" : "none",
					}}
				>
					<Pressable onHoverIn={() => console.log("onpresss")}>
						<Text>prss mee</Text>
					</Pressable>
				</View>
			</Pressable>
		</View>
	);
};
const ProfileScreen = ({ navigation }) => {
	const [visibleModal, setVisibleModal] = useState(null);
	const [dsp, setDsp] = useState(false);
	const changeDsp = () => {
		setDsp((prev) => !prev);
	};
	const modalComponent = (compModal) => {
		setVisibleModal(compModal);
	};
	useEffect(() => {
		scrollPage = !scrollPage;
		navigation
			.getParent("BottomTabNavigator")
			.setOptions({ tabBarStyle: { display: scrollPage ? "none" : "flex" } });
	}, [visibleModal]);
	const unmountModalComponent = () => setVisibleModal("");
	return (
		<ScrollView style={styles.container} scrollEnabled={scrollPage}>
			<View>
				<HeaderProfile
					navigation={navigation}
					modalComponent={modalComponent}
					unmountModalComponent={unmountModalComponent}
				/>

				<AboutAccount />
				<SettingsProfile />
				<HistoryPosts />

				<TabsProfilePosts />
				<Test dsp={dsp} changeDsp={changeDsp} />
				{visibleModal}
			</View>
			{/* <Text style={{ fontSize: 30, fontFamily: "InstagramSans-Bold" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Light" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Medium" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Regular" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSansCondensed-Bold" }}>
				ProfileScreen
			</Text>
			<Text
				style={{ fontSize: 30, fontFamily: "InstagramSansCondensed-Regular" }}
			>
				ProfileScreen
			</Text>
			<Text
				style={{ fontSize: 30, fontFamily: "InstagramSansHeadline-Regular" }}
			>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSansScript-Bold" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSansScript-Regular" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Bold" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Light" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Medium" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Regular" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSansCondensed-Bold" }}>
				ProfileScreen
			</Text>
			<Text
				style={{ fontSize: 30, fontFamily: "InstagramSansCondensed-Regular" }}
			>
				ProfileScreen
			</Text>
			<Text
				style={{ fontSize: 30, fontFamily: "InstagramSansHeadline-Regular" }}
			>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSansScript-Bold" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSansScript-Regular" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Bold" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Light" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Medium" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSans-Regular" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSansCondensed-Bold" }}>
				ProfileScreen
			</Text>
			<Text
				style={{ fontSize: 30, fontFamily: "InstagramSansCondensed-Regular" }}
			>
				ProfileScreen
			</Text>
			<Text
				style={{ fontSize: 30, fontFamily: "InstagramSansHeadline-Regular" }}
			>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSansScript-Bold" }}>
				ProfileScreen
			</Text>
			<Text style={{ fontSize: 30, fontFamily: "InstagramSansScript-Regular" }}>
				ProfileScreen
			</Text> */}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: { height: "100%", backgroundColor: "#fff" },
});
export default ProfileScreen;
