function sum(a, b) {
    return a + b;
}

function capAtTen(a, b) {
    if (a + b > 10) {
        return 10;
    } else {
        return a + b;
    }
}

module.exports = { sum, capAtTen };
