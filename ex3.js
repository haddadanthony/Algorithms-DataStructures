const largest_sub_array = (arr) => {
    let result = [];
    let sub_arr = [];
    let winner = [];

    while(arr.length > 1) {
        for(let i = 1; i < arr.length; i++) {
            sub_arr = arr.slice(0, i + 1);
            result.push(sub_arr);
            arr.shift();
        }
    }

    result.forEach(sub => {
        if(sub.length > winner.length && helper(sub, 0) === helper(sub, 1)) {
            winner = sub;
        }
    })

    console.log(result);
    console.log(winner);

}

const helper = (list, num) => {
    let counter = 0;
    list.forEach(number => {
        if(number === num) {
            counter ++;
        }
    })
    return counter;
}

let list = [0,0,1,0,1,0,0];

largest_sub_array(list);

// Time Complexity: O(n²)
// Space Complexity: O(n²);