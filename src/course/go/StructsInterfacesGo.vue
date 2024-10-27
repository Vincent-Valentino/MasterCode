<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-200 rounded-t-xl p-4">
      <img src="/go/logo.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-600">Go Structs and Interfaces</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Structs and interfaces are fundamental constructs in Go that enable developers to create complex data structures and define behavior through abstraction. Structs allow for the grouping of related data, while interfaces provide a way to specify the behavior that types must implement without dictating how that behavior is achieved. This section delves into the intricacies of structs and interfaces in Go, offering detailed explanations, practical examples, and comparisons with other programming languages to solidify your understanding.
      </p>

      <!-- Structs in Go -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Structs in Go</h2>
      <p class="text-base md:text-lg mb-4">
        Structs in Go are composite data types that group together variables under a single name. They are similar to classes in object-oriented languages but are primarily used to store data without inherent behavior.
      </p>

      <!-- Key Components of Structs -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Key Components of Structs</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Type Declaration:</strong> Defines a new struct type using the <code>type</code> keyword.
        </li>
        <li>
          <strong>Fields:</strong> Members of the struct, each with a name and type.
        </li>
        <li>
          <strong>Instantiation:</strong> Creating instances of the struct to hold specific data.
        </li>
      </ul>

      <!-- Examples Section -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Practical Examples of Structs</h3>

      <!-- Example 1: Basic Struct -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Basic Struct</h4>
      <p class="text-base md:text-lg mb-4">
        Structs serve as the foundation for creating complex data models. They encapsulate related fields, making data management more organized and intuitive.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Defining a Person struct
type Person struct {
    Name string
    Age  int
}

