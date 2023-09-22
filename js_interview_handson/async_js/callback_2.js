function fetchData(cb) {
    setTimeout(() => {
        let data = {
            status: "OK",
            message: "This is called asynchronously"
        };
        // cb() : Basically we're calling the anonymous function passed to fetchData here.
        // it will only be executed when async process (in this case setTimeout completes)
        cb(data);
    }, 2000);
}

// Passing function when calling for sync like execution
console.log("============Starting to call the fetchData with function as argument=========");

fetchData((data) => {
    console.log("Value of data is :: " + JSON.stringify(data));
    console.log("fetchData call ends here (inside the call)");
})