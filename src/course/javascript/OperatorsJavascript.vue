<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-yellow-600 rounded-t-xl p-4">
      <img src="/icons/javascript.svg" alt="JavaScript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">JavaScript Operators</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Operators in JavaScript are used to perform operations on variables and values. In this guide, we will cover the most common types of operators such as arithmetic, assignment, comparison, logical, and more.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#arithmetic-operators" class="text-blue-800 underline">Arithmetic Operators</a></li>
        <li><a href="#assignment-operators" class="text-blue-800 underline">Assignment Operators</a></li>
        <li><a href="#comparison-operators" class="text-blue-800 underline">Comparison Operators</a></li>
        <li><a href="#logical-operators" class="text-blue-800 underline">Logical Operators</a></li>
        <li><a href="#bitwise-operators" class="text-blue-800 underline">Bitwise Operators</a></li>
        <li><a href="#ternary-operator" class="text-blue-800 underline">Ternary Operator</a></li>
      </ul>

      <!-- Arithmetic Operators -->
      <h2 id="arithmetic-operators" class="text-xl md:text-2xl font-semibold mb-4">Arithmetic Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Arithmetic operators are used to perform mathematical operations on numbers.
      </p>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Operator</th>
            <th class="border border-gray-300 p-2">Description</th>
            <th class="border border-gray-300 p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2"><code>+</code></td>
            <td class="border border-gray-300 p-2">Addition</td>
            <td class="border border-gray-300 p-2"><code>5 + 2 // #output 7</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>-</code></td>
            <td class="border border-gray-300 p-2">Subtraction</td>
            <td class="border border-gray-300 p-2"><code>5 - 2 // #output 3</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>*</code></td>
            <td class="border border-gray-300 p-2">Multiplication</td>
            <td class="border border-gray-300 p-2"><code>5 * 2 // #output 10</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>/</code></td>
            <td class="border border-gray-300 p-2">Division</td>
            <td class="border border-gray-300 p-2"><code>10 / 2 // #output 5</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>%</code></td>
            <td class="border border-gray-300 p-2">Modulus (Remainder)</td>
            <td class="border border-gray-300 p-2"><code>5 % 2 // #output 1</code></td>
          </tr>
        </tbody>
      </table>

      <!-- Assignment Operators -->
      <h2 id="assignment-operators" class="text-xl md:text-2xl font-semibold mb-4">Assignment Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Assignment operators assign values to variables.
      </p>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Operator</th>
            <th class="border border-gray-300 p-2">Description</th>
            <th class="border border-gray-300 p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2"><code>=</code></td>
            <td class="border border-gray-300 p-2">Assigns value</td>
            <td class="border border-gray-300 p-2"><code>x = 5</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>+=</code></td>
            <td class="border border-gray-300 p-2">Addition assignment</td>
            <td class="border border-gray-300 p-2"><code>x += 3 // #output x = x + 3</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>-=</code></td>
            <td class="border border-gray-300 p-2">Subtraction assignment</td>
            <td class="border border-gray-300 p-2"><code>x -= 2 // #output x = x - 2</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>*=</code></td>
            <td class="border border-gray-300 p-2">Multiplication assignment</td>
            <td class="border border-gray-300 p-2"><code>x *= 2 // #output x = x * 2</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>/=</code></td>
            <td class="border border-gray-300 p-2">Division assignment</td>
            <td class="border border-gray-300 p-2"><code>x /= 2 // #output x = x / 2</code></td>
          </tr>
        </tbody>
      </table>

      <!-- Comparison Operators -->
      <h2 id="comparison-operators" class="text-xl md:text-2xl font-semibold mb-4">Comparison Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Comparison operators compare two values and return a boolean result (true or false).
      </p>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Operator</th>
            <th class="border border-gray-300 p-2">Description</th>
            <th class="border border-gray-300 p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2"><code>==</code></td>
            <td class="border border-gray-300 p-2">Equal to</td>
            <td class="border border-gray-300 p-2"><code>5 == '5' // #output true</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>===</code></td>
            <td class="border border-gray-300 p-2">Strict equal to</td>
            <td class="border border-gray-300 p-2"><code>5 === '5' // #output false</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>!=</code></td>
            <td class="border border-gray-300 p-2">Not equal to</td>
            <td class="border border-gray-300 p-2"><code>5 != '5' // #output false</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>!==</code></td>
            <td class="border border-gray-300 p-2">Strict not equal to</td>
            <td class="border border-gray-300 p-2"><code>5 !== '5' // #output true</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>></code></td>
            <td class="border border-gray-300 p-2">Greater than</td>
            <td class="border border-gray-300 p-2"><code>5 > 2 // #output true</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code><</code></td>
            <td class="border border-gray-300 p-2">Less than</td>
            <td class="border border-gray-300 p-2"><code>5 < 2 // #output false</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>>=</code></td>
            <td class="border border-gray-300 p-2">Greater than or equal to</td>
            <td class="border border-gray-300 p-2"><code>5 >= 5 // #output true</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code><=</code></td>
            <td class="border border-gray-300 p-2">Less than or equal to</td>
            <td class="border border-gray-300 p-2"><code>5 <= 4 // #output false</code></td>
          </tr>
        </tbody>
      </table>

          <!-- Logical Operators -->
      <h2 id="logical-operators" class="text-xl md:text-2xl font-semibold mb-4">Logical Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Logical operators in JavaScript include <code>AND (&&)</code>, <code>OR (||)</code>, and <code>NOT (!)</code>. These operators are typically used in conditional statements to check multiple conditions or to invert a condition.
      </p>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Operator</th>
            <th class="border border-gray-300 p-2">Description</th>
            <th class="border border-gray-300 p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2"><code>&&</code></td>
            <td class="border border-gray-300 p-2">Logical AND</td>
            <td class="border border-gray-300 p-2"><code>(5 > 3) && (5 < 10) // #output true</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>||</code></td>
            <td class="border border-gray-300 p-2">Logical OR</td>
            <td class="border border-gray-300 p-2"><code>(5 < 3) || (5 < 10) // #output true</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>!</code></td>
            <td class="border border-gray-300 p-2">Logical NOT</td>
            <td class="border border-gray-300 p-2"><code>!(5 > 3) // #output false</code></td>
          </tr>
        </tbody>
      </table>

      <!-- Bitwise Operators -->
      <h2 id="bitwise-operators" class="text-xl md:text-2xl font-semibold mb-4">Bitwise Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and work directly on their binary representations.
      </p>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Operator</th>
            <th class="border border-gray-300 p-2">Description</th>
            <th class="border border-gray-300 p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2"><code>&</code></td>
            <td class="border border-gray-300 p-2">Bitwise AND</td>
            <td class="border border-gray-300 p-2"><code>5 & 1 // #output 1</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>|</code></td>
            <td class="border border-gray-300 p-2">Bitwise OR</td>
            <td class="border border-gray-300 p-2"><code>5 | 1 // #output 5</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>^</code></td>
            <td class="border border-gray-300 p-2">Bitwise XOR</td>
            <td class="border border-gray-300 p-2"><code>5 ^ 1 // #output 4</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>~</code></td>
            <td class="border border-gray-300 p-2">Bitwise NOT</td>
            <td class="border border-gray-300 p-2"><code>~5 // #output -6</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code><<</code></td>
            <td class="border border-gray-300 p-2">Left Shift</td>
            <td class="border border-gray-300 p-2"><code>5 << 1 // #output 10</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>>></code></td>
            <td class="border border-gray-300 p-2">Right Shift</td>
            <td class="border border-gray-300 p-2"><code>5 >> 1 // #output 2</code></td>
          </tr>
        </tbody>
      </table>

      <!-- Ternary Operator -->
      <h2 id="ternary-operator" class="text-xl md:text-2xl font-semibold mb-4">Ternary Operator</h2>
      <p class="text-base md:text-lg mb-4">
        The ternary operator allows you to write a simple `if-else` statement in one line. The syntax is:
      </p>
      <pre class="bg-gray-800 text-white rounded-lg p-4 mb-6">
<code class="language-javascript">condition ? expression_if_true : expression_if_false;</code></pre>
      <p class="text-base md:text-lg mb-4">
        For example:
      </p>
      <pre class="bg-gray-800 text-white rounded-lg p-4 mb-6">
<code class="language-javascript">let age = 18;
let message = (age >= 18) ? "You are an adult." : "You are a minor.";
console.log(message); // Output: "You are an adult."</code></pre>
    </div>
  </div>
</template>

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