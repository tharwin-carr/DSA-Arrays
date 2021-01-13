//Remove characters
function removeCharacters(string, letters) {
    let finalString = '';
    let arrFilter = [];
 
    // put the letters to filter out into an array. 
    for (let i = 0; i < letters.length; i++) {
        arrFilter.push(letters[i]);
    }
 
    // if the filtered array does not contain the letters from the 1st loop, add it to the final string to be returned. 
    for (let j = 0; j < string.length; j++) {
        if (!arrFilter.includes(string[j].toLowerCase())) {
            finalString += string[j];
        }
    }
    return finalString;
 }
 
 console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Gronzy', 'aeiou'));
 
 // Products
 function getProduct(arr) {
     // map through the array parameter, take out index number, return the product of remaining numbers in array. 
     const arrProduct = arr.map((num, i) => {
         const otherNums = arr.slice(0, i).concat(arr.slice((i + 1), (arr.length)));
         return otherNums.reduce((acc, curr) => acc * curr);
     });
 
     return arrProduct;
 }
 
 console.log(getProduct([1, 3, 9, 4]));
 
 //2D Array
 function get2D(arr) {
     const firstArr = JSON.parse(JSON.stringify(arr));
     let newArr = arr;
 
     firstArr.map((row, rowAlt) => {
         row.map((item, arrAlt) => {
             if (item === 0) {
                 newArr[rowAlt].forEach((num, i) => newArr[rowAlt][i] = 0)
                 newArr.forEach(newRow => newRow[arrAlt] = 0)
             }
         })
     })
     return newArr;
 }
 
 console.log
 (get2D
     ([[1,0,1,1,0],
     [0,1,1,1,0],
     [1,1,1,1,1],
     [1,0,1,1,1],
     [1,1,1,1,1]]));
 
 //String Rotation
 function stringRotate(string1, string2) {
     // if no string exists on either param passed through, return false
     if (!string1 || !string2) {
         return false;
     }
     // if string1's length does not equal string2's length, return false
     if (string1.length !== string2.length) {
         return false; 
     }
     // return string1 and verify if it includes string2 as a rotation. 
     return (string1 + string1).includes(string2);
 }
 
 console.log(stringRotate("amazon", "azonma")); 
 console.log(stringRotate("amazon", "azonam"));