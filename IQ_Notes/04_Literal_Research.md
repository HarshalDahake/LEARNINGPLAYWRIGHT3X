# Literal — What It Really Is

## Example File: `07_Literal.js`

```js
let age = "Harshal";
let isStudent = true;
let pi = 3.14;
let nullValue = null;
let big = 12345678901234567890n;
```

---

## Comparison Table — Literal Types

| Aspect | String | Number | Boolean | Null | BigInt |
|---|---|---|---|---|---|
| **Syntax** | Quotes (`"..."`, `'...'`, `` `...` ``) | Digits, dots, prefixes (0x, 0b, 0o) | `true` or `false` | `null` | Integer + `n` suffix |
| **Engine sees it as** | Sequence of UTF-16 code units | IEEE 754 double-precision 64-bit | 1-bit flag (`true`=1, `false`=0) | Null pointer / zero reference | Arbitrary-precision integer |
| **Memory at runtime** | Heap (string object pool) or stack (small interned strings) | Stack (fits in 8 bytes) | Stack (fits in 1 byte / machine word) | Stack (sentinel value) | Heap (variable length) |
| **`typeof` result** | `"string"` | `"number"` | `"boolean"` | `"object"` (quirky) | `"bigint"` |
| **Can it be on the LHS of `=`?** | ❌ `"hello" = x` → SyntaxError | ❌ `42 = x` → SyntaxError | ❌ `true = x` → SyntaxError | ❌ `null = x` → SyntaxError | ❌ `5n = x` → SyntaxError |
| **Mutability** | Immutable (you can't change a character in place) | Immutable (`42` is always `42`) | Immutable (`true` is always `true`) | Immutable | Immutable |
| **Bytecode representation** | Constant table index (`LdaConstant [0]`) | Inline immediate (`LdaSMI [42]`) or constant | Inline immediate (`LdaTrue` / `LdaFalse`) | Inline sentinel (`LdaNull`) | Constant table index + special handler |

---

## How It Works for Our Example

Take this one line and trace how the engine handles the literal vs the identifier:

```js
let pi = 3.14;
```

### 1. Source Code — What You Write

`pi` is an identifier. `3.14` is a numeric literal. They look similar on screen, but the engine treats them completely differently from the first microsecond.

### 2. Tokenization — Two Completely Different Tokens

```
Scanned characters → tokens:

'p' 'i'           → Identifier (name = "pi")
'3' '.' '1' '4'   → NumericLiteral (value = 3.14)
```

The scanner doesn't evaluate anything yet. It just classifies characters into token types. `3.14` is immediately recognized as a `NumericLiteral` because it starts with a digit and contains a dot.

### 3. Parsing — The Literal Becomes a Constant in the AST

```
VariableDeclaration
  ├── kind: "let"
  ├── id: Identifier ("pi")
  └── init: NumericLiteral (3.14)
                          ↑
                  This is a leaf node — no children,
                  no scope resolution, no lookup.
                  The value is baked right into the AST.
```

Crucial difference: `pi` (identifier) will need scope resolution at runtime. `3.14` (literal) is done — the value is right there in the AST node. The engine doesn't need to look anything up.

### 4. Bytecode Generation — How V8 Encodes the Literal

V8's Ignition generates bytecode for the declaration:

```
LdaConstant [0]      ; loads constant at table index 0 → 3.14
StaCurrentContextSlot [#2]   ; stores into pi's scope slot
```

The literal `3.14` is placed in the **constant pool** — a small array embedded in the compiled bytecode. The bytecode instruction just references it by index. No computation, no lookup, no type-checking at runtime — it's already a number.

Compare this to what happens if you wrote `let pi = someVariable`:

```
LdaImmutableCurrentContextSlot [#1]   ; must resolve someVariable
StaCurrentContextSlot [#2]            ; then store into pi
```

That's an extra scope lookup at runtime. Literals skip that entirely.

### 5. Execution — The Literal Is Already a Value

At runtime:

1. V8 hits `LdaConstant [0]` → grabs `3.14` from the constant pool → value is ready on the virtual register
2. Hits `StaCurrentContextSlot [#2]` → writes that value into `pi`'s slot

The literal never needs allocation, resolution, or type coercion. It's a fixed value from the moment the bytecode was compiled.

```
                   ┌──────────────────────────┐
                   │  Bytecode Constant Pool   │
                   │  [0] = 3.14  ←──────┐     │
                   │  [1] = "Hello"     │     │
                   │  [2] = null        │     │
                   └──────────────────────│─────┘
                                          │
              LdaConstant [0]  ───────────┘
                    │
                    ▼
              Value = 3.14  (ready to use, no work needed)
```

---

## The Literal Lifecycle (Visual)

```
┌──────────────────┐
│  Source Code     │
│  let x = 42;     │
└──────┬───────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  STEP 1 — Scanner / Tokenizer      │
│                                      │
│  '4' '2' → NumericLiteral (42)     │
│  No further processing needed      │
│  (Identifier "x" still needs       │
│   scope resolution later)          │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  STEP 2 — Parser                    │
│                                      │
│  AST leaf node:                     │
│  NumericLiteral (42)                │
│                                      │
│  Value is embedded in the node.     │
│  No children to recurse into.       │
│  No scope to consult.               │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  STEP 3 — Bytecode Compilation     │
│                                      │
│  1. Value 42 added to constant pool │
│     at index [3]                    │
│                                      │
│  2. Generated bytecode:             │
│     LdaSMI [42]                     │
│     → Small Integer (SMI) encoding  │
│       fits in 31 bits, stored       │
│       directly in the instruction   │
│       (no constant pool lookup)     │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  STEP 4 — Runtime Execution        │
│                                      │
│  LdaSMI [42]                        │
│  → CPU register now holds value 42  │
│  → Zero memory allocations          │
│  → Zero lookups                     │
│  → Zero type checks                 │
│                                      │
│  The literal is the fastest thing   │
│  the engine can process.            │
└─────────────────────────────────────┘
```

---

## Quick Rule of Thumb

| If you see... | It's a Literal if... | It's NOT a Literal if... |
|---|---|---|
| `42` | Standalone in code | It's inside a string (`"42"`) — that's a string literal containing digits |
| `"Harshal"` | It has quotes around it | It's `Harshal` without quotes — that's an identifier |
| `true` | Used as a value (`let x = true`) | Used as a variable name (which would throw `SyntaxError`) |
| `null` | Assigned intentionally (`let x = null`) | You're comparing with `==` vs `undefined` (that's an operator, not a literal) |
| `0xFF` | It starts with `0x` | You wrote `FF` alone — that's an identifier |
| `3.14` | It's a number in code | You used `parseFloat("3.14")` — that's a function call, not a literal |

---

> **TL;DR:** A literal is a raw, fixed value written directly in your source code — `42`, `"Harshal"`, `true`, `null`, `3.14`. Unlike an identifier (which needs scope resolution at runtime) or a keyword (which is a language instruction), a literal carries its value intrinsically. The engine places it into the constant pool at compile time, and at runtime it loads it directly with zero lookups, zero allocations, and zero type checks. Literals are the fastest thing the engine processes.
