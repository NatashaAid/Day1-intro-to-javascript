// unchangeable variables( use const)
const a=12, b=2, c=16;

let largestNumber=c;

if(a>b && a>c){
    largestNumber=a
}

else if(b>a && b>c){
    largestNumber=b
}

// changeable variables (use let)
console.log(`the largest number is :${largestNumber}`);

function computelargestNumber(firstNumber, secondNumber, thirdNmber){
    let largestNumber=firstNumber;

    if(secondNumber>firstNumber && secondNumber>thirdNmber)(
        largestNumber=secondNumber
    )

    return largestNumber;
    }

    // writing functions using arrows
const computelargestNumberArrowWay=(firstNumber, secondNumber, thirdNmber)


// ternary way of writing
const largest=ternaryWayComputeLargestNumber(50,60,70)

console.log(`the largest number is :${largest}`)
const ternaryWayComputeLargestNumber=(a,b,c)

// data types: 

function fizzbuzz(n){

for (let a = 1; a <= n; a) 
console.log(a % 3 === 0 && a % 5 === 0 ? "FizzBuzz" : a % 3 === 0 ? "Fizz" : a % 5 === 0 ? "Buzz" : a);
} 

