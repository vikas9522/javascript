const accountid = 12345 //it is constant we can't modify it
let accountemail = "test@gmail.com"
var accountPassword ="67890" //'var'is not used now
accountCity = "jaipur" //suggest to not use without declaring variable type

/*
prefer to not use 'var' because of 
issue in block scope and funtion scope
*/

console.log(accountid);
console.table([accountid,accountemail,accountPassword,accountCity]);


accountemail = "test12@gmail.com"
accountPassword = "new123"
accountCity = "Indore"


console.table([accountid,accountemail,accountPassword,accountCity]);
