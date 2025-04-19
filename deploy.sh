#!/bin/bash

set -e  # Exit on any error

# Step 1: Copy current build to temp location outside the repo
cp -r dist ../dist-temp

# Step 2: Switch to gh-pages branch
git checkout gh-pages

# Step 3: Clean out all tracked files and folders except key ones
find . -mindepth 1 -maxdepth 1 ! -name 'CNAME' ! -name '.gitignore' ! -name '.nojekyll' ! -name '.git' -exec rm -rf {} +

# Step 4: Copy in the fresh build files
cp -r ../dist-temp/* .

# Step 5: Ensure .nojekyll exists
touch .nojekyll

# Step 6: Set custom domain
echo "www.luhjusto.art" > CNAME

# Step 7: Stage and commit
git add .
git commit -m "Clean deploy with updated build files"

# Step 8: Push to GitHub
git push origin gh-pages --force

# Step 9: Clean up temp
rm -rf ../dist-temp

# Step 10: Return to previous branch (instead of hardcoding 'main')
PREV_BRANCH=$(git reflog | awk '/checkout/ && NR==1 {print $NF}')
git checkout "$PREV_BRANCH"
