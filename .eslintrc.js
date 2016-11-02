module.exports = {
  'extends': 'airbnb',
  'plugins': [
    'react',
    'jsx-a11y',
    'import',
  ],
  'rules': {
    'react/jsx-filename-extension': 0,
  },
  'env': {
    'browser': true, // let 'window', 'document' defined
  }
};
