System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "@types/jquery": "npm:@types/jquery@2.0.39",
    "jquery": "npm:jquery@3.1.1"
  }
});
