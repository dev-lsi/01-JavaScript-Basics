// дали съвпада с фразата "s3cr3t!P@ssw0rd". 
// При съвпадение да се изведе "Welcome". 
// При несъвпадение да се изведе "Wrong password!". 

function check(input){

    let addedPass=input[0];
    
    if(addedPass === "s3cr3t!P@ssw0rd"){

        console.log('Welcome');

    }else{

        console.log('Wrong password!');

    }
}

check("sdc")