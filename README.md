# Prompton-Gist

## Introduction

This project contains the prompton-gist application, designed for [brief description and purpose].

## Installation

1. Open the terminal in the project directory.
2. Run the `yarn` command to install dependencies.

## Usage

- For development mode: `yarn dev`
- For production build: `yarn build`
- To start the application in production mode: `yarn start`
- To check code with ESLint: `yarn lint`
- To run tests with Jest: `yarn test`
- To run tests in CI mode with Jest: `yarn test:ci`

## Requirements

- Node.js and npm should be installed.
- Dependencies should be installed. (You can install them with `yarn`)

## Design and Architecture Choices

### Technology Stack

- **Frontend Framework:** [React](https://reactjs.org/)
- **State Management:** [Redux](https://redux.js.org/) with [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Requests:** [Axios](https://axios-http.com/)
- **Mocking API:** [MSW (Mock Service Worker)](https://mswjs.io/)
- **Testing:** [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/)

### Folder Structure

- **src/components:** Reusable React components.
- **src/pages:** Next.js pages.
- **src/redux:** Redux store setup and slices.
- **src/services:** API services.
- **src/styles:** Styles and Tailwind CSS configuration.
- **tests:** Jest and Testing Library tests.

## Assumptions Made During Development

1. **Data Format:** Assumed that the API responses follow a specific format, and error handling is minimal for demonstration purposes.
2. **Authentication:** Assuming the absence of authentication in this version of the project.
3. **UI Design:** Basic styling is applied, and further improvements can be made based on specific design requirements.