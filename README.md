# Unity SOP Library

A comprehensive, searchable library of Standard Operating Procedures (SOPs) for streamlined business operations.

## 🚀 Live Site

**Deployed on Vercel:** [https://unity-sop.vercel.app](https://unity-sop.vercel.app)

## 📋 Features

- **Searchable Library** - Find SOPs quickly by name, description, or tags
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **GHL Integration Ready** - Optimized for iframe embedding in GoHighLevel
- **Modern UI** - Clean, professional interface with smooth animations
- **Easy Navigation** - Breadcrumb navigation and back-to-top functionality
- **Print-Friendly** - Optimized layouts for printing SOPs

## 📁 Structure

```
unity-sop/
├── index.html          # Main SOP Library homepage
├── yfl-form.html       # YFL Form SOP
├── styles.css          # Global styles
├── script.js           # Search & interactions
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## 🎯 Current SOPs

### YFL Form SOP
Complete guide for managing Your First Listing form submissions, including:
- Viewing form submissions in Smartlist
- Exporting contacts to CSV/Excel
- Managing opportunities in the sales pipeline
- Video tutorial walkthrough
- QR code for quick form access

## 🔧 Adding New SOPs

1. Create a new HTML file (e.g., `new-sop.html`)
2. Use the same structure as `yfl-form.html`
3. Add a new card in `index.html`:

```html
<a href="new-sop.html" class="sop-card">
    <div class="sop-icon">🎯</div>
    <h3>New SOP Name</h3>
    <p>Description of the SOP...</p>
    <div class="sop-meta">
        <span class="tag">Category</span>
    </div>
    <span class="date">Last updated: Date</span>
</a>
```

4. Commit and push - Vercel will auto-deploy!

## 🌐 GHL Integration

To add to GoHighLevel custom menu:

1. Go to GHL Settings → Custom Menu
2. Add new menu item:
   - **Name:** SOP Library
   - **Icon:** 📋
   - **URL:** https://unity-sop.vercel.app
   - **Open in:** Same window (iframe) or New tab

## 💻 Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. No build process needed - pure HTML/CSS/JS!

## 🚀 Deployment

### Automatic Deployment (Vercel)
- Connected to GitHub repository
- Auto-deploys on every push to `main` branch
- Live in seconds!

### Manual Deployment
1. Push changes to GitHub
2. Vercel automatically detects and deploys
3. Check deployment status at vercel.com

## 📝 License

© 2026 Unity. All rights reserved.

## 🤝 Contributing

To add or update SOPs:
1. Create/edit the HTML file
2. Update `index.html` if adding new SOP
3. Commit with descriptive message
4. Push to GitHub
5. Vercel auto-deploys!

---

**Need help?** Contact your system administrator.
