# Cypress Automation - The Internet Herokuapp

## Features Automated
The following elements/pages from *The Internet* site are automated:

1. **Checkboxes** – Verify check/uncheck functionality.  
2. **Form Authentication** – Login with invalid credentials.  
3. **Dropdown** – Select and validate dropdown option.  
4. **Key Presses** – Capture and validate keypress events.  
5. **JavaScript Alerts** – Handle JS alert and validate alert message.  

---

##  Installation

1. Clone this repository or download the project.  
   ```bash
   git clone https://github.com/hirucd/WebsiteTestHirushi.git
   cd <your-project-folder>
   ```

2. Install dependencies.  
   ```bash
   npm install
   npm init
   npm install cypress  --save --include=dev
   Npm fund

   ```

---

##  Running Tests

- Run Cypress Test Runner (interactive mode):  
  ```bash
  npx cypress open
  ```
  Select **E2E Testing** → choose a browser → run `Website.cy.js`.

- Run tests in **headless mode**:  
  ```bash
  npx cypress run
  ```

---

