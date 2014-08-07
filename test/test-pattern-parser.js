/*globals describe, it */
var should = require('should'),
    OPE = require('../'),
    Parser = OPE.Pattern.Parser;

describe('OPE.Pattern.Parser', function () {

    describe('.isInteger()', function () {
        it('should return true for a integer', function () {
            Parser.isInteger(2).should.be.true;
        });
    });

    describe('.isIntegers()', function () {
        it('should return true for an array of integers', function () {
            Parser.isIntegers([0, 1, 2]).should.be.true;
        });
    });

    describe('.isRange()', function () {
        it('should return true for ranges', function () {
            Parser.isRange({ to: 9 }).should.be.true;
            Parser.isRange({ from: 0, to: 9 }).should.be.true;
        });
    });
    
    describe('.isIntegersOrRange()', function () {
        it('should return true for a range or an array of integers', function () {
            Parser.isIntegersOrRange([0, 1, 2]).should.be.true;
            Parser.isIntegersOrRange({ to: 9 }).should.be.true;
            Parser.isIntegersOrRange({ from: 0, to: 9 }).should.be.true;
        });
    });

    describe('#match()', function () {
        it('should match a path and return the matches as nested arrays', function () {
            var p = new Parser('foo', 'bar', Parser.INTEGERS);

            p.match(['foo', 'bar', [1, 2, 3]]).
                should.
                eql([['foo'], ['bar'], [1, 2, 3]]);

            p.match(['foo', 'bar', { from: 1, to: 3}]).
                should.
                eql([['foo'], ['bar'], [1, 2, 3]]);
        });

        it(
            'should return false if the query length and the parser segment lengths do not match',
            function () {
                var p = new Parser('foo', 'bar');
                p.match(['foo']).should.be.false;
            }
        );
    });

});

