<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-600">Testing in Go</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Welcome to the "Testing in Go" course! Testing is a fundamental aspect of software development, ensuring that your code is reliable, maintainable, and free of bugs. This course explores the various testing methodologies in Go, leveraging its built-in testing framework to write effective tests. By the end of this course, you'll be equipped with the knowledge to implement comprehensive testing strategies in your Go projects.
      </p>

      <!-- Why Testing Matters -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Testing Matters</h2>
      <p class="text-base md:text-lg mb-4">
        Testing plays a crucial role in the software development lifecycle. It helps identify and fix bugs early, ensures code quality, and facilitates easier maintenance and scalability. In Go, the simplicity of the language and its robust standard library make it an excellent choice for implementing effective testing practices.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-Life Analogy:</strong> Think of testing like a quality control process in a manufacturing plant. Just as quality checks ensure that products meet standards before reaching customers, tests ensure that your code functions correctly before deployment.
      </p>

      <!-- Introduction to Go's Testing Framework -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Introduction to Go's Testing Framework</h2>
      <p class="text-base md:text-lg mb-4">
        Go provides a built-in testing framework through the `testing` package, which offers a straightforward way to write and execute tests. Understanding the fundamentals of this framework is essential for writing effective tests and maintaining code quality.
      </p>

      <!-- Testing Framework Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Component</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Test Functions</td>
          <td class="border px-4 py-2">Functions that start with `Test` and take a pointer to `testing.T` as a parameter.</td>
          <td class="border px-4 py-2"><code>func TestFunctionName(t *testing.T) { /* ... */ }</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Benchmark Functions</td>
          <td class="border px-4 py-2">Functions that start with `Benchmark` and take a pointer to `testing.B` as a parameter.</td>
          <td class="border px-4 py-2"><code>func BenchmarkFunctionName(b *testing.B) { /* ... */ }</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Test Cases</td>
          <td class="border px-4 py-2">Individual scenarios that validate specific behaviors of the code.</td>
          <td class="border px-4 py-2">Testing if a function returns the correct output for given inputs.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Assertions</td>
          <td class="border px-4 py-2">Statements that verify the correctness of code by comparing expected and actual results.</td>
          <td class="border px-4 py-2">Using `t.Errorf` to report mismatches between expected and actual values.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Quality control checks in a manufacturing process.</td>
          <td class="border px-4 py-2">Verifying that a product meets specific standards before shipping.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 1: Writing a Basic Test -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 1: Writing a Basic Test</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to write a simple test function in Go using the `testing` package. It showcases the structure of a test function and how to perform basic assertions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>package main

import (
    "testing"
)

// Function to be tested
func Add(a, b int) int {
    return a + b
}

// Test function
func TestAdd(t *testing.T) {
    result := Add(2, 3)
    expected := 5
    if result != expected {
        t.Errorf("Add(2, 3) = %d; want %d", result, expected)
    }
}</code></pre>

      <!-- Table-Driven Tests -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table-Driven Tests</h2>
      <p class="text-base md:text-lg mb-4">
        Table-driven tests are a powerful testing pattern in Go that allow you to run the same test logic with different inputs and expected outputs. This approach promotes code reuse and makes it easier to add new test cases.
      </p>

      <!-- Table-Driven Tests Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Component</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Test Table</td>
          <td class="border px-4 py-2">A slice of structs containing input parameters and expected results.</td>
          <td class="border px-4 py-2">Testing a function with various input combinations to ensure correctness.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Looping Over Test Cases</td>
          <td class="border px-4 py-2">Iterating through each test case and executing the test logic.</td>
          <td class="border px-4 py-2">Running the same assertion for multiple scenarios without duplicating code.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Subtests</td>
          <td class="border px-4 py-2">Using `t.Run` to execute each test case as a separate subtest.</td>
          <td class="border px-4 py-2">Identifying which specific test case failed during execution.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Quality control checks for different product specifications.</td>
          <td class="border px-4 py-2">Ensuring products meet various standards based on different parameters.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 2: Implementing Table-Driven Tests -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 2: Implementing Table-Driven Tests</h3>
      <p class="text-base md:text-lg mb-4">
        This example showcases how to implement table-driven tests in Go. It demonstrates structuring test cases in a table and iterating over them to perform assertions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>package main

