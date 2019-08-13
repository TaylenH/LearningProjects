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

// var myAccountBalance = 300;
// var nikes = 799.23;
// var coupon = 500;
//
// if(nikes <= myAccountBalance){
//   console.log("we just bought some shoes!");
//   myAccountBalance -= nikes;
//   console.log(myAccountBalance);
// }else if(nikes - coupon <= myAccountBalance){
//   console.log("we just bought some shoes with coupon");
//   myAccountBalance -= (nikes - coupon);
//   console.log(myAccountBalance);
// }else{
//   console.log("You dont have enough money");
// }


// if(1 == 1 && 2 == 2 || "joe" == "joe"){
//   console.log("these are both true");
// }
//
// if(!(1 == 3) || "joe" == "joe"){
//   console.log("one of these is true");
// }


// var students = ["Timmy", "Janessa", "Arun"];
//
// var naughtyList = [];
// naughtyList.push(students[0]);
//
// var index = naughtyList.indexOf("timmy");
// var index2 = students.indexOf("Arun");
// if(index > -1){
//   naughtyList.splice(index, 1);
// }
//
// console.log(naughtyList);



// for(var x = 0; x < 10; x++){
//   console.log(x);
// }


// var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];
//
// for(var i = 0; i < students.length; i++){
//   console.log(students[i]);
// }


// var length1 = 15;
// var width1 = 10;
// var area1 = length1 * width1;
//
// var length2 = 12;
// var width2 = 14;
// var area2 = length2 + width2;

function area(length, width){
  return length * width;
}

var area1 = area(10, 15);
console.log(area1);

var rectangles = [];
rectangles.push(area(10, 15));
rectangles.push(area(14, 2));
rectangles.push(area(4, 5));
console.log(rectangles);

var bankBalance = 500;

function makeTransaction(salePrice){
  if(salePrice <= bankBalance){
    bankBalance -= salePrice;
    console.log("purchase successful");
  }else{
    console.log("Insufficient Funds");
  }
}

console.log(bankBalance);
makeTransaction(79.00);
console.log(bankBalance);
makeTransaction(2.32);
console.log(bankBalance);
makeTransaction(10.45);
console.log(bankBalance);

makeTransaction(450.00);
console.log(bankBalance);
