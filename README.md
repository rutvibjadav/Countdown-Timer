# Countdown Timer

A clean, responsive countdown timer built with plain HTML, CSS, and JavaScript. Set a target date in the script to count down to a celebration, deadline, launch, or personal goal.

## Features

- Live days, hours, minutes, and seconds countdown
- Easy-to-change target date in `script.js`
- Completion message when the target date arrives or has already passed
- Responsive layout, subtle animations, and reduced-motion support
- No JavaScript frameworks or runtime dependencies

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Project structure

```text
countdown-timer/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

1. Open the `countdown-timer` folder in VS Code.
2. In `script.js`, edit the `targetDate` value to a future date and time. The date is interpreted in the browser's local time zone.
3. Open `index.html` in a browser. You can also use the VS Code Live Server extension if it is installed.

## Deploy with GitHub Pages

1. Create a GitHub repository and add these four project files to its root.
2. Push your changes to GitHub.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the branch containing the project (usually `main`) and the `/(root)` folder, then click **Save**.
6. Open the Pages URL shown in the repository settings after deployment completes.
