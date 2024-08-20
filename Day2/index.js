// Variables

let x = 10;
const y = 10;

x = 11;

console.log('X', x);

// Datatypes
// 1) Number: 100 100.2 10.21
// 2) String : "Ivan" 'Arbaz' "Sakshi"
// 3) Boolean: true(1) false(0)
// 4) Undefined
// 5) Null

let num = 100;
let str = "Javascript"
let b_value = true 

console.log('Num', typeof(num));
console.log('Str', typeof(str));
console.log('Boolean', typeof(b_value));

//Arithmetic Operators
// + - *(multiplication) / %(Remainder)

let num1 = 10, num2 = 20;

console.log('Addtion', num1 + num2);
console.log('Subtraction', num1 - num2);
console.log('Multiplication', num1 * num2);
console.log('Division', num1 / num2);
console.log('Remainder', num1 % num2);

//Logical Operators
// > < === >== <==

console.log(num1 > num2);
console.log(num1 < num2);
console.log(10 === 10);
console.log(10 === 20);

//Difference between == && ===
console.log('12' == 12); // Compares only values
console.log('12' === 12); // Compares both values and datatypes

//If Else Conditions
let nam = "Asad";

if (nam === "Asad") {
    console.log('name');
} else {
    console.log('Yes');
}

let num3 = 14;

if (num3 === 100){
    console.log('Hello');
} else if (num3 === 10) {
    console.log('Yes');
} else if (num3 === 9) {
    console.log('9')
} else if (num3 === 4) {
    console.log('10');
} else {
    console.log('No');
}

// switch statement
switch (num3) {
    case 100: console.log('Hello');
            break;
    
    case 10: console.log('Yes');
            break;           

    case 9: console.log('9');
            break;        
               
    case 4: console.log('4');
            break;
    
    default: console.log('No');
            break;        
}


// Strings 
let str_value = "Hello";
let str_value2 = 'World';
let str_value3 = 'abcabcabc';

console.log(str_value, str_value2);

//Concatenation: Combining two strings
console.log('Concatenation', str_value + str_value2);

//Length of Strings
console.log('Length of str_value', str_value.length);

//Index
console.log('Index of H in str_value', str_value.indexOf('H'));
console.log('Index of l in str_value', str_value.indexOf('l'));
console.log('Index of b in str_value3', str_value3.indexOf('b'));


// Transforming String
console.log('Uppercase of str_value', str_value.toUpperCase());
console.log('Lowercase of str_value', str_value.toLowerCase());

// Numbers consists of two types: Integers and Float
// Integers: 1, 2, 3, 4, 100, 1000 etc.
// Float: 1.4, 1.5, 2.0, 3.19864 etc.

// Arrays 
let str_arrays = ["Hello", "World", 'abcabc' ];
console.log(str_arrays);
console.log('Length of str_arrays', str_arrays.length);

// Index range from 0 to length - 1
console.log('Index of World in str_arrays', str_arrays.indexOf("World"));
console.log('Value at index 1', str_arrays[1]);

// Functions

// Without functions
let a = 10, b = 20, c = 30, d = 40, e = 50, f = 60, g = 70, h = 80;

console.log(a + b);
console.log(b + c);
console.log(c + d);
console.log(e + f);
console.log(f + g);
console.log(g + h);

// With Functions
function sum(x, y) {
    let addition = x + y;
    return addition;
}

console.log(sum(a, b));
console.log(sum(b, c));
console.log(sum(c, d));

// Loops

// Without Loops
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// With Loops
//i++ is i + 1
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//Printing arrays with loops
// Method 1 (With Indexing)
for (let i = 0; i < str_arrays.length; i++){
    console.log(str_arrays[i]);
}

// Method 2 (Without Indexing)
for (let elem of str_arrays) {
    console.log(elem);
}

let array_values = [1, 2, 3, 4, 5, 6]

// Print values of even index
for (let i = 0; i < array_values.length; i += 2) {
    console.log(array_values[i]);
}

// Print values of odd index
for(let i = 1; i < array_values.length; i += 2) {
    console.log(array_values[i]);
}

// While loop
let i = 0;
while (i < array_values.length) {
    console.log(i);
    i++;
}

// Object is used for key value mapping
let cars = {
    name: 'Honda',
    price: 100000
};

let strings = {
    str_value1: "Hello",
    str_value2: "World",
}

console.log(cars);
console.log(strings);

// Difference between null and undefined
let my_var;
console.log('My Var', my_var);

my_var = 10;
console.log('My Var', my_var);

my_var = null;
console.log(my_var);

//Objects (Key Value mapping)
// const sakshi_record = { rollno: 1, name: "Sakshi", classroom: "12" };
// const arbaz_record = { rollno: 2, name: "Arbaz", classroom: "11" };
// const ivan_record = { rollno: 3, name: "Ivan", classroom: "10" };

// console.log(sakshi_record);
// console.log(arbaz_record);
// console.log(ivan_record);

//Object Constructor
// function student_records(rollno, name, classroom) {
//     this.rollno = rollno;
//     this.name = name;
//     this.classroom = classroom;
// }

// const sakshi_record = new student_records(1, "Sakshi", 12);
// const arbaz_record = new student_records(2, "Arbaz", 11);
// const ivan_record = new student_records(3, "Ivan", 10);

// console.log(sakshi_record);
// console.log(arbaz_record);
// console.log(ivan_record);


// Class
// Method in class: Function used in class called methods.
class student_records {
    constructor (rollno, name, classroom) {
        this.rollno = rollno;
        this.name = name;
        this.classroom = classroom;       
    }

    display_records () {
        console.log(this.name," of ", this.rollno, " studies in ", this.classroom);
    }
}

const sakshi_record = new student_records(1, "Sakshi", 12);
// student_records {
//    constructor(1, Sakshi, 12) {
//        sakshi_record.rollno = 1; 
//        sakshi_record.name = Sakshi;
//        sakshi_record.classroom = 12;
//    }
// }

const arbaz_record = new student_records(2, "Arbaz", 11);
// student_records {
//    constructor(2, Arbaz, 11) {
//        arbaz_record.rollno = 2; 
//        arbaz_record.name = Arbaz;
//        arbaz_record.classroom = 11;
//    }
// }

const ivan_record = new student_records(3, "Ivan", 10);

console.log("Using classes");
console.log(sakshi_record);
console.log(arbaz_record);
console.log(ivan_record);

sakshi_record.display_records()
arbaz_record.display_records()
ivan_record.display_records()
