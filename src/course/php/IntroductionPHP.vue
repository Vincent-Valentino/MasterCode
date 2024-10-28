<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-600 rounded-t-xl p-4">
      <img src="/icons/php.svg" alt="PHP Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to PHP</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        PHP (Hypertext Preprocessor) is a widely-used open-source server-side scripting language tailored for web development. Its seamless integration with HTML allows developers to create dynamic and interactive websites efficiently. Known for its simplicity and versatility, PHP supports various databases and boasts a rich ecosystem of frameworks and tools.
      </p>

      <!-- Why Learn PHP -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Learn PHP?</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Wide Adoption:</span> Powers major platforms like Facebook, Wikipedia, and WordPress, ensuring its industry relevance.</li>
        <li><span class="font-semibold">CMS Compatibility:</span> Backbone of popular CMSs like WordPress, Drupal, and Joomla, facilitating efficient website management.</li>
        <li><span class="font-semibold">Large Ecosystem:</span> Frameworks such as Laravel, Symfony, and CodeIgniter streamline complex application development.</li>
        <li><span class="font-semibold">Ease of Learning:</span> Straightforward syntax and extensive documentation make PHP accessible for beginners.</li>
        <li><span class="font-semibold">Community Support:</span> Active global community contributes to continuous improvement and a wealth of resources.</li>
        <li><span class="font-semibold">Performance and Scalability:</span> Modern PHP versions and optimization techniques ensure high performance and scalability.</li>
      </ul>

      <!-- Main Features of PHP -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Main Features of PHP</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Server-side Scripting:</span> Executes on the server to generate dynamic HTML content.</li>
        <li><span class="font-semibold">Database Integration:</span> Seamlessly interacts with databases like MySQL, PostgreSQL, and SQLite.</li>
        <li><span class="font-semibold">Extensive Standard Library:</span> Offers built-in functions for tasks like file handling, encryption, and image processing.</li>
        <li><span class="font-semibold">Framework Support:</span> Frameworks like Laravel enhance development speed and enforce best practices.</li>
        <li><span class="font-semibold">Cross-Platform Compatibility:</span> Runs on various operating systems including Windows, Linux, and macOS.</li>
        <li><span class="font-semibold">Security Features:</span> Provides tools for input validation, data sanitization, and protection against common vulnerabilities.</li>
        <li><span class="font-semibold">Command-line Scripting:</span> Can be used for scripts outside the web environment, such as automation and data processing.</li>
      </ul>

      <!-- Applications of PHP -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Applications of PHP</h2>
      <p class="text-base md:text-lg mb-4">
        PHP is versatile and can be applied in various domains, including:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Server-side Web Development:</span> Building dynamic websites that handle user interactions and data management.</li>
        <li><span class="font-semibold">Content Management Systems (CMS):</span> Developing and customizing platforms like WordPress for efficient content handling.</li>
        <li><span class="font-semibold">RESTful APIs:</span> Creating APIs to enable communication between different software systems.</li>
        <li><span class="font-semibold">E-commerce Platforms:</span> Developing online stores with features like product catalogs and payment processing.</li>
        <li><span class="font-semibold">Web Applications:</span> Building complex applications such as social networks and forums.</li>
        <li><span class="font-semibold">Automation Scripts:</span> Writing scripts to automate tasks like data migration and server management.</li>
        <li><span class="font-semibold">Command-line Scripting:</span> Utilizing PHP for tasks outside the web context, such as backups and system monitoring.</li>
      </ul>

      <!-- PHP Code Example -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">PHP Code Example</h2>
      <div class="bg-gray-800 text-white rounded-lg p-4">
        <pre><code class="language-php">{{ phpCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionToPHP",

  data() {
    return {
      phpCode: 
`<?php
  echo "Hello, World!";
?>`,
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
