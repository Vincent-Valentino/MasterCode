<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-600">Working with Packages in Go</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Packages are the fundamental building blocks in Go, enabling code organization, reuse, and modularity. Understanding how to create, organize, and manage packages is essential for building scalable and maintainable Go applications. This module explores Go's package system in-depth, covering creation and organization, importing packages, exported vs. unexported identifiers, package initialization, dependency management with `go.mod`, third-party packages, and best practices for package design. Additionally, comparisons with package systems in Python, C#, Java, and JavaScript provide a broader perspective on Go's design choices.
      </p>

      <!-- Creating and Organizing Packages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Creating and Organizing Packages</h2>
      <p class="text-base md:text-lg mb-4">
        In Go, a package is a collection of related Go files that are compiled together. Organizing your code into packages promotes modularity and reusability.
      </p>

      <!-- Example: Creating a Simple Package -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Creating a Simple Package</h3>
      <p class="text-base md:text-lg mb-4">
        Here's how to create a simple package named <code>mathutils</code> with a function to add two numbers.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- mathutils/mathutils.go --&gt;
package mathutils

// Add sums two integers.
func Add(a, b int) int {
    return a + b
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Package Declaration:</strong> The <code>package mathutils</code> declaration defines the package name.</li>
        <li><strong>Exported Function:</strong> The <code>Add</code> function starts with an uppercase letter, making it exported and accessible from other packages.</li>
      </ul>

      <!-- Importing Packages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Importing Packages</h2>
      <p class="text-base md:text-lg mb-4">
        To use functions from other packages, you need to import them. Go provides a straightforward import mechanism.
      </p>

      <!-- Example: Importing and Using a Package -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Importing and Using a Package</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates how to import the <code>mathutils</code> package and use its <code>Add</code> function.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- main.go --&gt;
package main

import (
    "fmt"
    "path/to/your/project/mathutils"
)

func main() {
    sum := mathutils.Add(5, 7)
    fmt.Println("Sum:", sum)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Sum: 12
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Import Statement:</strong> Imports the <code>mathutils</code> package using its path.</li>
        <li><strong>Using the Function:</strong> Calls the exported <code>Add</code> function from the <code>mathutils</code> package.</li>
      </ul>

      <!-- Exported vs. Unexported Identifiers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Exported vs. Unexported Identifiers</h2>
      <p class="text-base md:text-lg mb-4">
        In Go, the visibility of identifiers (variables, functions, types) is determined by their case. Identifiers starting with an uppercase letter are exported and accessible from other packages, while those starting with a lowercase letter are unexported and private to the package.
      </p>

      <!-- Table: Exported vs. Unexported Identifiers -->
      <table class="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
        <tr>
          <th class="px-4 py-2 border">Identifier</th>
          <th class="px-4 py-2 border">Visibility</th>
          <th class="px-4 py-2 border">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="px-4 py-2 border">Start with Uppercase</td>
          <td class="px-4 py-2 border">Exported</td>
          <td class="px-4 py-2 border"><code>ExportedFunc</code></td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Start with Lowercase</td>
          <td class="px-4 py-2 border">Unexported</td>
          <td class="px-4 py-2 border"><code>unexportedFunc</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Package Initialization (`init` Functions) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Package Initialization (`init` Functions)</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>init</code> function is a special function in Go that is automatically executed when the package is imported. It is used for package-level initialization tasks.
      </p>

      <!-- Example: Using `init` Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using <code>init</code> Function</h3>
      <p class="text-base md:text-lg mb-4">
        The following example shows how to use the <code>init</code> function to initialize package-level variables.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- config/config.go --&gt;
package config

import "fmt"

var Config string

func init() {
    Config = "Initialized Config"
    fmt.Println("Config package initialized.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Config package initialized.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Initialization:</strong> The <code>init</code> function sets the <code>Config</code> variable and prints a message when the package is imported.</li>
        <li><strong>Automatic Execution:</strong> The <code>init</code> function runs automatically without being explicitly called.</li>
      </ul>

      <!-- Dependency Management with `go.mod` -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Dependency Management with <code>go.mod</code></h2>
      <p class="text-base md:text-lg mb-4">
        Go uses modules to manage dependencies. The <code>go.mod</code> file defines the module's path and its dependencies, ensuring consistent builds and reproducible environments.
      </p>

      <!-- Example: Initializing a Module -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Initializing a Module</h3>
      <p class="text-base md:text-lg mb-4">
        Initialize a new module using the <code>go mod init</code> command.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Command to initialize a module
go mod init github.com/yourusername/yourproject
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Module Path:</strong> Defines the module's import path, typically matching the repository location.</li>
        <li><strong>Dependency Tracking:</strong> Automatically manages dependencies as you add imports to your code.</li>
      </ul>

      <!-- Third-Party Packages and Module Proxy -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Third-Party Packages and Module Proxy</h2>
      <p class="text-base md:text-lg mb-4">
        Go allows the use of third-party packages to extend functionality. The module proxy system ensures secure and reliable retrieval of dependencies.
      </p>

      <!-- Example: Importing a Third-Party Package -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Importing a Third-Party Package</h3>
      <p class="text-base md:text-lg mb-4">
        Importing the popular <code>gorilla/mux</code> package for HTTP request routing.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
package main

import (
    "fmt"
    "github.com/gorilla/mux"
)

func main() {
    r := mux.NewRouter()
    fmt.Println("Router initialized:", r)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Import Statement:</strong> Imports the <code>gorilla/mux</code> package.</li>
        <li><strong>Using the Package:</strong> Initializes a new router instance from the <code>mux</code> package.</li>
        <li><strong>Dependency Management:</strong> The <code>go.mod</code> file automatically tracks this dependency when you build or run the project.</li>
      </ul>

      <!-- Best Practices for Package Design and Organization -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Package Design and Organization</h2>
      <p class="text-base md:text-lg mb-4">
        Organizing your code effectively is crucial for maintainability and scalability. Here are some best practices to consider when designing and organizing packages in Go.
      </p>

      <!-- Table: Best Practices for Package Design -->
      <table class="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
        <tr>
          <th class="px-4 py-2 border">Best Practice</th>
          <th class="px-4 py-2 border">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="px-4 py-2 border">Single Responsibility</td>
          <td class="px-4 py-2 border">Each package should have a clear and single purpose.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Consistent Naming</td>
          <td class="px-4 py-2 border">Use descriptive and consistent names for packages and identifiers.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Avoid Cyclic Dependencies</td>
          <td class="px-4 py-2 border">Ensure packages do not depend on each other in a cyclic manner.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Group Related Code</td>
          <td class="px-4 py-2 border">Organize related functions, types, and variables within the same package.</td>
        </tr>
        </tbody>
      </table>

      <!-- Further Explanations -->
      <p class="text-base md:text-lg mb-6">
        Adhering to these best practices ensures that your packages remain organized, easy to navigate, and maintainable as your project grows.
      </p>

      <!-- Best Practices Summary -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Error Handling Best Practices Summary</h2>
      <p class="text-base md:text-lg mb-4">
        Mastering error handling in Go involves understanding the language's idiomatic approaches and applying best practices to write clean, maintainable, and reliable code. Here's a summary of the key best practices discussed:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Explicit Error Checks:</strong> Always check for errors immediately after function calls that can return them.</li>
        <li><strong>Provide Context:</strong> When returning errors, include contextual information to aid in debugging.</li>
        <li><strong>Use Custom Error Types:</strong> Define custom error types to carry additional information and enable type-specific error handling.</li>
        <li><strong>Leverage Error Wrapping:</strong> Use Go's error wrapping features (`%w`) to maintain error chains and provide comprehensive error messages.</li>
        <li><strong>Handle Specific Errors:</strong> Use `errors.Is` and `errors.As` to handle specific error types and implement conditional logic based on error types.</li>
        <li><strong>Avoid Panics for Recoverable Errors:</strong> Reserve `panic` and `recover` for truly exceptional situations and use error returns for expected error conditions.</li>
        <li><strong>Aggregate Multiple Errors:</strong> When dealing with multiple operations that can fail, consider aggregating errors for comprehensive reporting.</li>
      </ul>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of working with packages in Go, consider exploring the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://golang.org/doc/effective_go.html#packages" class="text-blue-600 hover:underline">Effective Go: Packages</a>
        </li>
        <li>
          <a href="https://blog.golang.org/package-management" class="text-blue-600 hover:underline">Go Blog: Package Management</a>
        </li>
        <li>
          <a href="https://golang.org/pkg/" class="text-blue-600 hover:underline">Go Packages Documentation</a>
        </li>
        <li>
          <a href="https://www.golang-book.com/books/intro/14" class="text-blue-600 hover:underline">The Go Programming Language Book: Packages</a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/9210528/go-how-do-i-create-a-new-package" class="text-blue-600 hover:underline">Stack Overflow: How do I create a new package in Go?</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoWorkingWithPackages',
  data() {
    return {
      // Additional data properties can be added here if needed
    };
  },
};
</script>

<style>
pre {
  white-space: pre-wrap;
  overflow-x: auto;
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem;
  }
}
</style>
