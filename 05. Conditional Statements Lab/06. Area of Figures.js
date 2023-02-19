//square, rectangle, circle или triangle
function areas(input){

    let figure = input[0];
    let area = 0;
    
    if(figure === 'square'){
        
        let side = Number(input[1]);
        
        area=side*side;
    }
    
    if(figure === 'rectangle'){
        
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);
        
        area = side1 * side2;
    }
    
    if(figure === 'circle'){

        let radius = Number(input[1]);
        
        area = (radius * radius)* Math.PI;
    }
    
    if(figure === 'triangle'){

        let side = Number(input[1]);
        let height = Number(input[2]);

        area = side * height/2
    }

    console.log(area.toFixed(3));
    

}

areas(["circle", 6]);