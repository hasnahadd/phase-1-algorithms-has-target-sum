// function hasTargetSum(array, target) {
//   arrayNew=[];
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
//   arrayNew.push(element);
//   for(let j= index+1; j< array.length; j++){
//     const element1 = array[j];
//     arrayNew.push(element1);
// if(element + element1 == target){
// return true

// }
//   }
// }
//   return false;
//   return arrayNew;}
function hasTargetSum(array, target) {
  return array.map((element, index) => 
    array.slice(index + 1).find(element1 => element + element1 === target)
  ).some(foundElement => foundElement !== undefined);
}

  // Write your algorithm here







/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/




/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");


  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
