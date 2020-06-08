//unit test for substring.js
const {findShortest} = require('./substring.js');

describe('findShortest\' test', () => {
    let str, arr;

    it('should return substring containing all the words', () => {
        str = 'She had a cat that was cute. The dog was chasing her around.';
        arr = ['cat', 'dog', 'chasing'];
        expect(findShortest(str, arr)).toEqual('cat that was cute. The dog was chasing');
    });

    it('should return shortest substring when there are multiple possibilities', () => {
        str = 'She had a cat that was cute. The dog was chasing her around. The cat was annoyed.';
        arr = ['cat', 'dog', 'chasing'];
        expect(findShortest(str, arr)).toBe('dog was chasing her around. The cat');
        str = 'She had a cat that was cute. The dog was chasing her around. The cat was annoyed. Blah blah blah here is cat chasing dog is shorter.';
        expect(findShortest(str, arr)).toBe('cat chasing dog');
        str = 'The cat is cute. The cat and dog. They were chasing each other.';
        expect(findShortest(str, arr)).toBe('cat and dog. They were chasing');
    });

    it('should handle capitalizations and punctuations in the string', () => {
        str = 'Cat, rabbit, and dog. The dog was chasing her around.';
        arr = ['cat', 'dog', 'chasing']
        expect(findShortest(str, arr)).toBe('Cat, rabbit, and dog. The dog was chasing');
        str = 'Cat, rabbit. And dog. Chasing! The cat, and dog, were chasing each other. With rabbit.'
        arr = ['cat','dog', 'chasing', 'rabbit'];
        expect(findShortest(str, arr)).toBe('Cat, rabbit. And dog. Chasing!');
    });

});
