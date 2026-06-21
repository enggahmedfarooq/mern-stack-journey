# HTML — Practice Day

## What I Built
A practice page covering several core HTML elements — text formatting, embedding media, lists, tables, and chemical/math notation using superscript and subscript.

## Concepts Covered
- `<pre>` tag for preserving whitespace and formatting
- Anchor tags (`<a>`) with `target="_blank"` to open links in a new tab
- Embedding external content with `<iframe>` (YouTube video embed)
- Displaying images with `<img>` and `alt` text
- Ordered lists (`<ol type="a">`) with alphabetic markers
- Unordered lists (`<ul>`)
- Superscript (`<sup>`) and subscript (`<sub>`) — used for both a generic example and a real-world case (writing out the chemical formula for glucose, C₆H₁₂O₆)
- Tables using `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`

## Problems I Faced & How I Solved Them

**Problem:** Wrapped my `<ol>` and `<ul>` lists inside a `<list>` tag.
**Solution:** `<list>` isn't a valid HTML element — it doesn't do anything and should be removed. `<ol>`/`<ul>` work fine on their own.

**Problem:** My Google link didn't work as expected.
**Solution:** Found a typo in the URL (`ww.google.com` instead of `www.google.com`) — small mistake, but a good reminder to double check links.

**Problem:** Tried to set the table border color using `border="black"`.
**Solution:** The `border` attribute in HTML only accepts a number (like `border="1"`) to control thickness — it doesn't accept colors. Styling border color needs to be done with CSS instead. Something to apply once I get to the CSS section.

## What I'd Do Differently
- Clean up the invalid `<list>` wrapper tags
- Fix the broken URL
- Move presentational styling (like border color) to CSS instead of relying on HTML attributes
