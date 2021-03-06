module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    indentation: 2,
    'max-empty-lines': 2,
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global'],
    }],
  },
};
