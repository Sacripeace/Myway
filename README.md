# MyWay - Web Resume Project

A modern, responsive, and interactive web resume built with **React** and **Vite**, featuring premium animations and a clean design. This project showcases my professional experience, skills, and portfolio projects in a visually engaging format.

## 🚀 Key Features

*   **Premium UI/UX**: Designed with a focus on aesthetics using **TailwindCSS** for styling.
*   **Interactive Components**: Smooth animations and transitions powered by **Framer Motion**.
*   **Dark/Light Mode**: Fully supported theme toggle that respects system preferences and persists user choice via local storage.
*   **Responsive Design**: Optimized for all devices, from mobile phones to desktop screens.
*   **Custom Iconography**: Integration of high-quality SVG icons for various tech stacks (Devicon, Microsoft, LobeHub).
*   **Dynamic Data Rendering**: Experience and Skills sections are data-driven for easy updates.

## 🛠️ Tech Stack

### core
*   **React (v19)**: The library for web and native user interfaces.
*   **Vite**: Next Generation Frontend Tooling for fast development and building.

### Styling & Animation
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Framer Motion**: A production-ready motion library for React.
*   **Lucide React**: Beautiful & consistent icon set.

### Deployment
*   **GitHub**: Version control and code hosting.
*   **GitHub Pages** (Ready for deployment): configured for static site hosting.

## 📂 Project Structure

```
myresume/
├── public/              # Static assets (images, vectors)
├── src/
│   ├── assets/          # Project specific images
│   ├── components/      # Reusable React components
│   │   ├── ui/          # UI-specific components (e.g., ThemeToggle)
│   │   ├── Contact.jsx  # Contact section
│   │   ├── Experience.jsx # Professional experience timeline
│   │   ├── Hero.jsx     # Hero section with introduction
│   │   ├── Projects.jsx # Portfolio highlights
│   │   └── Skills.jsx   # Technical skills grid with icons
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

## 📝 Sections Overview

1.  **Hero Section**: Introduces the candidate with a professional summary and social links.
2.  **Experience**: A detailed timeline of professional history, including roles, companies, and key achievements.
3.  **Skills**: A categorized grid of technical skills (Frontend, Backend, DevOps, etc.) with custom icon integration.
4.  **Projects**: Showcases key projects with direct links to portfolios (PDF/PPT viewers).
5.  **Contact**: Simple footer with contact information.

## 💻 Getting Started

To run this project locally, follow these steps:

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Sacripeace/Myway.git
    cd Myway
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate the static files in the `dist` directory.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
