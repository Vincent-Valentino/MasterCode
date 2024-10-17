<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-950 rounded-t-xl p-4">
      <img src="/csharp/logo.svg" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to C#</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        C# is a modern, object-oriented programming language developed by Microsoft as part of its .NET initiative. Designed for building a wide range of applications, C# combines the power of C++ with the ease of Visual Basic, making it a versatile choice for developers.
      </p>

      <!-- Overview of C# -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Overview of C#</h2>
      <p class="text-base md:text-lg mb-4">
        C# is a type-safe, managed language that supports strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It plays a pivotal role in the .NET ecosystem, enabling the development of desktop applications, web services, games, and more.
      </p>

      <!-- History and Evolution of C# -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">History and Evolution of C#</h2>
      <p class="text-base md:text-lg mb-6">
        Introduced by Microsoft in 2000, C# was designed to be a simple, modern, and general-purpose programming language. Over the years, it has evolved with numerous updates, adding features like asynchronous programming, pattern matching, and enhanced interoperability, keeping it relevant in the fast-paced tech landscape.
      </p>

      <!-- Comparing C# with Other Languages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Comparing C# with Java and C++</h2>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">Feature</th>
            <th class="px-4 py-2">C#</th>
            <th class="px-4 py-2">Java</th>
            <th class="px-4 py-2">C++</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2 font-semibold">Syntax</td>
            <td class="border px-4 py-2">C# has a modern, clean syntax similar to Java.</td>
            <td class="border px-4 py-2">Java syntax is similar to C#, focusing on simplicity and portability.</td>
            <td class="border px-4 py-2">C++ syntax is more complex, supporting both low-level and high-level programming.</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2 font-semibold">Platform</td>
            <td class="border px-4 py-2">Primarily Windows, but also cross-platform with .NET Core/.NET 5+.</td>
            <td class="border px-4 py-2">Write Once, Run Anywhere (JVM-based).</td>
            <td class="border px-4 py-2">Cross-platform, widely used in systems programming.</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 font-semibold">Use Cases</td>
            <td class="border px-4 py-2">Web apps, desktop apps, games (Unity), mobile apps.</td>
            <td class="border px-4 py-2">Enterprise applications, Android apps, web services.</td>
            <td class="border px-4 py-2">System/software development, game development, real-time simulations.</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2 font-semibold">Memory Management</td>
            <td class="border px-4 py-2">Managed by the .NET runtime (garbage collection).</td>
            <td class="border px-4 py-2">Managed by the JVM (garbage collection).</td>
            <td class="border px-4 py-2">Manual memory management with pointers.</td>
          </tr>
        </tbody>
      </table>

      <!-- Setting Up the Development Environment -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Setting Up the Development Environment</h2>
      <p class="text-base md:text-lg mb-4">
        To start developing in C#, you'll need an integrated development environment (IDE). The most popular choices are <strong>Visual Studio</strong> and <strong>Visual Studio Code</strong>.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Visual Studio:</strong> A comprehensive IDE with extensive features for C# development, including debugging, IntelliSense, and integrated testing tools.</li>
        <li><strong>Visual Studio Code:</strong> A lightweight, extensible editor with support for C# through extensions like OmniSharp.</li>
      </ul>

      <!-- Writing Your First C# Program -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Writing Your First C# Program</h2>
      <p class="text-base md:text-lg mb-4">
        Let's create a simple "Hello World" console application to get started.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}</code></pre>

      <!-- Applications and Use Cases -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Applications and Use Cases</h2>
      <p class="text-base md:text-lg mb-4">
        C# is a versatile language used in various domains, including:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Desktop Applications:</strong> Building Windows applications with Windows Forms or WPF.</li>
        <li><strong>Web Applications:</strong> Developing dynamic websites and web services using ASP.NET.</li>
        <li><strong>Game Development:</strong> Creating games with the Unity engine.</li>
        <li><strong>Mobile Applications:</strong> Building cross-platform mobile apps using Xamarin.</li>
        <li><strong>Cloud Services:</strong> Developing scalable cloud applications with Azure.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        C# stands out as a powerful and flexible programming language within the .NET ecosystem. Its robust features, extensive libraries, and strong community support make it an excellent choice for both beginners and experienced developers looking to build a wide array of applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToCSharp',
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
