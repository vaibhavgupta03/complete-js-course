//Variables
const accountId = 144553

var accountName = "Vaibhav Gupta"
let accountEmail = "vaibhav@facebook.com" //let is block scoped
var accountPassword = 
    "12345" //var is function scoped
accountCity = "Chandigarh" 

//accountId = 2; //not allowed as it is a constant

accountEmail = "vg@google.com"
accountPassword = "00000"
accountCity = "Kanpur"

let accountState //if value is not initialised to a variable then value is undefined automatically.

console.log(accountId);

/* Prefer not to use var
because of issue in block scope and functional scope */

console.table([accountName,accountEmail, accountId, accountPassword, accountCity,accountState]);