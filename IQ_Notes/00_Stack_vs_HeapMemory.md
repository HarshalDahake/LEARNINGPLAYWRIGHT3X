# Stack vs Heap Memory

## Overview

**Stack** and **Heap** are the two main memory regions where a program stores data at runtime. They differ in how memory is allocated, deallocated, accessed, and sized.

---

## Side-by-Side Comparison

| Feature | Stack | Heap |
|---|---|---|
| **Structure** | LIFO (Last In, First Out) — like a stack of plates | Tree / free-list of allocated blocks — no fixed order |
| **Allocation / deallocation** | Automatic — push when a function is called, pop when it returns | Manual (`malloc`/`free`) or automatic (GC) — programmer or runtime controls lifetime |
| **Speed** | Very fast (just move a pointer) | Slower (must search for a free block, handle fragmentation) |
| **Size** | Small (typically ~1–8 MB per thread) | Large (bounded by available RAM) |
| **Lifetime** | Tied to function scope — data dies when the function returns | Persists until explicitly freed or garbage collected |
| **Access pattern** | Sequential (contiguous) — cache-friendly | Random-access — can fragment, less cache-friendly |
| **What lives here** | Local variables, function call frames, return addresses | Objects, dynamic data structures (linked lists, trees), large data |
| **Risk** | Stack overflow (too deep recursion, large locals) | Memory leak (forgetting to free), heap fragmentation |

---

## Walkthrough with a Simple Code Example

Let's trace this JavaScript snippet through both memory regions:

```js
function greet(name) {
    let msg = "Hello, " + name;
    return msg;
}

let user = "Harshal";
let result = greet(user);
console.log(result);
```

### Step-by-Step Memory Layout

```
BEFORE ANY CODE RUNS — Memory is empty:

┌─────────────────────────────────────┐
│              STACK                   │
│  (empty — no function is active)    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│              HEAP                    │
│  (empty — no objects allocated)     │
└─────────────────────────────────────┘
```

---

```
STEP 1 — let user = "Harshal";

JavaScript engines often store short strings on the stack
(or intern them), but logically a string is a heap-allocated
object. The stack holds a **reference** (pointer) to it.

┌─────────────────────────────────────┐
│              STACK                   │
│  ┌──────────────────────────────┐   │
│  │  user  →  ref#001            │   │
│  └──────────────────────────────┘   │
│  (global execution context)         │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│              HEAP                    │
│  ┌──────────────────────────────┐   │
│  │  ref#001: "Harshal"          │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

```
STEP 2 — let result = greet(user);
          The function greet("Harshal") is called.

A new **stack frame** is pushed for greet().
The parameter `name` is copied into it.
Inside greet, `let msg = "Hello, " + name` creates
a new concatenated string on the heap.

┌─────────────────────────────────────┐
│              STACK                   │
│  ┌──────────────────────────────┐   │
│  │  greet frame:                │   │
│  │    name  →  ref#001         │   │
│  │    msg   →  ref#002         │   │
│  └──────────────────────────────┘   │
│  ┌──────────────────────────────┐   │
│  │  global frame:               │   │
│  │    user  →  ref#001          │   │
│  │    result  (pending)         │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│              HEAP                    │
│  ┌──────────────────────────────┐   │
│  │  ref#001: "Harshal"          │   │
│  │  ref#002: "Hello, Harshal"   │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

```
STEP 3 — greet() finishes (return msg;)

The return value (reference ref#002) is passed back.
The stack frame for greet() is **popped** — name and msg
vanish instantly. The global frame resumes.

┌─────────────────────────────────────┐
│              STACK                   │
│  ┌──────────────────────────────┐   │
│  │  global frame:               │   │
│  │    user  →  ref#001          │   │
│  │    result →  ref#002         │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────┐
│              HEAP                    │
│  ┌──────────────────────────────┐   │
│  │  ref#001: "Harshal"          │   │
│  │  ref#002: "Hello, Harshal"   │   │
│  └──────────────────────────────┘   │
└─────────────────────────────────────┘

The heap still holds both strings. `ref#002` is now
referenced by `result` so it stays alive. If `result`
goes out of scope later, the GC will collect ref#002.
```

---

```
STEP 4 — console.log(result) runs, then the program ends.

Stack is unwound completely (global context pops).
Heap memory is reclaimed by the OS / GC.

┌─────────────────────────────────────┐
│              STACK                   │
│  (empty — clean)                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│              HEAP                    │
│  (empty — reclaimed)                 │
└─────────────────────────────────────┘
```

---

## Summary — What Goes Where?

| Data | Memory Region | Why |
|---|---|---|
| **Local primitives** (`let x = 5`) | Stack | Fixed size, short lifetime, fast access |
| **Function params & return addresses** | Stack | LIFO matches call/return flow naturally |
| **References / pointers** | Stack | Small (8 bytes on 64-bit), scope-tied |
| **Objects, arrays, strings** | Heap | Dynamic size, need to outlive the creating function |
| **Closure-captured variables** | Heap | Must survive after the outer function has returned |
| **Large buffers / images** | Heap | Stack would overflow immediately |

### One-Liner Rule of Thumb

> **Stack = function call bookkeeping + small local data.**  
> **Heap = anything that needs to live dynamically or grow beyond a fixed size.**
