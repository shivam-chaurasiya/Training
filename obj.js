// simple object initialization

const me = {
    name : "Arun",
    age : 20,
    gender : "male",
};
console.log(me.name + " " + me.age);


// Use of apply method and this

var intro = {
    fullname: function(city, country){
        return this.firstname + " " + this.lastname + " from " + city + " in " + country;
    }
}

const int ={
    firstname : "Shivam",
    lastname : "Chaurasiya"
}

console.log(intro.fullname.apply(int, ["Firozabad " , "India"]));

// Uses of for loop in Object 

var car = {
    name : "Suzuki",
    model : 2016 ,
    Milege : 25
}

let text = ""
for(let x in car){
    text += car[x] + " ";
}
console.log(text);

//Nested Object
let sd = "";
const person = {
  firstname : "Rohit",
  lastname : "Sharma",
  age : 45,
  cars :[
    {name: "Ford", models:[2016,2017,2018]},
    {name: "BMW", models:[2015,2016,2018]},
    {name: "SUV", models:[2019,2020,2021]}
  ] 
}

for(let i in person["cars"]){
  sd += person.cars[i].name;
   for(let j in person.cars[i]["models"]){
    sd += person.cars[i].models[j];
   }
}
console.log(sd);

// object keymethod and value method

const person1 = {
 name : "Shivam",
 Age: 20,
 gender : "male"    
}

console.log(Object.keys(person1));
console.log(Object.values(person1));

// spread method

let a,b,c,d,e,f;

a = [10,20];
b = [30 , "raman"];
c = "rank";
d = " I am ";
e = a.concat(b,c,d);
f = [...a,...b, ...c,...d];
console.log(e);
console.log(f);
console.log(f[3]);
console.log(e[4]);
console.log(...a);

// Rest method and array destructuring

let int1 = [2,3,4,5,6,7,8,"Raman"];
let [aa, bb, ...arr1] = int1;
console.log(aa);
console.log(
    arr1);
console.log(bb);