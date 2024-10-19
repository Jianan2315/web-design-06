## Introduction

This is a two-page website that allows users to select a resume template and edit it with their personal information.

## Features Implemented

### **SASS/SCSS Features**

1. **Variables and Custom Properties**: Used in `scss/themes/_variables.scss` for colors, fonts, and sizing.
2. **Nesting**: Applied throughout the SCSS files for better organization.
3. **Interpolation**: Used in `scss/utils/_functions.scss` for dynamic calculations.
4. **Placeholder Selectors**: Defined in `scss/utils/_placeholders.scss` and extended in other styles.
5. **Selectors**: Advanced selectors used in components and layouts.
6. **Mixins**: Created in `scss/utils/_mixins.scss` for reusable code like `flex-center` and `transition`.
7. **Functions**: Custom function `rem()` in `scss/utils/_functions.scss` for converting pixels to rem units.
8. **Control Directives**: (Additional Feature) Used `@if` and `@for` in mixins and components.
9. **Extend/Inheritance**: Used `@extend` to share styles between selectors.
10. **Importing Partials**: Organized SCSS files into partials and imported in `main.scss` and `edit.scss`.

### **CSS Layouts**

- **CSS Grid Layout**: Used in `scss/layouts/_grid.scss` for the templates grid on `index.html`.
- **Flexbox Layout**: Used in `scss/layouts/_flex.scss` for the edit page layout in `edit.html`.

### **Interactivity**

- Hovering over a thumbnail enlarges it at the center of the page (`main.js`).
- Clicking a thumbnail opens it in the Resume Edit page with the selected template ID passed via URL parameters.
- The "Save" button updates the preview section with entered information (`edit.js`).

## File Structure

The SCSS files are organized into:

- **base/**: Base styles and resets.
- **components/**: Individual UI components like buttons, forms, and thumbnails.
- **layouts/**: Styles for grid and flexbox layouts.
- **themes/**: Theme variables and custom properties.
- **utils/**: Mixins, functions, and placeholders.