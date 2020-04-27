const find_duplicate = (arr) => {
    let duplicates = [];
    let number = null;

    for(let i = 0; i < arr.length; i++) {
        number = arr[i];
        for(let j = 1; j < arr.length; j++) {
            if(arr.indexOf(arr[j]) === i) {
                continue;
            }
            if(number === arr[j]) {
                if(!duplicates.includes(number)) {
                    duplicates.push(number);
                }
            }
        }
    }
    console.log(`The duplicates are ${duplicates}`);
}

let array = [1, 2, 5, 5, 6, 8, 9, 9, 12, 5];

find_duplicate(array);

// Time Complexity: O(n²)
// Space Complexity: O(n)