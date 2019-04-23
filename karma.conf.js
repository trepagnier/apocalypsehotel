process.env.CHROME_BIN = require("puppeteer").executablePath();

const webpackConfig = require("./webpack.config.js");

const browserMode = false;

module.exports = config => {
  config.set({
    basePath: ".",
    client: {
      captureConsole: !browserMode
    },
    frameworks: ["mocha", "chai"],
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
      "karma-mocha",
      "karma-chai"
    ],
    logLevel: browserMode ? config.LOG_DEBUG : config.LOG_DISABLE,
    autoWatch: false,
    browsers: browserMode ? ["Chrome"] : ["ChromeHeadless"],
    singleRun: !browserMode,
    autoWatchBatchDelay: 300,
    webpack: webpackConfig,
    files: [
      "./node_modules/jquery/dist/jquery.min.js",
      "./public/**/*.test.js"
    ],
    preprocessors: {
      "./public/**/*.test.js": ["webpack"]
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
