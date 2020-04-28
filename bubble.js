const quickSort = (arr) => {
    if(arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rigthArr = [];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] <= pivot) {
            leftArr.push(arr[i]);
        } else {
            rigthArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rigthArr)];
}

let list = [1, 5, 3, 5, 2, 53, 16, 63, 74, 21, 45, 34, 53, 12];
console.log(quickSort(list));