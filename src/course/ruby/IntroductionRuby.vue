<template>

  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/icons/ruby.svg" alt="Ruby Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to Ruby</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Ruby is a dynamic, open-source programming language focused on simplicity and productivity. Created by Yukihiro “Matz” Matsumoto in the mid-1990s, Ruby blends elements from languages like Perl, Smalltalk, and Lisp to offer a highly readable and elegant syntax. Fully object-oriented, Ruby enables developers to write clean and modular code, making it a favorite for both beginners and experienced programmers.
      </p>

      <!-- Why Learn Ruby -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Learn Ruby?</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Easy to Learn:</span> Ruby's intuitive syntax makes it accessible for newcomers.</li>
        <li><span class="font-semibold">Ruby on Rails:</span> Leverage the powerful Rails framework for rapid web development.</li>
        <li><span class="font-semibold">Highly Flexible:</span> Ruby allows developers to write expressive and maintainable code.</li>
        <li><span class="font-semibold">Productivity:</span> Concise code enables faster development cycles.</li>
        <li><span class="font-semibold">Active Community:</span> Benefit from a rich ecosystem of gems and libraries supported by a vibrant community.</li>
      </ul>

      <!-- Main Features of Ruby -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Main Features of Ruby</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Pure Object-Oriented:</span> Every value in Ruby is an object, promoting consistency and flexibility.</li>
        <li><span class="font-semibold">Elegant Syntax:</span> Ruby's readable and expressive syntax makes code easy to write and understand.</li>
        <li><span class="font-semibold">Metaprogramming:</span> Ruby allows programs to modify themselves, enabling dynamic and adaptable code structures.</li>
        <li><span class="font-semibold">Extensive Standard Library:</span> Provides a wide range of built-in functions and classes for various tasks.</li>
        <li><span class="font-semibold">Garbage Collection:</span> Automatic memory management helps prevent memory leaks and optimizes performance.</li>
        <li><span class="font-semibold">Exception Handling:</span> Robust error handling mechanisms ensure reliable and maintainable applications.</li>
        <li><span class="font-semibold">Cross-Platform Compatibility:</span> Runs on various operating systems including Windows, Linux, and macOS.</li>
      </ul>

      <!-- Applications of Ruby -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Applications of Ruby</h2>
      <p class="text-base md:text-lg mb-4">
        Ruby's versatility allows it to be used in a variety of domains, such as:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Web Applications with Ruby on Rails:</span> Building robust and scalable web applications efficiently.</li>
        <li><span class="font-semibold">Prototyping and MVP Development:</span> Quickly developing minimum viable products to test ideas.</li>
        <li><span class="font-semibold">Automation Scripts:</span> Automating repetitive tasks to improve workflow efficiency.</li>
        <li><span class="font-semibold">DevOps and System Administration:</span> Managing and automating server configurations and deployments.</li>
        <li><span class="font-semibold">Data Processing:</span> Handling and manipulating data for various applications.</li>
        <li><span class="font-semibold">Game Development:</span> Creating simple games and interactive applications.</li>
      </ul>

      <!-- Ruby Code Example -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Ruby Code Example</h2>
      <div class="bg-gray-800 text-white rounded-lg p-4">
        <pre><code class="language-ruby">{{ rubyCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionToRuby",

  data() {
    return {
      rubyCode: 
`puts 'Hello, World!'`,
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
