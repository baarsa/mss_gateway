if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const path = require('path');
const gateway = require('express-gateway');

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
// TODO rewrite all in one pipeline?
