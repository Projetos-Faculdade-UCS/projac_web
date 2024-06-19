import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {files: ['**/*.tsx', '**/*.ts']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // pluginReactConfig,
  // // https://github.com/prettier/eslint-config-prettier#installation
  // eslintConfigPrettier,
  {
    rules:{
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    }
  }
];