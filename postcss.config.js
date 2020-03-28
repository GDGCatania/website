/* eslint-disable global-require,import/no-extraneous-dependencies */
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      stage: false,
      features: {
        'custom-properties': true,
      },
    }),
  ],
};
