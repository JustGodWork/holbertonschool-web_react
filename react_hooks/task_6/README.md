# Task 6: Add Data Fetching with useEffect and Axios

## Overview
Implement dynamic data fetching using useEffect and Axios instead of hardcoded data.

## Requirements
- Install Axios for HTTP requests
- Create JSON files in public folder:
  - `notifications.json` with notifications data
  - `courses.json` with courses data
- Remove hardcoded data arrays from components
- Use useEffect to fetch data:
  - Notifications data on component mount
  - Courses data when user state changes
- Handle errors with try/catch blocks
- Use jest-mock-axios for testing HTTP requests
- All current features must continue to work
- All unit tests must pass
- No browser errors or warnings

## Files Modified
- `src/App/App.jsx` - Added data fetching with useEffect and Axios
- `public/notifications.json` - Created notifications data file
- `public/courses.json` - Created courses data file
- `src/App/App.spec.js` - Added axios mocking for tests
