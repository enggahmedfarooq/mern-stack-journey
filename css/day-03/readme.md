# Day 03 — Box Model, Borders & Display Properties

Practiced the CSS box model in more depth — dimensions, borders, margin vs padding, border-radius for circles, and the `display` property's effect on block vs inline elements.

## What the code does

- **`#outer`** — a fixed-size container holding three colored circles (red, yellow, green), each made circular using `border-radius: 50%`
- **`#div`** — a standalone grey box with a dotted border, demonstrating individual margin sides (`margin-top`, `margin-right`, `margin-bottom`, `margin-left`) and padding
- **`.div2`** — three pink circular boxes set to `display: inline-block` so they sit side-by-side instead of stacking
- **`<ul>` list** — a list of tech skills (HTML, CSS, JS, NodeJS, ReactJS, SQL, MongoDB, Java, C++, C, Python) with `display: inline` applied, which removes the bullet points and line breaks since the list items no longer behave as block-level list items

## Concepts practiced

- The box model: `height`, `width`, `border`, `margin`, `padding`
- Creating circles with `border-radius: 50%`
- Margin shorthand vs individual sides (`margin-top/right/bottom/left`)
- Mixing units — `px`, `em` — within the same property group
- `display: inline-block` to lay out block-level elements in a row while keeping box model properties (width/height/margin)
- `display: inline` and how it strips list semantics/styling from `<li>` elements
- ID selectors for one-off styling (`#red`, `#yellow`, `#green`, `#div`) vs class selectors for repeated styling (`.inner`, `.div2`)

## Notes / things to fix

- The HTML is missing an opening `<body>` tag — there's a closing `</body>` at the end with nothing to match
- Double-check that the CSS rules are saved inside `style.css` (as linked in the `<head>`) rather than pasted directly into the HTML file, since raw CSS outside a `<style>` tag won't be applied# Day 03 — Box Model, Borders & Display Properties

Practiced the CSS box model in more depth — dimensions, borders, margin vs padding, border-radius for circles, and the `display` property's effect on block vs inline elements.

## What the code does

- **`#outer`** — a fixed-size container holding three colored circles (red, yellow, green), each made circular using `border-radius: 50%`
- **`#div`** — a standalone grey box with a dotted border, demonstrating individual margin sides (`margin-top`, `margin-right`, `margin-bottom`, `margin-left`) and padding
- **`.div2`** — three pink circular boxes set to `display: inline-block` so they sit side-by-side instead of stacking
- **`<ul>` list** — a list of tech skills (HTML, CSS, JS, NodeJS, ReactJS, SQL, MongoDB, Java, C++, C, Python) with `display: inline` applied, which removes the bullet points and line breaks since the list items no longer behave as block-level list items

## Concepts practiced

- The box model: `height`, `width`, `border`, `margin`, `padding`
- Creating circles with `border-radius: 50%`
- Margin shorthand vs individual sides (`margin-top/right/bottom/left`)
- Mixing units — `px`, `em` — within the same property group
- `display: inline-block` to lay out block-level elements in a row while keeping box model properties (width/height/margin)
- `display: inline` and how it strips list semantics/styling from `<li>` elements
- ID selectors for one-off styling (`#red`, `#yellow`, `#green`, `#div`) vs class selectors for repeated styling (`.inner`, `.div2`)

