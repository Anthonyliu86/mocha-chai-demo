var assert = chai.assert;


describe("#addNumber", function(){

    it("two number add test", function(){
        assert.equal(twoNumberAdd(3,5), 8);
    });

    it("three number add test", function(){
        assert.equal(threeNumberAdd(3,5, 1), 9);
    });

});