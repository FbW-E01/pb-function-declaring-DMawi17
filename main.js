// # Declaring Functions

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function multiple(p, q) {
    console.log(p * q);
}

multiple(5, 5);

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const multiplier = function (p, q) {
    console.log(p * q);
};

multipleier (2, 3);

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.

const multiples = (p, q) => console.log(p * q);
multiples(3, 3);

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers.

// 1. declaration
function remains (p, q) {
    console.log(p % q);
}
remains (11, 4);

// 2. declaration
const remain = function (p, q) {
    console.log(p % q);
};
remain(7, 4);

// 3. declaration
const remaind = (p, q) => console.log(p % q);
remaind (5, 3);
