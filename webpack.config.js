const path = require("path");

module.exports = {
	entry: "./App.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			Components: path.resolve(__dirname, "src/components/"),
			Templates: path.resolve(__dirname, "src/components/"),
		},
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		compress: true,
		port: 9000,
	},
};
