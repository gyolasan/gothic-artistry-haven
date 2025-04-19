#!/bin/bash

set -e  # Exit on any error

# Step 1: Copy current build to temp location outside the repo
cp -r dist ../dist-temp

# Step 2: Switch to gh-pages branch
git checkout gh-pages

# Step 3: Remove all files except CNAME, .gitignore, and .nojekyll (skip .git too)
find . -maxdepth 1 ! -name 'CNAME' ! -name '.gitignore' ! -name '.nojekyll' ! -name '.git' -exec rm -rf {} +

# Step 4: Copy in the fresh build files
cp -r ../dist-temp/* .

# Step 5: Ensure .nojekyll exists
touch .nojekyll

# Step 6: Set custom domain
echo "www.luhjusto.art" > CNAME

# Step 7: Add and commit all changes
git add .
git commit -m "Final clean deploy with correct relative asset paths"

# Step 8: Push to GitHub
git push origin gh-pages --force

# Step 9: Delete the temp directory
rm -rf ../dist-temp

# Step 10: Switch back to main
git checkout main
