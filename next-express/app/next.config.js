const path = require("path");
const dotenv = require("dotenv");

const env =
  dotenv.config({
    path: path.join(__dirname, "/../.env"),
  }).parsed || process.env;

module.exports = {
  env: {
    SERVER_PORT: env.SERVER_PORT || 3001,
    SERVER_URL: env.SERVER_URL || "http://localhost:3001",
  },
  webpack(config, options) {
    config.resolve.alias["@components"] = path.join(__dirname, "src/components");
    config.resolve.alias["@ducks"] = path.join(__dirname, "src/ducks");
    config.resolve.alias["@styles"] = path.join(__dirname, "src/styles");
    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};
