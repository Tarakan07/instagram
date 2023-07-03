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
		const windowHeight = Dimensions.get("window").height;
		const screenHeight = Dimensions.get("screen").height;
		const snapPoints = useMemo(() => ["60%", "65%"], []);

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
						style={{ backgroundColor: "transparent" }}
						backgroundStyle={styles.container}
						handleComponent={() => (
							<View
								style={{
									height: 30,
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<View style={styles.headerStrip} />
							</View>
						)}
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
		width: 30,
		height: 4,
		borderRadius: 15,
		backgroundColor: "#000",
	},
});
export default bottomModalHOC;
