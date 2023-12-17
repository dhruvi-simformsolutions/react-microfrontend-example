// webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: 'http://localhost:3000/', // Adjust as needed
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      // Add necessary rules for JS/JSX files
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mainApp',
      remotes: {
        AuthMicrofrontend: 'authMicrofrontend@http://localhost:3001/remoteEntry.js',
        TaskMicrofrontend: 'taskMicrofrontend@http://localhost:3002/remoteEntry.js',
      },
    }),
  ],
};
