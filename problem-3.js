// ************ Medicine Planner ****************//

var lastDay = 6;
var day = 1;
while( day <= lastDay){
    if(day % 3 == 0){
        console.log(day + '-' + 'medicine');
} else{
    console.log(day + '-' + 'rest')
 }
 day++;
}
