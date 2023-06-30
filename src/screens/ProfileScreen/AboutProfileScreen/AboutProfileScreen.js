import React from "react";
import { View, Text, StyleSheet } from "react-native";

import InformationAboutAccount from "../../../components/screen-profile-components/screen-about-profile-components/information-about-account";
import { ScrollView } from "react-native-gesture-handler";
const AboutProfileScreen = () => {
	return (
		<ScrollView style={styles.container}>
			<InformationAboutAccount />
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: "#fff",
	},
});
export default AboutProfileScreen;
