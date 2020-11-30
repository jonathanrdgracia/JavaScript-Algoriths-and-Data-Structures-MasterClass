/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and
 * counts the unique values in the array. There can be negative numbers in the array
 *    i
 * [1,2,1,1,1,2]
 *            j
 */


console.log(countUniqueValues([1,2,2,5,5,7,7,99]));

function countUniqueValues(arr){
    if(arr.lenght <= 0) return 0
   let i = 0;
    
    for(let j = 1; j < arr.length; j++){
      if(arr[i] !== arr[j]){
        i += 1
        arr[i] = arr[j]
      }
    }
    return ++ i
}