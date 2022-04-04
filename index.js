// Code your solution in this file!
function  distanceFromHqInBlocks(a){
    let pickup = 42 - a;

    pickup=Math.abs(pickup)
return pickup

}

function distanceFromHqInFeet(a){
    
    return  distanceFromHqInBlocks(a) * 264

}
function  distanceTravelledInFeet(a,b){
    let answer= Math.abs(a-b)
    return answer *264
}
function calculatesFarePrice(a, b){
    let posValue= Math.abs(distanceTravelledInFeet(a,b))
    if (posValue <=400){;
    return 0
    
}
else if (posValue > 400 && posValue < 2000){
    posValue -= 400
    return Math.abs(posValue) *.02
}
else if (posValue > 2000 && posValue <2500 ){
    return 25
}
else {
    return 'cannot travel that far'
}

    
    
}