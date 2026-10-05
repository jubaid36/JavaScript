# Local Storage Practice Project

A lightweight, clean web application demonstrating persistent client-side state handling using the browser's `localStorage` Web API.

---

## 📌 Project Overview

This project is a beginner-friendly demonstration of how web browsers retain state across reloads without requiring a backend database. Users input their name, which gets saved to the browser's persistent key-value store and rendered to the page.

---

---

## ✨ Features

- **Client-Side Persistence:** Uses `localStorage.setItem()` to store the user's name across sessions and reloads.
- **Auto-Retrieval:** Reads saved data using `localStorage.getItem()` immediately on window load.
- **Form Sanitization:** Trims whitespace with `.trim()` to avoid saving empty values.
- **Modern Responsive Design:** Centered card interface styled with soft gradients, smooth transitions, and distinct focus states.

---

## 🛠️️ Tech Stack

- **HTML5** – Markup and document structure.
- **CSS3** – Flexbox layout, CSS variables/transitions, and modern form styles.
- **JavaScript (Vanilla ES6)** – DOM selection, event handling, and Web Storage API.

---

## ⚙️ Implementation Details

### 1. Saving to Storage
```javascript
button.addEventListener("click", () => {
  const value = uname.value.trim();
  if (value) {
    localStorage.setItem("name", value);
    location.reload();
  }
});
```

### 2. Loading from Storage
```javascript
window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  if (value) {
    username.innerText = value;
  }
});
```

---
