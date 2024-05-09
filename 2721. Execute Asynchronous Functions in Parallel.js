var promiseAll = function (functions) {
    return Promise.all(functions.map(ele => ele()));
};
const functions = [() => new Promise(resolve => setTimeout(() => resolve(4), 50)), () => new Promise(resolve => setTimeout(() => resolve(10), 150)), () => new Promise(resolve => setTimeout(() => resolve(16), 100))];

console.log(promiseAll(functions));