let arr1 = [1,2,3,4,5,6]
let arr2 = [7,8,9,10,11,12]
let arr3 = []

for(let i =0; i< arr1.length; i++){
    arr3.push(arr1[i] + arr2[i])
}
console.log(arr3)