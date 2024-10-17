<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-500 rounded-t-xl p-4">
      <img src="/icons/go.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Go Functions</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Functions are fundamental building blocks in Go, enabling developers to encapsulate reusable logic, manage complexity, and promote code readability and maintainability. This section delves into the various aspects of functions in Go, including declaration, parameters, return values, variadic functions, multiple return values, recursion, anonymous functions, and higher-order functions. Through detailed explanations and practical examples, you'll gain a solid understanding of how to effectively utilize functions to build robust and efficient Go applications.
      </p>

      <!-- Function Declaration -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Function Declaration</h2>
      <p class="text-base md:text-lg mb-4">
        In Go, functions are declared using the <code>func</code> keyword, followed by the function name, parameters, return types, and the function body. Functions can be standalone or associated with a type (methods).
      </p>

      <!-- Basic Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Basic Function</h3>
      <p class="text-base md:text-lg mb-4">
        Here's a simple example of a Go function that adds two integers and returns the result:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Function to add two integers
package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func main() {
    sum := add(5, 3)
    fmt.Println("Sum:", sum)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Sum: 8
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>func add(a int, b int) int:</strong> Declares a function named <code>add</code> that takes two integer parameters and returns an integer.
        </li>
        <li>
          <strong>return a + b:</strong> Returns the sum of <code>a</code> and <code>b</code>.
        </li>
        <li>
          <strong>main Function:</strong> Calls the <code>add</code> function with arguments <code>5</code> and <code>3</code>, and prints the result.
        </li>
      </ul>

      <!-- Omitting Type in Parameters -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Omitting Type in Parameters</h3>
      <p class="text-base md:text-lg mb-4">
        When multiple parameters share the same type, you can omit the type for all but the last parameter to make the code more concise:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Concise parameter type declaration
package main

import "fmt"

func multiply(a, b int) int {
    return a * b
}

func main() {
    product := multiply(4, 6)
    fmt.Println("Product:", product)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Product: 24
</code></pre>

      <!-- Variadic Functions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Variadic Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Variadic functions accept a variable number of arguments. In Go, this is achieved using the <code>...</code> syntax before the type of the final parameter.
      </p>
      
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Sum of Multiple Integers</h3>
      <p class="text-base md:text-lg mb-4">
        The following function calculates the sum of an arbitrary number of integers:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Variadic function to sum integers
package main

import "fmt"

func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

func main() {
    result1 := sum(1, 2, 3)
    result2 := sum(4, 5, 6, 7, 8)
    fmt.Println("Sum1:", result1)
    fmt.Println("Sum2:", result2)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Sum1: 6
Sum2: 30
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>numbers ...int:</strong> Indicates that the function <code>sum</code> can accept any number of integer arguments.
        </li>
        <li>
          <strong>for _, num := range numbers:</strong> Iterates over each integer in the <code>numbers</code> slice and adds it to <code>total</code>.
        </li>
        <li>
          <strong>Function Calls:</strong> Demonstrates calling the variadic function with different numbers of arguments.
        </li>
      </ul>

      <!-- Multiple Return Values -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Multiple Return Values</h2>
      <p class="text-base md:text-lg mb-4">
        Go functions can return multiple values, which is particularly useful for returning results along with error information.
      </p>
      
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Division with Error Handling</h3>
      <p class="text-base md:text-lg mb-4">
        The following function performs division and returns both the result and an error if division by zero is attempted:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Division function with multiple return values
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
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

    result, err = divide(10, 0)
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
Error: division by zero
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Multiple Return Types:</strong> The <code>divide</code> function returns a <code>float64</code> and an <code>error</code>.
        </li>
        <li>
          <strong>Error Handling:</strong> If division by zero is detected, the function returns an error using <code>errors.New</code>.
        </li>
        <li>
          <strong>Function Calls:</strong> The main function demonstrates handling both successful and erroneous function calls using multiple return values.
        </li>
      </ul>

      <!-- Named Return Values -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Named Return Values</h2>
      <p class="text-base md:text-lg mb-4">
        Go allows you to name the return values of a function, which can make the code more readable and enable the use of <code>naked returns</code> within the function.
      </p>
      
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Named Return Values</h3>
      <p class="text-base md:text-lg mb-4">
        The following function calculates the area and perimeter of a rectangle using named return values:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Function with named return values
package main

import "fmt"

func rectangleDimensions(length, width float64) (area float64, perimeter float64) {
    area = length * width
    perimeter = 2 * (length + width)
    return // Naked return
}

func main() {
    a, p := rectangleDimensions(5, 3)
    fmt.Printf("Area: %.2f, Perimeter: %.2f\n", a, p)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Area: 15.00, Perimeter: 16.00
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Named Return Values:</strong> The function signature includes named return variables <code>area</code> and <code>perimeter</code>.
        </li>
        <li>
          <strong>Naked Return:</strong> The <code>return</code> statement without arguments returns the named variables.
        </li>
        <li>
          <strong>Readability:</strong> Named return values can make the function's purpose clearer.
        </li>
      </ul>

      <!-- Recursion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Recursion</h2>
      <p class="text-base md:text-lg mb-4">
        Recursion is a technique where a function calls itself to solve a problem by breaking it down into smaller, more manageable sub-problems. Go supports recursion, and it's often used for tasks like calculating factorials, traversing data structures, and more.
      </p>
      
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Factorial Calculation</h3>
      <p class="text-base md:text-lg mb-4">
        The following recursive function calculates the factorial of a non-negative integer:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Recursive function to calculate factorial
package main

import "fmt"

func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n-1)
}

func main() {
    num := 5
    result := factorial(num)
    fmt.Printf("Factorial of %d is %d\n", num, result)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Factorial of 5 is 120
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Base Case:</strong> When <code>n == 0</code>, the function returns <code>1</code> to terminate the recursion.
        </li>
        <li>
          <strong>Recursive Case:</strong> The function calls itself with <code>n-1</code> and multiplies the result by <code>n</code>.
        </li>
        <li>
          <strong>Function Call Flow:</strong> For <code>n = 5</code>, the calls stack as <code>factorial(5)</code>, <code>factorial(4)</code>, ..., until <code>factorial(0)</code>.
        </li>
      </ul>

      <!-- Anonymous Functions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Anonymous Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Anonymous functions, also known as function literals, are functions without a name. They can be defined and invoked immediately or assigned to variables for later use. Anonymous functions are useful for encapsulating functionality without polluting the global namespace.
      </p>
      
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Immediately Invoked Function Expression (IIFE)</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates an anonymous function that is defined and invoked immediately:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Immediately Invoked Function Expression (IIFE)
package main

import "fmt"

func main() {
    func(message string) {
        fmt.Println(message)
    }("Hello from anonymous function!")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Hello from anonymous function!
</code></pre>

      <!-- Assigning Anonymous Function to Variable -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Assigning Anonymous Function to Variable</h3>
      <p class="text-base md:text-lg mb-4">
        Anonymous functions can be assigned to variables and invoked as needed:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Assigning anonymous function to a variable
package main

import "fmt"

func main() {
    greet := func(name string) {
        fmt.Printf("Hello, %s!\n", name)
    }

    greet("Alice")
    greet("Bob")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Hello, Alice!
Hello, Bob!
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Anonymous Function Assignment:</strong> The anonymous function is assigned to the variable <code>greet</code>.
        </li>
        <li>
          <strong>Function Invocation:</strong> The <code>greet</code> function is called with different arguments, demonstrating reusability.
        </li>
      </ul>

      <!-- Higher-Order Functions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Higher-Order Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Higher-order functions are functions that take other functions as parameters or return functions. They are powerful tools for creating flexible and reusable code.
      </p>
      
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Function as Parameter</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates a higher-order function that accepts another function as a parameter:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Higher-order function example
package main

import "fmt"

// applyOperation takes two integers and a function, then applies the function to the integers
func applyOperation(a, b int, op func(int, int) int) int {
    return op(a, b)
}

func main() {
    add := func(x, y int) int {
        return x + y
    }

    multiply := func(x, y int) int {
        return x * y
    }

    sum := applyOperation(3, 4, add)
    product := applyOperation(3, 4, multiply)

    fmt.Println("Sum:", sum)
    fmt.Println("Product:", product)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Sum: 7
Product: 12
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>applyOperation Function:</strong> Accepts two integers and a function <code>op</code> that takes two integers and returns an integer.
        </li>
        <li>
          <strong>Anonymous Functions:</strong> Defines <code>add</code> and <code>multiply</code> as anonymous functions assigned to variables.
        </li>
        <li>
          <strong>Function Passing:</strong> Passes the <code>add</code> and <code>multiply</code> functions to <code>applyOperation</code> to perform different operations.
        </li>
      </ul>

      <!-- Example: Function Returning Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Function Returning Function</h3>
      <p class="text-base md:text-lg mb-4">
        Functions can also return other functions, enabling the creation of function factories:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Function returning another function
package main

import "fmt"

// multiplier returns a function that multiplies its input by the given factor
func multiplier(factor int) func(int) int {
    return func(x int) int {
        return x * factor
    }
}

func main() {
    double := multiplier(2)
    triple := multiplier(3)

    fmt.Println("Double of 5:", double(5))
    fmt.Println("Triple of 5:", triple(5))
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Double of 5: 10
Triple of 5: 15
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>multiplier Function:</strong> Takes an integer <code>factor</code> and returns an anonymous function that multiplies its input by <code>factor</code>.
        </li>
        <li>
          <strong>Function Creation:</strong> Creates <code>double</code> and <code>triple</code> functions by passing <code>2</code> and <code>3</code> as factors, respectively.
        </li>
        <li>
          <strong>Function Invocation:</strong> Calls <code>double(5)</code> and <code>triple(5)</code> to demonstrate the returned functions.
        </li>
      </ul>

      <!-- Closures -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Closures</h2>
      <p class="text-base md:text-lg mb-4">
        A closure is a function value that references variables from outside its body. The function may access and assign to the referenced variables; in this sense, the function is "bound" to the variables.
      </p>
      
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Counter using Closure</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates a simple counter using a closure:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Counter using closure
package main

import "fmt"

// counter returns a closure that increments and returns a count
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

    d := counter()
    fmt.Println(d()) // Output: 1
    fmt.Println(c()) // Output: 4
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
1
4
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>counter Function:</strong> Initializes a local variable <code>count</code> and returns an anonymous function that increments and returns <code>count</code>.
        </li>
        <li>
          <strong>Closure Behavior:</strong> The returned function retains access to the <code>count</code> variable even after <code>counter</code> has finished executing.
        </li>
        <li>
          <strong>Independent Counters:</strong> Creating multiple counters like <code>c</code> and <code>d</code> maintains separate <code>count</code> states.
        </li>
      </ul>

      <!-- Higher-Order Functions and Functional Programming -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Higher-Order Functions and Functional Programming</h2>
      <p class="text-base md:text-lg mb-4">
        Go supports functional programming paradigms through higher-order functions, enabling developers to write more expressive and concise code. By leveraging functions as first-class citizens, Go facilitates patterns such as map, filter, and reduce.
      </p>
      
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Implementing Map Function</h3>
      <p class="text-base md:text-lg mb-4">
        The following example implements a generic <code>map</code> function that applies a given function to each element of a slice:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Implementing map function
package main

import "fmt"

// mapInts applies a function to each element of an integer slice
func mapInts(numbers []int, f func(int) int) []int {
    result := make([]int, len(numbers))
    for i, num := range numbers {
        result[i] = f(num)
    }
    return result
}

func main() {
    nums := []int{1, 2, 3, 4, 5}

    // Square each number
    squares := mapInts(nums, func(n int) int {
        return n * n
    })
    fmt.Println("Squares:", squares)

    // Double each number
    doubles := mapInts(nums, func(n int) int {
        return n * 2
    })
    fmt.Println("Doubles:", doubles)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Squares: [1 4 9 16 25]
Doubles: [2 4 6 8 10]
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>mapInts Function:</strong> Takes a slice of integers and a function <code>f</code>, applies <code>f</code> to each element, and returns a new slice with the results.
        </li>
        <li>
          <strong>Anonymous Functions:</strong> Passes different anonymous functions to <code>mapInts</code> to perform squaring and doubling operations.
        </li>
        <li>
          <strong>Reusability:</strong> The <code>mapInts</code> function can be reused with any function that matches its signature, promoting code reuse.
        </li>
      </ul>

      <!-- Example: Implementing Filter Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Implementing Filter Function</h3>
      <p class="text-base md:text-lg mb-4">
        Similarly, you can implement a <code>filter</code> function to select elements that satisfy a given condition:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Implementing filter function
package main

import "fmt"

// filterInts filters elements based on a predicate function
func filterInts(numbers []int, predicate func(int) bool) []int {
    var result []int
    for _, num := range numbers {
        if predicate(num) {
            result = append(result, num)
        }
    }
    return result
}

func main() {
    nums := []int{1, 2, 3, 4, 5, 6}

    // Filter even numbers
    evens := filterInts(nums, func(n int) bool {
        return n%2 == 0
    })
    fmt.Println("Even Numbers:", evens)

    // Filter numbers greater than 3
    greaterThanThree := filterInts(nums, func(n int) bool {
        return n > 3
    })
    fmt.Println("Numbers > 3:", greaterThanThree)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Even Numbers: [2 4 6]
Numbers > 3: [4 5 6]
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>filterInts Function:</strong> Takes a slice of integers and a predicate function, filters the elements based on the predicate, and returns a new slice.
        </li>
        <li>
          <strong>Predicate Functions:</strong> Passes anonymous functions that define the filtering criteria (e.g., even numbers, numbers greater than 3).
        </li>
        <li>
          <strong>Resulting Slices:</strong> Demonstrates the flexibility of higher-order functions in implementing common operations.
        </li>
      </ul>

      <!-- Closures with Higher-Order Functions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Closures with Higher-Order Functions</h3>
      <p class="text-base md:text-lg mb-4">
        Combining closures with higher-order functions can create powerful and flexible utilities. For example, creating a memoization function to cache results of expensive function calls.
      </p>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">Example: Memoization</h4>
      <p class="text-base md:text-lg mb-4">
        Memoization caches the results of function calls based on input parameters to optimize performance:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Memoization example for Fibonacci sequence
package main

import "fmt"

// memoizeFibonacci returns a memoized version of the Fibonacci function
func memoizeFibonacci() func(int) int {
    cache := map[int]int{}

    var fibonacci func(int) int
    fibonacci = func(n int) int {
        if n <= 1 {
            return n
        }
        if val, exists := cache[n]; exists {
            return val
        }
        cache[n] = fibonacci(n-1) + fibonacci(n-2)
        return cache[n]
    }

    return fibonacci
}

func main() {
    fib := memoizeFibonacci()

    for i := 0; i <= 10; i++ {
        fmt.Printf("Fibonacci(%d) = %d\n", i, fib(i))
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Fibonacci(0) = 0
Fibonacci(1) = 1
Fibonacci(2) = 1
Fibonacci(3) = 2
Fibonacci(4) = 3
Fibonacci(5) = 5
Fibonacci(6) = 8
Fibonacci(7) = 13
Fibonacci(8) = 21
Fibonacci(9) = 34
Fibonacci(10) = 55
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>memoizeFibonacci Function:</strong> Returns a closure that calculates Fibonacci numbers while caching previously computed values.
        </li>
        <li>
          <strong>Cache Mechanism:</strong> Uses a map <code>cache</code> to store results of Fibonacci calculations, avoiding redundant computations.
        </li>
        <li>
          <strong>Closure Usage:</strong> The returned <code>fibonacci</code> function retains access to the <code>cache</code>, enabling memoization.
        </li>
      </ul>

      <!-- Comparison with Other Languages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Comparison with Other Languages</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding how functions in Go compare with those in other programming languages can provide valuable insights, especially for developers transitioning to Go or working in multi-language environments.
      </p>
      
      <!-- Function Declaration Comparison -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Function Declaration Comparison</h3>
      <p class="text-base md:text-lg mb-4">
        Here's how function declarations in Go compare with Python and Java:
      </p>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">Go:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Go function declaration
package main

import "fmt"

func greet(name string) string {
    return "Hello, " + name + "!"
}

func main() {
    message := greet("Alice")
    fmt.Println(message)
}
</code>
      </pre>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">Python:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
# Python function declaration
def greet(name):
    return f"Hello, {name}!"

def main():
    message = greet("Alice")
    print(message)

if __name__ == "__main__":
    main()
</code>
      </pre>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">Java:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Java method declaration
public class Main {
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }

    public static void main(String[] args) {
        String message = greet("Alice");
        System.out.println(message);
    }
}
</code>
      </pre>
      
      <p class="text-base md:text-lg mb-6">
        <strong>Key Differences:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Syntax:</strong> Go uses the <code>func</code> keyword, Python uses <code>def</code>, and Java uses access modifiers like <code>public static</code>.
        </li>
        <li>
          <strong>Return Types:</strong> Go requires explicit return types, Python infers them, and Java requires explicit return types with class-based structure.
        </li>
        <li>
          <strong>String Interpolation:</strong> Go concatenates strings with <code>+</code>, Python uses f-strings, and Java uses <code>+</code> for concatenation.
        </li>
      </ul>

      <!-- Recursion Comparison -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Recursion Comparison</h3>
      <p class="text-base md:text-lg mb-4">
        Comparing recursion in Go with C++ and JavaScript:
      </p>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">Go:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Go recursive function
package main

import "fmt"

func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n-1)
}

func main() {
    fmt.Println("Factorial of 5:", factorial(5))
}
</code>
      </pre>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">C++:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// C++ recursive function
#include &lt;iostream&gt;

int factorial(int n) {
    if(n == 0)
        return 1;
    return n * factorial(n - 1);
}

int main() {
    std::cout &lt;&lt; "Factorial of 5: " &lt;&lt; factorial(5) &lt;&lt; std::endl;
    return 0;
}
</code>
      </pre>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">JavaScript:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// JavaScript recursive function
function factorial(n) {
    if(n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));
</code>
      </pre>
      
      <p class="text-base md:text-lg mb-6">
        <strong>Key Differences:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Function Declaration:</strong> Go and JavaScript allow function declarations without specifying class structures, whereas C++ follows a similar procedural approach.
        </li>
        <li>
          <strong>Syntax Variations:</strong> Minor syntax differences exist, such as the use of semicolons in JavaScript and C++, which are optional in Go.
        </li>
        <li>
          <strong>Type System:</strong> Go and C++ are statically typed, requiring explicit type declarations, while JavaScript is dynamically typed.
        </li>
      </ul>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when working with functions in Go can lead to more readable, efficient, and maintainable code. Here are some recommended practices:
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

      <!-- Example: Refactoring Large Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Refactoring Large Function</h3>
      <p class="text-base md:text-lg mb-4">
        Large functions can be refactored into smaller, more manageable functions to improve readability and maintainability.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
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
</code>
      </pre>
      
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
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
</code>
      </pre>
      
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Invalid user: Al
Processing user: Bob
User Bob processed successfully.
Processing user: Cathy
User Cathy processed successfully.
Invalid user: D
Processing user: Eve
User Eve processed successfully.
</code></pre>
      
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>validateUser Function:</strong> Checks if the username is at least 3 characters long.
        </li>
        <li>
          <strong>processUser Function:</strong> Handles the processing logic for a valid user.
        </li>
        <li>
          <strong>processUserData Function:</strong> Iterates over the users and delegates tasks to <code>validateUser</code> and <code>processUser</code>.
        </li>
        <li>
          <strong>Benefits:</strong> Enhanced readability, easier maintenance, and better separation of concerns.
        </li>
      </ul>

      <!-- Anonymous Functions and Goroutines -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Anonymous Functions and Goroutines</h2>
      <p class="text-base md:text-lg mb-4">
        Anonymous functions can be used in conjunction with goroutines to perform concurrent tasks without the need for named functions.
      </p>
      
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Concurrent Greetings</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates using anonymous functions with goroutines to print greetings concurrently:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Anonymous functions with goroutines
package main

import (
    "fmt"
    "time"
)

func main() {
    names := []string{"Alice", "Bob", "Cathy", "David"}

    for _, name := range names {
        go func(n string) {
            fmt.Printf("Hello, %s!\n", n)
        }(name)
    }

    // Wait to allow goroutines to finish
    time.Sleep(1 * time.Second)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        The output order may vary due to concurrent execution:
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Hello, Alice!
Hello, Bob!
Hello, Cathy!
Hello, David!
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Goroutines:</strong> Launches a separate goroutine for each anonymous function to print a greeting.
        </li>
        <li>
          <strong>Anonymous Function Parameters:</strong> Passes <code>name</code> as a parameter to avoid closure capture issues.
        </li>
        <li>
          <strong>Sleep:</strong> Uses <code>time.Sleep</code> to allow goroutines to complete before the program exits.
        </li>
      </ul>

      <!-- Higher-Order Functions in Error Handling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Higher-Order Functions in Error Handling</h3>
      <p class="text-base md:text-lg mb-4">
        Higher-order functions can streamline error handling by encapsulating common error-checking patterns.
      </p>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">Example: Error Wrapper</h4>
      <p class="text-base md:text-lg mb-4">
        The following example shows a higher-order function that wraps error handling logic:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Higher-order function for error handling
package main

import (
    "errors"
    "fmt"
)

// handleError wraps a function that returns an error and handles it
func handleError(f func() error) {
    if err := f(); err != nil {
        fmt.Println("Error:", err)
    }
}

func main() {
    // Function that succeeds
    successFunc := func() error {
        fmt.Println("Operation succeeded.")
        return nil
    }

    // Function that fails
    failFunc := func() error {
        return errors.New("operation failed")
    }

    handleError(successFunc) // Output: Operation succeeded.
    handleError(failFunc)    // Output: Error: operation failed
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        ```bash
        Operation succeeded.
        Error: operation failed
        ```
      </p>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>handleError Function:</strong> Accepts a function <code>f</code> that returns an <code>error</code>, executes it, and handles the error if present.
        </li>
        <li>
          <strong>Success and Failure Functions:</strong> Defines <code>successFunc</code> and <code>failFunc</code> to demonstrate successful and failed operations.
        </li>
        <li>
          <strong>Error Handling:</strong> Simplifies repetitive error-checking code by abstracting it into a higher-order function.
        </li>
      </ul>

      <!-- Anonymous Functions and Closures in Concurrency -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Anonymous Functions and Closures in Concurrency</h3>
      <p class="text-base md:text-lg mb-4">
        Combining anonymous functions with closures can lead to powerful concurrent patterns, such as worker pools or concurrent data processing.
      </p>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">Example: Concurrent Data Processing</h4>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates using anonymous functions and closures to process data concurrently:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Concurrent data processing with anonymous functions and closures
package main

import (
    "fmt"
    "sync"
)

func main() {
    data := []int{1, 2, 3, 4, 5, 6}
    var wg sync.WaitGroup

    for _, num := range data {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            // Simulate processing
            result := n * n
            fmt.Printf("Processed %d: %d\n", n, result)
        }(num)
    }

    wg.Wait()
    fmt.Println("All data processed.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        The output order may vary due to concurrent execution:
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Processed 1: 1
Processed 2: 4
Processed 3: 9
Processed 4: 16
Processed 5: 25
Processed 6: 36
All data processed.
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Goroutines with Anonymous Functions:</strong> Launches a goroutine for each data element using an anonymous function.
        </li>
        <li>
          <strong>Closure Capture:</strong> Passes <code>num</code> as an argument to the anonymous function to correctly capture its value.
        </li>
        <li>
          <strong>WaitGroup:</strong> Utilizes a <code>WaitGroup</code> to wait for all goroutines to complete before proceeding.
        </li>
      </ul>

      <!-- Comparison with Other Languages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Comparison with Other Languages</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding how functions in Go compare with those in other programming languages can provide valuable insights, especially for developers transitioning to Go or working in multi-language environments.
      </p>
      
      <!-- Higher-Order Functions Comparison -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Higher-Order Functions Comparison</h3>
      <p class="text-base md:text-lg mb-4">
        Here's how higher-order functions in Go compare with JavaScript and Python:
      </p>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">Go:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Go higher-order function
package main

import "fmt"

func applyOperation(a, b int, op func(int, int) int) int {
    return op(a, b)
}

func main() {
    add := func(x, y int) int {
        return x + y
    }

    result := applyOperation(5, 3, add)
    fmt.Println("Result:", result)
}
</code>
      </pre>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">JavaScript:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// JavaScript higher-order function
function applyOperation(a, b, op) {
    return op(a, b);
}

const add = (x, y) => x + y;

const result = applyOperation(5, 3, add);
console.log("Result:", result);
</code>
      </pre>
      
      <h4 class="text-lg md:text-xl font-semibold mb-2">Python:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
# Python higher-order function
def apply_operation(a, b, op):
    return op(a, b)

def add(x, y):
    return x + y

result = apply_operation(5, 3, add)
print("Result:", result)
</code>
      </pre>
      
      <p class="text-base md:text-lg mb-6">
        <strong>Key Differences:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Type System:</strong> Go is statically typed, requiring explicit type declarations for functions, whereas JavaScript and Python are dynamically typed.
        </li>
        <li>
          <strong>Function Syntax:</strong> Go uses the <code>func</code> keyword and curly braces, JavaScript uses the <code>function</code> keyword or arrow functions, and Python uses the <code>def</code> keyword with indentation.
        </li>
        <li>
          <strong>Anonymous Functions:</strong> All three languages support anonymous functions, but their syntax varies.
        </li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering functions in Go is essential for building efficient, readable, and maintainable applications. By understanding the various aspects of functions—including declaration, parameters, return values, variadic functions, multiple return values, recursion, anonymous functions, and higher-order functions—you can leverage Go's capabilities to write clean and effective code.
      </p>
      <p class="text-base md:text-lg mb-6">
        Key takeaways include:
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
