module.exports = {
  env: {
    browser: true, //나 브라우저에도 있다.document 함수에 오류표시 안뜸
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "off",
    "no-console": "off",
    "spaced-comment": "off",
    "no-else-return": "off",
  },
};
