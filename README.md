# OrangeHRM

This repository contains an automation framework built using [Playwright](https://playwright.dev/), designed for end-to-end testing of the OrangeHRM application. The framework is integrated with GitHub Actions for CI/CD workflows, allowing tests to be executed across multiple environments and browsers.

---

## Framework Structure and Rationale

### Directory Structure
.
├── .github/                 # GitHub Actions workflows
│   └── workflows/
├── node_modules/           # Node dependencies (auto-generated)
├── playwright-report/      # Playwright HTML reports
├── profile/                # Environment-specific files for local execution with the "env.env_name"
│   ├── .env.qa
├── src/                    # Source code for automation framework
│   ├── data-factory/       # Data creation logic used in the test classes
│   ├── data-handling/      # Raw file reading & parsing
│   ├── enum/               # Shared enums
│   ├── fixtures/           # Shared test fixtures
│   ├── locators/           # Page element locators
│   ├── objects/            # Data objects and models
│   ├── pages/              # Page Object Model implementations
│   ├── test-data/          # Static test data
│   │   └── apiData/
│   └── utilities/          # Reusable utility functions
├── test-results/           # Playwright JSON/JUnit results
├── tests/                  # Test cases organized by domain
│   ├── API/                # API test cases
│   ├── UI/                 # UI test cases
├── playwright.config.ts    # Playwright global configuration
├── package.json            # NPM scripts and dependencies
├── README.md               # Project documentation


### Key Features
1. **Playwright Integration**:
   - Supports testing across multiple browsers: Chromium, Firefox, and WebKit.
   - Configurable for different environments: QA, UAT, and Staging.

2. **Environment-Specific Configurations**:
   - Each environment has its own configuration file (`qa.config.ts`, `uat.config.ts`, etc.) to manage environment-specific settings like `BASE_URL`.

3. **GitHub Actions Workflow**:
   - Automates test execution with the `playwright.yml` workflow.
   - Allows manual triggering with `workflow_dispatch` inputs for environment and browser selection.

4. **Tag-Based Test Execution**:
   - Tests can be filtered using tags (e.g., `@qa`, `@uat`, `@staging`) to run environment-specific scenarios.

5. **Reporting**:
   - Generates detailed test reports in the `playwright-report/` directory.
   - Reports are uploaded as artifacts in GitHub Actions for easy access.

---

## Steps to Execute the Demo Scripts

### Prerequisites
1. **Install Node.js**:
   - Ensure Node.js (v18 or higher) is installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).

2. **Install Dependencies**:
   - Run the following command to install all required dependencies:
     ```bash
     npm install
     ```

3. **Install Playwright Browsers**:
   - Install the necessary browsers for Playwright:
     ```bash
     npx playwright install --with-deps
     ```

4. **Set Environment Variables**:
   - Ensure the following environment variables are set for your environment in the /profile/.env.<env_name> (for local execution) OR GitHub Environment Variable Configuration (for cidcd execution):
     - `BASE_URL`
     - `ADMIN_USERNAME`
     - `ADMIN_PASSWORD`

---

### Running Tests Locally
1. **Run All Tests**:
   - To execute all tests across all browsers:
     ```bash
     npx playwright test
     ```

2. **Run Tests for a Specific Browser**:
   - Example for Chromium:
     ```bash
     npx playwright test --project=chromium
     ```

3. **Run Tests for a Specific Environment**:
   - Use the `--grep` flag to filter tests by environment tag:
     ```bash
     npx playwright test --grep @qa
     ```

4. **Generate Reports**:
   - After test execution, reports will be available in the `playwright-report/` directory. Open the report with:
     ```bash
     npx playwright show-report
     ```

---

### Running Tests via GitHub Actions
1. **Trigger Workflow**:
   - Navigate to the **Actions** tab in your GitHub repository.
   - Select the `Playwright Tests` workflow and click **Run workflow**.

2. **Provide Inputs**:
   - Select the desired `environment` (e.g., `qa`, `uat`, `staging`).
   - Select the desired `browser` (e.g., `all`, `chromium`, `firefox`, `webkit`).

3. **View Results**:
   - Test results and reports will be available in the **Actions** tab under the workflow run details.
   - Download the `playwright-report` artifact for detailed test results.

---

## Troubleshooting
1. **Environment Variables Not Set**:
   - Ensure the required secrets (`BASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`) are configured in the GitHub repository under **Settings > Environments**.

2. **Dependencies Not Installed**:
   - Run `npm install` to ensure all dependencies are installed.

3. **Playwright Browsers Not Installed**:
   - Run `npx playwright install --with-deps` to install the required browsers.

4. **Invalid Inputs in GitHub Actions**:
   - Ensure valid `environment` and `browser` options are selected when triggering the workflow.

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.