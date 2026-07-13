# Identifier — What It Really Is

## Example File: `06_Identifer_IQ.js`

```js
let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";
let 变量 = "Chinese characters";
```

---

## Comparison Table — Identifier vs Literal vs Keyword

These three token types make up almost every line of JS. Beginners mix them up constantly.

| Aspect | Identifier | Literal | Keyword |
|---|---|---|---|
| **What it is** | A name you invent to refer to something | A raw, fixed value written directly in code | A reserved word with a predefined meaning in the language |
| **Who decides it** | You (the developer) | You (the value you type) | The language itself (ECMAScript spec) |
| **Examples** | `userName`, `_temp`, `$root`, `变量`, `PI` | `"Harshal"`, `42`, `true`, `null`, `3.14` | `let`, `const`, `if`, `return`, `class`, `for` |
| **Can you change its meaning?** | Yes — it names your own variable / function / class | No — `42` is always `42` | No — it's locked by the spec (`if` cannot be a variable) |
| **What the engine does with it** | Resolves it to a scope slot → reads/writes a memory address | Inlines it as a constant value in the bytecode | Interprets it as an instruction (control flow, declaration, etc.) |
| **Can it appear on the left of `=`?** | ✅ Yes — `x = 5` assigns to identifier `x` | ❌ No — `42 = 5` is nonsense | ❌ No — `let = 5` is a `SyntaxError` |
| **Error if misused** | `ReferenceError` (if not defined) | `SyntaxError` (if malformed) | `SyntaxError` (if used as an identifier) |

---

## How It Works for Our Example

### 1. Source Code — What You Write

```js
let validName = "starts with letter";
```

At this point it's just a string of characters in a `.js` file. The engine hasn't touched it yet.

### 2. Tokenization — The Engine Reads the Characters

V8's scanner breaks the line into **tokens**:

```
Token 1:  Keyword  (let)
Token 2:  Identifier  (validName)
Token 3:  Operator  (=)
Token 4:  StringLiteral  ("starts with letter")
Token 5:  Terminator  (;)
```

The identifier `validName` is now an **internal token** with a string value. The engine hasn't allocated any memory yet — it just knows "line 1 has a declaration."

### 3. Parsing & Scope Binding — The Identifier Gets a Home

The parser builds an AST node for the `VariableDeclaration`. Crucially, it runs the identifier through **scope analysis**:

- Is `validName` declared with `let`? → Yes, it belongs to the **current block scope**.
- Is there already another `validName` in this scope? → No. Register it.
- The engine reserves a **slot** (a memory offset) for `validName` in the scope's lexical environment.

At runtime, that slot becomes a property on a hidden `EnvironmentRecord` object:

```
EnvironmentRecord (block scope):
  ┌──────────────────────────────┐
  │  validName → slot #0         │
  │  (currently uninitialized —  │
  │   Temporal Dead Zone)        │
  └──────────────────────────────┘
```

### 4. Execution — The Identifier Becomes a Memory Address

When the line actually runs, the engine:

1. Looks up `validName` in the current scope chain → finds slot #0
2. Evaluates the RHS: `"starts with letter"` is already a literal, so it's ready
3. Writes the string reference into slot #0

After that, any time the code uses `validName`, the engine resolves it through the same scope chain and reads/writes the same slot.

```
┌────────────────────────────────────────────────────────────┐
│  Source:  console.log(validName);                          │
│                                                             │
│  1. Tokenizer → Identifier "validName"                      │
│  2. Parser → IdentifierReference node                      │
│  3. Scope Resolver → slot #0 in current EnvironmentRecord  │
│  4. Runtime → read slot #0 → "starts with letter"          │
│  5. Passes value to console.log                            │
└────────────────────────────────────────────────────────────┘
```

---

## The Identifier Lifecycle (Visual)

```
┌──────────────────┐
│  Source Code     │
│  let x = 10;     │
└──────┬───────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  STEP 1 — Scanner / Tokenizer      │
│                                      │
│  Scans characters one by one:       │
│  'l' 'e' 't' → Keyword              │
│  'x' → Identifier (name = "x")      │
│  '=' → Operator                     │
│  '1' '0' → NumericLiteral           │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  STEP 2 — Parser + Scope Analyzer  │
│                                      │
│  Builds AST:                        │
│  VariableDeclaration                │
│    ├── kind: "let"                  │
│    ├── id: Identifier ("x")         │
│    └── init: NumericLiteral (10)    │
│                                      │
│  Scope analysis:                    │
│  "x" → register in block scope      │
│         as slot #2                  │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  STEP 3 — Execution (bytecode)     │
│                                      │
│  V8 Ignition runs:                  │
│  LdaSMI [10]         ; load literal │
│  StaLexicalSlot [#2] ; write to "x" │
│                                      │
│  Slot #2 now holds value 10         │
└──────────┬──────────────────────────┘
           │
           ▼
┌─────────────────────────────────────┐
│  STEP 4 — Any later reference       │
│                                      │
│  console.log(x)                     │
│  → Tokenize "x" as Identifier      │
│  → Scope lookup → slot #2          │
│  → Read slot #2 → value 10         │
│  → Pass to console.log             │
└─────────────────────────────────────┘
```

---

## Quick Rule of Thumb

| If you see... | It's an Identifier when... | It's NOT an Identifier when... |
|---|---|---|
| `userName` | It's on the left of `=` or used in an expression | It's inside a string (`"userName"`) |
| `$` | It names a variable (`let $ = 10;`) | It's the jQuery library (that's a convention, not syntax) |
| `_` | It names a variable or param | It's a numeric separator (`1_000`) |
| `return` | ❌ Never — it's a keyword | ✅ Always a keyword, can't be an identifier |
| `NaN` | ⚠️ Technically not a keyword, but never reassign it | It's a read-only global property |

---

> **TL;DR:** An identifier is a name you invent to label a variable, function, or class. The engine tokenizes it, registers it in a scope slot, and then every reference to that name becomes a lookup → read/write to a fixed memory address. It's one of three fundamental token types — the other two are literals (raw values) and keywords (language instructions). An identifier is the only one *you* get to name.
