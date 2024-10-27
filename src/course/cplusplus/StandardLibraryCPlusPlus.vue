<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">C++ Standard Library</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        The C++ Standard Library is a powerful collection of classes and functions that provide essential functionality for C++ programming. It includes a variety of containers, algorithms, iterators, and utilities that enhance productivity and code efficiency. This course explores the fundamental components of the C++ Standard Library, equipping you with the knowledge to leverage these tools effectively in your projects.
      </p>

      <!-- Why the C++ Standard Library is Essential -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why the C++ Standard Library is Essential</h2>
      <p class="text-base md:text-lg mb-4">
        The C++ Standard Library offers pre-written, optimized code that saves developers time and effort. By utilizing these standardized components, you can write more efficient, reliable, and maintainable code.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Fun Fact:</strong> The C++ Standard Library was first introduced in the early 1990s and has since become a cornerstone of modern C++ programming, evolving alongside the language itself.
      </p>

      <!-- Containers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Containers</h2>
      <p class="text-base md:text-lg mb-4">
        Containers are data structures provided by the C++ Standard Library to store and manage collections of objects. They offer various functionalities to suit different programming needs.
      </p>

      <!-- Common Containers Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Container</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Vector</td>
          <td class="border px-4 py-2">Dynamic array that can resize automatically.</td>
          <td class="border px-4 py-2">When you need a flexible array that can grow or shrink.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">List</td>
          <td class="border px-4 py-2">Doubly-linked list allowing efficient insertions and deletions.</td>
          <td class="border px-4 py-2">When you need frequent insertions and deletions from the middle of the collection.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Map</td>
          <td class="border px-4 py-2">Associative container storing key-value pairs with unique keys.</td>
          <td class="border px-4 py-2">When you need fast retrieval based on unique keys.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Set</td>
          <td class="border px-4 py-2">Associative container storing unique elements in a specific order.</td>
          <td class="border px-4 py-2">When you need to store unique items and require order.</td>
        </tr>
        </tbody>
      </table>

      <!-- Algorithms -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Algorithms</h2>
      <p class="text-base md:text-lg mb-4">
        The C++ Standard Library provides a rich set of algorithms that operate on containers. These algorithms help perform common tasks like sorting, searching, and modifying data efficiently.
      </p>

      <!-- Common Algorithms Table -->
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Algorithm</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Sort</td>
          <td class="border px-4 py-2">Sorts elements in a range in ascending order.</td>
          <td class="border px-4 py-2">Sorting a list of student scores.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Find</td>
          <td class="border px-4 py-2">Finds the first occurrence of a value in a range.</td>
          <td class="border px-4 py-2">Searching for a specific user ID in a vector.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">For Each</td>
          <td class="border px-4 py-2">Applies a function to each element in a range.</td>
          <td class="border px-4 py-2">Printing all elements in a container.</td>
        </tr>
        </tbody>
      </table>

      <!-- Iterators -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Iterators</h2>
      <p class="text-base md:text-lg mb-4">
        Iterators are objects that point to elements within containers and allow traversal through the elements. They provide a way to access container elements without exposing the underlying structure.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Types of Iterators:</strong>
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Iterator Type</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Input Iterator</td>
          <td class="border px-4 py-2">Can read from the pointed-to element.</td>
          <td class="border px-4 py-2">Reading elements from an input stream.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Output Iterator</td>
          <td class="border px-4 py-2">Can write to the pointed-to element.</td>
          <td class="border px-4 py-2">Writing elements to an output stream.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Forward Iterator</td>
          <td class="border px-4 py-2">Can read/write elements and move forward.</td>
          <td class="border px-4 py-2">Traversing a singly-linked list.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Bidirectional Iterator</td>
          <td class="border px-4 py-2">Can move both forward and backward.</td>
          <td class="border px-4 py-2">Traversing a doubly-linked list.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Random Access Iterator</td>
          <td class="border px-4 py-2">Can jump to any element in constant time.</td>
          <td class="border px-4 py-2">Accessing elements in a vector by index.</td>
        </tr>
        </tbody>
      </table>

      <!-- Strings -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Strings</h2>
      <p class="text-base md:text-lg mb-4">
        The `std::string` class provides a convenient way to handle and manipulate text in C++. It offers various functions to perform operations like concatenation, substring extraction, and searching within strings.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
#include &lt;string&gt;

using namespace std;

int main() {
    string greeting = "Hello, ";
    string name = "Alice";
    string message = greeting + name + "!";
    cout &lt;&lt; message &lt;&lt; endl;
    return 0;
}</code></pre>

      <!-- Input/Output Streams -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Input/Output Streams</h2>
      <p class="text-base md:text-lg mb-4">
        The iostream library provides facilities for input and output operations. Classes like `std::cin`, `std::cout`, and `std::cerr` are used for reading from standard input, writing to standard output, and writing error messages, respectively.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;

using namespace std;

