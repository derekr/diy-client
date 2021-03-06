var test    = require('tap').test,
    diy     = require('../../lib/index')('*');

diy({
    method: 'POST',
    uri:    '/loopback',
    params: {
        foo: 'bar'
    }
}, function (err, body) {
    console.dir(body);
    test('integration', function (t) {
        t.equal(err, null, 'errors should be null');
        t.type(body, 'object', 'response body should be an object');
        t.equal(body.response.foo, 'bar', 'included expected response');
        t.end();
    });
});