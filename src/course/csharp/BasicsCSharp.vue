<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-blue-600 rounded-t-xl p-4">
      <img src="/csharp/logo.png" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">C# Basics: Variables and Data Types</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Understanding variables and data types is fundamental to mastering C#. Variables act as storage locations that hold data, while data types define the kind of data that can be stored and manipulated within a program. This section delves into the essentials of variables, constants, and the various data types available in C#, providing a solid foundation for building robust applications.
      </p>

      <!-- Value Types vs. Reference Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Value Types vs. Reference Types</h2>
      <p class="text-base md:text-lg mb-4">
        In C#, data types are categorized into two main groups: value types and reference types. Understanding the difference between these two is crucial for effective memory management and performance optimization.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Value Types:</strong> These types directly contain their data. When you assign a value type to another, a complete copy of the data is made. Common value types include primitive types like <code>int</code>, <code>double</code>, and <code>bool</code>, as well as structures (structs) and enumerations (enums).
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Reference Types:</strong> These types store references to their data rather than the actual data itself. When you assign a reference type to another, both variables point to the same memory location. Common reference types include <code>string</code>, arrays, classes, delegates, and interfaces.
      </p>

      <!-- Data Types Table -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Data Types in C#</h2>
      <table class="min-w-full table-auto mb-6">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">Data Type</th>
            <th class="px-4 py-2">Size</th>
            <th class="px-4 py-2">Default Value</th>
            <th class="px-4 py-2">Example Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2 font-semibold">int</td>
            <td class="border px-4 py-2">4 bytes</td>
            <td class="border px-4 py-2">0</td>
            <td class="border px-4 py-2">int age = 30;</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2 font-semibold">double</td>
            <td class="border px-4 py-2">8 bytes</td>
            <td class="border px-4 py-2">0.0</td>
            <td class="border px-4 py-2">double price = 19.99;</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 font-semibold">char</td>
            <td class="border px-4 py-2">2 bytes</td>
            <td class="border px-4 py-2">'\0'</td>
            <td class="border px-4 py-2">char grade = 'A';</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2 font-semibold">bool</td>
            <td class="border px-4 py-2">1 byte</td>
            <td class="border px-4 py-2">false</td>
            <td class="border px-4 py-2">bool isActive = true;</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 font-semibold">string</td>
            <td class="border px-4 py-2">Variable</td>
            <td class="border px-4 py-2">null</td>
            <td class="border px-4 py-2">string name = "John Doe";</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2 font-semibold">array</td>
            <td class="border px-4 py-2">Variable</td>
            <td class="border px-4 py-2">null</td>
            <td class="border px-4 py-2">int[] numbers = {1, 2, 3};</td>
          </tr>
        </tbody>
      </table>

      <!-- Declaring and Initializing Variables -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Declaring and Initializing Variables</h2>
      <p class="text-base md:text-lg mb-4">
        Declaring a variable in C# involves specifying the data type followed by the variable name. Initialization assigns a value to the variable at the time of declaration. Here's how you can declare and initialize variables in C#:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
int age; // Declaration
age = 30; // Initialization

double price = 19.99; // Declaration and Initialization

string name = "John Doe"; // Declaration and Initialization

bool isActive = true; // Declaration and Initialization
</code>
      </pre>

      <!-- Type Conversion and Casting -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Type Conversion and Casting</h2>
      <p class="text-base md:text-lg mb-4">
        Type conversion is the process of converting a value from one data type to another. C# provides both implicit and explicit casting to facilitate this.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Implicit Conversion:</strong> This happens automatically when there is no data loss. For example, converting an <code>int</code> to a <code>double</code>.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
int myInt = 10;
double myDouble = myInt; // Implicit conversion from int to double
Console.WriteLine(myDouble); // Output: 10.0
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explicit Conversion (Casting):</strong> Required when converting between incompatible types or when there is a possibility of data loss. This is done using casting operators.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
double myDouble = 9.78;
int myInt = (int)myDouble; // Explicit conversion from double to int
Console.WriteLine(myInt); // Output: 9
</code>
      </pre>

      <!-- Variable Scope and Lifetime -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Variable Scope and Lifetime</h2>
      <p class="text-base md:text-lg mb-4">
        The scope of a variable determines where it can be accessed within the code, while its lifetime refers to the duration the variable exists in memory.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Scope:</strong> Variables can be declared within different blocks of code, such as methods, loops, or conditionals. A variable declared within a block is only accessible within that block.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
class Program
{
    static void Main(string[] args)
    {
        int globalVar = 10; // Accessible throughout Main method

        if (globalVar > 5)
        {
            int localVar = 20; // Accessible only within this if block
            Console.WriteLine(localVar);
        }

        // Console.WriteLine(localVar); // This would cause an error
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Lifetime:</strong> The lifetime of a variable is tied to its scope. For example, a variable declared within a method exists only for the duration of that method's execution.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Grasping the fundamentals of variables and data types is essential for any aspiring C# developer. By understanding how to effectively declare, initialize, and manipulate different data types, as well as comprehending the distinctions between value and reference types, you can write more efficient and maintainable code. Additionally, mastering type conversion and being aware of variable scope and lifetime will further enhance your ability to develop robust applications. As you continue to explore C#, these foundational concepts will serve as building blocks for more advanced programming techniques and patterns.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSharpBasicsVariablesDataTypes',
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
