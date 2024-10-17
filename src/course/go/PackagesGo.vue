<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-green-500 rounded-t-xl p-4">
      <img src="/icons/go.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Working with Packages in Go</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Go's package system is a cornerstone of its simplicity and efficiency, enabling developers to organize, reuse, and manage code effectively. By understanding how to create, import, and utilize packages, you can build scalable and maintainable applications. This module delves into the fundamentals of Go packages, exploring their creation, best practices for organization, dependency management, and the nuances of exported versus unexported identifiers. Through practical examples and detailed explanations, you'll gain the expertise needed to harness Go's powerful package system to its fullest potential.
      </p>

      <!-- What are Packages? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What are Packages?</h2>
      <p class="text-base md:text-lg mb-4">
        In Go, a package is a way to group related Go files together. Packages allow you to organize your code into reusable components, making it easier to manage large codebases and promote code reuse.
      </p>

      <!-- Creating a Package -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating a Package</h3>
      <p class="text-base md:text-lg mb-4">
        To create a package, follow these steps:
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-4">
        <li>
          <strong>Create a Directory:</strong> Each package resides in its own directory.
        </li>
        <li>
          <strong>Add Go Files:</strong> Add Go source files to the directory, all starting with the same package name.
        </li>
        <li>
          <strong>Define the Package:</strong> At the top of each Go file, declare the package name using the `package` keyword.
        </li>
      </ol>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// utils/utils.go
package utils

import "fmt"

// Greet prints a greeting message.
func Greet(name string) {
    fmt.Printf("Hello, %s!\n", name)
}
</code>
      </pre>

      <!-- Using a Package -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using a Package</h3>
      <p class="text-base md:text-lg mb-4">
        To use a package, you need to import it into your Go file using the `import` statement. Ensure that the package is accessible via your module's path.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// main.go
package main

import (
    "github.com/yourusername/yourproject/utils"
)

