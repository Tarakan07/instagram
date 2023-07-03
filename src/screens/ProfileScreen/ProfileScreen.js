import React, { useState, useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import AboutAccount from "../../components/screen-profile-components/screen-home-profile-component/about-account";
import SettingsProfile from "../../components/screen-profile-components/screen-home-profile-component/settings-profile";
import HistoryPosts from "../../components/screen-profile-components/screen-home-profile-component/history-posts";
import ProfilePosts from "../../components/screen-profile-components/screen-home-profile-component/profile-posts";
import HeaderProfile from "./../../components/screen-profile-components/headers-components/header-profile/header-profile";

let scrollPage = true;
const ProfileScreen = ({ navigation }) => {
	const [visibleModal, setVisibleModal] = useState(null);

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
				<ProfilePosts />
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

const createModal = (Modal, unmountModalComponent) => {
	return <Modal unmountModalComponent={unmountModalComponent} />;
};
const styles = StyleSheet.create({
	container: { height: "100%", backgroundColor: "#fff" },
});
export default ProfileScreen;
