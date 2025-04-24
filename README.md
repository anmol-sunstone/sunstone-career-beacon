
# Sunstone Careers Static Website

This is a static HTML/CSS website for Sunstone Careers.

## Local Development

You can run this static site locally using the included Node.js server:

```bash
# If you have Node.js installed:
node server.js

# Then open your browser to:
# http://localhost:3000
```

Alternatively, you can use any static file server like:

- Python's built-in HTTP server:
  ```
  python -m http.server
  ```

- Live Server extension in VS Code

## Deployment

This is a static website that can be deployed to any static hosting service like:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

No build step is required since this is pure HTML/CSS.

## Structure

- `index.html`: The main HTML file
- `public/styles.css`: The main stylesheet
- `public/static/styles.css`: Additional styles
- `public/lovable-uploads/`: Directory containing all images
