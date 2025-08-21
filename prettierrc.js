// .prettierrc.js
/** @type {import("prettier").Config} */
const config = {
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"], // Important for Tailwind CSS sorting
  tailwindConfig: "./tailwind.config.js", // Ensure this path is correct
  // Add other rules as needed
};

export default config;
