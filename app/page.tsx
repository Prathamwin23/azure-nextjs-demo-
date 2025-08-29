'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [deploymentInfo, setDeploymentInfo] = useState({
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });

  const [isHealthy, setIsHealthy] = useState(true);

  useEffect(() => {
    // Simulate health check
    const checkHealth = async () => {
      try {
        const response = await fetch('/api/health');
        setIsHealthy(response.ok);
      } catch (error) {
        setIsHealthy(false);
      }
    };
    
    checkHealth();
    const interval = setInterval(checkHealth, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🚀 Azure DevOps Demo - Updated V2.0
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Next.js Application with CI/CD Pipeline
          </p>
          
          {/* Status Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className={`w-3 h-3 rounded-full mr-2 ${isHealthy ? 'bg-green-500' : 'bg-red-500'}`}></div>
            {isHealthy ? 'Application Healthy' : 'Application Unhealthy'}
          </div>
        </div>

        {/* DevOps Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">🔧 CI/CD Pipeline</h3>
            <p className="text-gray-600">GitHub Actions workflow for automated deployment to Azure App Service</p>
            <div className="mt-4 text-sm text-blue-600">
              • Automated testing<br/>
              • Build optimization<br/>
              • Zero-downtime deployment
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">☁️ Azure Integration</h3>
            <p className="text-gray-600">Deployed on Azure App Service with environment-specific configurations</p>
            <div className="mt-4 text-sm text-green-600">
              • App Service deployment<br/>
              • Environment variables<br/>
              • Auto-scaling capabilities
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">📊 Monitoring</h3>
            <p className="text-gray-600">Health checks and deployment status monitoring</p>
            <div className="mt-4 text-sm text-purple-600">
              • Health check endpoints<br/>
              • Deployment tracking<br/>
              • Performance monitoring
            </div>
          </div>
        </div>

        {/* Deployment Information */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Deployment Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Environment</h4>
              <p className="text-lg font-mono bg-gray-100 px-3 py-2 rounded">
                {deploymentInfo.environment}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Version</h4>
              <p className="text-lg font-mono bg-gray-100 px-3 py-2 rounded">
                {deploymentInfo.version}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Deployed At</h4>
              <p className="text-sm font-mono bg-gray-100 px-3 py-2 rounded">
                {new Date(deploymentInfo.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Update Demo Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">🔄 Update Demo</h2>
          <p className="text-blue-800 mb-4">
            This section demonstrates how updates are deployed through the CI/CD pipeline without service disruption.
          </p>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Last Update:</strong> {new Date().toLocaleString()}<br/>
              <strong>Status:</strong> ✅ Successfully deployed via GitHub Actions<br/>
              <strong>Zero Downtime:</strong> ✅ Achieved through blue-green deployment strategy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
