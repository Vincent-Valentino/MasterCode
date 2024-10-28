<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/icons/ruby.svg" alt="Ruby Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Ruby Basics: Variables and Data Types</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">

      <!-- Course Overview -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Course Overview</h2>
        <p class="text-base md:text-lg mb-4">
          In this module, you'll delve into the foundational elements of Ruby programming: variables and data types. Understanding these concepts is crucial as they form the building blocks for writing effective and efficient Ruby code. This course will provide you with a comprehensive understanding of how to declare and use variables, as well as the various data types Ruby offers.
        </p>
      </section>

      <!-- Understanding Variables in Ruby -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Variables in Ruby</h2>
        <p class="text-base md:text-lg mb-4">
          Variables are essential for storing and manipulating data in Ruby programs. They act as containers that hold information which can be referenced and altered throughout your code. Ruby's flexible variable naming conventions and dynamic typing make it a powerful language for developers.
        </p>

        <!-- Variables Table -->
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Variable Type</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Example</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Local Variables</td>
            <td class="py-2 px-4 border-b">Variables defined within a method or block and accessible only within that scope.</td>
            <td class="py-2 px-4 border-b"><code>name = "Alice"</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Instance Variables</td>
            <td class="py-2 px-4 border-b">Variables that belong to an instance of a class, accessible across methods within the class.</td>
            <td class="py-2 px-4 border-b"><code>@age = 30</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Class Variables</td>
            <td class="py-2 px-4 border-b">Variables shared among all instances of a class.</td>
            <td class="py-2 px-4 border-b"><code>@@count = 100</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Global Variables</td>
            <td class="py-2 px-4 border-b">Variables accessible from anywhere in the Ruby program.</td>
            <td class="py-2 px-4 border-b"><code>$global_var = "Accessible Everywhere"</code></td>
          </tr>
          </tbody>
        </table>
      </section>

      <!-- Exploring Data Types in Ruby -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Exploring Data Types in Ruby</h2>
        <p class="text-base md:text-lg mb-4">
          Ruby is a dynamically typed language, which means that variables can hold objects of any type without explicit type declarations. This flexibility allows for more readable and concise code. Below is an overview of the primary data types you'll encounter in Ruby.
        </p>

        <!-- Data Types Table -->
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Data Type</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Example</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Integer</td>
            <td class="py-2 px-4 border-b">Whole numbers without a decimal point.</td>
            <td class="py-2 px-4 border-b"><code>age = 25</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Float</td>
            <td class="py-2 px-4 border-b">Numbers with decimal points.</td>
            <td class="py-2 px-4 border-b"><code>price = 19.99</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">String</td>
            <td class="py-2 px-4 border-b">Sequences of characters used to represent text.</td>
            <td class="py-2 px-4 border-b"><code>greeting = "Hello, Ruby!"</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Symbol</td>
            <td class="py-2 px-4 border-b">Lightweight, immutable identifiers often used as keys in hashes.</td>
            <td class="py-2 px-4 border-b"><code>:status</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Boolean</td>
            <td class="py-2 px-4 border-b">Represents true or false values.</td>
            <td class="py-2 px-4 border-b"><code>is_active = true</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Array</td>
            <td class="py-2 px-4 border-b">Ordered collections of objects.</td>
            <td class="py-2 px-4 border-b"><code>fruits = ["apple", "banana", "cherry"]</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Hash</td>
            <td class="py-2 px-4 border-b">Collections of key-value pairs.</td>
            <td class="py-2 px-4 border-b"><code>user = { name: "Alice", age: 30 }</code></td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">NilClass</td>
            <td class="py-2 px-4 border-b">Represents the absence of a value or "nothing".</td>
            <td class="py-2 px-4 border-b"><code>address = nil</code></td>
          </tr>
          </tbody>
        </table>
      </section>

      <!-- Best Practices for Variables and Data Types -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Variables and Data Types</h2>
        <p class="text-base md:text-lg mb-4">
          Adhering to best practices ensures that your Ruby code is clean, maintainable, and efficient. Here are some key guidelines to follow when working with variables and data types in Ruby:
        </p>

        <!-- Best Practices Table -->
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Practice</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Meaningful Variable Names</td>
            <td class="py-2 px-4 border-b">Use descriptive names that convey the purpose of the variable, enhancing code readability.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Consistent Naming Conventions</td>
            <td class="py-2 px-4 border-b">Adopt a consistent style (e.g., snake_case) for variable names throughout your codebase.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Minimize Global Variables</td>
            <td class="py-2 px-4 border-b">Limit the use of global variables to avoid unexpected side effects and maintain encapsulation.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Leverage Ruby's Dynamic Typing</td>
            <td class="py-2 px-4 border-b">Take advantage of Ruby's ability to handle different data types seamlessly, but remain mindful of type consistency.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Use Symbols for Immutable Data</td>
            <td class="py-2 px-4 border-b">Prefer symbols over strings for keys in hashes and other immutable data to optimize performance.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Initialize Variables Appropriately</td>
            <td class="py-2 px-4 border-b">Ensure variables are initialized with meaningful default values to prevent unexpected behavior.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Avoid Magic Numbers</td>
            <td class="py-2 px-4 border-b">Replace unexplained numerical literals with named constants to improve code clarity.</td>
          </tr>
          </tbody>
        </table>
      </section>

      <!-- Additional Resources -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Additional Resources</h2>
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Resource</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Link</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Ruby Official Documentation</td>
            <td class="py-2 px-4 border-b">Comprehensive guides and references for Ruby programming.</td>
            <td class="py-2 px-4 border-b">
              <a href="https://www.ruby-lang.org/en/documentation/" class="text-blue-600 underline" target="_blank">Visit</a>
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">RubyMonk</td>
            <td class="py-2 px-4 border-b">Interactive Ruby tutorials and exercises.</td>
            <td class="py-2 px-4 border-b">
              <a href="https://rubymonk.com/" class="text-blue-600 underline" target="_blank">Visit</a>
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Stack Overflow Ruby Tag</td>
            <td class="py-2 px-4 border-b">Community-driven Q&A for Ruby developers.</td>
            <td class="py-2 px-4 border-b">
              <a href="https://stackoverflow.com/questions/tagged/ruby" class="text-blue-600 underline" target="_blank">Visit</a>
            </td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Learn Ruby the Hard Way</td>
            <td class="py-2 px-4 border-b">A popular book for learning Ruby through practical exercises.</td>
            <td class="py-2 px-4 border-b">
              <a href="https://learnrubythehardway.org/book/" class="text-blue-600 underline" target="_blank">Visit</a>
            </td>
          </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "RubyBasicsVariablesDataTypes",
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

h2, p, h1, h3, h4, td, th {
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f3f4f6;
}

tr:nth-child(even) {
  background-color: #f9fafb;
}

code {
  background-color: #f3f4f6;
  padding: 2px 4px;
  border-radius: 4px;
  font-family: "JetBrains Mono", monospace;
}
</style>
