import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import {
	BaseButton,
	GestureHandlerRootView,
} from "react-native-gesture-handler";
import initProject from "./src/INIT-PROJECT";
import Navigation from "./src/navigation";

SplashScreen.preventAutoHideAsync();
export default function App() {
	const [appReady, setAppReady] = useState(false);
	useEffect(() => {
		async function prepareApp() {
			try {
				await initProject();
			} catch (error) {
				console.log("Error with prepare APP:" + error);
			} finally {
				setAppReady(true);
			}
		}
		prepareApp();
	}, []);

	const onLayoutAppView = useCallback(async () => {
		if (appReady) {
			await SplashScreen.hideAsync();
		}
	}, [appReady]);

	if (!appReady) {
		return <Text>Error with prepare app {"((("}</Text>;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor: "#fff" }}>
			<ScrollView
				onLayout={onLayoutAppView}
				contentContainerStyle={{
					display: "flex",
					height: "100%",
					justifyContent: "flex-end",
					backgroundColor: "#fff",
				}}
			>
				<Navigation />
				<StatusBar style="dark" backgroundColor="#fff" translucent={false} />
			</ScrollView>
		</GestureHandlerRootView>
	);
}
