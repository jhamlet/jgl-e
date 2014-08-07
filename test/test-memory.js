/*globals describe, it */
var should = require('should'),
    MemoryObjectPathEvaluator = require('../').Memory;

describe('OPE.Memory', function () {
    var doc = {
            foo: {
                bar: [
                    { id: 'bob' },
                    { id: 'marry' }
                ]
            },
            bob: { '@ref': ['foo', 'bar', 0] },
            marry: { '@ref': ['foo', 'bar', 1] }
        },
        pe = new MemoryObjectPathEvaluator(doc);

    it('should...', function (done) {
        var src = pe.bind([['bob', 'marry']]);

        src.get(['id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            { path: ['bob'], value: { '@ref': ['foo', 'bar', 0] } },
                            { path: ['foo', 'bar', 0, 'id'], value: doc.foo.bar[0].id },
                            { path: ['marry'], value: { '@ref': ['foo', 'bar', 1] } },
                            { path: ['foo', 'bar', 1, 'id'], value: doc.foo.bar[1].id }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });

    it('should...', function (done) {
        var src = pe.bind(['foo', 'bar']);

        src.get(['length'], [{to: 1}, 'id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            { path: ['foo', 'bar', 'length'], value: doc.foo.bar.length },
                            { path: ['foo', 'bar', 0, 'id'], value: doc.foo.bar[0].id },
                            { path: ['foo', 'bar', 1, 'id'], value: doc.foo.bar[1].id }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });
});

