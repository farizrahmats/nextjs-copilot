# Copilot Instructions for Next.js Portfolio Project

## Project Overview

This is a personal portfolio website built with Next.js (App Router) to showcase web development projects, skills, and contact information.

The project should prioritize:

* Clean, modern UI
* Performance and accessibility
* Reusability and maintainability
* Minimal but polished user experience

---

## Tech Stack

* Next.js (App Router)
* TypeScript (strict mode)
* Tailwind CSS
* ESLint + Prettier
* Local JSON for data (no external CMS)

---

## Project Structure

Follow a simple and clean folder structure:

```
/app            # App Router pages and layouts
/components     # Reusable UI and layout components
/lib            # Utilities, helpers, data functions
/styles         # Global styles (if needed)
/contexts        # React contexts (if needed)
/hooks           # Custom React hooks (if needed)
/data            # Local JSON files for projects, skills, etc.
```

### Guidelines

* Keep components small and focused
* Avoid deeply nested folders
* Use clear, descriptive file names
* Use camelCase for variables and functions
* Use PascalCase for components

---

## Component Architecture

### General Rules

* Use **functional components only**
* Do NOT use class components
* Prefer **plain functions over React.FC**
* Use **TypeScript interfaces/types** for props

### Reusability

* Prefer highly reusable components:

  * Button
  * Card
  * Container
  * Section
* Separate UI components from page logic
* Avoid duplication

---

## Styling Guidelines

### Tailwind CSS

* Use Tailwind for all styling
* Avoid inline styles unless absolutely necessary
* Use utility classes consistently

### Theming

* Implement **custom light and dark mode**
* Use Tailwind's `dark` class strategy
* Ensure good contrast and readability in both modes

### Design Style

* Clean and minimal
* Subtle use of spacing and typography
* Avoid clutter

---

## Animations

* Use **CSS-only animations**
* Keep animations **subtle and smooth**

  * hover effects
  * transitions
  * small fades
* Avoid heavy or distracting animations
* Prefer Tailwind utilities or custom keyframes

---

## State Management

* Use **React Hooks only**

  * useState
  * useEffect
  * useMemo / useCallback when needed
* Do NOT use external state management libraries

---

## Data Handling

* Use **local JSON files** for content (e.g., projects, skills)
* Keep data separate from UI
* Create helper functions in `/lib` to fetch or transform data

---

## Next.js Best Practices

* Use **App Router conventions**
* Prefer **Server Components by default**
* Use Client Components only when necessary (`"use client"`)
* Use async/await for data fetching
* Optimize images using Next.js features when applicable

---

## Code Quality

### TypeScript

* Use strict typing
* Avoid `any`
* Define clear interfaces for props and data

### ESLint & Prettier

* Follow consistent formatting
* Write clean, readable code
* Avoid unused variables and imports

---

## Accessibility (a11y)

* Use semantic HTML elements
* Ensure keyboard navigation works
* Add ARIA attributes when necessary
* Provide alt text for images
* Maintain proper heading hierarchy

---

## SEO

* Use proper meta tags
* Use descriptive titles and descriptions
* Structure content semantically
* Optimize performance (LCP, CLS, etc.)

---

## Naming Conventions

* camelCase → variables, functions
* PascalCase → components
* kebab-case → file names (optional, but be consistent)

---

## Performance Guidelines

* Minimize unnecessary re-renders
* Use dynamic imports when beneficial
* Optimize assets (images, fonts)
* Keep bundle size small

---

## What to Avoid

* Over-engineering simple features
* Large monolithic components
* Inline business logic inside UI components
* Excessive dependencies
* Heavy animations

---

## Copilot Behavior Guidance

When generating code, Copilot should:

* Prefer simple and readable solutions
* Break UI into reusable components
* Use Tailwind consistently
* Follow accessibility best practices
* Use TypeScript types properly
* Avoid unnecessary complexity
* Default to server components unless interactivity is needed

---

## Example Sections

The site may include:

* Home / Hero
* Projects
* About
* Contact

Each section should be modular and reusable where possible.

---

## Features
- when implementing features in `_features.md` file, check off the features as they are completed. This will help track progress and ensure all requirements are met.