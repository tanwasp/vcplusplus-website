# VC++ Website Color System

This document outlines the color system and best practices for the VC++ website.

## Color Hierarchy & Accessibility

The website uses semantic color classes that automatically provide appropriate contrast ratios for different backgrounds.

### Text Colors for Light Backgrounds
- `text-text-primary` - Main headings and important text (#1f2937)
- `text-text-secondary` - Body text and descriptions (#6b7280) 
- `text-text-muted` - Subtle text and labels (#9ca3af)

### Text Colors for Dark Backgrounds
- `text-text-on-dark` - Main text on dark backgrounds (#f9fafb)
- `text-text-on-dark-secondary` - Secondary text on dark (rgba(249, 250, 251, 0.8))
- `text-text-on-dark-muted` - Muted text on dark (rgba(249, 250, 251, 0.6))

## Background Colors
- `bg-background` - Main page background (white)
- `bg-maroon` - Brand color for headers and CTA buttons (#8A0933)
- `bg-light-gray` - Light sections and cards (#f5f5f5)
- `bg-dark-gray` - Footer and dark sections (#333333)

## Utility Functions

Located in `/src/utils/colors.ts`:

### `colorClasses`
Provides consistent class names for common styling patterns:
```typescript
colorClasses.text.primary    // Primary text color
colorClasses.button.primary  // Primary button styling
colorClasses.bg.lightGray    // Light gray background
```

### Helper Functions
- `getEventTypeColor(type)` - Returns appropriate color for event types
- `getProjectCategoryColor(category)` - Returns color for project categories  
- `getProjectStatusColor(status)` - Returns color for project status
- `getDifficultyColor(difficulty)` - Returns color for difficulty levels

## Best Practices

### ✅ Do:
- Use semantic color classes (`text-text-primary` instead of `text-gray-900`)
- Use the utility functions for consistent badge/tag colors
- Test color contrast using browser dev tools
- Use the `colorClasses` object for common patterns

### ❌ Don't:
- Use hardcoded hex colors in component files
- Use `text-gray` on dark backgrounds 
- Create new color utility functions without adding them to `/src/utils/colors.ts`
- Use arbitrary color values

## Customization

To update the color scheme:
1. Edit CSS variables in `/src/app/globals.css`
2. Update the `colorClasses` object in `/src/utils/colors.ts`
3. Test all pages for contrast and accessibility

## Accessibility Notes

All color combinations in this system meet WCAG 2.1 AA contrast requirements:
- Primary text: 4.5:1 contrast ratio minimum
- Secondary text: 3:1 contrast ratio minimum 
- Interactive elements: 3:1 contrast ratio minimum

The color system automatically handles dark mode preferences through CSS variables.