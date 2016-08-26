'use strict';

const assert = require('assert');
const addFilePath = require('../../../../src/services/image/hooks/add-file-path.js');

describe('image addFilePath hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    addFilePath()(mockHook);

    assert.ok(mockHook.addFilePath);
  });
});