import (
    "testing"
)

// Function to be tested
func Multiply(a, b int) int {
    return a * b
}

// Table-driven test function
func TestMultiply(t *testing.T) {
    testCases := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"Positive Numbers", 2, 3, 6},
        {"Negative Numbers", -2, -3, 6},
        {"Mixed Sign Numbers", -2, 3, -6},
        {"Zero", 0, 5, 0},
    }

    for _, tc := range testCases {
        t.Run(tc.name, func(t *testing.T) {
            result := Multiply(tc.a, tc.b)
            if result != tc.expected {
                t.Errorf("Multiply(%d, %d) = %d; want %d", tc.a, tc.b, result, tc.expected)
            }
        })
    }
}</code></pre>

      <!-- Testing Functions with Side Effects -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Testing Functions with Side Effects</h2>
      <p class="text-base md:text-lg mb-4">
        Functions that interact with global state or external systems can introduce complexities in testing. This section explores strategies to effectively test such functions, including the use of mocks and stubs.
      </p>

      <!-- Side Effects Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Concept</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Global State</td>
          <td class="border px-4 py-2">Shared variables or resources that multiple functions can access and modify.</td>
          <td class="border px-4 py-2">A global counter that increments with each function call.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Mocks and Stubs</td>
          <td class="border px-4 py-2">Simulated objects that mimic the behavior of real dependencies.</td>
          <td class="border px-4 py-2">Mocking a database connection to test functions without a real database.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Dependency Injection</td>
          <td class="border px-4 py-2">Providing dependencies to functions or structs rather than hardcoding them.</td>
          <td class="border px-4 py-2">Injecting a logger interface into functions for flexible logging during tests.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Isolating Tests</td>
          <td class="border px-4 py-2">Ensuring that tests do not interfere with each other by modifying shared state.</td>
          <td class="border px-4 py-2">Resetting global variables before each test to maintain independence.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Quality control checks in a manufacturing process where each test is isolated to prevent contamination.</td>
          <td class="border px-4 py-2">Ensuring that the inspection of one product does not affect the inspection of another.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 3: Testing Functions with Side Effects -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 3: Testing Functions with Side Effects</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to test a function that modifies global state. It showcases the use of mocks and dependency injection to isolate the function and ensure reliable tests.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>package main

import (
    "testing"
)

// Global counter
var counter int = 0

// Function to increment the counter
func Increment() {
    counter++
}

// Mock function to reset the counter (for testing purposes)
func ResetCounter() {
    counter = 0
}

// Test function
func TestIncrement(t *testing.T) {
    ResetCounter() // Reset the counter before the test
    Increment()
    if counter != 1 {
        t.Errorf("Expected counter to be 1, got %d", counter)
    }
}</code></pre>

      <!-- Benchmarking in Go -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Benchmarking in Go</h2>
      <p class="text-base md:text-lg mb-4">
        Benchmarking allows you to measure the performance of your Go code, helping you identify bottlenecks and optimize your applications. Go's testing framework provides built-in support for benchmarking, making it easy to assess the efficiency of your functions.
      </p>

      <!-- Benchmarking Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Component</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Benchmark Functions</td>
          <td class="border px-4 py-2">Functions that start with `Benchmark` and take a pointer to `testing.B` as a parameter.</td>
          <td class="border px-4 py-2"><code>func BenchmarkFunctionName(b *testing.B) { /* ... */ }</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Benchmarking Loop</td>
          <td class="border px-4 py-2">A loop that runs the benchmarked code multiple times to measure performance.</td>
          <td class="border px-4 py-2">Measuring the time taken to execute a sorting algorithm.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Benchmark Results</td>
          <td class="border px-4 py-2">Metrics that indicate the performance of the benchmarked code.</td>
          <td class="border px-4 py-2">Number of operations per second and average time per operation.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Optimization</td>
          <td class="border px-4 py-2">Using benchmark results to identify and improve inefficient code segments.</td>
          <td class="border px-4 py-2">Refactoring a slow function to enhance its execution speed.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Evaluating the performance of different manufacturing processes to choose the most efficient one.</td>
          <td class="border px-4 py-2">Selecting the fastest assembly line method to increase production rates.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 4: Writing a Benchmark Test -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 4: Writing a Benchmark Test</h3>
      <p class="text-base md:text-lg mb-4">
        This example illustrates how to write a benchmark test in Go to measure the performance of a function. It demonstrates the structure of a benchmark function and how to interpret the results.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>package main