func main() {
    // Creating an instance of Person
    p := Person{
        Name: "Alice",
        Age:  30,
    }

    // Accessing struct fields
    fmt.Println("Name:", p.Name)
    fmt.Println("Age:", p.Age)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Name: Alice
Age: 30
</code></pre>

      <!-- Example 2: Struct Initialization Methods -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Struct Initialization Methods</h4>
      <p class="text-base md:text-lg mb-4">
        Go offers multiple ways to initialize structs, providing flexibility based on the use case and desired memory management.
      </p>
      <table class="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
        <tr>
          <th class="px-4 py-2 border">Method</th>
          <th class="px-4 py-2 border">Description</th>
          <th class="px-4 py-2 border">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="px-4 py-2 border">Struct Literal</td>
          <td class="px-4 py-2 border">Directly initializes a struct with specified field values.</td>
          <td class="px-4 py-2 border"><code>p := Person{Name: "Bob", Age: 25}</code></td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Pointer to Struct</td>
          <td class="px-4 py-2 border">Creates a pointer to a struct instance for efficient memory usage.</td>
          <td class="px-4 py-2 border"><code>p := &Person{Name: "Charlie", Age: 28}</code></td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Using <code>new</code> Keyword</td>
          <td class="px-4 py-2 border">Allocates memory for a struct and returns a pointer with zero-initialized fields.</td>
          <td class="px-4 py-2 border"><code>p := new(Person)</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Example 3: Struct Embedding -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Struct Embedding</h4>
      <p class="text-base md:text-lg mb-4">
        Struct embedding allows one struct to include another struct, promoting code reuse and composition.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Struct embedding example
type Address struct {
    Street string
    City   string
}

type Employee struct {
    Person
    ID      int
    Address
}

func main() {
    e := Employee{
        Person: Person{
            Name: "Eve",
            Age:  35,
        },
        ID: 101,
        Address: Address{
            Street: "123 Main St",
            City:   "Metropolis",
        },
    }

    fmt.Println("Name:", e.Name)       // Accessing embedded Person
    fmt.Println("Age:", e.Age)         // Accessing embedded Person
    fmt.Println("ID:", e.ID)           // Employee field
    fmt.Println("Street:", e.Street)   // Accessing embedded Address
    fmt.Println("City:", e.City)       // Accessing embedded Address
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Name: Eve
Age: 35
ID: 101
Street: 123 Main St
City: Metropolis
</code></pre>

      <!-- Example 4: Methods on Structs -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Methods on Structs</h4>
      <p class="text-base md:text-lg mb-4">
        In Go, methods can be associated with structs, allowing structs to have behaviors. Methods are functions that have a receiver argument, enabling them to access and modify the struct's fields.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Methods on structs example

// Greet method with pointer receiver
func (p *Person) Greet() {
    fmt.Printf("Hello, my name is %s and I am %d years old.\n", p.Name, p.Age)
}

// HaveBirthday method with value receiver
func (p Person) HaveBirthday() {
    p.Age++
    fmt.Printf("Happy Birthday! I am now %d years old.\n", p.Age)
}

func main() {
    p := Person{Name: "Frank", Age: 40}
    p.Greet()
    p.HaveBirthday()
    p.Greet()
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Hello, my name is Frank and I am 40 years old.
Happy Birthday! I am now 41 years old.
Hello, my name is Frank and I am 40 years old.
</code></pre>

      <!-- Example 5: Polymorphic Behavior with Interfaces -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Polymorphic Behavior with Interfaces</h4>
      <p class="text-base md:text-lg mb-4">
        Interfaces enable different structs to be treated uniformly based on shared behaviors, facilitating polymorphism.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Shape interface and implementations

type Shape interface {
    Area() float64
}

type Rectangle struct {
    Width  float64
    Height float64
}

type Circle struct {
    Radius float64
}

// Area method for Rectangle
func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

// Area method for Circle
func (c Circle) Area() float64 {
    return 3.1416 * c.Radius * c.Radius
}

// CalculateTotalArea calculates the sum of areas of multiple shapes
func CalculateTotalArea(shapes []Shape) float64 {
    total := 0.0
    for _, shape := range shapes {
        total += shape.Area()
    }
    return total
}

func main() {
    shapes := []Shape{
        Rectangle{Width: 5, Height: 3},
        Circle{Radius: 4},
        Rectangle{Width: 2.5, Height: 4},
    }

    totalArea := CalculateTotalArea(shapes)
    fmt.Printf("Total Area: %.2f\n", totalArea)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Total Area: 70.54
</code></pre>

      <!-- Comparison Tables -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Comparison Tables</h3>

      <!-- Comparison: Structs in Go vs Classes in Java vs Objects in Python -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Structs: Go vs. Classes: Java vs. Objects: Python</h4>
      <table class="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
        <tr>
          <th class="px-4 py-2 border">Feature</th>
          <th class="px-4 py-2 border">Go Structs</th>
          <th class="px-4 py-2 border">Java Classes</th>
          <th class="px-4 py-2 border">Python Objects</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="px-4 py-2 border">Encapsulation</td>
          <td class="px-4 py-2 border">Controlled via field visibility (exported vs. unexported)</td>
          <td class="px-4 py-2 border">Achieved through access modifiers (private, protected, public)</td>
          <td class="px-4 py-2 border">Managed via naming conventions and property decorators</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Inheritance</td>
          <td class="px-4 py-2 border">No classical inheritance; uses composition via struct embedding</td>
          <td class="px-4 py-2 border">Supports single inheritance</td>
          <td class="px-4 py-2 border">Supports multiple inheritance</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Methods</td>
          <td class="px-4 py-2 border">Methods can be attached using receivers</td>
          <td class="px-4 py-2 border">Methods defined within the class</td>
          <td class="px-4 py-2 border">Methods defined within the class</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Constructors</td>
          <td class="px-4 py-2 border">No constructors; use initialization functions</td>
          <td class="px-4 py-2 border">Constructors defined within the class</td>
          <td class="px-4 py-2 border">__init__ method serves as constructor</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Type System</td>
          <td class="px-4 py-2 border">Statically typed</td>
          <td class="px-4 py-2 border">Statically typed</td>
          <td class="px-4 py-2 border">Dynamically typed</td>
        </tr>
        </tbody>
      </table>

      <!-- Comparison: Interfaces in Go vs Interfaces in Java vs Abstract Base Classes in Python -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Interfaces: Go vs. Java vs. Python</h4>
      <table class="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
        <tr>
          <th class="px-4 py-2 border">Feature</th>
          <th class="px-4 py-2 border">Go Interfaces</th>
          <th class="px-4 py-2 border">Java Interfaces</th>
          <th class="px-4 py-2 border">Python Abstract Base Classes</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="px-4 py-2 border">Explicit Implementation</td>
          <td class="px-4 py-2 border">Implicit; no need to declare implementation</td>
          <td class="px-4 py-2 border">Explicit using <code>implements</code> keyword</td>
          <td class="px-4 py-2 border">Explicit by inheriting from ABC and using @abstractmethod</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Multiple Inheritance</td>
          <td class="px-4 py-2 border">Supported implicitly by implementing multiple interfaces</td>
          <td class="px-4 py-2 border">Supported by implementing multiple interfaces</td>
          <td class="px-4 py-2 border">Supported via multiple inheritance</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Method Signatures</td>
          <td class="px-4 py-2 border">Only method signatures; no implementations</td>
          <td class="px-4 py-2 border">Can have default methods with implementations</td>
          <td class="px-4 py-2 border">Can have method implementations using concrete methods</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Polymorphism</td>
          <td class="px-4 py-2 border">Achieved implicitly through interface satisfaction</td>
          <td class="px-4 py-2 border">Achieved explicitly via interface implementation</td>
          <td class="px-4 py-2 border">Achieved through abstract methods and inheritance</td>
        </tr>
        <tr>
          <td class="px-4 py-2 border">Flexibility</td>
          <td class="px-4 py-2 border">Highly flexible due to implicit nature</td>
          <td class="px-4 py-2 border">Flexible but requires explicit implementation</td>
          <td class="px-4 py-2 border">Flexible through inheritance and abstract methods</td>
        </tr>
        </tbody>
      </table>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when working with structs and interfaces in Go ensures code readability, maintainability, and efficiency. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Descriptive Naming:</strong> Use clear and descriptive names for structs and interfaces to convey their purpose.
        </li>
        <li>
          <strong>Keep Interfaces Small:</strong> Define interfaces with a minimal set of methods to promote flexibility and reduce coupling.
        </li>
        <li>
          <strong>Interface Segregation:</strong> Favor defining multiple small interfaces over a single large one, adhering to the Interface Segregation Principle.
        </li>
        <li>
          <strong>Use Struct Embedding Wisely:</strong> Leverage struct embedding for composition and code reuse, avoiding deep or complex embeddings.
        </li>
        <li>
          <strong>Method Receivers:</strong> Use pointer receivers when methods need to modify the struct's fields or when dealing with large structs to optimize performance.
        </li>
        <li>
          <strong>Avoid Exporting Fields Unnecessarily:</strong> Encapsulate struct fields by keeping them unexported (lowercase) when external access is not required.
        </li>
        <li>
          <strong>Document Interfaces Clearly:</strong> Provide clear documentation for interfaces to define expected behaviors.
        </li>
      </ul>

      <!-- Example: Refactoring with Interfaces -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Refactoring with Interfaces</h3>
      <p class="text-base md:text-lg mb-4">
        Refactoring code to utilize interfaces can enhance flexibility and testability. The following example demonstrates refactoring a logger system using interfaces:
      </p>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Before Refactoring: Concrete Logger</h4>
      <p class="text-base md:text-lg mb-4">
        The initial implementation uses a concrete <code>ConsoleLogger</code> without interfaces:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Before refactoring: Concrete logger
type ConsoleLogger struct{}

func (cl ConsoleLogger) Log(message string) {
    fmt.Println("LOG:", message)
}

func main() {
    logger := ConsoleLogger{}
    logger.Log("Starting application...")
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">After Refactoring: Using Interfaces</h4>
      <p class="text-base md:text-lg mb-4">
        Refactored to use a <code>Logger</code> interface, allowing for different logging implementations:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// After refactoring: Using interfaces

// Logger interface
type Logger interface {
    Log(message string)
}

// ConsoleLogger struct
type ConsoleLogger struct{}

func (cl ConsoleLogger) Log(message string) {
    fmt.Println("LOG:", message)
}

// FileLogger struct
type FileLogger struct {
    FileName string
}

func (fl FileLogger) Log(message string) {
    // Simulate writing to a file
    fmt.Printf("Writing to %s: %s\n", fl.FileName, message)
}

// Application struct using Logger interface
type Application struct {
    logger Logger
}

func (app *Application) Start() {
    app.logger.Log("Starting application...")
}

func main() {
    consoleLogger := ConsoleLogger{}
    app1 := Application{logger: consoleLogger}
    app1.Start()

    fileLogger := FileLogger{FileName: "app.log"}
    app2 := Application{logger: fileLogger}
    app2.Start()
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
LOG: Starting application...
Writing to app.log: Starting application...
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Logger Interface:</strong> Defines a <code>Log</code> method, abstracting the logging behavior.
        </li>
        <li>
          <strong>ConsoleLogger and FileLogger Structs:</strong> Implement the <code>Logger</code> interface, providing different logging mechanisms.
        </li>
        <li>
          <strong>Application Struct:</strong> Depends on the <code>Logger</code> interface rather than concrete implementations, promoting flexibility.
        </li>
        <li>
          <strong>Method Calls:</strong> Demonstrates how the <code>Application</code> struct can use different loggers interchangeably.
        </li>
      </ul>

      <!-- Advanced Topics -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Advanced Topics: Interface Composition and Type Embedding</h2>
      <p class="text-base md:text-lg mb-4">
        Beyond basic usage, Go's interface composition and type embedding offer powerful tools for building flexible and reusable code structures.
      </p>

      <!-- Interface Composition -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Interface Composition</h3>
      <p class="text-base md:text-lg mb-4">
        Interface composition allows for building complex interfaces by combining simpler ones. This promotes modularity and adherence to the Single Responsibility Principle, enabling more flexible and reusable code structures.
      </p>

      <p class="text-base md:text-lg mb-6">
        <strong>Benefits of Interface Composition:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Modularity:</strong> Break down complex behaviors into smaller, manageable interfaces.
        </li>
        <li>
          <strong>Reusability:</strong> Reuse existing interfaces to compose new ones without duplication.
        </li>
        <li>
          <strong>Flexibility:</strong> Create tailored interfaces for specific use cases by combining relevant behaviors.
        </li>
      </ul>

      <!-- Example: Interface Composition -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Example: Composed Interfaces</h4>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates composing interfaces to create a comprehensive contract:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Interface composition example

type Reader interface {
    Read() string
}

type Writer interface {
    Write(data string)
}

type Closer interface {
    Close() error
}

type ReadWriteCloser interface {
    Reader
    Writer
    Closer
}

type File struct {
    Content string
}

func (f *File) Read() string {
    return f.Content
}

func (f *File) Write(data string) {
    f.Content += data
}

func (f *File) Close() error {
    fmt.Println("File closed.")
    return nil
}

func main() {
    var rwc ReadWriteCloser = &File{Content: "Hello, World!"}

    fmt.Println("Content:", rwc.Read())
    rwc.Write(" Additional Content.")
    fmt.Println("Updated Content:", rwc.Read())
    rwc.Close()
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Content: Hello, World!
Updated Content: Hello, World! Additional Content.
File closed.
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>ReadWriteCloser Interface:</strong> Composes <code>Reader</code>, <code>Writer</code>, and <code>Closer</code> interfaces, defining a comprehensive set of behaviors.
        </li>
        <li>
          <strong>File Struct:</strong> Implements all methods required by the <code>ReadWriteCloser</code> interface, thereby satisfying it implicitly.
        </li>
        <li>
          <strong>Interface Assignment:</strong> Assigns a <code>File</code> instance to a <code>ReadWriteCloser</code> variable, demonstrating the power of interface composition.
        </li>
      </ul>

      <!-- Type Embedding in Structs -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Type Embedding in Structs</h3>
      <p class="text-base md:text-lg mb-4">
        Type embedding allows structs to include other structs or interfaces, promoting code reuse and composition without traditional inheritance. This technique enhances the flexibility and maintainability of your code.
      </p>

      <p class="text-base md:text-lg mb-6">
        <strong>Advantages of Type Embedding:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Code Reuse:</strong> Embed existing types to reuse their fields and methods without duplication.
        </li>
        <li>
          <strong>Composition Over Inheritance:</strong> Build complex types by composing simpler, reusable components.
        </li>
        <li>
          <strong>Enhanced Readability:</strong> Access embedded fields and methods directly, simplifying the code structure.
        </li>
      </ul>

      <!-- Example: Type Embedding with Interfaces -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Example: Type Embedding with Interfaces</h4>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates embedding interfaces within structs to compose behavior:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Type embedding with interfaces example

type Reader interface {
    Read() string
}

type Writer interface {
    Write(data string)
}

type File struct {
    Reader
    Writer
}

func main() {
    reader := func() string {
        return "Reading data."
    }

    writer := func(data string) {
        fmt.Println("Writing data:", data)
    }

    file := File{
        Reader: reader,
        Writer: writer,
    }

    fmt.Println(file.Read())
    file.Write("Sample Data")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Output:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6"><code>
Reading data.
Writing data: Sample Data
</code></pre>

      <!-- Explanation -->
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Reader and Writer Interfaces:</strong> Define separate behaviors for reading and writing.
        </li>
        <li>
          <strong>File Struct:</strong> Embeds both <code>Reader</code> and <code>Writer</code> interfaces, allowing it to utilize both behaviors.
        </li>
        <li>
          <strong>Anonymous Functions as Interfaces:</strong> Assigns anonymous functions to the embedded interfaces, satisfying the <code>Reader</code> and <code>Writer</code> contracts.
        </li>
        <li>
          <strong>Method Calls:</strong> Calls <code>Read</code> and <code>Write</code> methods directly on the <code>File</code> struct due to interface embedding.
        </li>
      </ul>

      <!-- Comparison with Other Languages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Comparison with Other Languages</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding how structs and interfaces in Go compare with similar constructs in other programming languages can provide valuable insights, especially for developers transitioning to Go or working in multi-language environments.
      </p>

      <!-- Structs Comparison -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Structs Comparison</h3>
      <p class="text-base md:text-lg mb-4">
        Here's how structs in Go compare with classes in Java and objects in Python:
      </p>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Go Structs:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Go struct
type Person struct {
    Name string
    Age  int
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Java Classes:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Java class
public class Person {
    private String name;
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getters and setters
    public String getName() { return name; }
    public int getAge() { return age; }
    public void setName(String name) { this.name = name; }
    public void setAge(int age) { this.age = age; }
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Python Objects:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
# Python class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        <strong>Key Differences:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Encapsulation:</strong> Go structs do not support encapsulation by default. Fields starting with an uppercase letter are exported (public), while those starting with a lowercase letter are unexported (private).
        </li>
        <li>
          <strong>Inheritance:</strong> Go does not support classical inheritance. Instead, it uses composition through struct embedding.
        </li>
        <li>
          <strong>Methods:</strong> Go allows attaching methods to structs using receivers, enabling behavior association similar to classes.
        </li>
        <li>
          <strong>Constructors:</strong> Go does not have constructors. Instead, functions are used to initialize structs.
        </li>
      </ul>

      <!-- Interfaces Comparison -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Interfaces Comparison</h3>
      <p class="text-base md:text-lg mb-4">
        Interfaces in Go offer a different approach compared to interfaces in Java and abstract base classes in Python.
      </p>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Go Interfaces:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Go interface
type Speaker interface {
    Speak() string
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Java Interfaces:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Java interface
public interface Speaker {
    String speak();
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Python Abstract Base Classes:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
# Python abstract base class
from abc import ABC, abstractmethod

class Speaker(ABC):
    @abstractmethod
    def speak(self):
        pass
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        <strong>Key Differences:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Explicit Implementation:</strong> Java requires explicit declaration of interface implementation using the <code>implements</code> keyword, whereas Go infers interface satisfaction implicitly.
        </li>
        <li>
          <strong>Abstract Methods:</strong> Python uses abstract base classes with <code>@abstractmethod</code> decorators to define abstract methods, while Go uses interfaces with method signatures.
        </li>
        <li>
          <strong>Multiple Inheritance:</strong> Go interfaces support multiple inheritance implicitly by embedding multiple interfaces, similar to Java interfaces. Python supports multiple inheritance more broadly through classes.
        </li>
        <li>
          <strong>Method Signatures:</strong> Go interfaces are satisfied implicitly based on method signatures, promoting flexibility and reducing boilerplate code.
        </li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering structs and interfaces in Go is essential for building robust, scalable, and maintainable applications. Structs provide a way to model and encapsulate data, while interfaces enable abstraction and polymorphism, allowing different types to be treated uniformly based on their behavior.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Key Takeaways:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Structs:</strong> Utilize structs to group related data fields logically, leveraging embedding for composition and code reuse.
        </li>
        <li>
          <strong>Interfaces:</strong> Define clear and concise interfaces to represent behaviors, enabling polymorphic interactions between different types.
        </li>
        <li>
          <strong>Implicit Satisfaction:</strong> Go's implicit interface satisfaction promotes flexibility and reduces the need for boilerplate code.
        </li>
        <li>
          <strong>Interface Composition:</strong> Combine multiple interfaces to create more comprehensive and modular contracts.
        </li>
        <li>
          <strong>Best Practices:</strong> Follow best practices in naming, method receiver selection, and interface design to enhance code quality.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        By effectively leveraging structs and interfaces, developers can build Go applications that are not only efficient and performant but also easy to understand, extend, and maintain. Continue exploring more advanced topics, such as interface-based dependency injection and mocking for testing, to further enhance your Go programming expertise.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of structs and interfaces in Go and explore more advanced concepts, consider the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://golang.org/doc/effective_go.html#interfaces" class="text-blue-600 hover:underline">Effective Go: Interfaces</a>
        </li>
        <li>
          <a href="https://tour.golang.org/methods/1" class="text-blue-600 hover:underline">A Tour of Go: Methods</a>
        </li>
        <li>
          <a href="https://www.golang-book.com/books/intro/14" class="text-blue-600 hover:underline">The Go Programming Language Book</a>
        </li>
        <li>
          <a href="https://golangbot.com/interfaces/" class="text-blue-600 hover:underline">GolangBot: Interfaces</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=SqrbIlUwR0U" class="text-blue-600 hover:underline">Go Interfaces Video Tutorial</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoStructsAndInterfaces',
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
