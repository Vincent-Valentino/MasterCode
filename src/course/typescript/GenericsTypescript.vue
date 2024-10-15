<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-blue-950 rounded-t-xl p-4">
      <img src="/ts/logo.svg" alt="Typescript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-200">TypeScript Generics</h1>
    </div>

    <!-- Section: Introduction to Generics -->
    <section id="introduction-generics" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Introduction to Generics</h2>
      <p class="text-base md:text-lg mb-6">
        Generics in TypeScript provide a way to create reusable components that work with a variety of types rather than a single one. They enable you to define functions, classes, and interfaces that can operate over different types while still maintaining type safety.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Why Use Generics?</h3>
      <p class="text-base md:text-lg mb-6">
        Generics allow you to create more flexible and reusable code. For example, you might have a function that works on an array of any type, or a class that can handle data of different types without sacrificing type checking.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">// Without Generics
function identity(arg: any): any {
  return arg;
}

// With Generics
function identity&lt;T&gt;(arg: T): T {
  return arg;
}</code></pre>

      <p class="text-base md:text-lg mb-6">
        In the example above, the generic version of the <code>identity</code> function preserves the type of the argument, providing better type safety compared to the version using <code>any</code>.
      </p>
    </section>

    <!-- Section: Generic Functions -->
    <section id="generic-functions" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Generic Functions</h2>
      <p class="text-base md:text-lg mb-6">
        A generic function allows you to specify a type parameter, which can be used within the function to maintain type information.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Defining Generic Functions</h3>
      <p class="text-base md:text-lg mb-6">
        Generic functions are defined using angle brackets (<code>&lt;&gt;</code>) to specify type parameters.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">function identity&lt;T&gt;(arg: T): T {
  return arg;
}

let output1 = identity&lt;string&gt;('Hello TypeScript');
console.log(output1); // Output: Hello TypeScript

let output2 = identity(100);
console.log(output2); // Output: 100 (TypeScript infers T as number)</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Working with Generic Types</h3>
      <p class="text-base md:text-lg mb-6">
        You can use generics with more complex types, such as arrays.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">function loggingIdentity&lt;T&gt;(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

loggingIdentity([1, 2, 3]); // Output: 3</code></pre>

      <p class="text-base md:text-lg mb-6">
        In this example, <code>T[]</code> represents an array of type <code>T</code>. The function logs the length of the array and returns it.
      </p>
    </section>

    <!-- Section: Generic Classes and Interfaces -->
    <section id="generic-classes-interfaces" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Generic Classes and Interfaces</h2>
      <p class="text-base md:text-lg mb-6">
        Generics can be applied to classes and interfaces, allowing them to handle various types while maintaining type safety.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Generic Classes</h3>
      <p class="text-base md:text-lg mb-6">
        A generic class has a generic type parameter that applies to all of its methods and properties.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class GenericNumber&lt;T&gt; {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber&lt;number&gt;();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

console.log(myGenericNumber.add(5, 10)); // Output: 15</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Generic Interfaces</h3>
      <p class="text-base md:text-lg mb-6">
        Interfaces can also be generic, allowing you to define flexible contracts for functions and classes.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">interface KeyValuePair&lt;K, V&gt; {
  key: K;
  value: V;
}

let kvp: KeyValuePair&lt;string, number&gt; = { key: 'age', value: 30 };
console.log(kvp); // Output: { key: 'age', value: 30 }</code></pre>

      <p class="text-base md:text-lg mb-6">
        Here, <code>KeyValuePair</code> is a generic interface with two type parameters, <code>K</code> and <code>V</code>, representing the types of the key and value.
      </p>
    </section>

    <!-- Section: Constraints on Generics -->
    <section id="constraints-generics" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Constraints on Generics</h2>
      <p class="text-base md:text-lg mb-6">
        Sometimes, you want to limit the types that can be used with your generics. Constraints allow you to enforce that a type parameter must have certain properties.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Using Constraints</h3>
      <p class="text-base md:text-lg mb-6">
        You can use the <code>extends</code> keyword to specify a constraint on a generic type parameter.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">interface Lengthwise {
  length: number;
}

function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity('Hello');          // Output: 5
loggingIdentity([1, 2, 3]);        // Output: 3
// loggingIdentity(10);            // Error: Type 'number' does not satisfy the constraint 'Lengthwise'</code></pre>

      <p class="text-base md:text-lg mb-6">
        In this example, <code>T</code> is constrained to types that have a <code>length</code> property. Passing a number results in an error since it doesn't satisfy the constraint.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Using Type Parameters in Generic Constraints</h3>
      <p class="text-base md:text-lg mb-6">
        You can use one type parameter to constrain another.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K) {
  return obj[key];
}

let person = { name: 'Alice', age: 25 };
let name = getProperty(person, 'name'); // Valid
// let unknown = getProperty(person, 'unknown'); // Error: Argument of type '"unknown"' is not assignable</code></pre>

      <p class="text-base md:text-lg mb-6">
        Here, <code>K</code> is constrained to the keys of <code>T</code>, ensuring that only valid property names can be used.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Using Class Types in Generics</h3>
      <p class="text-base md:text-lg mb-6">
        You can create factory functions that use generics with class types.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">function create&lt;T&gt;(c: { new (): T }): T {
  return new c();
}

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = 'ZooKeeper';
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance&lt;A extends Animal&gt;(c: new () => A): A {
  return new c();
}

let lion = createInstance(Lion);
console.log(lion.keeper.nametag); // Output: ZooKeeper

let bee = createInstance(Bee);
console.log(bee.keeper.hasMask);  // Output: true</code></pre>

      <p class="text-base md:text-lg mb-6">
        In this example, the <code>createInstance</code> function uses a generic type parameter constrained to <code>Animal</code> or its subclasses, allowing you to create instances of specific animal types.
      </p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'TypeScriptGenerics',
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
header h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
}
th, td {
  padding: 12px;
  text-align: left;
}
th {
  background-color: #f0f4f8;
}
tr:nth-child(even) {
  background-color: #f9fafb;
}
a {
  color: #2563eb; /* Tailwind's blue-600 */
}
a:hover {
  color: #1e40af; /* Tailwind's blue-800 */
}

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
