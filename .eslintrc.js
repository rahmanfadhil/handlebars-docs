module.exports = {
  extends: ["prettier", "plugin:vue/recommended", "eslint:recommended"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8,
    sourceType: "module"
  }
};
