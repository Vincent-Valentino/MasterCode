<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">Memory Management in C++</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Welcome to the "Memory Management in C++" course! Effective memory management is crucial for building efficient and reliable C++ applications. This course explores the principles and practices of memory management in C++, including stack vs. heap allocation, dynamic memory allocation, smart pointers, and best practices to prevent memory leaks and undefined behaviors.
      </p>

      <!-- Why Memory Management Matters -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Memory Management Matters</h2>
      <p class="text-base md:text-lg mb-4">
        Proper memory management ensures that your applications use system resources efficiently, run smoothly, and are free from errors related to memory misuse. In C++, unlike some higher-level languages, developers have direct control over memory allocation and deallocation, making understanding memory management essential.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Fun Fact:</strong> Early C++ developers had to manually manage memory, which led to the development of smart pointers and modern memory management techniques to simplify and safeguard this process.
      </p>

      <!-- Stack vs. Heap Allocation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Stack vs. Heap Allocation</h2>
      <p class="text-base md:text-lg mb-4">
        In C++, memory can be allocated in two primary areas: the stack and the heap. Understanding the differences between these two types of memory allocation is fundamental to effective memory management.
      </p>

      <!-- Stack vs Heap Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Feature</th>
          <th class="px-4 py-2">Stack</th>
          <th class="px-4 py-2">Heap</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Memory Allocation</td>
          <td class="border px-4 py-2">Automatic</td>
          <td class="border px-4 py-2">Manual (using `new` and `delete`)</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Lifetime</td>
          <td class="border px-4 py-2">Scope-based</td>
          <td class="border px-4 py-2">Until explicitly deallocated</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Size Limit</td>
          <td class="border px-4 py-2">Limited, typically smaller</td>
          <td class="border px-4 py-2">Much larger, limited by system memory</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Access Speed</td>
          <td class="border px-4 py-2">Faster</td>
          <td class="border px-4 py-2">Slower</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Usage Example</td>
          <td class="border px-4 py-2">Local variables</td>
          <td class="border px-4 py-2">Dynamic arrays, objects created with `new`</td>
        </tr>
        </tbody>
      </table>

      <!-- Dynamic Memory Allocation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Dynamic Memory Allocation</h2>
      <p class="text-base md:text-lg mb-4">
        Dynamic memory allocation allows you to allocate memory at runtime using pointers. This flexibility is essential for creating data structures that can grow or shrink as needed, such as linked lists, trees, and dynamic arrays.
      </p>

      <!-- Dynamic Memory Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Using `new` and `delete`</td>
          <td class="border px-4 py-2">Allocating and deallocating memory manually.</td>
          <td class="border px-4 py-2">Creating objects whose size isn't known at compile time.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Managing Dynamic Arrays</td>
          <td class="border px-4 py-2">Creating and handling arrays with sizes determined during runtime.</td>
          <td class="border px-4 py-2">Storing a variable number of user inputs.</td>
        </tr>
        </tbody>
      </table>

      <!-- Smart Pointers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Smart Pointers</h2>
      <p class="text-base md:text-lg mb-4">
        Smart pointers are template classes provided by the C++ Standard Library to manage dynamic memory automatically. They help prevent memory leaks and dangling pointers by ensuring that memory is properly deallocated when it's no longer needed.
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

      <!-- Example 1: Using std::unique_ptr -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 1: Using std::unique_ptr</h3>
      <p class="text-base md:text-lg mb-4">
        `std::unique_ptr` ensures that the dynamically allocated memory is automatically deallocated when the pointer goes out of scope, preventing memory leaks.
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
    unique_ptr&lt;MyClass&gt; ptr = make_unique&lt;MyClass&gt;();
    ptr-&amp;gt;display();
    // Destructor is called automatically when ptr goes out of scope
    return 0;
}</code></pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Initialize Pointers:</strong> Always initialize pointers to a valid memory address or nullptr to avoid undefined behaviors.</li>
        <li><strong>Avoid Dangling Pointers:</strong> Ensure pointers do not reference deallocated memory by setting them to nullptr after deletion.</li>
        <li><strong>Prefer Smart Pointers:</strong> Use smart pointers over raw pointers to manage dynamic memory automatically and prevent leaks.</li>
        <li><strong>Clear Ownership:</strong> Maintain clear ownership semantics to avoid confusion and potential memory management bugs.</li>
        <li><strong>Use References When Appropriate:</strong> Prefer references for function parameters and return types when nullability is not required.</li>
      </ul>

      <!-- Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Pitfalls</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Memory Leaks:</strong> Failing to deallocate memory leads to leaks, causing increased memory usage and potential application crashes.</li>
        <li><strong>Dangling Pointers:</strong> Pointers that reference deallocated memory can cause undefined behavior when dereferenced.</li>
        <li><strong>Double Deletion:</strong> Attempting to delete the same memory location multiple times can corrupt memory and crash the program.</li>
        <li><strong>Uninitialized Pointers:</strong> Using pointers that have not been initialized can lead to unpredictable behavior and security vulnerabilities.</li>
        <li><strong>Improper Use of Smart Pointers:</strong> Misusing smart pointers, such as creating cyclic references with `std::shared_ptr`, can still lead to memory leaks.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Effective memory management is vital for building robust and efficient C++ applications. By understanding the differences between stack and heap allocation, utilizing dynamic memory allocation wisely, and leveraging smart pointers, you can manage memory safely and efficiently, avoiding common pitfalls that lead to memory leaks and undefined behaviors.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Why and When We Need Memory Management:</strong> Memory management is essential when dealing with resources that require dynamic allocation, such as large data structures, objects whose lifetime isn't bound to a specific scope, and when optimizing performance and resource usage. Proper memory management ensures that applications run efficiently, remain stable, and do not consume unnecessary system resources.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will explore more advanced C++ topics, building upon the foundation you've established with memory management.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemoryManagementCpp',
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