import (
    "testing"
)

// Function to be benchmarked
func SumSlice(slice []int) int {
    sum := 0
    for _, v := range slice {
        sum += v
    }
    return sum
}

// Benchmark function
func BenchmarkSumSlice(b *testing.B) {
    slice := make([]int, 1000)
    for i := range slice {
        slice[i] = i
    }

    for i := 0; i &lt; b.N; i++ {
        SumSlice(slice)
    }
}</code></pre>

      <!-- Test Coverage -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Test Coverage</h2>
      <p class="text-base md:text-lg mb-4">
        Test coverage measures the extent to which your code is exercised by tests. It helps identify untested code paths, ensuring comprehensive testing and higher code quality. Go's testing tools make it straightforward to generate and analyze coverage reports.
      </p>

      <!-- Test Coverage Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Component</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Coverage Percentage</td>
          <td class="border px-4 py-2">Indicates the proportion of code lines executed by tests.</td>
          <td class="border px-4 py-2">Achieving 80% test coverage to ensure most functionalities are tested.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Generating Coverage Reports</td>
          <td class="border px-4 py-2">Using the `-cover` flag with `go test` to create coverage reports.</td>
          <td class="border px-4 py-2">Running `go test -cover` to see which lines are covered.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Interpreting Coverage Data</td>
          <td class="border px-4 py-2">Analyzing coverage reports to identify untested code segments.</td>
          <td class="border px-4 py-2">Using `go tool cover -html=coverage.out` to visualize coverage.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Improving Coverage</td>
          <td class="border px-4 py-2">Adding tests for untested code paths to enhance coverage.</td>
          <td class="border px-4 py-2">Writing additional tests for edge cases not previously covered.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Quality assurance in manufacturing to ensure all product features are tested.</td>
          <td class="border px-4 py-2">Testing each component of a product to ensure it meets quality standards.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 5: Generating and Analyzing Test Coverage -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 5: Generating and Analyzing Test Coverage</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to generate a test coverage report in Go and analyze the results to identify untested code areas.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>package main

import (
    "testing"
)

// Function to be tested
func Divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Test function with table-driven tests
func TestDivide(t *testing.T) {
    testCases := []struct {
        name        string
        a, b        float64
        expected    float64
        expectError bool
    }{
        {"Positive Numbers", 10, 2, 5, false},
        {"Division by Zero", 10, 0, 0, true},
        {"Negative Numbers", -10, -2, 5, false},
        {"Mixed Signs", -10, 2, -5, false},
    }

    for _, tc := range testCases {
        t.Run(tc.name, func(t *testing.T) {
            result, err := Divide(tc.a, tc.b)
            if tc.expectError {
                if err == nil {
                    t.Errorf("Expected error but got none")
                }
            } else {
                if err != nil {
                    t.Errorf("Unexpected error: %v", err)
                }
                if result != tc.expected {
                    t.Errorf("Divide(%f, %f) = %f; want %f", tc.a, tc.b, result, tc.expected)
                }
            }
        })
    }
}</code></pre>

      <!-- Conclusion and Next Steps -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion and Next Steps</h2>
      <p class="text-base md:text-lg mb-4">
        Congratulations! You've now covered the essential aspects of testing in Go. From writing basic tests and implementing table-driven tests to benchmarking and measuring test coverage, you've gained the knowledge to ensure your Go applications are reliable and maintainable.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Why and When to Use Testing in Go:</strong> Testing is crucial whenever you develop software to ensure functionality, prevent regressions, and maintain code quality. In Go, leveraging its built-in testing tools allows you to write efficient and effective tests that contribute to the robustness of your applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we'll delve deeper into advanced topics such as deploying Go applications and advanced testing strategies, building upon the foundation you've established here.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestingInGo',
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
</style>
