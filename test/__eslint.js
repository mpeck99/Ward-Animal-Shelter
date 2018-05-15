const eslint = require('mocha-eslint');

const filePaths = [
  'server/server.js',
  'src/components/About.jsx',
  'src/components/Contact.jsx',
  'src/components/Cats.jsx',
  'src/components/Dogs.jsx',
  'src/components/Other.jsx',
  'src/components/Home.jsx',
  'src/components/Footer.jsx',
  'src/components/Success.jsx',
];

const rules = {
  formatter: 'stylish',

  alwaysWarn: true,

  timeout: 5000,

  slow: 300,

  strict: true,

  contextName: 'AirBnb Eslint Style Guide Tests',

};

eslint(filePaths, rules);
