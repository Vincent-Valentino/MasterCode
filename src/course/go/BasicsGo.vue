<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-600">Variables and Data Types</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Understanding the basics of Go is essential for building robust and efficient applications. This section delves into variables, data types, and fundamental concepts that differentiate Go from other programming languages. By mastering these basics, you'll be well-equipped to write clean and effective Go code.
      </p>

      <!-- Variables in Go -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Variables in Go</h2>
      <p class="text-base md:text-lg mb-4">
        Variables are fundamental building blocks in any programming language, allowing you to store and manipulate data. Go offers flexible ways to declare variables, ensuring both simplicity and type safety. Understanding how to effectively use variables is crucial for managing data within your applications.
      </p>

      <!-- Variables Comparison Table -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Declaring Variables: var vs. :=</h3>
      <p class="text-base md:text-lg mb-4">
        Go provides two primary methods for declaring variables: using the <code>var</code> keyword and the shorthand <code>:=</code> operator. Each method serves different purposes and offers unique advantages.
      </p>

      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Declaration Method</th>
          <th class="px-4 py-2">Syntax Example</th>
          <th class="px-4 py-2">Use Case &amp; Benefits</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Using <code>var</code> Keyword</td>
          <td class="border px-4 py-2">
            <code>var age int = 30</code><br/>
            <code>var firstName, lastName string = "John", "Doe"</code>
          </td>
          <td class="border px-4 py-2">
            - Explicitly declares the type of the variable.<br/>
            - Enhances code readability by making types clear.<br/>
            - Useful for package-level variables.
          </td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Using Shorthand <code>:=</code></td>
          <td class="border px-4 py-2">
            <code>age := 30</code><br/>
            <code>firstName, lastName := "John", "Doe"</code>
          </td>
          <td class="border px-4 py-2">
            - Concise syntax for declaring and initializing variables.<br/>
            - Type is inferred based on the assigned value.<br/>
            - Can only be used within functions.
          </td>
        </tr>
        </tbody>
      </table>

      <p class="text-base md:text-lg mb-6">
        The <code>var</code> keyword is ideal when you want to explicitly define the type of a variable, enhancing clarity, especially in larger codebases or when dealing with package-level variables. On the other hand, the shorthand <code>:=</code> operator offers a more concise way to declare and initialize variables within functions, leveraging Go's type inference capabilities to reduce boilerplate code.
      </p>

      <!-- Data Types in Go -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Data Types in Go</h2>
      <p class="text-base md:text-lg mb-4">
        Go is a statically typed language, meaning that variable types are explicitly declared and checked at compile-time. Understanding the various data types available in Go is crucial for effective programming, as it influences how data is stored, accessed, and manipulated within your applications.
      </p>

      <!-- Basic Types -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Basic Types</h3>
      <p class="text-base md:text-lg mb-4">
        Go provides a range of basic types that cater to different kinds of data. These types form the foundation upon which more complex data structures are built.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Integers:</strong> Represent whole numbers. Go supports various integer sizes (e.g., <code>int</code>, <code>int8</code>, <code>uint</code>), allowing developers to choose the most appropriate type based on the required range and memory considerations.</li>
        <li><strong>Floating-Point Numbers:</strong> Used for decimal numbers, offering precision in calculations. Go provides <code>float32</code> and <code>float64</code> types.</li>
        <li><strong>Booleans:</strong> Represent true or false values, essential for controlling program flow and making decisions.</li>
        <li><strong>Strings:</strong> Handle sequences of characters, enabling the storage and manipulation of text data.</li>
      </ul>

      <!-- Composite Types -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Composite Types</h3>
      <p class="text-base md:text-lg mb-4">
        Beyond basic types, Go offers composite types that allow for the creation of more complex and structured data. These types are essential for organizing and managing related data efficiently.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Arrays:</strong> Fixed-size sequences of elements of the same type, useful for storing collections of data with a known size.</li>
        <li><strong>Slices:</strong> Dynamic-sized, flexible views into arrays, allowing for more efficient and flexible data manipulation without the constraints of fixed sizes.</li>
        <li><strong>Maps:</strong> Collections of key-value pairs, providing efficient lookups and associations between related pieces of data.</li>
        <li><strong>Structs:</strong> Group related fields together, enabling the creation of complex data structures that model real-world entities.</li>
      </ul>

      <!-- Example: Structs -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Structs</h3>
      <p class="text-base md:text-lg mb-4">
        Structs allow you to define complex data types by grouping together related fields. They are similar to classes in other languages but are more lightweight and do not support inheritance. Structs are instrumental in modeling real-world entities and organizing related data cohesively.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>// Define a struct
type Person struct {
    FirstName string
    LastName  string
    Age       int
}

