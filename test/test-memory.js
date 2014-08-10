/*globals describe, it */
var should = require('should'),
    MemoryJGLEvaluator = require('../').Memory;

describe('MemoryJGLEvaluator', function () {
    var doc = {
            foo: {
                bar: {
                    0: { id: 'bob' },
                    1: { id: 'marry' },
                    length: 2
                }
            },
            bob: { '@ref': ['foo', 'bar', 0] },
            marry: { '@ref': ['foo', 'bar', 1] },

            people: {
                0: { '@ref': ['bob'] },
                1: { '@ref': ['marry'] },
                length: 2
            },

            groups: {
                0: {
                    0: { '@ref': ['people', 0] },
                    1: { '@ref': ['people', 1] },
                    length: 2
                }
            }
        },
        pe = new MemoryJGLEvaluator(doc);

    it('should...', function (done) {
        var src = pe.bind([['bob', 'marry']]);

        src.get(['id']).
            toArray().
            subscribe(
                function (next) {
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

        src.get([{to: 1}, 'id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            {
                                path: [0, 'id'],
                                value: {
                                    0: doc.foo.bar[0],
                                    1: doc.foo.bar[1]
                                }
                            },
                            {
                                path: [1, 'id'],
                                value: {
                                    0: doc.foo.bar[0],
                                    1: doc.foo.bar[1]
                                }
                            }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });

    it('should...', function (done) {
        var src = pe.bind(['groups', 0, {to: 1}]);

        src.get(['id']).
            toArray().
            subscribe(
                function (next) {
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
});

