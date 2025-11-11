# Personal Portfolio - Angly Khan Surya

This is a personal portfolio website built to showcase my projects, skills, and experience as an AI Engineer and UI/UX Designer. The project is built with a modern tech stack and features a data-centric architecture, making content updates easy and efficient.

## Key Technologies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server for modern web projects.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS.

## Running the Project Locally

To run this project on your local machine, follow these steps:

1.  **Set up Node.js**:
    This project uses a specific version of Node.js. If you have `nvm` (Node Version Manager) installed, simply run the following command in the project directory to use the correct version specified in the `.nvmrc` file:
    ```bash
    nvm use
    ```

2.  **Install Dependencies**:
    Install all the necessary packages.
    ```bash
    npm install
    ```

3.  **Run the Development Server**:
    This will start the Vite development server, usually on `http://localhost:5173`.
    ```bash
    npm run dev
    ```

## How to Manage Content

One of the key features of this portfolio is that all content is managed centrally in a single file, separating the data from the presentation.

To update your personal information, projects, skills, or other data, simply edit the following file:

**`src/data/portfolio-data.ts`**

You can change your name, bio, social links, add new projects, list your skills, and more, all without touching the React component code.