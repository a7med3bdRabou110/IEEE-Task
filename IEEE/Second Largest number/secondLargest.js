const arr = [100, 36, 95, 695, -6, -595, 395]

const result = arr.sort((a, b) => a - b).reverse()
const secondLargest = result[1]

console.log(secondLargest)
