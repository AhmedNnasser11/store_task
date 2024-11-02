
# Store Task

This project is a Next.js application, designed as an online store with structured components, pages, and configurations.

## Live Demo

Check out the live demo here: [Live Demo](https://store-task-ten.vercel.app/home)

## Repository

You can find the source code at the following GitHub repository: [GitHub Repository](https://github.com/AhmedNnasser11/store_task.git)

## Prerequisites

- Node.js (>= 12.x) and npm should be installed on your system.

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AhmedNnasser11/store_task.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd store_task
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Run the application**:

   To start the development server, use:

   ```bash
   npm run dev
   ```

   The application will run locally on [http://localhost:3000](http://localhost:3000).

5. **Build the application** (optional):

   To create an optimized production build, use:

   ```bash
   npm run build
   ```

   Then, to serve the production build, use:

   ```bash
   npm start
   ```

## Folder Structure

Here's an overview of the key directories and files in this project:

### `src`
The main source folder that contains all code for the application.

- **`app`**: Contains all the Next.js pages and page-related files.
  - **`home`**: Houses the main files for the home page, including:
    - `error.tsx`: Displays errors specific to the home route.
    - `layout.tsx`: Defines the layout for the home page.
    - `loading.tsx`: A loading component for the home page.
    - `not-found.tsx`: Custom 404 page for the home route.
    - `page.tsx`: The main file for rendering content on the home page.

- **`components`**: Contains reusable UI components.
  - **`cors`**: Holds core components for common layouts and design, including:
    - `Footer.tsx`: The footer component of the application.
    - `Header.tsx`: The main header of the application.
    - `HeaderTitle.tsx`: A component for rendering titles in headers.

  - **`shared`**: Houses shared components across pages, such as:
    - `CustomImage.tsx`: Component for handling images.
    - `next-progress.tsx`: Component for loading progress indicators.
    - `ProductCard.tsx`: Component for displaying individual product cards.

- **`config`**: Contains configuration files, such as:
  - `endPoints.ts`: Defines API endpoint routes used across the app.
  - `routes.ts`: Stores route paths as constants for easy access and modification.

- **`context`**: Holds context providers for managing global state.

- **`services`**: Contains files related to services, such as API calls and business logic.

- **`types`**: Holds TypeScript types and interfaces for strict type definitions.

- **`utils`**: Contains utility functions used throughout the project.

## Configuration and Routing

The routing in this application is defined in `routes.ts`, where paths for major sections are structured as constants:

```typescript
export const routes = {
  home: "/home",
  product: (id: number | string) => `/home/${id}`,
  cart: "/cart",
};
```

This helps maintain clean and consistent routes, making it easier to reference them throughout the app.
