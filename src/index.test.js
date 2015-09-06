var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-names', function () {
    describe('all', function () {
        it('should be an array of strings', function () {
            function isArrayOfStrings(array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
            
            expect(starWars.all).to.satisfy(isArrayOfStrings);
        });
        
        it('should include `Luke Skywalker`', function () {
            expect(starWars.all).to.include('Luke Skywalker');
        });
    });
    
    describe('random', function () {
        it('should return a random item from the starWars.all', function () {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
        
        it('should return different random items when invoked subsequently', function () {
            var firstRandomItem = starWars.random(), secondRandomItem = starWars.random();
            
            expect(firstRandomItem).to.not.equal(secondRandomItem);
        });
    });
});