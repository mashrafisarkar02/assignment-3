// **************** PH Email Generator ***************************//

var student = { name: "mashrafi" , roll: 17122 ,department: "psychology" };
var result = student.name
    .concat(student.roll)
    .concat('.', student.department)
    .concat('@ph.ac.bd');
console.log(result);