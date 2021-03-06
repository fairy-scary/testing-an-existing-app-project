const EventEmitter = require('events');
const { expect } = require('chai');
const { getBodyFromRequest } = require('../get-body-from-request');
describe("The getBodyFromRequest function", () => {
  let fakeReq = null;

  beforeEach(() => {
    fakeReq = new EventEmitter();
  });

  it('returns an empty string for no body', done => {
    const bodyPromise = getBodyFromRequest(fakeReq);
    fakeReq.emit('end')
    bodyPromise
      .then(body => {
        if (body === '') {
          done()
        } else {
          done('Failed. Got "${body}"')
        }
      })
  });

  it('returns the data read from the stream', done => {
    const bodyPromise = getBodyFromRequest(fakeReq);
    const data1 = 'this is sum'
    const data2 = 'data from browser'
    fakeReq.emit('end')
    bodyPromise
      .then(body => {
        if (body === '') {
          done()
        } else {
          done('Failed. Got "${body}"')
        }
  })

})
});
