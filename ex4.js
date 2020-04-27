const k_largest_number = (arr, k) => {
    let sorted_arr = arr.sort();
    console.log(sorted_arr[sorted_arr.length - k]);
}

let list = [7,4,6,3,9,1];
k_largest_number(list, 2);

// Time Complexity: O(n²);
// Space Complexity: O(1);