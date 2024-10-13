<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-blue-600 rounded-t-xl p-4">
      <img src="/javascript/logo.png" alt="JavaScript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">JavaScript Objects</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Objects in JavaScript are a crucial part of the language. They help organize data into key-value pairs and contain properties (data) and methods (functions) that can be accessed and modified. In this section, we’ll explore object creation, properties, methods, and advanced ES6+ features related to objects.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#creating-objects" class="text-blue-800 underline">Creating Objects</a></li>
        <li><a href="#accessing-properties" class="text-blue-800 underline">Accessing Properties</a></li>
        <li><a href="#adding-deleting-properties" class="text-blue-800 underline">Adding and Deleting Properties</a></li>
        <li><a href="#object-methods" class="text-blue-800 underline">Object Methods</a></li>
        <li><a href="#es6-features" class="text-blue-800 underline">ES6+ Object Features</a></li>
      </ul>

      <!-- Creating Objects -->
      <section id="creating-objects" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Creating Objects</h2>
        <p class="text-base md:text-lg mb-4">
          There are several ways to create objects in JavaScript, ranging from simple object literals to more advanced ES6+ classes. Here are the common techniques:
        </p>

        <!-- Object Literal Syntax -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Object Literal Syntax</h3>
        <p class="text-base md:text-lg mb-4">The simplest way to create an object:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ objectLiteralSyntax }}</code></pre>
        </div>

        <!-- new Object() Syntax -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>new Object()</code></h3>
        <p class="text-base md:text-lg mb-4">This uses the Object constructor:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ newObjectSyntax }}</code></pre>
        </div>

        <!-- Constructor Functions -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Constructor Functions</h3>
        <p class="text-base md:text-lg mb-4">Use functions to create object templates:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ constructorFunctionSyntax }}</code></pre>
        </div>

        <!-- Classes (ES6+) -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Using Classes (ES6+)</h3>
        <p class="text-base md:text-lg mb-4">ES6 introduced classes to simplify object creation:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ classSyntax }}</code></pre>
        </div>
      </section>

      <!-- Accessing Object Properties -->
      <section id="accessing-properties" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Accessing Object Properties</h2>
        <p class="text-base md:text-lg mb-4">Properties of objects can be accessed using dot notation or bracket notation:</p>

        <!-- Dot Notation -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Dot Notation</h3>
        <p class="text-base md:text-lg mb-4">The most common way to access object properties:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ dotNotationExample }}</code></pre>
        </div>

        <!-- Bracket Notation -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Bracket Notation</h3>
        <p class="text-base md:text-lg mb-4">Used when accessing properties with special characters or dynamically:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ bracketNotationExample }}</code></pre>
        </div>
      </section>

      <!-- Adding and Deleting Properties -->
      <section id="adding-deleting-properties" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Adding and Deleting Properties</h2>
        <p class="text-base md:text-lg mb-4">Object properties can be added or removed dynamically:</p>

        <!-- Adding Properties -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Adding Properties</h3>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ addingPropertiesExample }}</code></pre>
        </div>

        <!-- Deleting Properties -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Deleting Properties</h3>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ deletingPropertiesExample }}</code></pre>
        </div>
      </section>

      <!-- Object Methods -->
      <section id="object-methods" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Object Methods</h2>
        <p class="text-base md:text-lg mb-4">Objects can have methods (functions) to perform actions:</p>

        <!-- Adding Methods -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Adding Methods</h3>
        <p class="text-base md:text-lg mb-4">Methods are added by assigning functions to object properties:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ addingMethodsExample }}</code></pre>
        </div>

        <!-- The this Keyword -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>this</code> Keyword</h3>
        <p class="text-base md:text-lg mb-4">The <code>this</code> keyword refers to the current object context:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ thisKeywordExample }}</code></pre>
        </div>
      </section>

      <!-- ES6+ Object Features -->
      <section id="es6-features" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">ES6+ Object Features</h2>
        <p class="text-base md:text-lg mb-4">ES6 and later versions introduced several enhancements to objects, making them more powerful and easier to work with:</p>

        <!-- Object Destructuring -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Object Destructuring</h3>
        <p class="text-base md:text-lg mb-4">Extract values from objects with ease:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ destructuringExample }}</code></pre>
        </div>

        <!-- Property Shorthand -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Property Shorthand</h3>
        <p class="text-base md:text-lg mb-4">Shorthand syntax for property assignment:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ shorthandExample }}</code></pre>
        </div>

        <!-- Computed Property Names -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Computed Property Names</h3>
        <p class="text-base md:text-lg mb-4">Define object properties dynamically:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">{{ computedPropertiesExample }}</code></pre>
        </div>

        <!-- Spread and Rest with Objects -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Spread and Rest with Objects</h3>
        <p class="text-base md:text-lg mb-4">
          The spread operator (<code>...</code>) allows you to create a shallow copy of an object or merge multiple objects into one. The rest operator (<code>...</code>) is used to collect the remaining properties into a new object.
        </p>

        <!-- Spread Operator Syntax -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Spread Operator Syntax</h4>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const newObj = { ...obj1, ...obj2 };
          </code></pre>
        </div>

        <!-- Spread Operator Example -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Example</h4>
        <p class="text-base md:text-lg mb-4">Merging two objects using the spread operator:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { city: 'New York', occupation: 'Engineer' };
