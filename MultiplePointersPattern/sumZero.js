/**
 * White a func called sumZero wich accepts a sorted array of integers. The func
 * should find the first pair where the sum is 0
 */

console.log(sumZero([-22,-20,1,2,3,4,5,10,15,20,21])) // [-3,3] 

 function sumZero(arr){
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum == 0){
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--
        }else{
            left++
        }
    }
 }