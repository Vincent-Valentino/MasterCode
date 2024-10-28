<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/icons/ruby.svg" alt="Ruby Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Ruby Basics: Control Structures</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">

      <!-- Course Overview -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Course Overview</h2>
        <p class="text-base md:text-lg mb-4">
          In this module, you'll explore the fundamental control structures in Ruby that allow you to dictate the flow of your programs. Control structures are essential for making decisions, iterating over data, and managing the execution of code based on specific conditions. This course provides a comprehensive understanding of conditionals, loops, and other control mechanisms in Ruby.
        </p>
      </section>

      <!-- Understanding Control Structures -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Control Structures</h2>
        <p class="text-base md:text-lg mb-4">
          Control structures enable you to control the execution flow of your Ruby programs. They allow you to perform different actions based on varying conditions and to repeat tasks efficiently. Mastering control structures is crucial for writing dynamic and responsive Ruby applications.
        </p>
      </section>

      <!-- Types of Control Structures -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Types of Control Structures</h2>

        <!-- Control Structures Table -->
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Control Structure</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Purpose</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Conditionals</td>
            <td class="py-2 px-4 border-b">Decision Making</td>
            <td class="py-2 px-4 border-b">Allow the program to execute different code blocks based on boolean conditions.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Loops</td>
            <td class="py-2 px-4 border-b">Iteration</td>
            <td class="py-2 px-4 border-b">Enable the program to repeat code blocks multiple times based on specific criteria.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Exception Handling</td>
            <td class="py-2 px-4 border-b">Error Management</td>
            <td class="py-2 px-4 border-b">Provide mechanisms to handle errors and exceptions gracefully.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Case Statements</td>
            <td class="py-2 px-4 border-b">Multiple Conditions</td>
            <td class="py-2 px-4 border-b">Offer a more readable way to handle multiple conditional branches compared to multiple if-else statements.</td>
          </tr>
          </tbody>
        </table>
      </section>

      <!-- Detailed Control Structures -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Detailed Control Structures</h2>

        <!-- Conditionals -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Conditionals</h3>
        <p class="text-base md:text-lg mb-4">
          Conditionals allow your program to make decisions based on boolean expressions. The primary conditional statements in Ruby include `if`, `elsif`, `else`, and `unless`. These statements enable your code to execute specific blocks based on whether certain conditions are met.
        </p>
        <!-- Conditionals Table -->
        <table class="min-w-full bg-white border border-gray-200 mb-4">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Conditional Statement</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Usage</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">if</td>
            <td class="py-2 px-4 border-b">Basic Condition</td>
            <td class="py-2 px-4 border-b">Executes a block of code if the condition is true.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">elsif</td>
            <td class="py-2 px-4 border-b">Additional Condition</td>
            <td class="py-2 px-4 border-b">Provides an additional condition if the previous `if` or `elsif` was false.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">else</td>
            <td class="py-2 px-4 border-b">Default Action</td>
            <td class="py-2 px-4 border-b">Executes a block of code if all previous conditions are false.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">unless</td>
            <td class="py-2 px-4 border-b">Negative Condition</td>
            <td class="py-2 px-4 border-b">Executes a block of code only if the condition is false.</td>
          </tr>
          </tbody>
        </table>

        <!-- Loops -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Loops</h3>
        <p class="text-base md:text-lg mb-4">
          Loops allow your program to execute a block of code repeatedly based on certain conditions. Ruby offers several looping mechanisms, each suited for different scenarios. Understanding when and how to use each type of loop is essential for writing efficient and effective code.
        </p>
        <!-- Loops Table -->
        <table class="min-w-full bg-white border border-gray-200 mb-4">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Loop Type</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Usage</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">while</td>
            <td class="py-2 px-4 border-b">Pre-Condition Loop</td>
            <td class="py-2 px-4 border-b">Executes the block as long as the condition remains true.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">until</td>
            <td class="py-2 px-4 border-b">Post-Condition Loop</td>
            <td class="py-2 px-4 border-b">Executes the block until the condition becomes true.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">for</td>
            <td class="py-2 px-4 border-b">Iterative Loop</td>
            <td class="py-2 px-4 border-b">Iterates over a range or collection, executing the block for each element.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">each</td>
            <td class="py-2 px-4 border-b">Iterator Method</td>
            <td class="py-2 px-4 border-b">A method available on enumerable objects that yields each element to a block.</td>
          </tr>
          </tbody>
        </table>

        <!-- Case Statements -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Case Statements</h3>
        <p class="text-base md:text-lg mb-4">
          Case statements provide a streamlined way to handle multiple conditional branches. They enhance code readability, especially when dealing with numerous conditions, by replacing complex if-elsif-else chains with a more organized structure.
        </p>
        <!-- Case Statements Table -->
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Component</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">when</td>
            <td class="py-2 px-4 border-b">Specifies a condition to match against the case expression.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">else</td>
            <td class="py-2 px-4 border-b">Defines the default block to execute if no `when` conditions are met.</td>
          </tr>
          </tbody>
        </table>
      </section>

      <!-- Best Practices for Control Structures -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Control Structures</h2>
        <p class="text-base md:text-lg mb-4">
          Implementing control structures effectively ensures that your Ruby code remains clean, efficient, and maintainable. Adhering to best practices helps prevent common pitfalls and enhances the overall quality of your programs.
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
            <td class="py-2 px-4 border-b">Prefer `each` Over Traditional Loops</td>
            <td class="py-2 px-4 border-b">Using iterators like `each` leads to more readable and idiomatic Ruby code compared to traditional `for` loops.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Use Meaningful Conditions</td>
            <td class="py-2 px-4 border-b">Ensure that conditions in control structures are clear and convey the intended logic.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Avoid Deep Nesting</td>
            <td class="py-2 px-4 border-b">Keep control structures as flat as possible to enhance readability and maintainability.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Leverage `case` for Multiple Conditions</td>
            <td class="py-2 px-4 border-b">Use `case` statements to handle scenarios with numerous conditional branches for better organization.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Handle Exceptions Gracefully</td>
            <td class="py-2 px-4 border-b">Implement robust exception handling to manage unexpected errors without crashing the program.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Use Guard Clauses</td>
            <td class="py-2 px-4 border-b">Employ guard clauses to handle edge cases upfront, reducing the need for nested conditionals.</td>
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
            <td class="py-2 px-4 border-b">Learn Ruby the Hard Way</td>
            <td class="py-2 px-4 border-b">A popular book for learning Ruby through practical exercises.</td>
            <td class="py-2 px-4 border-b">
              <a href="https://learnrubythehardway.org/book/" class="text-blue-600 underline" target="_blank">Visit</a>
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
            <td class="py-2 px-4 border-b">Codecademy Ruby Course</td>
            <td class="py-2 px-4 border-b">Interactive Ruby course with hands-on exercises.</td>
            <td class="py-2 px-4 border-b">
              <a href="https://www.codecademy.com/learn/learn-ruby" class="text-blue-600 underline" target="_blank">Visit</a>
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
  name: "RubyBasicsControlStructures",
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

h2, h3, p, td, th {
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
