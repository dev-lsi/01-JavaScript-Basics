function evenOrOdd(input){

    let num=Number(input[0]);
    let isEven=true;
    
    if(num % 2 === 0){
         
        isEven=true;

    }else{

        isEven = false;
    }

    if(isEven){
        
        console.log('even');
        
    }else{
        console.log('odd');
    }


}

evenOrOdd([5])