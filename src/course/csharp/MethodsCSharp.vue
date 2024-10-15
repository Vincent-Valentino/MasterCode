<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-950 rounded-t-xl p-4">
      <img src="/csharp/logo.svg" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">C# Methods</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Methods are fundamental building blocks in C#, enabling developers to create reusable, modular, and organized code. By encapsulating functionality within methods, you can simplify complex tasks, enhance code readability, and promote maintainability. This section explores the importance of methods in structuring code, delves into method syntax and signatures, parameters and return types, method overloading, and the distinction between static and instance methods. Practical examples accompany each topic to illustrate their application in real-world scenarios.
      </p>

      <!-- Importance of Methods -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">The Importance of Methods in Structuring Code</h2>
      <p class="text-base md:text-lg mb-4">
        Methods play a crucial role in organizing code by breaking down complex tasks into manageable, logical units. This modular approach offers several benefits:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Reusability:</strong> Methods allow you to reuse code across different parts of your application, reducing redundancy and promoting consistency.</li>
        <li><strong>Maintainability:</strong> Encapsulating functionality within methods makes it easier to update and maintain code, as changes can be made in one place without affecting the entire application.</li>
        <li><strong>Readability:</strong> Well-named methods provide a clear understanding of what a section of code does, making the codebase easier to navigate and comprehend.</li>
        <li><strong>Abstraction:</strong> Methods abstract away complex operations, allowing developers to focus on higher-level logic without getting bogged down by implementation details.</li>
      </ul>

      <!-- Method Syntax and Signatures -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Method Syntax and Signatures</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding the syntax and signatures of methods is essential for defining and using them effectively in C#. A method signature comprises the method name and the number, types, and order of its parameters. The method signature distinguishes one method from another, especially in scenarios involving method overloading.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Basic Method Syntax:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Method Declaration
[access_modifier] [return_type] MethodName([parameters])
{
    // Method body
}

