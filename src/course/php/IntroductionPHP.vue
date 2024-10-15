<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-600 rounded-t-xl p-4">
      <img src="/icons/php.svg" alt="PHP Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to PHP</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Detailed Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        PHP (Hypertext Preprocessor) is a powerful, open-source server-side scripting language designed specifically for web development. Created by Rasmus Lerdorf in 1994, PHP has evolved significantly over the years, becoming one of the most widely used languages for building dynamic and interactive websites. Its seamless integration with HTML makes it an ideal choice for developers aiming to add functionality to web pages without compromising on design and aesthetics.

        One of PHP's standout features is its simplicity and ease of learning, making it accessible for beginners while still being robust enough to meet the demands of seasoned developers. PHP scripts are executed on the server, generating HTML that is sent to the client's browser. This client-server model allows developers to create responsive and data-driven websites that can handle user interactions, form submissions, and database operations efficiently.

        PHP is highly versatile, supporting a wide range of databases such as MySQL, PostgreSQL, and SQLite, which allows for the creation of complex data-driven applications. Its extensive standard library provides numerous built-in functions for tasks like file handling, encryption, and image processing, reducing the need for external libraries and speeding up the development process.

        Over the years, PHP has fostered a vibrant community that contributes to its rich ecosystem of frameworks, libraries, and tools. Popular frameworks like Laravel, Symfony, and CodeIgniter offer structured and efficient ways to build scalable and maintainable applications, adhering to best practices and design patterns. These frameworks simplify common tasks such as routing, authentication, and database management, enabling developers to focus on writing clean and efficient code.

        PHP's compatibility with various operating systems, including Windows, Linux, and macOS, ensures that applications built with PHP can run in diverse environments. Additionally, PHP is supported by virtually all web hosting providers, making it easy to deploy and scale applications without significant infrastructure changes.

        Security is another critical aspect of PHP development. The language provides robust features for input validation, data sanitization, and protection against common web vulnerabilities like SQL injection and Cross-Site Scripting (XSS). By following secure coding practices and utilizing PHP's security features, developers can build safe and reliable applications.

        Beyond web development, PHP is used in command-line scripting and desktop application development, showcasing its flexibility. Its ability to interact with various protocols and services, such as SMTP for email and FTP for file transfers, extends its functionality beyond traditional web applications.

        In summary, PHP's combination of ease of use, versatility, robust community support, and extensive ecosystem makes it a formidable choice for web developers. Whether you're building a simple personal blog or a complex e-commerce platform, PHP provides the tools and flexibility needed to bring your projects to life effectively.
      </p>

      <!-- Why Learn PHP -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Learn PHP?</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Wide Adoption:</span> PHP powers a significant portion of the web, including major platforms like Facebook, Wikipedia, and WordPress, ensuring its relevance in the industry.</li>
        <li><span class="font-semibold">CMS Compatibility:</span> PHP is the backbone of popular content management systems (CMS) like WordPress, Drupal, and Joomla, enabling developers to create and manage dynamic websites efficiently.</li>
        <li><span class="font-semibold">Large Ecosystem:</span> With numerous frameworks such as Laravel, Symfony, and CodeIgniter, PHP simplifies complex application development and promotes best practices.</li>
        <li><span class="font-semibold">Ease of Learning:</span> PHP's straightforward syntax and extensive documentation make it accessible for beginners, allowing them to quickly build functional web applications.</li>
        <li><span class="font-semibold">Community Support:</span> A vast and active global community contributes to PHP's continuous improvement, offering a wealth of resources, tutorials, and libraries to aid development.</li>
        <li><span class="font-semibold">Performance and Scalability:</span> Modern PHP versions and optimization techniques ensure high performance and the ability to scale applications to handle large user bases.</li>
      </ul>

      <!-- Applications of PHP -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Applications of PHP</h2>
      <p class="text-base md:text-lg mb-4">
        PHP can be utilized in various fields, including:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Server-side Web Development:</span> Building dynamic and interactive websites that can handle user input, manage sessions, and interact with databases.</li>
        <li><span class="font-semibold">Building Content Management Systems (CMS):</span> Developing and customizing CMS platforms like WordPress, Drupal, and Joomla to create and manage website content effectively.</li>
        <li><span class="font-semibold">Creating RESTful APIs:</span> Designing and implementing APIs that allow different software systems to communicate and share data seamlessly.</li>
        <li><span class="font-semibold">E-commerce Platforms:</span> Developing online stores and marketplaces with features like product catalogs, shopping carts, and payment processing.</li>
        <li><span class="font-semibold">Web Applications:</span> Creating complex web applications such as social networks, forums, and content sharing platforms.</li>
        <li><span class="font-semibold">Automation Scripts:</span> Writing scripts to automate repetitive tasks, manage server operations, and handle data processing.</li>
        <li><span class="font-semibold">Command-line Scripting:</span> Utilizing PHP for scripting tasks outside the web environment, such as data migration, backups, and system monitoring.</li>
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

<style>
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
