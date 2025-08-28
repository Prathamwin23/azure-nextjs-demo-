# 🚀 Azure Deployment Guide

This guide walks you through deploying the Azure DevOps Demo to Azure App Service.

## Prerequisites

1. **Azure Account**: Sign up for a free Azure account at [azure.microsoft.com](https://azure.microsoft.com)
2. **GitHub Account**: Create a GitHub account if you don't have one
3. **Azure CLI**: Install Azure CLI for local development (optional)

## Step 1: Create Azure Resources

### Option A: Using Azure Portal (Recommended for beginners)

1. **Create Resource Group**
   - Go to Azure Portal → Resource Groups
   - Click "Create"
   - Name: `azure-demo-rg`
   - Region: Choose closest to you
   - Click "Review + Create" → "Create"

2. **Create App Service Plan**
   - Go to App Service Plans
   - Click "Create"
   - Resource Group: `azure-demo-rg`
   - Name: `azure-demo-plan`
   - OS: Windows
   - Region: Same as resource group
   - Pricing Plan: B1 (Basic) - $13.14/month
   - Click "Review + Create" → "Create"

3. **Create Web App**
   - Go to App Services
   - Click "Create"
   - Resource Group: `azure-demo-rg`
   - Name: `your-unique-app-name` (must be globally unique)
   - Publish: Code
   - Runtime Stack: Node 18 LTS
   - OS: Windows
   - Region: Same as resource group
   - App Service Plan: `azure-demo-plan`
   - Click "Review + Create" → "Create"

### Option B: Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name azure-demo-rg --location eastus

# Create app service plan
az appservice plan create --name azure-demo-plan --resource-group azure-demo-rg --sku B1

# Create web app
az webapp create --name your-unique-app-name --resource-group azure-demo-rg --plan azure-demo-plan
```

## Step 2: Get Publish Profile

1. Go to your App Service in Azure Portal
2. Click "Get publish profile"
3. Download the `.publishsettings` file
4. Open the file and copy the content

## Step 3: Configure GitHub Repository

1. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Azure DevOps Demo"
   git branch -M main
   git remote add origin https://github.com/yourusername/azure-nextjs-demo.git
   git push -u origin main
   ```

2. **Add GitHub Secrets**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add these secrets:
     - `AZURE_WEBAPP_PUBLISH_PROFILE`: Paste the publish profile content
     - `AZURE_WEBAPP_URL`: `https://your-app-name.azurewebsites.net`

3. **Update Workflow File**
   - Edit `.github/workflows/azure-deploy.yml`
   - Replace `your-app-name` with your actual Azure App Service name

## Step 4: Deploy

1. **Trigger Deployment**
   ```bash
   # Make a small change
   echo "# Updated at $(date)" >> README.md
   git add README.md
   git commit -m "feat: trigger deployment"
   git push origin main
   ```

2. **Monitor Deployment**
   - Go to GitHub repository → Actions tab
   - Watch the workflow run
   - Check for any errors

3. **Verify Deployment**
   - Visit your Azure App Service URL
   - Check the health endpoint: `https://your-app-name.azurewebsites.net/api/health`

## Step 5: Test the Demo

1. **Health Check**
   - Visit `/api/health` endpoint
   - Should return application status

2. **Update Demo**
   - Make changes to `app/page.tsx`
   - Commit and push
   - Watch automatic deployment
   - Verify zero-downtime update

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version in workflow
   - Verify all dependencies are in package.json
   - Review build logs in GitHub Actions

2. **Deployment Failures**
   - Verify publish profile is correct
   - Check App Service name matches workflow
   - Ensure App Service is running

3. **Health Check Failures**
   - Wait for deployment to complete
   - Check App Service logs
   - Verify environment variables

### Useful Commands

```bash
# Check Azure CLI status
az account show

# List resource groups
az group list

# List app services
az webapp list --resource-group azure-demo-rg

# View app service logs
az webapp log tail --name your-app-name --resource-group azure-demo-rg
```

## Cost Optimization

- **Free Tier**: Use F1 (Free) tier for testing
- **Basic Tier**: B1 for production ($13.14/month)
- **Auto-shutdown**: Enable for development environments
- **Resource cleanup**: Delete resources when not needed

## Next Steps

1. **Add Custom Domain**: Configure custom domain in App Service
2. **SSL Certificate**: Enable HTTPS
3. **Monitoring**: Add Application Insights
4. **Scaling**: Configure auto-scaling rules
5. **Backup**: Set up automated backups

---

**🎉 Congratulations! Your Azure DevOps Demo is now deployed!**
