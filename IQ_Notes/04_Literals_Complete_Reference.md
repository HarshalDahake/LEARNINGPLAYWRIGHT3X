# Literals in JavaScript — Complete Reference

> **Literal** = A fixed value you write directly in code.  
> Variables *hold* values; literals *are* the values.

---

## 1. Master Comparison Table

| Literal Type     | Example(s)                        | `typeof`     | Notes                              |
|------------------|-----------------------------------|--------------|-------------------------------------|
| **String**       | `"hello"`, `'world'`, `` `text` `` | `"string"`   | Quotes: single, double, backtick   |
| **Numeric**      | `42`, `3.14`, `0xFF`              | `"number"`   | IEEE 754 double-precision          |
| **BigInt**       | `9007199254740991n`               | `"bigint"`   | `n` suffix, arbitrary precision    |
| **Boolean**      | `true`, `false`                   | `"boolean"`  | Only two values                    |
| **Null**         | `null`                            | `"object"`   | Historical bug in JS               |
| **Undefined**    | `undefined`                       | `"undefined"`| Default unassigned value           |
| **Symbol**       | `Symbol("id")`                    | `"symbol"`   | Unique immutable key               |
| **Object**       | `{name: "JS"}`, `[1,2,3]`        | `"object"`   | Arrays, objects, etc.              |

---

## 2. Diagram: Literal Family Tree

```
                      ┌─────────────────────────────┐
                      │      LITERALS in JS          │
                      │  (values written in source)  │
                      └──────────┬──────────────────┘
                                 │
            ┌────────────────────┼────────────────────────────┐
            │                    │                            │
     ┌──────┴──────┐     ┌──────┴──────┐             ┌───────┴───────┐
     │  Primitive  │     │  Numeric    │             │  Structural   │
     │  Literals   │     │  Literals   │             │  Literals     │
     └──────┬──────┘     └──────┬──────┘             └───────┬───────┘
            │                    │                            │
     ┌──────┼───────┐     ┌─────┼──────┐              ┌──────┴──────┐
     │      │       │     │     │      │              │              │
   String Boolean Null  Number BigInt │           Object  Array
     │              │   │  │   │      │              │              │
   "JS"     true   null │  │   │     NaN          {a:1}         [1,2]
   'JS'     false      │  │   │     Infinity
                       │  │   │
                    Integer Float─┐
                     │      │    │
                   Decimal  0xFF │
                   Binary   _____│_____
                   Octal   │         │
                   Hex   1.5e3   1.5e-3
```

---

## 3. Layer-by-Layer Walkthrough

### 3.1 String Literals

```javascript
// Single quotes, double quotes, template literals (backticks)
let single = 'Hello';
let double = "Hello";
let template = `Hello ${name}`;  // Template: interpolate variables

console.log(typeof single);  // "string"
```

### 3.2 Numeric Literals (5 sub-types)

```javascript
// ─── Integers ───
let decimal = 42;      // Base 10 (default)
let binary  = 0b1010;  // Base 2  → 10
let octal   = 0o52;    // Base 8  → 42
let hex     = 0x2A;    // Base 16 → 42

// ─── Floats ───
let float   = 3.14;
let tiny    = .5;      // Valid, but write 0.5 for clarity

// ─── Exponential ───
let big     = 1.5e3;   // 1.5 × 10³ = 1500
let small   = 1.5e-3;  // 1.5 × 10⁻³ = 0.0015

// ─── Separators (ES2021) ───
let million = 1_000_000;  // Readable: 1 million

// ─── Special Values ───
let inf     = Infinity;   // 1 / 0
let notNum  = NaN;        // 0 / 0
```

### 3.3 BigInt Literal

```javascript
let bigInt  = 9007199254740991n;  // n suffix
let fromStr = BigInt("9999999999999999");

console.log(typeof bigInt);  // "bigint"
```

### 3.4 Boolean Literal

```javascript
let isReady = true;
let isDone  = false;
```

### 3.5 Null vs Undefined

