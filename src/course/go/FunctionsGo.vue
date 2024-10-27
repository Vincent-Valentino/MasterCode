<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-600">Go Functions</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Functions are fundamental building blocks in Go, enabling developers to encapsulate reusable logic, manage complexity, and promote code readability and maintainability. This section delves into the various aspects of functions in Go, including declaration, parameters, return values, variadic functions, multiple return values, recursion, anonymous functions, and higher-order functions. Through detailed explanations and practical insights, you'll gain a solid understanding of how to effectively utilize functions to build robust and efficient Go applications.
      </p>

      <!-- Function Declaration -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Function Declaration</h2>
      <p class="text-base md:text-lg mb-4">
        In Go, functions are declared using the <code>func</code> keyword, followed by the function name, parameters, return types, and the function body. Functions can be standalone or associated with a type (methods), providing flexibility in how they are utilized within your applications.
      </p>

      <!-- Key Components of Function Declaration -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Key Components of Function Declaration</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Keyword:</strong> <code>func</code> is used to declare a function.
        </li>
        <li>
          <strong>Name:</strong> The function name follows the <code>func</code> keyword and should be descriptive of its purpose.
        </li>
        <li>
          <strong>Parameters:</strong> Defined within parentheses, specifying the input types the function accepts.
        </li>
        <li>
          <strong>Return Types:</strong> Optional, specified after the parameters to indicate what the function returns.
        </li>
        <li>
          <strong>Function Body:</strong> Enclosed in curly braces <code>{}</code>, containing the executable code.
        </li>
      </ul>

      <!-- Example 1: Basic Function Declaration -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 1: Basic Function Declaration</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates the declaration and usage of a simple function that greets a user.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// greet prints a greeting message to the user.
func greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}

