'use strict';

// src/services/upload/hooks/pipe-image.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
      const newImage ={
      name: hook.data.initialFileName,
      nameOnDisk: hook.result.id,
      size: hook.result.size,
    };

    hook.app.service('images').create(newImage);

    hook.result.name = newImage.name;
    hook.result.path = hook.app.myVar + '/files/' + newImage.nameOnDisk;
  };
};
