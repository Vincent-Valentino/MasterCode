<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-yellow-600 rounded-t-xl p-4">
      <img src="/icons/javascript.svg" alt="JavaScript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">JavaScript Loops</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Loops are essential constructs in JavaScript used to repeat a block of code multiple times based on a given condition. JavaScript provides several types of loops, including <code>for</code>, <code>while</code>, <code>do...while</code>, and <code>for...in</code>/<code>for...of</code>. Each loop serves a different purpose and is used in different scenarios.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#for-loop" class="text-blue-800 underline">The <code>for</code> Loop</a></li>
        <li><a href="#while-loop" class="text-blue-800 underline">The <code>while</code> Loop</a></li>
        <li><a href="#do-while-loop" class="text-blue-800 underline">The <code>do...while</code> Loop</a></li>
        <li><a href="#for-in-loop" class="text-blue-800 underline">The <code>for...in</code> Loop</a></li>
        <li><a href="#for-of-loop" class="text-blue-800 underline">The <code>for...of</code> Loop</a></li>
      </ul>

      <!-- The for Loop -->
      <h2 id="for-loop" class="text-xl md:text-2xl font-semibold mb-4">The <code>for</code> Loop</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>for</code> loop is used when the number of iterations is known beforehand. It consists of three expressions: initialization, condition, and increment/decrement. The loop executes until the condition evaluates to <code>false</code>.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ forLoopSyntax }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Looping through numbers from 1 to 5:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ forLoopExample }}</code></pre>
      </div>

      <!-- The while Loop -->
      <h2 id="while-loop" class="text-xl md:text-2xl font-semibold mb-4">The <code>while</code> Loop</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>while</code> loop executes a block of code as long as the condition is <code>true</code>. It’s useful when the number of iterations is not predetermined.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ whileLoopSyntax }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Printing numbers from 1 to 5 using <code>while</code> loop:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ whileLoopExample }}</code></pre>
      </div>

      <!-- The do...while Loop -->
      <h2 id="do-while-loop" class="text-xl md:text-2xl font-semibold mb-4">The <code>do...while</code> Loop</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>do...while</code> loop is similar to the <code>while</code> loop, except the code block is executed at least once before checking the condition.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ doWhileLoopSyntax }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Example of a <code>do...while</code> loop that prints numbers from 1 to 5:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ doWhileLoopExample }}</code></pre>
      </div>

      <!-- The for...in Loop -->
      <h2 id="for-in-loop" class="text-xl md:text-2xl font-semibold mb-4">The <code>for...in</code> Loop</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>for...in</code> loop is used to iterate over the properties of an object. It loops through all enumerable properties of the object.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ forInLoopSyntax }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Looping through the properties of an object:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ forInLoopExample }}</code></pre>
      </div>

      <!-- The for...of Loop -->
      <h2 id="for-of-loop" class="text-xl md:text-2xl font-semibold mb-4">The <code>for...of</code> Loop</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>for...of</code> loop is used to iterate over iterable objects such as arrays, strings, or sets. It works on any object that implements the iterable protocol.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ forOfLoopSyntax }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Iterating over an array using <code>for...of</code>:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ forOfLoopExample }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript provides various loops that help in iterating over data. Understanding how and when to use each type of loop allows for efficient and clean code.
      </p>
      <p class="text-base md:text-lg">
        In the next section, we will dive into <strong>JavaScript Functions</strong>, where you will learn to encapsulate logic for reuse.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptLoops',
  data() {
    return {
      forLoopSyntax: `for (initialization; condition; increment/decrement) {
  // Code to execute
}
`,
forLoopExample: `for (let i = 1; i <= 5; i++) {
  console.log(i); // Output: 1, 2, 3, 4, 5
}
`,
      whileLoopSyntax: `while (condition) {
  // Code to execute
}
`,
      whileLoopExample: `let i = 1;
while (i <= 5) {
  console.log(i); // Output: 1, 2, 3, 4, 5
  i++;
}
`,
      doWhileLoopSyntax: `do {
  // Code to execute
} while (condition);
`,
      doWhileLoopExample: `let i = 1;
do {
  console.log(i); // Output: 1, 2, 3, 4, 5
  i++;
} while (i <= 5);
`,
      forInLoopSyntax: `for (property in object) {
  // Code to execute
}
`,
      forInLoopExample: `const person = { name: 'Alice', age: 25, city: 'New York' };
for (let key in person) {
  console.log(\`\${key}: \${person[key]}\`);
  // Output:
  // name: Alice
  // age: 25
  // city: New York
}
`,
      forOfLoopSyntax: `for (variable of iterable) {
  // Code to execute
}
`,
      forOfLoopExample: `const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num); // Output: 1, 2, 3, 4, 5
}
`,
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