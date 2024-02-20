const accountId = 220412456
var userName = "COMICSID"
let userPass = "COMIX@SID"
accountType = "Admin"
let accountStatus;

console.table([accountId,userName,userPass,accountType,accountStatus])

/*
const -> can't be reassigned a value and couldn't be declared again (block scope)
let -> can be reassigned again but couldn't be declared again (block scope)
var -> can be reassigned again and can be declared again (global scope) 
!! Avoid variable declaration using "var" keyword.  
*/