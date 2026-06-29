# Day 05 - Flexbox Grid Layout

## What I Built
A 3x3 grid of boxes (A–I) inside a flex container, using `flex-wrap` to create a responsive grid-like layout without using CSS Grid.

## Concepts Practiced
- `display: flex` with `flex-wrap: wrap` to allow items to wrap onto multiple lines
- `justify-content: space-evenly` to distribute items horizontally with equal spacing
- `align-items: center` to align wrapped rows vertically
- Fixed-size flex items (`height`/`width`) inside a fixed-size parent container
- `border-radius` on both container (`15px`) and items (`15%`) to compare absolute vs percentage-based rounding

## Key Observations
- `flex-wrap: wrap` is what turns a single-row flex layout into a multi-row "grid" — without it, all 9 boxes would try to squeeze into one line.
- `justify-content: space-evenly` distributes the wrapped rows with equal gaps on all sides, including before the first and after the last item in each row.
- Using `%` for `border-radius` (15%) scales with the element's own size, while `px` (15px) stays fixed — useful to compare side by side.

## Files
- `index.html` - structure (9 `.innerdiv` elements inside `#div`)
- `style.css` - flexbox container + item styling
