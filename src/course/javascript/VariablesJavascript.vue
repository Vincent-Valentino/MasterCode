<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-yellow-500 rounded-t-xl p-4">
        <img src="/js/logo.png" alt="JavaScript Logo" class="w-12 h-12">
        <h1 class="text-2xl md:text-4xl font-bold text-black">JavaScript Variables</h1>
      </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Variables in JavaScript allow you to store and manipulate data values in your programs. This guide will cover the basics of declaring variables, the different types of variables (such as <code>var</code>, <code>let</code>, and <code>const</code>), and the scope and best practices for variable management in JavaScript.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#declaring-variables" class="text-blue-800 underline">Declaring Variables</a></li>
        <li><a href="#variable-naming" class="text-blue-800 underline">Variable Naming Conventions</a></li>
        <li><a href="#let-vs-var-vs-const" class="text-blue-800 underline"><code>var</code> vs <code>let</code> vs <code>const</code></a></li>
        <li><a href="#variable-hoisting" class="text-blue-800 underline">Variable Hoisting</a></li>
        <li><a href="#variable-scope" class="text-blue-800 underline">Variable Scope</a></li>
        <li><a href="#best-practices" class="text-blue-800 underline">Best Practices for Variables</a></li>
      </ul>

      <!-- Declaring Variables -->
      <h2 id="declaring-variables" class="text-xl md:text-2xl font-semibold mb-4">Declaring Variables</h2>
      <p class="text-base md:text-lg mb-4">
        In JavaScript, you can declare variables using three different keywords: <code>var</code>, <code>let</code>, and <code>const</code>. Each has its own behavior in terms of scope, mutability, and best use cases.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ declareVariablesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        The key difference between these three is how they manage scope and reassignment:
      </p>

      <!-- Variable Naming Conventions -->
      <h2 id="variable-naming" class="text-xl md:text-2xl font-semibold mb-4">Variable Naming Conventions</h2>
      <p class="text-base md:text-lg mb-4">
        Variables in JavaScript follow specific naming rules. These are important for ensuring that your code is readable and functions correctly:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Variable names can include letters, digits, underscores, and dollar signs, but they cannot start with a digit.</li>
        <li>JavaScript is case-sensitive, so <code>myVar</code> and <code>myvar</code> are considered different variables.</li>
        <li>Use camelCase for naming variables, which is the most common convention in JavaScript.</li>
      </ul>

      <!-- Table: Variable Naming Best Practices -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Variable Naming Best Practices</h3>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Do</th>
            <th class="border border-gray-300 p-2">Don't</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2">Use descriptive names (e.g., <code>userName</code>, <code>totalScore</code>)</td>
            <td class="border border-gray-300 p-2">Avoid single letters (e.g., <code>x</code>, <code>y</code>)</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2">Use camelCase for variables</td>
            <td class="border border-gray-300 p-2">Avoid using reserved words (e.g., <code>var</code>, <code>function</code>)</td>
          </tr>
        </tbody>
      </table>

      <!-- var vs let vs const -->
      <h2 id="let-vs-var-vs-const" class="text-xl md:text-2xl font-semibold mb-4"><code>var</code> vs <code>let</code> vs <code>const</code></h2>
      <p class="text-base md:text-lg mb-4">
        The three main ways to declare variables in JavaScript differ in terms of scope, hoisting, and mutability. Below is a summary:
      </p>

      <!-- Table: Comparison of var, let, and const -->
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Keyword</th>
            <th class="border border-gray-300 p-2">Scope</th>
            <th class="border border-gray-300 p-2">Reassignable</th>
            <th class="border border-gray-300 p-2">Hoisted</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 p-2"><code>var</code></td>
            <td class="border border-gray-300 p-2">Function or Global</td>
            <td class="border border-gray-300 p-2">Yes</td>
            <td class="border border-gray-300 p-2">Yes</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>let</code></td>
            <td class="border border-gray-300 p-2">Block</td>
            <td class="border border-gray-300 p-2">Yes</td>
            <td class="border border-gray-300 p-2">No</td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>const</code></td>
            <td class="border border-gray-300 p-2">Block</td>
            <td class="border border-gray-300 p-2">No</td>
            <td class="border border-gray-300 p-2">No</td>
          </tr>
        </tbody>
      </table>

      <p class="text-base md:text-lg mb-4">
        Using <code>const</code> is preferred for variables that should not be reassigned, while <code>let</code> is recommended for variables whose values will change. Avoid <code>var</code> due to its function-scoped behavior, which can lead to unexpected results.
      </p>

      <!-- Variable Hoisting -->
      <h2 id="variable-hoisting" class="text-xl md:text-2xl font-semibold mb-4">Variable Hoisting</h2>
      <p class="text-base md:text-lg mb-4">
        Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. However, variables declared with <code>var</code> are initialized with <code>undefined</code>, while those declared with <code>let</code> or <code>const</code> are not initialized until their actual line of code is executed.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ hoistingExampleCode }}</code></pre>
      </div>

      <!-- Variable Scope -->
      <h2 id="variable-scope" class="text-xl md:text-2xl font-semibold mb-4">Variable Scope</h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript variables have two types of scope:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-4">
        <li><strong>Global scope:</strong> Variables declared outside any function or block are global and can be accessed from anywhere in the code.</li>
        <li><strong>Local scope:</strong> Variables declared inside a function or block are local and can only be accessed from within that block or function.</li>
      </ul>
      <p class="text-base md:text-lg mb-4">
        Here's an example demonstrating the difference between global and local scope:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ scopeExampleCode }}</code></pre>
      </div>

      <!-- Best Practices for Variables -->
      <h2 id="best-practices" class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Variables</h2>
      <p class="text-base md:text-lg mb-4">
        To ensure clean, efficient, and error-free code, it's important to follow best practices when declaring and using variables:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Use <code>const</code> for variables whose values should not change and <code>let</code> for variables that will change.</li>
        <li>Avoid using <code>var</code> due to its function-scoped behavior, which can lead to bugs.</li>
        <li>Always use descriptive names for your variables to improve code readability.</li>
        <li>Declare variables at the top of their scope to avoid hoisting-related issues.</li>
        <li>Avoid using global variables whenever possible as they can be accessed and modified anywhere in the program, which may lead to unintended side effects.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript variables are foundational to creating efficient and maintainable programs. Understanding the differences between <code>var</code>, <code>let</code>, and <code>const</code>, as well as the impact of variable scope and hoisting, is essential for writing robust JavaScript code.
      </p>
      <p class="text-base md:text-lg">
        In the next section, we will explore <strong>JavaScript Functions</strong>, a crucial aspect of writing reusable and modular code.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VariablesJavascript',
  data() {
    return {
      declareVariablesCode: `var x = 10;
let y = 20;
const z = 30;

x = 15; // valid
y = 25; // valid
// z = 35; // Error: Assignment to constant variable
`,
      hoistingExampleCode: `console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
`,
      scopeExampleCode: `let globalVar = "I'm global";

function testScope() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}

testScope();

console.log(globalVar); // Accessible
// console.log(localVar); // Error: localVar is not defined
`
    };
  }
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
