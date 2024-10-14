<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-blue-600 rounded-t-xl p-4">
      <img src="/python/logo.png" alt="Python Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to Python Programming</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Python is a high-level, interpreted programming language known for its clear syntax and readability. Created by <strong>Guido van Rossum</strong> and first released in 1991, Python's design philosophy emphasizes code readability, notably using significant whitespace to enhance clarity.
      </p>

      <!-- Why Learn Python -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Learn Python?</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Easy to Learn:</span> Python's straightforward syntax makes it an excellent choice for beginners.</li>
        <li><span class="font-semibold">Versatile:</span> Used in web development, data analysis, artificial intelligence, scientific computing, and more.</li>
        <li><span class="font-semibold">Community Support:</span> A large and active community provides plenty of resources and libraries.</li>
        <li><span class="font-semibold">High Demand:</span> Python developers are in high demand in the job market.</li>
      </ul>

      <!-- Python Applications -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Applications of Python</h2>
      <p class="text-base md:text-lg mb-4">
        Python can be used in various fields, including:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Web Development:</span> Using frameworks like Django and Flask.</li>
        <li><span class="font-semibold">Data Science:</span> Utilizing libraries such as Pandas, NumPy, and Matplotlib.</li>
        <li><span class="font-semibold">Machine Learning:</span> Leveraging its simplicity and libraries like TensorFlow and Scikit-learn.</li>
        <li><span class="font-semibold">Automation:</span> Writing scripts to automate repetitive tasks, including web scraping.</li>
      </ul>

      <!-- Syntax Comparison -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Python vs. Other Languages: A Simple Comparison</h2>
      <p class="text-base md:text-lg mb-4">
        Let's compare the basic syntax for printing "Hello, World!" in Python and other programming languages:
      </p>

      <!-- Code Comparison -->
      <div class="space-y-6">
        <!-- Python Code -->
        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2">Python</h3>
          <div class="bg-gray-800 text-white rounded-lg p-4">
            <pre><code class="language-python">{{ pythonCode }}</code></pre>
          </div>
        </div>

        <!-- C++ Code -->
        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2">C++</h3>
          <div class="bg-gray-800 text-white rounded-lg p-4">
            <pre><code class="language-cpp">{{ cppCode }}</code></pre>
          </div>
        </div>

        <!-- Java Code -->
        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2">Java</h3>
          <div class="bg-gray-800 text-white rounded-lg p-4">
            <pre><code class="language-java">{{ javaCode }}</code></pre>
          </div>
        </div>
      </div>

      <!-- Explanation of Comparison -->
      <p class="text-base md:text-lg my-6">
        As you can see, printing "Hello, World!" in Python is much simpler and requires fewer lines of code compared to C++ and Java. Python's simplicity allows you to focus on learning programming concepts without getting bogged down by complex syntax.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">The Simplicity of Python</h2>
      <p class="text-base md:text-lg mb-6">
        Python's clear and concise syntax makes it one of the most accessible and widely-used programming languages today. Its readability and simplicity allow developers to focus on solving problems rather than worrying about intricate language rules, making it an ideal choice for both beginners and professionals.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionToPython",

  data() {
    return {

pythonCode:
`print("Hello World")`,

cppCode:
`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!";
    return 0;
}`,

javaCode:
`class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
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

