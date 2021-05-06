// Input: 2 positive numbers
// Procedure: Euclaid algorithm
// Output: greatest common divisor = GCD

// Test cases / Examples:
// =======================
// Input: -1 / 2
// Expected result: error message after validation

// Input: 4 / 0
// Expected result: error message after validation

// Input: 2 / 2
// Expected result: 2

// Input: 40 / 16
// Expected result: 
// #1 % #2
// ========
// 40 % 16 = 8
// 16 % 8 = 0
// 8 GCD

// 16 % 40 = 16
// 40 % 16 = 8
// 16 % 8 = 0

// Input: 2.7 / 4.5
// Expected result: error message after validation


// Procedure
// ===========
// Start
//     Initialize firstNumber = 0;
//     Initialize secondNumber = 0;
//     Initialize GCD = 0;
//     Initialize Remainder = 0;

//     Prompt for firstNumber with "Please put in your first positive integer";
//     Prompt for secondNumber with "Please put in your second positive integer";

//     Validate that firstNumber and secondNumber are positive integers;

//     //Modulo Calculation of GCD
//     Loop until Remainder = 0
//         firstNumber % secondNumber = Remainder;
//         If Remainder == 0
//             GCD = secondNumber;
//             End Loop;
//         Else
//             firstNumber = secondNumber;
//             secondNumber = Remainder; 
//         End
//     End
//     //would be a do while loop with condition at the end

//     Display as "The greater common divisor of " + firstNumber + " and " + secondNumber + " is " + GCD;
// End


let firstNumber = +prompt(`please enter the firstNumber-the number must be greater than 0`);


while(isNaN(firstNumber)|| firstNumber<1){
    firstNumber = prompt(`please enter the firstNumber`);    
}
let realFirstNumber =firstNumber;

let secondNumber = +prompt(`please enter the secondNumber-the number must be greater than 0`);

while(isNaN(secondNumber)|| secondNumber<1){
    secondNumber = prompt(`please enter the secondNumber`);    
}
let realSecondNumber =secondNumber;

let greatestCommanDivider = 0;
let remainder = -1000000;

    while (remainder != 0){
        remainder = firstNumber % secondNumber;
            if (remainder === 0){
             greatestCommanDivider = secondNumber;
            }
            else{
            firstNumber = secondNumber;
            secondNumber = remainder; 
        }
    }
//     //would be a do while loop with condition at the end

    alert(`The greater common divisor of ${realFirstNumber} and ${realSecondNumber} is ${greatestCommanDivider}`);


//exercie 1//
const popTheNeme = (pName) => {
    alert(`hello ${pName}`);
}

alert('exercise 1');
let personName = '';
personName = prompt('what is your name ?');
popTheNeme(personName);


//exercise 2//

// Create a program in JavaScript that prompts
// for an input string and displays output that shows the input string and the number of characters the string contains.
alert('exercise 2');

const counterString = (pInput)=>{
    let pInputLength = pInput.length;
    alert(`the input string was: ${pInput} and it contains ${pInputLength} characters`);
}

let inputString = prompt('what is the input string ?');;
counterString(inputString);

//exercise 3//
// Create a program that prompts for a quote and an author. Display the quotation and author as shown here:
// [Author] says, "[Quote]" (Replace [Author] and [Quote] with the actual values

alert('exercise 3');

const quotation = (pName, pQuotation)=>{
    alert(`${pName} says, "${pQuotation}"`);
}

let authorName = prompt('please tell me the Author\'s name');
let theQuatation = prompt('what is the quatation?');

quotation(authorName, theQuatation);

// exercise 4//

// First add an input for the month
// Then change that to using a function
// Call that function several times

alert('exercise 4');

const ageTaker =() =>{
    let year = +prompt('in which year did you born');
    let month = prompt('please tell me the month also');
    return {month, year};
}
const displayTheAge = (pMonth, pYear)=>{
    let today = new Date();
    let givenMonth = 0;
    let crntMonth = today.getMonth()+1;
    let crntYear = today.getFullYear();

    switch (pMonth.toUpperCase()) {
            case "JANUARY":  givenMonth=1;
                break;
            case "FEBRUARY":  givenMonth=2;
                break;
            case "MARCH": givenMonth = 3;
                break;
            case "APRIL": givenMonth = 4;
                break;
            case "MAY": givenMonth = 5;
                break;
            case "JUNE": givenMonth = 6;
                break;
            case "JULY": givenMonth = 7;
                break;
            case "AUGUST": givenMonth = 8;
                break;
            case "SEPTEMBER": givenMonth = 9;
                break;
            case "OCTOBER": givenMonth = 10;
                break;
            case "NOVEMBER": givenMonth = 11;
                break;
            case "DECEMBER": givenMonth = 12;
                break;
            default:
                pMonth = prompt('please give me your birth date\'s month name');
                displayTheAge(pMonth, pYear);
                break;
    }

    while(isNaN(pYear)||pYear<1850||!(Number.isInteger(pYear))){
        pYear = +prompt(`please give your birthyear exactly`);
    }

    let age = crntYear-pYear;

    if(crntMonth<givenMonth)
    {
        age -=1;
    }
    alert (`your age is: ${age}`);
}
    let {month, year} = ageTaker();
    displayTheAge(month, year);

