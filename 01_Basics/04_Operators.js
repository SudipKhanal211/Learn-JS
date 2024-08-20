// JavaScript Operators

// 1. Arithmetic Operators
    // Addition (+)
    let sum = 5 + 3;
    console.log('Addition:', sum); // Outputs: 8

    // Subtraction (-)
    let difference = 5 - 3;
    console.log('Subtraction:', difference); // Outputs: 2

    // Multiplication (*)
    let product = 5 * 3;
    console.log('Multiplication:', product); // Outputs: 15

    // Division (/)
    let quotient = 6 / 3;
    console.log('Division:', quotient); // Outputs: 2

    // Modulus (%)
    let remainder = 5 % 2;
    console.log('Modulus:', remainder); // Outputs: 1

    // Exponentiation (**)
    let power = 2 ** 3;
    console.log('Exponentiation:', power); // Outputs: 8

    // Increment (++)
    let num = 5;
    num++;
    console.log('Increment:', num); // Outputs: 6

    // Decrement (--)
    num--;
    console.log('Decrement:', num); // Outputs: 5

// 2. Assignment Operators
    // Basic Assignment (=)
    let x = 10;
    console.log('Basic Assignment:', x); // Outputs: 10

    // Addition Assignment (+=)
    x += 3;
    console.log('Addition Assignment:', x); // Outputs: 13

    // Subtraction Assignment (-=)
    x -= 3;
    console.log('Subtraction Assignment:', x); // Outputs: 10
    
    // Multiplication Assignment (*=)
    x *= 2;
    console.log('Multiplication Assignment:', x); // Outputs: 20

    // Division Assignment (/=)
    x /= 4;
    console.log('Division Assignment:', x); // Outputs: 5

    // Modulus Assignment (%=)
    x %= 3;
    console.log('Modulus Assignment:', x); // Outputs: 2

    // Exponentiation Assignment (**=)
    x **= 2;
    console.log('Exponentiation Assignment:', x); // Outputs: 4

// 3. Comparison Operators
    // Equal to (==)
    console.log('Equal to:', 5 == '5'); // Outputs: true

    // Strictly Equal to (===)
    console.log('Strictly Equal to:', 5 === '5'); // Outputs: false

    // Not Equal to (!=)
    console.log('Not Equal to:', 5 != '5'); // Outputs: false

    // Strictly Not Equal to (!==)
    console.log('Strictly Not Equal to:', 5 !== '5'); // Outputs: true

    // Greater than (>)
    console.log('Greater than:', 5 > 3); // Outputs: true

    // Less than (<)
    console.log('Less than:', 5 < 3); // Outputs: false

    // Greater than or Equal to (>=)
    console.log('Greater than or Equal to:', 5 >= 5); // Outputs: true

    // Less than or Equal to (<=)   
    console.log('Less than or Equal to:', 5 <= 3); // Outputs: false

// 4. Logical Operators
    // AND (&&)
    console.log('AND:', (5 > 3) && (2 < 4)); // Outputs: true

    // OR (||)
    console.log('OR:', (5 < 3) || (2 < 4)); // Outputs: true

    // NOT (!)
    console.log('NOT:', !(5 > 3)); // Outputs: false

// 5. Bitwise Operators
    // AND (&)
    console.log('Bitwise AND:', 5 & 3); // Outputs: 1

    // OR (|) 
    console.log('Bitwise OR:', 5 | 3); // Outputs: 7

    // XOR (^)
    console.log('Bitwise XOR:', 5 ^ 3); // Outputs: 6

    // NOT (~)
    console.log('Bitwise NOT:', ~5); // Outputs: -6

    // Left Shift (<<)
    console.log('Left Shift:', 5 << 1); // Outputs: 10

    // Right Shift (>>)
    console.log('Right Shift:', 5 >> 1); // Outputs: 2

// 6. String Operators
    // Concatenation (+)
    let fullName = "Sudip" + " " + "Khanal";
    console.log('Concatenation:', fullName); // Outputs: "Sudip Khanal"

    // Concatenation Assignment (+=)
    let greeting = "Hello";
    greeting += " World";
    console.log('Concatenation Assignment:', greeting); // Outputs: "Hello World"

// 7. Ternary Operator
    let age = 20;
    let canVote = age >= 18 ? "Yes" : "No";
    console.log('Ternary Operator:', canVote); // Outputs: "Yes"

// 8. Type Operators
    // typeof
    let name = "Sudip";
    console.log('Type of name:', typeof name); // Outputs: "string"

    // instanceof
    let date = new Date();
    console.log('Instanceof Date:', date instanceof Date); // Outputs: true