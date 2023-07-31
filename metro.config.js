// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

// module.exports = getDefaultConfig(__dirname);
//firebase works with the applicaiton
const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;