// Create an instance of Person
func main() {
    var p Person
    p.FirstName = "Jane"
    p.LastName = "Doe"
    p.Age = 28

    fmt.Println(p)
}</code></pre>

      <!-- Main Function and Package Declaration -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Main Function and Package Declaration</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>main</code> function and <code>package main</code> declaration are integral parts of a Go program, especially when creating executable applications. They define the entry point and the scope of your application.
      </p>

      <!-- Package Declaration -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Package Declaration</h3>
      <p class="text-base md:text-lg mb-4">
        Every Go file starts with a <code>package</code> declaration. The <code>main</code> package is special; it defines a standalone executable program. Packages help organize code, promote reusability, and manage dependencies effectively.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>package main</code></pre>

      <!-- Importing Packages -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Importing Packages</h3>
      <p class="text-base md:text-lg mb-4">
        Go uses the <code>import</code> statement to include packages that provide additional functionality. Packages can be part of the standard library or third-party modules. Importing packages allows you to leverage existing code, fostering efficiency and reducing redundancy.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>import "fmt"</code></pre>

      <p class="text-base md:text-lg mb-6">
        You can import multiple packages using parentheses:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>import (
    "fmt"
    "math"
)</code></pre>

      <!-- Main Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">The <code>main</code> Function</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>main</code> function is the entry point of a Go program. When you run your Go application, the execution starts from the <code>main</code> function. It's responsible for orchestrating the flow of your application and initiating key processes.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
func main() {
    fmt.Println("Welcome to Go Basics!")
}
</code>
      </pre>

      <!-- Example: Complete Go Program -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Complete Go Program</h3>
      <p class="text-base md:text-lg mb-4">
        Here's a complete Go program that demonstrates variable declarations, data types, and the main function. This example integrates the concepts discussed, providing a cohesive understanding of how they work together.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>// Package declaration
package main

// Importing the fmt package
import "fmt"

// Struct definition
type Person struct {
    FirstName string
    LastName  string
    Age       int
}

// Main function
func main() {
    // Variable declarations
    var age int = 30
    firstName, lastName := "John", "Doe"

    // Creating an instance of Person
    p := Person{
        FirstName: firstName,
        LastName:  lastName,
        Age:       age,
    }

    // Printing the Person struct
    fmt.Println(p)
}</code></pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>{John Doe 30}</code></pre>

      <!-- Differences with Other Languages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Differences with Other Languages</h2>
      <p class="text-base md:text-lg mb-4">
        Go introduces several unique features and design philosophies that set it apart from other programming languages. Understanding these differences can help developers appreciate Go's strengths and decide when to use it over other languages.
      </p>

      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Static Typing vs. Dynamic Typing:</strong> Unlike dynamically typed languages like Python, Go is statically typed, meaning type checking occurs at compile-time. This leads to fewer runtime errors and better performance.
        </li>
        <li>
          <strong>Concurrency Model:</strong> Go's built-in support for concurrency through goroutines and channels is more straightforward compared to threading models in languages like Java or C++.
        </li>
        <li>
          <strong>Simplicity and Minimalism:</strong> Go emphasizes simplicity and minimalism in its syntax and features, avoiding complex constructs found in languages like C++ or Java.
        </li>
        <li>
          <strong>Garbage Collection:</strong> Go includes garbage collection out of the box, unlike languages like C and C++ where manual memory management is required.
        </li>
        <li>
          <strong>Package Management:</strong> Go's approach to package management and dependency handling is different from languages like JavaScript (npm) or Ruby (Bundler), focusing on simplicity and reproducibility.
        </li>
      </ul>

      <!-- Example Comparison: Variable Declaration -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example Comparison: Variable Declaration</h3>
      <p class="text-base md:text-lg mb-4">
        Here's how variable declarations differ between Go and Python. This comparison highlights Go's static typing and explicit declarations versus Python's dynamic typing.
      </p>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Go:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>// Using var keyword
var age int = 25

// Using shorthand
name := "Alice"</code></pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Python:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code># Dynamic typing
age = 25
name = "Alice"</code></pre>

      <p class="text-base md:text-lg mb-6">
        In Go, the type of the variable is explicitly declared or inferred, whereas Python determines the type at runtime. This explicit typing in Go enhances code reliability and performance.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering the basics of Go, including variables, data types, and fundamental program structure, is crucial for building efficient and reliable applications. Go's emphasis on simplicity, performance, and concurrency makes it a powerful tool for modern software development. By understanding these core concepts, developers can leverage Go's strengths to create scalable and maintainable codebases.
      </p>
      <p class="text-base md:text-lg mb-6">
        As you continue exploring Go, you'll discover more advanced features and best practices that will further enhance your programming skills and enable you to tackle complex projects with confidence.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoBasics',
  data() {
    return {
      // Additional data properties can be added here if needed
    };
  },
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for long lines */
  overflow-x: auto;      /* Adds horizontal scroll for long code lines */
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}

h2, p , h1, h3, h4{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}

</style>
