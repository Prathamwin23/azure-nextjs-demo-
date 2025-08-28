#!/bin/bash

# Azure DevOps Demo - Deployment Script
# This script demonstrates the deployment process

echo "🚀 Starting Azure DevOps Demo Deployment"
echo "========================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Step 1: Install dependencies
echo "📦 Step 1: Installing dependencies..."
npm install

# Step 2: Run linting
echo "🔍 Step 2: Running code quality checks..."
npm run lint

# Step 3: Build the application
echo "🏗️ Step 3: Building the application..."
npm run build

# Step 4: Run tests (if available)
echo "🧪 Step 4: Running tests..."
npm test --if-present

# Step 5: Health check
echo "💚 Step 5: Running health check..."
if curl -f http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "✅ Application is healthy!"
else
    echo "⚠️ Health check failed (expected if app is not running)"
fi

echo ""
echo "🎉 Deployment demo completed!"
echo ""
echo "Next steps for real deployment:"
echo "1. Push code to GitHub repository"
echo "2. Configure Azure App Service"
echo "3. Set up GitHub Secrets"
echo "4. Watch the GitHub Actions workflow run"
echo ""
echo "📚 See README.md for detailed instructions"