// Takes 2 arguments, both numbers.
// Returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs
// Log the output, e.g. "The greater number of 5 and 10 is 5."
 alert('Exercise 5');
 const biggerNumber = (pCounter) => {
    let firstNumber = 0;
    let secondNumber = 0;
    let times = pCounter;
    while (pCounter > 0) {
        alert(`${times-pCounter+1}th RUN!`)
        firstNumber = prompt(`what is the first number`);
        secondNumber = prompt(`what is the second number`);
        if (firstNumber > secondNumber)  {alert(`${firstNumber} is greater than ${secondNumber}`)}
        else if(firstNumber == secondNumber) {alert(`they are the same`);}
        else{alert(`${secondNumber} is greater than ${firstNumber}`);}  
        pCounter = pCounter - 1;
    }
}

const TIMES = 2;
biggerNumber(TIMES);

//Improve your retirement calculator by using function(s)

alert(`exercise 6`);
const CURENTYEAR = new Date().getFullYear();
const MINYEAR = 1890;


const controlYears = ()=>{
    let birthYear = prompt('what is your birthYear');
    if(birthYear>CURENTYEAR||birthYear<MINYEAR){
        birthYear = controlBirthYear(birthYear);
    }
    let dreamRetirementYear = prompt('in which year do you want to be retired');
    if(dreamRetirementYear<CURENTYEAR){
        dreamRetirementYear = controlRetirementYear(dreamRetirementYear);                
    }
    return {
            birthY: birthYear, 
            retirementY: dreamRetirementYear
        };
}

const controlBirthYear=(pBY)=>{
    alert (`you gave us your birth year as ${pBY} but it cannot be right!!`);
    while(pBY>CURENTYEAR||pBY<MINYEAR){
        pBY = prompt(`your birth year cannot be bigger than current year and cannot be smallar than year of ${MINYEAR}`);
    }
    return pBY;
}

const controlRetirementYear=(pRY)=>{
    alert (`you gave us retirement year as ${pRY} but it cannot be right!!`);
    while(pRY<CURENTYEAR){
        pRY = prompt(`retirement year can notbe smaller than current year`);
    }
    return pRY;

}

let {birthY, retirementY} = controlYears();

alert(`your age is ${CURENTYEAR-birthY} and you will be retired in ${retirementY} in age of ${retirementY-birthY}`);

alert(`exercise 7`);

const tipCalculator = ()=>{
    let tip = 0;
    let total = 0;
    let billAmount= 0;
    let tipRate = 0;    

    do{
    billAmount = parseFloat(prompt('What is the bill amount?'));
    }while(isNaN(billAmount)||billAmount<0)
    
    do{
    tipRate = parseFloat(prompt('What is the tip rate?'));
    }while(isNaN(tipRate)||tipRate<0)
    
    alert(`Bill Amount is : CHF ${billAmount}`);
    alert(`Tip Rate is : ${tipRate}`);
    
    tip = billAmount * (tipRate / 100);
    tip = parseFloat(tip.toFixed(2));
    
    alert (`Tip: CHF ${tip}`);
    total = billAmount+tip;
    alert (`Total: CHF ${total}`);
}

tipCalculator();

// Takes 1 argument, a language code (e.g. "es", "de", "en")
// Returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works

alert(`exercise 8`);
const funnyTranslator = (pLanguageCode)=>{
    switch (pLanguageCode) {
        case "es":
            alert (`¡¡¡Hola mundo !!!`);
            break;
        case "de":
            alert (`Hallo Welt !!!`);
            break;
        case "en":
            alert(`Hello world!!!`);
            break;
        default:
            pLanguageCode = prompt(`please enter one of these three options #1 as en #2 as es or #3 as de`);
            funnyTranslator(pLanguageCode);
            break;
    }
}

funnyTranslator();
