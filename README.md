# Accessible HTML5 Portfolio Website

A comprehensive, fully accessible personal portfolio website built with semantic HTML5, WCAG 2.1 AA compliance, and modern accessibility best practices.

## 🎯 Project Overview

This portfolio website demonstrates professional accessibility standards and semantic web development practices. It's designed to achieve 100/100 scores on Lighthouse Accessibility and SEO audits while showcasing a developer's work, experience, and skills.

## ✨ Key Features

### Semantic HTML5 Structure
- Proper use of semantic elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Semantic form elements with associated labels
- Proper heading hierarchy (h1 → h6)
- Meaningful list structures

### Accessibility (WCAG 2.1 AA Compliant)
- **ARIA Implementation**: Comprehensive use of ARIA labels, roles, and live regions
- **Keyboard Navigation**: Fully keyboard accessible with visible focus indicators
- **Screen Reader Optimized**: Proper semantic markup for screen reader users
- **Color Contrast**: WCAG AA compliant contrast ratios (4.5:1 minimum)
- **Focus Management**: Clear visual focus indicators on all interactive elements
- **Skip Links**: Navigate directly to main content
- **Form Accessibility**: Proper labels, hints, error messages, and validation feedback

### SEO Optimization
- Semantic HTML5 structure
- Optimized meta tags (description, keywords, open graph)
- Proper canonical URLs
- Valid structured data
- Responsive mobile-first design
- Fast page load performance

### Modern Web Standards
- CSS3 with Grid and Flexbox
- Vanilla JavaScript (no dependencies)
- Responsive design (mobile-first)
- Print-friendly styles
- Dark mode support
- High contrast mode support
- Reduced motion support

## 📁 Project Structure

```
portfolio/
├── index.html           # Home page with hero section and featured projects
├── about.html          # About page with biography and experience
├── projects.html       # Projects showcase with filtering
├── contact.html        # Contact form with validation
├── accessibility.html  # Accessibility statement
├── privacy.html        # Privacy policy
├── styles.css          # Main stylesheet
├── script.js           # JavaScript for interactivity and validation
└── README.md           # This file
```

## 🌐 Pages

### Home (`index.html`)
- Hero section with call-to-action
- Featured projects grid
- Core skills showcase
- SEO-optimized metadata

### About (`about.html`)
- Professional biography
- Experience timeline
- Education and certifications
- Technologies and tools
- Skills categorized by type

### Projects (`projects.html`)
- Filterable project gallery
- Project cards with descriptions
- Lighthouse scores and WCAG levels
- Technology tags
- Links to live projects and source code

### Contact (`contact.html`)
- Fully accessible contact form
- Email validation
- Communication preferences
- Privacy consent checkboxes
- Newsletter subscription
- Contact information and social links

### Accessibility Statement (`accessibility.html`)
- Commitment to accessibility
- Features implemented
- WCAG 2.1 conformance details
- Testing and validation info
- Known limitations
- Feedback and support contact

### Privacy Policy (`privacy.html`)
- Data collection practices
- Usage and sharing policies
- Security measures
- User rights and data retention
- Contact information

## 🚀 Getting Started

### Prerequisites
- Any modern web browser
- Optional: Local server (for testing)

### Installation

1. Clone or download the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Open in browser:
```bash
# Option 1: Direct file access
open index.html

# Option 2: Local server (Python 3)
python -m http.server 8000
# Then visit http://localhost:8000

# Option 3: Local server (Node.js)
npx http-server
```

## ♿ Accessibility Features

### Semantic Markup
```html
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    <!-- Navigation items -->
  </nav>
</header>

<main role="main">
  <article>
    <h1 id="main-title">Page Title</h1>
    <!-- Content -->
  </article>
</main>

<footer role="contentinfo">
  <!-- Footer content -->
</footer>
```

### ARIA Labels and Descriptions
```html
<nav aria-label="Main navigation">
<button aria-expanded="false" aria-controls="menu-id">Toggle Menu</button>
<input aria-labelledby="label-id" aria-describedby="hint-id">
<div role="alert">Error message</div>
```

### Keyboard Navigation
- **Tab**: Navigate through interactive elements
- **Shift+Tab**: Navigate backward
- **Enter/Space**: Activate buttons and links
- **Escape**: Close menus
- All form fields are keyboard accessible

### Screen Reader Tested With
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (Mac/iOS)
- TalkBack (Android)

## 🎨 Design Highlights

