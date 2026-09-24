#!/bin/bash
# =============================================================================
# Setup Script: Deploy Medical Knowledge Search to GitHub Pages
#
# This script helps you set up the GitHub repository and deploy the application.
# Run it after customizing the REPO_NAME and GITHUB_USERNAME variables.
# =============================================================================

set -e

# Customize these variables:
GITHUB_USERNAME="your-github-username"
REPO_NAME="medical-knowledge-search"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Medical Knowledge Search - GitHub Setup${NC}"
echo "=========================================="
echo ""

# Step 1: Initialize git repo (if not already done)
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing git repository...${NC}"
    git init
fi

# Step 2: Check if remote already configured
if ! git remote get-url origin &>/dev/null; then
    echo -e "${YELLOW}Adding GitHub remote...${NC}"
    git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
fi

# Step 3: Install dependencies
echo -e "${YELLOW}Installing npm dependencies...${NC}"
npm install

# Step 4: Build the project locally first to verify it works
echo -e "${YELLOW}Building project for testing...${NC}"
npm run build

# Step 5: First commit
echo -e "${YELLOW}Creating initial commit...${NC}"
git add .
git commit -m "Initial commit: Medical Knowledge Search front-end"

# Step 6: Create repository on GitHub
echo -e "${YELLOW}Creating GitHub repository (requires gh CLI)...${NC}"
if command -v gh &>/dev/null; then
    gh repo create "$GITHUB_USERNAME/$REPO_NAME" --public --source=. --remote=origin --push
    echo -e "${GREEN}✅ Repository created and pushed!${NC}"
else
    echo -e "${YELLOW}GitHub CLI (gh) not found. Please create the repo manually at:${NC}"
    echo "  https://github.com/new"
    echo "  Repository name: $REPO_NAME"
    echo ""
    echo "Then run:"
    echo "  git branch -M main"
    echo "  git push -u origin main"
fi

echo ""
echo -e "${GREEN}✅ Setup complete!${NC}"
echo ""
echo "Next steps:"
echo "  1. Go to https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
echo "  2. Under 'Build and deployment', select 'GitHub Actions'"
echo "  3. Make a commit to main to trigger the first deployment"
echo "  4. Your site will be live at: https://$GITHUB_USERNAME.github.io/$REPO_NAME/"
echo ""
echo -e "${BLUE}Note: Edit vite.config.ts and package.json to change the base URL/repo name.${NC}"
