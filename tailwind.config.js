/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./ssi_site_v2/**/*.{html,njk,md}",
    "./*.njk",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
