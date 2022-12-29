function fiveAndGreaterOnly(arr) {
    return arr.filter(function(num){
        return num >= 5;
    })
}

function evensOnly(arr) {
    return arr.filter(function(num){
    return num%2 ===0;
    })
}

function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(function(str){
    return str.length <= 5;
    })
}

function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(function(obj){
    return obj.member === true;
    })
}

function ofAge(arr){
    return arr.filter(function(obj){
    return obj.age > 18;
    })
}
  

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
// =>
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 
// => 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]