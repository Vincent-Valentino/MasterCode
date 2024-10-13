<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-yellow-600 rounded-t-xl p-4">
      <img src="/icons/javascript.svg" alt="JavaScript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">JavaScript Functions: A Complete Guide</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Functions are one of the fundamental building blocks in JavaScript. They allow you to group a set of statements together, which can be executed by calling the function name. This guide will walk you through the basics of functions, advanced topics like closures, and best practices for writing clean and reusable code.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#function-basics" class="text-blue-800 underline">Function Basics</a></li>
        <li><a href="#function-expressions" class="text-blue-800 underline">Function Expressions</a></li>
        <li><a href="#arrow-functions" class="text-blue-800 underline">Arrow Functions</a></li>
        <li><a href="#function-parameters" class="text-blue-800 underline">Function Parameters and Arguments</a></li>
        <li><a href="#return-statements" class="text-blue-800 underline">Return Statements</a></li>
        <li><a href="#higher-order-functions" class="text-blue-800 underline">Higher-Order Functions</a></li>
        <li><a href="#callbacks" class="text-blue-800 underline">Callbacks</a></li>
        <li><a href="#closures" class="text-blue-800 underline">Closures</a></li>
        <li><a href="#iife" class="text-blue-800 underline">IIFE (Immediately Invoked Function Expressions)</a></li>
        <li><a href="#best-practices" class="text-blue-800 underline">Best Practices for Functions</a></li>
      </ul>

      <!-- Function Basics -->
      <h2 id="function-basics" class="text-xl md:text-2xl font-semibold mb-4">Function Basics</h2>
      <p class="text-base md:text-lg mb-4">
        In JavaScript, a function is defined using the <code>function</code> keyword. It can contain parameters, perform operations, and optionally return a value. Here's the basic syntax:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ functionBasicsCode }}</code></pre>
      </div>

      <p class="text-base md:text-lg mb-4">
        In this example, we define a function named <code>greet</code> that takes a parameter <code>name</code>. When called, it logs a greeting message to the console.
      </p>

      <!-- Function Expressions -->
      <h2 id="function-expressions" class="text-xl md:text-2xl font-semibold mb-4">Function Expressions</h2>
      <p class="text-base md:text-lg mb-4">
        Functions can also be defined as expressions and assigned to variables. These are known as function expressions. Unlike function declarations, function expressions are not hoisted.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ functionExpressionCode }}</code></pre>
      </div>

      <!-- Arrow Functions -->
      <h2 id="arrow-functions" class="text-xl md:text-2xl font-semibold mb-4">Arrow Functions</h2>
      <p class="text-base md:text-lg mb-4">
        ES6 introduced arrow functions, which provide a more concise syntax for writing functions. Arrow functions do not have their own <code>this</code> context, which makes them particularly useful in certain cases like callbacks or within class methods.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ arrowFunctionCode }}</code></pre>
      </div>

      <!-- Function Parameters and Arguments -->
      <h2 id="function-parameters" class="text-xl md:text-2xl font-semibold mb-4">Function Parameters and Arguments</h2>
      <p class="text-base md:text-lg mb-4">
        Functions can accept parameters (inputs) and use them inside their block. When you call a function, you pass arguments corresponding to the parameters.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ functionParametersCode }}</code></pre>
      </div>

      <!-- Return Statements -->
      <h2 id="return-statements" class="text-xl md:text-2xl font-semibold mb-4">Return Statements</h2>
      <p class="text-base md:text-lg mb-4">
        Functions can return a value using the <code>return</code> statement. If no return statement is provided, the function will return <code>undefined</code> by default.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ returnStatementCode }}</code></pre>
      </div>

      <!-- Higher-Order Functions -->
      <h2 id="higher-order-functions" class="text-xl md:text-2xl font-semibold mb-4">Higher-Order Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Higher-order functions are functions that either take other functions as arguments or return a function. They are a key concept in functional programming.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ higherOrderFunctionCode }}</code></pre>
      </div>

      <!-- Callbacks -->
      <h2 id="callbacks" class="text-xl md:text-2xl font-semibold mb-4">Callbacks</h2>
      <p class="text-base md:text-lg mb-4">
        A callback is a function passed into another function as an argument. Callbacks are often used to handle asynchronous operations such as API calls or event handling.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ callbackFunctionCode }}</code></pre>
      </div>

      <!-- Closures -->
      <h2 id="closures" class="text-xl md:text-2xl font-semibold mb-4">Closures</h2>
      <p class="text-base md:text-lg mb-4">
        A closure is a function that has access to the parent scope, even after the parent function has closed. Closures are useful for creating private variables or maintaining state.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ closureExampleCode }}</code></pre>
      </div>

      <!-- IIFE (Immediately Invoked Function Expressions) -->
      <h2 id="iife" class="text-xl md:text-2xl font-semibold mb-4">IIFE (Immediately Invoked Function Expressions)</h2>
      <p class="text-base md:text-lg mb-4">
        An IIFE is a function that runs as soon as it is defined. It is commonly used to avoid polluting the global scope or to initialize code immediately.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ iifeCode }}</code></pre>
      </div>

      <!-- Best Practices for Functions -->
      <h2 id="best-practices" class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Writing clean, reusable functions is key to maintaining scalable JavaScript code. Here are some best practices to follow when working with functions:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ functionBestPracticesCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptFunctions',
  data() {
    return {
      functionBasicsCode: `
function greet(name) {
  console.log('Hello, ' + name + '!');
}
// Calling the function
greet('Alice');  // Output: Hello, Alice!
`,
      functionExpressionCode: `
const greet = function(name) {
  console.log('Hello, ' + name + '!');
};
greet('Bob');  // Output: Hello, Bob!
`,
      arrowFunctionCode: `
const greet = (name) => {
  console.log('Hello, ' + name + '!');
};
greet('Charlie');  // Output: Hello, Charlie!
`,

      functionParametersCode: `
function add(a, b) {
  return a + b;
}
const sum = add(3, 4);
console.log(sum);  // Output: 7
`,

      returnStatementCode: `
function multiply(a, b) {
  return a * b;
}
const result = multiply(5, 10);
console.log(result);  // Output: 50
`,

      higherOrderFunctionCode: `
function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}
const greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));  // Output: true
`,

      callbackFunctionCode: `
function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched!');
  }, 1000);
}
fetchData((data) => {
  console.log(data);  // Output: Data fetched!
});
`,

      closureExampleCode: `
function outer() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}
const increment = outer();
console.log(increment());  // Output: 1
console.log(increment());  // Output: 2
`,
      iifeCode: `
(function() {
  console.log('IIFE invoked immediately!');
})();
`,

      functionBestPracticesCode: `
1. Use descriptive function names:
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

2. Avoid using global variables:
function incrementCounter(counter) {
  return counter + 1;
}

3. Use default parameters when necessary:
function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}
greet();  // Output: Hello, Guest

4. Use arrow functions where applicable, especially for callbacks and concise functions:
const square = (x) => x * x;
console.log(square(4));  // Output: 16

5. Keep functions small and focused:
function processOrder(order) {
  validateOrder(order);
  processPayment(order);
  shipOrder(order);
}

6. Use early returns to avoid deep nesting:
function checkUser(user) {
  if (!user) {
    return 'No user found!';
  }
  return 'User found!';
}
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