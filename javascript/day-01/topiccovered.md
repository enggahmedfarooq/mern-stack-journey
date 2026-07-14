# JavaScript - Day 01

## Topics Covered

1. Introduction
2. Using the Console
3. What is a Variable?
4. Data Types in JS
5. Numbers in JS
6. Operations in JS
7. NaN in JS
8. Operator Precedence
9. Practice Qs
10. Assignment Operators
11. Unary Operators
12. Practice Qs
13. Identifier Rules
14. Boolean in JS
15. What is TypeScript?
16. Practice Qs
17. String in JS
18. String Indices
19. null & undefined in JS
20. Practice Qs

## Notes

### Console & Variables
- The `console` is the primary tool for debugging and printing output (`console.log()`).
- Variables are declared using `let`, `const`, or `var` and act as named containers for values.
- `const` should be the default choice unless the value needs to be reassigned.

### Data Types
- JS has primitive types: `Number`, `String`, `Boolean`, `undefined`, `null`, `Symbol`, `BigInt`.
- `typeof` is used to check a variable's type at runtime.

### Numbers & Operations
- JS uses a single `Number` type for both integers and floats (no separate `int`/`float`).
- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**`.
- `NaN` ("Not a Number") results from invalid numeric operations (e.g. `"abc" * 2`) and is the only value in JS not equal to itself (`NaN !== NaN`).

### Operator Precedence & Assignment Operators
- Operators are evaluated in a defined order (e.g. `*` and `/` before `+` and `-`); parentheses can override this.
- Assignment operators (`+=`, `-=`, `*=`, `/=`) combine an operation with assignment in one step.

### Unary Operators
- Operate on a single operand, e.g. `-x`, `+x`, `++x`, `x--`, `!x`.

### Identifier Rules
- Variable names can contain letters, digits, `_`, and `$`, but cannot start with a digit.
- Reserved keywords (`let`, `class`, `function`, etc.) cannot be used as identifiers.
- Case-sensitive: `age` and `Age` are different variables.

### Boolean
- Only two values: `true` and `false`.
- Central to conditionals and comparisons.

### Intro to TypeScript
- TypeScript is a superset of JavaScript that adds static typing.
- Helps catch type-related errors at compile time rather than at runtime.

### Strings & String Indices
- Strings are sequences of characters, indexed starting at `0`.
- Can access individual characters via bracket notation, e.g. `str[0]`.
- Common methods: `.length`, `.slice()`, `.toUpperCase()`, etc.

### null vs undefined
- `undefined` means a variable has been declared but not yet assigned a value.
- `null` is an intentional assignment representing "no value."
- `typeof undefined` is `"undefined"`, while `typeof null` is (surprisingly) `"object"` — a long-standing JS quirk.

## Problems Encountered

- Mixed up `null` and `undefined` initially — clarified that `undefined` is JS's default for unassigned variables, while `null` is an explicit "empty" value set by the developer.
- Forgot `NaN` doesn't equal itself, which briefly broke an equality check while solving a practice question — resolved using `Number.isNaN()` instead of `===`.
