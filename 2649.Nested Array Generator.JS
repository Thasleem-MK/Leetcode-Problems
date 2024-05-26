var inorderTraversal = function* (arr) {
    for (let item of arr) {
        if (Array.isArray(item)) {
            yield* inorderTraversal(item);
        } else {
            yield item;
        }
    }
};

const gen = inorderTraversal([[[6]], [1, 3], []]);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);