#!/bin/bash

# Build static version for GitHub Pages
echo "Building static version for GitHub Pages..."
npx vite build --config vite.config.static.ts

# Create a .nojekyll file to disable Jekyll processing
touch dist/static/.nojekyll

echo "Build complete. Files are in dist/static folder."
echo "Upload these files to your GitHub repository to deploy on GitHub Pages."