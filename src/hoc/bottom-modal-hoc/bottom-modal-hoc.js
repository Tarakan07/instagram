import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import {
	BottomSheetModal,
	BottomSheetModalProvider,
	useBottomSheetModal,
	BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import Animated, {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";

const bottomModalHOC = (Modal) => {
	return (props) => {
		const bottomSheetModalRef = useRef();
		const heit = 170;
		const windowHeight = Dimensions.get("window").height;
		const screenHeight = Dimensions.get("screen").height;
		const point = 1.1;
		console.log(screenHeight);
		const snapPoints = useMemo(() => ["60%", "65%"], []);

		// callbacks
		const handlePresentModalPress = useCallback(() => {
			bottomSheetModalRef.current?.present();
		}, []);
		useEffect(() => {
			bottomSheetModalRef.current?.present();
		}, []);
		if (true)
			return (
				<BottomSheetModalProvider>
					<BottomSheetModal
						index={0}
						ref={bottomSheetModalRef}
						snapPoints={snapPoints}
						detached={false}
						containerHeight={500}
						contentHeight={500}
						// animateOnMount={false}
						onDismiss={() => {
							props.unmountModalComponent();
						}}
						style={{ backgroundColor: "#fff" }}
						backgroundStyle={styles.container}
						handleComponent={() => <View style={styles.headerStrip} />}
						backdropComponent={() => (
							<Pressable
								onPress={() => props.unmountModalComponent()}
								style={{
									position: "absolute",
									width: "100%",
									height: "100%",

									backgroundColor: "rgba(169, 169, 169,.3)",
								}}
							></Pressable>
						)}
					>
						<Modal {...props} />
					</BottomSheetModal>
				</BottomSheetModalProvider>
			);
	};
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		backgroundStyle: "#fff",
		width: "100%",
		bottom: 0,

		alignContent: "flex-end",
		borderTopStartRadius: 10,
		borderTopRightRadius: 10,
		borderColor: "#000",
		borderStyle: "solid",
		borderWidth: 1,
	},
	headerStrip: {
		marginTop: 13,
		width: 30,
		height: 4,
		borderRadius: 15,
		backgroundColor: "#000",

		alignSelf: "center",
	},
});
export default bottomModalHOC;
