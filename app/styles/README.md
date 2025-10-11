# Stylesheet Organization

This directory contains modular CSS files for better organization and maintainability.

## File Structure

```
styles/
├── variables.css      # CSS custom properties (colors, transitions)
├── base.css          # Reset, base styles, and global elements
├── navigation.css    # Navigation bar and mobile menu
├── hero.css          # Hero section with animations
├── components.css    # Shared components (buttons, section titles)
├── sections.css      # Main content sections (about, experience, education, contact)
├── skills.css        # Skills & Technologies section
├── animations.css    # Keyframe animations and AOS states
└── responsive.css    # Media queries for all breakpoints
```

## Import Order

The files are imported in `globals.css` in the following order:

1. **variables.css** - CSS variables must be loaded first
2. **base.css** - Base styles and resets
3. **navigation.css** - Header navigation
4. **hero.css** - Hero/landing section
5. **components.css** - Reusable components
6. **sections.css** - Main content sections
7. **skills.css** - Skills section (separated for modularity)
8. **animations.css** - Animation definitions
9. **responsive.css** - Responsive breakpoints (loaded last to override)

## Breakpoints

- **Desktop**: Default styles
- **Tablet**: 968px and below
- **Mobile**: 600px and below
- **Small Mobile**: 400px and below

## Modifying Styles

- **Colors/Variables**: Edit `variables.css`
- **Navigation**: Edit `navigation.css`
- **Section-specific**: Edit the relevant section file
- **Responsive**: Edit `responsive.css`
- **New component**: Add to `components.css` or create new file

## Benefits

✅ Better organization and code readability  
✅ Easier to find and modify specific styles  
✅ Reduced file size with focused modules  
✅ Better collaboration - team members can work on different files  
✅ Easier debugging - quickly locate style issues  
✅ Scalable architecture for future additions
