import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { fixupConfigRules } from "@eslint/compat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...fixupConfigRules(
    ...compat.extends("next/core-web-vitals", "next/typescript"),
  ),
  {
    ignores: ['node_modules', 'dist', '/*.js'],
  }
];

export default eslintConfig;