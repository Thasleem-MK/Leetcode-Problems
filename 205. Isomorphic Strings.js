var isIsomorphic = function (s, t) {
    let sLength = s.length;
    let tLength = t.length;
    if (sLength !== tLength) return false;

    let sArr = [[], []];
    let tArr = [[], []];

    for (let i = 0; i < sLength; i++) {

        if (!sArr[0].includes(s[i])) {
            sArr[0].push(s[i]);
            let flag = []
            s.split("").forEach((ele, index) => {
                if (ele == s[i]) { flag.push(index) }
            })
            sArr[1].push(flag);
        }

        if (!tArr[0].includes(t[i])) {
            tArr[0].push(t[i]);
            let flag = [];
            t.split("").forEach((ele, index) => {
                if (ele == t[i]) { flag.push(index) }
            })
            tArr[1].push(flag);
        }
    }
    if (sArr[1].join("") === tArr[1].join("")) { return true }
    return false
};

console.log(isIsomorphic("title",'paper'));