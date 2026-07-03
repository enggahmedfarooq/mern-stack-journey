# Profile & Contact Card — Bootstrap Practice

A responsive profile card + contact form built with **Bootstrap 5.3.8** as part of my web development learning journey.

> 🤖 **Note:** This code was written with the help of AI (Claude), used as a learning aid to understand Bootstrap's grid system, components, and utility classes.

## 📌 Overview

This project is a two-column responsive layout:

- **Left column** — A personal profile card with a circular profile photo, name, title, skills list, short bio, and a "Download CV" button.
- **Right column** — A contact form with fields for first name, last name, email, subject, and message.

## 🛠️ Built With

- **HTML5**
- **Bootstrap 5.3.8** (CDN — CSS + JS bundle)
- **Custom CSS** (`style.css`) for fine-tuned styling
- **Google Fonts** — Poppins

## ✨ Features

- Fully responsive layout using Bootstrap's grid system (`row`, `col-12`, `col-md-4`, `col-md-8`)
- Rounded, bordered profile image (`rounded-circle`, custom border color)
- Card components with soft shadows and rounded corners (`shadow`, custom `border-radius`)
- Bootstrap form controls with custom padding and rounded inputs
- Two-column name fields inside the form using nested Bootstrap grid (`row` inside `form`)
- Non-resizable message textarea for a cleaner UI
- Custom Poppins font applied globally, overriding Bootstrap's default typography

## 📁 File Structure

```
├── index.html      # Main HTML structure (profile card + contact form)
├── style.css       # Custom styles layered on top of Bootstrap
└── passport.jpeg   # Profile image
```

## 🎨 Custom Styling Highlights

| Element         | Customization                                  |
|-----------------|-------------------------------------------------|
| `body`          | Light gray background (`#f8f9fa`)                |
| `.card`         | 20px rounded corners                              |
| `img`           | 5px solid blue border, circular, fixed 200x200px  |
| `.btn`          | 10px rounded corners                              |
| `.form-control` | 10px rounded corners, 12px padding                |
| `textarea`      | Resize disabled                                   |

## 🚀 What I Practiced

- Using Bootstrap's grid system to build a responsive two-column layout
- Combining Bootstrap utility classes with custom CSS overrides
- Structuring a form using Bootstrap's `form-label` and `form-control` classes
- Applying a custom Google Font across a Bootstrap-based page


---

*Built by Ahmed Farooq, with AI assistance for code guidance and this documentation.*