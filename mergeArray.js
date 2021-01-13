function mergeArrays(arr1, arr2) {
    //make new array from the first one passed in
    const  newArr = Array.from(arr1)

    //on the second array, go through each item. if item is less than/greater than another item in new array, splice into new array.
    arr2.forEach((num) => {
        let i = 0;

        while (i < newArr.length) {
            if (num <= newArr[i]) {
                newArr.splice(i, 0, num);
                break;
            }
            i++;
        }
    })

    return newArr;
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));