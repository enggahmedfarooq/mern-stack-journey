# Day 02 —  MERN Stack Journey

Practice questions covering variables, template literals, switch statements, and conditional logic with strings.

---

## Qs1. Divisible by 10 Check

**Problem:** Create a number variable `num` with some value. Print `"good"` if the number is divisible by 10, otherwise print `"bad"`.

**Approach:** Use the modulo operator (`%`) to check the remainder when `num` is divided by 10. If the remainder is `0`, the number is divisible by 10, so print `"good"`; otherwise print `"bad"`.

**Concept:** Modulo operator (`%`) for divisibility checks.

---

## Qs2. Name & Age using Template Literals

**Problem:** Take the user's name & age as input using prompts. Return an alert to the user substituting their name & age into: **name is age years old.**

**Approach:** Capture the two values using `prompt()`, then build the final sentence using template literals so the variables are inserted directly inside the string instead of manually concatenating pieces with `+`. Show the result using `alert()`.

**Concept:** Template literals (`` `${}` ``) for clean string interpolation.

---

## Qs3. Months in a Quarter (Switch Statement)

**Problem:** Write a switch statement to print the months in a quarter, using the quarter number as the case value.

**Approach:** Take a quarter number (1–4) and use a `switch` statement to match it against each case. Each case prints the three months belonging to that quarter. A `default` case handles any invalid input, and `break` is used after each case to stop execution from falling through into the next one.

**Concept:** `switch` statement with numeric case values, and the importance of `break` to avoid fall-through.

---

## Qs4. Golden String Check

**Problem:** A string is a **golden string** if it starts with `'A'` or `'a'` and has a total length greater than 5. For a given string, print whether it is golden or not.

**Approach:** Check the first character of the string against both `'A'` and `'a'` using the OR (`||`) operator, then combine that with an AND (`&&`) condition checking that the string's length is greater than 5. Only when both conditions are true is the string considered golden.

**Concept:** Combining logical AND (`&&`) / OR (`||`) operators with string indexing and the `.length` property.

---

## Key Takeaways from Day 02
- Modulo (`%`) is the go-to operator for divisibility checks.
- Template literals make string building with variables far more readable than concatenation.
- `switch` is cleaner than long `if...else if` chains when checking a single variable against multiple fixed values — don't forget `break`.
- Logical operators can be combined with string properties (`length`, indexing) to build compound conditions.

---
