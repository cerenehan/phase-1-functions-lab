
function distanceFromHqInBlocks(blockNumber) {
    const hqBlock = 42; 
    return Math.abs(blockNumber - hqBlock); 
  }


  function distanceFromHqInFeet(blockNumber) {
    const hqBlock = 42; 
    const feetPerBlock = 264; 
    return Math.abs(blockNumber - hqBlock) * feetPerBlock; 
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264; 
    return Math.abs(endBlock - startBlock) * feetPerBlock;
  }
  function calculatesFarePrice(startBlock, destinationBlock) {
    const feetPerBlock = 264; 
    const distanceInFeet = Math.abs(destinationBlock - startBlock) * feetPerBlock;
  
    if (distanceInFeet <= 400) {
      return 0; 
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const fareDollars = (distanceInFeet - 400) * 0.02; 
      return fareDollars;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }