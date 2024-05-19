var join = function (arr1, arr2) {
    const result = {};
    [...arr1, ...arr2].map((element) => {
        result[element.id] = { ...result[element.id], ...element }
    })
    return Object.values(result)
};

console.log(join([{ "id": 1, "x": 1 }, { "id": 2, "x": 9 }], [{ "id": 3, "x": 5 }]));