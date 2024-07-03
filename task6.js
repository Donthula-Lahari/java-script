//if else statment for message balance

var message_balance = "10";
var no_of_messages = "5";

var balance = number(message_balance) - number(no_of_messages);

if (balance =>1){
    console.log("You have balance of Rs." + balance);
}else{"You have insufficient message balance"}
