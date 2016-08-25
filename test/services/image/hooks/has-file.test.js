'use strict';

const assert = require('assert');
const hasFile = require('../../../../src/services/image/hooks/has-file.js');

describe('image hasFile hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    hasFile()(mockHook);

    assert.ok(mockHook.hasFile);
  });
});
