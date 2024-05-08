var expect = function (val) {
    return {
        toBe: (val2) => (val === val2 ? true : (() => { throw new Error("Not Equal") })()),
        notToBe: (val2) => (val !== val2 ? true : (() => { throw new Error("Equal") })())
    }
};