 // Code your solution in this file!

function distanceFromHqInBlocks(pickupLoc) {
    const result = Math.abs(pickupLoc - 42);
    return result;
  }

console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(pickupLoc){
    const result =  Math.abs(pickupLoc - 42);
    return (result * 264);
}
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination){  
    return Math.abs(destination - start)*264  
}
console.log(distanceTravelledInFeet(43, 48))


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; 
    } 
    else if (distance <= 2000) {
      const fare = (distance - 400) * 0.02;
      return fare;
    } 
    else if (distance <= 2500) {
      return 25; 

    } 
    else {
      return 'cannot travel that far'; 
    }
  }
  


  
  