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
        C++ is a powerful, high-performance programming language that has been a cornerstone in the software development industry for decades. Renowned for its efficiency and control over system resources, C++ is widely used in various domains, including system/software development, game development, real-time simulations, and more. This introduction delves into the history of C++, its evolution from the C programming language, setting up a development environment, and writing your first C++ program. Additionally, we will explore C++'s pivotal role in modern software development, highlighting why it remains a preferred choice for developers worldwide.
      </p>

      <!-- What is C++? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What is C++?</h2>
      <p class="text-base md:text-lg mb-4">
        C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language. It incorporates both procedural and object-oriented programming paradigms, allowing developers to write efficient and flexible code. C++ is known for its ability to provide low-level memory manipulation while still offering high-level abstractions, making it suitable for a wide range of applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        Key Features of C++:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Object-Oriented:</strong> Supports classes, inheritance, polymorphism, and encapsulation.</li>
        <li><strong>Low-Level Manipulation:</strong> Allows direct manipulation of hardware and memory through pointers.</li>
        <li><strong>Performance:</strong> Compiled language that produces efficient machine code, suitable for performance-critical applications.</li>
        <li><strong>Standard Template Library (STL):</strong> Provides a rich set of template-based data structures and algorithms.</li>
        <li><strong>Portability:</strong> Code written in C++ can be compiled and run on various platforms with minimal modifications.</li>
      </ul>

      <!-- History of C++ -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">History of C++ and Its Evolution from C</h2>
      <p class="text-base md:text-lg mb-4">
        C++ was developed by Bjarne Stroustrup at Bell Labs starting in the early 1980s. Initially named "C with Classes," C++ was designed to enhance the C programming language by adding object-oriented features, thereby enabling developers to create more complex and manageable codebases. Over the years, C++ has undergone several standardization updates, with major versions like C++98, C++03, C++11, C++14, C++17, C++20, and the upcoming C++23 introducing new features and improvements.
      </p>
      <p class="text-base md:text-lg mb-6">
        The evolution from C to C++ was driven by the need for better abstraction mechanisms, such as classes and objects, which facilitate encapsulation, inheritance, and polymorphism. These features enable developers to model real-world entities more effectively, leading to more scalable and maintainable software systems.
      </p>

      <!-- What is C++? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Use C++?</h2>
      <p class="text-base md:text-lg mb-4">
        C++ offers a unique blend of features that make it an attractive choice for a wide array of applications. Here are some compelling reasons to use C++:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Performance:</strong> C++ is a compiled language that translates directly to machine code, resulting in highly efficient and fast-executing programs.</li>
        <li><strong>Control:</strong> Provides granular control over system resources and memory management through pointers and direct memory access.</li>
        <li><strong>Flexibility:</strong> Supports multiple programming paradigms, including procedural, object-oriented, and generic programming.</li>
        <li><strong>Extensive Libraries and Frameworks:</strong> Access to a vast ecosystem of libraries and frameworks that extend its capabilities.</li>
        <li><strong>Portability:</strong> Code can be written to be platform-independent, allowing applications to run on various operating systems with minimal changes.</li>
        <li><strong>Community and Support:</strong> A large and active community ensures continuous improvement, support, and a wealth of resources for learning and troubleshooting.</li>
      </ul>

      <!-- C++ Compared to Other Languages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">C++ Compared to Other Languages</h2>
      <p class="text-base md:text-lg mb-4">
        When compared to other programming languages, C++ stands out in several key areas:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Versus C:</strong> While C is a procedural language focused on system-level programming, C++ builds upon C by introducing object-oriented features, enabling more complex and organized code structures.</li>
        <li><strong>Versus Java:</strong> Java is a purely object-oriented language that runs on a virtual machine, providing platform independence. C++ offers better performance and finer control over system resources but requires more meticulous memory management.</li>
        <li><strong>Versus C#:</strong> C# is a modern, high-level language primarily used within the .NET framework, offering garbage collection and a rich standard library. C++ provides more control and performance, making it suitable for applications where these factors are critical.</li>
        <li><strong>Versus Python:</strong> Python is an interpreted language known for its simplicity and readability, making it ideal for rapid development. C++ offers superior performance and is better suited for resource-intensive applications.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Key Takeaways:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>C++ excels in performance-critical applications due to its compiled nature and low-level memory management capabilities.</li>
        <li>It offers a balance between high-level abstractions and low-level system access, providing both flexibility and control.</li>
        <li>While other languages may offer ease of use or rapid development, C++ remains unmatched in scenarios where performance and resource management are paramount.</li>
      </ul>

      <!-- Famous C++ Frameworks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Famous C++ Frameworks</h2>
      <p class="text-base md:text-lg mb-4">
        C++ boasts a rich ecosystem of frameworks and libraries that extend its functionality and simplify the development process. Here are some of the most renowned C++ frameworks:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Qt:</strong> A comprehensive framework for developing cross-platform applications with a focus on graphical user interfaces (GUIs). Qt provides a wide range of tools and libraries that facilitate the creation of feature-rich applications for desktop, mobile, and embedded systems.
          <ul class="list-disc list-inside text-base md:text-lg mb-2">
            <li><strong>Features:</strong> Signal and slot mechanism for event handling, internationalization support, and a modular architecture.</li>
            <li><strong>Use Cases:</strong> Desktop applications like the KDE desktop environment, embedded systems, and mobile applications.</li>
          </ul>
        </li>
        <li>
          <strong>Boost:</strong> A collection of peer-reviewed portable C++ libraries that extend the functionality of C++. Boost libraries cover a wide range of areas, including algorithms, data structures, multithreading, and more.
          <ul class="list-disc list-inside text-base md:text-lg mb-2">
            <li><strong>Features:</strong> Highly modular, well-documented, and often serve as the testing ground for future C++ standard library features.</li>
            <li><strong>Use Cases:</strong> Enhancing C++ projects with advanced data structures, algorithms, and utility functions.</li>
          </ul>
        </li>
        <li>
          <strong>Unreal Engine:</strong> A leading game engine developed by Epic Games, renowned for its high-fidelity graphics and performance. Unreal Engine leverages C++ for scripting and game development, offering robust tools for creating AAA games.
          <ul class="list-disc list-inside text-base md:text-lg mb-2">
            <li><strong>Features:</strong> Real-time rendering, physics simulation, AI, and extensive asset management tools.</li>
            <li><strong>Use Cases:</strong> Developing high-performance video games, simulations, and virtual reality applications.</li>
          </ul>
        </li>
        <li>
          <strong>POCO C++ Libraries:</strong> A set of C++ class libraries for building network-centric, portable applications. POCO provides tools for networking, file system access, threading, and more.
          <ul class="list-disc list-inside text-base md:text-lg mb-2">
            <li><strong>Features:</strong> Simplified network programming, RESTful service development, and cross-platform support.</li>
            <li><strong>Use Cases:</strong> Developing web servers, network utilities, and cross-platform applications.</li>
          </ul>
        </li>
        <li>
          <strong>Cinder:</strong> A creative coding framework for developing interactive applications, visualizations, and graphics. Cinder is designed for artists and designers who require high-performance graphics capabilities.
          <ul class="list-disc list-inside text-base md:text-lg mb-2">
            <li><strong>Features:</strong> Real-time graphics rendering, audio processing, and input handling.</li>
            <li><strong>Use Cases:</strong> Interactive art installations, real-time visualizations, and multimedia applications.</li>
          </ul>
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        These frameworks not only enhance C++'s capabilities but also streamline the development process, allowing developers to focus on building innovative solutions without reinventing the wheel.
      </p>

      <!-- Relationship Between C++, C#, and C -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Relationship Between C++, C#, and C</h2>
      <p class="text-base md:text-lg mb-4">
        C++, C#, and C are three prominent programming languages that share a common lineage but serve different purposes and paradigms in the software development landscape.
      </p>
      <p class="text-base md:text-lg mb-6">
        C Language:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Origins:</strong> Developed in the early 1970s by Dennis Ritchie at Bell Labs.
        </li>
        <li>
          <strong>Paradigm:</strong> Procedural programming language focused on structured programming and system-level programming.
        </li>
        <li>
          <strong>Use Cases:</strong> Operating systems (e.g., UNIX), embedded systems, and system-level applications.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        C++ Language:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Origins:</strong> Created by Bjarne Stroustrup in the early 1980s as "C with Classes," later renamed to C++.
        </li>
        <li>
          <strong>Paradigm:</strong> Multi-paradigm language supporting procedural, object-oriented, and generic programming.
        </li>
        <li>
          <strong>Use Cases:</strong> System/software development, game development, real-time simulations, and performance-critical applications.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        C# Language:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Origins:</strong> Developed by Microsoft in the early 2000s as part of the .NET initiative.
        </li>
        <li>
          <strong>Paradigm:</strong> Object-oriented programming language with strong typing, garbage collection, and modern language features.
        </li>
        <li>
          <strong>Use Cases:</strong> Web and desktop applications, enterprise software, mobile applications (via Xamarin), and game development (using Unity).
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Key Differences:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Memory Management:</strong> C and C++ require manual memory management using pointers, whereas C# provides automatic garbage collection, reducing the risk of memory leaks.
        </li>
        <li>
          <strong>Platform Dependency:</strong> C and C++ are typically compiled to platform-specific binaries, while C# is primarily associated with the .NET framework, although .NET Core and .NET 5+ have improved cross-platform capabilities.
        </li>
        <li>
          <strong>Language Features:</strong> C++ offers low-level system access and supports multiple programming paradigms, while C# emphasizes simplicity, modern language features, and seamless integration with the .NET ecosystem.
        </li>
        <li>
          <strong>Use Cases:</strong> C++ is preferred for performance-critical and system-level applications, C is ideal for embedded systems and low-level programming, and C# excels in rapid application development, especially within the Microsoft ecosystem.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Is C++ Related to C# and C?
      </p>
      <p class="text-base md:text-lg mb-6">
        Yes, C++, C#, and C share a common ancestry rooted in the C programming language. C++ was developed as an extension of C, adding object-oriented features while maintaining compatibility with C code. C# was later created by Microsoft as a part of the .NET framework, drawing inspiration from both C and C++ but designed with a focus on simplicity, safety, and modern programming practices.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        C++ stands as a testament to the enduring power and flexibility of programming languages. Its evolution from C has endowed it with object-oriented capabilities, making it a versatile tool for a wide range of applications. Whether you're developing system-level software, high-performance games, or real-time simulations, C++ provides the performance and control necessary to build robust and efficient solutions.
      </p>
      <p class="text-base md:text-lg mb-6">
        By setting up a suitable development environment and mastering the fundamentals, including writing and executing basic programs, you lay the groundwork for harnessing the full potential of C++. As the software industry continues to advance, C++ remains a critical language for developers aiming to create high-performance, scalable, and reliable applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        Embrace the power of C++ in your programming journey to unlock new possibilities and tackle complex challenges with confidence and precision. Whether you're a seasoned developer or just starting, C++ offers the tools and capabilities to help you build the next generation of software solutions.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToCpp',
  data() {
    return {
      // Additional data properties can be added here if needed
    };
  },
};
</script>

<style>
pre {
  white-space: pre-wrap; 
  overflow-x: auto;       
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; 
  }
}
</style>
