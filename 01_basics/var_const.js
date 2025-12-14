const accountID = 2234543
let accountName = "LRK"
var accountEmail ="lrk@gmail.com"
accountState="Madhesh"//not prefered
let accountPass

// accountID=123456 can't be reassigned
accountName="SRK"
accountEmail="srk@gmail.com"
accountState="Bagmati"

console.table([accountID,accountName,accountEmail,accountState,accountPass])

// don't use var always use let because of issue in block and functional scope