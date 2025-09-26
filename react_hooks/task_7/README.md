# Task 7: Create Custom useLogin Hook

## Overview
Create a custom React hook for managing login form state and validation logic.

## Requirements
- Create `src/hooks/useLogin.jsx` custom hook
- Hook should accept `onLogin` callback parameter
- Manage form state with React hooks
- Handle email validation (proper email format)
- Handle password validation (minimum 8 characters)
- Manage form submission logic
- Return object with state values and handler functions:
  - `email`, `password`, `enableSubmit`
  - `handleChangeEmail`, `handleChangePassword`, `handleLoginSubmit`
- Refactor Login component to use the custom hook
- Submit button should only be enabled with valid inputs
- All existing tests must pass

## Files Modified
- `src/hooks/useLogin.jsx` - Created custom hook
- `src/Login/Login.jsx` - Refactored to use custom hook
- `src/Login/Login.spec.js` - Tests updated for hook usage
