# Blog Website Frontend

## Overview

This project is the frontend for the SimpleBlog application, a blog platform allowing users to register, log in, create, update, delete, and view blog posts. The frontend is built using React with React Router for navigation, Axios for making HTTP requests, and SCSS for styling. The application also includes a loading spinner for better user experience during data fetching.

## Features

- User registration and authentication (login and logout)
- Create, read, update, and delete blog posts
- Conditional rendering based on authentication status
- Loading spinner during data fetching
- Context API for global state management

## Prerequisites

- Node.js
- A code editor (e.g., Visual Studio Code)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/simpleblog-frontend.git
    cd simpleblog-frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Start the development server:**

    ```bash
    npm start
    ```

    The application will run on `http://localhost:3600` by default.

## Project Structure

- **src/**
  - **components/**: Contains reusable components.
  - **context/**: Contains the AuthContext for global state management.
  - **pages/**: Contains page components for different routes (Home, Register, Login, Write, Single, Layout).
  - **styles/**: Contains global styles (SCSS).
  - **App.js**: Main application component with routing logic.
  - **index.js**: Entry point for the React application.

### Components

- **App.js**: Main component handling routing and conditional rendering based on authentication status.
- **AuthContext.jsx**: Context API setup for managing authentication state.
- **Layout.jsx**: Layout component wrapping around other components to provide a consistent structure.

### Loading Spinner

- The loading spinner is displayed during data fetching to improve user experience. This is simulated with a 2-second delay in the `App.js` component.

### Authentication Context

- **AuthContext**: Provides global state management for user authentication, including login, logout, and storing user data in local storage.

## Deployment

### Frontend Deployment

The frontend is deployed and can be accessed at: [Blog Frontend on Netlify](https://simpleblog-website.netlify.app)

### Backend Repository and Deployment

The backend code for this application can be found at: [Blog Backend Repository](https://github.com/YUSRIN20/Blog-Api-Side.git)

## License

This project is licensed under the MIT License.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are always welcome!

## Running Tests

Currently, there are no automated tests included in this project. You can manually test the application by navigating through different pages and ensuring all functionality works as expected.