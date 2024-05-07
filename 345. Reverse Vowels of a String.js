var reverseVowels = function (s) {
    let final = s.split("");;
    const letters = 'aeiouAEIOU';
    const vow = s.match(/[aeiou]/gi);
    for (let i = 0; i < final.length; i++) {
        if (letters.includes(final[i])) {
            let pop = vow.pop();
            final[i] = pop;
        }
    }
    return final.join("");
};
console.log(reverseVowels("Hello"));