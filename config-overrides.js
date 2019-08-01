const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#fa4b34",
      "@link-color": "#fa4b34",
      "@heading-color": "#333",
      "@text-color": "#888",
      "@normal-color": "rgba(45,146,159,0.8)"
    }
  })
);
