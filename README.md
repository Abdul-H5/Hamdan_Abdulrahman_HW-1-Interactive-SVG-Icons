# Dr Nut SVG Icons
This assignment displays a collection of SVG flavour icons for the "Dr Nut" brand. It demonstrates how to style inline SVGs with unique CSS transitions and handle user interactions using Vanilla JavaScript.

✨ Features
1. Unique CSS Interactions
Each icon has a distinct behavior when hovered over. The CSS uses pixel (px) units strictly for spacing and layout, avoiding rem units as per requirements.
Hazelnut (#icon-hazelnut):
Rotates 15 degrees.
Increases color saturation (200%).
Almond (#icon-almond):
Scales up (1.2x).
Inverts colors (Negative effect).
Pecan (#icon-pecan):
Translates Y-axis (moves up).
Applies a large drop shadow to simulate floating.
2. JavaScript Event Handling
The project uses JavaScript to track user clicks on the icons.
It selects all elements with the class .nut-icon.
It retrieves the specific id of the clicked element.
It uses Template Literals (backticks) to inject the ID into a string and logs it to the browser console.
🚀 How to Run
Download the project files.
Open index.html in any modern web browser (Chrome, Firefox, Safari, Edge).
Hover over the icons to see the CSS transitions.
Right-click anywhere on the page and select Inspect (or press F12) to open the Developer Tools.
Click on the Console tab.
Click on an icon to see the ID logged in the console.