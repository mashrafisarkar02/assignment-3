// *********************** Current Salary ***********************//
var experience = 40;
var startingSalary = 30000;
var salary = startingSalary;
var year = 1;
while(year <= experience){
    salary = salary +salary * 0.05;
    year++
}
console.log('Increase Salary:',salary.toFixed(2) );