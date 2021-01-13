function maxSum(arr) {
    let sum= 0;
    let maxSum = 0;

    //nested loops, iterate over array length twice to determine largest sum in the sequence.
    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        sum = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j]

            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    return maxSum;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));