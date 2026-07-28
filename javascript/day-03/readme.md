# Day 03 - MERN STACK journey

Today's practice focused on **array slicing, string comparison, character case checking, string trimming, and array searching**.

---

## Practice Question #1 — Slice First N Elements

```javascript
let arr = [7,6,5,4,3,2];
let n = 3;
console.log(arr.slice(0,n));
```

**Concept:** `array.slice(start, end)` returns a shallow copy of a portion of an array without changing the original.

- `slice(0, n)` grabs elements from index `0` up to (but not including) index `n`.
- Output: `[7, 6, 5]`

---

## Practice Question #2 — Slice Last N Elements

```javascript
let arr = [7,9,0,-2];
let n = 2;
console.log(arr.slice(arr.length-n));
```

**Concept:** Passing a single argument to `slice()` grabs everything from that index to the end.

- `arr.length - n` calculates the starting index counting back from the end.
- Here, `4 - 2 = 2`, so it slices from index `2` onward.
- Output: `[0, -2]`

---

## Practice Question #3 — String Comparison (Case-Sensitive)

```javascript
let str = "Ahmed";

if(str == "ahmed" || str == "Ahmed"){
    console.log("String is Ahmed");
}
else if (str = ""){
    console.log("Blank string");
}
else{
    console.log("String not blank");
}
```

**Concept:** String comparison in JS is **case-sensitive**, so `"Ahmed"` and `"ahmed"` are different values — the `||` (OR) checks both possibilities.

⚠️ **Bug to note:** The `else if (str = "")` uses a **single `=`**, which is an *assignment*, not a comparison. This actually sets `str` to an empty string instead of checking it — should be `str === ""`. Since the first condition already matches (`"Ahmed"`), this bug never gets triggered here, but it's worth fixing for correctness.

- Output: `String is Ahmed`

---

## Practice Question #4 — Check Character Case at an Index

```javascript
let str = "AhmEDFARooQ"
console.log(str);
let index = prompt("Enter the index number to check the CASE of the Character at that index");

if(str[index] == str[index].toLowerCase()){
    console.log("Indexed Character is Lower Case");
}
else{
    console.log("Not Lower Case Character");
}
```

**Concept:** Comparing a character to its own `.toLowerCase()` version tells you if it's already lowercase.

- `str[index]` accesses the character at that position.
- If the character equals its lowercase form, it means it was already lowercase (e.g. `'h' == 'h'.toLowerCase()` → true).
- Note: `prompt()` returns a string, but JS auto-converts it when used as an array index here.

---

## Practice Question #5 — Trim Whitespace

```javascript
let str = "      ahmed   ";
console.log("With spaces :",str);
let newstr = str.trim();
console.log("Without spaces:",newstr);
```

**Concept:** `.trim()` removes whitespace from **both ends** of a string (not the middle).

- Original: `"      ahmed   "`
- Trimmed: `"ahmed"`

### Live version (using `prompt`):

```javascript
let str = prompt("Enter string with leading and trailing spaces:");
console.log(`Orignal String ${str}`);
console.log(`Without Spaces String ${str.trim()}`);
```

Same idea, but takes user input instead of a hardcoded string, and uses **template literals** (backticks) to embed variables directly into the string.

---

## Practice Question #6 — Search for a Number in an Array

```javascript
let arr = [44,66,55,77,88,99];
console.log(arr);

let num = prompt("Enter number to check wehter it si include in the array of or not");

if (arr.indexOf(num) != -1) {
    console.log("INcluded");
}
else {
    console.log("Number not included");
}
```

**Concept:** `array.indexOf(value)` returns the index of the value if found, or `-1` if not found.

⚠️ **Bug to note:** `prompt()` always returns a **string**, but the array contains **numbers**. So `arr.indexOf("44")` won't match `44` (strict type comparison under the hood). Fix: convert input first with `Number(num)` or `parseInt(num)`.

```javascript
let num = Number(prompt("Enter number to check whether it is included in the array or not"));
```

---

## Key Takeaways from Today

| Concept | Method/Operator | Notes |
|---|---|---|
| Copy part of array | `.slice(start, end)` | Doesn't modify original |
| Copy from end | `.slice(-n)` or `.slice(len-n)` | Negative or calculated index |
| Compare strings | `==` / `===` | Case-sensitive |
| Assignment vs comparison | `=` vs `==`/`===` | Common bug source |
| Lowercase check | `.toLowerCase()` | Compare char to its lowercase self |
| Remove whitespace | `.trim()` | Only affects leading/trailing spaces |
| Search in array | `.indexOf(value)` | Returns `-1` if not found; type-sensitive |
| User input type | `prompt()` | Always returns a string — convert when needed |