<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-yellow-500 rounded-t-xl p-4">
        <img src="/js/logo.png" alt="JavaScript Logo" class="w-12 h-12">
        <h1 class="text-2xl md:text-4xl font-bold text-black">JavaScript Arrays</h1>
      </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Arrays in JavaScript are versatile data structures that store multiple values in a single variable. They can grow dynamically and store values of different data types, such as numbers, strings, objects, and even other arrays. With the introduction of ES6, new powerful methods were added to make array manipulation easier and more functional. 
      </p>

      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#array-basics" class="text-blue-800 underline">Array Basics</a></li>
        <li><a href="#push-pop" class="text-blue-800 underline">Adding and Removing Elements: <code>push()</code> and <code>pop()</code></a></li>
        <li><a href="#shift-unshift" class="text-blue-800 underline">Adding and Removing Elements from the Beginning: <code>shift()</code> and <code>unshift()</code></a></li>
        <li><a href="#splice-slice" class="text-blue-800 underline">Modifying and Extracting: <code>splice()</code> and <code>slice()</code></a></li>
        <li><a href="#iterating-methods" class="text-blue-800 underline">Iterating Over Arrays: <code>forEach()</code>, <code>map()</code>, <code>filter()</code></a></li>
        <li><a href="#reduce-methods" class="text-blue-800 underline">Aggregating Arrays: <code>reduce()</code> and <code>reduceRight()</code></a></li>
        <li><a href="#finding-methods" class="text-blue-800 underline">Searching in Arrays: <code>find()</code>, <code>findIndex()</code>, <code>indexOf()</code>, and <code>includes()</code></a></li>
        <li><a href="#flattening-methods" class="text-blue-800 underline">Flattening Arrays: <code>flat()</code> and <code>flatMap()</code></a></li>
      </ul>

      <!-- Section 1: Array Basics -->
      <h2 id="array-basics" class="text-xl md:text-2xl font-semibold mb-4">Array Basics</h2>
      <p class="text-base md:text-lg mb-4">
        In JavaScript, arrays are a type of object used to store multiple values in a single variable. Each value in an array has a numeric index that starts at 0. Arrays can hold any data type, and can even be used to store arrays within arrays (known as multidimensional arrays).
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">const fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
</code></pre>
      </div>

      <!-- Section 2: push() and pop() -->
      <h2 id="push-pop" class="text-xl md:text-2xl font-semibold mb-4">Adding and Removing Elements: <code>push()</code> and <code>pop()</code></h2>
      <p class="text-base md:text-lg mb-4">
        The <code>push()</code> method adds one or more elements to the end of an array and returns the new length of the array. The <code>pop()</code> method removes the last element from an array and returns that element.
      </p>

      <!-- Push Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.push(element1, element2, ...);
</code></pre>
      </div>

      <!-- Push Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let fruits = ['Apple', 'Banana'];
let newLength = fruits.push('Orange', 'Mango');
console.log(fruits);      // Output: ['Apple', 'Banana', 'Orange', 'Mango']
console.log(newLength);   // Output: 4
</code></pre>
      </div>

      <!-- Pop Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.pop();
</code></pre>
      </div>

      <!-- Pop Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let fruits = ['Apple', 'Banana', 'Orange'];
let lastFruit = fruits.pop();
console.log(fruits);     // Output: ['Apple', 'Banana']
console.log(lastFruit);  // Output: 'Orange'
</code></pre>
      </div>

      <!-- Section 3: shift() and unshift() -->
      <h2 id="shift-unshift" class="text-xl md:text-2xl font-semibold mb-4">Adding and Removing Elements from the Beginning: <code>shift()</code> and <code>unshift()</code></h2>
      <p class="text-base md:text-lg mb-4">
        The <code>shift()</code> method removes the first element from an array and returns it. The <code>unshift()</code> method adds one or more elements to the beginning of an array and returns the new length of the array.
      </p>

      <!-- Shift Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.shift();
</code></pre>
      </div>

      <!-- Shift Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let fruits = ['Apple', 'Banana', 'Orange'];
let firstFruit = fruits.shift();
console.log(fruits);     // Output: ['Banana', 'Orange']
console.log(firstFruit); // Output: 'Apple'
</code></pre>
      </div>

      <!-- Unshift Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.unshift(element1, element2, ...);
</code></pre>
      </div>

      <!-- Unshift Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let fruits = ['Banana', 'Orange'];
