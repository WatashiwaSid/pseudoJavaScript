// Numbers To String
let score = 33
console.log(typeof(score))
let stringScore = String(score)
console.log(typeof stringScore)

//Numbers To Boolean
let state = 1
let boolState = Boolean(state)
console.log(typeof(boolState) + " : " + boolState)

/*
0 -> false
1 -> true
Numbers other than 0 -> true
"" -> false
"nonEmptyString" -> true
*/

//String To Numbers
let marks = "98"
let numberMarks = Number(marks);
console.log(typeof(numberMarks) + " : " + numberMarks)
let dirtyMarks = "98ff"
let numberDirtyMarks = Number(dirtyMarks) // Nan - Number
console.log(typeof(numberDirtyMarks) + " : " + numberDirtyMarks)
/*
"33" -> 33
"33abc" -> Nan
*/

//Boolean To Number
let isLoggedIn = true
let numLoggedIn = Number(isLoggedIn)
console.log(typeof(numLoggedIn) + " : " + numLoggedIn) 

/*
false -> 0
true -> 1
*/

//String Conversions
console.log(1 + "3")
console.log("1" + 3)
console.log("3" + "4")
console.log(1 + 1 + "1") // -> 21 
console.log("1" + "1" + 1) // -> 111
console.log("1" + 1 + 1)    // -> 111

//Boolean Conversions
console.log(true)   // true
console.log(+true)  // 1
console.log(+false) //0
console.log(+"") // 0 !-- Empty String returns false, +false returns zero --!