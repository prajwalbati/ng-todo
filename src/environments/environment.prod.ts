declare var require: any;
const data = require('../../env.json');

export const environment = {
  production: true,
  firebaseConfig : data.firebaseConfig
};