let newLength = fruits.unshift('Apple');
console.log(fruits);     // Output: ['Apple', 'Banana', 'Orange']
console.log(newLength);  // Output: 3
</code></pre>
      </div>

<!-- Section 4: splice() and slice() -->
<h2 id="splice-slice" class="text-xl md:text-2xl font-semibold mb-4">Modifying and Extracting: <code>splice()</code> and <code>slice()</code></h2>
      <p class="text-base md:text-lg mb-4">
        The <code>splice()</code> method adds or removes items to/from an array and returns the removed item(s). It modifies the original array. The <code>slice()</code> method, on the other hand, returns a shallow copy of a portion of an array into a new array object. It does not modify the original array.
      </p>

      <!-- Splice Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Splice Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.splice(startIndex, deleteCount, item1, item2, ...);
</code></pre>
      </div>

      <!-- Splice Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
let removed = fruits.splice(1, 2, 'Grapes', 'Pineapple');
console.log(fruits);      // Output: ['Apple', 'Grapes', 'Pineapple', 'Mango']
console.log(removed);     // Output: ['Banana', 'Orange']
</code></pre>
      </div>

      <!-- Slice Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Slice Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.slice(startIndex, endIndex);
</code></pre>
      </div>

      <!-- Slice Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
let citrus = fruits.slice(1, 3);
console.log(fruits);     // Output: ['Apple', 'Banana', 'Orange', 'Mango']
console.log(citrus);     // Output: ['Banana', 'Orange']
</code></pre>
      </div>

      <!-- Section 5: Iterating Over Arrays: forEach(), map(), filter() -->
      <h2 id="iterating-methods" class="text-xl md:text-2xl font-semibold mb-4">Iterating Over Arrays: <code>forEach()</code>, <code>map()</code>, <code>filter()</code></h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript provides several methods to iterate over arrays. These methods make it easy to apply functions to each element in an array.
      </p>

      <!-- forEach Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">forEach Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.forEach(callback(element, index, array));
</code></pre>
      </div>

      <!-- forEach Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let fruits = ['Apple', 'Banana', 'Orange'];
fruits.forEach(function(item, index) {
  console.log(index + ': ' + item);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Orange
</code></pre>
      </div>

      <!-- map Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">map Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.map(callback(element, index, array));
</code></pre>
      </div>

      <!-- map Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let numbers = [1, 2, 3];
let doubled = numbers.map(function(number) {
  return number * 2;
});
console.log(doubled);  // Output: [2, 4, 6]
</code></pre>
      </div>

      <!-- filter Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">filter Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.filter(callback(element, index, array));
</code></pre>
      </div>

      <!-- filter Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});
console.log(evenNumbers);  // Output: [2, 4]
</code></pre>
      </div>

      <!-- Section 6: Aggregating Arrays: reduce() and reduceRight() -->
      <h2 id="reduce-methods" class="text-xl md:text-2xl font-semibold mb-4">Aggregating Arrays: <code>reduce()</code> and <code>reduceRight()</code></h2>
      <p class="text-base md:text-lg mb-4">
        The <code>reduce()</code> method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. The <code>reduceRight()</code> method works similarly but starts from the right-hand side.
      </p>

      <!-- reduce Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">reduce Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.reduce(callback(accumulator, element, index, array), initialValue);
</code></pre>
      </div>

      <!-- reduce Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(acc, current) {
  return acc + current;
}, 0);
console.log(sum);  // Output: 10
</code></pre>
      </div>

      <!-- reduceRight Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">reduceRight Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.reduceRight(callback(accumulator, element, index, array), initialValue);
</code></pre>
      </div>

      <!-- reduceRight Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let numbers = [1, 2, 3, 4];
let sum = numbers.reduceRight(function(acc, current) {
  return acc + current;
}, 0);
console.log(sum);  // Output: 10
</code></pre>
      </div>

<!-- Section 7: Searching in Arrays: find(), findIndex(), indexOf(), includes() -->
<h2 id="finding-methods" class="text-xl md:text-2xl font-semibold mb-4">Searching in Arrays: <code>find()</code>, <code>findIndex()</code>, <code>indexOf()</code>, and <code>includes()</code></h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript provides several methods to search through arrays and retrieve either elements or their indices based on specific conditions.
      </p>

      <!-- find() Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">find() Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.find(callback(element, index, array));
