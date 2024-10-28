<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">Concurrency in C++</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Welcome to the "Concurrency in C++" course! Concurrency and multithreading are pivotal for developing high-performance and responsive applications. This course explores the fundamental concepts of concurrency in C++, including thread creation, synchronization mechanisms, advanced thread management, lock-free programming, and parallel algorithms. By the end of this course, you'll be equipped with the knowledge to leverage concurrency effectively in your C++ projects.
      </p>

      <!-- Why Concurrency Matters -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Concurrency Matters</h2>
      <p class="text-base md:text-lg mb-4">
        Concurrency allows multiple threads to execute simultaneously, maximizing CPU utilization and improving application performance. In today's multi-core processor landscape, leveraging concurrency is essential for building efficient and scalable software.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Fun Fact:</strong> The first multi-threaded application was developed in the early 1980s, revolutionizing the way software handles multiple tasks concurrently.
      </p>

      <!-- Basics of Multithreading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Basics of Multithreading</h2>
      <p class="text-base md:text-lg mb-4">
        Multithreading involves running multiple threads within a single process, allowing tasks to be executed in parallel. This section covers the foundational aspects of threads in C++, including creation and management.
      </p>

      <!-- Common Multithreading Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">What is a Thread?</td>
          <td class="border px-4 py-2">A lightweight process that can run concurrently with other threads within the same process.</td>
          <td class="border px-4 py-2">Running multiple calculations simultaneously in a scientific application.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Creating Threads</td>
          <td class="border px-4 py-2">Using `std::thread` to instantiate and manage threads.</td>
          <td class="border px-4 py-2"><code>std::thread t(&amp;functionName, args...);</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Joining Threads</td>
          <td class="border px-4 py-2">Synchronizing threads by waiting for them to finish.</td>
          <td class="border px-4 py-2"><code>t.join();</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Detaching Threads</td>
          <td class="border px-4 py-2">Allowing threads to run independently without blocking the main thread.</td>
          <td class="border px-4 py-2"><code>t.detach();</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Analogy</td>
          <td class="border px-4 py-2">Comparing threads to workers in a factory, each handling different tasks simultaneously.</td>
          <td class="border px-4 py-2">Managing different assembly lines concurrently to boost production.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 1: Creating and Managing Threads -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 1: Creating and Managing Threads</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to create and manage threads using `std::thread`. It showcases thread creation, execution, and synchronization by joining threads.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;thread&amp;

using namespace std;

// Function to be executed by a thread
void printMessage(const string &amp;msg, int count) {
    for(int i = 0; i &lt; count; ++i) {
        cout &amp;&amp; msg &amp;&amp; endl;
    }
}

int main() {
    // Creating two threads
    thread t1(printMessage, "Hello from Thread 1", 5);
    thread t2(printMessage, "Hello from Thread 2", 5);

    // Joining threads to wait for their completion
    t1.join();
    t2.join();

    return 0;
}</code></pre>

      <!-- Thread Synchronization -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Thread Synchronization</h2>
      <p class="text-base md:text-lg mb-4">
        Synchronizing threads is essential to prevent race conditions and ensure data consistency when multiple threads access shared resources. This section explores mutexes, locks, and condition variables as primary synchronization mechanisms.
      </p>

      <!-- Synchronization Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Race Condition</td>
          <td class="border px-4 py-2">A situation where the behavior of software depends on the sequence or timing of uncontrollable events.</td>
          <td class="border px-4 py-2">Two threads trying to increment the same counter simultaneously.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Mutex</td>
          <td class="border px-4 py-2">A mutual exclusion object used to protect shared data from being accessed by multiple threads simultaneously.</td>
          <td class="border px-4 py-2"><code>std::mutex mtx;</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Lock Guard</td>
          <td class="border px-4 py-2">A RAII-style mutex wrapper that provides a convenient way to manage mutex locking and unlocking.</td>
          <td class="border px-4 py-2"><code>std::lock_guard&lt;std::mutex&gt; lock(mtx);</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Condition Variable</td>
          <td class="border px-4 py-2">A synchronization primitive that blocks threads until notified to continue execution.</td>
          <td class="border px-4 py-2"><code>std::condition_variable cv;</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Synchronizing access to a shared printer among multiple threads to prevent conflicts.</td>
          <td class="border px-4 py-2">Ensuring that only one thread can send data to the printer at a time.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 2: Using Mutexes and Locks -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 2: Using Mutexes and Locks</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to use mutexes and lock guards to synchronize access to a shared resource, preventing race conditions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;thread&amp;
