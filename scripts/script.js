
const courselist = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1515", name: "Scripting for IT" },
    { code: "ACIT 1630", name: "Database Systems" },
];




function findCourseList(){

    let usernumber;

    do {
        usernumber = prompt("Please enter a 4-digit number: ");
    } while (isNaN(usernumber) === true || usernumber.length!=4);


    let foundCourse = false;

    for (let i = 0; i < courselist.length; i++) {
        if (courselist[i].code.includes(usernumber)) {
        console.log(`Yes I am taking the course: ${courselist[i].code} - ${courselist[i].name}`);
        document.querySelector(`.ACIT${usernumber}`).classList.add("selected");
        foundCourse = true;
        break;
        }
    }

    if(foundCourse === false){ 
        courselist.push({code: usernumber, name: "N/A" });
        console.log(`Successfully adding new course: ${usernumber}!`);
    };

};

findCourseList();


const CourseArray = [];
    

function createCourseArray(){

    for (let i = 0; i < courselist.length; i++) {
        let newcode = courselist[i].code + ' - ' +courselist[i].name
        CourseArray.push({code: newcode, date:"Fall 2020"});
    };
};

createCourseArray();
console.log(CourseArray);