'use strict';

// src/services/image/hooks/has-file.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const errors = require('feathers-errors');
const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    console.log('image upload validation hook');
    if (false && !hook.data.file) {
    throw new errors.BadRequest(`Invalid request`, {
      errors: [
        {
          path: 'File Not Added',
          value: hook.data.file,
          message: `You must add a file!`,
        }
      ]
    });
  }
  };
};
