import * as Font from "expo-font";
import * as ImagePicker from "expo-image-picker";
import * as Calendar from "expo-calendar";
import * as Location from "expo-location";
const loadFonts = async () => {
	await Font.loadAsync({
		"InstagramSans-Bold": require("../../assets/fonts/InstagramSans-Bold.ttf"),
		"InstagramSans-Light": require("../../assets/fonts/InstagramSans-Light.ttf"),
		"InstagramSans-Medium": require("../../assets/fonts/InstagramSans-Medium.ttf"),
		"InstagramSans-Regular": require("../../assets/fonts/InstagramSans-Regular.ttf"),
		"InstagramSansCondensed-Bold": require("../../assets/fonts/InstagramSansCondensed-Bold.ttf"),
		"InstagramSansCondensed-Regular": require("../../assets/fonts/InstagramSansCondensed-Regular.ttf"),
		"InstagramSansHeadline-Regular": require("../../assets/fonts/InstagramSansHeadline-Regular.ttf"),
		"InstagramSansScript-Bold": require("../../assets/fonts/InstagramSansScript-Bold.ttf"),
		"InstagramSansScript-Regular": require("../../assets/fonts/InstagramSansScript-Regular.ttf"),
	});
};

const getPermissions = async () => {
	console.log("get permissions");
	await ImagePicker.requestMediaLibraryPermissionsAsync();
	await ImagePicker.requestCameraPermissionsAsync();
	await Calendar.requestCalendarPermissionsAsync();
	await Location.requestForegroundPermissionsAsync();
};

const initProject = async () => {
	await getPermissions();
	await loadFonts();
};

export default initProject;
