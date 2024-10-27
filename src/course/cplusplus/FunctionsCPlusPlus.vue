<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">C++ Functions</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Functions are fundamental building blocks in C++ that allow you to encapsulate code for reusability and better organization. Understanding functions is essential for writing efficient and maintainable programs. This course delves into the intricacies of C++ functions, exploring their syntax, parameters, return types, and advanced concepts like overloading and recursion.
      </p>

      <!-- Why C++ Functions are Important -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why C++ Functions are Important</h2>
      <p class="text-base md:text-lg mb-4">
        Functions in C++ provide a way to modularize code, making it easier to manage and debug. By breaking down complex tasks into smaller, manageable pieces, functions enhance code readability and reusability.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Fun Fact:</strong> The concept of functions in programming is inspired by mathematical functions, allowing programmers to define reusable blocks of code that perform specific tasks.
      </p>

      <!-- Function Declaration and Definition -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Function Declaration and Definition</h2>
      <p class="text-base md:text-lg mb-4">
        In C++, a function must be declared before it can be used. The declaration specifies the function's name, return type, and parameters, while the definition provides the actual body of the function.
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Component</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Function Declaration</td>
          <td class="border px-4 py-2">Specifies the function's name, return type, and parameters.</td>
          <td class="border px-4 py-2"><code>int add(int a, int b);</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Function Definition</td>
          <td class="border px-4 py-2">Provides the actual code that performs the function's task.</td>
          <td class="border px-4 py-2">
            <code>
              int add(int a, int b) {<br />
              &nbsp;&nbsp;return a + b;<br />
              }
            </code>
          </td>
        </tr>
        </tbody>
      </table>

      <!-- Parameters and Arguments -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Parameters and Arguments</h2>
      <p class="text-base md:text-lg mb-4">
        Parameters allow functions to accept inputs, making them flexible and reusable. C++ supports passing parameters by value, by reference, and by pointer.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Default Arguments:</strong> C++ allows functions to have default parameter values, which are used if no argument is provided for those parameters.
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Parameter Type</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Pass by Value</td>
          <td class="border px-4 py-2">Creates a copy of the argument's value.</td>
          <td class="border px-4 py-2"><code>void func(int a);</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Pass by Reference</td>
          <td class="border px-4 py-2">Allows the function to modify the original argument.</td>
          <td class="border px-4 py-2"><code>void func(int &a);</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Pass by Pointer</td>
          <td class="border px-4 py-2">Passes the address of the argument, allowing modification.</td>
          <td class="border px-4 py-2"><code>void func(int *a);</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Default Arguments</td>
          <td class="border px-4 py-2">Provides default values for parameters.</td>
          <td class="border px-4 py-2"><code>int add(int a, int b = 5);</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Return Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Return Types</h2>
      <p class="text-base md:text-lg mb-4">
        Functions can return values of any data type, including `void` if no value is returned.
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Return Type</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">int</td>
          <td class="border px-4 py-2">Returns an integer value.</td>
          <td class="border px-4 py-2"><code>int getNumber() { return 10; }</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">double</td>
          <td class="border px-4 py-2">Returns a double precision floating-point value.</td>
          <td class="border px-4 py-2"><code>double getPi() { return 3.14159; }</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">void</td>
          <td class="border px-4 py-2">Does not return a value.</td>
          <td class="border px-4 py-2"><code>void printMessage() { cout << "Hello!"; }</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Function Overloading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Function Overloading</h2>
      <p class="text-base md:text-lg mb-4">
        Function overloading allows multiple functions to have the same name with different parameters. This enhances code readability and usability.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

int add(int a, int b, int c) {
    return a + b + c;
}</code></pre>

      <!-- Inline Functions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Inline Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Inline functions suggest to the compiler to insert the function's body where the function call is, reducing the overhead of a function call. They are best used for small, frequently called functions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>inline int multiply(int a, int b) {
    return a * b;
}</code></pre>

      <!-- Recursion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Recursion</h2>
      <p class="text-base md:text-lg mb-4">
        Recursion occurs when a function calls itself to solve smaller instances of the same problem. It’s a powerful technique for tasks like factorial calculation and traversing data structures.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>int factorial(int n) {
    if (n <= 1) return 1;
    else return n * factorial(n - 1);
}</code></pre>

      <!-- Scope and Lifetime -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Scope and Lifetime</h2>
      <p class="text-base md:text-lg mb-4">
        The scope of a variable determines where it can be accessed, while its lifetime defines how long it exists in memory. Understanding scope and lifetime is crucial for managing resources and avoiding bugs.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Variable Scope:</strong> Variables declared inside a function are local to that function and cannot be accessed outside.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>void display() {
    int x = 10; // x is local to display()
    cout &lt;&lt; x &lt;&lt; endl;
}
// cout &lt;&lt; x &lt;&lt; endl; // Error: x is not accessible here
</code></pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Static Variables:</strong> Variables declared with the <code>static</code> keyword inside a function retain their value between function calls.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>void counter() {
    static int count = 0;
    count++;
    cout &lt;&lt; "Count: " &lt;&lt; count &lt;&lt; endl;
}

int main() {
    counter(); // Count: 1
    counter(); // Count: 2
    counter(); // Count: 3
    return 0;
}</code></pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Descriptive Names:</strong> Use clear and descriptive names for functions and parameters.</li>
        <li><strong>Single Responsibility:</strong> Each function should perform a single, well-defined task.</li>
        <li><strong>Avoid Side Effects:</strong> Functions should minimize side effects to enhance predictability.</li>
        <li><strong>Limit Recursion Depth:</strong> Ensure recursive functions have a base case to prevent stack overflow.</li>
        <li><strong>Use Inline Functions Sparingly:</strong> Only use inline for small, performance-critical functions.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        You’ve now mastered the fundamentals of C++ functions, including their declaration, definition, parameters, return types, and advanced concepts like overloading and recursion. Functions are essential for creating organized, efficient, and maintainable code. In the next course, we’ll explore more advanced topics to further enhance your C++ programming skills.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CppFunctions',
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
