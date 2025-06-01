# Internship-task-1
<<<<<<< HEAD

=======
>>>>>>> c41a34542a04a26cc65048f6e0292945540c568a
A simple, responsive stopwatch web application built with **HTML**, **CSS**, and **JavaScript**.

## 🚀 Features

- Start, Pause, and Reset the stopwatch
- Displays time in `HH:MM:SS` format
- Fully responsive UI for desktop and mobile
- Clean and minimal design

## 🛠️ Technologies Used

- HTML5
- CSS3
<<<<<<< HEAD
- JavaScript 
=======
- JavaScript 
>>>>>>> c41a34542a04a26cc65048f6e0292945540c568a



# Internship-task-2
Gaurav Somnathe | Personal Portfolio Website
This is the source code for Gaurav Somnathe's personal portfolio website, showcasing his skills as a Full Stack MERN Developer, his passion for fitness content creation, and his experience as a speaker and mentor.

🚀 Features
Responsive Design: Optimized for various screen sizes, from mobile to desktop.

Interactive Navigation: Smooth scrolling to different sections of the page.

Theme Toggle: Switch between a professional dark theme and a clean light theme.

Dynamic Current Year: Automatically updates the copyright year in the footer.

Contact Form: A basic client-side validated contact form.

Scroll-to-Top Button: Convenient navigation back to the top of the page.

Professional Color Palette: A carefully chosen color scheme for a polished look.

💻 Technologies Used
HTML5: For the website structure.

CSS3: For styling and responsive design, utilizing CSS variables for theme management.

JavaScript (ES6+): For interactive elements, theme toggling, smooth scrolling, and form validation.

Font Awesome: For social media and general icons (though not used in navigation links as per recent request).

Google Fonts (Inter & Poppins): For professional typography.

📦 Setup and Usage
To view this portfolio website locally:

Clone the repository (if applicable) or download the index.html file.
(Assuming this code is provided as a single index.html file)

Open the index.html file: Simply double-click index.html in your file explorer. It will open directly in your default web browser.

No special server setup or build process is required as this is a static HTML, CSS, and JavaScript website.

🛠️ Customization
You can easily customize this portfolio:

Content:

