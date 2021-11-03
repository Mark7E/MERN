// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];

function mergeDedupe(arr1, arr2) {

        let newArr = [];
        let i = 0;
        let j = 0;
    
        while(i < arr1.length && j < arr2.length){
            if(arr1[i] === arr2[j]){
                newArr.push(arr1[i]);
                i++;
                j++;
            }
            
            if(arr1[i] < arr2[j]){
                newArr.push(arr1[i]) ;
                i++;
            } else{
                newArr.push(arr2[j])
                j++;
            }
        
    }
    for (let x = i; x<arr1.length; x++){
        newArr.push(arr1[x])
    }

    for  (let y = j; y < arr2.length; y++){
        newArr.push(arr2[y])
    }

    for(let z = 0; z < newArr.length; z++){
        if(newArr[z] == newArr[z+1]){
            newArr.splice(z, 1);
            z--;
        }
        // console.log(newArr)   
    }
    return newArr;
}
console.log(mergeDedupe([1, 3, 3, 5, 8, 10],[1, 3, 4, 5]))
 // [ 1, 3, 4, 5, 8, 10 ]
 console.log(mergeDedupe(arrA,arrB))
// console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6])) // [1, 2, 3, 4, 5, 6, 8, 10, 12]