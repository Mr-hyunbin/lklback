module.exports = {
	apps: [
		{
			script: "./src/server.js",
			interpreter: "./node_modules/.bin/babel-node",
			env: {
				name: "lklback:default",
				NODE_ENV: "default",
				watch: true,
			},
		},
	],
};
