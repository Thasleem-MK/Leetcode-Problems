var debounce = function (fn, t) {
    let timeOutId;
    return function (...args) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => { fn(...args) }, t)
    }
};

const log = debounce(console.log, 100);
log("Debounced");  // terminated
log("Hello")   // Only execute this