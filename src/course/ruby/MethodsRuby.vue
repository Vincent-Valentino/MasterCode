<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/icons/ruby.svg" alt="Ruby Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Ruby Basics: Methods</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">

      <!-- Course Overview -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Course Overview</h2>
        <p class="text-base md:text-lg mb-4">
          In this module, you'll explore the concept of methods in Ruby, which are fundamental building blocks for organizing and reusing code. Understanding how to define, invoke, and manage methods will enhance your ability to write clean, efficient, and maintainable Ruby programs. This course provides a comprehensive overview of methods, their types, parameters, return values, and best practices for effective method usage.
        </p>
      </section>

      <!-- Understanding Methods in Ruby -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Methods in Ruby</h2>
        <p class="text-base md:text-lg mb-4">
          Methods in Ruby are reusable blocks of code designed to perform specific tasks. They help in breaking down complex problems into manageable pieces, promoting code reusability and modularity. By encapsulating functionality within methods, you can write cleaner and more organized code.
        </p>

        <!-- Methods Table -->
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Aspect</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Definition</td>
            <td class="py-2 px-4 border-b">A named sequence of statements that perform a specific task.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Invocation</td>
            <td class="py-2 px-4 border-b">Calling the method by its name to execute its code.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Parameters</td>
            <td class="py-2 px-4 border-b">Variables passed to methods to provide input values.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Return Values</td>
            <td class="py-2 px-4 border-b">The result produced by the method after execution.</td>
          </tr>
          </tbody>
        </table>
      </section>

      <!-- Types of Methods in Ruby -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Types of Methods in Ruby</h2>

        <!-- Method Types Table -->
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Method Type</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Instance Methods</td>
            <td class="py-2 px-4 border-b">Defined within a class and operate on instances of that class.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Class Methods</td>
            <td class="py-2 px-4 border-b">Associated with the class itself rather than any particular instance.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Singleton Methods</td>
            <td class="py-2 px-4 border-b">Defined for a single object, allowing unique behavior for that object.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Private Methods</td>
            <td class="py-2 px-4 border-b">Methods that cannot be called with an explicit receiver, used internally within the class.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Protected Methods</td>
            <td class="py-2 px-4 border-b">Similar to private methods but can be called by other instances of the same class.</td>
          </tr>
          </tbody>
        </table>
      </section>

      <!-- Method Parameters and Arguments -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Method Parameters and Arguments</h2>
        <p class="text-base md:text-lg mb-4">
          Parameters and arguments are essential for passing data to methods. Parameters act as placeholders in method definitions, while arguments are the actual values passed when invoking methods. Ruby supports various types of parameters, including required, optional, and keyword parameters, providing flexibility in how methods receive input.
        </p>

        <!-- Parameters Table -->
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Parameter Type</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Required Parameters</td>
            <td class="py-2 px-4 border-b">Must be provided when the method is called.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Optional Parameters</td>
            <td class="py-2 px-4 border-b">Have default values and can be omitted when calling the method.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Keyword Parameters</td>
            <td class="py-2 px-4 border-b">Named parameters that improve readability and allow arguments to be passed in any order.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Variable-Length Parameters</td>
            <td class="py-2 px-4 border-b">Allow methods to accept an arbitrary number of arguments using the splat (`*`) operator.</td>
          </tr>
          </tbody>
        </table>
      </section>

      <!-- Return Values in Methods -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Return Values in Methods</h2>
        <p class="text-base md:text-lg mb-4">
          Methods in Ruby return the value of the last evaluated expression by default. However, you can explicitly specify a return value using the `return` keyword. Understanding how return values work is crucial for effective method design and for chaining methods together.
        </p>

        <!-- Return Values Table -->
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
          <tr>
            <th class="py-2 px-4 bg-gray-100 border-b">Aspect</th>
            <th class="py-2 px-4 bg-gray-100 border-b">Description</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Implicit Return</td>
            <td class="py-2 px-4 border-b">The last evaluated expression is automatically returned without using the `return` keyword.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Explicit Return</td>
            <td class="py-2 px-4 border-b">Using the `return` keyword to specify the value to be returned immediately.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Multiple Return Points</td>
            <td class="py-2 px-4 border-b">Allows methods to exit and return values at various points based on conditions.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Returning Multiple Values</td>
            <td class="py-2 px-4 border-b">Ruby allows methods to return multiple values as an array, which can be destructured upon assignment.</td>
          </tr>
          </tbody>
        </table>
      </section>

      <!-- Best Practices for Methods -->
      <section class="mb-6">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Methods</h2>
        <p class="text-base md:text-lg mb-4">
          Writing effective methods is essential for creating maintainable and efficient Ruby code. Adhering to best practices ensures that your methods are clear, reusable, and easy to understand. Here are some key guidelines to follow when working with methods in Ruby:
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
            <td class="py-2 px-4 border-b">Single Responsibility Principle</td>
            <td class="py-2 px-4 border-b">Ensure each method performs a single, well-defined task.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Descriptive Naming</td>
            <td class="py-2 px-4 border-b">Use clear and descriptive names that convey the purpose of the method.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Avoid Side Effects</td>
            <td class="py-2 px-4 border-b">Design methods to minimize unintended changes to the program state.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Use Parameters Wisely</td>
            <td class="py-2 px-4 border-b">Limit the number of parameters to improve method clarity and usability.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Consistent Return Values</td>
            <td class="py-2 px-4 border-b">Ensure methods return values consistently, making them predictable and reliable.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Document Methods</td>
            <td class="py-2 px-4 border-b">Provide clear documentation and comments to explain the purpose and usage of methods.</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Leverage Ruby's Features</td>
            <td class="py-2 px-4 border-b">Utilize Ruby's syntactic sugar and built-in methods to write more efficient code.</td>
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
  name: "RubyBasicsMethods",
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
