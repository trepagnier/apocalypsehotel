const webpackConfig = require("./webpack.config.js");

const browserMode = false;

module.exports = config => {
  config.set({
    basePath: ".",
    client: {
      captureConsole: !browserMode
    },
    frameworks: ["jasmine"],
    reporters: ["mocha"],
    port: 9876,
    colors: true,
    plugins: [
      "karma-babel-preprocessor",
      "karma-babel-preprocessor",
      "karma-mocha-reporter",
      "karma-chrome-launcher",
      "karma-phantomjs-launcher",
      "karma-webpack",
      "karma-jasmine"
    ],
    logLevel: browserMode ? config.LOG_DEBUG : config.LOG_DISABLE,
    autoWatch: false,
    browsers: browserMode ? ["Chrome"] : ["PhantomJS"],
    singleRun: !browserMode,
    autoWatchBatchDelay: 300,
    webpack: webpackConfig,
    files: [
      "./node_modules/jquery/dist/jquery.min.js",
      "./public/**/*.spec.js"
    ],
    preprocessors: {
      "./public/**/*.spec.js": ["webpack"]
    },
    babelPreprocessor: {
      options: {
        presets: ["@babel/preset-react", "@babel/preset-env"]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
