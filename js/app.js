/***********/
/* Strings */
/***********/

// Define and assign stringBefore1 here
// My first name //
const stringBefore1 = "Cordelle";

// Define and assign stringBefore2 here
// My very French baugette last name //
const stringBefore2 = "Charbonneau";

// Using stringBefore1 and stringBefore2,
// Define and assign stringAfter, using template literals, here
// created a sentence explaining what I Love to do/alongside my hobbies! //
let stringAfter = `My name is ${stringBefore1} ${stringBefore2} and I love Crypto, Coding, Comics & Flipping stuff online!`;

/***********/
/* Numbers */
/***********/

// Define and assign numberBefore1 here
//Nikola Tesla's Favourite Numbers//
const numberBefore1 = 369;

// Define and assign numberBefore2 here
// Who doesn't like some pie??//
const numberBefore2 = 3.14;

// Using numberBefore1 and numberBefore2,
// Define and assign numberAfter1, numberAfter2, numberAfter3, numberAfter4 using different arithmetic operators

// Just basic multiplication between the two variables //
const numberAfter1 = numberBefore1 * numberBefore2;

// I thought it'd be cool to add bedmass into this //
const numberAfter2 =
  numberBefore1 * numberBefore2 + numberBefore2 * numberBefore2 * numberBefore2;

// Basic subtraction between all the variables //
const numberAfter3 = numberBefore1 - numberBefore2 - numberBefore2;

// Addition plus division//
const numberAfter4 = numberBefore1 + numberBefore1 / numberBefore2;

/************************************/
/* Do not edit code below this line */
/************************************/

/* This code will create errors until the above steps are completed */

// Print String Before 1
const stringBefore1Output = document.querySelector(".string-before-1");
stringBefore1Output.innerText = stringBefore1;

// Print String Before 2
const stringBefore2Output = document.querySelector(".string-before-2");
stringBefore2Output.innerText = stringBefore2;

// Print String After 2
const stringAfterOutput = document.querySelector(".string-after");
stringAfterOutput.innerText = stringAfter;

// Print Number Before 1
const numberBefore1Output = document.querySelector(".number-before-1");
numberBefore1Output.innerText = numberBefore1;

// Print Number Before 2
const numberBefore2Output = document.querySelector(".number-before-2");
numberBefore2Output.innerText = numberBefore2;

// Print Number After 1
const numberAfter1Output = document.querySelector(".number-after-1");
numberAfter1Output.innerText = numberAfter1;

// Print Number After 2
const numberAfter2Output = document.querySelector(".number-after-2");
numberAfter2Output.innerText = numberAfter2;

// Print Number After 3
const numberAfter3Output = document.querySelector(".number-after-3");
numberAfter3Output.innerText = numberAfter3;

// Print Number After 4
const numberAfter4Output = document.querySelector(".number-after-4");
numberAfter4Output.innerText = numberAfter4;