func main() {
    utils.Greet("World")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Hello, World!
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Import Statement:</strong> The `import` statement brings the `utils` package into the current file.
        </li>
        <li>
          <strong>Function Call:</strong> `utils.Greet("World")` calls the `Greet` function from the `utils` package.
        </li>
      </ul>

      <!-- Exported vs Unexported Identifiers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Exported vs Unexported Identifiers</h2>
      <p class="text-base md:text-lg mb-4">
        In Go, identifiers (such as variables, types, functions) are exported if they start with an uppercase letter. Exported identifiers are accessible from other packages, while unexported ones are private to the package.
      </p>

      <!-- Example of Exported and Unexported Identifiers -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Exported and Unexported Identifiers Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// mathutils/mathutils.go
package mathutils

// Add is an exported function.
func Add(a, b int) int {
    return a + b
}

// subtract is an unexported function.
func subtract(a, b int) int {
    return a - b
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Usage in Another Package:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// main.go
package main

import (
    "fmt"
    "github.com/yourusername/yourproject/mathutils"
)

func main() {
    sum := mathutils.Add(5, 3)
    fmt.Println("Sum:", sum)

    // The following line would cause a compile-time error because 'subtract' is unexported.
    // difference := mathutils.subtract(5, 3)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Exported Function:</strong> `Add` starts with an uppercase letter and is accessible from other packages.
        </li>
        <li>
          <strong>Unexported Function:</strong> `subtract` starts with a lowercase letter and is not accessible outside the `mathutils` package.
        </li>
      </ul>

      <!-- Package Initialization -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Package Initialization</h2>
      <p class="text-base md:text-lg mb-4">
        Packages can have initialization code that runs before the main program starts. This is done using the `init` function, which is automatically invoked by the Go runtime.
      </p>

      <!-- Init Function Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Init Function Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// config/config.go
package config

import "fmt"

var ConfigLoaded bool

func init() {
    // Initialization logic, such as loading configuration.
    fmt.Println("Initializing configuration...")
    ConfigLoaded = true
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output on Import:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Initializing configuration...
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Init Function:</strong> The `init` function is called automatically when the package is imported, before any other code is executed.
        </li>
        <li>
          <strong>Use Cases:</strong> Commonly used for setup tasks like loading configurations, initializing variables, or registering types.
        </li>
      </ul>

      <!-- Dependency Management with Go Modules -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Dependency Management with Go Modules</h2>
      <p class="text-base md:text-lg mb-4">
        Go Modules provide a way to manage dependencies in your Go projects. They handle versioning and ensure that your project builds with the correct versions of external packages.
      </p>

      <!-- Initializing a Go Module -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Initializing a Go Module</h3>
      <p class="text-base md:text-lg mb-4">
        To initialize a Go module, use the `go mod init` command followed by your module path.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
$ go mod init github.com/yourusername/yourproject
go: creating new go.mod: module github.com/yourusername/yourproject
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Module Path:</strong> Typically corresponds to the repository location.
        </li>
        <li>
          <strong>go.mod File:</strong> Created to track module dependencies and versions.
        </li>
      </ul>

      <!-- Adding Dependencies -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Adding Dependencies</h3>
      <p class="text-base md:text-lg mb-4">
        To add a dependency, simply import it in your code and run `go get`.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// main.go
package main

import (
    "fmt"
    "github.com/google/uuid"
)

func main() {
    id := uuid.New()
    fmt.Println("Generated UUID:", id)
}
</code>
      </pre>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
$ go get github.com/google/uuid
go: downloading github.com/google/uuid v1.3.0
go: added github.com/google/uuid v1.3.0
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Importing Packages:</strong> Import external packages as needed in your code.
        </li>
        <li>
          <strong>go get Command:</strong> Automatically adds the dependency to `go.mod` and downloads it.
        </li>
      </ul>

      <!-- Organizing Code with Packages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Organizing Code with Packages</h2>
      <p class="text-base md:text-lg mb-4">
        Properly organizing your code into packages enhances readability, maintainability, and reusability. Here are some best practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Single Responsibility:</strong> Each package should have a clear, single responsibility.
        </li>
        <li>
          <strong>Descriptive Names:</strong> Use descriptive and meaningful package names that reflect their functionality.
        </li>
        <li>
          <strong>Avoid Circular Dependencies:</strong> Ensure that packages do not depend on each other in a circular manner.
        </li>
        <li>
          <strong>Internal Packages:</strong> Use the `internal` directory to restrict package access within your module.
        </li>
        <li>
          <strong>Consistent Structure:</strong> Maintain a consistent directory and package structure across your project.
        </li>
      </ul>

      <!-- Example Project Structure -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example Project Structure</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
yourproject/
├── go.mod
├── main.go
├── utils/
│   ├── utils.go
│   └── utils_test.go
├── mathutils/
│   ├── mathutils.go
│   └── mathutils_test.go
└── internal/
    └── config/
        ├── config.go
        └── config_test.go
</code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Using Packages</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Keep Packages Small:</strong> Small, focused packages are easier to understand and maintain.
        </li>
        <li>
          <strong>Use Meaningful Names:</strong> Package names should be short, lowercase, and descriptive.
        </li>
        <li>
          <strong>Export Only What’s Necessary:</strong> Limit exported identifiers to those that need to be accessed externally.
        </li>
        <li>
          <strong>Document Packages:</strong> Provide clear documentation for your packages, explaining their purpose and usage.
        </li>
        <li>
          <strong>Avoid Global State:</strong> Minimize the use of global variables to reduce dependencies and improve testability.
        </li>
        <li>
          <strong>Encapsulate Implementation Details:</strong> Keep implementation details hidden by exporting only necessary interfaces and functions.
        </li>
      </ul>

      <!-- Example: Encapsulating Implementation -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Encapsulating Implementation</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// storage/storage.go
package storage

import (
    "encoding/json"
    "io/ioutil"
    "os"
    "sync"
)

// Storage defines methods for data persistence.
type Storage interface {
    Save(data interface{}) error
    Load(data interface{}) error
}

// fileStorage is an unexported struct implementing Storage.
type fileStorage struct {
    filename string
    mu       sync.Mutex
}

// NewFileStorage returns a new instance of Storage.
func NewFileStorage(filename string) Storage {
    return &fileStorage{
        filename: filename,
    }
}

// Save writes data to the file.
func (fs *fileStorage) Save(data interface{}) error {
    fs.mu.Lock()
    defer fs.mu.Unlock()

    bytes, err := json.MarshalIndent(data, "", "  ")
    if err != nil {
        return err
    }

    return ioutil.WriteFile(fs.filename, bytes, 0644)
}

// Load reads data from the file.
func (fs *fileStorage) Load(data interface{}) error {
    fs.mu.Lock()
    defer fs.mu.Unlock()

    file, err := os.Open(fs.filename)
    if err != nil {
        return err
    }
    defer file.Close()

    bytes, err := ioutil.ReadAll(file)
    if err != nil {
        return err
    }

    return json.Unmarshal(bytes, data)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Unexported Struct:</strong> `fileStorage` is unexported, preventing external packages from accessing its fields directly.
        </li>
        <li>
          <strong>Exported Interface:</strong> `Storage` interface is exported, allowing external packages to interact with it without knowing the underlying implementation.
        </li>
        <li>
          <strong>Factory Function:</strong> `NewFileStorage` is an exported function that returns the `Storage` interface, enabling controlled creation of `fileStorage` instances.
        </li>
      </ul>

      <!-- Dependency Injection -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Dependency Injection</h2>
      <p class="text-base md:text-lg mb-4">
        Dependency Injection (DI) is a design pattern that allows you to inject dependencies into your components, promoting loose coupling and easier testing. In Go, DI is typically achieved by passing dependencies as function arguments or struct fields.
      </p>

      <!-- Example: Dependency Injection -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Dependency Injection</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// main.go
package main

import (
    "fmt"

    "github.com/yourusername/yourproject/mathutils"
    "github.com/yourusername/yourproject/storage"
)

type Calculator struct {
    Storage storage.Storage
}

func (c *Calculator) Add(a, b int) int {
    result := mathutils.Add(a, b)
    c.Storage.Save(result)
    return result
}

func main() {
    st := storage.NewFileStorage("results.json")
    calc := Calculator{Storage: st}

    sum := calc.Add(5, 7)
    fmt.Println("Sum:", sum)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Calculator Struct:</strong> Depends on the `Storage` interface for saving results.
        </li>
        <li>
          <strong>Dependency Injection:</strong> The `Storage` dependency is injected into the `Calculator` struct via its field.
        </li>
        <li>
          <strong>Benefits:</strong> This approach allows you to easily swap out the storage implementation, facilitating testing and flexibility.
        </li>
      </ul>

      <!-- Using Internal Packages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Using Internal Packages</h2>
      <p class="text-base md:text-lg mb-4">
        The `internal` directory restricts package access within your module. Packages inside `internal` cannot be imported by code outside the module, enhancing encapsulation.
      </p>

      <!-- Example: Internal Packages -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Internal Packages</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// internal/config/config.go
package config

import (
    "fmt"
)

func loadConfig() {
    fmt.Println("Loading configuration...")
}

// main.go
package main

import (
    "github.com/yourusername/yourproject/internal/config"
)

func main() {
    config.loadConfig()
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Internal Directory:</strong> The `internal/config` package is only accessible within the `yourproject` module.
        </li>
        <li>
          <strong>Access Restriction:</strong> External modules cannot import `github.com/yourusername/yourproject/internal/config`.
        </li>
      </ul>

      <!-- External Packages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Using External Packages</h2>
      <p class="text-base md:text-lg mb-4">
        Go's rich ecosystem offers a plethora of external packages that can be integrated into your projects to extend functionality, streamline development, and adhere to best practices.
      </p>

      <!-- Example: Using an External Package -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using an External Package</h3>
      <p class="text-base md:text-lg mb-4">
        Integrate the popular `gorilla/mux` package for HTTP request routing.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// main.go
package main

import (
    "fmt"
    "net/http"

    "github.com/gorilla/mux"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintln(w, "Welcome to the Home Page!")
}

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/", homeHandler)

    http.Handle("/", r)
    fmt.Println("Server is running on port 8080")
    http.ListenAndServe(":8080", nil)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Importing mux:</strong> `github.com/gorilla/mux` is imported to handle HTTP routing.
        </li>
        <li>
          <strong>Router Setup:</strong> A new router is created, and routes are defined using `HandleFunc`.
        </li>
        <li>
          <strong>Server Start:</strong> The HTTP server listens on port 8080 and uses the configured router.
        </li>
      </ul>

      <!-- Vendor Directory -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Vendor Directory</h2>
      <p class="text-base md:text-lg mb-4">
        The `vendor` directory can be used to include dependencies within your project. This ensures that your project uses specific versions of dependencies, providing consistency across different environments.
      </p>

      <!-- Example: Vendor Directory -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Vendor Directory</h3>
      <p class="text-base md:text-lg mb-4">
        To create a `vendor` directory, use the `go mod vendor` command after adding your dependencies.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
$ go mod vendor
go: copying github.com/gorilla/mux v1.8.0 to vendor/github.com/gorilla/mux
go: copying github.com/yourusername/yourproject/utils v0.0.0-00010101000000-000000000000 to vendor/github.com/yourusername/yourproject/utils
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>go mod vendor:</strong> This command copies all dependencies to the `vendor` directory.
        </li>
        <li>
          <strong>Version Consistency:</strong> Ensures that all team members and build environments use the exact same versions of dependencies.
        </li>
      </ul>

      <!-- Import Path Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Import Path Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Following best practices for import paths enhances readability and avoids common pitfalls.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Use Fully Qualified Paths:</strong> Always use the full repository path when importing packages.
        </li>
        <li>
          <strong>Consistent Naming:</strong> Maintain consistent naming conventions across your modules and packages.
        </li>
        <li>
          <strong>Avoid Relative Paths:</strong> Do not use relative paths in import statements.
        </li>
        <li>
          <strong>Semantic Versioning:</strong> Follow semantic versioning to manage package versions effectively.
        </li>
      </ul>

      <!-- Example: Correct vs Incorrect Import Paths -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Correct vs Incorrect Import Paths</h3>
      <p class="text-base md:text-lg mb-4">
        Compare correct and incorrect import path usage.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Correct Import Path
import "github.com/yourusername/yourproject/utils"

// Incorrect Import Path
import "./utils" // Avoid using relative paths
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Fully Qualified:</strong> Using the full path ensures clarity and consistency.
        </li>
        <li>
          <strong>Avoid Relative:</strong> Relative paths can lead to confusion and are not recommended in Go modules.
        </li>
      </ul>

      <!-- Circular Dependencies -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Circular Dependencies</h2>
      <p class="text-base md:text-lg mb-4">
        Circular dependencies occur when two or more packages depend on each other, either directly or indirectly. This can lead to compilation errors and complex, hard-to-maintain code.
      </p>
      <p class="text-base md:text-lg mb-4">
        To avoid circular dependencies:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Refactor Common Code:</strong> Move shared functionalities to a separate package that both original packages can import.
        </li>
        <li>
          <strong>Interface Segregation:</strong> Define interfaces in one package and implement them in another to reduce direct dependencies.
        </li>
        <li>
          <strong>Dependency Direction:</strong> Ensure a unidirectional dependency flow between packages.
        </li>
      </ul>

      <!-- Example: Resolving Circular Dependencies -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Resolving Circular Dependencies</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// utils/utils.go
package utils

func Greet(name string) string {
    return "Hello, " + name + "!"
}

// mathutils/mathutils.go
package mathutils

import "github.com/yourusername/yourproject/utils"

func Add(a, b int) int {
    return a + b
}

// main.go
package main

import (
    "fmt"

    "github.com/yourusername/yourproject/mathutils"
    "github.com/yourusername/yourproject/utils"
)

func main() {
    sum := mathutils.Add(5, 3)
    greeting := utils.Greet("World")
    fmt.Println(greeting)
    fmt.Println("Sum:", sum)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>No Circular Dependency:</strong> `mathutils` depends on `utils`, but `utils` does not depend on `mathutils`, ensuring a unidirectional dependency.
        </li>
        <li>
          <strong>Modular Design:</strong> Shared functionalities are placed in `utils`, promoting reusability without inter-package dependencies.
        </li>
      </ul>

      <!-- Practical Example: Building a Modular Application -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Practical Example: Building a Modular Application</h2>
      <p class="text-base md:text-lg mb-4">
        Let's build a simple modular application that demonstrates package creation, usage, and organization.
      </p>

      <!-- Project Structure -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Project Structure</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
myapp/
├── go.mod
├── main.go
├── utils/
│   ├── utils.go
│   └── utils_test.go
├── mathutils/
│   ├── mathutils.go
│   └── mathutils_test.go
└── internal/
    └── config/
        ├── config.go
        └── config_test.go
</code>
      </pre>

      <!-- go.mod -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">go.mod</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
module github.com/yourusername/myapp

go 1.16
</code>
      </pre>

      <!-- main.go -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">main.go</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// main.go
package main

import (
    "fmt"

    "github.com/yourusername/myapp/mathutils"
    "github.com/yourusername/myapp/utils"
    "github.com/yourusername/myapp/internal/config"
)

func main() {
    config.LoadConfig()

    sum := mathutils.Add(10, 20)
    greeting := utils.Greet("Alice")

    fmt.Println(greeting)
    fmt.Println("Sum:", sum)
}
</code>
      </pre>

      <!-- utils/utils.go -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">utils/utils.go</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// utils/utils.go
package utils

import "fmt"

// Greet returns a greeting message for the given name.
func Greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}
</code>
      </pre>

      <!-- utils/utils_test.go -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">utils/utils_test.go</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// utils/utils_test.go
package utils

import "testing"

func TestGreet(t *testing.T) {
    expected := "Hello, Bob!"
    result := Greet("Bob")
    if result != expected {
        t.Errorf("Expected '%s', got '%s'", expected, result)
    }
}
</code>
      </pre>

      <!-- mathutils/mathutils.go -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">mathutils/mathutils.go</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// mathutils/mathutils.go
package mathutils

// Add returns the sum of two integers.
func Add(a, b int) int {
    return a + b
}
</code>
      </pre>

      <!-- mathutils/mathutils_test.go -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">mathutils/mathutils_test.go</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// mathutils/mathutils_test.go
package mathutils

import "testing"

func TestAdd(t *testing.T) {
    a, b := 2, 3
    expected := 5
    result := Add(a, b)
    if result != expected {
        t.Errorf("Add(%d, %d) = %d; want %d", a, b, result, expected)
    }
}
</code>
      </pre>

      <!-- internal/config/config.go -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">internal/config/config.go</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// internal/config/config.go
package config

import "fmt"

// LoadConfig initializes the application's configuration.
func LoadConfig() {
    // In a real application, you might load from a file or environment variables.
    fmt.Println("Configuration loaded successfully.")
}
</code>
      </pre>

      <!-- internal/config/config_test.go -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">internal/config/config_test.go</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// internal/config/config_test.go
package config

import "testing"

func TestLoadConfig(t *testing.T) {
    // Since LoadConfig only prints, ensure it doesn't panic.
    LoadConfig()
}
</code>
      </pre>

      <!-- Building and Running the Application -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Building and Running the Application</h2>
      <p class="text-base md:text-lg mb-4">
        Follow these steps to build and run your modular Go application:
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Initialize Go Module:</strong> Ensure you're in the project directory and initialize the module.
          <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-4">
<code>
$ go mod init github.com/yourusername/myapp
</code>
          </pre>
        </li>
        <li>
          <strong>Add Dependencies:</strong> If using external packages, add them using `go get`.
          <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-4">
<code>
$ go get github.com/gorilla/mux
</code>
          </pre>
        </li>
        <li>
          <strong>Build the Application:</strong> Compile the application using `go build`.
          <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-4">
<code>
$ go build -o myapp
</code>
          </pre>
        </li>
        <li>
          <strong>Run the Application:</strong> Execute the compiled binary.
          <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-4">
<code>
$ ./myapp
Configuration loaded successfully.
Hello, Alice!
Sum: 30
</code>
          </pre>
        </li>
      </ol>

      <!-- Testing Packages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Testing Packages</h2>
      <p class="text-base md:text-lg mb-4">
        Go provides a built-in testing framework that makes it easy to write and run tests for your packages. Tests are written in files ending with `_test.go` and use the `testing` package.
      </p>

      <!-- Running Tests -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Running Tests</h3>
      <p class="text-base md:text-lg mb-4">
        To run all tests in your module, use the `go test ./...` command.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
$ go test ./...
ok      github.com/yourusername/myapp/mathutils    0.XXXs
ok      github.com/yourusername/myapp/utils        0.XXXs
ok      github.com/yourusername/myapp/internal/config  0.XXXs
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>go test Command:</strong> Runs all tests in the specified packages. The `./...` pattern includes all subdirectories.
        </li>
        <li>
          <strong>Test Results:</strong> Each package reports its test results, indicating whether tests passed or failed.
        </li>
      </ul>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Introduction to Packages</li>
        <li>Creating a Package</li>
        <li>Using a Package</li>
        <li>Exported vs Unexported Identifiers</li>
        <li>Package Initialization</li>
        <li>Dependency Management with Go Modules</li>
        <li>Organizing Code with Packages</li>
        <li>Best Practices for Using Packages</li>
        <li>Using Internal Packages</li>
        <li>Using External Packages</li>
        <li>Vendor Directory</li>
        <li>Import Path Best Practices</li>
        <li>Circular Dependencies</li>
        <li>Practical Example: Building a Modular Application</li>
        <li>Building and Running the Application</li>
        <li>Testing Packages</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Mastering Go's package system is essential for developing clean, efficient, and maintainable applications. By effectively organizing your code into well-structured packages, adhering to best practices, and leveraging Go Modules for dependency management, you can build scalable solutions that stand the test of time. Remember to keep packages focused, use meaningful names, and encapsulate implementation details to promote reusability and reduce complexity.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Key Takeaways:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Packages as Building Blocks:</strong> Use packages to encapsulate related functionalities and promote code reuse.
        </li>
        <li>
          <strong>Export Control:</strong> Manage visibility using exported (uppercase) and unexported (lowercase) identifiers.
        </li>
        <li>
          <strong>Dependency Management:</strong> Utilize Go Modules to handle dependencies effectively.
        </li>
        <li>
          <strong>Modular Design:</strong> Organize your codebase into logical, manageable packages to enhance maintainability.
        </li>
        <li>
          <strong>Testing:</strong> Implement thorough tests for each package to ensure reliability and correctness.
        </li>
      </ul>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of Go's package system and best practices, consider exploring the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://golang.org/doc/effective_go.html#packages" class="text-blue-600 hover:underline">Effective Go: Packages</a>
        </li>
        <li>
          <a href="https://golang.org/doc/code.html" class="text-blue-600 hover:underline">Go Code Organization</a>
        </li>
        <li>
          <a href="https://blog.golang.org/organizing-code" class="text-blue-600 hover:underline">Go Blog: Organizing Code</a>
        </li>
        <li>
          <a href="https://golang.org/pkg/" class="text-blue-600 hover:underline">Go Packages Documentation</a>
        </li>
        <li>
          <a href="https://www.golang-book.com/books/intro/14" class="text-blue-600 hover:underline">The Go Programming Language Book: Packages</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkingWithPackagesInGo',
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
