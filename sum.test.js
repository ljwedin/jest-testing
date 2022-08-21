const { sum, capAtTen } = require('./sum');

test('adds 1 +  2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 9 + 9 to return 10', () => {
    expect(capAtTen(9, 9)).toBe(10);
});
