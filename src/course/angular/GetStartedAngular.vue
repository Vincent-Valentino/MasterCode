<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/angular/logo.svg" alt="Angular Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Get Started with Angular</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      <!-- 1. Install Node.js -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Install Node.js</h2>
      <p class="text-base md:text-lg mb-4">
        Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server-side, which is essential for developing Angular applications. Angular relies on Node.js for managing dependencies and running build tools.
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

      <!-- 2. Install Angular CLI -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Install Angular CLI</h2>
      <p class="text-base md:text-lg mb-4">
        The Angular CLI is a command-line interface tool that helps to initialize, develop, scaffold, and maintain Angular applications directly from a command shell. It simplifies many tasks, such as project setup, building, and testing.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Installation Steps:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Install Angular CLI globally using npm:</li>
      </ul>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-shell">
npm install -g @angular/cli
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        After installation, you can verify the installation by running:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-shell">
ng version
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This command will display the installed version of Angular CLI along with other Angular packages.
      </p>

      <!-- 3. Creating Angular App using Angular CLI -->
      <h2 class="text-xl md:text-2xl font-semibold mb-6 text-black">Creating an Angular App using Angular CLI</h2>
      <p class="text-base md:text-lg mb-6">
        When starting a new Angular project, the Angular CLI provides a streamlined process for setting up your development environment. It offers commands to generate components, services, modules, and more, ensuring a consistent project structure.
      </p>

      <!-- Comparison Table for Angular CLI vs Other Tools (if applicable) -->
      <!-- Since Angular CLI is the standard, we might compare it with alternatives like manually setting up or using other frameworks -->

      <p class="text-base md:text-lg mb-6">
        Using Angular CLI simplifies the process of creating and managing Angular applications by providing a robust set of tools and best practices out of the box.
      </p>

      <!-- 4. Simple Files and Folders -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Simple Files and Folders</h2>
      <p class="text-base md:text-lg mb-4">
        A typical Angular project has a well-organized file structure that helps manage your code efficiently. Here are the essential files and folders:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>src/:</strong> Contains the source code of the application.</li>
        <li><strong>app/:</strong> Holds the main application components and modules.</li>
        <li><strong>main.ts:</strong> The entry point of the application.</li>
        <li><strong>index.html:</strong> The main HTML file that serves as the entry point for the Angular application.</li>
        <li><strong>angular.json:</strong> Configuration file for Angular CLI.</li>
        <li><strong>package.json:</strong> Manages the project's dependencies, scripts, and metadata.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Understanding these files is crucial for navigating and maintaining your Angular project effectively.
      </p>

      <!-- 5. NPM to Install Packages like Angular Material and RxJS -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Using NPM to Install Packages like Angular Material and RxJS</h2>
      <p class="text-base md:text-lg mb-4">
        Managing dependencies is a fundamental aspect of modern web development. NPM (Node Package Manager) is the default package manager for Node.js and is widely used to install, update, and manage project dependencies.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Installing Packages:</strong>
      </p>
      <p class="text-base md:text-lg mb-4">
        To install packages like Angular Material and RxJS, use the following commands:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-shell">
npm install @angular/material @angular/cdk rxjs
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

      <!-- 6. Angular Dev Tools -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Angular Dev Tools</h2>
      <p class="text-base md:text-lg mb-4">
        Angular Dev Tools is a browser extension that provides powerful debugging and inspection capabilities for Angular applications. It allows you to inspect the component hierarchy, view component properties, and analyze performance.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Installation Steps:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Install the Angular Dev Tools extension from the <a href="https://angular.io/guide/devtools" class="text-blue-500 underline">official website</a> or your browser's extension store.</li>
        <li>Once installed, open your Angular application in the browser and access the Dev Tools through the browser's developer tools panel.</li>
        <li>Use Angular Dev Tools to inspect component trees, monitor services and dependencies, and debug your application effectively.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Angular Dev Tools significantly improves the development experience by providing real-time insights into your application's structure and behavior.
      </p>

      <!-- Conclusion with mention of TypeScript -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        <strong>Getting started with Angular</strong> involves setting up your development environment, understanding the essential tools, and familiarizing yourself with the project structure. By installing Node.js, setting up Angular CLI, creating your Angular app, managing dependencies with NPM, and utilizing Angular Dev Tools, you lay a strong foundation for building robust and scalable Angular applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will dive deeper into <strong>TypeScript</strong>, Angular's primary language, which adds static typing to JavaScript. Mastering TypeScript is crucial for effectively building and managing Angular components and services.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetStartedWithAngular',
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

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