func main() {
    greet("Alice")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Hello, Alice!
</code></pre>

      <!-- Example 2: Function with Parameters and Return Values -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 2: Function with Parameters and Return Values</h3>
      <p class="text-base md:text-lg mb-4">
        Functions can accept multiple parameters and return values, allowing for more complex operations and error handling.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// divide takes two integers and returns the result of division and an error if division by zero occurs.
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Result: 5
</code></pre>

      <!-- Omitting Type in Parameters -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Omitting Type in Parameters</h2>
      <p class="text-base md:text-lg mb-4">
        When multiple parameters share the same type, Go allows you to omit the type for all but the last parameter. This makes the code more concise and improves readability.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Before: Each parameter has its own type
func add(a int, b int) int {
    return a + b
}

// After: Omit the type for all but the last parameter
func add(a, b int) int {
    return a + b
}
</code>
      </pre>

      <!-- Example 3: Variadic Functions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Variadic Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Variadic functions accept a variable number of arguments, allowing more flexibility in how functions are called. This is achieved using the <code>...</code> syntax before the type of the final parameter.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Use Case:</strong> Calculating the sum of an arbitrary number of integers without predefined limits.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// sum calculates the total of a variable number of integers.
func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

func main() {
    fmt.Println(sum(1, 2, 3, 4))        // Output: 10
    fmt.Println(sum(10, 20))            // Output: 30
    fmt.Println(sum())                   // Output: 0
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
10
30
0
</code></pre>

      <!-- Example 4: Multiple Return Values -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Multiple Return Values</h2>
      <p class="text-base md:text-lg mb-4">
        Go functions can return multiple values, which is particularly useful for returning results along with error information. This feature simplifies error handling and enhances function flexibility.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Use Case:</strong> Performing operations that might fail and require error reporting alongside successful results.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// getUser retrieves a user's name and age, returning an error if the user is not found.
func getUser(id int) (string, int, error) {
    users := map[int]struct {
        Name string
        Age  int
    }{
        1: {"Alice", 30},
        2: {"Bob", 25},
    }

    user, exists := users[id]
    if !exists {
        return "", 0, fmt.Errorf("user with ID %d not found", id)
    }
    return user.Name, user.Age, nil
}

func main() {
    name, age, err := getUser(1)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Printf("Name: %s, Age: %d\n", name, age)
    }

    name, age, err = getUser(3)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Printf("Name: %s, Age: %d\n", name, age)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Name: Alice, Age: 30
Error: user with ID 3 not found
</code></pre>

      <!-- Example 5: Named Return Values -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Named Return Values</h2>
      <p class="text-base md:text-lg mb-4">
        Named return values allow you to specify the names of the return variables in the function signature. This can improve code readability and enable the use of <code>naked returns</code>, where you can return values without explicitly specifying them.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Use Case:</strong> When functions have multiple return values that benefit from descriptive names for clarity.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// calculate computes the sum and product of two integers using named return values.
func calculate(a, b int) (sum int, product int) {
    sum = a + b
    product = a * b
    return // Naked return
}

func main() {
    sum, product := calculate(3, 4)
    fmt.Printf("Sum: %d, Product: %d\n", sum, product)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Sum: 7, Product: 12
</code></pre>

      <!-- Example 6: Recursion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Recursion</h2>
      <p class="text-base md:text-lg mb-4">
        Recursion is a technique where a function calls itself to solve a problem by breaking it down into smaller, more manageable sub-problems. It is useful for tasks like calculating factorials, traversing data structures, and more.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Use Case:</strong> Implementing algorithms that naturally fit a divide-and-conquer approach, such as tree traversals or mathematical computations.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// factorial calculates the factorial of a number using recursion.
func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n-1)
}

func main() {
    fmt.Println("Factorial of 5:", factorial(5)) // Output: 120
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Factorial of 5: 120
</code></pre>

      <!-- Example 7: Anonymous Functions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Anonymous Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Anonymous functions, also known as function literals, are functions without a name. They can be defined and invoked immediately or assigned to variables for later use. Anonymous functions are useful for encapsulating functionality without polluting the global namespace.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Use Case:</strong> Creating short-lived functions for specific tasks, such as passing functions as arguments to higher-order functions or defining callbacks.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Anonymous function example: Immediate invocation
func main() {
    func(message string) {
        fmt.Println(message)
    }("Hello from anonymous function!")

    // Assigning anonymous function to a variable
    greet := func(name string) {
        fmt.Printf("Hi, %s!\n", name)
    }
    greet("Bob")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Hello from anonymous function!
Hi, Bob!
</code></pre>

      <!-- Example 8: Higher-Order Functions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Higher-Order Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Higher-order functions are functions that take other functions as parameters or return functions. They are powerful tools for creating flexible and reusable code, enabling patterns like map, filter, and reduce.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Use Case:</strong> Implementing operations that can be abstracted into reusable components, such as processing collections of data with varying operations.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// higherOrderExample demonstrates a higher-order function that applies a transformation to each element.
func applyTransform(nums []int, transform func(int) int) []int {
    transformed := make([]int, len(nums))
    for i, num := range nums {
        transformed[i] = transform(num)
    }
    return transformed
}

func main() {
    nums := []int{1, 2, 3, 4, 5}
    squares := applyTransform(nums, func(n int) int {
        return n * n
    })
    fmt.Println("Squares:", squares)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Squares: [1 4 9 16 25]
</code></pre>

      <!-- Example 9: Closures -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Closures</h2>
      <p class="text-base md:text-lg mb-4">
        A closure is a function value that references variables from outside its body. The function may access and assign to the referenced variables, effectively binding the function to the surrounding state.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Use Case:</strong> Creating function factories, implementing memoization, or maintaining state across function calls without using global variables.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// closureExample demonstrates a closure that maintains a counter.
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}

func main() {
    c := counter()
    fmt.Println(c()) // Output: 1
    fmt.Println(c()) // Output: 2
    fmt.Println(c()) // Output: 3
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
1
2
3
</code></pre>

      <!-- Comparison Tables -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Comparison Tables</h3>

      <!-- Table: Function Types -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Table: Function Types</h4>
      <table class="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
        <tr>
          <th class="px-4 py-2 border">Function Type</th>
          <th class="px-4 py-2 border">Description</th>
          <th class="px-4 py-2 border">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="px-4 py-2 border">Basic Function</td>
          <td class="px-4 py-2 border">A function that performs a specific task with defined parameters and return types.</td>
          <td class="px-4 py-2 border">Greeting users, performing calculations.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Variadic Function</td>
          <td class="px-4 py-2 border">Accepts a variable number of arguments.</td>
          <td class="px-4 py-2 border">Summing numbers, logging messages.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Higher-Order Function</td>
          <td class="px-4 py-2 border">Takes functions as parameters or returns functions.</td>
          <td class="px-4 py-2 border">Implementing map, filter, reduce operations.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Anonymous Function</td>
          <td class="px-4 py-2 border">Functions without a name, often used as callbacks.</td>
          <td class="px-4 py-2 border">Event handlers, immediate execution.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Closure</td>
          <td class="px-4 py-2 border">Functions that capture and retain access to variables from their enclosing scope.</td>
          <td class="px-4 py-2 border">Maintaining state, creating function factories.</td>
        </tr>
        </tbody>
      </table>

      <!-- Table: Recursion vs Iteration -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Table: Recursion vs Iteration</h4>
      <table class="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
        <tr>
          <th class="px-4 py-2 border">Aspect</th>
          <th class="px-4 py-2 border">Recursion</th>
          <th class="px-4 py-2 border">Iteration</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="px-4 py-2 border">Definition</td>
          <td class="px-4 py-2 border">Function calls itself to solve smaller instances of the problem.</td>
          <td class="px-4 py-2 border">Uses loops to repeat a set of instructions until a condition is met.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Use Cases</td>
          <td class="px-4 py-2 border">Tree traversals, factorial calculation, Fibonacci sequence.</td>
          <td class="px-4 py-2 border">Iterating over arrays, processing lists, performing repeated calculations.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Memory Usage</td>
          <td class="px-4 py-2 border">Consumes more memory due to multiple function calls and stack frames.</td>
          <td class="px-4 py-2 border">More memory-efficient as it uses a single loop without additional stack frames.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Performance</td>
          <td class="px-4 py-2 border">Generally slower due to overhead of multiple function calls.</td>
          <td class="px-4 py-2 border">Faster as it avoids the overhead associated with recursion.</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Readability</td>
          <td class="px-4 py-2 border">Can be more intuitive for problems that are naturally recursive.</td>
          <td class="px-4 py-2 border">Easier to understand for simple repetitive tasks.</td>
        </tr>
        </tbody>
      </table>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when working with functions in Go can lead to more readable, efficient, and maintainable code. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Descriptive Function Names:</strong> Use clear and descriptive names that convey the purpose of the function.
        </li>
        <li>
          <strong>Single Responsibility Principle:</strong> Each function should perform a single, well-defined task.
        </li>
        <li>
          <strong>Limit Function Length:</strong> Keep functions concise to enhance readability and maintainability.
        </li>
        <li>
          <strong>Handle Errors Gracefully:</strong> Use multiple return values to handle errors effectively and avoid panics.
        </li>
        <li>
          <strong>Avoid Deep Nesting:</strong> Reduce complexity by breaking down large functions into smaller, modular ones.
        </li>
        <li>
          <strong>Use Comments Sparingly:</strong> Write self-explanatory code, and use comments to clarify complex logic when necessary.
        </li>
        <li>
          <strong>Leverage Higher-Order Functions:</strong> Utilize higher-order functions for more flexible and reusable code patterns.
        </li>
      </ul>

      <!-- Example: Refactoring Large Functions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Refactoring Large Function</h3>
      <p class="text-base md:text-lg mb-4">
        Large functions can be refactored into smaller, more manageable functions to improve readability and maintainability. This approach promotes cleaner code and easier debugging.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Before Refactoring:</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<pre><code>
// Before Refactoring: Large Function
package main

import "fmt"

func processUserData(users []string) {
    for _, user := range users {
        // Validate user
        if len(user) < 3 {
            fmt.Printf("Invalid user: %s\n", user)
            continue
        }

        // Process user
        fmt.Printf("Processing user: %s\n", user)

        // Simulate further processing
        fmt.Printf("User %s processed successfully.\n", user)
    }
}

func main() {
    users := []string{"Al", "Bob", "Cathy", "D", "Eve"}
    processUserData(users)
}
</code></pre>
      </div>

      <p class="text-base md:text-lg mb-6">
        <strong>After Refactoring:</strong>
      </p>
      <div class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<pre><code>
// After Refactoring: Modular Functions
package main

import "fmt"

// validateUser checks if the username meets the criteria
func validateUser(user string) bool {
    if len(user) < 3 {
        fmt.Printf("Invalid user: %s\n", user)
        return false
    }
    return true
}

// processUser handles the processing of a valid user
func processUser(user string) {
    fmt.Printf("Processing user: %s\n", user)
    // Simulate further processing
    fmt.Printf("User %s processed successfully.\n", user)
}

// processUserData orchestrates the user data processing
func processUserData(users []string) {
    for _, user := range users {
        if !validateUser(user) {
            continue
        }
        processUser(user)
    }
}

func main() {
    users := []string{"Al", "Bob", "Cathy", "D", "Eve"}
    processUserData(users)
}
</code></pre>
      </div>

      <p class="text-base md:text-lg mb-6">
        <strong>Benefits:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Readability:</strong> Separating concerns into different functions makes the code easier to understand.
        </li>
        <li>
          <strong>Maintainability:</strong> Easier to manage and modify individual parts without affecting the entire loop structure.
        </li>
        <li>
          <strong>Reusability:</strong> Functions can be reused in different parts of the program if needed.
        </li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering functions in Go is essential for building efficient, readable, and maintainable applications. By understanding the various aspects of functions—including declaration, parameters, return values, variadic functions, multiple return values, recursion, anonymous functions, higher-order functions, and closures—you can leverage Go's capabilities to write clean and effective code.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Key Takeaways:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          Functions encapsulate reusable logic, promoting code modularity and maintainability.
        </li>
        <li>
          Go's support for multiple return values simplifies error handling and enhances function flexibility.
        </li>
        <li>
          Anonymous and higher-order functions enable powerful patterns like closures, memoization, and concurrent processing.
        </li>
        <li>
          Recursion and memoization techniques can optimize performance for complex problems.
        </li>
        <li>
          Comparing Go's functions with those in other languages highlights its strengths in simplicity, type safety, and concurrency.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        By adhering to best practices and leveraging Go's function features, developers can create robust and efficient applications that are easy to understand and maintain. Continue exploring more advanced topics, such as interface-based functions and concurrency patterns, to further enhance your Go programming skills.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of functions in Go and explore more advanced concepts, consider the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://golang.org/doc/effective_go.html#functions" class="text-blue-600 hover:underline">Effective Go: Functions</a>
        </li>
        <li>
          <a href="https://tour.golang.org/moretypes/10" class="text-blue-600 hover:underline">A Tour of Go: Functions</a>
        </li>
        <li>
          <a href="https://www.golang-book.com/books/intro/11" class="text-blue-600 hover:underline">The Go Programming Language Book</a>
        </li>
        <li>
          <a href="https://golangbot.com/functions/" class="text-blue-600 hover:underline">GolangBot: Functions</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoFunctions',
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
  overflow-x: auto; /* Adds horizontal scroll for long code lines */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #e2e8f0;
}

th {
  background-color: #f7fafc;
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }

  th, td {
    padding: 0.5rem;
  }
}
</style>
