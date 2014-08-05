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
                    // We get each node twice since we our bound to both bob and
                    // marry nodes
                    next.
                        should.
                        eql([
                            { path: ['id'], value: doc.foo.bar[0] },
                            { path: ['id'], value: doc.foo.bar[1] }
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
                            { path: ['length'], value: doc.foo.bar },
                            { path: [0, 'id'], value: doc.foo.bar },
                            { path: [1, 'id'], value: doc.foo.bar }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });
});

