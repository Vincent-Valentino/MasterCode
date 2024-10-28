<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">Advanced C++ Features</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Welcome to the "Advanced C++ Features" course! This course delves into sophisticated C++ concepts that empower you to write efficient, maintainable, and high-performance applications. By exploring move semantics, lambda expressions, template metaprogramming, smart pointers, modern C++ features, and more, you'll enhance your programming skills and deepen your understanding of the C++ language.
      </p>

      <!-- Why Advanced Features Matter -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Advanced Features Matter</h2>
      <p class="text-base md:text-lg mb-4">
        Advanced C++ features provide the tools necessary to create flexible and reusable code, optimize performance, and manage resources effectively. Mastering these features allows you to leverage the full potential of C++, making your applications robust and scalable.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Fun Fact:</strong> The introduction of templates in C++ revolutionized generic programming, allowing developers to write type-independent code that is both efficient and safe.
      </p>

      <!-- Move Semantics and Rvalue References -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Move Semantics and Rvalue References</h2>
      <p class="text-base md:text-lg mb-4">
        Move semantics optimize performance by eliminating unnecessary copying of objects. Understanding rvalue references is crucial for implementing move constructors and move assignment operators, which enable efficient resource transfer.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-Life Analogy:</strong> Think of move semantics as transferring ownership of a heavy package from one person to another without repacking it, saving time and effort.
      </p>

      <!-- Common Move Semantics Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Move Constructor</td>
          <td class="border px-4 py-2">A constructor that transfers resources from a temporary object to a new object.</td>
          <td class="border px-4 py-2"><code>MyClass(MyClass&amp;&amp; other);</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Move Assignment Operator</td>
          <td class="border px-4 py-2">An operator that transfers resources from a temporary object to an existing object.</td>
          <td class="border px-4 py-2"><code>MyClass&amp; operator=(MyClass&amp;&amp; other);</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Rvalue Reference</td>
          <td class="border px-4 py-2">A type of reference that can bind to temporary objects (rvalues).</td>
          <td class="border px-4 py-2"><code>int&amp;&amp; ref = 5;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">std::move</td>
          <td class="border px-4 py-2">A standard library function that converts an lvalue to an rvalue, enabling move semantics.</td>
          <td class="border px-4 py-2"><code>MyClass obj2 = std::move(obj1);</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Resource Transfer</td>
          <td class="border px-4 py-2">Moving resources like dynamic memory, file handles, or network connections from one object to another.</td>
          <td class="border px-4 py-2">Implementing move semantics in containers to optimize performance.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 1: Implementing Move Constructor -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 1: Implementing Move Constructor</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to implement a move constructor and move assignment operator to enable efficient resource transfer between objects.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;utility&amp;

using namespace std;

class MyClass {
public:
    int* data;

    // Constructor
    MyClass(int size) {
        data = new int[size];
        cout &amp;&amp; "Constructor called." &amp;&amp; endl;
    }

    // Move Constructor
    MyClass(MyClass&amp;&amp; other) noexcept : data(nullptr) {
        data = other.data;
        other.data = nullptr;
        cout &amp;&amp; "Move Constructor called." &amp;&amp; endl;
    }

    // Move Assignment Operator
    MyClass&amp; operator=(MyClass&amp;&amp; other) noexcept {
        if(this != &amp;other) {
            delete[] data;
            data = other.data;
            other.data = nullptr;
            cout &amp;&amp; "Move Assignment Operator called." &amp;&amp; endl;
        }
        return *this;
    }

    // Destructor
    ~MyClass() {
        delete[] data;
        cout &amp;&amp; "Destructor called." &amp;&amp; endl;
    }
};