const merged = { ...obj1, ...obj2 };
console.log(merged);
// Output: { name: 'Alice', age: 25, city: 'New York', occupation: 'Engineer' }
          </code></pre>
        </div>

        <!-- Rest Operator Syntax -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Rest Operator Syntax</h4>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const { a, b, ...rest } = obj;
          </code></pre>
        </div>

        <!-- Rest Operator Example -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Example</h4>
        <p class="text-base md:text-lg mb-4">Extracting specific properties and collecting the rest:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const person = { name: 'Bob', age: 30, city: 'London', occupation: 'Designer' };
const { name, age, ...others } = person;
console.log(name);    // Output: Bob
console.log(age);     // Output: 30
console.log(others);  // Output: { city: 'London', occupation: 'Designer' }
          </code></pre>
        </div>

        <!-- Object.assign() Syntax -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Object.assign()</h3>
        <p class="text-base md:text-lg mb-4">Copies all enumerable own properties from one or more source objects to a target object.</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const target = { a: 1 };
const source = { b: 2, c: 3 };
const returnedTarget = Object.assign(target, source);
console.log(target);          // Output: { a: 1, b: 2, c: 3 }
console.log(returnedTarget);  // Output: { a: 1, b: 2, c: 3 }
          </code></pre>
        </div>

        <!-- Object.assign() Example -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Example</h4>
        <p class="text-base md:text-lg mb-4">Merging objects using <code>Object.assign()</code>:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const defaults = { logLevel: 0, outputFormat: 'html' };
const userOptions = { logLevel: 2 };
const options = Object.assign({}, defaults, userOptions);
console.log(options);  // Output: { logLevel: 2, outputFormat: 'html' }
          </code></pre>
        </div>

        <!-- Object.entries() Syntax -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Object.entries()</h3>
        <p class="text-base md:text-lg mb-4">Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const obj = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj);
console.log(entries);  // Output: [['a', 1], ['b', 2], ['c', 3]]
          </code></pre>
        </div>

        <!-- Object.entries() Example -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Example</h4>
        <p class="text-base md:text-lg mb-4">Iterating over key-value pairs using <code>Object.entries()</code>:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const person = { name: 'Charlie', age: 28, city: 'Berlin' };
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Charlie
// age: 28
// city: Berlin
          </code></pre>
        </div>

        <!-- Object.keys() Syntax -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Object.keys()</h3>
        <p class="text-base md:text-lg mb-4">Returns an array of a given object's own enumerable property names.</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys);  // Output: ['a', 'b', 'c']
          </code></pre>
        </div>

        <!-- Object.keys() Example -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Example</h4>
        <p class="text-base md:text-lg mb-4">Iterating over property names using <code>Object.keys()</code>:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const person = { name: 'Dana', age: 22, city: 'Madrid' };
Object.keys(person).forEach(function(key) {
  console.log(key + ': ' + person[key]);
});
// Output:
// name: Dana
// age: 22
// city: Madrid
          </code></pre>
        </div>

        <!-- Object.values() Syntax -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Object.values()</h3>
        <p class="text-base md:text-lg mb-4">Returns an array of a given object's own enumerable property values.</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const obj = { a: 1, b: 2, c: 3 };
const values = Object.values(obj);
console.log(values);  // Output: [1, 2, 3]
          </code></pre>
        </div>

        <!-- Object.values() Example -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Example</h4>
        <p class="text-base md:text-lg mb-4">Iterating over property values using <code>Object.values()</code>:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const person = { name: 'Eve', age: 35, city: 'Paris' };
