/*globals describe, it */
var should = require('should'),
    Rx = require('rx'),
    PatternOPEvaluator = require('../').Pattern,
    POPEParser = PatternOPEvaluator.Parser,
    POPEHandler = PatternOPEvaluator.Handler;

describe('OPE.Memory', function () {
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
        pe = new PatternOPEvaluator(
            [
                POPEHandler.GET,
                ['foo', 'bar', POPEParser.INTEGERS, 'id'],
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
                POPEHandler.GET,
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
                POPEHandler.GET,
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
                POPEHandler.GET,
                ['people', POPEParser.INTEGERS],
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
                POPEHandler.GET,
                ['groups', POPEParser.INTEGERS, POPEParser.INTEGERS],
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
        var src = pe.bind([['bob', 'marry']]);

        src.get(['id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            { path: ['bob'], value: { '@ref': ['foo', 'bar', 0] } },
                            { path: ['foo', 'bar', 0, 'id'], value: 'bob' },
                            { path: ['marry'], value: { '@ref': ['foo', 'bar', 1] } },
                            { path: ['foo', 'bar', 1, 'id'], value: 'marry' }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });

    it('should handle multiple references', function (done) {
        var src = pe.bind(['people', {to: 1}]);

        src.get(['id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            { path: ['people', 0], value: { '@ref': ['bob'] } },
                            { path: ['bob'], value: { '@ref': ['foo', 'bar', 0] } },
                            { path: ['foo', 'bar', 0, 'id'], value: 'bob' },
                            { path: ['people', 1], value: { '@ref': ['marry'] } },
                            { path: ['marry'], value: { '@ref': ['foo', 'bar', 1] } },
                            { path: ['foo', 'bar', 1, 'id'], value: 'marry' }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });

    it('should handle deep references', function (done) {
        var src = pe.bind(['groups', {to: 0}, {to: 1}]);

        src.get(['id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            { path: ['groups', 0, 0], value: { '@ref': ['people', 0] } },
                            { path: ['people', 0], value: { '@ref': ['bob'] } },
                            { path: ['bob'], value: { '@ref': ['foo', 'bar', 0] } },
                            { path: ['foo', 'bar', 0, 'id'], value: 'bob' },
                            { path: ['groups', 0, 1], value: { '@ref': ['people', 1] } },
                            { path: ['people', 1], value: { '@ref': ['marry'] } },
                            { path: ['marry'], value: { '@ref': ['foo', 'bar', 1] } },
                            { path: ['foo', 'bar', 1, 'id'], value: 'marry' }
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });

    it('should return path values', function (done) {
        var src = pe.bind(['foo', 'bar']);

        src.get(['length'], [{to: 1}, 'id']).
            toArray().
            subscribe(
                function (next) {
                    next.
                        should.
                        eql([
                            { path: ['foo', 'bar', 'length'], value: 2 },
                            { path: ['foo', 'bar', 0, 'id'], value: 'bob' },
                            { path: ['foo', 'bar', 1, 'id'], value: 'marry' },
                        ]);
                },
                function (error) {
                    throw error;
                },
                done
            );
    });
});

