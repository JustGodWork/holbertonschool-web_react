# Task 5: Modernize App Component

## Overview
Convert App component from class to functional component and modernize state management with hooks.

## Requirements
- Convert App from class to functional component
- Migrate state management to useState hooks:
  - `displayDrawer` with initial value `true`
  - `user` with initial value from context user object
  - `notifications` with initial value from notificationsList
  - `courses` with initial value from coursesList
- Remove handleKeydown function and associated lifecycle methods
- Update handler functions to follow functional component patterns
- Follow React's immutability principles
- Memoize callback functions for stable references
- All application features must work as expected
- All unit tests must pass

## Files Modified
- `src/App/App.jsx` - Converted to functional component with hooks
- `src/App/App.spec.js` - Tests updated and keyboard shortcut test removed
