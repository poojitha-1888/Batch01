//Big number of given two numbers
function findBiggestOfTwo(a,b) {
    if(a>b){
        return a;
    } else {
        return b;
    }
}
console.log(findBiggestOfTwo(10,20));


//Big one in given three numbers
function findBiggestOfThree(a,b,c){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        return b;
    }else {
        return c;
    }
}
console.log(findBiggestOfThree(50,60,70));


//factors of given number
function findFactors(num) {
    console.log("Factors of", num, "are:");
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}

findFactors(20);


//even factors
function evenFactors(num){
    console.log("The even factors of", num, "are:");
    for(let i=1;i<=num;i++){
        if(num%i==0 && i%2==0){
            console.log(i);
        }
    }
}
evenFactors(50);


//prime or not
function isPrime(num) {
    if (num <= 1) {
        return false; 
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}


console.log(isPrime(7));  
console.log(isPrime(10)); 