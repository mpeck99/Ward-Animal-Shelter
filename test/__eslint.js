const eslint = require('mocha-eslint');

const filePaths = [
  'server/server.js',
  'src/components/About.js',
  'src/components/Contact.js',
  'src/components/Cats.js',
  'src/components/Dogs.js',
  'src/components/Other.js',
  'src/components/Home.js',
  'src/components/Footer.js',
  'src/components/Map.js',
  'src/components/Success.js',
];

const rules = {
  formatter: 'stylish',

  alwaysWarn:true,

  timeout: 5000,

  slow: 300,

  strict: true,

  contextName:'AirBnb Eslint Style Guide Tests'
};

eslint(filePaths,rules);