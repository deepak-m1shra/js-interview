let data;

function fetchData() {
    setTimeout(() => {
        data = { status: 201, message: "Value set for data" };
    });
}

function displayData() {
    console.log("Inside displayData(), printing data value")
    console.log(data);
    console.log("============== Function call completed, printing data value :: =============== " + data)
}

console.log("================ Starting to call async function...======================");

fetchData();
displayData();