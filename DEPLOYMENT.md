# Deployment Guide - Labakery Website

This guide explains how to deploy your Labakery website to various hosting platforms.

## 🚀 Quick Start

The website is built with vanilla HTML, CSS, and JavaScript, making it easy to deploy to any static hosting service.

## 📁 Files to Deploy

Make sure to include all these files and folders:
```
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
├── package.json (optional)
└── README.md (optional)
```

## 🌐 Hosting Options

### 1. GitHub Pages (Free)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/labakery-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)"
   - Click Save

3. **Your site will be available at:**
   `https://yourusername.github.io/labakery-website/`

### 2. Netlify (Free)

1. **Drag and Drop Method:**
   - Go to [netlify.com](https://netlify.com)
   - Drag your project folder to the deploy area
   - Get instant deployment

2. **Git Integration:**
   - Connect your GitHub repository
   - Auto-deploy on every push
   - Custom domain support

### 3. Vercel (Free)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts for configuration**

### 4. Firebase Hosting (Free)

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```

3. **Deploy:**
   ```bash
   firebase deploy
   ```

### 5. Surge.sh (Free)

1. **Install Surge:**
   ```bash
   npm install -g surge
   ```

2. **Deploy:**
   ```bash
   surge
   ```

## 🔧 Pre-Deployment Checklist

### 1. Replace Placeholder Content
- [ ] Update business name, address, and contact info
- [ ] Replace all placeholder images with actual photos
- [ ] Update menu items and pricing
- [ ] Customize colors to match your brand

### 2. SEO Optimization
- [ ] Update `<title>` tag
- [ ] Add meta description
- [ ] Add Open Graph tags
- [ ] Create favicon

### 3. Performance Optimization
- [ ] Compress images (use tools like TinyPNG)
- [ ] Minify CSS and JavaScript (if needed)
- [ ] Test loading speed

### 4. Testing
- [ ] Test on different devices and browsers
- [ ] Validate HTML and CSS
- [ ] Check all links and forms
- [ ] Test mobile responsiveness

## 📱 Mobile Optimization

The website is already optimized for mobile, but consider:
- Testing on real devices
- Checking touch targets are large enough
- Ensuring text is readable without zooming

## 🔍 SEO Enhancements

Add these to your `<head>` section in `index.html`:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Labakery - Fresh artisan breads, pastries, and baked goods. Visit our bakery for the finest quality ingredients and traditional baking methods.">
<meta name="keywords" content="bakery, fresh bread, pastries, artisan, baked goods, local bakery">
<meta name="author" content="Labakery">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com/">
<meta property="og:title" content="Labakery - Artisan Bakery & Fresh Food">
<meta property="og:description" content="Fresh artisan breads, pastries, and baked goods made with love and the finest ingredients.">
<meta property="og:image" content="https://yourdomain.com/assets/images/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://yourdomain.com/">
<meta property="twitter:title" content="Labakery - Artisan Bakery & Fresh Food">
<meta property="twitter:description" content="Fresh artisan breads, pastries, and baked goods made with love and the finest ingredients.">
<meta property="twitter:image" content="https://yourdomain.com/assets/images/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

## 🎨 Customization for Your Figma Design

To match your specific Figma design:

1. **Colors:** Update CSS variables in `styles/main.css`
2. **Typography:** Change Google Fonts imports and CSS font families
3. **Layout:** Adjust spacing, grid layouts, and component structures
4. **Images:** Replace Unsplash URLs with your actual images
5. **Content:** Update all text content to match your design

## 📊 Analytics (Optional)

Add Google Analytics to track visitors:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛠️ Maintenance

### Regular Updates
- Keep content fresh
- Update menu items and pricing
- Add new gallery images
- Check for broken links

### Performance Monitoring
- Monitor loading speeds
- Check mobile performance
- Update images if needed

## 📞 Support

For deployment issues or questions:
- Check the hosting platform's documentation
- Use their support channels
- Consider hiring a web developer for advanced customizations

---

**Happy Deploying! 🚀**


