# Unity SOP Library

A comprehensive, searchable library of Standard Operating Procedures (SOPs) for streamlined business operations.

## 🚀 Live Site

**Deployed on Vercel:** [https://unity-sop.vercel.app](https://unity-sop.vercel.app)

## 📋 Features

### Phase 1: UX Foundations
- **Searchable Library** - Find SOPs by name, description, tags, or role
- **Category & Role Filters** - Filter by Forms, Contacts, Pipeline, Admin, ISA, Agent
- **Task-Based Titles** - SOPs named as "How to..." for natural search
- **Rich Card Metadata** - Shows who, when, time, and difficulty before clicking
- **Start Here & Most Used** - Guided entry points for new users
- **Search Hints** - Suggested search terms to help users find content

### Phase 2: Support-First Flow
- **Quick Actions** - One-click access to common tasks
- **Related SOPs** - Discover connected workflows easily
- **Full SOP Template** - Purpose, Tools, Steps, Common Mistakes, Expected Outcome
- **Optimized Above-Fold** - Reduced header height, content-first layout

### Phase 3: Governance & Onboarding
- **SOP Metadata** - Owner, Version, Status, Approved By, Last Updated
- **Feedback System** - "Was this helpful?" with improvement requests
- **Role-Based Onboarding** - Guided paths for Admin, ISA, and Agent roles
- **Status Badges** - Active, Draft, Under Review indicators

### Technical
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

### New Member Form SOP
Complete guide for managing new member registrations, including:
- Viewing new member submissions in Smartlist
- Exporting member data to CSV/Excel
- Managing members through onboarding pipeline
- QR code for quick registration access
- Recruitment and onboarding workflows

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
