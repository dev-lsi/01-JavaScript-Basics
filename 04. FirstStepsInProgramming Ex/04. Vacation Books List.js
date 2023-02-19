// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000];
// 2.	Страници, които може да прочита за 1 час – цяло число в интервала [1…1000];
// 3.	Броя на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000];

function hoursToRead(input){

    let allPages=Number(input[0]);
    let pagesPerHour=Number(input[1]);
    let days=Number(input[2]);
    
    let pagesPerDay = allPages/days; 
    let hoursToRead = pagesPerDay/pagesPerHour;
    
    console.log(hoursToRead);

}

hoursToRead([150,10,15]);