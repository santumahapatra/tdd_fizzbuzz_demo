const fizzbuzz = require('../src/fizzbuzz.js')
const expect = require('chai').expect

describe('Fizzbuzz', function() {
    describe('#calculate()', function() {
      it('should show fizz when input is a multiple of 3', function() {
        expect(fizzbuzz.calculate(3)).to.equal("fizz");
        expect(fizzbuzz.calculate(6)).to.equal("fizz");
        expect(fizzbuzz.calculate(9)).to.equal("fizz");
        expect(fizzbuzz.calculate(33)).to.equal("fizz");
      });

      it("should show 'buzz' when input is a multiple of 5", function() {
        expect(fizzbuzz.calculate(5)).to.equal("buzz");
        expect(fizzbuzz.calculate(10)).to.equal("buzz");
        expect(fizzbuzz.calculate(20)).to.equal("buzz");
        expect(fizzbuzz.calculate(55)).to.equal("buzz");
        expect(fizzbuzz.calculate(155)).to.equal("buzz");
      });

      it("should show 'fizzbuzz' when input is a multiple of both 3 and 5", function() {
        expect(fizzbuzz.calculate(15)).to.equal("fizzbuzz");
        expect(fizzbuzz.calculate(30)).to.equal("fizzbuzz");
        expect(fizzbuzz.calculate(60)).to.equal("fizzbuzz");
        expect(fizzbuzz.calculate(990)).to.equal("fizzbuzz");
        expect(fizzbuzz.calculate(15000000)).to.equal("fizzbuzz");
      });



      it("should scream 'WRONG INPUT' for incorrect input", function(){
        expect(fizzbuzz.calculate(0)).to.equal("WRONG INPUT");
        expect(fizzbuzz.calculate(-1)).to.equal("WRONG INPUT");
        expect(fizzbuzz.calculate("string")).to.equal("WRONG INPUT");
        expect(fizzbuzz.calculate(2.5)).to.equal("WRONG INPUT");
        expect(fizzbuzz.calculate(true)).to.equal("WRONG INPUT");
      })

      it("should show 'NOT DIVISIBLE' otherwise", function(){
        expect(fizzbuzz.calculate(1)).to.equal("NOT DIVISIBLE");
        expect(fizzbuzz.calculate(2)).to.equal("NOT DIVISIBLE");
        expect(fizzbuzz.calculate(11)).to.equal("NOT DIVISIBLE");
      })
    });
  });