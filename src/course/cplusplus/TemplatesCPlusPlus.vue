<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">C++ Templates</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Welcome to the "C++ Templates" course! Templates are a powerful feature in C++ that enable generic programming, allowing you to write flexible and reusable code. This course explores the intricacies of C++ templates, including function templates, class templates, template specialization, and advanced concepts like variadic templates. By the end of this course, you'll be equipped to harness the full potential of templates in your C++ projects.
      </p>

      <!-- Why C++ Templates are Powerful -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why C++ Templates are Powerful</h2>
      <p class="text-base md:text-lg mb-4">
        C++ templates facilitate generic programming by allowing functions and classes to operate with any data type. This leads to code reusability, type safety, and performance optimizations, as templates are resolved at compile-time.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Fun Fact:</strong> The concept of templates was introduced in C++ to overcome the limitations of the C language, providing a way to create type-independent code without sacrificing performance.
      </p>

      <!-- Function Templates -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Function Templates</h2>
      <p class="text-base md:text-lg mb-4">
        Function templates allow you to create functions that can operate with generic types. This eliminates the need to write multiple versions of the same function for different data types.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Real-Life Example:</strong> Imagine having a sorting function that works for both integers and floating-point numbers without rewriting the entire function.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;

using namespace std;

// Function template to find the maximum of two values
template &lt;typename T&gt;
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout &lt;&lt; getMax(3, 7) &lt;&lt; endl; // Outputs: 7
    cout &lt;&lt; getMax(3.5, 2.5) &lt;&lt; endl; // Outputs: 3.5
    return 0;
}</code></pre>

      <!-- Class Templates -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Class Templates</h2>
      <p class="text-base md:text-lg mb-4">
        Class templates enable the creation of classes that can operate with any data type. This is particularly useful for creating generic data structures like linked lists, stacks, and queues.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

// Class template for a simple Pair
template &lt;typename T1, typename T2&gt;
class Pair {
public:
    T1 first;
    T2 second;

    Pair(T1 f, T2 s) : first(f), second(s) {}
    void display() {
        cout &lt;&lt; "Pair: " &lt;&lt; first &lt;&lt; ", " &lt;&lt; second &lt;&lt; endl;
    }
};

int main() {
    Pair&lt;int, string&gt; p1(1, "Apple");
    p1.display(); // Outputs: Pair: 1, Apple

    Pair&lt;double, double&gt; p2(3.14, 2.718);
    p2.display(); // Outputs: Pair: 3.14, 2.718

    return 0;
}</code></pre>

      <!-- Template Specialization -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Template Specialization</h2>
      <p class="text-base md:text-lg mb-4">
        Template specialization allows you to define specific implementations of a template for particular data types. This is useful when a generic implementation isn't efficient or doesn't work correctly for certain types.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

// Generic template
template &lt;typename T&gt;
class Printer {
public:
    void print(T data) {
        cout &lt;&lt; "Generic Printer: " &lt;&lt; data &lt;&lt; endl;
    }
};

// Template specialization for string
template &lt;&gt;
class Printer&lt;string&gt; {
public:
    void print(string data) {
        cout &lt;&lt; "String Printer: \"" &lt;&lt; data &lt;&lt; "\"" &lt;&lt; endl;
    }
};

int main() {
    Printer&lt;int&gt; intPrinter;
    intPrinter.print(100); // Outputs: Generic Printer: 100

    Printer&lt;string&gt; stringPrinter;
    stringPrinter.print("Hello, Templates!"); // Outputs: String Printer: "Hello, Templates!"

    return 0;
}</code></pre>

      <!-- Variadic Templates -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Variadic Templates</h2>
      <p class="text-base md:text-lg mb-4">
        Variadic templates allow templates to accept an arbitrary number of parameters. This is particularly useful for creating functions that can handle multiple arguments, such as logging functions or tuple creation.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

// Variadic template function to print multiple arguments
template &lt;typename T&gt;
void print(T t) {
    cout &lt;&lt; t &lt;&lt; endl;
}

template &lt;typename T, typename... Args&gt;
void print(T t, Args... args) {
    cout &lt;&lt; t &lt;&lt; ", ";
    print(args...);
}

int main() {
    print(1, 2, 3, 4, 5); // Outputs: 1, 2, 3, 4, 5
    print("C++", "Templates", "Are", "Awesome!"); // Outputs: C++, Templates, Are, Awesome!
    return 0;
}</code></pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use Descriptive Template Parameters:</strong> Name your template parameters clearly to indicate their purpose.</li>
        <li><strong>Limit Template Complexity:</strong> Keep templates simple to maintain readability and ease of debugging.</li>
        <li><strong>Leverage Type Traits:</strong> Use type traits and SFINAE (Substitution Failure Is Not An Error) to create more robust and type-safe templates.</li>
        <li><strong>Provide Template Specializations:</strong> When necessary, provide specializations to handle specific types more efficiently.</li>
        <li><strong>Document Your Templates:</strong> Clearly document the expected types and behaviors of your templates to aid future maintenance.</li>
      </ul>

      <!-- Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Pitfalls</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Overcomplicating Templates:</strong> Avoid making templates unnecessarily complex; strive for simplicity and clarity.</li>
        <li><strong>Ignoring Type Constraints:</strong> Ensure that your templates enforce the necessary type constraints to prevent unexpected behaviors.</li>
        <li><strong>Excessive Template Specialization:</strong> While specialization is powerful, overusing it can lead to code bloat and maintenance challenges.</li>
        <li><strong>Template Compilation Errors:</strong> Template errors can be verbose and hard to decipher; use clear and concise code to minimize issues.</li>
        <li><strong>Performance Overheads:</strong> Be mindful of potential performance overheads with complex templates, especially in critical code paths.</li>
      </ul>

      <!-- Example 5: Using Variadic Templates -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 5: Using Variadic Templates</h3>
      <p class="text-base md:text-lg mb-4">
        Variadic templates allow functions to accept a variable number of arguments. This example demonstrates a simple variadic template function that prints multiple values.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

// Variadic template function to print multiple arguments
template &lt;typename T&gt;
void print(T t) {
    cout &lt;&lt; t &lt;&lt; endl;
}

template &lt;typename T, typename... Args&gt;
void print(T t, Args... args) {
    cout &lt;&lt; t &lt;&lt; ", ";
    print(args...);
}

int main() {
    print(1, 2, 3, 4, 5); // Outputs: 1, 2, 3, 4, 5
    print("C++", "Templates", "Are", "Awesome!"); // Outputs: C++, Templates, Are, Awesome!
    return 0;
}</code></pre>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        C++ templates are an indispensable tool for creating generic and reusable code. By understanding function templates, class templates, template specialization, and variadic templates, you can write more flexible and efficient C++ programs. Templates not only enhance code reusability but also contribute to type safety and performance optimizations.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Why and When We Need Templates:</strong> Templates are essential when you want to write functions or classes that can operate with any data type without duplicating code. They are particularly useful for creating generic data structures, algorithms, and libraries that are type-independent. Templates allow for compile-time polymorphism, leading to optimized and efficient code, making them a cornerstone of modern C++ programming.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will delve deeper into advanced C++ topics, building upon the foundation you've established with templates.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CppTemplates',
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
