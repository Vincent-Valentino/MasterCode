<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">Pointers and References in C++</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Welcome to the "Pointers and References in C++" course! This course delves into the fundamental concepts of pointers and references, essential tools for efficient memory management and versatile programming in C++. By the end of this course, you'll have a solid understanding of how to use pointers and references to write more dynamic and optimized code.
      </p>

      <!-- Why Pointers and References Matter -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Pointers and References Matter</h2>
      <p class="text-base md:text-lg mb-4">
        Pointers and references are powerful features in C++ that provide direct access to memory and enable efficient data manipulation. They are crucial for dynamic memory allocation, optimizing performance, and creating complex data structures.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Fun Fact:</strong> The concept of pointers in C++ was inspired by the ability to handle memory directly, a feature inherited from the C language, allowing developers to create more efficient and high-performance applications.
      </p>

      <!-- Understanding Pointers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Pointers</h2>
      <p class="text-base md:text-lg mb-4">
        Pointers are variables that store memory addresses, typically the address of another variable. They allow for dynamic memory management and efficient data handling.
      </p>

      <!-- Common Pointer Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Concept</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">What is a Pointer?</td>
          <td class="border px-4 py-2">A variable that holds the memory address of another variable.</td>
          <td class="border px-4 py-2"><code>int *ptr;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Pointer Declaration and Initialization</td>
          <td class="border px-4 py-2">Declaring a pointer and assigning it the address of a variable.</td>
          <td class="border px-4 py-2"><code>int a = 10;<br />int *ptr = &amp;a;</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Dereferencing Pointers</td>
          <td class="border px-4 py-2">Accessing the value stored at the memory address the pointer holds.</td>
          <td class="border px-4 py-2"><code>cout &lt;&lt; *ptr;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Pointer Arithmetic</td>
          <td class="border px-4 py-2">Performing arithmetic operations on pointers.</td>
          <td class="border px-4 py-2"><code>ptr++;</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Pointers and Arrays</td>
          <td class="border px-4 py-2">Understanding the relationship between pointers and arrays.</td>
          <td class="border px-4 py-2"><code>int arr[5];<br />int *ptr = arr;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Pointers to Functions</td>
          <td class="border px-4 py-2">Using pointers to reference and call functions.</td>
          <td class="border px-4 py-2"><code>int add(int a, int b);<br />int (*funcPtr)(int, int) = &amp;add;</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Example 1: Using Pointers -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 1: Using Pointers</h3>
      <p class="text-base md:text-lg mb-4">
        Pointers allow you to directly manipulate the memory of variables. Here's a simple example demonstrating pointer declaration, initialization, and dereferencing.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int a = 10;
    int *ptr = &amp;a; // Pointer initialization

    cout &lt;&lt; "Value of a: " &lt;&lt; a &lt;&lt; endl;
    cout &lt;&lt; "Address of a: " &lt;&lt; ptr &lt;&lt; endl;
    cout &lt;&lt; "Value pointed to by ptr: " &lt;&lt; *ptr &lt;&lt; endl;

    return 0;
}</code></pre>

      <!-- Understanding References -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding References</h2>
      <p class="text-base md:text-lg mb-4">
        References are aliases for existing variables. Unlike pointers, references cannot be null and must be initialized when declared.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-Life Example:</strong> Think of a reference as a nickname for a person. While you can call them by their nickname, you cannot have a nickname that refers to nothing.
      </p>

      <!-- Common Reference Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Concept</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">What is a Reference?</td>
          <td class="border px-4 py-2">An alias for an existing variable.</td>
          <td class="border px-4 py-2"><code>int &amp;ref = a;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Reference Declaration and Initialization</td>
          <td class="border px-4 py-2">Declaring a reference and initializing it to an existing variable.</td>
          <td class="border px-4 py-2"><code>int b = 20;<br />int &amp;ref = b;</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">References vs Pointers</td>
          <td class="border px-4 py-2">Key differences between references and pointers.</td>
          <td class="border px-4 py-2">References cannot be null and do not require dereferencing.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">References as Function Parameters</td>
          <td class="border px-4 py-2">Passing arguments by reference to allow modification.</td>
          <td class="border px-4 py-2"><code>void modify(int &amp;x) { x = 100; }</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Example 2: Using References -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 2: Using References</h3>
      <p class="text-base md:text-lg mb-4">
        References provide a way to modify variables directly without using pointers. Here's an example of passing a variable by reference to a function.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

// Function that modifies the input variable using a reference
void modify(int &amp;x) {
    x = 100;
}

