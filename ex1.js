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

find_sum(arr, num);

// Time Complexity: O(n²)
// Space Complexity: O(1)