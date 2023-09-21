 // Code your solution in this file!

/* let pickupLoc = 50;
function distanceFromHqInBlocks() {
   if(pickupLoc === 43){
    return 43 - 42;
   }
   else if(pickupLoc === 50){
    return 50 - 42;
   }
   else if(pickupLoc === 34){
    return 42 - 34;
   } */

/* function distanceFromHqInBlocks(block = 42){
    const pickupLoc1 = 43 - block;
    const pickupLoc2 = 50 - block;
    const pickupLoc3 = block - 34;
    return [pickupLoc1, pickupLoc2, pickupLoc3]
}
console.log(distanceFromHqInBlocks());  */

/* function distanceFromHqInBlocks(location) {
    location = [50, 43, 34];
    let block = () => for(let i=0; i<location.length; i++){
       Math.abs(location - 42);
    }
  }
  console.log(distanceFromHqInBlocks()) */

 /*  function distanceFromHqInBlocks(location) {
    location = 50;
    if(location === 50){
        return Math.abs(location - 42);
    }
     else if(location === 43){
        return  Math.abs(location- 42);
    }
    else if(location === 34){
        return  Math.abs(location - 34)
    };

  }
  console.log(distanceFromHqInBlocks())
     */

/*   const location1 = 43;
  const location2 = 50;
  const location3 = 34;

  function distanceFromHqInBlocks(location){
  location = 50 
    if(location === location1){
        return Math.abs(location1 - 42)
    }
    if(location === location2){
        return Math.abs(location2 - 42)
    }
    if(location === location3){
        return Math.abs(42 - location3)
    }

  }

  console.log(distanceFromHqInBlocks()) */

  /* function distanceFromHqInBlocks(block = 43){
    if(block === 43){
        return block - 42
    }
    
  }
  console.log(distanceFromHqInBlocks()) */

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
  


  
  