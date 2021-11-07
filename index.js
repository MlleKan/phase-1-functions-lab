// Code your solution in this file!

// function factorial(num) {
//     if (num < 0) return undefined;
//     if (num == 0) return 1;
//     let x = num - 1;
//     while (x > 1) {
//       num *= x;
//       x--;
//     }
//     return num;
//   }

function distanceFromHqInBlocks(pickup) {
    if ( pickup > 42 ) {
    return pickup - 42
    }

    else {
        return 42 - pickup
    }

}
distanceFromHqInBlocks(43);


function distanceFromHqInFeet(pickup) {
    if ( pickup > 42){
        return (pickup - 42)*264
    }
    else{
        return (42 - pickup)*264
    }
}
distanceFromHqInFeet(50)    
    
function distanceTravelledInFeet(start, end) {
   if (start > 42) {
       return (end - start) * 264
   }
   else {
       return (start - end )* 264
   }

}
distanceTravelledInFeet(28,34)



function calculatesFarePrice(start,end){
    const feet = distanceTravelledInFeet(start,end)
    if (feet <=  400){
        return 0
    }else if (feet > 400 && feet <=2000 ){
        return (feet - 400) * .02
    }else if (feet > 2000 && feet < 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
}