// Example: A method that adds two integers and returns the result
public int Add(int a, int b)
{
    return a + b;
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        - <strong>Access Modifier:</strong> Determines the visibility of the method (e.g., <code>public</code>, <code>private</code>, <code>protected</code>, <code>internal</code>).
      </p>
      <p class="text-base md:text-lg mb-6">
        - <strong>Return Type:</strong> Specifies the type of value the method returns (e.g., <code>int</code>, <code>void</code>, <code>string</code>).
      </p>
      <p class="text-base md:text-lg mb-6">
        - <strong>Method Name:</strong> A descriptive name following C# naming conventions (PascalCase).
      </p>
      <p class="text-base md:text-lg mb-6">
        - <strong>Parameters:</strong> Input values the method can accept, defined by type and name.
      </p>
      <p class="text-base md:text-lg mb-6">
        - <strong>Method Body:</strong> Contains the code that defines the method's functionality.
      </p>

      <!-- Parameters and Return Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Parameters and Return Types</h2>
      <p class="text-base md:text-lg mb-4">
        Parameters allow methods to accept input values, making them flexible and reusable. Return types enable methods to output results after performing their operations. Understanding how to define and use parameters and return types is vital for creating effective methods.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Defining Parameters:</strong> Parameters are defined within the method signature, specifying the type and name of each input value.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Method with multiple parameters
public double CalculateArea(double length, double width)
{
    return length * width;
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Return Types:</strong> The return type indicates the type of value a method will return. If a method does not return any value, the return type is <code>void</code>.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Method with a return type
public string GetGreeting(string name)
{
    return $"Hello, {name}!";
}

// Example: Method without a return type
public void DisplayMessage(string message)
{
    Console.WriteLine(message);
}
</code>
      </pre>

      <!-- Method Overloading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Method Overloading</h2>
      <p class="text-base md:text-lg mb-4">
        Method overloading allows multiple methods to have the same name but different parameters within the same class. It enhances code readability and flexibility by enabling methods to handle different types or numbers of inputs while performing similar operations.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Rules for Method Overloading:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>The methods must have the same name.</li>
        <li>They must differ in the number, type, or order of parameters.</li>
        <li>They can have different return types, but the return type alone does not constitute a unique signature.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example of Method Overloading:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Overloaded methods for adding numbers
public int Add(int a, int b)
{
    return a + b;
}

public double Add(double a, double b)
{
    return a + b;
}

public int Add(int a, int b, int c)
{
    return a + b + c;
}

// Usage
Console.WriteLine(Add(2, 3));       // Output: 5
Console.WriteLine(Add(2.5, 3.5));   // Output: 6.0
Console.WriteLine(Add(1, 2, 3));    // Output: 6
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In the above example, the <code>Add</code> method is overloaded to handle different types and numbers of parameters, providing flexibility in how addition operations are performed.
      </p>

      <!-- Static vs. Instance Methods -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Static vs. Instance Methods</h2>
      <p class="text-base md:text-lg mb-4">
        Methods in C# can be categorized as either static or instance methods, each serving different purposes based on how they interact with the class and its instances.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Static Methods:</strong> Belong to the class itself rather than any particular instance. They can be called without creating an object of the class. Static methods are typically used for operations that do not require data from instances.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Static method
public class MathUtilities
{
    public static int Multiply(int a, int b)
    {
        return a * b;
    }
}

// Usage
int product = MathUtilities.Multiply(4, 5);
Console.WriteLine($"Product: {product}"); // Output: Product: 20
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Instance Methods:</strong> Belong to an instance of a class. They can access and modify the instance's data members. Instance methods require creating an object of the class to be invoked.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Instance method
public class Person
{
    public string Name { get; set; }

    public void Introduce()
    {
        Console.WriteLine($"Hi, I'm {Name}.");
    }
}

// Usage
Person person = new Person { Name = "Alice" };
person.Introduce(); // Output: Hi, I'm Alice.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Choosing Between Static and Instance Methods:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Use static methods for utility or helper functions that do not depend on instance data.</li>
        <li>Use instance methods when the method needs to access or modify the object's state.</li>
      </ul>

      <!-- Code Examples: Creating Methods with Different Parameters and Return Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Code Examples: Creating Methods with Different Parameters and Return Types</h2>
      <p class="text-base md:text-lg mb-4">
        To illustrate the concepts discussed, let's explore several examples of methods with varying parameters and return types.
      </p>

      <!-- Example 1: Method with No Parameters and No Return Type -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 1: Method with No Parameters and No Return Type</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates a simple method that performs an action without accepting any input or returning any value.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Displaying a welcome message
public class Welcome
{
    public void ShowMessage()
    {
        Console.WriteLine("Welcome to the C# Methods tutorial!");
    }
}

// Usage
Welcome welcome = new Welcome();
welcome.ShowMessage(); // Output: Welcome to the C# Methods tutorial!
</code>
      </pre>

      <!-- Example 2: Method with Parameters and a Return Type -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 2: Method with Parameters and a Return Type</h3>
      <p class="text-base md:text-lg mb-4">
        This example shows a method that accepts parameters and returns a value based on those inputs.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Calculating the factorial of a number
public class Calculator
{
    public int Factorial(int number)
    {
        if (number < 0)
            throw new ArgumentException("Number must be non-negative.");

        int result = 1;
        for (int i = 2; i <= number; i++)
        {
            result *= i;
        }
        return result;
    }
}

// Usage
Calculator calculator = new Calculator();
int fact = calculator.Factorial(5);
Console.WriteLine($"Factorial of 5 is {fact}"); // Output: Factorial of 5 is 120
</code>
      </pre>

      <!-- Example 3: Overloaded Methods -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 3: Overloaded Methods</h3>
      <p class="text-base md:text-lg mb-4">
        This example illustrates method overloading by defining multiple methods with the same name but different parameters.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Overloaded Print methods
public class Printer
{
    public void Print(string message)
    {
        Console.WriteLine($"Message: {message}");
    }

    public void Print(int number)
    {
        Console.WriteLine($"Number: {number}");
    }

    public void Print(string message, int number)
    {
        Console.WriteLine($"Message: {message}, Number: {number}");
    }
}

// Usage
Printer printer = new Printer();
printer.Print("Hello, World!");        // Output: Message: Hello, World!
printer.Print(42);                     // Output: Number: 42
printer.Print("The answer is", 42);    // Output: Message: The answer is, Number: 42
</code>
      </pre>

      <!-- Example 4: Static vs. Instance Methods -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 4: Static vs. Instance Methods</h3>
      <p class="text-base md:text-lg mb-4">
        This example contrasts static and instance methods within a class.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Static and Instance methods
public class MathOperations
{
    // Static method
    public static double Pi()
    {
        return 3.14159;
    }

    // Instance method
    public double Square(double number)
    {
        return number * number;
    }
}

// Usage
double piValue = MathOperations.Pi();
Console.WriteLine($"Pi: {piValue}"); // Output: Pi: 3.14159

MathOperations mathOps = new MathOperations();
double square = mathOps.Square(5);
Console.WriteLine($"Square of 5: {square}"); // Output: Square of 5: 25
</code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Using Methods</h2>
      <p class="text-base md:text-lg mb-4">
        To write effective and maintainable methods in C#, consider the following best practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Descriptive Naming:</strong> Choose clear and descriptive names for methods that convey their purpose (e.g., <code>CalculateTotal</code>, <code>FetchUserData</code>).</li>
        <li><strong>Single Responsibility:</strong> Each method should perform a single, well-defined task. This enhances readability and makes debugging easier.</li>
        <li><strong>Limit Method Length:</strong> Keep methods concise. Long methods can be difficult to understand and maintain. Break them down into smaller helper methods if necessary.</li>
        <li><strong>Use Parameters Wisely:</strong> Avoid excessive parameters in methods. If a method requires too many parameters, consider grouping related parameters into a class or struct.</li>
        <li><strong>Consistent Access Modifiers:</strong> Use appropriate access modifiers to encapsulate method functionality. Typically, methods that are not intended to be accessed outside the class should be marked as <code>private</code>.</li>
        <li><strong>Document Methods:</strong> Provide XML documentation comments for methods to describe their purpose, parameters, and return values. This aids in code maintenance and usage.</li>
      </ul>

      <!-- Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Pitfalls to Avoid</h2>
      <p class="text-base md:text-lg mb-4">
        While methods are powerful tools, improper usage can lead to issues such as code duplication, decreased performance, and maintainability challenges. Here are some common pitfalls to watch out for:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Overusing Methods:</strong> Creating too many small methods can lead to fragmented code that is hard to follow. Strive for a balance between modularity and readability.</li>
        <li><strong>Ignoring Return Types:</strong> Not utilizing return types effectively can result in methods that do not provide useful output, limiting their reusability.</li>
        <li><strong>Complex Method Signatures:</strong> Methods with too many parameters or complex types can be difficult to use and understand. Simplify method signatures where possible.</li>
        <li><strong>Duplicate Code:</strong> Repeating similar code across multiple methods instead of abstracting common functionality into a single method can lead to maintenance challenges.</li>
        <li><strong>Inconsistent Naming Conventions:</strong> Inconsistent or unclear method names can make the codebase harder to navigate and understand.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Methods are indispensable in C# programming, providing the means to create organized, reusable, and maintainable code. By understanding method syntax, signatures, parameters, return types, and the concepts of method overloading and static versus instance methods, you can structure your code effectively to tackle a wide range of programming challenges. Adhering to best practices ensures that your methods remain clear, efficient, and easy to manage, while avoiding common pitfalls helps maintain the integrity and performance of your applications. As you continue to develop your C# skills, mastering methods will be a cornerstone of your programming proficiency, enabling you to build robust and scalable software solutions.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSharpMethods',
  data() {
    return {
      // Additional data properties can be added here if needed
    };
  },
};
</script>

<style>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for very long lines */
  overflow-x: auto;      /* Adds horizontal scroll for overflow content */ 
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}
</style>
