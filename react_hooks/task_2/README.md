# Task 2: Convert Login Component

## Overview
Convert the Login component from a class component to a functional component using React hooks.

## Requirements
- Convert Login class component to functional component
- Initialize state using React hooks:
  - `enableSubmit` state with initial value `false`
  - `formData` state with initial value `{ email: '', password: '' }`
- Update class methods to functions with proper state management
- Preserve existing validation logic for email and password
- Keep WithLogging HOC wrapper
- No console errors or warnings
- Code should have no lint errors

## Files Modified
- `src/Login/Login.jsx` - Converted to functional component with useState
- `src/Login/Login.spec.js` - Tests updated for functional component
