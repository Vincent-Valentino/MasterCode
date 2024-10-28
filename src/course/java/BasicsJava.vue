<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Variables and Data Types in Java" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Variables and data types are foundational concepts in Java programming. They enable developers to store, manipulate, and manage data effectively. Understanding how to declare variables and utilize different data types is essential for writing robust and efficient Java applications.
      </p>

      <!-- Variables in Java -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Variables in Java</h2>
      <p class="text-base md:text-lg mb-4">
        A variable in Java is a container that holds data which can be changed during program execution. Each variable must be declared with a specific data type that determines the kind of data it can store.
      </p>

      <!-- Declaring Variables -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Declaring Variables</h3>
      <p class="text-base md:text-lg mb-4">
        To declare a variable in Java, specify the data type followed by the variable name. Optionally, you can initialize the variable with a value.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
int number = 10;
double price = 19.99;
char grade = 'A';
boolean isAvailable = true;
String message = "Hello, Java!";
</code>
      </pre>

      <!-- Data Types in Java -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Data Types in Java</h2>
      <p class="text-base md:text-lg mb-4">
        Java is a strongly-typed language, meaning that each variable must be declared with a data type. Data types in Java are divided into two main categories: primitive and non-primitive.
      </p>

      <!-- Primitive vs. Non-Primitive Data Types -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Primitive vs. Non-Primitive Data Types</h3>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Category</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Examples</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Primitive</td>
          <td class="border px-4 py-2">Basic data types built into the language.</td>
          <td class="border px-4 py-2"><code>int, double, char, boolean, byte, short, long, float</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Non-Primitive</td>
          <td class="border px-4 py-2">Reference types that refer to objects.</td>
          <td class="border px-4 py-2"><code>String, Arrays, Classes, Interfaces</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Primitive Data Types -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Primitive Data Types</h3>
      <p class="text-base md:text-lg mb-4">
        Java provides eight primitive data types, each with specific size and range:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>byte:</strong> 8-bit signed integer.</li>
        <li><strong>short:</strong> 16-bit signed integer.</li>
        <li><strong>int:</strong> 32-bit signed integer.</li>
        <li><strong>long:</strong> 64-bit signed integer.</li>
        <li><strong>float:</strong> Single-precision 32-bit IEEE 754 floating point.</li>
        <li><strong>double:</strong> Double-precision 64-bit IEEE 754 floating point.</li>
        <li><strong>char:</strong> Single 16-bit Unicode character.</li>
        <li><strong>boolean:</strong> Represents true or false.</li>
      </ul>

      <!-- Non-Primitive Data Types -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Non-Primitive Data Types</h3>
      <p class="text-base md:text-lg mb-4">
        Non-primitive data types are created by the programmer and can hold multiple values. They include classes, interfaces, and arrays.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>String:</strong> A sequence of characters.</li>
        <li><strong>Arrays:</strong> Fixed-size collections of elements of the same type.</li>
        <li><strong>Classes:</strong> Blueprints for creating objects.</li>
        <li><strong>Interfaces:</strong> Abstract types used to specify method signatures.</li>
      </ul>

      <!-- Example: Declaring Variables -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Example: Declaring Variables</h2>
      <p class="text-base md:text-lg mb-4">
        Below is an example of declaring and initializing variables of different data types:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
public class VariableExample {
    public static void main(String[] args) {
        int number = 10;
        double price = 19.99;
        char grade = 'A';
        boolean isAvailable = true;
        String message = "Hello, Java!";

        System.out.println("Number: " + number);
        System.out.println("Price: $" + price);
        System.out.println("Grade: " + grade);
        System.out.println("Available: " + isAvailable);
        System.out.println("Message: " + message);
    }
}
</code>
      </pre>

      <!-- Explanation of the Example -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Explanation</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>int number = 10;</strong> Declares an integer variable named <code>number</code> and initializes it with the value <code>10</code>.</li>
        <li><strong>double price = 19.99;</strong> Declares a double-precision floating-point variable named <code>price</code> with the value <code>19.99</code>.</li>
        <li><strong>char grade = 'A';</strong> Declares a character variable named <code>grade</code> and assigns it the value <code>'A'</code>.</li>
        <li><strong>boolean isAvailable = true;</strong> Declares a boolean variable named <code>isAvailable</code> and sets it to <code>true</code>.</li>
        <li><strong>String message = "Hello, Java!";</strong> Declares a String variable named <code>message</code> with the value <code>"Hello, Java!"</code>.</li>
      </ul>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Following best practices when working with variables and data types enhances code readability and maintainability. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Use Meaningful Names:</strong> Choose descriptive and meaningful variable names that convey the purpose of the variable.
        </li>
        <li>
          <strong>Follow Naming Conventions:</strong> Use camelCase for variable names and ensure consistency throughout your code.
        </li>
        <li>
          <strong>Initialize Variables:</strong> Initialize variables at the time of declaration to avoid unexpected behaviors.
        </li>
        <li>
          <strong>Limit Variable Scope:</strong> Declare variables in the narrowest scope possible to reduce potential errors and enhance clarity.
        </li>
        <li>
          <strong>Prefer Primitive Types When Appropriate:</strong> Use primitive data types for better performance unless object wrappers are necessary.
        </li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Mastering variables and data types is crucial for effective Java programming. Proper declaration and utilization of variables enable developers to manage data efficiently, leading to robust and maintainable applications. By adhering to best practices and understanding the nuances of Java's type system, you can write cleaner and more efficient code.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of variables and data types in Java, consider exploring the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html" class="text-blue-600 hover:underline">Java Tutorials: Variables</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/java-data-types/" class="text-blue-600 hover:underline">GeeksforGeeks: Java Data Types</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/java-data-types" class="text-blue-600 hover:underline">JavaTpoint: Java Data Types</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-variables-data-types" class="text-blue-600 hover:underline">Baeldung: Java Variables and Data Types</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaBasicsVariablesDataTypes',
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for long lines */
  overflow-x: auto;      /* Adds horizontal scroll for long code lines */
}

a {
  color: #1e40af; /* Tailwind's blue-800 */
}

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
