// Strings, String Interpolation, and String Methods //

// String Interpolation (Recommended over String Concatenation) //
const myName = "Siddhant Nautiyal"
console.log(`Apka Swagat Hai ${myName}`)

/* When String is called as a Constructor with new, it creates a String object, which is not a primitive.
/* The String prototype could be returned with __proto__ 
*/
const favGame = new String("GodOfWar")
console.log(favGame.__proto__)
console.log("Length Of String : " + favGame.length) //length is a property, not a method
console.log("String In Lowercase : " + favGame.toLowerCase())
console.log("String In Uppercase : " + favGame.toUpperCase())
console.log("Substring : " + favGame.substring(0,3)) //substring() method ignores negative indexing
console.log("Sliced String : " + favGame.slice(-5)) //slice() method allows to use negative indexing as well
console.log("W is present at index : " + favGame.indexOf('W'))
console.log("At index 3 : " + favGame.charAt(4))

const dirtyString = "     dirtyWhiteSpaces    "
console.log(dirtyString)
console.log(dirtyString.trim())

const url = "https://www.securitybytes.in/contact%20us"
console.log(url.replace("%20", "-"))
//replace(pattern,replacement)

const userId = "Optimus-Prime"
console.log(userId.split("-"))
//split(separator,limit)

console.log(userId.concat("-Transformers"))