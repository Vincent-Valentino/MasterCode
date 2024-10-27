<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-600">Error Handling in Go</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Error handling is essential for building reliable applications in Go. Unlike languages that use exceptions, Go employs explicit error checks through multiple return values. This approach promotes clear and maintainable code by forcing developers to handle errors immediately. This module explores Go's error handling mechanisms, including basic error checks, custom error types, error wrapping, and best practices. Additionally, comparisons with error handling in other languages provide a broader perspective on Go's design choices.
      </p>

      <!-- Basic Error Handling -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Basic Error Handling</h2>
      <p class="text-base md:text-lg mb-4">
        In Go, errors are treated as values. Functions that can fail typically return an additional <code>error</code> value alongside the intended result. It's the caller's responsibility to check and handle these errors.
      </p>

      <!-- Example: Basic Error Check -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Basic Error Check</h3>
      <p class="text-base md:text-lg mb-4">
        A simple function that may return an error and how to handle it.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- Example: Basic Error Check --&gt;
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Error: cannot divide by zero
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Function Definition:</strong> The <code>divide</code> function returns a <code>float64</code> result and an <code>error</code>.</li>
        <li><strong>Error Creation:</strong> Returns an error using <code>errors.New</code> if the denominator is zero.</li>
        <li><strong>Error Handling:</strong> In <code>main</code>, the error is checked immediately after the function call.</li>
      </ul>

      <!-- Comparison with Other Languages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Comparison with Other Languages</h2>
      <p class="text-base md:text-lg mb-4">
        Go's error handling approach contrasts with how other languages manage errors, highlighting its explicit and straightforward design.
      </p>

      <table class="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
        <tr>
          <th class="px-4 py-2 border">Language</th>
          <th class="px-4 py-2 border">Error Handling Mechanism</th>
          <th class="px-4 py-2 border">Characteristics</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="px-4 py-2 border">Go</td>
          <td class="px-4 py-2 border">Multiple return values, explicit error checks</td>
          <td class="px-4 py-2 border">Simple, explicit, encourages immediate handling</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Python</td>
          <td class="px-4 py-2 border">Exceptions</td>
          <td class="px-4 py-2 border">Implicit flow control, can be caught at higher levels</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Java</td>
          <td class="px-4 py-2 border">Checked and unchecked exceptions</td>
          <td class="px-4 py-2 border">Requires handling or declaring exceptions, more boilerplate</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Rust</td>
          <td class="px-4 py-2 border">Result and Option types</td>
          <td class="px-4 py-2 border">Type-safe, encourages exhaustive error handling</td>
        </tr>
        </tbody>
      </table>

      <!-- Custom Error Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Custom Error Types</h2>
      <p class="text-base md:text-lg mb-4">
        Creating custom error types allows for more descriptive and type-specific error handling. By implementing the <code>error</code> interface, you can define errors that carry additional context or information.
      </p>

      <!-- Example: Custom Error Type -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Custom Error Type</h3>
      <p class="text-base md:text-lg mb-4">
        Creating a custom error type with additional fields for more context.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- Example: Custom Error Type --&gt;
package main

import (
    "fmt"
)

type MyError struct {
    Code    int
    Message string
}

func (e *MyError) Error() string {
    return fmt.Sprintf("Error %d: %s", e.Code, e.Message)
}

func performTask(success bool) error {
    if !success {
        return &MyError{Code: 404, Message: "Resource not found"}
    }
    return nil
}

