Number.prototype.isPrime = function() {
        let i =2;
        while (i<this){
            if( this % i === 0 ) {
                return false;
            }
}
        return true;
    }
    const { performance } = require('perf_hooks');
    const start = performance.now();
    let primeCount = 0;
    let num = 2; // for math reasons, 1 is considered prime
    while( primeCount < 1e4 ) {
        if( num.isPrime() ) {
            primeCount++;
        }
        num++;
    }
    console.log(`The 10,000th prime number is ${num-1}`);
    console.log(`This took ${performance.now() - start} milliseconds to run`);


const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(nums){
    // This section runs through the array and switches numbers
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
        if(nums[i] > nums[j]){
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            console.log(nums);
        }
    }
}
    return nums;
}

console.log(bubbleSort(nums1));
// console.log(bubbleSort(nums2));
// console.log(bubbleSort(nums3));