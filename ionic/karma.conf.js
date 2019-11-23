module.exports = function(config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      "src/**/*.ts",
      // "src/**/*.tsx" // *.tsx for React Jsx
    ],
    preprocessors: {
      "**/*.ts": "karma-typescript" // *.tsx for React Jsx
    },
    reporters: ["progress", "karma-typescript"],
    browsers: ["Chrome"]
  });
};
