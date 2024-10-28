<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-green-600 rounded-t-xl p-4">
      <img src="/vue/logo.svg" alt="Vue.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Setting Up Your Vue.js Development Environment</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Welcome to the exciting world of Vue.js development! This comprehensive guide will walk you through setting up your development environment, comparing different build tools, and getting your first Vue.js project up and running. Let's embark on this journey together!
      </p>

      <!-- Prerequisites -->
      <div class="mb-6 bg-gray-100 rounded-lg p-4">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Prerequisites</h2>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Node.js and npm Installation</h3>
        <p class="text-base md:text-lg mb-4">
          Before diving into Vue.js, ensure you have Node.js and npm (Node Package Manager) installed on your system. Vue.js relies on these tools to run efficiently. Visit the official Node.js website and download the latest LTS version. npm comes bundled with Node.js, so you'll get both in one installation.
        </p>
        <p class="text-base md:text-lg mb-4">
          Download Node.js here: <a href="https://nodejs.org/en/download/" class="text-blue-600 underline">https://nodejs.org/en/download/</a>
        </p>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Choosing a Text Editor</h3>
        <p class="text-base md:text-lg mb-4">
          While you can use any text editor for Vue.js development, we highly recommend Visual Studio Code (VS Code). It offers excellent support for JavaScript and Vue.js through its rich extensions ecosystem. VS Code provides features like syntax highlighting, intelligent code completion, and robust debugging tools that can significantly enhance your development experience.
        </p>
        <p class="text-base md:text-lg mb-4">
          Download VS Code here: <a href="https://code.visualstudio.com/" class="text-blue-600 underline">https://code.visualstudio.com/</a>
        </p>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Verifying Your Installation</h3>
        <p class="text-base md:text-lg mb-4">
          After installing Node.js and npm, it's crucial to verify that they're correctly installed and accessible from your command line. Open your terminal or command prompt and run the following commands:
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4">
          <pre><code>{{ verifyNodeNpm }}</code></pre>
        </div>
        <p class="text-base md:text-lg mb-4">
          These commands will display the versions of Node.js and npm installed on your system. If you see version numbers, you're all set to start your Vue.js journey!
        </p>
      </div>

      <!-- Vue CLI vs Vite Comparison -->
      <div class="mb-6 bg-gray-100 rounded-lg p-4">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Vue CLI vs Vite: Choosing Your Build Tool</h2>
        <p class="text-base md:text-lg mb-4">
          When setting up a Vue.js project, you have two primary options for build tools: Vue CLI and Vite. Both are excellent choices, but they have different strengths. Let's compare them to help you make an informed decision:
        </p>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-left bg-white border-collapse">
            <thead>
              <tr>
                <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Criteria</th>
                <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Vue CLI</th>
                <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Vite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Performance</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Good, but slower build times due to webpack</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Lightning-fast build and hot reload</td>
              </tr>
              <tr>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Bundler Used</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">webpack</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Rollup for production, ESM for development</td>
              </tr>
              <tr>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Ease of Setup</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Comprehensive, may be complex for beginners</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Simple, minimal configuration required</td>
              </tr>
              <tr>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Project Scale</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Ideal for large-scale applications</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Great for small to medium-sized projects</td>
              </tr>
              <tr>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Plugin Ecosystem</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Rich ecosystem with many plugins</td>
                <td class="border-b p-2 text-xs md:p-4 md:text-sm">Growing ecosystem, compatible with many Rollup plugins</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="text-base md:text-lg mb-4">
          Both tools are excellent choices for Vue.js development. Vue CLI offers a more traditional approach with a rich ecosystem, while Vite provides blazing-fast performance with a simpler setup. Choose based on your project requirements and personal preferences.
        </p>
      </div>

      <!-- Setting Up with Vue CLI -->
      <div class="mb-6 bg-gray-100 rounded-lg p-4">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Setting Up with Vue CLI</h2>
        <p class="text-base md:text-lg mb-4">
          Vue CLI is a full system for rapid Vue.js development. Here's how to get started:
        </p>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Installing Vue CLI</h3>
        <p class="text-base md:text-lg mb-4">
          First, install Vue CLI globally using npm:
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4">
          <pre><code>{{ installVueCli }}</code></pre>
        </div>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Creating a New Project</h3>
        <p class="text-base md:text-lg mb-4">
          Once installed, you can create a new project:
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4">
          <pre><code>{{ createVueCliProject }}</code></pre>
        </div>
        <p class="text-base md:text-lg mb-4">
          This command will prompt you to pick a preset. You can choose default (babel, eslint) or manually select features. For beginners, the default preset is a good starting point.
        </p>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Project Structure</h3>
        <p class="text-base md:text-lg mb-4">
          After creation, your project structure will look like this:
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4">
          <pre><code>{{ vueCliProjectStructure }}</code></pre>
        </div>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Running the Development Server</h3>
        <p class="text-base md:text-lg mb-4">
          To start the development server:
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4">
          <pre><code>{{ runVueCliServer }}</code></pre>
        </div>
        <p class="text-base md:text-lg mb-4">
          This will start the development server, usually at http://localhost:8080. You can now start developing your Vue.js application!
        </p>
      </div>

      <!-- Setting Up with Vite -->
      <div class="mb-6 bg-gray-100 rounded-lg p-4">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Setting Up with Vite</h2>
        <p class="text-base md:text-lg mb-4">
          Vite is a newer build tool that offers extremely fast server start and hot module replacement (HMR). Here's how to get started with Vite:
        </p>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Creating a New Vite Project</h3>
        <p class="text-base md:text-lg mb-4">
          You can create a new Vite project with Vue.js template using npm or yarn:
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4">
          <pre><code>{{ createViteProject }}</code></pre>
        </div>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Project Structure</h3>
        <p class="text-base md:text-lg mb-4">
          After creation, your Vite project structure will look like this:
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4">
          <pre><code>{{ viteProjectStructure }}</code></pre>
        </div>

        <h3 class="text-lg md:text-xl font-semibold mb-2">Running the Development Server</h3>
        <p class="text-base md:text-lg mb-4">
          To start the Vite development server:
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4">
          <pre><code>{{ runViteServer }}</code></pre>
        </div>
        <p class="text-base md:text-lg mb-4">
          This will start the Vite development server, typically at http://localhost:3000. You're now ready to start building your Vue.js application with Vite!
        </p>
      </div>

      <!-- Conclusion -->
      <div class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Ready to Vue!</h2>
        <p class="text-base md:text-lg mb-4">
          Congratulations! You've successfully set up your Vue.js development environment. Whether you chose Vue CLI or Vite, you're now ready to start building amazing web applications with Vue.js. Remember, the Vue.js community is vast and supportive, so don't hesitate to seek help when you need it. Happy coding!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueSetupGuide',
  data() {
    return {
      verifyNodeNpm: `# Verify Node.js version
node -v

# Verify npm version
npm -v`,
      installVueCli: `# Install Vue CLI globally
npm install -g @vue/cli`,
      createVueCliProject: `# Create a new project
vue create my-vue-app`,
      vueCliProjectStructure: `my-vue-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.vue
│   └── main.js
├── .gitignore
├── babel.config.js
├── package.json
└── README.md`,
      runVueCliServer: `# Navigate to the project directory
cd my-vue-app

# Run the development server
npm run serve
      `,
      createViteProject: `# Use npm
npm init vite@latest my-vue-app -- --template vue

# Or use yarn
yarn create vite my-vue-app --template vue`,
      viteProjectStructure: `my-vue-app/
├── node_modules/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.vue
│   └── main.js
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md`,
      runViteServer: `# Navigate to the project directory
cd my-vue-app

# Install dependencies
npm install

# Run the development server
npm run dev`
    };
  }
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