func main() {
    err := performTask(false)
    if err != nil {
        fmt.Println(err)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Error 404: Resource not found
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Custom Struct:</strong> `MyError` includes fields like `Code` and `Message` for additional context.</li>
        <li><strong>Error Interface Implementation:</strong> Implements the `Error` method to satisfy the `error` interface.</li>
        <li><strong>Returning Custom Error:</strong> The `performTask` function returns a pointer to `MyError` when the task fails.</li>
        <li><strong>Handling Custom Error:</strong> In `main`, the error is printed, displaying the formatted message.</li>
      </ul>

      <!-- Error Wrapping and Unwrapping -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Error Wrapping and Unwrapping</h2>
      <p class="text-base md:text-lg mb-4">
        Go 1.13 introduced error wrapping, allowing errors to be annotated with additional context. This enables more informative error messages and supports error unwrapping for type-specific handling.
      </p>

      <!-- Example: Error Wrapping -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Error Wrapping</h3>
      <p class="text-base md:text-lg mb-4">
        Wrapping errors with additional context and unwrapping them.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- Example: Error Wrapping --&gt;
package main

import (
    "errors"
    "fmt"
)

func readFile(filename string) error {
    return fmt.Errorf("readFile failed: %w", errors.New("file not found"))
}

func main() {
    err := readFile("config.yaml")
    if err != nil {
        fmt.Println("Error:", err)

        // Unwrapping the error
        var pathError *PathError
        if errors.As(err, &pathError) {
            fmt.Println("Path Error:", pathError.Message)
        }

        // Checking for specific error
        if errors.Is(err, ErrNotFound) {
            fmt.Println("The specified file was not found.")
        }
    }
}

var ErrNotFound = errors.New("file not found")

type PathError struct {
    Message string
}

func (e *PathError) Error() string {
    return e.Message
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Error: readFile failed: file not found
The specified file was not found.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Wrapping Errors:</strong> The `readFile` function wraps a basic error using `fmt.Errorf` with the `<code>%w</code>` verb.</li>
        <li><strong>Error Unwrapping with `errors.As`:</strong> Attempts to cast the error to a specific type (`PathError`) to access additional information.</li>
        <li><strong>Error Checking with `errors.Is`:</strong> Checks if the error is or wraps a specific error (`ErrNotFound`), allowing for type-specific handling.</li>
        <li><strong>Conditional Handling:</strong> Based on the type and value of the error, different handling logic is executed.</li>
      </ul>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices in error handling leads to more maintainable and reliable Go applications. Here are some recommended practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Check Errors Immediately:</strong> Handle errors as soon as they occur to avoid propagating faulty states.</li>
        <li><strong>Use Sentinel Errors Sparingly:</strong> Relying on pre-defined errors can lead to brittle code. Prefer type assertions and error wrapping.</li>
        <li><strong>Provide Context:</strong> When returning errors, include context to make debugging easier.</li>
        <li><strong>Avoid Panics for Expected Errors:</strong> Use panics only for unrecoverable situations. For expected error conditions, return error values.</li>
        <li><strong>Implement Custom Error Types When Necessary:</strong> Use custom error types to convey additional information and enable type-specific error handling.</li>
        <li><strong>Leverage Error Wrapping:</strong> Use Go's error wrapping features to maintain error chains and provide comprehensive error messages.</li>
      </ul>

      <!-- Example: Best Practices in Error Handling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Best Practices in Error Handling</h3>
      <p class="text-base md:text-lg mb-4">
        Combines several best practices in a single example to demonstrate effective error handling.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- Example: Best Practices in Error Handling --&gt;
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "os"
)

type HTTPError struct {
    StatusCode int
    Status     string
    URL        string
}

func (e *HTTPError) Error() string {
    return fmt.Sprintf("HTTP Error: %d %s for URL %s", e.StatusCode, e.Status, e.URL)
}

func fetchURL(url string) ([]byte, error) {
    resp, err := http.Get(url)
    if err != nil {
        return nil, fmt.Errorf("failed to fetch URL %s: %w", url, err)
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        return nil, &HTTPError{
            StatusCode: resp.StatusCode,
            Status:     resp.Status,
            URL:        url,
        }
    }

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return nil, fmt.Errorf("failed to read response body for URL %s: %w", url, err)
    }

    return body, nil
}

func main() {
    if len(os.Args) < 2 {
        fmt.Println("Usage: go run main.go [URL]")
        os.Exit(1)
    }

    url := os.Args[1]
    data, err := fetchURL(url)
    if err != nil {
        var httpErr *HTTPError
        if errors.As(err, &httpErr) {
            fmt.Printf("HTTP error occurred: %s\n", httpErr)
        } else {
            fmt.Printf("An error occurred: %v\n", err)
        }
        os.Exit(1)
    }

    fmt.Printf("Fetched data from %s: %d bytes\n", url, len(data))
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Usage:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        ```bash
        go run main.go https://www.example.com/
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Fetched data from https://www.example.com/: 1256 bytes
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Custom Error Type (`HTTPError`):</strong> Provides detailed information about HTTP response errors.</li>
        <li><strong>Error Wrapping:</strong> Uses <code>fmt.Errorf</code> with <code>%w</code> to wrap underlying errors, preserving the error chain.</li>
        <li><strong>Contextual Error Messages:</strong> Includes the URL in error messages for better traceability.</li>
        <li><strong>Type Assertion with `errors.As`:</strong> In <code>main</code>, uses <code>errors.As</code> to check if the error is a <code>HTTPError</code> for specific handling.</li>
        <li><strong>Graceful Exit:</strong> Exits the program with a non-zero status code upon encountering errors.</li>
      </ul>

      <!-- Using the `errors` Package -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Using the `errors` Package</h2>
      <p class="text-base md:text-lg mb-4">
        The `errors` package in Go provides utility functions for creating, inspecting, and manipulating errors. Understanding these functions enhances your ability to handle errors effectively.
      </p>

      <!-- `errors.New` and `fmt.Errorf` -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">`errors.New` and `fmt.Errorf`</h3>
      <p class="text-base md:text-lg mb-4">
        These functions are used to create new error instances. While <code>errors.New</code> creates a simple error, <code>fmt.Errorf</code> allows for formatted error messages and error wrapping.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- Example: errors.New and fmt.Errorf --&gt;
package main

import (
    "errors"
    "fmt"
)

func simpleError() error {
    return errors.New("a simple error occurred")
}

func formattedError() error {
    return fmt.Errorf("failed to perform action: %w", errors.New("underlying error"))
}

func main() {
    err1 := simpleError()
    err2 := formattedError()

    fmt.Println(err1)
    fmt.Println(err2)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
a simple error occurred
failed to perform action: underlying error
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong><code>errors.New</code>:</strong> Creates a basic error with a static message.</li>
        <li><strong><code>fmt.Errorf</code>:</strong> Allows for formatted error messages and wrapping existing errors using the <code>%w</code> verb.</li>
        <li><strong>Error Messages:</strong> <code>err1</code> displays a simple error message, while <code>err2</code> includes additional context and wraps an underlying error.</li>
      </ul>

      <!-- `errors.Is` and `errors.As` -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">`errors.Is` and `errors.As`</h3>
      <p class="text-base md:text-lg mb-4">
        These functions help in inspecting errors, especially when dealing with wrapped errors. <code>errors.Is</code> checks if an error is or wraps a specific target error, while <code>errors.As</code> attempts to cast an error to a specific type.
      </p>

      <!-- Example: Using `errors.Is` and `errors.As` -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Example: Using <code>errors.Is</code> and <code>errors.As</code></h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- Example: Using errors.Is and errors.As --&gt;
package main

import (
    "errors"
    "fmt"
)

var ErrNotFound = errors.New("not found")

type DatabaseError struct {
    Code    int
    Message string
}

func (e *DatabaseError) Error() string {
    return fmt.Sprintf("DatabaseError %d: %s", e.Code, e.Message)
}

func getData(id int) error {
    if id != 1 {
        return fmt.Errorf("getData failed: %w", ErrNotFound)
    }
    return nil
}

func main() {
    err := getData(2)
    if errors.Is(err, ErrNotFound) {
        fmt.Println("Data not found.")
    }

    var dbErr *DatabaseError
    if errors.As(err, &dbErr) {
        fmt.Printf("Database error occurred: %s\n", dbErr)
    } else {
        fmt.Println("An error occurred:", err)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Data not found.
An error occurred: getData failed: not found
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Sentinel Error:</strong> <code>ErrNotFound</code> is a predefined error used as a sentinel value.</li>
        <li><strong>Error Wrapping:</strong> The <code>getData</code> function wraps <code>ErrNotFound</code> using <code>fmt.Errorf</code> with <code>%w</code>.</li>
        <li><strong>Using <code>errors.Is</code>:</strong> Checks if the returned error is or wraps <code>ErrNotFound</code>.</li>
        <li><strong>Using <code>errors.As</code>:</strong> Attempts to cast the error to <code>DatabaseError</code>, which fails in this case.</li>
        <li><strong>Conditional Handling:</strong> Executes different logic based on the error type and value.</li>
      </ul>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices in error handling leads to more maintainable and reliable Go applications. Here are some recommended practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Check Errors Immediately:</strong> Handle errors as soon as they occur to avoid propagating faulty states.</li>
        <li><strong>Use Sentinel Errors Sparingly:</strong> Relying on pre-defined errors can lead to brittle code. Prefer type assertions and error wrapping.</li>
        <li><strong>Provide Context:</strong> When returning errors, include context to make debugging easier.</li>
        <li><strong>Avoid Panics for Expected Errors:</strong> Use panics only for unrecoverable situations. For expected error conditions, return error values.</li>
        <li><strong>Implement Custom Error Types When Necessary:</strong> Use custom error types to convey additional information and enable type-specific error handling.</li>
        <li><strong>Leverage Error Wrapping:</strong> Use Go's error wrapping features to maintain error chains and provide comprehensive error messages.</li>
      </ul>

      <!-- Example: Best Practices in Error Handling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Best Practices in Error Handling</h3>
      <p class="text-base md:text-lg mb-4">
        Combines several best practices in a single example to demonstrate effective error handling.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- Example: Best Practices in Error Handling --&gt;
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "os"
)

type HTTPError struct {
    StatusCode int
    Status     string
    URL        string
}

func (e *HTTPError) Error() string {
    return fmt.Sprintf("HTTP Error: %d %s for URL %s", e.StatusCode, e.Status, e.URL)
}

func fetchURL(url string) ([]byte, error) {
    resp, err := http.Get(url)
    if err != nil {
        return nil, fmt.Errorf("failed to fetch URL %s: %w", url, err)
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        return nil, &HTTPError{
            StatusCode: resp.StatusCode,
            Status:     resp.Status,
            URL:        url,
        }
    }

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        return nil, fmt.Errorf("failed to read response body for URL %s: %w", url, err)
    }

    return body, nil
}

func main() {
    if len(os.Args) < 2 {
        fmt.Println("Usage: go run main.go [URL]")
        os.Exit(1)
    }

    url := os.Args[1]
    data, err := fetchURL(url)
    if err != nil {
        var httpErr *HTTPError
        if errors.As(err, &httpErr) {
            fmt.Printf("HTTP error occurred: %s\n", httpErr)
        } else {
            fmt.Printf("An error occurred: %v\n", err)
        }
        os.Exit(1)
    }

    fmt.Printf("Fetched data from %s: %d bytes\n", url, len(data))
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Usage:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        ```bash
        go run main.go https://www.example.com/
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Fetched data from https://www.example.com/: 1256 bytes
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Custom Error Type (`HTTPError`):</strong> Provides detailed information about HTTP response errors.</li>
        <li><strong>Error Wrapping:</strong> Uses <code>fmt.Errorf</code> with <code>%w</code> to wrap underlying errors, preserving the error chain.</li>
        <li><strong>Contextual Error Messages:</strong> Includes the URL in error messages for better traceability.</li>
        <li><strong>Type Assertion with `errors.As`:</strong> In <code>main</code>, uses <code>errors.As</code> to check if the error is a <code>HTTPError</code> for specific handling.</li>
        <li><strong>Graceful Exit:</strong> Exits the program with a non-zero status code upon encountering errors.</li>
      </ul>

      <!-- Using the `errors` Package -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Using the `errors` Package</h2>
      <p class="text-base md:text-lg mb-4">
        The `errors` package in Go provides utility functions for creating, inspecting, and manipulating errors. Understanding these functions enhances your ability to handle errors effectively.
      </p>

      <!-- `errors.New` and `fmt.Errorf` -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">`errors.New` and `fmt.Errorf`</h3>
      <p class="text-base md:text-lg mb-4">
        These functions are used to create new error instances. While <code>errors.New</code> creates a simple error, <code>fmt.Errorf</code> allows for formatted error messages and error wrapping.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- Example: errors.New and fmt.Errorf --&gt;
package main

import (
    "errors"
    "fmt"
)

func simpleError() error {
    return errors.New("a simple error occurred")
}

func formattedError() error {
    return fmt.Errorf("failed to perform action: %w", errors.New("underlying error"))
}

func main() {
    err1 := simpleError()
    err2 := formattedError()

    fmt.Println(err1)
    fmt.Println(err2)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
a simple error occurred
failed to perform action: underlying error
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong><code>errors.New</code>:</strong> Creates a basic error with a static message.</li>
        <li><strong><code>fmt.Errorf</code>:</strong> Allows for formatted error messages and wrapping existing errors using the <code>%w</code> verb.</li>
        <li><strong>Error Messages:</strong> <code>err1</code> displays a simple error message, while <code>err2</code> includes additional context and wraps an underlying error.</li>
      </ul>

      <!-- `errors.Is` and `errors.As` -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">`errors.Is` and `errors.As`</h3>
      <p class="text-base md:text-lg mb-4">
        These functions help in inspecting errors, especially when dealing with wrapped errors. <code>errors.Is</code> checks if an error is or wraps a specific target error, while <code>errors.As</code> attempts to cast an error to a specific type.
      </p>

      <!-- Example: Using `errors.Is` and `errors.As` -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Example: Using <code>errors.Is</code> and <code>errors.As</code></h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!-- Example: Using errors.Is and errors.As --&gt;
package main

import (
    "errors"
    "fmt"
)

var ErrNotFound = errors.New("not found")

type DatabaseError struct {
    Code    int
    Message string
}

func (e *DatabaseError) Error() string {
    return fmt.Sprintf("DatabaseError %d: %s", e.Code, e.Message)
}

func getData(id int) error {
    if id != 1 {
        return fmt.Errorf("getData failed: %w", ErrNotFound)
    }
    return nil
}

func main() {
    err := getData(2)
    if errors.Is(err, ErrNotFound) {
        fmt.Println("Data not found.")
    }

    var dbErr *DatabaseError
    if errors.As(err, &dbErr) {
        fmt.Printf("Database error occurred: %s\n", dbErr)
    } else {
        fmt.Println("An error occurred:", err)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Data not found.
An error occurred: getData failed: not found
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Sentinel Error:</strong> <code>ErrNotFound</code> is a predefined error used as a sentinel value.</li>
        <li><strong>Error Wrapping:</strong> The <code>getData</code> function wraps <code>ErrNotFound</code> using <code>fmt.Errorf</code> with <code>%w</code>.</li>
        <li><strong>Using <code>errors.Is</code>:</strong> Checks if the returned error is or wraps <code>ErrNotFound</code>.</li>
        <li><strong>Using <code>errors.As</code>:</strong> Attempts to cast the error to <code>DatabaseError</code>, which fails in this case.</li>
        <li><strong>Conditional Handling:</strong> Executes different logic based on the error type and value.</li>
      </ul>

      <!-- Best Practices Summary -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Error Handling Best Practices Summary</h2>
      <p class="text-base md:text-lg mb-4">
        Mastering error handling in Go involves understanding the language's idiomatic approaches and applying best practices to write clean, maintainable, and reliable code. Here's a summary of the key best practices discussed:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Check Errors Immediately:</strong> Always handle errors right after they occur.</li>
        <li><strong>Provide Context:</strong> Include contextual information when returning errors.</li>
        <li><strong>Use Custom Error Types:</strong> Define custom error types for more detailed error information.</li>
        <li><strong>Leverage Error Wrapping:</strong> Utilize Go's error wrapping to maintain error chains.</li>
        <li><strong>Handle Specific Errors:</strong> Use <code>errors.Is</code> and <code>errors.As</code> for type-specific error handling.</li>
        <li><strong>Avoid Panics for Recoverable Errors:</strong> Reserve <code>panic</code> and <code>recover</code> for truly exceptional situations.</li>
        <li><strong>Aggregate Multiple Errors:</strong> Consider aggregating errors for comprehensive reporting.</li>
      </ul>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of error handling in Go, consider exploring the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://golang.org/doc/effective_go.html#error-handling" class="text-blue-600 hover:underline">Effective Go: Error Handling</a>
        </li>
        <li>
          <a href="https://blog.golang.org/error-handling-and-go" class="text-blue-600 hover:underline">Go Blog: Error Handling and Go</a>
        </li>
        <li>
          <a href="https://golang.org/pkg/errors/" class="text-blue-600 hover:underline">Go <code>errors</code> Package Documentation</a>
        </li>
        <li>
          <a href="https://www.golang-book.com/books/intro/14" class="text-blue-600 hover:underline">The Go Programming Language Book: Error Handling</a>
        </li>
        <li>
          <a href="https://stackoverflow.com/questions/9210528/go-how-do-i-create-a-new-error" class="text-blue-600 hover:underline">Stack Overflow: How do I create a new error in Go?</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoErrorHandling',
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
