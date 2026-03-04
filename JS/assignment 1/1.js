//Arithmetic Operations
let a=30;
let b=20;
console.log("The sum of a+b is:",a+b);
console.log("The difference of a-b is:",a-b);
console.log("The product of a*b is:",a*b);



//increment and decrement operators
console.log("print the value ++a:",++a);
console.log("print the value ++b:",++b);
console.log("print the value --a:",--a);
console.log("print the value --b:",--b);


//comparison operators
if (a>b){
    console.log("a is greater than b");
}
else if (a=b) {
    console.log("a is equal to b");
} 
else {
    console.log("a is less than b");
}


//Difference between ==and=== operators
let x='123';
let y=123;
console.log("print x==y:",x==y);//returns to true w.r.t value similarity not datatype
console.log("print x===y:",x===y);// returns to false w.r.t value similarity and datatype similarity