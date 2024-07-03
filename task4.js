//if else statment for backlogs

var balance = 150;
var withdrawalAmount = 200;

if (withdrawalAmount <= balance) {
  balance = withdrawalAmount;
  console.log("Withdrawal successful.");
} else {
  console.log("Insufficient funds.");
}