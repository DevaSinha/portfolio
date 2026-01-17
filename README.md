## Tech Stack

-   **Frontend**: React (v19), TypeScript
-   **Styling**: Tailwind CSS (v4)
-   **Animations**: Framer Motion
-   **Icons**: React Icons
-   **Build Tool**: Vite

## Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/DevaSinha/portfolio.git
    cd portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

### Development Server

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

Build the project for production deployment:

```bash
npm run build
```

The output will be in the `dist` directory.

### Preview Production Build

Preview the built application locally:

```bash
npm run preview
```

## Project Structure

-   `src/components`: Reusable UI components (Hero, Navbar, GlassCard, etc.)
-   `src/components/common`: Shared utility components (MobileCardStack, SectionHeader)
-   `src/utils`: Constants and text content.
-   `src/App.tsx`: Main application entry point managing sections and navigation.

## License

This project is licensed under the MIT License.
