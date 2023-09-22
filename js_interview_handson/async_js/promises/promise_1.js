let pr_pending = new Promise(() => {

});
console.log("Details of PENDING promise");
console.log(pr_pending);

let pr_resolved = new Promise((resolve) => {
    resolve("Resolved...");
});
console.log("Details of RESOLVED promise");
console.log(pr_resolved);

let pr_rejected = new Promise((resolve, reject) => {
    reject("Rejected..").then().catch("Catching after REJECT")
});
console.log("Details of REJECTED promise");
console.log(pr_rejected)