Edit the text within the <h1>, <p>, <h2>, <h3> tags in each section (#home, #about, #education, #projects, #contact) directly in the index.html file.

Update project details (title, description, and GitHub links) in the #projects section.

Modify your contact information in the #contact section.

Colors: Adjust the CSS variables defined in the :root selector within the <style> tags to change the dark and light theme colors.

--background-dark, --card-background-dark, --text-dark, --heading-dark, --accent-primary-dark, --accent-secondary-dark, --border-dark, --shadow-color-dark (for dark theme)

--background-light, --card-background-light, --text-light, --heading-light, --accent-primary-light, --accent-secondary-light, --border-light, --shadow-color-light (for light theme)

Fonts: Change the font-family variables in :root to use different fonts from Google Fonts.

Profile Photo: If you wish to add a photo back to the "About Me" section, uncomment the <img> tag and update its src attribute with your image URL. You can also adjust its size and styling in the CSS.

📧 Contact
Feel free to reach out to Gaurav Somnathe:

Email: gauravsomnathe992@gmail.com

Phone: +91 7028439141

Instagram: @fitw.ithgaurav

LinkedIn: linkedin.com/in/gauravsomnathe

GitHub: github.com/Gauravsomnathe




# Internship-task-3
Tic-Tac-Toe Web Application
This is a simple, interactive, and visually appealing Tic-Tac-Toe game built for the web. It is designed to provide a smooth user experience with a responsive layout and subtle animations.

🚀 Features
Interactive Gameplay: Play Tic-Tac-Toe on a 3x3 grid.

Player vs. Player Mode: Challenge a friend.

Player vs. AI Mode: Test your skills against a simple AI opponent (random moves).

Win/Draw Detection: The game accurately identifies wins (three in a row) and draws.

Winning Line Highlight: Visually highlights the winning combination.

Scoreboard: Keeps track of X wins, O wins, and draws.

Reset Game: Easily restart the game at any point.

Responsive Design: Adapts to various screen sizes, from mobile phones to desktop monitors.

Visually Appealing: Features a neon-themed dark aesthetic with gradients and subtle animations for a modern look.

Smooth Scrolling: (Applicable if content extends beyond viewport) Ensures a smooth scroll experience.

💻 Technologies Used
HTML5: Provides the basic structure of the game.

CSS3: Styles the game board, cells, buttons, and implements responsive design, gradients, and animations.

JavaScript (ES6+): Handles all game logic, including turn management, win/draw conditions, AI moves, and UI updates.

Google Fonts (Press Start 2P, Orbitron): Used for a retro, futuristic game aesthetic.

📦 Setup and Usage
To play the Tic-Tac-Toe game:

Save the code: Copy the entire HTML code provided and save it as an .html file (e.g., tictactoe.html) on your computer.

Open in browser: Double-click the saved .html file. It will open in your default web browser, and you can start playing immediately.

No external dependencies or server setup are required.

🛠️ Customization
You can easily customize the game by modifying the CSS variables and JavaScript logic:

Colors: Adjust the --bg-color, --x-color, --o-color, and other color variables in the :root section of the <style> block to change the game's theme.

Fonts: Change the font-main and font-secondary variables to experiment with different font styles.

AI Difficulty: The current AI makes random moves. For a more advanced challenge, you could implement a Minimax algorithm in the handleAIMove function.

Animations/Sound Effects: Add more CSS animations or integrate JavaScript to play sound effects on clicks, wins, or draws.

📄 Task Documentation
Gaurav Somnathe | Web Development | Week 3 Task: Tic-Tac-Toe Web Application
A brief description of what you did:
I developed a fully functional Tic-Tac-Toe web application using HTML for structure, CSS for styling and responsiveness, and JavaScript for game logic. The application features a visually appealing neon theme, allows for both two-player and player-vs-AI modes, tracks scores, and highlights winning combinations. I focused on creating a smooth and interactive user experience with subtle animations.

Screenshots or links to your work (if applicable):
(Since this is a live code generation, screenshots would be added here after deployment. For now, the interactive preview in the Canvas environment serves as the live demonstration.)

Link to live game (if hosted): [Insert Link Here]

Screenshot 1: [Insert Screenshot of Game Board]

Screenshot 2: [Insert Screenshot of Game in Win State]

Tools/platforms used (if any):

HTML5: For structuring the game elements.

CSS3: For styling, including gradients, neon effects, responsive design (@media queries), and animations (@keyframes).

JavaScript (ES6+): For all game logic (state management, turn switching, win/draw checks, AI logic, DOM manipulation).

Google Fonts: For custom typography (Press Start 2P, Orbitron).

Web Browser (e.g., Chrome, Firefox): For development and testing.

Text Editor (e.g., VS Code): For writing code.

Challenges faced & how you solved them:

Responsive Grid Layout:

Challenge: Ensuring the 3x3 grid maintained its aspect ratio and scaled correctly across different screen sizes while keeping cells square and evenly spaced.

Solution: Used CSS Grid for the layout (display: grid; grid-template-columns: repeat(3, 1fr);) and aspect-ratio: 1 / 1; on the .game-grid to ensure it remained square. Flexible units (%, em) and max-width were used for overall container sizing, combined with media queries to adjust font sizes and padding for smaller screens.

Dynamic Winning Line Highlight:

Challenge: Accurately drawing a line over the winning three cells (horizontal, vertical, or diagonal) dynamically with CSS.

Solution: Implemented a single div element (.winning-line) that is dynamically added to the game-grid when a win occurs. Different CSS classes (.row-0, .col-1, .diag-0, etc.) are applied based on the winning combination, which then use position: absolute;, width, height, top, left, right, transform, and transform-origin to position and rotate the line correctly over the grid. CSS animations (@keyframes lineDraw) were added for a smooth visual effect.

AI Implementation (Fresher Level):

Challenge: Creating a simple AI that makes moves without being overly complex for a fresher-level project.

Solution: Opted for a random move AI. The handleAIMove function identifies all empty cells, then randomly selects one to place the 'O' marker. This meets the basic requirement for an AI opponent while keeping the JavaScript logic straightforward and easy to understand. A setTimeout was added to introduce a slight delay, making the AI's move more perceptible and improving user experience.

Preventing Screen Overflow/Scrollbars:

Challenge: The initial body { overflow: hidden; } was intended to prevent unwanted scrollbars from background patterns, but it also cut off content if the screen was too small.

Solution: Removed overflow: hidden; from the body to ensure all content is visible and the page can scroll naturally if needed. The min-height: 100vh; and display: flex; flex-direction: column; justify-content: center; align-items: center; on the body ensure the game is centered and responsive without needing to hide overflow.