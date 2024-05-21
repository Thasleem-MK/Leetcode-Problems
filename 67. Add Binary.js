var addBinary = function (a, b) {
    const BinA = `0b${a}`
    const BinB = `0b${b}`
    const result = BigInt(BinA) + BigInt(BinB);
    return result.toString(2);
};

console.log(addBinary("11","1"));