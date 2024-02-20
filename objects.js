/* 
* JS Objects are non-primitives.
* Objects instantiated using Object constructor are of singleton nature.
*/

const playerOne = 
{
    playerName: "COMICSID",
    playerType: "solo",
    playerGameMode: "easy",
    metdata: 
    {
        age: 19,
        gender: "male",
        country: "INDIA-en"
    }
}

/* Properties could be accessed in two ways:
    * playerOne.playerName
    * playerOne["playerName"]
*/

console.log(playerOne["metdata"]["country"])

/*  * All keys could be accessed using: Object.keys(playerOne)
    * All values could be accessed using: Object.values(playerOne) 
*/

console.log(Object.values(playerOne))

/* Object De-Structuring Syntax: const {playerName} = playerOne */
const {playerName: pname} = playerOne
console.log(pname)
