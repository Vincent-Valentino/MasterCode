<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/icons/ruby.svg" alt="Ruby Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to Ruby</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Detailed Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. Designed and developed by Yukihiro “Matz” Matsumoto in the mid-1990s, Ruby blends parts of his favorite languages—Perl, Smalltalk, Eiffel, Ada, and Lisp—to create a language that is both powerful and easy to use. Ruby is fully object-oriented, meaning that everything in Ruby is an object, including primitive data types like numbers and booleans. This pure object-oriented approach allows developers to write highly modular and reusable code.

        One of Ruby's standout features is its elegant syntax, which is both natural to read and easy to write. This readability makes Ruby an excellent choice for beginners who are just starting their programming journey, as well as for experienced developers who appreciate clean and maintainable code. Ruby emphasizes the "principle of least astonishment" (POLA), ensuring that the language behaves in a way that minimizes confusion and surprises for developers. This philosophy leads to a more intuitive coding experience, where the language's behavior aligns closely with the developer's expectations.

        Beyond its syntax, Ruby is renowned for its robust ecosystem, particularly the Ruby on Rails framework. Rails revolutionized web development by introducing conventions that streamline the development process, allowing developers to build complex web applications rapidly without sacrificing quality or performance. Rails follows the "Convention over Configuration" (CoC) and "Don't Repeat Yourself" (DRY) principles, which reduce the need for boilerplate code and enhance productivity.

        Ruby's versatility extends beyond web development. It is used in various domains, including automation, data processing, DevOps, and even game development. The language's flexibility allows developers to tackle a wide range of projects, from scripting simple tasks to building large-scale enterprise applications. Additionally, Ruby boasts a vibrant and supportive community that contributes to a vast array of libraries (gems), tools, and frameworks, making it easier for developers to find solutions and collaborate on projects.

        In summary, Ruby's combination of elegant syntax, object-oriented purity, powerful frameworks, and a supportive community makes it a compelling choice for developers seeking a language that balances simplicity with capability. Whether you're building web applications, automating tasks, or exploring new programming paradigms, Ruby provides the tools and flexibility to bring your ideas to life effectively.
      </p>

      <!-- Why Learn Ruby -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Learn Ruby?</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Easy to Learn:</span> Ruby has a clean and intuitive syntax, making it a great first language for beginners.</li>
        <li><span class="font-semibold">Ruby on Rails:</span> The language is best known for its popular web framework, Ruby on Rails, which simplifies web application development with conventions over configuration.</li>
        <li><span class="font-semibold">Highly Flexible:</span> Ruby allows developers to write programs that are easy to understand and extend.</li>
        <li><span class="font-semibold">Productivity:</span> Ruby's concise code allows developers to accomplish more with fewer lines, speeding up the development process.</li>
        <li><span class="font-semibold">Active Community:</span> A vibrant community contributes to a rich ecosystem of gems and libraries, facilitating rapid development and problem-solving.</li>
      </ul>

      <!-- Applications of Ruby -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Applications of Ruby</h2>
      <p class="text-base md:text-lg mb-4">
        Ruby can be used in various fields, including:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Web Applications with Ruby on Rails:</span> Building robust and scalable web applications efficiently.</li>
        <li><span class="font-semibold">Prototyping and MVP Development:</span> Quickly developing minimum viable products to test ideas and gather feedback.</li>
        <li><span class="font-semibold">Automation Scripts:</span> Writing scripts to automate repetitive tasks and improve workflow efficiency.</li>
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
