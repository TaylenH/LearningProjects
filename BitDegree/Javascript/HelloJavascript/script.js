// var name = "jack";
// var age = 23;
// var shootingScore = 45.6;
//
// var message = "Hi, my name is " + name = " and I am " + age + "years old.";
//
// console.log(message);


// var firstName = "John";
// var lastName = "JacobJingleHeimerSmith";
// var dateOfBirth = "10-09-82";
// var age = 23;
// var profileImgUrl = "http://coolpicks.com/johnjacob.jpg";
//
// var loginWelcomeMsg = "Welcome, " + firstName + ". Happy " + age + "rd Birthday!";
//
// console.log(loginWelcomeMsg);

// var sum = 10 + 15;
// var sub = 15 - 10;
// var mul = 10 * 3;
// var div = 9 / 3;
// var mod = 10 % 3;
//
// var result = 10 * ((5 + 3) - 4);
//
//
// console.log(sub);

var myAccountBalance = 300;
var nikes = 799.23;
var coupon = 500;

if(nikes <= myAccountBalance){
  console.log("we just bought some shoes!");
  myAccountBalance -= nikes;
  console.log(myAccountBalance);
}else if(nikes - coupon <= myAccountBalance){
  console.log("we just bought some shoes with coupon");
  myAccountBalance -= (nikes - coupon);
  console.log(myAccountBalance);
}else{
  console.log("You dont have enough money");
}
