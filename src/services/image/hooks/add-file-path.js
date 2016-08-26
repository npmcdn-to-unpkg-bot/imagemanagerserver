'use strict';

// src/services/image/hooks/add-file-path.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    if(!!hook.result.data){
      hook.result.data.map(function(element){
          return element.path = hook.app.myVar + '/files/' + element.nameOnDisk;
      })
    }else{
      hook.result.path = hook.app.myVar + '/files/' + hook.result.nameOnDisk;
    }
  };
};
