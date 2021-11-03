/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 3, 2, 7];
const arrB1 = [2, 2, 3, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    let newArr = []
    let betterArr = []

    for (let i = 0; i < sortedA.length; i++) {
        newArr.push(sortedA[i])
    }
    for (let j = 0; j < sortedB.length; j++) {
        newArr.push(sortedB[j])
    }

    for (let x = 0; x < newArr.length; x++) {
        if (newArr[x] == newArr[x + 1]) {
            newArr.pop(x);
            // x--;
        }
    }

    return newArr // if next value is same has previous then remove dupe, check for multiples in array, create another array- iterate over
}

console.log(orderedIntersection(arrA1, arrB1))

// [
//   0, 1, 2, 2, 2,
//   7, 2, 2, 6, 6,
//   7
// ]

function orderedIntersection(sortedA, sortedB) {
    const newArr = [];

    for (let i = 0; i < sortedA.length; i++) {
        for (let j = 0; j < sortedB.length; j++) {
            if (sortedA[i] === sortedB[j]) {
                newArr.push(sortedA[i])
            } for (let x = 0; x < newArr.length; x++) {
                if (newArr[x] === newArr[x + 1]) {
                    newArr.pop(newArr[x])
                }
            }
        }
    }
    return newArr;
}


console.log(orderedIntersection(arrA1, arrB1))
console.log(orderedIntersection(arrA2, arrB2))
console.log(orderedIntersection(arrA3, arrB3))






/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
    const newArr = [];
    let idx1 = 0;
    let idx2 = 0;
    let temp;
    while (sortedA.length > idx1 && sortedB.length > idx2) {
        if (sortedA[idx1] == sortedB[idx2]) {
            if (temp != sortedA[idx1]) {
                newArr.push(sortedA[idx1])
                temp = sortedA[idx1]
            }
            idx1++;
            idx2++;
        }
        if (sortedA[idx1] < sortedB[idx2]) {
            idx1++;
        }
        if (sortedA[idx1] > sortedB[idx2]) {
            idx2++;
        }
    }
    return newArr;
}