int main() {
    MyClass obj1(10);
    MyClass obj2 = std::move(obj1); // Move constructor
    MyClass obj3(5);
    obj3 = std::move(obj2); // Move assignment operator

    return 0;
}</code></pre>

      <!-- Lambda Expressions and Functional Programming -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Lambda Expressions and Functional Programming</h2>
      <p class="text-base md:text-lg mb-4">
        Lambda expressions introduce inline, anonymous functions that can capture variables from their surrounding scope. They are invaluable for writing concise and expressive code, especially when working with STL algorithms.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Real-Life Example:</strong> Using lambdas for event handling or callback functions, allowing for quick and flexible responses to events.
      </p>

      <!-- Common Lambda Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Lambda Syntax</td>
          <td class="border px-4 py-2">The basic structure of a lambda expression, including capture list, parameters, and body.</td>
          <td class="border px-4 py-2"><code>[captures](parameters) { body }</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Capturing Variables</td>
          <td class="border px-4 py-2">Specifying which variables from the surrounding scope the lambda can access.</td>
          <td class="border px-4 py-2">Capturing by value vs. by reference to modify external variables.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Mutable Lambdas</td>
          <td class="border px-4 py-2">Lambdas that allow modification of captured variables.</td>
          <td class="border px-4 py-2"><code>[&amp;]() mutable { /* ... */ }</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Return Types</td>
          <td class="border px-4 py-2">Specifying the return type of a lambda expression.</td>
          <td class="border px-4 py-2"><code>[&amp;](int x) -> int { return x * 2; }</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Generic Lambdas</td>
          <td class="border px-4 py-2">Lambdas that can accept parameters of any type using `auto`.</td>
          <td class="border px-4 py-2"><code>[&amp;](auto x) { return x * x; }</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Example 2: Using Lambdas with STL Algorithms -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 2: Using Lambdas with STL Algorithms</h3>
      <p class="text-base md:text-lg mb-4">
        Lambdas are particularly useful when working with STL algorithms, allowing for inline function definitions that enhance code readability and flexibility.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md o verflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;vector&amp;
#include &amp;algorithm&amp;

using namespace std;

int main() {
    vector&lt;int&gt; numbers = {1, 2, 3, 4, 5, 6};

    // Using lambda to find even numbers
    auto isEven = [](int x) -> bool {
        return x % 2 == 0;
    };

    // Count the number of even numbers
    int count = count_if(numbers.begin(), numbers.end(), isEven);
    cout &amp;&amp; "Number of even numbers: " &amp;&amp; count &amp;&amp; endl;

    // Using lambda directly in the algorithm
    for_each(numbers.begin(), numbers.end(), [](int &amp;x) { x *= 2; });

    cout &amp;&amp; "Numbers after doubling: ";
    for(auto num : numbers) {
        cout &amp;&amp; num &amp;&amp; " ";
    }
    cout &amp;&amp; endl;

    return 0;
}</code></pre>

      <!-- Template Metaprogramming -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Template Metaprogramming</h2>
      <p class="text-base md:text-lg mb-4">
        Template metaprogramming leverages the C++ template system to perform computations and transformations at compile time. This powerful technique enables the creation of highly optimized and type-safe code.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Real-Life Example:</strong> Creating flexible and type-safe libraries that can adapt to various data types without sacrificing performance.
      </p>

      <!-- Common Template Metaprogramming Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Template Specialization</td>
          <td class="border px-4 py-2">Providing specific implementations of templates for particular types.</td>
          <td class="border px-4 py-2"><code>template&lt;&gt; class MyClass&lt;int&gt; { /* ... */ };</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Partial Specialization</td>
          <td class="border px-4 py-2">Specializing templates for a subset of template parameters.</td>
          <td class="border px-4 py-2"><code>template&lt;typename T&gt; class MyClass&lt;T, int&gt; { /* ... */ };</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">SFINAE</td>
          <td class="border px-4 py-2">A technique where substitution failure does not result in a compilation error, allowing for conditional template instantiation.</td>
          <td class="border px-4 py-2">Creating function templates that only accept certain types based on type traits.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Variadic Templates</td>
          <td class="border px-4 py-2">Templates that can accept an arbitrary number of template parameters.</td>
          <td class="border px-4 py-2"><code>template&lt;typename... Args&gt; void func(Args... args) { /* ... */ }</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Compile-Time Computations</td>
          <td class="border px-4 py-2">Performing calculations and logic during the compilation phase using templates.</td>
          <td class="border px-4 py-2">Implementing compile-time factorial calculations for optimization.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 3: Variadic Templates -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 3: Variadic Templates</h3>
      <p class="text-base md:text-lg mb-4">
        Variadic templates allow functions and classes to accept a variable number of template parameters. This flexibility is essential for creating generic and reusable components.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;utility&amp;

