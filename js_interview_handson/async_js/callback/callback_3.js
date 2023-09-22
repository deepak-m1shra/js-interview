function cSqr(n, cb) {
    setTimeout(() => {
        cb(n * n);
    }, 2000);
}

console.log("Call started")
let result = cSqr(2, (data) => {
    console.log(data)
    console.log("Call completed")
});

console.log("Program last line")
