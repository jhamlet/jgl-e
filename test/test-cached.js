/*globals describe, it, beforeEach */
var should = require('should'),
    JGLE = require('../'),
    MemoryJGLEvaluator = JGLE.Memory,
    CachedJGLEvaluator = JGLE.Cached;

describe('CachedJGLEvaluator', function () {
    var doc, cacheDoc, proxy, cache, pe;

    beforeEach(function () {
        doc = {
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
        };
        cacheDoc = {},
        proxy = new MemoryJGLEvaluator(doc);
        cache = new MemoryJGLEvaluator(cacheDoc);
        pe = new CachedJGLEvaluator({ cache: cache, proxy: proxy });
    });


    it('should poplute the cache', function (done) {
        var expected = { foo: { bar: { 0: doc.foo.bar[0] } } };

        pe.get(['foo', 'bar', 0, 'id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            {
                                path: ['foo', 'bar', 0, 'id'],
                                value: expected
                            }
                        ]);

                    cacheDoc.should.eql(expected);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });

    it.only('should fetch from the cache, and then the proxy', function (done) {
        var expected = {
                foo: {
                    bar: {
                        0: doc.foo.bar[0],
                        1: doc.foo.bar[1]
                    }
                }
            },
            count = 0;
        // pref-fill the cache
        cacheDoc.foo = { bar: { 1: doc.foo.bar[1] } };

        pe.get(['foo', 'bar', {to: 1}, 'id']).
            doAction(function (pv) {
                if (count === 0) {
                    pv.should.eql({
                        path: ['foo', 'bar', 1, 'id'],
                        value: {
                            foo: {
                                bar: { 1: { id: 'marry' } }
                            }
                        }
                    });
                }
                else {
                    pv.should.eql({
                        path: ['foo', 'bar', 0, 'id'],
                        value: expected
                    });
                }
                count++;
            }).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                        // index 1 should come first, as it is pre-filled in the
                        // cache. The values are the same due to the fact that by the
                        // time they get here, the second path has updated the object
                            {
                                path: ['foo', 'bar', 1, 'id'],
                                value: expected
                            },
                            {
                                path: ['foo', 'bar', 0, 'id'],
                                value: expected
                            }
                        ]);

                    cacheDoc.should.eql(expected);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });
});