using namespace std;

// Function to print all arguments
template &lt;typename T&gt;
void print(T t) {
    cout &amp;&amp; t &amp;&amp; endl;
}

template &lt;typename T, typename... Args&gt;
void print(T t, Args... args) {
    cout &amp;&amp; t &amp;&amp; ", ";
    print(args...);
}

int main() {
    print(1, 2, 3, 4, 5); // Outputs: 1, 2, 3, 4, 5
    print("C++", "Templates", "Are", "Awesome!"); // Outputs: C++, Templates, Are, Awesome!
    return 0;
}</code></pre>

      <!-- Smart Pointers and Resource Management -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Smart Pointers and Resource Management</h2>
      <p class="text-base md:text-lg mb-4">
        Smart pointers are objects that manage the lifetime of dynamically allocated memory, ensuring proper deallocation and preventing memory leaks. They are essential for robust and safe resource management in modern C++.
      </p>

      <!-- Common Smart Pointers Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Smart Pointer</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">std::unique_ptr</td>
          <td class="border px-4 py-2">Exclusive ownership of a dynamically allocated object. Cannot be copied, only moved.</td>
          <td class="border px-4 py-2">Managing resources with strict ownership, such as file handles.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">std::shared_ptr</td>
          <td class="border px-4 py-2">Shared ownership of a dynamically allocated object. Reference counted.</td>
          <td class="border px-4 py-2">When multiple objects need to share ownership of a resource.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">std::weak_ptr</td>
          <td class="border px-4 py-2">Non-owning reference to an object managed by std::shared_ptr, used to prevent cyclic references.</td>
          <td class="border px-4 py-2">Observing an object without affecting its lifetime.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 4: Using std::shared_ptr -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 4: Using std::shared_ptr</h3>
      <p class="text-base md:text-lg mb-4">
        `std::shared_ptr` allows multiple pointers to share ownership of a dynamically allocated object. It ensures that the object is deleted when the last `std::shared_ptr` referencing it is destroyed.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;memory&amp;

using namespace std;

class MyClass {
public:
    MyClass() { cout &amp;&amp; "Constructor called." &amp;&amp; endl; }
    ~MyClass() { cout &amp;&amp; "Destructor called." &amp;&amp; endl; }
    void display() { cout &amp;&amp; "Displaying MyClass." &amp;&amp; endl; }
};

