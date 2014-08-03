/*globals describe, it */
var should = require('should'),
    MemoryObjectPathEvaluator = require('../').Memory;

describe('OPE.Memory', function () {
    var doc = {
            foo: {
                bar: {
                    0: {
                        id: 'bob'
                    },
                    1: {
                        id: 'marry'
                    },
                    length: 2
                }
            },
            bob: ['foo', 'bar', 0],
            marry: ['foo', 'bar', 1]
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
                            [['id'], doc.foo.bar[0]],
                            [['id'], doc.foo.bar[1]]
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
                            [['length'], doc.foo.bar],
                            [[0, 'id'], doc.foo.bar],
                            [[1, 'id'], doc.foo.bar]
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });
});

