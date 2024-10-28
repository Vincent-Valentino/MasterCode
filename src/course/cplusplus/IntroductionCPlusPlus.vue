<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to C++</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        C++ is a powerful, high-performance programming language that has been integral to software development for decades. Known for its efficiency and control over system resources, C++ is widely used across domains like system/software development, game development, and real-time simulations. This guide introduces C++'s evolution, key features, and why it remains a crucial language in the modern tech landscape.
      </p>

      <!-- What is C++? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What is C++?</h2>
      <p class="text-base md:text-lg mb-4">
        C++ is a general-purpose programming language developed by Bjarne Stroustrup as an extension of the C language. It supports both procedural and object-oriented programming paradigms, allowing developers to create efficient, scalable code.
      </p>
      <p class="text-base md:text-lg mb-6">
        Key Features of C++:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Object-Oriented:</strong> Supports classes, inheritance, polymorphism, and encapsulation.</li>
        <li><strong>Low-Level Manipulation:</strong> Provides access to direct memory control through pointers.</li>
        <li><strong>Performance:</strong> C++ is compiled into machine code, offering high performance for system-intensive applications.</li>
        <li><strong>Standard Template Library (STL):</strong> Includes a robust set of data structures and algorithms.</li>
      </ul>

      <!-- History and Evolution of C++ -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">History and Evolution of C++</h2>
      <p class="text-base md:text-lg mb-6">
        C++ was created in the early 1980s by Bjarne Stroustrup at Bell Labs. Originally called "C with Classes," it introduced object-oriented programming to the established C language. Over time, it evolved into C++ and was standardized in versions like C++11, C++17, and C++20, each adding modern features and language improvements.
      </p>

      <!-- Comparing C++ with Other Languages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Comparing C++ with Other Languages</h2>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Feature</th>
          <th class="px-4 py-2">C++</th>
          <th class="px-4 py-2">Java</th>
          <th class="px-4 py-2">C</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Syntax</td>
          <td class="border px-4 py-2">Complex with low-level memory manipulation.</td>
          <td class="border px-4 py-2">Simple, with automatic memory management.</td>
          <td class="border px-4 py-2">Procedural, minimal syntax with no classes.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Platform</td>
          <td class="border px-4 py-2">Cross-platform, compiled to machine code.</td>
          <td class="border px-4 py-2">Runs on JVM, providing platform independence.</td>
          <td class="border px-4 py-2">Cross-platform, mostly used for low-level applications.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Memory Management</td>
          <td class="border px-4 py-2">Manual with pointers.</td>
          <td class="border px-4 py-2">Automatic with garbage collection.</td>
          <td class="border px-4 py-2">Manual with pointers.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Use Cases</td>
          <td class="border px-4 py-2">System software, games, real-time applications.</td>
          <td class="border px-4 py-2">Enterprise applications, Android apps.</td>
          <td class="border px-4 py-2">Operating systems, embedded systems.</td>
        </tr>
        </tbody>
      </table>

      <!-- Setting Up the Development Environment -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Setting Up the Development Environment</h2>
      <p class="text-base md:text-lg mb-4">
        To get started with C++, you’ll need a compiler and an integrated development environment (IDE). Popular choices include <strong>Visual Studio</strong> for Windows and <strong>CLion</strong> by JetBrains.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Visual Studio:</strong> Comprehensive IDE with built-in C++ support, debugging, and testing tools.</li>
        <li><strong>CLion:</strong> Powerful IDE from JetBrains, providing advanced C++ development features.</li>
      </ul>

      <!-- Writing Your First C++ Program -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Writing Your First C++ Program</h2>
      <p class="text-base md:text-lg mb-4">
        Let’s write a simple "Hello, World!" program in C++ to get started.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}</code></pre>

      <!-- Applications and Use Cases -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Applications and Use Cases</h2>
      <p class="text-base md:text-lg mb-4">
        C++ is utilized across numerous fields for high-performance applications, including:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>System Software:</strong> Operating systems and drivers.</li>
        <li><strong>Game Development:</strong> High-performance graphics and game engines.</li>
        <li><strong>Embedded Systems:</strong> Microcontroller programming for IoT and automotive.</li>
        <li><strong>Real-Time Simulations:</strong> Simulation software in fields like aerospace and defense.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        C++ remains a crucial language for performance-critical applications due to its efficiency and control over hardware resources. Mastering C++ offers a gateway to high-impact roles in fields like game development, systems programming, and real-time simulation.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToCpp',
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
