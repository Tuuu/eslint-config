module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'plugin/declaration-block-no-ignored-properties': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'return', 'if', 'each', 'include', 'mixin'],
      },
    ],
  },
};
