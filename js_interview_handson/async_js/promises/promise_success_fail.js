let resolved_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Successfully resolved the promise");
    }, 1500);
});

let rejected_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Rejected the promise successfully");
    }, 1500);
});

resolved_promise.then(msg => {
    console.log(msg);
}).catch(err => {
    console.log(err)
}).finally(() => {
    console.log("Finished with resolved promise object")
});

rejected_promise.then(msg => {
    console.log(msg);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log("Done with rejected promise");
})