#include &amp;mutex&amp;

using namespace std;

mutex mtx; // Mutex for critical section
int counter = 0;

// Function to increment the counter
void incrementCounter() {
    for(int i = 0; i &lt; 1000; ++i) {
        lock_guard&lt;mutex&gt; lock(mtx); // Locking the mutex
        ++counter;
    }
}

int main() {
    thread t1(incrementCounter);
    thread t2(incrementCounter);

    t1.join();
    t2.join();

    cout &amp;&amp; "Final Counter Value: " &amp;&amp; counter &amp;&amp; endl; // Should be 2000

    return 0;
}</code></pre>

      <!-- Advanced Thread Management -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Advanced Thread Management</h2>
      <p class="text-base md:text-lg mb-4">
        Managing multiple threads efficiently is crucial for optimizing performance and resource utilization. This section explores thread pools, futures, promises, and asynchronous programming using `std::async`.
      </p>

      <!-- Advanced Thread Management Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Thread Pools</td>
          <td class="border px-4 py-2">A collection of pre-instantiated reusable threads for executing tasks.</td>
          <td class="border px-4 py-2">Handling multiple incoming network requests efficiently.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Futures and Promises</td>
          <td class="border px-4 py-2">Mechanisms for synchronizing asynchronous operations and retrieving results.</td>
          <td class="border px-4 py-2"><code>std::future&lt;int&gt; f = std::async(&amp;functionName, args...);</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Async Programming</td>
          <td class="border px-4 py-2">Executing tasks asynchronously without blocking the main thread.</td>
          <td class="border px-4 py-2"><code>std::future&lt;void&gt; f = std::async(&amp;someFunction);</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Real-Life Use Case</td>
          <td class="border px-4 py-2">Implementing a responsive user interface that handles background tasks.</td>
          <td class="border px-4 py-2">Loading data from a database without freezing the UI.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 3: Using std::async and std::future -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 3: Using std::async and std::future</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to execute a function asynchronously using `std::async` and retrieve its result using `std::future`.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;future&amp;
#include &amp;thread&amp;
#include &amp;chrono&amp;

using namespace std;

// Function to perform a time-consuming task
int longComputation(int a, int b) {
    // Simulate a long computation
    this_thread::sleep_for(chrono::seconds(2));
    return a + b;
}

int main() {
    // Launch the computation asynchronously
    future&lt;int&gt; result = async(&amp;longComputation, 5, 10);

    cout &amp;&amp; "Doing other work while computation is running..." &amp;&amp; endl;

    // Retrieve the result (this will block until the computation is done)
    int sum = result.get();

    cout &amp;&amp; "Result of long computation: " &amp;&amp; sum &amp;&amp; endl;

    return 0;
}</code></pre>

      <!-- Lock-Free Programming -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Lock-Free Programming</h2>
      <p class="text-base md:text-lg mb-4">
        Lock-free programming aims to create concurrent algorithms that do not require mutual exclusion locks, thereby reducing contention and improving performance. This section covers atomic operations and their applications in building high-performance data structures.
      </p>

      <!-- Lock-Free Programming Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">Atomic Operations</td>
          <td class="border px-4 py-2">Operations that are performed without interruption, ensuring thread safety without locks.</td>
          <td class="border px-4 py-2"><code>std::atomic&lt;int&gt; atomicCounter;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Lock-Free Data Structures</td>
          <td class="border px-4 py-2">Data structures that allow multiple threads to operate on them without traditional locking mechanisms.</td>
          <td class="border px-4 py-2">Implementing a lock-free queue for high-throughput applications.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Benefits</td>
          <td class="border px-4 py-2">Reduces overhead and contention, leading to higher performance in multi-threaded environments.</td>
          <td class="border px-4 py-2">Building real-time systems that require high responsiveness.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Real-Life Example</td>
          <td class="border px-4 py-2">Creating a high-performance logging system where multiple threads can write logs without waiting for locks.</td>
          <td class="border px-4 py-2">Ensuring that log messages are recorded efficiently in a multi-threaded application.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 4: Using std::atomic -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 4: Using std::atomic</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates the use of `std::atomic` to safely increment a counter without using mutexes, preventing race conditions in a multi-threaded environment.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;thread&amp;
#include &amp;atomic&amp;

using namespace std;

atomic&lt;int&gt; counter(0); // Atomic counter

