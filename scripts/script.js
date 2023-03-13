
let courseList = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1515", name: "Scripting for IT" },
    { code: "ACIT 1630", name: "Database Systems" },
];


let usernumber;
do {
    usernumber = prompt("Please enter a 4-digit number: ");
} while (isNaN(usernumber) === true || usernumber.length!=4);