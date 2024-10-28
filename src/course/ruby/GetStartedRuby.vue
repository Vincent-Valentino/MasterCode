<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/icons/ruby.svg" alt="Ruby Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Get Started with Ruby</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">

      <!-- Course Overview -->
      <section class="mb-6">
        <p class="text-base md:text-lg mb-4">
          Welcome to the "Get Started with Ruby" course! This introductory course is designed to help you set up your Ruby development environment, ensuring you have all the necessary tools to embark on your Ruby programming journey. We'll cover installation, choosing the right IDE, configuring your environment, and verifying your setup.
        </p>
      </section>

      <!-- Prerequisites -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Prerequisites</h2>
        <ul class="list-disc list-inside text-base md:text-lg">
          <li>A computer running Windows, macOS, or Linux.</li>
          <li>An active internet connection to download necessary tools.</li>
          <li>Basic understanding of computer operations.</li>
        </ul>
      </section>

      <!-- Installing Ruby -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Installing Ruby</h2>
        <p class="text-base md:text-lg mb-4">
          Before you can start programming in Ruby, you need to install the Ruby interpreter on your machine. Follow the steps below based on your operating system:
        </p>
        <ol class="list-decimal list-inside text-base md:text-lg">
          <li><span class="font-semibold">Windows:</span>
            <ul class="list-disc list-inside ml-5 mb-2">
              <li>Download the Ruby installer from the official <a href="https://www.ruby-lang.org/en/downloads/" class="text-blue-600 underline" target="_blank">Ruby website</a>.</li>
              <li>Run the installer and follow the on-screen instructions.</li>
              <li>Ensure you check the option to add Ruby to your system PATH.</li>
            </ul>
          </li>
          <li><span class="font-semibold">macOS:</span>
            <ul class="list-disc list-inside ml-5 mb-2">
              <li>Open Terminal.</li>
              <li>Install Homebrew if you haven't already by running:
                <pre class="bg-gray-200 p-2 rounded mt-2">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</pre>
              </li>
              <li>Install Ruby using Homebrew:
                <pre class="bg-gray-200 p-2 rounded mt-2">brew install ruby</pre>
              </li>
              <li>Add Ruby to your PATH by adding the following line to your ~/.zshrc or ~/.bash_profile:
                <pre class="bg-gray-200 p-2 rounded mt-2">export PATH="/usr/local/opt/ruby/bin:$PATH"</pre>
              </li>
              <li>Reload your shell configuration:
                <pre class="bg-gray-200 p-2 rounded mt-2">source ~/.zshrc</pre>
              </li>
            </ul>
          </li>
          <li><span class="font-semibold">Linux:</span>
            <ul class="list-disc list-inside ml-5">
              <li>Open Terminal.</li>
              <li>Update your package manager:
                <pre class="bg-gray-200 p-2 rounded mt-2">sudo apt-get update</pre>
              </li>
              <li>Install Ruby:
                <pre class="bg-gray-200 p-2 rounded mt-2">sudo apt-get install ruby-full</pre>
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <!-- Choosing an IDE -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Choosing an IDE</h2>
        <p class="text-base md:text-lg mb-4">
          An Integrated Development Environment (IDE) can significantly enhance your coding experience. Here are some popular choices for Ruby development:
        </p>
        <ul class="list-disc list-inside text-base md:text-lg">
          <li><span class="font-semibold">Visual Studio Code:</span> A free, lightweight editor with extensive extensions for Ruby.</li>
          <li><span class="font-semibold">RubyMine:</span> A powerful, feature-rich IDE specifically designed for Ruby and Rails development.</li>
          <li><span class="font-semibold">Sublime Text:</span> A fast and customizable editor with support for Ruby through plugins.</li>
        </ul>
        <p class="text-base md:text-lg mt-4">
          For beginners, <strong>Visual Studio Code</strong> is highly recommended due to its ease of use and vast ecosystem of extensions.
        </p>
      </section>

      <!-- Setting Up Your Development Environment -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Setting Up Your Development Environment</h2>
        <p class="text-base md:text-lg mb-4">
          After installing Ruby and choosing an IDE, follow these steps to configure your development environment:
        </p>
        <ol class="list-decimal list-inside text-base md:text-lg">
          <li><span class="font-semibold">Install Bundler:</span> Bundler manages Ruby gems for your projects.
            <pre class="bg-gray-200 p-2 rounded mt-2">gem install bundler</pre>
          </li>
          <li><span class="font-semibold">Configure Your IDE:</span> Install Ruby extensions or plugins to enhance functionality.
            <ul class="list-disc list-inside ml-5">
              <li>For Visual Studio Code, install the "Ruby" extension by Peng Lv.</li>
              <li>Configure your IDE to recognize Ruby's PATH.</li>
            </ul>
          </li>
          <li><span class="font-semibold">Set Up Version Control:</span> Initialize Git for version control.
            <pre class="bg-gray-200 p-2 rounded mt-2">git init</pre>
          </li>
        </ol>
      </section>

      <!-- Verifying Your Installation -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Verifying Your Installation</h2>
        <p class="text-base md:text-lg mb-4">
          It's essential to ensure that Ruby is correctly installed on your system. Follow these steps to verify your installation:
        </p>
        <ol class="list-decimal list-inside text-base md:text-lg">
          <li>Open your terminal or command prompt.</li>
          <li>Check the Ruby version by running:
            <pre class="bg-gray-200 p-2 rounded mt-2">ruby -v</pre>
            <p class="mt-2">You should see output similar to <em>ruby 3.x.x</em>, indicating that Ruby is installed.</p>
          </li>
          <li>Verify Bundler installation:
            <pre class="bg-gray-200 p-2 rounded mt-2">bundler -v</pre>
            <p class="mt-2">This should display the Bundler version, confirming its installation.</p>
          </li>
        </ol>
        <p class="text-base md:text-lg mt-4">
          If you encounter any issues during installation, refer to the official <a href="https://www.ruby-lang.org/en/documentation/installation/" class="text-blue-600 underline" target="_blank">Ruby installation guide</a> or seek assistance from the Ruby community forums.
        </p>
      </section>

      <!-- Additional Resources -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Additional Resources</h2>
        <ul class="list-disc list-inside text-base md:text-lg">
          <li><a href="https://www.ruby-lang.org/en/documentation/" class="text-blue-600 underline" target="_blank">Ruby Documentation</a> - Comprehensive guides and references.</li>
          <li><a href="https://guides.rubyonrails.org/getting_started.html" class="text-blue-600 underline" target="_blank">Ruby on Rails Guides</a> - Official guides for Rails development.</li>
          <li><a href="https://stackoverflow.com/questions/tagged/ruby" class="text-blue-600 underline" target="_blank">Stack Overflow Ruby Tag</a> - Community-driven Q&A for Ruby developers.</li>
        </ul>
      </section>

      <!-- Next Steps Call-to-Action -->
      <section class="mb-6 text-center">
        <button class="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition" @click="goToNextCourse">
          Proceed to Variables and Data Types
        </button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "GetStartedWithRuby",
  methods: {
    goToNextCourse() {
      // Logic to navigate to the next course module
      this.$router.push({ name: 'VariablesAndDataTypes' });
    }
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

h2, p, h1, h3, h4, li {
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
