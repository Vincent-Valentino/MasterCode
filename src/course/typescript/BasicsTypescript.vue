<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-blue-950 rounded-t-xl p-4">
      <img src="/ts/logo.svg" alt="Typescript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-200">TypeScript Basics</h1>
    </div>

    <!-- Section: Type Annotations and Variables -->
    <section id="type-annotations" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Type Annotations and Variables</h2>
      <p class="text-base md:text-lg mb-4">
        TypeScript extends JavaScript by adding types, allowing you to catch errors early and make your code more robust. Type annotations explicitly specify the types of variables, function parameters, and object properties.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Declaring Variables with Types</h3>
      <p class="text-base md:text-lg mb-4">
        You can declare variables using <code>let</code>, <code>const</code>, or <code>var</code> and specify their types using a colon (<code>:</code>) followed by the type.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let count: number = 42;
const name: string = 'Alice';
var isActive: boolean = true;
</code></pre>
      <p class="text-base md:text-lg mb-4">
        In the example above, we explicitly specify that <code>count</code> is a number, <code>name</code> is a string, and <code>isActive</code> is a boolean.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Type Inference</h3>
      <p class="text-base md:text-lg mb-4">
        TypeScript can often infer the type of a variable based on its value, so you may omit the type annotation if the variable is initialized when it is declared.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let score = 100; // inferred as number
const greeting = 'Hello, World!'; // inferred as string
</code></pre>
      <p class="text-base md:text-lg mb-4">
        However, when the type cannot be inferred or when you want to be explicit, you should use type annotations.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Any Type</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>any</code> type is a fallback that disables type checking for a variable. It is useful when you are migrating code or dealing with dynamic content but should be used sparingly.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let data: any;
data = 10;
data = 'A string';
data = true;
</code></pre>
      <p class="text-base md:text-lg mb-4">
        In this example, <code>data</code> can be assigned a value of any type.
      </p>
    </section>

    <!-- Section: Working with Basic Types (string, number, boolean) -->
    <section id="basic-types" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xl mb-4">Working with Basic Types</h2>
      <p class="text-base md:text-lg mb-4">
        TypeScript provides several basic types that correspond to JavaScript primitives.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Number</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>number</code> type represents all numbers, including integers and floating-point numbers.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let integer: number = 6;
let float: number = 3.14;
let hex: number = 0xf00d; // hexadecimal
let binary: number = 0b1010; // binary
let octal: number = 0o744; // octal
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">String</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>string</code> type represents textual data.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let single: string = 'Single quotes';
let double: string = "Double quotes";
let template: string = `Template literals with interpolation: ${single}`;
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Boolean</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>boolean</code> type represents logical true or false values.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let isDone: boolean = false;
let isOpen: boolean = true;
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Null and Undefined</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>null</code> and <code>undefined</code> types are subtypes of all other types, meaning you can assign <code>null</code> or <code>undefined</code> to variables of any type.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let u: undefined = undefined;
let n: null = null;

let num: number = null; // Allowed if strictNullChecks is false
</code></pre>
      <p class="text-base md:text-lg mb-4">
        Note: With <code>strictNullChecks</code> enabled in your TypeScript configuration, <code>null</code> and <code>undefined</code> are only assignable to <code>any</code>, <code>null</code>, and <code>undefined</code>.
      </p>
    </section>

    <!-- Section: Arrays and Tuples -->
    <section id="arrays-tuples" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xl mb-4">Arrays and Tuples</h2>
      <p class="text-base md:text-lg mb-4">
        TypeScript provides special types to work with arrays and tuples, allowing you to define the types of the elements they contain.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Arrays</h3>
      <p class="text-base md:text-lg mb-4">
        An array type can be specified using two methods:
      </p>
      <ol class="list-decimal list-inside text-lg mb-4">
        <li>Using the type followed by square brackets: <code>number[]</code></li>
        <li>Using a generic array type: <code>Array&lt;number&gt;</code></li>
      </ol>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let list1: number[] = [1, 2, 3];
let list2: Array&lt;number&gt; = [4, 5, 6];
</code></pre>
      <p class="text-base md:text-lg mb-4">
        Both <code>list1</code> and <code>list2</code> are arrays of numbers. The second method uses a generic array type, which is especially useful when dealing with complex types.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Multidimensional Arrays</h3>
      <p class="text-base md:text-lg mb-4">
        You can create multidimensional arrays by specifying arrays of arrays.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let matrix: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6]
];
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Tuples</h3>
      <p class="text-base md:text-lg mb-4">
        Tuples allow you to express an array with a fixed number of elements whose types are known.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let tuple: [string, number];
tuple = ['Age', 30]; // Correct
// tuple = [30, 'Age']; // Error: Type 'number' is not assignable to type 'string'
</code></pre>
      <p class="text-base md:text-lg mb-4">
        You can access tuple elements by index and also use array methods.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">console.log(tuple[0]); // Output: 'Age'
console.log(tuple[1]); // Output: 30
tuple.push(100); // Allowed, but be cautious
</code></pre>
      <p class="text-base md:text-lg mb-4">
        Note: Pushing elements to a tuple can bypass type safety, so it's generally not recommended.
      </p>
    </section>

    <!-- Section: Enum Types -->
    <section id="enums" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xl mb-4">Enum Types</h2>
      <p class="text-base md:text-lg mb-4">
        Enums allow you to define a set of named constants, making it easier to document intent or create a set of distinct cases.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Numeric Enums</h3>
      <p class="text-base md:text-lg mb-4">
        By default, enums are numeric, and members are auto-incremented from 0.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
</code></pre>
      <p class="text-base md:text-lg mb-4">
        You can also assign custom numeric values.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">enum Response {
  No = 0,
  Yes = 1
}

console.log(Response.Yes); // Output: 1
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">String Enums</h3>
      <p class="text-base md:text-lg mb-4">
        String enums allow you to assign string values to enum members.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}

let c: Color = Color.Green;
console.log(c); // Output: 'GREEN'
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Heterogeneous Enums</h3>
      <p class="text-base md:text-lg mb-4">
        Enums can contain both string and numeric members, but it's not recommended due to potential confusion.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">enum Mixed {
  Yes = 1,
  No = 'NO'
}

console.log(Mixed.Yes); // Output: 1
console.log(Mixed.No); // Output: 'NO'
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Using Enums</h3>
      <p class="text-base md:text-lg mb-4">
        Enums are useful for defining a set of possible values. They can be used in function parameters, return types, and variables.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">function respond(recipient: string, message: Response): void {
  if (message === Response.Yes) {
    console.log(`${recipient} accepted.`);
  } else {
    console.log(`${recipient} declined.`);
  }
}

respond('Alice', Response.Yes); // Output: 'Alice accepted.'
</code></pre>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TypeScriptBasics',
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
