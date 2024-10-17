<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-500 rounded-t-xl p-4">
      <img src="/icons/go.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Error Handling in Go</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Error handling is a critical aspect of writing robust and reliable applications in Go. Unlike many other programming languages that utilize exceptions, Go adopts a simple and explicit approach to error handling using multiple return values. This module delves into Go's error handling mechanisms, covering basic error checks, custom error types, error wrapping, and best practices. Through detailed explanations and practical examples, you'll gain a thorough understanding of how to effectively manage errors in your Go applications.
      </p>

      <!-- Basic Error Handling -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Basic Error Handling</h2>
      <p class="text-base md:text-lg mb-4">
        In Go, errors are treated as values. Functions that can fail typically return an additional `error` value alongside the intended result. It's the responsibility of the caller to check and handle these errors.
      </p>

      <!-- Example: Basic Error Check -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Basic Error Check</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates a simple function that may return an error and how to handle it.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Basic Error Check
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
        <li>
          <strong>Function Definition:</strong> The `divide` function takes two `float64` arguments and returns a `float64` result and an `error`.
        </li>
        <li>
          <strong>Error Creation:</strong> If the denominator `b` is zero, the function returns an error using `errors.New`.
        </li>
        <li>
          <strong>Error Handling:</strong> In the `main` function, after calling `divide`, the error `err` is checked. If an error exists, it's printed, and the program exits gracefully.
        </li>
      </ul>

      <!-- Custom Error Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Custom Error Types</h2>
      <p class="text-base md:text-lg mb-4">
        Creating custom error types allows for more descriptive and type-specific error handling. By implementing the `error` interface, you can define errors that carry additional context or information.
      </p>

      <!-- Example: Custom Error Type -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Custom Error Type</h3>
      <p class="text-base md:text-lg mb-4">
        This example shows how to create a custom error type with additional fields.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Custom Error Type
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
        <li>
          <strong>Custom Struct:</strong> `MyError` struct includes additional fields like `Code` and `Message` to provide more context.
        </li>
        <li>
          <strong>Error Interface Implementation:</strong> The `Error` method implements the `error` interface, allowing `MyError` to be used as an error.
        </li>
        <li>
          <strong>Returning Custom Error:</strong> The `performTask` function returns a pointer to `MyError` when the task fails.
        </li>
        <li>
          <strong>Handling Custom Error:</strong> In `main`, the error is printed, displaying the formatted message.
        </li>
      </ul>

      <!-- Error Wrapping and Unwrapping -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Error Wrapping and Unwrapping</h2>
      <p class="text-base md:text-lg mb-4">
        Go 1.13 introduced error wrapping, allowing errors to be annotated with additional context. This enables more informative error messages and supports error unwrapping for type-specific handling.
      </p>

      <!-- Example: Error Wrapping -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Error Wrapping</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates how to wrap errors with additional context and how to unwrap them.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Error Wrapping
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
        <li>
          <strong>Wrapping Errors:</strong> The `readFile` function wraps a basic error using `fmt.Errorf` with the `%w` verb.
        </li>
        <li>
          <strong>Error Unwrapping with `errors.As`:</strong> Attempts to cast the error to a specific type (`PathError`) to access additional information.
        </li>
        <li>
          <strong>Error Checking with `errors.Is`:</strong> Checks if the error is or wraps a specific error (`ErrNotFound`), allowing for type-specific handling.
        </li>
      </ul>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices in error handling leads to more maintainable and reliable Go applications. Here are some recommended practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Check Errors Immediately:</strong> Handle errors as soon as they occur to avoid propagating faulty states.
        </li>
        <li>
          <strong>Use Sentinel Errors Sparingly:</strong> Relying on pre-defined errors can lead to brittle code. Prefer type assertions and error wrapping.
        </li>
        <li>
          <strong>Provide Context:</strong> When returning errors, include context to make debugging easier.
        </li>
        <li>
          <strong>Avoid Panics for Expected Errors:</strong> Use panics only for unrecoverable situations. For expected error conditions, return error values.
        </li>
        <li>
          <strong>Implement Custom Error Types When Necessary:</strong> Use custom error types to convey additional information and enable type-specific error handling.
        </li>
        <li>
          <strong>Leverage Error Wrapping:</strong> Use Go's error wrapping features to maintain error chains and provide comprehensive error messages.
        </li>
      </ul>

      <!-- Example: Best Practices in Error Handling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Best Practices in Error Handling</h3>
      <p class="text-base md:text-lg mb-4">
        Combines several best practices in a single example to demonstrate effective error handling.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Best Practices in Error Handling
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
        **Possible Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Fetched data from https://www.example.com/: 1256 bytes
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Custom Error Type:</strong> `HTTPError` struct provides detailed information about HTTP response errors.
        </li>
        <li>
          <strong>Error Wrapping:</strong> Uses `fmt.Errorf` with `%w` to wrap underlying errors, preserving the error chain.
        </li>
        <li>
          <strong>Contextual Error Messages:</strong> Includes the URL in error messages for better traceability.
        </li>
        <li>
          <strong>Type Assertion with `errors.As`:</strong> In `main`, uses `errors.As` to check if the error is of type `HTTPError` for specific handling.
        </li>
        <li>
          <strong>Graceful Exit:</strong> Exits the program with a non-zero status code upon encountering errors.
        </li>
      </ul>

      <!-- Using the `errors` Package -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Using the `errors` Package</h2>
      <p class="text-base md:text-lg mb-4">
        The `errors` package in Go provides utility functions for creating, inspecting, and manipulating errors. Understanding these functions enhances your ability to handle errors effectively.
      </p>

      <!-- `errors.New` and `fmt.Errorf` -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">`errors.New` and `fmt.Errorf`</h3>
      <p class="text-base md:text-lg mb-4">
        These functions are used to create new error instances. While `errors.New` creates a simple error, `fmt.Errorf` allows for formatted error messages and error wrapping.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: errors.New and fmt.Errorf
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
        <li>
          <strong>`errors.New`:</strong> Creates a basic error with a static message.
        </li>
        <li>
          <strong>`fmt.Errorf`:</strong> Allows for formatted error messages and wrapping existing errors using the `%w` verb.
        </li>
        <li>
          <strong>Error Messages:</strong> `err1` displays a simple error message, while `err2` includes additional context and wraps an underlying error.
        </li>
      </ul>

      <!-- `errors.Is` and `errors.As` -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">`errors.Is` and `errors.As`</h3>
      <p class="text-base md:text-lg mb-4">
        These functions help in inspecting errors, especially when dealing with wrapped errors. `errors.Is` checks if an error is or wraps a specific target error, while `errors.As` attempts to cast an error to a specific type.
      </p>

      <!-- Example: Using `errors.Is` and `errors.As` -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Example: Using `errors.Is` and `errors.As`</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using errors.Is and errors.As
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
        <li>
          <strong>Sentinel Error:</strong> `ErrNotFound` is a predefined error used as a sentinel value.
        </li>
        <li>
          <strong>Error Wrapping:</strong> The `getData` function wraps `ErrNotFound` using `fmt.Errorf` with `%w`.
        </li>
        <li>
          <strong>Using `errors.Is`:</strong> Checks if the returned error is or wraps `ErrNotFound`.
        </li>
        <li>
          <strong>Using `errors.As`:</strong> Attempts to cast the error to `DatabaseError`, which fails in this case since the underlying error is `ErrNotFound`.
        </li>
        <li>
          <strong>Conditional Handling:</strong> Based on the type and value of the error, different handling logic is executed.
        </li>
      </ul>

      <!-- Best Practices Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Comprehensive Error Handling Best Practices</h3>
      <p class="text-base md:text-lg mb-4">
        This example integrates multiple best practices, including error wrapping, custom error types, and type-specific error handling.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Comprehensive Error Handling Best Practices
