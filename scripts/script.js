
const courselist = [
    { code: "ACIT 1620", name: "Web Fundamental Technologies" },
    { code: "ACIT 1515", name: "Scripting for IT" },
    { code: "ACIT 1630", name: "Database Systems" },
];



const CourseArray = [];
    

function createCourseArray(){

    for (let i = 0; i < courselist.length; i++) {
        let newcode = courselist[i].code + ' - ' +courselist[i].name
        CourseArray.push({code: newcode, date:"Fall 2020"});
    };
};

createCourseArray();
console.log(CourseArray);