```javascript
let empty   = null;       // developer says "no value"
let unset;                // JS says "not assigned yet"

console.log(empty);     // null
console.log(unset);     // undefined
console.log(typeof empty);   // "object" — JS quirk!
console.log(typeof unset);   // "undefined"
```

### 3.6 Symbol Literal

```javascript
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2);  // false — every Symbol is unique
```

### 3.7 Object & Array Literals

```javascript
let obj  = { name: "JS", year: 1995 };   // object literal
let arr  = [10, 20, 30];                 // array literal

console.log(typeof obj);  // "object"
console.log(typeof arr);  // "object"
```

---

## 4. Full Code Walkthrough — All Literals in One File

```javascript
// ============================================================
// COMPLETE LITERALS WALKTHROUGH — One example per type
// ============================================================

// 1. STRING LITERAL
let str = "Hello, JavaScript!";
console.log(str, typeof str);  // Hello, JavaScript!  string

// 2. NUMERIC LITERAL (integer + float)
let intVal  = 100;
let floatVal = 3.14;
console.log(intVal, typeof intVal);   // 100 number
console.log(floatVal, typeof floatVal); // 3.14 number

// 3. NUMERIC — Hex, Binary, Octal
let hexVal   = 0xFF;       // 255
let binVal   = 0b1010;     // 10
let octVal   = 0o77;       // 63
console.log(hexVal, binVal, octVal);  // 255 10 63

// 4. NUMERIC — Exponential
let expVal = 1e6;          // 1,000,000
let tinyVal = 1.5e-4;      // 0.00015
console.log(expVal, tinyVal);

// 5. NUMERIC — Separator (ES2021)
let readable = 1_000_000;
console.log(readable);     // 1000000

// 6. BigInt LITERAL
let bigIntVal = 123456789012345678901234567890n;
console.log(bigIntVal, typeof bigIntVal);  // 12345...n  bigint

// 7. BOOLEAN LITERAL
let isActive = true;
let isComplete = false;
console.log(isActive, typeof isActive);  // true boolean

// 8. NULL LITERAL
let empty = null;
console.log(empty, typeof empty);  // null object (quirky!)

// 9. UNDEFINED LITERAL
let notAssigned;
console.log(notAssigned, typeof notAssigned);  // undefined undefined

// 10. SYMBOL LITERAL
let sym = Symbol("unique");
console.log(sym, typeof sym);  // Symbol(unique) symbol

// 11. OBJECT LITERAL
let person = { name: "Alice", age: 25 };
console.log(person, typeof person);  // { name: 'Alice', age: 25 } object

// 12. ARRAY LITERAL
let colors = ["red", "green", "blue"];
console.log(colors, typeof colors);  // [ 'red', 'green', 'blue' ] object
```

---

## 5. Quick Reference: Memory/Type Diagram

```
Variable ──> Stack ──> Primitive Value (copied)
              │
              │   ┌─ String:     "abc"
              │   ├─ Number:     42
              │   ├─ BigInt:     42n
              │   ├─ Boolean:    true/false
              │   ├─ Null:       null
              │   ├─ Undefined:  undefined
              │   └─ Symbol:     Symbol()
              │
Variable ──> Heap ──> Object Reference (shared)
                      ├─ Object:   { key: value }
                      └─ Array:    [ item1, item2 ]
```

---

## Summary

| # | Literal Type   | Written As              | typeof Result   |
|---|----------------|-------------------------|-----------------|
| 1 | String         | `"text"` / `'text'`     | `"string"`      |
| 2 | Number         | `42` / `3.14` / `0xFF`  | `"number"`      |
| 3 | BigInt         | `42n`                   | `"bigint"`      |
| 4 | Boolean        | `true` / `false`        | `"boolean"`     |
| 5 | Null           | `null`                  | `"object"` ⚠️   |
| 6 | Undefined      | `undefined`             | `"undefined"`   |
| 7 | Symbol         | `Symbol("x")`           | `"symbol"`      |
| 8 | Object         | `{}` / `[]`             | `"object"`      |

> **Key Insight**: Everything in JS is either a **primitive literal** (immutable, stored on stack) or an **object literal** (mutable, stored on heap by reference).
