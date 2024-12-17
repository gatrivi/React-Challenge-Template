### 1. **Reset Default Browser Styles**

Ensure consistent rendering across browsers.

```css
/* Reset browser's default styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 2. **Typography: Clean Fonts and Line Spacing**

Use system fonts or Google fonts with proper spacing for readability.

```css
body {
  font-family: "Arial", sans-serif; /* Replace with any clean sans-serif */
  line-height: 1.6; /* Increases readability */
  font-size: 16px; /* Standard size */
  color: #333; /* Slightly off-black for modern feel */
}
```

### 3. **Consistent Color Palette**

Use a limited color palette and consistent tones for a clean look.

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
  --bg-color: #f4f4f4;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

### 4. **White Space and Padding**

Allow elements to breathe for a clean, professional feel.

```css
section,
article {
  padding: 20px;
  margin-bottom: 20px;
}
```

### 5. **Subtle Shadows and Borders**

Add depth with soft shadows.

```css
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow */
  border-radius: 8px; /* Rounded corners */
  padding: 20px;
  background-color: white;
}
```

### 6. **Responsiveness (Mobile-first)**

Use media queries for mobile responsiveness.

```css
/* Mobile-first layout */
.container {
  padding: 15px;
}

@media (min-width: 768px) {
  .container {
    padding: 30px;
  }
}
```

### 7. **Button Styles**

Stylize buttons with hover effects.

```css
button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: var(--secondary-color);
}
```

### 8. **Flexible Grid Layout**

Use Flexbox for layout consistency.

```css
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 calc(33.333% - 40px);
  margin: 10px;
}
```

### 9. **Navigation Bar**

Keep navigation clean and sticky on scroll.

```css
.navbar {
  background-color: var(--primary-color);
  padding: 10px 20px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
}

.navbar a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
```

### 10. **Footer**

A clean, minimal footer with centered content.

```css
footer {
  text-align: center;
  padding: 20px;
  background-color: var(--primary-color);
  color: white;
  margin-top: 40px;
}
```

These basics provide a strong foundation for a professional-looking site with minimal effort. You can build upon this with custom fonts, animations, or more advanced styling as needed.

### Recommended Monospace Font: **"Fira Code"**

"Fira Code" is a popular monospace font, especially for developers, because of its clear glyphs and support for ligatures (optional). Here's how to use it with proper font weight management:

### How to Include Fira Code in Your CSS:

You can easily include it from Google Fonts.

```html
<link
  href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

### CSS Example with Font Weight:

```css
body {
  font-family: "Fira Code", monospace;
  font-weight: 400; /* Regular weight */
  color: #333;
}

h1 {
  font-weight: 700; /* Bold */
}

p.light-text {
  font-weight: 300; /* Light */
}
```

### Explanation of Font Weight Issue:

The reason you only see changes from **light** (300), **regular** (400), to **bold** (700) and nothing else is because not all fonts support every weight. Some fonts only provide a few specific weights (like 300, 400, 700). When you try to use intermediate weights (e.g., 500 or 600), the browser may default to the nearest available weight.

#### Why Font Weights Don't Always Change:

- **Limited Weights**: Some fonts only include a few predefined weights (e.g., light, regular, bold). For instance, if the font only includes 400 (regular) and 700 (bold), trying to set a weight of 600 won’t show any noticeable difference—it’ll default to either 400 or 700.
- **Fallback Behavior**: If a font file doesn’t support a specific weight, browsers will substitute the closest available weight.

### Solution: Use a Font with More Weight Options

When selecting fonts, make sure the font you're using explicitly supports a range of weights. Fira Code, for example, supports 300, 400, 500, 600, and 700.

#### Additional Font Weight Options for Fira Code:

```css
p {
  font-family: "Fira Code", monospace;
}

p.regular {
  font-weight: 400; /* Regular */
}

p.medium {
  font-weight: 500; /* Medium */
}

p.semi-bold {
  font-weight: 600; /* Semi-bold */
}

p.bold {
  font-weight: 700; /* Bold */
}
```

By using fonts that support multiple weights like **Fira Code**, you’ll have more granular control over the appearance of your text.
