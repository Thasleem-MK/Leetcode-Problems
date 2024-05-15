var cancellable = function (fn, args, t) {
    fn(...args);
    const time = setInterval(() => fn(...args), t);
    const cancel = () => { clearInterval(time) };
    return cancel;
};