module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "comma-dangle": ["error", "only-multiline"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "semi-spacing": ["error", { after: true, before: false }],
    "semi-style": ["error", "last"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
};
