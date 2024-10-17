<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Deploying React App</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">

      <!-- Introduction -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Introduction</h2>
      <p class="text-base md:text-lg mb-4">
        Deploying your React application is the final step in bringing your project from development to production. It involves making your app accessible to users on the internet by hosting it on a server or a cloud platform. Proper deployment ensures that your application is optimized for performance, secure, and scalable.
      </p>
      <p class="text-base md:text-lg mb-6">
        This module will guide you through the various methods and best practices for deploying React applications, covering popular platforms like Netlify, Vercel, GitHub Pages, AWS, and Heroku. We'll also discuss essential considerations such as environment variables, build optimizations, and continuous integration/deployment (CI/CD) pipelines.
      </p>

      <!-- 1. Preparing Your React App for Deployment -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">1. Preparing Your React App for Deployment</h2>
      <p class="text-base md:text-lg mb-4">
        Before deploying, it's crucial to prepare your React application to ensure it runs smoothly in a production environment.
      </p>
      <ul class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>Build the Application:</strong> Use the <code>npm run build</code> command to create an optimized production build of your app.</li>
        <li><strong>Optimize Assets:</strong> Compress images and minify CSS and JavaScript files to reduce load times.</li>
        <li><strong>Set Environment Variables:</strong> Configure environment-specific variables securely using tools like <code>dotenv</code>.</li>
        <li><strong>Remove Unused Code:</strong> Clean up your codebase by removing unnecessary dependencies and code snippets.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Building the Application</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