Object.values(person).forEach(function(value) {
  console.log(value);
});
// Output:
// Eve
// 35
// Paris
          </code></pre>
        </div>

        <!-- Object.freeze() Syntax -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Object.freeze()</h3>
        <p class="text-base md:text-lg mb-4">Prevents modification of existing property attributes and values, and prevents new properties from being added.</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const obj = { a: 1, b: 2 };
Object.freeze(obj);
obj.a = 3;  // This will fail silently or throw an error in strict mode
obj.c = 4;  // This will not be added
console.log(obj);  // Output: { a: 1, b: 2 }
          </code></pre>
        </div>

        <!-- Object.freeze() Example -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Example</h4>
        <p class="text-base md:text-lg mb-4">Attempting to modify a frozen object:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const settings = { theme: 'dark', notifications: true };
Object.freeze(settings);
settings.theme = 'light';  // Fails
settings.language = 'en';  // Not added
console.log(settings);      // Output: { theme: 'dark', notifications: true }
          </code></pre>
        </div>

        <!-- Object.seal() Syntax -->
        <h3 class="text-lg md:text-xl font-semibold mb-2">Object.seal()</h3>
        <p class="text-base md:text-lg mb-4">Prevents new properties from being added and marks all existing properties as non-configurable. Values of existing properties can still be changed.</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const obj = { a: 1, b: 2 };
Object.seal(obj);
obj.a = 3;  // Allowed
obj.c = 4;  // Not added
delete obj.b;  // Not allowed
console.log(obj);  // Output: { a: 3, b: 2 }
          </code></pre>
        </div>

        <!-- Object.seal() Example -->
        <h4 class="text-md md:text-lg font-semibold mb-2">Example</h4>
        <p class="text-base md:text-lg mb-4">Sealing an object and modifying its properties:</p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
          <pre><code class="language-javascript">
const user = { name: 'Frank', age: 40 };
Object.seal(user);
user.age = 41;       // Allowed
user.gender = 'male'; // Not added
delete user.name;    // Not allowed
console.log(user);   // Output: { name: 'Frank', age: 41 }
          </code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptObjects',
  data() {
    return {
      // Creating Objects
      objectLiteralSyntax: `const person = {
  name: 'Alice',
  age: 25,
  city: 'New York'
};`,

      newObjectSyntax: `const person = new Object();
person.name = 'Bob';
person.age = 30;
person.city = 'London';`,

      constructorFunctionSyntax: `function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person1 = new Person('Charlie', 28, 'Berlin');`,

      classSyntax: `class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    return \`Hello, my name is \${this.name}!\`;
  }
}

const person1 = new Person('Dana', 22, 'Madrid');
console.log(person1.greet()); // Output: Hello, my name is Dana!`,

      // Accessing Properties
      dotNotationExample: `const person = { name: 'Eve', age: 35, city: 'Paris' };
console.log(person.name); // Output: Eve`,

      bracketNotationExample: `const person = { 'first-name': 'Frank', age: 40, city: 'Rome' };
console.log(person['first-name']); // Output: Frank`,

      // Adding and Deleting Properties
      addingPropertiesExample: `const person = { name: 'Grace', age: 27 };
person.city = 'Toronto';
console.log(person); // Output: { name: 'Grace', age: 27, city: 'Toronto' }`,

      deletingPropertiesExample: `const person = { name: 'Hank', age: 32, city: 'Chicago' };
delete person.age;
console.log(person); // Output: { name: 'Hank', city: 'Chicago' }`,

      // Object Methods
      addingMethodsExample: `const person = {
  name: 'Ivy',
  age: 29,
  greet: function() {
    return \`Hello, I'm \${this.name}\`;
  }
};

console.log(person.greet()); // Output: Hello, I'm Ivy`,

      thisKeywordExample: `const person = {
  name: 'Jack',
  age: 45,
  greet() {
    return \`Hello, my name is \${this.name} and I'm \${this.age} years old.\`;
  }
};

console.log(person.greet()); // Output: Hello, my name is Jack and I'm 45 years old.`,

      // ES6+ Object Features
      destructuringExample: `const person = { name: 'Karen', age: 31, city: 'Sydney' };
const { name, age, city } = person;
console.log(name); // Output: Karen
console.log(age);  // Output: 31
console.log(city); // Output: Sydney`,

      shorthandExample: `const name = 'Leo';
const age = 26;
const city = 'Amsterdam';

const person = { name, age, city };
console.log(person); // Output: { name: 'Leo', age: 26, city: 'Amsterdam' }`,

      computedPropertiesExample: `const propName = 'age';
const person = {
  name: 'Mia',
  [propName]: 24
};
console.log(person.age); // Output: 24`,
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