# Mantra Counter 🕉️

A beautifully designed digital counter web application for tracking mantra chanting with integrated background music and audio feedback.

## ✨ Features

- **Digital Counter Display**: 4-digit counter (0000-9999) with elegant DS-Digital font styling
- **Interactive Chant Button**: Click to increment the counter and play chant audio
- **Background Music Control**: Toggle looping spiritual background music (Hare Krishna)
- **Reset Functionality**: Reset counter to 0000 with a single click
- **Responsive Design**: Fully responsive layout that adapts to mobile and desktop screens
- **Beautiful UI**: 
  - Circular counter with golden gradient borders
  - Wood texture background
  - Decorative mala (prayer beads) image
  - Smooth animations and transitions
  - Custom color scheme with gold and blue themes

## 🚀 Demo

The counter features:
- 4-digit display that updates with each chant
- Audio feedback with "Radhe Radhe" chant sound
- Optional background music with play/pause toggle
- Visual button press effects
- Auto-reset at 9999 (cycles back to 0000)

## 📁 Project Structure

```
mantra-counter/
│
├── index.html              # Main HTML structure
├── Src/
│   ├── style.css          # Styling and layout
│   ├── Img/
│   │   ├── Button.png     # Chant button image
│   │   ├── Mala.png       # Prayer beads decoration
│   │   └── woodTextureMd.png  # Background texture
│   └── music/
│       ├── Radhe Radhe.mp3    # Chant audio
│       └── hare-krishna-relaxing-music-5-117834.mp3  # Background music
└── scripts/
    └── script.js           # Application logic
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: 
  - Custom properties (CSS variables)
  - Flexbox for layout
  - CSS transforms and animations
  - Gradient effects
  - Media queries for responsiveness
  - `clamp()` for responsive sizing
- **Vanilla JavaScript**: 
  - DOM manipulation
  - Event listeners
  - Audio API
  - String methods (`padStart()`)

## 📋 Installation

1. **Clone or download** the project files
2. **Ensure the folder structure** matches the project structure above
3. **Add required assets**:
   - Place button and mala images in `Src/Img/`
   - Place audio files in `Src/music/`
   - Place wood texture background in `Src/Img/`
4. **Open `index.html`** in a web browser

## 💻 Usage

1. **Start Chanting**: Click the center "CHANT" button to increment the counter and hear the mantra
2. **Toggle Music**: Click the left music button to play/pause background music
3. **Reset Counter**: Click the right reset button to set the counter back to 0000
4. **Track Progress**: Watch the 4-digit display update with each chant

## 🎯 Key Functions

### Counter Logic
```javascript
// Increments counter (0-9999) and updates display
chantBtn.addEventListener("click", () => {
  count = count > 9999 ? 0 : ++count;
  updateTime();
  chantAudio.play();
});
```

### Display Update
```javascript
// Updates each digit separately with padding
function updateTime() {
  time.forEach((span, index) => {
    const padCount = count.toString().padStart(4, "0");
    span.textContent = padCount[index];
  });
}
```

### Background Music Control
```javascript
// Toggle play/pause with loop enabled
btnMusic.addEventListener("click", () => {
  if (!bgMusicPlaying) {
    bgMusic.play();
    bgMusicPlaying = true;
  } else {
    bgMusic.pause();
    bgMusicPlaying = false;
  }
});
```

## 🎨 Design Features

- **Color Scheme**:
  - Dark Gold: `#dec183`
  - Light Gold: `#f8e8b3`
  - Superiority Blue: `#6dafd2`

- **Responsive Breakpoints**:
  - Mobile optimization at `max-width: 420px`
  - Button repositioning for smaller screens

- **Typography**:
  - DS-Digital font for counter display
  - Sans-serif for labels and text

## 📱 Responsive Design

The application automatically adjusts for different screen sizes:
- **Desktop**: Buttons positioned on left and right sides
- **Mobile (<420px)**: Buttons repositioned below the counter for better accessibility

## 🔧 Customization

### Changing Audio Files
Replace the audio file paths in `script.js`:
```javascript
const chantAudio = new Audio("path/to/your/chant.mp3");
const bgMusic = new Audio("path/to/your/background.mp3");
```

### Adjusting Color Theme
Modify CSS custom properties in `style.css`:
```css
:root {
  --darkGold: #your-color;
  --lightGold: #your-color;
  --SuperiorityBlue: #your-color;
}
```

### Counter Maximum Value
Change the reset threshold in `script.js`:
```javascript
count = count > YOUR_MAX ? 0 : ++count;
```

## 🌟 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

**Note**: Requires modern browser with support for:
- ES6 JavaScript features
- CSS custom properties
- Web Audio API
- CSS `clamp()` function

## 📝 License

This project is open source and available for personal and educational use.

## 🙏 Credits

Created for spiritual practitioners to track their daily mantra chanting practice.

---

**Enjoy your spiritual practice! 🕉️**
