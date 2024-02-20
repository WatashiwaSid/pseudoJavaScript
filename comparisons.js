// Comparison operators, when used with different data types produces inconsistent output. 

console.log(null > 0)   // false
console.log(null < 0)   // false
console.log(null == 0)  //false
console.log(null >= 0)  //true
console.log(null <= 0)  //true

//Always returns false with undefined
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
console.log(undefined >= 0)
console.log(undefined <= 0)

// Null and Booleans
console.log(null >= true)   // false
console.log(null >= false)  //true