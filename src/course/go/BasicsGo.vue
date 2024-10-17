<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-emerald-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-teal-500">Go Basics</h1>
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
        Variables are fundamental building blocks in any programming language, allowing you to store and manipulate data. Go offers flexible ways to declare variables, ensuring both simplicity and type safety.
      </p>

      <!-- Declaring Variables -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Declaring Variables</h3>
      <p class="text-base md:text-lg mb-4">
        In Go, you can declare variables using the <code>var</code> keyword or the shorthand := operator. Each method has its own use cases and benefits.
      </p>

      <p class="text-base md:text-lg mb-4">
        <strong>Using the <code>var</code> Keyword:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Declare a variable with a specified type
var age int = 30

// Declare multiple variables
var (
    firstName string = "John"
    lastName  string = "Doe"
)
</code>
      </pre>

      <p class="text-base md:text-lg mb-4">
        <strong>Using Shorthand (:=):</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Shorthand declaration and initialization
age := 30
firstName, lastName := "John", "Doe"
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        The shorthand := can only be used inside functions and infers the type based on the assigned value, making it concise for variable declarations.
      </p>

      <!-- Data Types in Go -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Data Types in Go</h2>
      <p class="text-base md:text-lg mb-4">
        Go is a statically typed language, meaning that variable types are explicitly declared and checked at compile-time. Understanding the various data types available in Go is crucial for effective programming.
      </p>

      <!-- Basic Types -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Basic Types</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Integers:</strong> <code>int</code>, <code>int8</code>, <code>int16</code>, <code>int32</code>, <code>int64</code>, <code>uint</code>, etc.</li>
        <li><strong>Floating-Point Numbers:</strong> <code>float32</code>, <code>float64</code></li>
        <li><strong>Booleans:</strong> <code>bool</code> (true or false)</li>
        <li><strong>Strings:</strong> <code>string</code> (sequence of characters)</li>
      </ul>

      <!-- Composite Types -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Composite Types</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Arrays:</strong> Fixed-size sequences of elements of the same type.</li>
        <li><strong>Slices:</strong> Dynamic-sized, flexible views into arrays.</li>
        <li><strong>Maps:</strong> Key-value pairs with unique keys.</li>
        <li><strong>Structs:</strong> Collections of fields grouped together.</li>
      </ul>

      <!-- Example: Structs -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Structs</h3>
      <p class="text-base md:text-lg mb-4">
        Structs allow you to define complex data types by grouping together fields. They are similar to classes in other languages but do not support inheritance.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Define a struct
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
}
</code>
      </pre>

      <!-- Main Function and Package Declaration -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Main Function and Package Declaration</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>main</code> function and <code>package main</code> declaration are integral parts of a Go program, especially when creating executable applications.
      </p>

      <!-- Package Declaration -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Package Declaration</h3>
      <p class="text-base md:text-lg mb-4">
        Every Go file starts with a <code>package</code> declaration. The <code>main</code> package is special; it defines a standalone executable program.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>package main</code>
      </pre>

      <!-- Importing Packages -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Importing Packages</h3>
      <p class="text-base md:text-lg mb-4">
        Go uses the <code>import</code> statement to include packages that provide additional functionality. Packages can be part of the standard library or third-party modules.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>import "fmt"</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        You can import multiple packages using parentheses:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>import (
    "fmt"
    "math"
)</code>
      </pre>

      <!-- Main Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">The <code>main</code> Function</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>main</code> function is the entry point of a Go program. When you run your Go application, the execution starts from the <code>main</code> function.
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
        Here's a complete Go program that demonstrates variable declarations, data types, and the main function.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Package declaration
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
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
{John Doe 30}
</code>
      </pre>

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
        Here's how variable declarations differ between Go and Python.
      </p>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Go:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Using var keyword
var age int = 25

// Using shorthand
name := "Alice"
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Python:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code># Dynamic typing
age = 25
name = "Alice"
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        In Go, the type of the variable is explicitly declared or inferred, whereas Python determines the type at runtime.
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