int main() {
    // Output to console
    cout &lt;&lt; "Enter your age: ";
    int age;
    cin &gt;&gt; age;
    cout &lt;&lt; "You are " &lt;&lt; age &lt;&lt; " years old." &lt;&lt; endl;

    // Output to file
    ofstream outFile("output.txt");
    outFile &lt;&lt; "Age: " &lt;&lt; age &lt;&lt; endl;
    outFile.close();

    return 0;
}</code></pre>

      <!-- Smart Pointers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Smart Pointers</h2>
      <p class="text-base md:text-lg mb-4">
        Smart pointers are template classes provided by the C++ Standard Library to manage dynamic memory automatically, reducing the risk of memory leaks. The most commonly used smart pointers are `std::unique_ptr`, `std::shared_ptr`, and `std::weak_ptr`.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
#include &lt;memory&gt;

using namespace std;

int main() {
    // unique_ptr example
    unique_ptr&lt;int> ptr1(new int(10));
    cout &lt;&lt; "Value: " &lt;&lt; *ptr1 &lt;&lt; endl;

    // shared_ptr example
    shared_ptr&lt;int> ptr2 = make_shared&lt;int>(20);
    cout &lt;&lt; "Value: " &lt;&lt; *ptr2 &lt;&lt; endl;

    // weak_ptr example
    weak_ptr&lt;int> ptr3 = ptr2;
    if(auto spt = ptr3.lock()) { // Check if the shared_ptr is still valid
        cout &lt;&lt; "Weak pointer value: " &lt;&lt; *spt &lt;&lt; endl;
    }

    return 0;
}</code></pre>

      <!-- Utilities -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Utilities</h2>
      <p class="text-base md:text-lg mb-4">
        The C++ Standard Library provides various utility classes and functions that aid in common programming tasks. These include `std::pair`, `std::tuple`, and `std::optional`.
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Utility</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example Use Case</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">std::pair</td>
          <td class="border px-4 py-2">Stores two heterogeneous objects as a single unit.</td>
          <td class="border px-4 py-2">Returning multiple values from a function.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">std::tuple</td>
          <td class="border px-4 py-2">Stores a fixed-size collection of heterogeneous values.</td>
          <td class="border px-4 py-2">Handling functions that return multiple different types.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">std::optional</td>
          <td class="border px-4 py-2">Represents an object that may or may not contain a value.</td>
          <td class="border px-4 py-2">Handling cases where a function might not return a valid result.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example Code Blocks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Example Code Blocks</h2>

      <!-- Example 1: Using Vector -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 1: Using Vector</h3>
      <p class="text-base md:text-lg mb-4">
        Vectors are dynamic arrays that can resize automatically. Here's how to use a vector to store and iterate through a list of numbers.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;

using namespace std;

int main() {
    vector&lt;int> numbers = {1, 2, 3, 4, 5};
    numbers.push_back(6); // Adding an element

    for(auto it = numbers.begin(); it != numbers.end(); ++it) {
        cout &lt;&lt; *it &lt;&lt; " ";
    }
    cout &lt;&lt; endl;

    return 0;
}</code></pre>

      <!-- Example 2: Using Map -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 2: Using Map</h3>
      <p class="text-base md:text-lg mb-4">
        Maps store key-value pairs with unique keys. Here's an example of how to use a map to associate names with ages.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
#include &lt;map&gt;

using namespace std;

int main() {
    map&lt;string, int> ageMap;
    ageMap["Alice"] = 30;
    ageMap["Bob"] = 25;

    for(auto &pair : ageMap) {
        cout &lt;&lt; pair.first &lt;&lt; " is " &lt;&lt; pair.second &lt;&lt; " years old." &lt;&lt; endl;
    }

    return 0;
}</code></pre>

      <!-- Example 3: Using Sort Algorithm -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 3: Using Sort Algorithm</h3>
      <p class="text-base md:text-lg mb-4">
        The `sort` algorithm sorts elements in a range. Here's how to sort a vector of integers in ascending order.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;algorithm&gt;

using namespace std;

int main() {
    vector&lt;int> numbers = {5, 2, 9, 1, 5, 6};
    sort(numbers.begin(), numbers.end());

    for(auto num : numbers) {
        cout &lt;&lt; num &lt;&lt; " ";
    }
    cout &lt;&lt; endl;

    return 0;
}</code></pre>

      <!-- Example 4: Using Smart Pointers -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 4: Using Smart Pointers</h3>
      <p class="text-base md:text-lg mb-4">
        Smart pointers manage dynamic memory automatically, preventing memory leaks. Here's an example using `std::unique_ptr`.
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

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        You’ve now gained a foundational understanding of the C++ Standard Library. By leveraging containers, algorithms, iterators, smart pointers, and utilities, you can write more efficient and maintainable C++ code. In the next course, we’ll explore advanced topics to further enhance your C++ programming skills.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CppStandardLibrary',
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
