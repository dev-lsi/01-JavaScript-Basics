//The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."

function projects(input){
let name=input[0];
let count=input[1];
let result=count*3;
console.log(`The architect ${name} will need ${result} hours to complete ${count} project/s.`);
}

projects(['Goshko',5]);