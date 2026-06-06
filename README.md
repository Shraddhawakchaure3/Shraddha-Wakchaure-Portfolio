# 💻 Shraddha Wakchaure — Professional Portfolio

A premium, interactive, and responsive portfolio website designed for recruiters and tech leads. The project features a modern, dark-themed SaaS landing page aesthetic with smooth animations, custom React hooks, glassmorphism UI components, and secure, direct-to-inbox email submissions.

🔗 **Live Link:** [shraddha-wakchaure-portfolio.vercel.app](https://shraddha-wakchaure-portfolio.vercel.app/)

---

## 📁 Project Structure

Here is an overview of the directory structure:

```text
Shraddha_portfolio/
├── public/
│   ├── favicon.svg                               # Site favicon
│   └── Shraddha_Wakchaure_Software_Engineer_Resume.pdf  # Resume PDF
├── src/
│   ├── components/
│   │   ├── ui/                                   # Reusable atomic UI elements
│   │   │   ├── AnimatedText.jsx                  # Smooth text animations
│   │   │   ├── Badge.jsx                         # Standard and custom labels
│   │   │   ├── GlassCard.jsx                     # Glassmorphic hoverable card
│   │   │   └── MagneticButton.jsx                # Magnet-effect physics button
│   │   │   └── SectionHeading.jsx                # Consistent headers for sections
│   │   ├── About.jsx                             # Bio, Education, and animated Stats
│   │   ├── Achievements.jsx                      # Certifications and Hackathons
│   │   ├── Contact.jsx                           # Contact form with Web3Forms & details
│   │   ├── Experience.jsx                        # Custom interactive career timeline
│   │   ├── Footer.jsx                            # Social footer links and copyright
│   │   ├── Hero.jsx                              # Dynamic introduction & role typewriter
│   │   ├── Navbar.jsx                            # Responsive header with scroll-tracking
│   │   ├── Projects.jsx                          # Grid of projects with source/demo links
│   │   └── Skills.jsx                            # Dynamic skills organized by categories
│   ├── data/
│   │   └── portfolio.js                          # Centralized data store (Single Source of Truth)
│   ├── hooks/
│   │   ├── useActiveSection.js                   # IntersectionObserver hook for nav tracking
│   │   └── useTypewriter.js                      # Custom typing animation hook
│   ├── App.jsx                                   # App structure
│   ├── index.css                                 # Tailored Tailwind & custom utilities
│   └── main.jsx                                  # React DOM entrypoint
├── package.json                                  # Scripts and dependencies
├── tailwind.config.js                            # Custom Tailwind colors, layout & design tokens
├── vercel.json                                   # SPA deployment rewrite configuration
└── vite.config.js                                # Vite compilation configurations
```

---

## ✨ Features & Architecture

* **Centralized Data Model**: All projects, roles, experiences, credentials, contact info, and URLs are stored in `src/data/portfolio.js` for instant updates.
* **Premium Hover Effects**: Interactive components (Experience, Education, Skills, and Contact cards) feature unified indigo glows and smooth transitions.
* **Web3Forms Integration**: Secure, serverless form processing. Contact requests are routed directly to your email without maintaining a backend server.
* **Responsive Timeline**: Alternating desktop timeline that collapses into a left-aligned mobile-friendly timeline on smaller screens.
* **Intersection Observer Navigation**: The header updates the active tab automatically as the user scrolls through different sections.
* **Vite-Powered React 18 SPA**: Offers sub-second page loads and fast hot module replacement (HMR).

---

## 🚀 Local Development

Follow these steps to run the application locally on your machine:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ is recommended).

### 1. Clone & Install Dependencies
Navigate to your project directory and install the required modules:
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and add your Web3Forms access key (optional for local testing, required for contact form to send emails):
```env
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```
> **Note**: You can get a free access key instantly at [Web3Forms](https://web3forms.com/) by entering your email (no sign-up required).

### 3. Run Dev Server
Start the development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
To build a highly optimized distribution bundle:
```bash
npm run build
```
The built assets will be generated in the `dist/` directory.

### 5. Preview Build Locally
To test the production build locally:
```bash
npm run preview
```

---

## ☁️ Vercel Deployment

The project is fully configured for hosting on Vercel as a Single Page Application (SPA).

### Step-by-Step Deployment

#### Method 1: Vercel Dashboard (Recommended)
1. Push your portfolio repository to **GitHub**.
2. Go to the [Vercel Dashboard](https://vercel.com/) and click **Add New** > **Project**.
3. Import your repository.
4. **Environment Variables**: Expand the environment variables section and add:
   * **Key**: `VITE_WEB3FORMS_KEY`
   * **Value**: *Your Web3Forms access key*
5. Click **Deploy**. Vercel will automatically detect Vite, install dependencies, compile the application, and publish it.

#### Method 2: Vercel CLI
If you prefer deploying from the terminal:
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Log in and deploy:
   ```bash
   vercel
   ```
3. Set your environment variables when prompted or add them via your project settings in the Vercel dashboard.
4. To deploy to production:
   ```bash
   vercel --prod
   ```

### Vercel SPA Routing Configuration
This project includes a `vercel.json` file in the root directory. This contains:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
This configuration is critical for SPAs. It prevents `404` errors when visitors refresh the page or navigate directly to specific section-hashes.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
