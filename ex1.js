let arr = [1, 5, 7, 6];
let num = 7;

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
    list = list.sort(); // [1, 5, 6, 7]

    let middle = list[Math.floor(list.length / 2)];
    let i = 0;
    let j = 1;
    let left, right;
    let pairs = [];

    while(right !== middle && left !== middle) {
        left = list[i];
        right = list[list.length - j];

        if(left + right === n) {
            pairs.push([left, right]);
            i++;
        } else {
            j++;
        }
    }    
    return pairs;
}

console.log(find_summation(arr, num));