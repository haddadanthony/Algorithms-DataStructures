function reverse(string) {
    // Base case
    if(string.length < 2) {
        return string;
    }

    return reverse(string.slice(1, string.length)) + string[0];
}

console.log(reverse('hello'));

// reverse('ello') + h
// reverse('llo') + e
// reverse('lo') + l
// reverse('o') + l
// --> return o

function print(arr) {
    if(arr.length < 2) {
        return arr;
    }

    return arr[0] + print(arr.slice(1, arr.length));
}

console.log(print([1, 2, 3, 4]));