</code></pre>
      </div>

      <!-- find() Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(function(number) {
  return number % 2 === 0;
});
console.log(firstEven);  // Output: 2
</code></pre>
      </div>

      <!-- findIndex() Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">findIndex() Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.findIndex(callback(element, index, array));
</code></pre>
      </div>

      <!-- findIndex() Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let numbers = [1, 2, 3, 4, 5];
let indexOfFirstEven = numbers.findIndex(function(number) {
  return number % 2 === 0;
});
console.log(indexOfFirstEven);  // Output: 1 (index of first even number)
</code></pre>
      </div>

      <!-- indexOf() Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">indexOf() Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.indexOf(searchElement, fromIndex);
</code></pre>
      </div>

      <!-- indexOf() Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let fruits = ['Apple', 'Banana', 'Orange'];
let index = fruits.indexOf('Banana');
console.log(index);  // Output: 1
</code></pre>
      </div>

      <!-- includes() Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">includes() Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.includes(searchElement, fromIndex);
</code></pre>
      </div>

      <!-- includes() Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let fruits = ['Apple', 'Banana', 'Orange'];
let hasBanana = fruits.includes('Banana');
console.log(hasBanana);  // Output: true
</code></pre>
      </div>

      <!-- Section 8: Flattening Arrays: flat() and flatMap() -->
      <h2 id="flattening-methods" class="text-xl md:text-2xl font-semibold mb-4">Flattening Arrays: <code>flat()</code> and <code>flatMap()</code></h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript introduced the <code>flat()</code> and <code>flatMap()</code> methods in ES2019. These methods allow you to flatten arrays with nested structures, making it easier to work with deeply nested arrays.
      </p>

      <!-- flat() Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">flat() Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.flat(depth);
</code></pre>
      </div>

      <!-- flat() Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let nestedArray = [1, [2, [3, [4]]]];
let flattened = nestedArray.flat(2);
console.log(flattened);  // Output: [1, 2, 3, [4]]
</code></pre>
      </div>

      <!-- flatMap() Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">flatMap() Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">array.flatMap(callback);
</code></pre>
      </div>

      <!-- flatMap() Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">let numbers = [1, 2, 3];
let doubledAndFlattened = numbers.flatMap(n => [n, n * 2]);
console.log(doubledAndFlattened);  // Output: [1, 2, 2, 4, 3, 6]
</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Arrays are an incredibly versatile data structure in JavaScript, and with the numerous built-in methods available, you can manipulate and search through arrays in highly efficient ways. Mastering these methods will give you greater control over your data and improve the functionality of your programs.
      </p>

      <p class="text-base md:text-lg">
        Continue exploring other important concepts like objects, classes, and modules to deepen your understanding of JavaScript and modern web development.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArraysJavascript',
  data() {
    return {
      firstEvenCode: `let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(function(number) {
  return number % 2 === 0;
});
console.log(firstEven);  // Output: 2
`,
      findIndexCode: `let numbers = [1, 2, 3, 4, 5];
let indexOfFirstEven = numbers.findIndex(function(number) {
  return number % 2 === 0;
});
console.log(indexOfFirstEven);  // Output: 1
`,
      indexOfCode: `let fruits = ['Apple', 'Banana', 'Orange'];
let index = fruits.indexOf('Banana');
console.log(index);  // Output: 1
`,
      includesCode: `let fruits = ['Apple', 'Banana', 'Orange'];
let hasBanana = fruits.includes('Banana');
console.log(hasBanana);  // Output: true
`,
      flatCode: `let nestedArray = [1, [2, [3, [4]]]];
let flattened = nestedArray.flat(2);
console.log(flattened);  // Output: [1, 2, 3, [4]]
`,
      flatMapCode: `let numbers = [1, 2, 3];
let doubledAndFlattened = numbers.flatMap(n => [n, n * 2]);
console.log(doubledAndFlattened);  // Output: [1, 2, 2, 4, 3, 6]
`,
    };
  }
};
</script>

<style scoped>
  pre {
  white-space: pre-wrap; /* Ensures text wrapping for very long lines */
  overflow-x: auto;      /* Adds horizontal scroll for overflow content */ 
  }

  @media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}

  h2, p , h1, h3, h4{
    font-family: "Roboto Condensed", sans-serif;
  }

  a {
    font-family: "JetBrains Mono", sans-serif;
  }

</style>












