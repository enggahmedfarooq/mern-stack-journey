# Day 02 — CSS Practice (Quora & Facebook Clones)

Practiced applying CSS to two mock UI layouts — a Quora-style Q&A feed and a Facebook-style login bar — to get more comfortable with selectors (element, ID, class, attribute), font stacks, and basic layout coloring.

## What the code does

**Quora clone**
- **Header** — `h1` with "Quora" branding, login/signup buttons, a username/password input pair, and a nav bar with Home/Following/Answer/Spaces links
- **Feed** — repeated post blocks, each with a user name, a "Follow" link, a question (`h3`), and upvote/answer buttons
- `<hr>` tags separate each post

**Facebook practice**
- A simple `h1` heading ("Facebook"), two buttons (Log in / Register) sharing a `.userbtn` class, and a search bar made of a label, input, and search button

## Concepts practiced

- Element, ID, and class selectors (`h1`, `#login`, `.follow`)
- Attribute selectors (`input[type="text"]`)
- Font stacks with fallback fonts (`font-family: 'Courier New', Courier, monospace`)
- Universal selector (`*`) to apply a base font across a page
- `background-color` and `color` for buttons, links, and containers
- Styling anchor tags and removing default link underline (`text-decoration: none`)
- Reusing one class (`.userbtn`) across multiple elements for consistent styling

