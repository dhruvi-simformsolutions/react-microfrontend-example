const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  // other webpack configuration options
  plugins: [
    new ModuleFederationPlugin({
      // unique name for the microfrontend
      name: "taskMicrofrontend",
      // it configures how it is expose or consumed
      // 'var' - it is exposed as global variable
      library: { type: "var", name: "taskMicrofrontend" }, 
      // specifies the name of remote entry file. It contains info about the modules exposed by micro frontend
      filename: "remoteEntry.js",
      // the modules that the microfrontend exposes to other applications
      exposes: {
        "./TaskApp": "./src/App",
      },
      //Specifies an array of modules that should be shared between the microfrontend and the host application.
      //It ensures that only one instance of these shared modules is loaded, reducing duplication and potential version conflicts
      shared: ["react", "react-dom", "redux", "react-redux"],
    }),
  ],
};
