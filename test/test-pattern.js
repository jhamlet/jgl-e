/*globals describe, it */
var should = require('should'),
    Rx = require('rx'),
    PatternJGLEvaluator = require('../').Pattern,
    Parser = PatternJGLEvaluator.Parser,
    Handler = PatternJGLEvaluator.Handler;

describe('PatternJGLEvaluator', function () {
    var doc = {
            foo: {
                bar: [
                    { id: 'bob' },
                    { id: 'marry'}
                ]
            },
            people: [
                { '@ref': ['bob'] },
                { '@ref': ['marry'] }
            ],
            groups: [
                [
                    { '@ref': ['people', 0] },
                    { '@ref': ['people', 1] }
                ]
            ]
        },
        pe = new PatternJGLEvaluator(
            [
                Handler.GET,
                ['foo', 'bar', Parser.INTEGERS, 'id'],
                function (query) {
                    var indices = query[2];

                    return Rx.Observable.
                        fromArray(indices).
                        select(function (idx) {
                            return {
                                path: ['foo', 'bar', idx, 'id'],
                                value: doc.foo.bar[idx].id
                            };
                        });
                }
            ],
            [
                Handler.GET,
                ['foo', 'bar', 'length'],
                function () {
                    return Rx.Observable.
                        returnValue({
                            path: ['foo', 'bar', 'length'],
                            value: doc.foo.bar.length
                        });
                }
            ],
            [
                Handler.GET,
                [['bob', 'marry']],
                function (query) {
                    var list = doc.foo.bar;

                    return Rx.Observable.
                        fromArray(query[0]).
                        select(function (id) {
                            var len = list.length,
                                i = 0;

                            for (; i < len; i++) {
                                if (list[i].id === id) {
                                    return {
                                        path: [id],
                                        value: { '@ref': ['foo', 'bar', i] }
                                    };
                                }
                            }

                            return { path: [id] };
                        });
                }
            ],
            [
                Handler.GET,
                ['people', Parser.INTEGERS],
                function (query) {
                    return Rx.Observable.
                        fromArray(query[1]).
                        select(function (idx) {
                            return {
                                path: ['people', idx],
                                value: doc.people[idx]
                            };
                        });
                }
            ],
            [
                Handler.GET,
                ['groups', Parser.INTEGERS, Parser.INTEGERS],
                function (query) {
                    return Rx.Observable.
                        fromArray(query[1]).
                        selectMany(function (grpIdx) {
                            return Rx.Observable.
                                fromArray(query[2]).
                                select(function (persIdx) {
                                    return {
                                        path: ['groups', grpIdx, persIdx],
                                        value: doc.groups[grpIdx][persIdx]
                                    };
                                });
                        });
                }
            ]
        );

    it('should handle references', function (done) {
        var expectedValue = { bob: { id: 'bob' }, marry: { id: 'marry' } };

        pe.get([['bob', 'marry'], 'id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            { path: ['bob', 'id'], value: expectedValue },
                            { path: ['marry', 'id'], value: expectedValue }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });

    it('should handle multiple references', function (done) {
        var expectedValue = {
                people: {
                    0: { id: 'bob' },
                    1: { id: 'marry'}
                }
            };

        pe.get(['people', {to: 1}, 'id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            { path: ['people', 0, 'id'], value: expectedValue },
                            { path: ['people', 1, 'id'], value: expectedValue }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });

    it('should handle deep references', function (done) {
        var expectedValue = {
                groups: {
                    0: {
                        0: { id: 'bob' },
                        1: { id: 'marry' }
                    }
                }
            };

        pe.get(['groups', {to: 0}, {to: 1}, 'id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            { path: ['groups', 0, 0, 'id'], value: expectedValue },
                            { path: ['groups', 0, 1, 'id'], value: expectedValue }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });

    it('should return path values', function (done) {
        var expectedValue = {
                foo: {
                    bar: {
                        0: { id: 'bob' },
                        1: { id: 'marry' }
                    }
                }
            };

        pe.get(['foo', 'bar', 'length'], ['foo', 'bar', {to: 1}, 'id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            {
                                path: ['foo', 'bar', 'length'],
                                value: {
                                    foo: {
                                        bar: {
                                            length: 2
                                        }
                                    }
                                }
                            },
                            { path: ['foo', 'bar', 0, 'id'], value: expectedValue },
                            { path: ['foo', 'bar', 1, 'id'], value: expectedValue },
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });
});

