function zooShop(input){

    //"{крайната сума} lv."
    let dogs=Number(input[0]);
    let noDogs=Number(input[1]);

    let sum=dogs*2.5+noDogs*4;

    console.log(`${sum} lv.`);

}

zooShop([3,5]);