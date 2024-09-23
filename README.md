# Selenium-Playwright Test Project

## Overview
This project demonstrates automated testing using Playwright, leveraging the Page Object Model (POM) design pattern.

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run tests using:
   - Playwright: `npx playwright test`

## Project Structure
- `src/pages/`: Contains Page Object Models (POM) for interacting with the application's UI.
- `src/utils/`: Custom utility functions to support testing.
- `src/tests/`: Contains all test files using Playwright.
- `src/config/`: Configuration files for testing setup.

## Assumptions
- The test application is available and accessible for testing.

## Notes
- The project is set up to run tests using Chrome but can be configured to run on other browsers as needed.
- Ensure the necessary environment variables are set for the application URL before running the tests.