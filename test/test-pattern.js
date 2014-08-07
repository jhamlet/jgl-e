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
            }
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
                ['foo', 'bar', 'length'],
                function () {
                    return Rx.Observable.
                        returnValue({
                            path: ['foo', 'bar', 'length'],
                            value: doc.foo.bar.length
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

