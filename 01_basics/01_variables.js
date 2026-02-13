const accountId = 568935   // "const" is a keyword used to declare a constant varible in js & value can't be changed.

// accountId = 2568    // giving other value to the same veriable (NOT Allowed)

// console.log(accountId) //accountId = 2568    // giving other value to the same veriable
/* Output: TypeError: Assignment to constant variable.*/
    
let accountEmail = "ritik@business.com"    // let keyword is used to declare variable.

// accountEmail = "xyz@xyz.com"     // giving other value to the same veriable 

// console.log(accountEmail)  // gave output as xyz@xyz.com, So accountEmail's stored data ha changed.


var accountPassword = "13456"    // not prefered to use var to declare variable.
/* Because of issue in block scope and functinal scope */

// accountPassword = "212546865"     //giving other value to the same veriable 

accountCity = "Delhi"     // js understand this variabe but this is not prefered to use.

// accountCity = "Bengaluru"   // giving other value to the same veriable 

console.log([accountId, accountEmail, accountPassword, accountCity])
/* output : [ 568935, 'ritik@business.com', '13456', 'Delhi' ] */

console.table([accountId, accountEmail, accountPassword, accountCity])
/* output will be in tabular format
 ┌─────────┬──────────────────────┐
│ (index) │ Values               │
├─────────┼──────────────────────┤
│ 0       │ 568935               │
│ 1       │ 'ritik@business.com' │
│ 2       │ '13456'              │
│ 3       │ 'Delhi'              │
└─────────┴──────────────────────┘*/

