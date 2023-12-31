# JavaScript Basics

## Comments in JavaScript
- Single line comments are created using //
- Multi line comments are created using /* and */

```javascript
// This is a single line comment
/* This is a
multi line comment */
```

## Variables and Constant
- Variables are used to store values in memory.
- Variables are created when you assign a value to it.
- Variables are declared using var, let or const keywords
- Variables declared using var and let keywords can be changed
- Variables declared using const keyword cannot be changed
- Variables declared using var keyword are function scoped
- Variables declared using let keyword are block scoped

### Note:-
Prefer not to use var
because of issue in block scope and functional scope.<br/>
var is hoisted at the top of its containing function, but initialized with undefined.<br/>
let is not initialized.
const is not initialized and cannot be reassigned.

## Data Types
- JavaScript is a dynamically typed language
- JavaScript has 7 data types
- 6 primitive data types
- 1 reference data type
- Primitive data types are
- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt
- Reference data type is
- Object
- Array
- Functions

## Type Conversion
- Type conversion is the process of converting one data type to another
- Type conversion can be implicit or explicit
- Implicit type conversion is done automatically by JavaScript
- Explicit type conversion is done manually by the programmer

## Operators
- Operators are used to perform operations on operands
- Operands can be variables or values
- Operators are classified into
- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators
- Bitwise operators

- Arithmetic operators are used to perform arithmetic operations
- Assignment operators are used to assign values to variables
- Comparison operators are used to compare two values
- Logical operators are used to combine conditional statements
- Bitwise operators are used to perform bitwise operations

## Conditionals
- Conditionals are used to execute a block of code based on a condition
- Conditionals are created using if, else if and else keywords
- Conditionals are created using switch and case keywords

## Maths in JS
- Math is a built-in object that has properties and methods for mathematical constants and functions
- Math is not a constructor
- Math is a static object
- Math properties are
- Math.E
- Math.PI
- Math.SQRT2

- Math methods are
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.max()
- Math.min()
- Math.pow()
- Math.random()

## Strings in JS
- Strings are used to store text
- Strings are created using single quotes or double quotes
- Strings are indexed

## String Methods
- String methods are used to perform operations on strings
- String methods are
- length
- toUpperCase()
- toLowerCase()
- charAt()
- indexOf()
- lastIndexOf()
- includes()
- concat()
- trim()
- slice()
- substring()

## Dates in JS
- Date is a built-in object that stores the date and time
- Date is a constructor
- Date is a static object
- Date methods are
- Date.now()
- Date.parse()
- Date.UTC()
- Date.prototype.getDate()
- Date.prototype.getDay()
- Date.prototype.getFullYear()
- Date.prototype.getHours()
- Date.prototype.getMilliseconds()
- Date.prototype.getMinutes()
- Date.prototype.getMonth()
- Date.prototype.getSeconds()

## Memories in JavaScript
### Stack Memory
- Stack memory is used to store primitive data types

### Heap Memory
- Heap memory is used to store reference data types
