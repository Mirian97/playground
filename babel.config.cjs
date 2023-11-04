module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }], // option automatic: you don't need import React from 'react' in every test
    "@babel/preset-typescript",
  ],
};