// Function to increment the counter
void incrementCounter() {
    for(int i = 0; i &lt; 1000; ++i) {
        counter.fetch_add(1, memory_order_relaxed);
    }
}

int main() {
    thread t1(incrementCounter);
    thread t2(incrementCounter);

    t1.join();
    t2.join();

    cout &amp;&amp; "Final Counter Value: " &amp;&amp; counter.load() &amp;&amp; endl; // Should be 2000

    return 0;
}</code></pre>

      <!-- Parallel Algorithms -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Parallel Algorithms</h2>
      <p class="text-base md:text-lg mb-4">
        The C++ Standard Library provides parallel versions of many algorithms, allowing them to execute concurrently across multiple threads. This section explores how to utilize parallel algorithms to optimize performance.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-Life Example:</strong> Parallelizing data processing tasks to fully utilize multi-core processors and reduce execution time.
      </p>

      <!-- Parallel Algorithms Concepts Table -->
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
          <td class="border px-4 py-2 font-semibold">std::for_each</td>
          <td class="border px-4 py-2">Applies a function to each element in a range, potentially in parallel.</td>
          <td class="border px-4 py-2">Processing large datasets by applying transformations concurrently.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">std::transform</td>
          <td class="border px-4 py-2">Applies a function to a range and stores the result in another range, possibly in parallel.</td>
          <td class="border px-4 py-2">Converting a list of temperatures from Celsius to Fahrenheit concurrently.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">std::reduce</td>
          <td class="border px-4 py-2">Accumulates the elements in a range using a specified binary operation, potentially in parallel.</td>
          <td class="border px-4 py-2">Calculating the sum of a large array of numbers efficiently.</td>
        </tr>
        </tbody>
      </table>

      <!-- Example 5: Using Parallel std::for_each -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Example 5: Using Parallel std::for_each</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to use the parallel execution policy with `std::for_each` to process elements concurrently, leveraging multiple threads for improved performance.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &amp;iostream&amp;
#include &amp;vector&amp;
#include &amp;algorithm&amp;
#include &amp;execution&amp;

using namespace std;

int main() {
    vector&lt;int&gt; numbers(1000000, 1); // Initialize a large vector with 1s

    // Increment each element by 1 using a parallel for_each
    for_each(execution::par, numbers.begin(), numbers.end(), [](int &amp;x) {
        x += 1;
    });

    // Verify the result
    if(numbers[0] == 2 && numbers[numbers.size()-1] == 2) {
        cout &amp;&amp; "All elements incremented successfully." &amp;&amp; endl;
    }

    return 0;
}</code></pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Avoid Shared Mutable State:</strong> Minimize shared data among threads to reduce synchronization complexity.</li>
        <li><strong>Use Smart Pointers:</strong> Leverage smart pointers for automatic resource management in multi-threaded environments.</li>
        <li><strong>Prefer High-Level Concurrency Constructs:</strong> Utilize thread pools, futures, and async tasks instead of manually managing threads.</li>
        <li><strong>Minimize Lock Contention:</strong> Design algorithms to reduce the need for frequent locking, enhancing performance.</li>
        <li><strong>Ensure Thread Safety:</strong> Protect shared resources with appropriate synchronization mechanisms to maintain data integrity.</li>
      </ul>

      <!-- Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Pitfalls</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Race Conditions:</strong> Occur when multiple threads access shared data concurrently without proper synchronization.</li>
        <li><strong>Deadlocks:</strong> Happen when two or more threads are waiting indefinitely for each other to release resources.</li>
        <li><strong>Starvation:</strong> A situation where a thread is perpetually denied access to resources it needs to proceed.</li>
        <li><strong>Excessive Thread Creation:</strong> Creating too many threads can lead to high overhead and degraded performance.</li>
        <li><strong>Improper Use of Synchronization Primitives:</strong> Incorrectly using mutexes, locks, or condition variables can introduce bugs and performance issues.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Concurrency and multithreading are essential for developing high-performance and responsive C++ applications. By understanding thread creation, synchronization mechanisms, advanced thread management, and leveraging modern C++ concurrency features, you can optimize your programs to fully utilize system resources and handle complex tasks efficiently.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Why and When to Use Concurrency:</strong> Concurrency is vital when your application needs to perform multiple tasks simultaneously, such as handling user interactions while processing data in the background. It's also crucial for maximizing the performance of multi-core processors, enabling parallel processing of large datasets, and building scalable and responsive systems.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will explore more specialized C++ topics, building upon the concurrency concepts you've learned here.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConcurrencyCpp',
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
