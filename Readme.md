
#   The CraftMoji Studio

The Craftmoji Studio (Emoji Crafter) is an interactive web application that allows users to create and customize their emoji characters. The project is built using HTML, CSS, and jQuery to provide a dynamic, user-friendly interface. Users can select different features such as skin tone, eyes, mouth, eyebrows, hats, and more, with options for both single and multiple selections. The customization is immediately reflected in a live preview of the emoji character. The jQuery code manages user interactions, updates the preview dynamically, and handles custom input for additional items.

1. **Frontend Technologies:**
   - HTML: The structure of the Craftmoji Studio is built using HTML. It defines the layout of the emoji elements, such as the face, eyes, mouth, eyebrows, and additional items.
   - CSS: The design and styling of the Craftmoji Studio are achieved using CSS. It handles the appearance of the emoji components and overall user interface, ensuring it is visually appealing and responsive.
   - jQuery: The interactive functionality is powered by jQuery. It enables dynamic interactions, like changing the emoji's appearance in real-time when users select different elements (e.g., skin tone, eyes, mouth).
   
2. **How It Works:**
   - Event Binding: When the user clicks on a choice (like skin tone or eye shape), a jQuery event listener is triggered. This listener detects the selected option and applies the corresponding class to the emoji element in the preview.
   - Dynamic Class Updates: Depending on the type of selection (e.g., skin, eyes, mouth), the appropriate CSS class is added or removed from the emoji elements, dynamically updating its look.
   - Preview Updates: The user sees their changes reflected instantly on the emoji preview area, making it easy to create a personalized emoji.

3. **Logic Implementation**: 
   - Single vs. Multiple Selection: The app handles single and multiple selections using conditions in the jQuery code. If the selection is restricted (like skin), only one option can be chosen at a time, while other parts (like face extras) can have multiple selections toggled on or off.
   - Face Extras and Custom Items: If the user selects additional accessories or items, those are dynamically added or removed using jQuery, ensuring that the final emoji is fully customizable.

By combining HTML for structure, CSS for styling, and jQuery for interactivity, Craftmoji Studio offers an easy and fun way for users to create personalized emojis.

## Features

1. Customizable Emoji Elements: Users can customize various parts of the emoji including skin tone, eyes, mouth, eyebrows, and hats.

2. Real-time Preview: Changes made by the user are instantly reflected in the emoji preview, allowing for immediate visual feedback.

3. Single and Multiple Selection: Users can select one option per category (e.g., skin, eyes) or toggle multiple choices (e.g., face extras).

4. Interactive UI: The interface responds to clicks and dynamically updates the emoji’s appearance based on user selections.

5. Dynamic Extra Features: Users can add or remove extra features (like accessories) to personalize their emoji further.

6. Effortless User Interaction: The intuitive design allows users to easily pick and choose different elements to create unique emojis.
## Run Locally

Clone the project

```bash
  git clone https://github.com/gupta03akshita/The-CraftMoji-Studio.git
```

Go to the project directory

```bash
 cd <name of directory>
```

Open the project in your browser

```
 Open index.html in any browser.

