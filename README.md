# Greenbone Coding Challenge

Playwright Automation for SauceDemo application

- Application URL - https://www.saucedemo.com/

### Pre-requisites

- Node.js
- Visual Studio Code

## Project Structure

This framework follows the POM (Page Object Model) design pattern with reusable fixtures and utilities.

```
|-- .github/workflows/       # CI workflow
|-- src/
|  |-- fixtures/             # Shared fixtures
|  |-- pageObjects/          # Page Object classes
|  |-- test/                 # Test cases
|  |-- utils/                # Helper data
|-- docker-compose.yml       # Docker compose
|-- dockerfile               # Docker image build
|-- package.json             # Package manager
|-- playwright.config.ts     # Playwright configuration
|-- README.md                # Project documentation
```

## Installation

- Source code is available at - [GitHub - sauce-demo](https://github.com/vicky2293/sauce-demo)
- To clone the project locally - "git clone https://github.com/vicky2293/sauce-demo.git"
- After cloning the project, run command to install the dependencies
  - `npm install`
- Install the playwright browsers using command
  - `npx playwright install`

## Test Execution

- To run all the tests against all the configured browsers
  - `npm run test`
- To run tests in UI mode
  - `npm run test-ui`

Tests can be executed against different browsers, to run in specific browser

- For Chrome - `npm run test-chrome`
- For Firefox - `npm run test-firefox`
- For Webkit - `npm run test-webkit`

## Test Report

- For Live report - Please refer the active terminal window
- To generate html report after test execution, run
  - `npm run report`
- HTML report is stored as artifact after each test run in Github Actions. - [Artifacts](https://github.com/vicky2293/sauce-demo/actions/runs/26713841917)

## Continuous Integration - Github Actions

- This project is integrated with Github actions.
- Github actions workflow can be found [here](https://github.com/vicky2293/sauce-demo/blob/main/.github/workflows/playwright.yml)

## Docker Support

- This project can be executed locally using docker.
- Prerequisite:
  - Docker Desktop
- To run the test locally using docker
  - Build the project using `npm run docker-build`
  - Run the tests using `npm run docker-run`

## SonarQube

- This project is integrated with Sonarcloud for quality check
- Sonarcloud: [Sonarcloud Report](https://sonarcloud.io/summary/overall?id=vicky2293_sauce-demo&branch=main)

## Contribution Guidelines

Please follow the practices when contributing to this project.

- Make sure to include `--save-dev` while installing new dependencies.
- Always follow Page Object Model(POM).
- Incase a new test needs extra new page, create a seperate page object.
- Make sure to include the new page class in the `fixture.ts`.
- Always maintain the constants separately, this will ease the maintenance.
- Make sure the locators are stable by checking them in pick locator tool.
- Always store sensitive details in the `.env` file and add it to the `.gitignore` file.(I've included it just for demo purpose).
- Always try to reuse the methods from the BasePage.
- Always run `npm run format` before every commit.
- Make sure the test executes perfectly on all expected browser before commiting and raising Pull Request.
- Always make sure there are no code smells and maintain Sonar quality standards.
- Any important note must be added to README.md.
- Sometimes it will be difficult to reproduce the ci failure locally. In that case try to execute the tests in docker.

### For Github
- Now the code is in `main` branch.
- Create a new branch with your changes.
- Commit and push the changes.
- Create a new Pull Request for review.

# FUTURE PLANS

- Playwright-BDD (Based on project need)
- Allure Reports
- Visual testing
- Lighthouse check as part of CI pipeline
