//•	"The final price is: {крайна цена на услугата} lv."
//•	"The discount is: {отстъпка} lv."

function greening(input){

let area=Number(input[0]);
let sum=area*7.61;
let discount=sum*0.18;
let total=sum-discount;

console.log(`The final price is: ${total} lv.`);
console.log(`The discount is: ${discount} lv.`);

}

greening(55);
