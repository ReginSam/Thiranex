# Quick Testing Guide

A quick reference for testing this accessible portfolio website.

## 🚀 Quick Start

### Run Locally
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Then visit: http://localhost:8000
```

## ⌨️ Keyboard Testing (5 minutes)

1. **Tab Navigation**
   - Press `Tab` to move forward through interactive elements
   - Press `Shift+Tab` to move backward
   - Expected: Visit all buttons, links, and form fields in logical order

2. **Menu Toggle**
   - Press `Tab` to reach menu button
   - Press `Enter` or `Space` to toggle menu
   - Expected: Menu opens/closes, button state updates

3. **Navigation Links**
   - Tab to each navigation link
   - Press `Enter` to navigate
   - Expected: Navigate to each page without mouse

4. **Form Fields**
   - Tab through all form fields
   - Use arrow keys in dropdowns
   - Type in text fields
   - Use `Space` for checkboxes
   - Expected: All form functions work via keyboard

5. **Focus Indicators**
   - Look for blue outline around focused elements
   - Outline should have 3px width and 2px offset
   - Expected: Focus always visible with high contrast

## 👁️ Visual Testing (10 minutes)

1. **Color Contrast**
   - Open Chrome DevTools → Lighthouse
   - Run accessibility audit
   - Expected: 0 contrast issues

2. **Link Visibility**
   - All links should be underlined
   - Links should be blue or styled distinctly
   - Expected: Links clearly stand out

3. **Form Labels**
   - All form fields should have visible labels
   - Required fields marked with asterisk (*)
   - Expected: Every input field has clear label

4. **Button Styling**
   - All buttons should be clearly clickable
   - Hover state should show visual change
   - Expected: Buttons look interactive

## 🔍 Screen Reader Testing (10 minutes)

### Using Windows (NVDA)
1. Download: https://www.nvaccess.org/
2. Run NVDA
3. Open website
4. Press arrow keys to read content
5. Tab to interactive elements
6. Expected: All content announced clearly

### Using Mac (VoiceOver)
1. Enable: System Preferences → Accessibility → VoiceOver
2. Press Cmd+F5 to toggle
3. Use arrow keys to navigate
4. Tab for interactive elements
5. Expected: All content accessible

### Key Checks
- Page title announced
- Headings announced with level
- Links announced as links
- Form labels associated with fields
- Error messages announced
- Form success announced

## 📋 Accessibility Audit (15 minutes)

### Using Axe DevTools
1. Install: https://www.deque.com/axe/devtools/
2. Open DevTools → Axe DevTools
3. Click "Scan ALL of my page"
4. Review results
5. Expected: 0 violations, minimal alerts

### Using WAVE
1. Install: https://wave.webaim.org/extension/
2. Open website with WAVE active
3. Check icons and sections
4. Expected: Green checkmarks, minimal alerts

### Using Lighthouse
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Accessibility" only
4. Click "Analyze page load"
5. Expected: Score of 100/100

## 📱 Mobile Testing (5 minutes)

1. **Touch Size**
   - All buttons at least 44x44 pixels
   - Tap all buttons
   - Expected: Easy to tap, no accidental clicks

2. **Responsive Layout**
   - View on phone/tablet
   - All content readable without scrolling
   - Text doesn't break awkwardly
   - Expected: Clean, readable layout

3. **Mobile Menu**
   - Menu button appears on mobile
   - Menu opens/closes smoothly
   - Links in menu work
   - Expected: Navigation works on mobile

## 🎨 Feature Testing Checklist

### Home Page
- [ ] Hero section visible and readable
- [ ] CTA button is clickable
- [ ] Project cards are in grid
- [ ] Skills section organized
- [ ] All links navigable

### About Page
- [ ] Biography displays properly
- [ ] Timeline renders correctly
- [ ] Experience section readable
- [ ] Education listed clearly
- [ ] Technologies organized

### Projects Page
- [ ] Project cards display with images
- [ ] Filter buttons work
- [ ] Filter buttons keyboard accessible
- [ ] Project descriptions visible
- [ ] Links to projects work

### Contact Page
- [ ] All form fields visible
- [ ] Labels associated with fields
- [ ] Validation works
- [ ] Error messages display
- [ ] Form submits successfully

### Accessibility Statement
- [ ] Content readable
- [ ] Links to resources work
- [ ] All sections accessible
- [ ] Navigation works

### Privacy Policy
- [ ] Full content visible
- [ ] Sections clearly organized
- [ ] Links are functional
- [ ] Email link works

## 🔧 Performance Check (5 minutes)

1. **Load Time**
   ```javascript
   // In browser console:
   performance.timing.loadEventEnd - performance.timing.navigationStart
   ```
   Expected: < 3000ms (3 seconds)

2. **Accessibility Audit**
   ```javascript
   // Check in console (if error handler exists):
   checkA11y()
   ```
   Expected: All issues logged with count

## ✨ Best Practices Validation

- [ ] Page title clearly describes page
- [ ] h1 title present on every page
- [ ] Heading hierarchy is correct (no skipped levels)
- [ ] Lists use proper list elements
- [ ] Images have alt text
- [ ] Links are descriptive
- [ ] Forms have associated labels
- [ ] Error messages are specific
- [ ] Navigation is consistent
- [ ] Footer has useful links

## 📊 Test Results Template

```
Date: _____________
Tester: ____________
Browser: __________
Screen Reader: _____

Keyboard Navigation: PASS / FAIL
Screen Reader: PASS / FAIL
Axe Audit: PASS / FAIL
WAVE: PASS / FAIL
Lighthouse: PASS / FAIL
Mobile: PASS / FAIL

Notes:
_________________________
_________________________
_________________________
```

## 🚨 Common Issues to Check For

1. **Missing Focus Indicators**
   - Indicators not visible
   - Indicators hard to see
   - Focus skips elements

2. **Poor Color Contrast**
   - Text hard to read
   - Links not visible
   - Form errors unclear

3. **Missing Labels**
   - Form fields unlabeled
   - Images without alt text
   - Buttons with no text

4. **Keyboard Traps**
   - Can't tab out of element
   - Can't reach certain elements
   - Tab order illogical

5. **Screen Reader Issues**
   - Content not announced
   - Headings not recognized
   - Form labels not associated
   - Buttons not activated via Enter

## 📞 Reporting Issues

If you find an accessibility issue:
1. Note exact location (page, element)
2. Describe what you tried to do
3. Describe what happened
4. Describe what should happen
5. Include browser and assistive tech used

Example:
```
Location: Contact form
Issue: Email field error message not announced by NVDA
Expected: Error message should be read aloud
Actual: Message appears visually but not announced
```

## 🎯 Success Criteria

Portfolio passes if:
- ✅ Axe: 0 violations
- ✅ WAVE: 0 errors, < 3 alerts
- ✅ Lighthouse A11y: 100/100
- ✅ Lighthouse SEO: 100/100
- ✅ Keyboard: All functions accessible
- ✅ Screen Reader: All content readable
- ✅ Mobile: Responsive and usable
- ✅ Contrast: All text readable

---

**Last Updated**: June 8, 2026