npm run build
        </code>
      </pre>

      <!-- 2. Choosing a Deployment Platform -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">2. Choosing a Deployment Platform</h2>
      <p class="text-base md:text-lg mb-4">
        There are numerous platforms available for deploying React applications, each with its own set of features and benefits. Here are some of the most popular options:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Netlify:</strong> Offers continuous deployment, serverless functions, and a global CDN.</li>
        <li><strong>Vercel:</strong> Provides optimized performance, automatic scaling, and seamless integration with Next.js.</li>
        <li><strong>GitHub Pages:</strong> Ideal for hosting static sites directly from your GitHub repository.</li>
        <li><strong>AWS (Amazon Web Services):</strong> Offers a wide range of services like S3, EC2, and Amplify for scalable deployments.</li>
        <li><strong>Heroku:</strong> Simplifies deployment with a focus on ease of use and scalability.</li>
      </ul>

      <!-- 3. Deploying to Netlify -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">3. Deploying to Netlify</h2>
      <p class="text-base md:text-lg mb-4">
        Netlify is a popular choice for deploying React applications due to its simplicity and powerful features.
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>Sign Up and Connect Repository:</strong> Create an account on Netlify and connect your GitHub, GitLab, or Bitbucket repository.</li>
        <li><strong>Configure Build Settings:</strong> Set the build command to <code>npm run build</code> and the publish directory to <code>build</code>.</li>
        <li><strong>Deploy:</strong> Click the "Deploy" button to initiate the deployment process. Netlify will automatically build and host your application.</li>
        <li><strong>Set Up Custom Domain (Optional):</strong> Configure a custom domain through Netlify's domain management settings.</li>
      </ol>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: netlify.toml Configuration</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-toml">
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
        </code>
      </pre>

      <!-- 4. Deploying to Vercel -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">4. Deploying to Vercel</h2>
      <p class="text-base md:text-lg mb-4">
        Vercel is known for its performance optimizations and seamless integration with frontend frameworks.
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>Sign Up and Install Vercel CLI (Optional):</strong> Create an account on Vercel and optionally install the Vercel CLI for advanced configurations.</li>
        <li><strong>Import Project:</strong> Connect your Git repository and import the project into Vercel.</li>
        <li><strong>Configure Build Settings:</strong> Ensure the build command is set to <code>npm run build</code> and the output directory is <code>build</code>.</li>
        <li><strong>Deploy:</strong> Click the "Deploy" button. Vercel will build and deploy your application automatically.</li>
        <li><strong>Set Up Custom Domain (Optional):</strong> Add a custom domain through Vercel's domain management interface.</li>
      </ol>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Vercel Configuration (vercel.json)</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-json">
{
  "builds": [
    { "src": "package.json", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
        </code>
      </pre>

      <!-- 5. Deploying to GitHub Pages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">5. Deploying to GitHub Pages</h2>
      <p class="text-base md:text-lg mb-4">
        GitHub Pages is a free service ideal for hosting static React applications directly from your GitHub repository.
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>Install gh-pages Package:</strong> Add the <code>gh-pages</code> package to your project.</li>
        <li><strong>Configure package.json:</strong> Add homepage, predeploy, and deploy scripts to your <code>package.json</code>.</li>
        <li><strong>Deploy:</strong> Run the <code>npm run deploy</code> command to build and deploy your application.</li>
        <li><strong>Access Your Site:</strong> Your app will be available at <code>https://{username}.github.io/{repository-name}</code>.</li>
      </ol>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: package.json Configuration</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-json">
{
  "name": "my-react-app",
  "version": "0.1.0",
  "homepage": "https://{username}.github.io/{repository-name}",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "dependencies": {
    "gh-pages": "^3.2.3",
    // other dependencies
  }
}
        </code>
      </pre>

      <!-- 6. Deploying to AWS (Amazon Web Services) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">6. Deploying to AWS</h2>
      <p class="text-base md:text-lg mb-4">
        AWS offers robust and scalable solutions for deploying React applications, suitable for both small and large-scale projects.
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>Using AWS Amplify:</strong> AWS Amplify simplifies the deployment process with features like hosting, CI/CD, and authentication.</li>
        <li><strong>Using S3 and CloudFront:</strong> Host your static React app on S3 and serve it through CloudFront for global CDN distribution.</li>
        <li><strong>Using Elastic Beanstalk or EC2:</strong> For more control, deploy your app using Elastic Beanstalk or directly on EC2 instances.</li>
      </ol>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Deploying with AWS Amplify</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
# Install AWS Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure

# Initialize Amplify in your project
amplify init

# Add hosting
amplify add hosting

# Publish your app
amplify publish
        </code>
      </pre>

      <!-- 7. Continuous Integration and Deployment (CI/CD) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">7. Continuous Integration and Deployment (CI/CD)</h2>
      <p class="text-base md:text-lg mb-4">
        Implementing CI/CD pipelines ensures that your application is automatically built, tested, and deployed whenever changes are pushed to the repository. This approach enhances development efficiency and reduces the risk of deployment errors.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Popular CI/CD Tools:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>GitHub Actions:</strong> Automate workflows directly from your GitHub repository.</li>
        <li><strong>Travis CI:</strong> A continuous integration service used to build and test projects.</li>
        <li><strong>CircleCI:</strong> Provides fast and scalable CI/CD pipelines.</li>
        <li><strong>Jenkins:</strong> An open-source automation server for building CI/CD pipelines.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: GitHub Actions Workflow for Deploying to Netlify</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-yaml">
name: Deploy to Netlify

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Install Dependencies
      run: npm install
    - name: Build
      run: npm run build
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: ./build
        production-deploy: true
        NETLIFY_AUTH_TOKEN: $&#123;&#123; secrets.NETLIFY_AUTH_TOKEN &#125;&#125;
        NETLIFY_SITE_ID: $&#123;&#123; secrets.NETLIFY_SITE_ID &#125;&#125;
        DEPLOY_MESSAGE: "Automated deployment from GitHub Actions"
        DEPLOY_BRANCH: "main"
        DEPLOY_PATH: "/"
        DEPLOY_FORCE: "true"
        DEPLOY_PRUNE: "true"
    </code>
      </pre>

      <!-- 8. Environment Variables and Secrets Management -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">8. Environment Variables and Secrets Management</h2>
      <p class="text-base md:text-lg mb-4">
        Managing environment variables securely is vital for protecting sensitive information like API keys, database credentials, and other secrets.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Best Practices:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use .env Files:</strong> Store environment variables in a <code>.env</code> file and ensure it is excluded from version control using <code>.gitignore</code>.</li>
        <li><strong>Leverage Platform-Specific Secrets Management:</strong> Use the secrets management features provided by your deployment platform (e.g., Netlify Environment Variables, Vercel Secrets).</li>
        <li><strong>Never Expose Secrets in Code:</strong> Avoid hardcoding sensitive information directly into your codebase.</li>
        <li><strong>Use Different Environments:</strong> Maintain separate environment variables for development, staging, and production environments.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Using .env File</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-sh">
# .env
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your_api_key_here
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Access these variables in your React application using <code>process.env</code>:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

fetch(`${apiUrl}/endpoint`, {
  headers: {
    'Authorization': `Bearer ${apiKey}`
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
        </code>
      </pre>

      <!-- Best Practices for Deployment -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">9. Best Practices for Deployment</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices ensures that your deployed React application is secure, efficient, and maintainable.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Enable HTTPS:</strong> Always use HTTPS to secure data transmission between the client and server.</li>
        <li><strong>Implement Caching Strategies:</strong> Utilize browser caching and CDN caching to reduce load times and server strain.</li>
        <li><strong>Monitor Performance:</strong> Use monitoring tools like Google Analytics, New Relic, or Sentry to track performance and errors.</li>
        <li><strong>Optimize SEO:</strong> Ensure your application is optimized for search engines by using server-side rendering or prerendering techniques.</li>
        <li><strong>Automate Backups:</strong> Regularly back up your application and its data to prevent data loss.</li>
        <li><strong>Test Thoroughly:</strong> Conduct comprehensive testing, including unit tests, integration tests, and end-to-end tests, before deployment.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Deploying a React application is a critical phase that transforms your project from a local development environment to a live, accessible application. By following the steps and best practices outlined in this module, you can ensure a smooth and efficient deployment process. Remember to continuously monitor and optimize your application post-deployment to maintain performance and reliability.
      </p>
      <p class="text-base md:text-lg mb-6">
        Congratulations on completing the React course! Equipped with the knowledge of building, optimizing, and deploying React applications, you're now ready to create robust and scalable web applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeployingReactApps',
  data() {
    return {
      // Additional state or data properties can be added here
    };
  },
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for very long lines */
  overflow-x: auto;      /* Adds horizontal scroll for overflow content */ 
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}
</style>
