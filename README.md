# 🚀 Azure DevOps Demo - Next.js Application

A modern Next.js application showcasing DevOps practices with automated deployment to Azure App Service using GitHub Actions.

## 🎯 Demo Objectives

This project demonstrates:
- **CI/CD Pipeline**: Automated deployment using GitHub Actions
- **Azure Integration**: Deployment to Azure App Service
- **Zero-Downtime Deployment**: Blue-green deployment strategy
- **Health Monitoring**: Application health checks
- **DevOps Best Practices**: Code quality, testing, and monitoring

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   GitHub Repo   │───▶│  GitHub Actions │───▶│ Azure App Service│
│                 │    │   CI/CD Pipeline│    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- Azure account (free tier available)
- GitHub account

### Local Development
```bash
# Clone the repository
git clone <your-repo-url>
cd azure-nextjs-demo

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Azure Deployment Setup

1. **Create Azure App Service**
   ```bash
   # Using Azure CLI
   az group create --name myResourceGroup --location eastus
   az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1
   az webapp create --name your-app-name --resource-group myResourceGroup --plan myAppServicePlan
   ```

2. **Get Publish Profile**
   - Go to Azure Portal → App Service → Your App
   - Download publish profile
   - Add to GitHub Secrets as `AZURE_WEBAPP_PUBLISH_PROFILE`

3. **Configure GitHub Secrets**
   - `AZURE_WEBAPP_PUBLISH_PROFILE`: Your Azure publish profile
   - `AZURE_WEBAPP_URL`: Your Azure App Service URL

4. **Update Workflow**
   - Edit `.github/workflows/azure-deploy.yml`
   - Replace `your-app-name` with your actual Azure App Service name

## 🔧 CI/CD Pipeline Features

### GitHub Actions Workflow
- **Trigger**: Push to main branch or pull requests
- **Build**: Node.js 18.x with npm caching
- **Quality Checks**: Linting and testing
- **Deployment**: Automated deployment to Azure
- **Health Check**: Post-deployment verification
- **Notifications**: Deployment status reporting

### Pipeline Stages
1. **Code Checkout**: Latest code from repository
2. **Dependency Installation**: Optimized with npm cache
3. **Code Quality**: ESLint checks
4. **Build Process**: Production build with optimizations
5. **Testing**: Automated test execution
6. **Deployment**: Zero-downtime deployment to Azure
7. **Health Verification**: Application health check
8. **Status Notification**: Success/failure reporting

## 📊 Monitoring & Health Checks

### Health Check Endpoint
- **URL**: `/api/health`
- **Method**: GET
- **Response**: Application status, uptime, memory usage

### Monitoring Features
- Real-time health status
- Deployment tracking
- Performance metrics
- Error logging

## 🔄 Update Demo

To demonstrate the CI/CD pipeline:

1. **Make Changes**
   ```bash
   # Update version in package.json
   # Modify content in app/page.tsx
   # Add new features
   ```

2. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add new feature for demo"
   git push origin main
   ```

3. **Watch Deployment**
   - Monitor GitHub Actions tab
   - Check Azure App Service logs
   - Verify zero-downtime deployment

## 🛠️ Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Azure App Service
- **CI/CD**: GitHub Actions
- **Monitoring**: Custom health checks

## 📁 Project Structure

```
azure-nextjs-demo/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── health/        # Health check endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── .github/
│   └── workflows/         # GitHub Actions
│       └── azure-deploy.yml
├── lib/                   # Utility functions
├── models/                # Database models
├── components/            # React components
├── types/                 # TypeScript types
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎯 DevOps Best Practices Demonstrated

1. **Infrastructure as Code**: Azure resources defined via CLI/ARM templates
2. **Automated Testing**: Pre-deployment testing in CI/CD pipeline
3. **Code Quality**: Linting and formatting checks
4. **Security**: Environment variables and secrets management
5. **Monitoring**: Health checks and logging
6. **Rollback Strategy**: Version control and deployment history
7. **Documentation**: Comprehensive setup and deployment guides

## 🔍 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Review build logs in GitHub Actions

2. **Deployment Issues**
   - Verify Azure publish profile
   - Check Azure App Service configuration
   - Review deployment logs

3. **Health Check Failures**
   - Verify application is running
   - Check environment variables
   - Review application logs

## 📈 Next Steps

1. **Add Database Integration**: MongoDB or Azure Cosmos DB
2. **Implement Authentication**: Azure AD or custom auth
3. **Add Monitoring**: Application Insights integration
4. **Scale Infrastructure**: Auto-scaling and load balancing
5. **Security Enhancements**: SSL certificates, security headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Happy Deploying! 🚀**
