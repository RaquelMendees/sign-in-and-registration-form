// This is my configuration file for Tailwind CSS.

module.exports = {
  // I specify the paths to all of the template files in my project
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // I extend the default Tailwind theme
  theme: {
    extend: {},
  },
  // I add Tailwind CSS plugins
  plugins: [
    require("@tailwindcss/forms"), // I add the forms plugin for better styling of form elements
  ],
};
