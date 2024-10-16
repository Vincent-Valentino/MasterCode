<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Get Started with React</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      <!-- 1. Install Node.js -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Install Node.js</h2>
      <p class="text-base md:text-lg mb-4">
        Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, which is essential for developing React applications. React relies on Node.js for managing dependencies and running build tools.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Installation Steps:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Download the latest LTS version of Node.js from the <a href="https://nodejs.org/" class="text-blue-500 underline">official website</a>.</li>
        <li>Run the installer and follow the prompts.</li>
        <li>Verify the installation by opening your terminal and running the following commands:</li>
      </ul>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-shell">node -v
npm -v</code></pre>
      <p class="text-base md:text-lg mb-6">
        These commands will display the installed versions of Node.js and npm (Node Package Manager), confirming a successful installation.
      </p>

      <!-- 2. Install Extensions like ESLint -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Install Extensions like ESLint</h2>
      <p class="text-base md:text-lg mb-4">
        ESLint is a popular linting tool for JavaScript and JSX that helps identify and fix problematic patterns in your code. It enforces coding standards and improves code quality by catching errors before they become issues.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Installation Steps:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Install ESLint globally using npm:</li>
      </ul>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
npm install -g eslint
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        After installation, you can configure ESLint in your project to maintain consistent code style and catch potential errors early in the development process.
      </p>

      <!-- 3. Creating React using Classic npx vs Vite -->
      <h2 class="text-xl md:text-2xl font-semibold mb-6 text-black">Creating React App: Classic npx vs Vite</h2>
      <p class="text-base md:text-lg mb-6">
        When starting a new React project, you have multiple options for setting up your development environment. The two most popular methods are using <strong>npx create-react-app</strong> and <strong>Vite</strong>. Each has its own advantages and use cases.
      </p>

      <!-- Comparison Table for npx create-react-app vs Vite -->
      <div class="overflow-x-auto">
        <table class="w-full text-left bg-white border-collapse mb-8">
          <thead>
            <tr>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Criteria</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">npx create-react-app</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Vite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Setup Time</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Longer initial setup due to extensive configuration.</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Faster setup with minimal configuration.</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Build Speed</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Slower build times as the project grows.</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Significantly faster build and hot module replacement (HMR).</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Flexibility</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Opinionated with limited customization.</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Highly customizable with a plugin-based architecture.</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Community and Support</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Large community with extensive documentation.</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Growing community with active development.</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Use Cases</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Ideal for beginners and small to medium projects.</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Best for modern, high-performance projects requiring quick development cycles.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="text-base md:text-lg mb-6">
        <strong>npx create-react-app:</strong> This is the traditional way to create a new React application. It provides a zero-configuration setup, allowing developers to start building right away. However, as the project scales, the build times can become slower, and customization might require ejecting from the default configuration.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Vite:</strong> Vite is a modern build tool that offers faster development experiences with instant server start and lightning-fast hot module replacement (HMR). It's highly flexible and supports a wide range of configurations through plugins, making it suitable for both small and large-scale projects.
      </p>
      <p class="text-base md:text-lg mb-6">
        Choose <strong>npx create-react-app</strong> if you're a beginner looking for a straightforward setup with lots of tutorials and community support. Opt for <strong>Vite</strong> if you prioritize speed and flexibility, especially for larger or more complex projects.
      </p>

      <!-- 4. Simple Files and Folders -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Simple Files and Folders</h2>
      <p class="text-base md:text-lg mb-4">
        A typical React project has a straightforward file structure that helps organize your code efficiently. Here are the essential files and folders:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>index.html:</strong> The main HTML file that serves as the entry point for the React application.</li>
        <li><strong>main.js:</strong> The JavaScript file where React is initialized and the root component is rendered.</li>
        <li><strong>App.js:</strong> The root React component that serves as the foundation for all other components.</li>
        <li><strong>package.json:</strong> Manages the project's dependencies, scripts, and metadata.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Understanding these files is crucial for navigating and maintaining your React project effectively.
      </p>

      <!-- 5. NPM to Install Simple Packages like ESLint and react-router-dom -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Using NPM to Install Packages like ESLint and react-router-dom</h2>
      <p class="text-base md:text-lg mb-4">
        Managing dependencies is a fundamental aspect of modern web development. NPM (Node Package Manager) is the default package manager for Node.js and is widely used to install, update, and manage project dependencies.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Installing Packages:</strong>
      </p>
      <p class="text-base md:text-lg mb-4">
        To install packages like ESLint and react-router-dom, use the following commands:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
npm install eslint react-router-dom
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        It's beneficial to be familiar with alternative package managers like <strong>Yarn</strong> and <strong>pnpm</strong>, as they offer different features and performance benefits.
      </p>

      <!-- Comparison Table for NPM, Yarn, and pnpm -->
      <div class="overflow-x-auto">
        <table class="w-full text-left bg-white border-collapse mb-8">
          <thead>
            <tr>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Feature</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">NPM</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Yarn</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">pnpm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Installation Speed</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Moderate</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Fast</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Very Fast</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Disk Space Usage</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Higher</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Less than NPM</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Lowest</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Lock File</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">package-lock.json</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">yarn.lock</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">pnpm-lock.yaml</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Monorepo Support</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Basic</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Good</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Excellent</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Community Support</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Large</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Large</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Growing</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-base md:text-lg mb-6">
        Understanding the differences between these package managers can help you choose the one that best fits your project's needs. While NPM is the default and widely supported, Yarn and pnpm offer performance optimizations and features that can enhance your development workflow.
      </p>

      <!-- 6. React Dev Tools -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">React Dev Tools</h2>
      <p class="text-base md:text-lg mb-4">
        React Dev Tools is a browser extension that provides powerful debugging and inspection capabilities for React applications. It allows you to inspect the component hierarchy, view component props and state, and analyze performance.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Installation Steps:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Install the React Dev Tools extension from the <a href="https://reactjs.org/docs/getting-started.html" class="text-blue-500 underline">official website</a> or your browser's extension store.</li>
        <li>Once installed, open your React application in the browser and access the Dev Tools through the browser's developer tools panel.</li>
        <li>Use React Dev Tools to inspect component trees, monitor state and props, and debug your application effectively.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        React Dev Tools significantly improves the development experience by providing real-time insights into your application's structure and behavior.
      </p>

      <!-- Conclusion with mention of JSX -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        <strong>Getting started with React</strong> involves setting up your development environment, understanding the essential tools, and familiarizing yourself with the project structure. By installing Node.js, setting up ESLint, choosing the right tool for creating your React app, managing dependencies with NPM, and utilizing React Dev Tools, you lay a strong foundation for building robust and scalable React applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will dive deeper into <strong>JSX</strong>, React's syntax extension, which allows you to write HTML-like code within JavaScript. Mastering JSX is crucial for effectively building and managing React components.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetStartedWithReact',
  data() {
    return {
      // Any additional data properties can be added here if needed
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
