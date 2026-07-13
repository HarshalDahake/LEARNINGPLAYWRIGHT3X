/* ================= JavaScript Identifier Rules - IQ ===============
* Must begin with a letter (a–z, A–Z), underscore (_), or dollar sign ($).
* Subsequent characters may also include digits (0–9).
* Cannot start with a digit.
* Cannot be a reserved keyword.
* Are case-sensitive.
* May contain Unicode letters and Unicode escape sequences.
* Cannot contain spaces, hyphens, or special characters (except _ and $).
 ============================================ */

let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";


let item1 = "letter then digit";
let _temp2 = "underscore then digit";
let $var123 = "dollar then digits";
let a1_b2 = "mixed letters digits underscore";

// Identifiers cannot start with a digit, but can contain digits after the first character.
//let 1stPlace = "invalid";
//let 2ndItem = "invalid"; // SyntaxError: Invalid or unexpected token

// Keyword cannot be used as identifiers. They are reserved for future use in the language.
// let class = "invalid"; 
// let const = "invalid";
//let function = "invalid";
let Function = "invalid";

let MyVar = "uppercase M";
let myvar = "lowercase v"; // both are different variables as JS is case-sensitive.

// Unicode letters and Unicode escape sequences are allowed.
let café = "Unicode letter é";
let 变量 = "Chinese characters";
let \u0041 = "Unicode escape for A";
let \u005f = "Unicode escape for _";

// Except '_' and '$' no other special characters are allowed in identifiers.
// let my-name = "invalid";
// let my name = "invalid";      // SyntaxError: Unexpected identifier
// let my@name = "invalid";      // SyntaxError: Unexpected token '@'
// let my#name = "invalid";      // SyntaxError: Unexpected token '#'
// let my!name = "invalid";      // SyntaxError: Unexpected token '!'


// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;
function getUserInfo() 
{ 
    return "function camelCase"; 
}

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";
function Person() 
{ 
    return "constructor"; 
}

// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;

// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";
