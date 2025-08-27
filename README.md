# Cypress Automation - The Internet Herokuapp

## Features Automated
The following elements/pages from *The Internet* site are automated:

1. **Checkboxes** – Verify check/uncheck functionality.  
2. **Form Authentication** – Login with invalid credentials.  
3. **Dropdown** – Select and validate dropdown option.  
4. **Key Presses** – Capture and validate keypress events.  
5. **JavaScript Alerts** – Handle JS alert and validate alert message.  

---

##  Project Structure

```
cypress/
  ├── e2e/
  │   └── the_internet.cy.js     # Main test file
  └── support/
      └── locators.js            # Page locators for each element
cypress.config.js                 # Cypress configuration
package.json                      # Dependencies
```

---

##  Installation

1. Clone this repository or download the project.  
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

2. Install dependencies.  
   ```bash
   npm install
   ```

---

##  Running Tests

- Run Cypress Test Runner (interactive mode):  
  ```bash
  npx cypress open
  ```
  Select **E2E Testing** → choose a browser → run `the_internet.cy.js`.

- Run tests in **headless mode**:  
  ```bash
  npx cypress run
  ```

---

##  Dependencies

- [Cypress](https://docs.cypress.io/)  

All required dependencies are included in `package.json`.

---

## Notes

- Base URL for tests should be set in `cypress.config.js`, for example:
  ```javascript
  const { defineConfig } = require("cypress");

  module.exports = defineConfig({
    e2e: {
      baseUrl: "https://the-internet.herokuapp.com"
    }
  });
  ```
- Locators for all pages are maintained in `support/locators.js` for easy maintainability.  
- Tests are designed to be **independent** and use Cypress best practices.

---
