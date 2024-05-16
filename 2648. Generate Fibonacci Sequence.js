var fibGenerator = function* () {
    let arr = [0, 1];
    let count = 0;
    while (true) {
        yield arr[count++];
        let len = arr.length - 1;
        arr.push(arr[len] + arr[len - 1])
    }
};

let flag = fibGenerator()
for (let i = 0; i < 10; i++) {
    console.log(flag.next().value);
}