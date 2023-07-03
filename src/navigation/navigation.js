import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
	Ionicons,
	MaterialCommunityIcons,
	FontAwesome,
	AntDesign,
	Entypo,
	Feather,
	MaterialIcons,
} from "@expo/vector-icons";

import HomeScreen from "./../screens/HomeScreen";
import SearchScreen from "./../screens/HomeScreen";
import AddNewPostScreen from "./../screens/AddNewPostScreen";
import ReelsScreen from "./../screens/ReelsScreen";
import ProfileScreen from "./../screens/ProfileScreen";
import AboutProfileScreen from "../screens/ProfileScreen/AboutProfileScreen";

import HeaderProfile from "../components/screen-profile-components/headers-components/header-profile";
import HeaderAboutProfile from "../components/screen-profile-components/headers-components/header-about-profile";
const BottomTab = createBottomTabNavigator();
const NativeNavigator = createNativeStackNavigator();
const DriwerNavigator = createDrawerNavigator();
const Navigation = () => {
	return (
		<NavigationContainer>
			<BottomTab.Navigator
				id="BottomTabNavigator"
				screenOptions={({ route }) => BottomNavigatorConfig(route)}
			>
				<BottomTab.Screen name="Home" component={HomeScreen} />
				<BottomTab.Screen name="Search" component={SearchScreen} />
				<BottomTab.Screen name="Add new post" component={AddNewPostScreen} />
				<BottomTab.Screen name="Reels" component={ReelsScreen} />
				<BottomTab.Screen
					name="NavigatorProfile"
					component={NavigatorProfile}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
};

const createIcon = (Comp, name, size, color) => {
	return <Comp name={name} size={size} color={color} />;
};
//bottomNavigator
const BottomNavigatorConfig = (route) => {
	return {
		headerShown: false,
		tabBarInactiveTintColor: "#000",

		tabBarShowLabel: false,
		tabBarIcon: ({ focused, color, size }) => {
			if (route.name === "Home") {
				return focused
					? createIcon(Entypo, "home", 24, "black")
					: createIcon(AntDesign, "home", 24, "black");
			}
			if (route.name === "Search") {
				return focused
					? createIcon(FontAwesome, "search", 24, "black")
					: createIcon(Feather, "search", 24, "black");
			}
			if (route.name === "Add new post") {
				return createIcon(
					MaterialCommunityIcons,
					"plus-box-outline",
					focused ? 26 : 24,
					"black"
				);
			}
			if (route.name === "Reels") {
				return createIcon(
					MaterialIcons,
					"ondemand-video",
					focused ? 26 : 24,
					"black"
				);
			}
			if (route.name === "NavigatorProfile") {
				return (
					<View
						style={{
							width: 22,
							height: 22,
							borderStyle: "solid",
							backgroundColor: "gray",
							borderWidth: 2,
							borderColor: focused ? "#000" : "transparent",
							borderRadius: 100,
						}}
					></View>
				);
			}
		},
	};
};

//Profile navigator
const NavigatorProfile = () => {
	return (
		<NativeNavigator.Navigator
			screenOptions={{
				header: ({ navigation, route, options, back }) => null,
			}}
		>
			<NativeNavigator.Screen name="Profile">
				{(props) => <ProfileScreen {...props} />}
			</NativeNavigator.Screen>
			<NativeNavigator.Screen
				name="AboutProfile"
				component={AboutProfileScreen}
				options={({ navigation }) => {
					return {
						header: () => <HeaderAboutProfile navigation={navigation} />,
						animation: "slide_from_left",
					};
				}}
			/>
		</NativeNavigator.Navigator>
	);
};

export default Navigation;
