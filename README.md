# Albinayat Construction Company Website

A modern, professional, and fully responsive website designed for **Albinayat Typical Contracting LLC**, a leading construction contracting firm. This project features a sophisticated user interface, bilingual support (English & Arabic), and a dynamic layout structure suitable for corporate construction portfolios.

## 🚀 Features

-   **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices using advanced CSS Grid and Flexbox layouts.
-   **Bilingual Support**: Built-in language switcher for **English (LTR)** and **Arabic (RTL)** with instant content translation.
-   **Modern UI/UX**:
    -   Professional color palette (Green, Gold, White) aimed at corporate trust.
    -   Interactive hover effects, card animations, and smooth transitions.
    -   Clean typography and semantic HTML structure.
-   **Dynamic Sections**:
    -   **Services Grid**: Auto-centering 4-column layout with equal-height cards.
    -   **Projects Portfolio**: Masonry-style or grid layouts showcasing work.
    -   **News & Media**: dedicated section for company updates and press coverage.
    -   **Partner & Client Logos**: Responsive carousel-style grid.
-   **Vendor & Career Portals**: Dedicated pages for vendor registration and job applications.

## 📂 Project Structure

```text
/albinayt
├── index.html          # Homepage
├── about.html          # Company Overview, Vision, Mission
├── services.html       # Detailed Service Offerings
├── projects.html       # Project Portfolio
├── news.html           # News & Press Releases
├── offices.html        # Branch Locations & Interactive Map
├── contact.html        # Contact Info & Form
├── vendors.html        # Vendor Registration Page
├── career.html         # Job Openings & Application
├── /css
│   ├── style.css       # Main stylesheet
│   ├── variables.css   # Global colors & design tokens
│   ├── rtl.css         # Arabic specific styles
│   └── responsive.css  # Mobile/Tablet breakpoints
├── /js
│   ├── main.js         # General interaction logic (Menu, Scroll)
│   └── language.js     # Translation dictionary & Language switcher logic
└── /images             # Assets (Logos, Project photos, Icons)
```

## 🛠️ Technology Stack

-   **HTML5**: Semantic markup.
-   **CSS3**: Native CSS Variables, Flexbox, CSS Grid. No external CSS frameworks (Tailwind/Bootstrap) required.
-   **JavaScript (ES6+)**: Vanilla JS for DOM manipulation and localization.
-   **Font Awesome**: Utilized for vector icons throughout the site.

## 🔧 Installation & Usage

Since this is a static website, no complex build process or server installation is required.

1.  **Clone or Download** the repository.
2.  **Open** `index.html` in any modern web browser (Chrome, Edge, Firefox).
3.  **Deploy** to any static hosting service like **Netlify**, **Vercel**, or **GitHub Pages**.

## 🎨 Customization Guide

### Changing Colors
Edit `css/variables.css` to update the global color theme:
```css
:root {
  --primary-green: #2fa041;
  --secondary-green: #1d702a;
  --accent-gold: #f4b400;
  /* ... */
}
```

### Managing Translations
Edit `js/language.js` to add or modify text for English and Arabic. Keys are mapped via `data-key` attributes in HTML.

### Adding News/Projects
1.  Duplicate an existing `.project-card` or `.news-card` in the HTML.
2.  Update the image source and text content.
3.  Ensure you add new translation keys if supporting both languages.

## 📱 Responsive Behaviors

-   **Desktop**: 4-column Services, 3-column Projects, 3-column News.
-   **Tablet**: layouts adapt to 2 or 3 columns with centered alignment for orphan items.
-   **Mobile**: stacked vertical layouts for maximum readability.

## 📄 License

This project is proprietary to **Albinayat Typical Contracting LLC**. All rights reserved.
