'use strict';

const assert = require('assert');
const pipeImage = require('../../../../src/services/upload/hooks/pipe-image.js');

describe('upload pipeImage hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    pipeImage()(mockHook);

    assert.ok(mockHook.pipeImage);
  });
});
