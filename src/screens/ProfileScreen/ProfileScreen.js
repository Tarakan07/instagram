import React, { useRef, useState, useEffect, useCallback } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

import AboutAccount from "../../components/screen-profile-components/screen-home-profile-component/about-account";
import SettingsProfile from "../../components/screen-profile-components/screen-home-profile-component/settings-profile";
import HistoryPosts from "../../components/screen-profile-components/screen-home-profile-component/history-posts";
import ProfilePosts from "../../components/screen-profile-components/screen-home-profile-component/profile-posts";
import ChangeAccount from "../../components/screen-profile-components/screen-home-profile-component/change-account";

import HeaderProfile from "./../../components/screen-profile-components/headers-components/header-profile/header-profile";
import CreatePost from "../../components/screen-profile-components/screen-home-profile-component/create-post";
const ProfileScreen = ({
	visibleModal,
	modalComponent,
	unmountModalComponent,
	navigation,
}) => {
	// const [scroll, setScroll] = useState(true);
	let visibleComponent = null;
	let scroll = true;

	useEffect(() => {
		scroll = !scroll;
		navigation
			.getParent("BottomTabNavigator")
			.setOptions({ tabBarStyle: { display: scroll ? "none" : "flex" } });
	}, [visibleModal]);
	if (visibleModal === "changeAccount") {
		visibleComponent = createModal(ChangeAccount, unmountModalComponent);
		scroll = false;
	} else if (visibleModal === "createPost") {
		visibleComponent = createModal(CreatePost, unmountModalComponent);
		scroll = false;
	} else {
		visibleComponent = null;
	}

	// console.log(visibleComponent, visibleModal);
	return (
		<ScrollView style={styles.container} scrollEnabled={scroll}>
			<View>
				<HeaderProfile
					navigation={navigation}
					modalComponent={modalComponent}
				/>
				<AboutAccount />
				<SettingsProfile />
				<HistoryPosts />
				<ProfilePosts />
				{visibleComponent}
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

const createModal = (Modal, unmountModalComponent) => {
	return <Modal unmountModalComponent={unmountModalComponent} />;
};
const styles = StyleSheet.create({
	container: { height: "100%", backgroundColor: "#fff" },
});
export default ProfileScreen;