int main() {
    int a = 50;
    cout &lt;&lt; "Before modification: " &lt;&lt; a &lt;&lt; endl;
    modify(a); // Passing by reference
    cout &lt;&lt; "After modification: " &lt;&lt; a &lt;&lt; endl;

    return 0;
}</code></pre>

      <!-- Dynamic Memory Allocation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Dynamic Memory Allocation</h2>
      <p class="text-base md:text-lg mb-4">
        Dynamic memory allocation allows you to allocate memory at runtime using pointers. This is essential for creating flexible data structures and managing memory efficiently.
      </p>

      <!-- Common Dynamic Memory Concepts Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Concept</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Using `new` and `delete`</td>
          <td class="border px-4 py-2">Allocating and deallocating memory dynamically.</td>
          <td class="border px-4 py-2"><code>int *ptr = new int;<br />delete ptr;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Managing Dynamic Arrays</td>
          <td class="border px-4 py-2">Creating and handling arrays whose size is determined at runtime.</td>
          <td class="border px-4 py-2"><code>int *arr = new int[5];<br />delete[] arr;</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Example 3: Dynamic Memory Allocation -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 3: Dynamic Memory Allocation</h3>
      <p class="text-base md:text-lg mb-4">
        Dynamic memory allocation allows for creating variables and arrays whose size is determined during runtime. Here's an example of allocating and deallocating memory for an integer.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    // Allocating memory for an integer
    int *ptr = new int;
    *ptr = 25;
    cout &lt;&lt; "Value: " &lt;&lt; *ptr &lt;&lt; endl;

    // Deallocating memory
    delete ptr;

    return 0;
}</code></pre>

      <!-- Smart Pointers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Smart Pointers</h2>
      <p class="text-base md:text-lg mb-4">
        Smart pointers are objects that manage the lifetime of dynamically allocated memory, ensuring proper deallocation and preventing memory leaks. The C++ Standard Library provides several smart pointer types, each with unique features.
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

      <!-- Example 4: Using Smart Pointers -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 4: Using std::unique_ptr</h3>
      <p class="text-base md:text-lg mb-4">
        `std::unique_ptr` ensures that the dynamically allocated memory is automatically deallocated when the pointer goes out of scope, preventing memory leaks.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
#include &lt;memory&gt;
using namespace std;

class MyClass {
public:
    MyClass() { cout &lt;&lt; "Constructor called." &lt;&lt; endl; }
    ~MyClass() { cout &lt;&lt; "Destructor called." &lt;&lt; endl; }
    void display() { cout &lt;&lt; "Displaying MyClass." &lt;&lt; endl; }
};

int main() {
    unique_ptr&lt;MyClass> ptr = make_unique&lt;MyClass>();
    ptr-&gt;display();
    // Destructor is called automatically when ptr goes out of scope
    return 0;
}</code></pre>

      <!-- Example 5: Using std::optional -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 5: Using std::optional</h3>
      <p class="text-base md:text-lg mb-4">
        `std::optional` represents an object that may or may not contain a value. It's useful for functions that might fail to return a result.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
#include &lt;optional&gt;
using namespace std;

optional&lt;int> findEven(const vector&lt;int> &numbers) {
    for(auto num : numbers) {
        if(num % 2 == 0) return num;
    }
    return nullopt; // No even number found
}

int main() {
    vector&lt;int> nums = {1, 3, 5, 7, 8};
    auto result = findEven(nums);

    if(result.has_value()) {
        cout &lt;&lt; "First even number: " &lt;&lt; result.value() &lt;&lt; endl;
    } else {
        cout &lt;&lt; "No even number found." &lt;&lt; endl;
    }

    return 0;
}</code></pre>

      <!-- References vs Pointers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">References vs Pointers</h2>
      <p class="text-base md:text-lg mb-4">
        While both pointers and references allow indirect access to variables, they have distinct differences that make each suitable for specific scenarios.
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Feature</th>
          <th class="px-4 py-2">Pointer</th>
          <th class="px-4 py-2">Reference</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Syntax</td>
          <td class="border px-4 py-2"><code>int *ptr;</code></td>
          <td class="border px-4 py-2"><code>int &amp;ref;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Nullability</td>
          <td class="border px-4 py-2">Can be null.</td>
          <td class="border px-4 py-2">Cannot be null.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Reassignment</td>
          <td class="border px-4 py-2">Can be reassigned to point to different variables.</td>
          <td class="border px-4 py-2">Cannot be reassigned once initialized.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Dereferencing</td>
          <td class="border px-4 py-2">Requires dereferencing using *</td>
          <td class="border px-4 py-2">Accessed directly without dereferencing.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Use Case</td>
          <td class="border px-4 py-2">Dynamic memory management, data structures.</td>
          <td class="border px-4 py-2">Function parameters, aliasing variables.</td>
        </tr>
        </tbody>
      </table>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Initialize Pointers:</strong> Always initialize pointers to a valid memory address or nullptr.</li>
        <li><strong>Avoid Dangling Pointers:</strong> Ensure pointers do not reference deallocated memory.</li>
        <li><strong>Use References When Possible:</strong> Prefer references for function parameters and return types when nullability is not required.</li>
        <li><strong>Leverage Smart Pointers:</strong> Utilize smart pointers to manage dynamic memory automatically and prevent leaks.</li>
        <li><strong>Clear Ownership:</strong> Maintain clear ownership semantics to avoid confusion and potential bugs.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Pointers and references are indispensable tools in C++ programming, offering powerful capabilities for memory management and efficient data manipulation. By mastering these concepts, you can write more dynamic, efficient, and maintainable code.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Why and When We Need Pointers:</strong> Pointers are essential when you need direct access to memory, dynamic memory allocation, or when implementing complex data structures like linked lists and trees. They also play a crucial role in optimizing performance by allowing functions to modify variables directly without the overhead of copying data.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will explore more advanced topics in C++, building upon the foundation you've established with pointers and references.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PointersAndReferences',
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
