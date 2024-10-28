<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-teal-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">Basic C++ Syntax</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Welcome to Basic C++ Syntax! This course introduces the fundamental structure of C++ syntax, focusing on its unique elements that allow both high- and low-level programming. Let’s explore why C++ syntax is unique and dive into essential components for writing C++ programs.
      </p>

      <!-- Why C++ Syntax is Unique -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why C++ Syntax is Unique</h2>
      <p class="text-base md:text-lg mb-4">
        C++ syntax evolved from C, making it a language with both low-level memory control and high-level abstractions. Unlike many languages, C++ relies on <strong>semicolons</strong> (;) to mark the end of statements, making it possible to precisely control program flow. Missing one? C++ will let you know!
      </p>

      <!-- Basic Syntax Structure -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Basic Syntax Structure</h2>
      <p class="text-base md:text-lg mb-4">
        Here’s how C++ organizes its code:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Code Blocks:</strong> Defined by <code>{ }</code>, blocks are used for functions, classes, and other structures to group code.</li>
        <li><strong>The Role of Semicolons:</strong> Every statement in C++ ends with a semicolon (;), which tells the compiler that a command is complete.</li>
        <li><strong>Whitespace:</strong> C++ isn’t whitespace-sensitive, so spaces won’t affect execution, but they help make code readable.</li>
      </ul>

      <!-- Common Data Types Table -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Data Types</h2>
      <p class="text-base md:text-lg mb-4">
        C++ requires declaring variable types upfront, making it a <strong>statically-typed language</strong>. This means every variable is associated with a type, helping catch errors early and optimize performance.
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Type</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">int</td>
          <td class="border px-4 py-2">For integers.</td>
          <td class="border px-4 py-2"><code>int count = 10;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">float & double</td>
          <td class="border px-4 py-2">For decimals, where <code>double</code> offers more precision.</td>
          <td class="border px-4 py-2"><code>double price = 10.99;</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">char</td>
          <td class="border px-4 py-2">For single characters.</td>
          <td class="border px-4 py-2"><code>char initial = 'A';</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">bool</td>
          <td class="border px-4 py-2">For true/false values.</td>
          <td class="border px-4 py-2"><code>bool isOpen = true;</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">const</td>
          <td class="border px-4 py-2">Used with any type to declare constants that cannot be changed.</td>
          <td class="border px-4 py-2"><code>const int MAX = 100;</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Operators in C++ Table -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Operators in C++</h2>
      <p class="text-base md:text-lg mb-4">
        Operators in C++ allow you to perform operations on variables and values. Here’s a breakdown of key operators:
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Operator Type</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Arithmetic Operators</td>
          <td class="border px-4 py-2"><code>+ - * / %</code> for calculations.</td>
          <td class="border px-4 py-2"><code>int sum = a + b;</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Assignment Operators</td>
          <td class="border px-4 py-2"><code>=, +=, -=</code>, etc., for assignment.</td>
          <td class="border px-4 py-2"><code>x += 5;</code></td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Comparison Operators</td>
          <td class="border px-4 py-2"><code>==, !=, >, <</code> for comparisons.</td>
          <td class="border px-4 py-2"><code>x == y</code></td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Logical Operators</td>
          <td class="border px-4 py-2"><code>&&, ||</code> for logical operations.</td>
          <td class="border px-4 py-2"><code>x && y</code></td>
        </tr>
        </tbody>
      </table>

      <!-- Input and Output -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Input and Output in C++</h2>
      <p class="text-base md:text-lg mb-4">
        C++ uses <code>cin</code> and <code>cout</code> for input and output. They are part of the iostream library, enabling data display and retrieval from users.
      </p>
      <p class="text-base md:text-lg mb-4">
        For example, to output text, you can use:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Enter a number: ";
    int num;
    cin &gt;&gt; num;
    cout &lt;&lt; "You entered: " &lt;&lt; num &lt;&lt; endl;
    return 0;
}</code></pre>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        You’ve now covered the essentials of C++ syntax! By understanding C++’s syntax structure and basic elements, you’re ready to start writing structured, efficient code. In the next course, we’ll explore control flow, which includes if-statements and loops to create dynamic programs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicCppSyntax',
};
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  overflow-x: auto;
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem;
  }
}

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
