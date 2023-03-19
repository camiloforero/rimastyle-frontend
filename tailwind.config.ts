const FormKitVariants = require('@formkit/themes/tailwindcss')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,vue}',
    './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs',
  ],
  theme: {
    extend: {},

  },
  plugins: [FormKitVariants],
}