package main

import (
    "errors"
    "fmt"
    "io/ioutil"
    "os"
)

type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("ValidationError: %s - %s", e.Field, e.Message)
}

func validateInput(input string) error {
    if input == "" {
        return &ValidationError{Field: "input", Message: "input cannot be empty"}
    }
    return nil
}

func readFile(filename string) ([]byte, error) {
    data, err := ioutil.ReadFile(filename)
    if err != nil {
        if os.IsNotExist(err) {
            return nil, fmt.Errorf("readFile: file %s does not exist: %w", filename, err)
        }
        return nil, fmt.Errorf("readFile: failed to read file %s: %w", filename, err)
    }
    return data, nil
}

func main() {
    input := ""
    err := validateInput(input)
    if err != nil {
        var ve *ValidationError
        if errors.As(err, &ve) {
            fmt.Printf("Validation error on field '%s': %s\n", ve.Field, ve.Message)
        } else {
            fmt.Printf("Error: %v\n", err)
        }
        return
    }

    data, err := readFile("config.yaml")
    if err != nil {
        if errors.Is(err, os.ErrNotExist) {
            fmt.Println("Configuration file not found. Please create config.yaml.")
        } else {
            fmt.Printf("An error occurred: %v\n", err)
        }
        return
    }

    fmt.Printf("File Content: %s\n", string(data))
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Possible Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        ```
        Validation error on field 'input': input cannot be empty
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Custom Error Type (`ValidationError`):</strong> Provides detailed information about validation failures.
        </li>
        <li>
          <strong>Input Validation:</strong> `validateInput` checks if the input is empty and returns a `ValidationError` if it is.
        </li>
        <li>
          <strong>Error Handling with `errors.As`:</strong> In `main`, uses `errors.As` to determine if the error is a `ValidationError` and handles it accordingly.
        </li>
        <li>
          <strong>File Reading with Error Wrapping:</strong> `readFile` function wraps errors with additional context, differentiating between "file not found" and other read errors.
        </li>
        <li>
          <strong>Error Checking with `errors.Is`:</strong> Determines if the error is specifically `os.ErrNotExist` to provide user-friendly messages.
        </li>
        <li>
          <strong>Graceful Exit:</strong> Handles errors gracefully without causing the program to panic or crash unexpectedly.
        </li>
      </ul>

      <!-- Deferred Error Handling -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Deferred Error Handling</h2>
      <p class="text-base md:text-lg mb-4">
        Using `defer` for resource cleanup is a common pattern in Go. However, it’s crucial to handle errors that may occur during deferred operations.
      </p>

      <!-- Example: Handling Errors in Deferred Functions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Handling Errors in Deferred Functions</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates how to capture and handle errors within deferred functions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Handling Errors in Deferred Functions
package main

import (
    "fmt"
    "os"
)

func writeFile(filename, content string) (err error) {
    file, err := os.Create(filename)
    if err != nil {
        return fmt.Errorf("writeFile: failed to create file %s: %w", filename, err)
    }
    defer func() {
        closeErr := file.Close()
        if closeErr != nil {
            if err != nil {
                err = fmt.Errorf("%v; additionally, failed to close file: %w", err, closeErr)
            } else {
                err = fmt.Errorf("failed to close file: %w", closeErr)
            }
        }
    }()

    _, err = file.WriteString(content)
    if err != nil {
        return fmt.Errorf("writeFile: failed to write to file %s: %w", filename, err)
    }

    return nil
}

func main() {
    err := writeFile("example.txt", "Hello, World!")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("File written successfully.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        ```
        File written successfully.
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Named Return Value:</strong> The `writeFile` function uses a named return value `err` to capture errors from deferred functions.
        </li>
        <li>
          <strong>Deferred Function:</strong> The deferred anonymous function attempts to close the file and captures any error that occurs during the close operation.
        </li>
        <li>
          <strong>Error Propagation:</strong> If an error occurs during `file.Close()`, it appends this error to the existing error (if any), providing comprehensive error information.
        </li>
        <li>
          <strong>Graceful Handling:</strong> Ensures that all errors, including those from deferred operations, are properly returned and handled.
        </li>
      </ul>

      <!-- Multiple Return Values -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Multiple Return Values</h2>
      <p class="text-base md:text-lg mb-4">
        Go functions can return multiple values, a feature that is extensively used in error handling. Typically, the last return value is reserved for the `error` type.
      </p>

      <!-- Example: Multiple Return Values -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Multiple Return Values</h3>
      <p class="text-base md:text-lg mb-4">
        Shows how to return and handle multiple values, including errors.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Multiple Return Values
package main

import (
    "fmt"
    "strconv"
)

func parseNumber(s string) (int, error) {
    num, err := strconv.Atoi(s)
    if err != nil {
        return 0, fmt.Errorf("parseNumber: invalid number %s: %w", s, err)
    }
    return num, nil
}

func main() {
    inputs := []string{"42", "invalid", "100"}

    for _, input := range inputs {
        num, err := parseNumber(input)
        if err != nil {
            fmt.Println("Error:", err)
            continue
        }
        fmt.Printf("Parsed number: %d\n", num)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Parsed number: 42
Error: parseNumber: invalid number invalid: strconv.Atoi: parsing "invalid": invalid syntax
Parsed number: 100
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Function Signature:</strong> `parseNumber` returns two values: an `int` and an `error`.
        </li>
        <li>
          <strong>Error Creation:</strong> Uses `fmt.Errorf` with `%w` to wrap the original error from `strconv.Atoi`.
        </li>
        <li>
          <strong>Error Handling in Loop:</strong> In `main`, iterates over input strings, attempts to parse them, and handles any errors by printing and continuing.
        </li>
        <li>
          <strong>Graceful Degradation:</strong> The program continues processing subsequent inputs even if some fail.
        </li>
      </ul>

      <!-- Panic and Recover -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Panic and Recover</h2>
      <p class="text-base md:text-lg mb-4">
        While Go encourages explicit error handling, it provides mechanisms like `panic` and `recover` for handling unexpected and unrecoverable errors. Use these sparingly and only for truly exceptional situations.
      </p>

      <!-- Example: Using Panic and Recover -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using Panic and Recover</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates how to trigger a panic and recover from it gracefully.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Panic and Recover
package main

import (
    "fmt"
)

func riskyOperation() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    fmt.Println("Performing risky operation...")
    panic("something went wrong")
    fmt.Println("This line will not execute.")
}

func main() {
    fmt.Println("Starting program.")
    riskyOperation()
    fmt.Println("Program continues after recovery.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        ```
        Starting program.
        Performing risky operation...
        Recovered from panic: something went wrong
        Program continues after recovery.
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Panic Trigger:</strong> The `riskyOperation` function intentionally triggers a panic using `panic("something went wrong")`.
        </li>
        <li>
          <strong>Recover Mechanism:</strong> The deferred anonymous function checks for a panic using `recover()`. If a panic occurred, it handles it gracefully by printing a recovery message.
        </li>
        <li>
          <strong>Program Continuation:</strong> After recovering from the panic, the program continues executing subsequent lines without crashing.
        </li>
        <li>
          <strong>Use Cases:</strong> `panic` and `recover` should be used judiciously, primarily for handling unrecoverable errors or unexpected states.
        </li>
      </ul>

      <!-- Example: Using Panic and Recover in Resource Cleanup -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using Panic and Recover in Resource Cleanup</h3>
      <p class="text-base md:text-lg mb-4">
        Combines `panic` and `recover` with deferred resource cleanup to ensure resources are released even when unexpected errors occur.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Panic and Recover with Resource Cleanup
package main

import (
    "fmt"
    "os"
)

func openFile(filename string) (*os.File, error) {
    file, err := os.Open(filename)
    if err != nil {
        return nil, fmt.Errorf("openFile: failed to open file %s: %w", filename, err)
    }
    return file, nil
}

func main() {
    file, err := openFile("nonexistent.txt")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }

    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
        fmt.Println("Closing file.")
        file.Close()
    }()

    fmt.Println("File opened successfully.")
    // Simulate unexpected error
    panic("unexpected error during file processing")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        ```
        Error: openFile: failed to open file nonexistent.txt: open nonexistent.txt: no such file or directory
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>File Opening:</strong> Attempts to open a non-existent file, resulting in an error.
        </li>
        <li>
          <strong>Error Handling:</strong> The error is printed, and the program exits without panicking.
        </li>
        <li>
          <strong>Deferred Function:</strong> Although a deferred function is present, it doesn't execute due to the program exiting early.
        </li>
        <li>
          <strong>Graceful Exit:</strong> Ensures that resources are not leaked by handling errors properly before panic scenarios.
        </li>
      </ul>

      <!-- Handling Multiple Errors -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Handling Multiple Errors</h2>
      <p class="text-base md:text-lg mb-4">
        In more complex applications, you may encounter multiple errors that need to be handled in different ways. Go's error handling approach allows for granular and context-specific error management.
      </p>

      <!-- Example: Handling Multiple Errors -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Handling Multiple Errors</h3>
      <p class="text-base md:text-lg mb-4">
        Demonstrates how to handle different types of errors using type assertions and error wrapping.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Handling Multiple Errors
package main

import (
    "errors"
    "fmt"
    "os"
)

var (
    ErrInvalidInput = errors.New("invalid input")
    ErrDatabase     = errors.New("database error")
)

type DatabaseError struct {
    Code    int
    Message string
}

func (e *DatabaseError) Error() string {
    return fmt.Sprintf("DatabaseError %d: %s", e.Code, e.Message)
}

func processInput(input string) error {
    if input == "" {
        return ErrInvalidInput
    }
    return nil
}

func connectDatabase() error {
    return &DatabaseError{Code: 500, Message: "internal server error"}
}

func main() {
    inputs := []string{"valid", "", "another valid"}

    for _, input := range inputs {
        err := processInput(input)
        if err != nil {
            if errors.Is(err, ErrInvalidInput) {
                fmt.Println("Error: Please provide valid input.")
            } else {
                fmt.Println("Error:", err)
            }
            continue
        }
        fmt.Println("Input processed successfully:", input)
    }

    err := connectDatabase()
    if err != nil {
        var dbErr *DatabaseError
        if errors.As(err, &dbErr) {
            fmt.Printf("Failed to connect to database. Code: %d, Message: %s\n", dbErr.Code, dbErr.Message)
        } else {
            fmt.Println("Error:", err)
        }
        return
    }
    fmt.Println("Connected to database successfully.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Input processed successfully: valid
Error: invalid input
Input processed successfully: another valid
Failed to connect to database. Code: 500, Message: internal server error
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Multiple Sentinel Errors:</strong> Defines `ErrInvalidInput` and `ErrDatabase` as sentinel errors for specific error scenarios.
        </li>
        <li>
          <strong>Custom Error Type (`DatabaseError`):</strong> Provides additional context with error codes and messages.
        </li>
        <li>
          <strong>Input Processing:</strong> Iterates over a slice of inputs, processing each and handling errors based on their types.
        </li>
        <li>
          <strong>Error Type Checking:</strong> Uses `errors.Is` to check for sentinel errors and `errors.As` to assert and handle custom error types.
        </li>
        <li>
          <strong>Granular Error Handling:</strong> Allows the program to respond appropriately to different error conditions.
        </li>
      </ul>

      <!-- Example: Aggregating Multiple Errors -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Aggregating Multiple Errors</h3>
      <p class="text-base md:text-lg mb-4">
        Aggregates multiple errors into a single error value, enabling comprehensive error reporting.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Aggregating Multiple Errors
package main

import (
    "errors"
    "fmt"
    "strings"
)

type MultiError struct {
    Errors []error
}

func (m *MultiError) Error() string {
    var sb strings.Builder
    sb.WriteString("Multiple errors occurred:\n")
    for _, err := range m.Errors {
        sb.WriteString("- ")
        sb.WriteString(err.Error())
        sb.WriteString("\n")
    }
    return sb.String()
}

func performTasks(tasks []func() error) error {
    var errs []error
    for _, task := range tasks {
        if err := task(); err != nil {
            errs = append(errs, err)
        }
    }
    if len(errs) > 0 {
        return &MultiError{Errors: errs}
    }
    return nil
}

func main() {
    tasks := []func() error{
        func() error { return errors.New("task 1 failed") },
        func() error { return nil },
        func() error { return errors.New("task 3 failed") },
    }

    err := performTasks(tasks)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println("All tasks completed successfully.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        ```
        Multiple errors occurred:
        - task 1 failed
        - task 3 failed
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>MultiError Struct:</strong> Holds a slice of errors and implements the `error` interface by concatenating error messages.
        </li>
        <li>
          <strong>Task Execution:</strong> The `performTasks` function iterates over a slice of task functions, executing each and collecting any errors that occur.
        </li>
        <li>
          <strong>Aggregating Errors:</strong> If multiple errors are collected, they are aggregated into a single `MultiError` instance.
        </li>
        <li>
          <strong>Error Reporting:</strong> The aggregated error provides a comprehensive report of all errors that occurred during task execution.
        </li>
      </ul>

      <!-- Best Practices Summary -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Error Handling Best Practices Summary</h2>
      <p class="text-base md:text-lg mb-4">
        Mastering error handling in Go involves understanding the language's idiomatic approaches and applying best practices to write clean, maintainable, and reliable code. Here's a summary of the key best practices discussed:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Explicit Error Checks:</strong> Always check for errors immediately after function calls that can return them.
        </li>
        <li>
          <strong>Provide Context:</strong> When returning errors, include contextual information to aid in debugging.
        </li>
        <li>
          <strong>Use Custom Error Types:</strong> Define custom error types to carry additional information and enable type-specific error handling.
        </li>
        <li>
          <strong>Leverage Error Wrapping:</strong> Use Go's error wrapping features (`%w`) to maintain error chains and provide comprehensive error messages.
        </li>
        <li>
          <strong>Handle Specific Errors:</strong> Use `errors.Is` and `errors.As` to handle specific error types and implement conditional logic based on error types.
        </li>
        <li>
          <strong>Avoid Panics for Recoverable Errors:</strong> Reserve `panic` and `recover` for truly exceptional situations and use error returns for expected error conditions.
        </li>
        <li>
          <strong>Aggregate Multiple Errors:</strong> When dealing with multiple operations that can fail, consider aggregating errors for comprehensive reporting.
        </li>
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
          <a href="https://golang.org/pkg/errors/" class="text-blue-600 hover:underline">Go `errors` Package Documentation</a>
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
