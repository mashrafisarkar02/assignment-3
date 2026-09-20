// ******************** Problem 04 - Delete / Store **********************//

var fileName= "slipdf.txt";
var condition1 = fileName.endsWith('.pdf')
var condition2 = fileName.endsWith('.docx')
var condition3 = fileName.startsWith('#')
if(condition1 || condition2 || condition3){
    console.log('Store');
}
else{
    console.log('Delete');
}