'use strict';
const upload = require('./upload');
const tag = require('./tag');
const image = require('./image');
const message = require('./message');
const authentication = require('./authentication');
const user = require('./user');

module.exports = function() {
  const app = this;


  app.configure(authentication);
  app.configure(user);
  app.configure(message);
  app.configure(image);
  app.configure(tag);
  app.configure(upload);
};