### Color Palette
- Primary: `#1a73e8` (Google Blue)
- Error: `#dc2626` (Red)
- Success: `#0d9488` (Teal)
- Text: `#202124` (Dark Gray)
- Background: `#ffffff` (White)

### Typography
- Font Family: System font stack for optimal performance
- Base Size: 16px (1rem)
- Line Height: 1.5 (relaxed for readability)
- Heading Hierarchy: Proper h1 through h6 structure

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📋 Form Validation

The contact form includes:
- **Client-side validation** for better UX
- **Error messages** associated with form fields
- **Required field indicators** (visual and ARIA)
- **Email format validation**
- **Phone number validation**
- **Character counter** for message field
- **Form success/error feedback**
- **Keyboard accessible form controls**

## 🔧 Customization

### Update Personal Information
Edit these files to add your information:
- `index.html`, `about.html`, `contact.html`: Update author name and details
- `styles.css`: Modify color scheme in CSS variables
- `script.js`: Update form handler for real submission

### Add Projects
Duplicate the project card in `projects.html`:
```html
<article class="project-card" role="listitem" data-category="web-app">
  <div class="project-content">
    <h3>Project Title</h3>
    <p class="project-date">Completed: Month Year</p>
    <p class="project-description">Project description here...</p>
    <!-- Update project details -->
  </div>
</article>
```

### Update Styles
Modify CSS variables in `styles.css`:
```css
:root {
    --color-primary: #0052cc;
    --color-secondary: #e8f0fe;
    /* Update other variables */
}
```

## ✅ Testing & Validation

### Accessibility Testing
1. **Automated Testing**:
   - Axe DevTools
   - WAVE Browser Extension
   - Lighthouse (Chrome DevTools)

2. **Manual Testing**:
   - Keyboard navigation (Tab, Enter, Escape)
   - Screen reader testing (NVDA, JAWS)
   - Color contrast verification
   - Focus indicator visibility

3. **Browser Testing**:
   - Chrome/Chromium
   - Firefox
   - Safari
   - Edge

### Expected Lighthouse Scores
- Accessibility: 100
- SEO: 100
- Performance: 90+
- Best Practices: 95+

## 🔍 SEO Optimization

- Semantic HTML5 markup
- Optimized meta descriptions
- Open Graph tags for social sharing
- Canonical URLs to prevent duplicate content
- Proper heading structure
- Image alt text descriptions
- Mobile-responsive design
- Fast load times

## 🌙 Accessibility Preferences

Respects user preferences:
- **Dark Mode**: `prefers-color-scheme: dark`
- **High Contrast**: `prefers-contrast: more`
- **Reduced Motion**: `prefers-reduced-motion: reduce`

## 📱 Mobile Responsiveness

- Mobile-first design approach
- Touch-friendly interactive elements (minimum 44x44px)
- Flexible grid layouts
- Readable font sizes on all devices
- Accessible mobile navigation menu

## 🧑‍💻 Development Tips

### Adding JavaScript Enhancements
```javascript
// Keep JavaScript enhancements progressive
// Ensure core functionality works without JS
// Test with JavaScript disabled
```

### Performance Optimization
- Minify CSS and JavaScript for production
- Optimize images (use modern formats like WebP)
- Consider lazy loading for images
- Use efficient CSS selectors

### Browser Support
- Latest versions of Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## 📄 License

This project is provided as an educational example. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

Feedback on accessibility improvements is welcome! Please test and report any issues found.

## 📞 Support & Accessibility Feedback

If you have accessibility feedback or encounter any barriers:
- Email: accessibility@example.com
- Use the Contact form on the website
- Check the Accessibility Statement for more options

## 🔗 Resources & References

### Accessibility Standards
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)

### Testing Tools
- [Axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

### Learning Resources
- [MDN Web Docs - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM](https://webaim.org/)

## 📊 Project Statistics

- **Pages**: 6 (Home, About, Projects, Contact, Accessibility, Privacy)
- **HTML Lines**: ~2,000+
- **CSS Lines**: ~800+
- **JavaScript Lines**: ~400+
- **Accessibility Features**: 50+
- **WCAG Guidelines Met**: 40+

## 🎓 Learning Outcomes

This project demonstrates:
- Semantic HTML5 best practices
- WCAG 2.1 AA compliance implementation
- Accessible form design and validation
- Keyboard navigation strategies
- ARIA labeling and roles
- Responsive web design
- Progressive enhancement
- Performance optimization
- SEO best practices

---

**Built with ❤️ and accessibility in mind**

Last Updated: June 8, 2026
