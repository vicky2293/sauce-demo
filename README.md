# Greenbone Coding Challenge

Playwright Automation for SauceDemo application

- Application URL - https://www.saucedemo.com/

### Pre-requisites

- Node.js
- Visual Studio Code

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
