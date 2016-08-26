'use strict';

const addFilePath = require('./add-file-path');

const auth = require('feathers-authentication').hooks;
const hasFile = require('./has-file');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const populateSender = hooks.populate('sentBy', {
  service: 'users',
  field: 'userId'
});

exports.before = {
  all: [],
  find: [],
  get: [],
  create: [hasFile()],
  update: [hooks.remove('sentBy')],
  patch: [hooks.remove('sentBy')],
  remove: []
};

exports.after = {
  all: [],
  find: [globalHooks.myHook(), addFilePath()],
  get: [addFilePath()],
  create: [],
  update: [],
  patch: [],
  remove: []
};
