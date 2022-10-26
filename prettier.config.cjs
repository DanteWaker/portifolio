module.exports = {
  trailingComma: "none",
  tailwindConfig: "./tailwind.config.cjs",
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require("prettier-plugin-tailwindcss")]
};
