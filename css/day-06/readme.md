# Day 06 - CSS Flexbox & Grid

## 📌 Topics Covered
- Flexbox layout (`display: flex`, `justify-content`)
- Responsive design with media queries (`flex-wrap`)
- CSS Grid layout (`grid-template-columns`, `grid-template-rows`)
- Grid item placement (`grid-column`, `grid-row`)
- Building responsive grid layouts for different screen sizes

## 🐾 Project 1: Pet Adoption Cards
A simple pet adoption landing section built using Flexbox.

**Key concepts practiced:**
- `#pets` container uses `display: flex` with `justify-content: space-evenly` to space cards evenly
- `.card` styled with border, border-radius, and padding for a clean card UI
- Images made responsive with `width: 100%`
- Media query (`max-width: 380px`) wraps cards using `flex-wrap: wrap` for smaller screens
- Basic color theming using `h2`, `span`, and `h4` selectors

**Files:**
- `index.html`
- `style.css`

## 🧩 Project 2: Grid Layout Practice
A practice layout simulating a typical website structure (Header, Sidebar, Navigation, Ads, Main, Footer) using CSS Grid.

**Key concepts practiced:**
- `.container` set up as a 12x12 grid using `grid-template-columns: repeat(12, 1fr)` and `grid-template-rows: repeat(12, 1fr)`
- Each `.item` placed precisely using `grid-column` and `grid-row` line numbers
- Layout restructured for smaller screens using a media query (`max-width: 720px`) that repositions the sidebar, navigation, ads, and footer

**Files:**
- `practice.html`
- `practice.css`

