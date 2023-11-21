# Statzy Nuxt

Transform your organizational data management with Statzy Nuxt, the web-based solution for a streamlined and interactive experience.


![uses-nuxt](https://img.shields.io/badge/uses-Nuxt.js-04C690.svg)
![npm version](https://img.shields.io/npm/v/nuxt)
![node-current (scoped)](https://img.shields.io/node/v/nuxt@3.8.1)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192.svg)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC.svg)
![License](https://img.shields.io/github/license/ZIT-P22/statzy-nuxt)

### Table of Contents

- [Statzy Nuxt](#statzy-nuxt)
    - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Database Setup](#database-setup)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Server API](#server-api)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

The evolution of StatzyGUI, Statzy Nuxt harnesses Nuxt.js to offer a modern, user-centric data management system. Organize, edit, and view entity information with unparalleled ease. Interact edifyingly with back-end data through a clear and coherent interface.

## Database Setup

To run Statzy Nuxt, a PostgreSQL database is required. Set up the necessary tables and relationships. This application expects the following structure:

- **Tables**: `person`, `server`, `fachverfahren`, and others related to your entities.
- **Relationships**: Establish proper foreign keys between `person` and `server` to enable connections within the application.

Your `.env` file should include the following environment variables:

```
DB_USER=your_username
DB_HOST=localhost_or_your_database_host
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=your_database_port
```

After configuring the `.env` file, verify that the database connection works correctly by running a test query through the application.

## Installation

Ensure Node.js and npm are installed. Follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/ZIT-P22/statzy-nuxt.git
    cd statzy-nuxt
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Production build:

    ```bash
    npm run build
    ```

5. Start production server:

    ```bash
    npm start
    ```

## Usage

- **Login**: Start at **`/login`** with correct credentials.
- **Entity Management**: Navigate to **`/fachverfahren`** or **`/servers/*`** to modify or view related data.
- **Data Operations**: Perform data operations via server APIs provided within the `./server/api/` directory.

For example:
- Listing persons: `GET /api/persons`
- Creating a server: `POST /api/servers/create`
- Fetching server details: `GET /api/servers/:id`

## Features

- User authentication and session management
- Responsive front-end with Nuxt.js and Tailwind CSS
- Database CRUD operations through server API endpoints
- PostgreSQL integration
- Dynamic server-side rendering

## Server API

Key components within the `./server/` directory include:

- `auth.js`: Middleware for user authentication
- `log.js`: Simple request logging middleware
- `db.js`: Setup of PostgreSQL database connection
- `*.js` files in `./api/`: Define endpoints for database operations
- `auswahl_data.js`: Deliver dropdown selection data on server initialization

## Contributing

We encourage community contributions:
1. Fork and clone the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Add commits (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Submit a pull request.

Please ensure your contributions follow the established coding conventions and include comments for clarity.

## License

Statzy Nuxt is open-sourced under the MIT License. See the [LICENSE](https://github.com/ZIT-P22/statzy-nuxt/blob/main/LICENSE) file for more details.