# communication
- Prefers explanations to be given in English; when the user follows a non-English explanation with "explain in english", re-provide the explanation in English. Confidence: 0.70
- Scope code edits and comments to exactly what the user asked to change: when they ask for an experiment/change (e.g., log a parameter instead of `this.name`), make only that change and leave unrelated parts (e.g., an outdated comment) untouched, while flagging that the comment is now stale. Confidence: 0.55
- When the user pastes a single `console.log(...)` line from a JS learning file and asks to "explain with output", they want the exact printed output plus the reason (method binding, `this` semantics, static vs non-static), not just a general description of the method. Scope the answer strictly to the line asked about: when the user clarifies (e.g., "i am asking for console.log(harshal.nsf());"), answer only that line's output and explicitly attribute any extra output (like a stray `undefined`) to the specific line that produces it rather than covering neighboring lines. When the user asks "why is there undefined in my output", attribute the `undefined` to the exact wrapping statement (e.g., `console.log(method())` where the method has no `return`) and show how to remove it. Confidence: 0.78
- When the user asks a terse validity question about JS syntax in their learning files (e.g., "is this possible" about `b=5;` inside a class body), they want a direct yes/no verdict grounded in actual language behavior (e.g., ES2022 class fields) plus what the program outputs, and they benefit from the assistant flagging when a comment in the file itself is wrong. Confidence: 0.55

# workflow
See [workflow/taste.md](workflow/taste.md)
# code-style
See [code-style/taste.md](code-style/taste.md)
