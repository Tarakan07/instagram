import React from "react";
import { View, Text, StyleSheet } from "react-native";
import THEME from "../../../../THEME";
const ModalItem = ({ data }) => {
	return (
		<View style={styles.wrapRows}>
			{data.map((row) => {
				return (
					<View key={row.id} style={styles.row}>
						<View style={styles.rowIcon}>{row.icon}</View>
						<View style={styles.wrapRowTitle}>
							<Text style={styles.rowTitle}>{row.title}</Text>
						</View>
					</View>
				);
			})}
		</View>
	);
};
const styles = StyleSheet.create({
	wrapRows: { width: "100%", paddingHorizontal: THEME.paddingHorisontal },
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
	wrapRowTitle: {
		paddingTop: 15,
		paddingBottom: 15,
		marginLeft: 10,
		borderBottomColor: THEME.colors.gray,
		borderBottomWidth: 0.5,
		height: "100%",

		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	rowTitle: {
		fontSize: 17,
		fontFamily: THEME.font.InstagramSansRegular,
	},
});
export default ModalItem;
