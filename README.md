# Calculator

A modern, responsive calculator web app built with HTML, CSS, and JavaScript.


## Features

- **Basic Operations:** Addition, subtraction, multiplication, and division.
- **Keyboard Support:** Press Enter to evaluate expressions.
- **Input Validation:** Only valid mathematical expressions are accepted.
- **Error Handling:** Invalid input triggers a red border and red placeholder message.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Accessible:** All buttons and input fields include `aria-label` for screen readers.

## Demo

[Live Demo]( https://tobilobacodes00.github.io/calculator/) 

## Getting Started

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/calculator.git
    cd calculator
    ```

2. **Open `index.html` in your browser.**

No build tools or dependencies required.

## Project Structure

```
calculator/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Customization

- **Change Theme:** Edit `styles.css` to adjust colors and fonts.
- **Increase Input Limit:** Modify the `maxlength` attribute in the input field in `index.html`.
- **Improve Math Parsing:** For advanced expressions, consider replacing `eval` with a math parser library like [math.js](https://mathjs.org/).

## Accessibility

- All interactive elements have `aria-label` attributes.
- Error states are visually indicated and accessible.

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by tobilobaCodes**
