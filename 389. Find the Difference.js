var findTheDifference = function (s, t) {
    const arrS = s.split("");
    const arrT = t.split('');
    for (let i = 0; i < arrS.length; i++) {
        if (arrT.includes(arrS[i])) {
            let index = arrT.indexOf(arrS[i]);
            arrT.splice(index, 1);
        }
    }
    return arrT[0];
};
let s = 'abcd';
let t = 'abcde';
console.log(findTheDifference(s, t));