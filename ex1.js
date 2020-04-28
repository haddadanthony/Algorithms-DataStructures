// Given an unsorted array of integers and number n. Find a pair in the array where the sum is equal to n.
// E.g.
// Input:
// arr = [8,7,2,5,3,1]
// n = 10
// Output:
// Pair found at index 0 and 2
// or 
// Pair found at index 1 and 4

let arr = [7, 2, 4, 3, 8, 6, 1, 5];
let num = 9;

const find_sum = (list, n) => {
    let number = null;

    for(let i = 0; i < list.length; i++) {
        number = list[i];
        for(j = 1; j < list.length; j++) {
            if(list[j] + number === n) {
                console.log(`Pair found at index ${i} and ${j}`);
            }
        }
    }
}

// find_sum(arr, num);

// Time Complexity: O(n²)
// Space Complexity: O(1)

// Optimized version
const find_summation = (list, n) => {
    list = list.sort((a, b) => a - b);

    let middle = Math.floor(list.length / 2);
    let i = 0;
    let j = 1;
    let left, right;
    let pairs = [];

    while(i < middle || j < middle) {
        left = list[i];
        right = list[list.length - j];

        if(left + right === n) {
            pairs.push([left, right]);
            i++;
        } else {
            j++;
        }
        console.log(list);
    }    
    return pairs;
}

console.log(find_summation(arr, num));

// Time Complexity: O(n log n)
