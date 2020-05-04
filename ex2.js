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

// find_duplicate(array);

// Time Complexity: O(n²)
// Space Complexity: O(n)

// Code Optimization

const track_duplicate = (arr) => {
    arr = arr.sort((a, b) => a - b);
    let j = 1;
    let dict = {};
    let indices = [];
    console.log(list);

    for(let i = 0; i < arr.length; i++) {
        if(arr[j] !== arr[i]) {
            j++;

        } else {
            while(arr[j] === arr[i]) {
                if(!indices.includes(i)) {
                    indices.push(i);
                }
                indices.push(j);
                j++;
            }
            dict[`${arr[i]}`] = indices;
            indices = [];
        }
    }
    return dict;
}

const list = [1, 2, 3, 4, 4, 4, 5, 7, 1, 3, 6];
console.log(track_duplicate(list))