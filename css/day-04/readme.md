# CSS Day 04 — Transitions, Transforms & Box Shadow

Day 4 of practicing CSS fundamentals. Focus today was on animating and transforming elements: smooth transitions on hover, 2D transforms (translate, rotate, skew), and box shadows.

## What's in this file

- `index.html` — five boxes (`box1`–`box4`, `myPic`) used to demo different CSS properties
- `style.css` — styles for each box

## Concepts practiced

**1. Transitions (`#box1`)**
A green box that smoothly grows from `100px` to `600px` wide on hover.
```css
transition: 1s ease-in 0.5s;
```
- `1s` → duration
- `ease-in` → timing function
- `0.5s` → delay before the transition starts

**2. Transform: translate + rotate (`#box2`)**
A red box moved 200px right and 200px down, then rotated 90 degrees.
```css
transform: translate(200px, 200px) rotate(90deg);
```

**3. Transform: skew (`#box3`)**
A light blue box skewed along the X-axis by 20 degrees, giving it a slanted parallelogram look.
```css
transform: skewX(20deg);
```

**4. Box shadow (`#box4`)**
A light green box with a soft green drop shadow.
```css
box-shadow: 2px 2px 5px green;
```

**5. Background image + gradient overlay (`#myPic`)**
A pink box with a semi-transparent white gradient layered on top of a background image, using `background-size: cover` so the image fills the box.
```css
background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(img.jpeg);
background-size: cover;
```

## Key takeaways

- `transition` only animates a property when it changes (like on `:hover`) — it needs a trigger.
- `transform` doesn't affect layout/flow of other elements, unlike changing `width`/`height`/`margin` directly.
- Multiple transform functions can be chained in one line and are applied in order.
- Layering a gradient over a background image (via comma-separated `background-image` values) is a common trick to dim/tint images without editing the actual file.

