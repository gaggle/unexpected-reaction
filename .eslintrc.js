module.exports = {
  extends: ["pretty-standard"],
  plugins: ["prettier", "import"],
  rules: {
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/test/**/*.js",
          "./bootstrap-unexpected-markdown.js",
          "./karma.conf.js",
          "./rollup.config.js",
          "./rollup.tests.js"
        ],
        optionalDependencies: false,
        peerDependencies: true
      }
    ]
  }
};
