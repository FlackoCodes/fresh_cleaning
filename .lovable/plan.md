
# Mobile Navbar Implementation Plan

## Overview
Add a responsive mobile hamburger menu to the Header component that appears on smaller screens (below 768px). The desktop navigation will remain unchanged, while mobile users will see a hamburger icon that opens a slide-in menu.

## Current State
- Desktop navigation is hidden on mobile with `hidden md:flex`
- Contact button is always visible (needs to be hidden on mobile)
- No mobile menu exists currently

## Implementation Details

### Changes to Header.tsx

1. **Add State Management**
   - Import `useState` from React for controlling the mobile menu open/close state

2. **Import Required Components**
   - Import `Sheet`, `SheetContent`, `SheetTrigger`, `SheetClose` from the existing sheet component
   - Import `Menu` icon from `lucide-react` for the hamburger button

3. **Add Hamburger Menu Button**
   - Show a hamburger icon button only on mobile (`md:hidden`)
   - Use the eco-gold color for visibility against the gradient background

4. **Create Mobile Sheet Menu**
   - Use the Sheet component with `side="right"` for slide-in effect
   - Style the sheet with the eco-dark green background (`bg-primary`)
   - Include the logo at the top
   - Add navigation links (Services, Why Eco) as full-width buttons
   - Add the Contact button at the bottom
   - Auto-close the menu when a navigation link is clicked

5. **Adjust Desktop Elements**
   - Hide the Contact button on mobile (`hidden md:flex`)
   - Keep centered navigation hidden on mobile (already done)

### Mobile Menu Design
```
+---------------------------+
|  Logo        [X Close]    |
+---------------------------+
|                           |
|       Services            |
|                           |
|       Why Eco             |
|                           |
|      [Contact Button]     |
|                           |
+---------------------------+
```

### Technical Details
- Sheet background: `bg-primary` (deep forest green)
- Text color: `text-primary-foreground` (white)
- Navigation items: Full-width buttons with hover state using `hover:bg-eco-green-light`
- Close behavior: `setOpen(false)` after clicking any navigation item
- Animation: Uses built-in Sheet slide-in animation from right

### Files to Modify
- `src/components/Header.tsx` - Add mobile menu functionality
