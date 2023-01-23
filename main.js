// simple js program
var a = 7 ; 
var b = 9 ; 
console.log(a+b);
console.log(b);

// For array and loop initialization
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[4] = "PineApple";
let n = fruits.length;
let text = "";
for(let i = 0 ; i < n ;i++){
    text += fruits[i];
}
 console.log(text);

 // methods of array

let text1 = fruits.join("*");
console.log(text1);

let text3 = fruits.sort();
console.log(text3);

//Loop initialization and conditional statement

for(let i = 0 ; i < n ; i++){
    if(fruits[0] == fruits[1]){
        console.log( "I am not in Inzint");
    }
    else{
        console.log("I AM IN INZINT");
    }
}

// use of function

function myfunction(x, y ){
    return x**y;
}

const aa = myfunction(2,2);
console.log(aa);

// dates

const d = new Date();
console.log(d);

let month;
switch(new Date().getMonth()){
    case 0 :
     month  = "January";
     break;
    case 1 :
        month = "febuary";
        break;
    case 2:
        month = "march";
        break;
    case 3:
        month ="April";
        break;
    case 4:
        month = "May" ;
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7 :
        month = "August";
        break;
    case 8 :
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
}

console.log("NOW MONTH IS" ,month);