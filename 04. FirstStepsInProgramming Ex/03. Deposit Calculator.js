//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
// 1.	Депозирана сума – реално число в интервала [0.00 … 10000.00];
// 2.	Срок на депозита(в месеци) – цяло число[1..12];
// 3.	Годишен лихвен процент – реално число в интервала [0.00 … 10000.00];
function depositCalculator(input){

let sumDeposed = Number(input[0]);
let timeInterval=Number(input[1]);
let ratePerYear=Number(input[2]);

let result=sumDeposed+timeInterval*((sumDeposed*ratePerYear/100)/12);

console.log(result);

}

depositCalculator([100,'12',20])