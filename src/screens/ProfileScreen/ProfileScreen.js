import React, { useRef, useState, useEffect, useCallback } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	FlatList,
	Dimensions,
} from "react-native";

import AboutAccount from "../../components/screen-profile-components/screen-home-profile-component/about-account";
import SettingsProfile from "../../components/screen-profile-components/screen-home-profile-component/settings-profile";
import HistoryPosts from "../../components/screen-profile-components/screen-home-profile-component/history-posts";
import ProfilePosts from "../../components/screen-profile-components/screen-home-profile-component/profile-posts";
import ChangeAccount from "../../components/screen-profile-components/screen-home-profile-component/change-account";

import HeaderProfile from "../../components/screen-profile-components/headers-components/header-profile";

const ProfileScreen = ({
	visibleModal,
	modalComponent,
	unmountModalComponent,
	navigation,
}) => {
	const [scroll, setScroll] = useState(true);
	let visibleComponent = null;

	if (visibleModal == "changeAccount") {
		visibleComponent = (
			<ChangeAccount unmountModalComponent={unmountModalComponent} />
		);
		useEffect(() => {
			setScroll(false);
		}, [visibleModal]);
	} else {
		visibleComponent = null;
		useEffect(() => {
			setScroll(true);
		}, [visibleModal]);
	}
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
const styles = StyleSheet.create({
	container: { height: "100%", backgroundColor: "#fff" },
});
export default ProfileScreen;