int main() {
    shared_ptr&lt;MyClass&gt; ptr1 = make_shared&lt;MyClass&gt;();
    {
        shared_ptr&lt;MyClass&gt; ptr2 = ptr1; // Shared ownership
        ptr2-&amp;gt;display();
        cout &amp;&amp; "Use count: " &amp;&amp; ptr1.use_count() &amp;&amp; endl; // Outputs: 2
    }
    cout &amp;&amp; "Use count after ptr2 is out of scope: " &amp;&amp; ptr1.use_count() &amp;&amp; endl; // Outputs: 1

    return 0;
}</code></pre>

      <!-- Modern C++ Features (C++11 to C++23) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Modern C++ Features (C++11 to C++23)</h2>
      <p class="text-base md:text-lg mb-4">
        Modern C++ standards have introduced numerous features that enhance the language's expressiveness, safety, and performance. This section covers key additions from C++11 through C++23, enabling you to write cleaner and more efficient code.
      </p>

      <!-- Common Modern C++ Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Feature</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Auto Keyword</td>
          <td class="border px-4 py-2">Enables type inference, allowing the compiler to deduce the variable type.</td>
          <td class="border px-4 py-2"><code>auto x = 10; // int</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Range-Based For Loops</td>
          <td class="border px-4 py-2">Simplifies iteration over containers using a concise syntax.</td>
          <td class="border px-4 py-2"><code>for(auto &amp;elem : container) { /* ... */ }</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Structured Bindings</td>
          <td class="border px-4 py-2">Allows unpacking of tuples, pairs, and structs into individual variables.</td>
          <td class="border px-4 py-2"><code>auto [x, y] = getCoordinates();</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Concepts and Constraints (C++20)</td>
          <td class="border px-4 py-2">Provide a way to specify template requirements, enhancing template code safety and readability.</td>
          <td class="border px-4 py-2"><code>template &lt;typename T&gt; requires Integral&lt;T&gt; T add(T a, T b) { return a + b; }</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">std::optional</td>
          <td class="border px-4 py-2">Represents an object that may or may not contain a value, enhancing function return types.</td>
          <td class="border px-4 py-2"><code>std::optional&lt;int&gt; findValue();</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Example 5: Using Structured Bindings -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 5: Using Structured Bindings</h3>
      <p class="text-base md:text-lg mb-4">
        Structured bindings allow you to unpack tuples, pairs, and structs into individual variables, making code more readable and concise.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;tuple&amp;

using namespace std;

// Function that returns a tuple
tuple&lt;int, string&gt; getPerson() {
    return make_tuple(30, "Alice");
}

int main() {
    // Using structured bindings to unpack the tuple
    auto [age, name] = getPerson();
    cout &amp;&amp; "Name: " &amp;&amp; name &amp;&amp; ", Age: " &amp;&amp; age &amp;&amp; endl;

    return 0;
}</code></pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use Descriptive Template Parameters:</strong> Name your template parameters clearly to indicate their purpose.</li>
        <li><strong>Limit Template Complexity:</strong> Keep templates simple to maintain readability and ease of debugging.</li>
        <li><strong>Leverage Type Traits:</strong> Use type traits and SFINAE to create more robust and type-safe templates.</li>
        <li><strong>Provide Template Specializations:</strong> When necessary, provide specializations to handle specific types more efficiently.</li>
        <li><strong>Document Your Templates:</strong> Clearly document the expected types and behaviors of your templates to aid future maintenance.</li>
      </ul>

      <!-- Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Pitfalls and Debugging Advanced Features</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Overcomplicating Templates:</strong> Avoid making templates unnecessarily complex; strive for simplicity and clarity.</li>
        <li><strong>Ignoring Type Constraints:</strong> Ensure that your templates enforce the necessary type constraints to prevent unexpected behaviors.</li>
        <li><strong>Excessive Template Specialization:</strong> While specialization is powerful, overusing it can lead to code bloat and maintenance challenges.</li>
        <li><strong>Template Compilation Errors:</strong> Template errors can be verbose and hard to decipher; use clear and concise code to minimize issues.</li>
        <li><strong>Operator Overloading Issues:</strong> Overloading operators incorrectly can lead to confusing and error-prone code.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Advanced C++ features empower you to write more efficient, flexible, and maintainable code. By mastering move semantics, lambda expressions, template metaprogramming, smart pointers, modern C++ features, operator overloading, and more, you can leverage the full potential of the C++ language to build robust applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Why and When to Use Advanced Features:</strong> Advanced features are essential when you need to optimize performance, create generic and reusable components, manage resources efficiently, and implement sophisticated design patterns. They allow you to write cleaner and more expressive code, making your applications more robust and easier to maintain.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will explore more specialized C++ topics, building upon the advanced concepts you've learned here.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvancedCppFeatures',
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

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
