//: 1 USD = 1.79549 BGN.

function convertor(input){

    let dolars = Number(input[0]);
    let levs = dolars*1.79549;
    console.log(levs);
}

convertor(['22']);