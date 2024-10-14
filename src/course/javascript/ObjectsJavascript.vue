<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-yellow-600 rounded-t-xl p-4">
      <img src="/icons/javascript.svg" alt="JavaScript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">JavaScript Objects</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Objects in JavaScript are fundamental structures that allow developers to store collections of data and more complex entities. Understanding how to create, manipulate, and utilize objects is crucial for effective JavaScript programming. This guide covers everything from basic object creation to advanced ES6+ features, ensuring a thorough understanding of JavaScript objects.
      </p>

      <!-- Table of Contents -->
      <!-- [Existing content remains unchanged] -->

      <!-- Creating Objects -->
      <!-- [Existing sections remain unchanged] -->

      <!-- Accessing Object Properties -->
      <!-- [Existing sections remain unchanged] -->

      <!-- Adding and Deleting Properties -->
      <section id="adding-deleting-properties" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Adding and Deleting Properties</h2>
        <p class="text-base md:text-lg mb-4">
          JavaScript objects are dynamic and allow properties to be added or removed at any time. This flexibility is powerful but requires careful management to avoid unintended side effects.
        </p>

        <!-- Adding Properties -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Adding Properties</h3>
          <p class="text-base md:text-lg mb-4">
            You can add properties to an object using dot notation or bracket notation.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="addingPropertiesExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> A new property <code>email</code> is added to the <code>person</code> object.
          </p>
        </div>

        <!-- Deleting Properties -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. Deleting Properties</h3>
          <p class="text-base md:text-lg mb-4">
            Properties can be removed from an object using the <code>delete</code> operator.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="deletingPropertiesExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>age</code> property is deleted from the <code>person</code> object.
          </p>
        </div>
      </section>

      <!-- Object Methods -->
      <section id="object-methods" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Object Methods</h2>
        <p class="text-base md:text-lg mb-4">
          Methods are functions associated with objects. They can operate on the object's properties and provide object-specific functionality.
        </p>

        <!-- Defining Methods -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Defining Methods</h3>
          <p class="text-base md:text-lg mb-4">
            Methods can be defined directly within object literals or classes.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="definingMethodsExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>greet</code> method uses the <code>this</code> keyword to access the object's <code>name</code> property.
          </p>
        </div>

        <!-- Calling Methods -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. Calling Methods</h3>
          <p class="text-base md:text-lg mb-4">
            Methods are invoked using dot notation followed by parentheses.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="callingMethodsExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>greet</code> method is called, returning a greeting message.
          </p>
        </div>
      </section>

      <!-- Advanced Object Features -->
      <section id="advanced-object-features" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Advanced Object Features</h2>
        <p class="text-base md:text-lg mb-4">
          JavaScript provides advanced features like getters and setters, computed property names, and object destructuring for more powerful object manipulation.
        </p>

        <!-- Getters and Setters -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Getters and Setters</h3>
          <p class="text-base md:text-lg mb-4">
            Getters and setters allow you to define object properties that are computed dynamically or have controlled access.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="gettersSettersExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>fullName</code> property combines <code>firstName</code> and <code>lastName</code>.
          </p>
        </div>

        <!-- Computed Property Names -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. Computed Property Names</h3>
          <p class="text-base md:text-lg mb-4">
            Computed property names allow you to use expressions as property names when creating objects.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="computedPropertyNamesExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The property name is determined by the value of <code>propName</code>.
          </p>
        </div>

        <!-- Object Destructuring -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">3. Object Destructuring</h3>
          <p class="text-base md:text-lg mb-4">
            Destructuring allows you to extract properties from objects into variables.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="objectDestructuringExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>name</code> and <code>age</code> properties are extracted from the <code>person</code> object.
          </p>
        </div>
      </section>

      <!-- Object Prototypes -->
      <section id="object-prototypes" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Object Prototypes</h2>
        <p class="text-base md:text-lg mb-4">
          Prototypes are the mechanism by which JavaScript objects inherit features from one another.
        </p>

        <!-- Prototype Inheritance -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Prototype Inheritance</h3>
          <p class="text-base md:text-lg mb-4">
            Every JavaScript object has a prototype, which is another object from which it inherits properties and methods.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="objectPrototypesExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>Person</code> function's prototype has a <code>greet</code> method that instances can access.
          </p>
        </div>
      </section>

      <!-- Object Creation Patterns -->
      <section id="object-creation-patterns" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Object Creation Patterns</h2>
        <p class="text-base md:text-lg mb-4">
          Different patterns can be used to create objects, each with its advantages and use cases.
        </p>

        <!-- Module Pattern -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Module Pattern</h3>
          <p class="text-base md:text-lg mb-4">
            The module pattern allows for the creation of private and public properties and methods.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="modulePatternExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>personModule</code> uses closures to encapsulate private data.
          </p>
        </div>
      </section>

      <!-- Practical Examples -->
      <section id="practical-examples" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Practical Examples</h2>
        <p class="text-base md:text-lg mb-4">
          Let's look at some practical uses of objects in JavaScript applications.
        </p>

        <!-- Shopping Cart Example -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Shopping Cart</h3>
          <p class="text-base md:text-lg mb-4">
            Objects can be used to represent complex data structures like a shopping cart.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript" v-html="practicalExample"></code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>cart</code> object manages items and calculates the total price.
          </p>
        </div>
      </section>

      <!-- Best Practices -->
      <!-- [Existing content remains unchanged] -->

      <!-- Common Mistakes -->
      <!-- [Existing content remains unchanged] -->

      <!-- Summary -->
      <!-- [Existing content remains unchanged] -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptObjects',
  data() {
    return {
      // Creating Objects
      // [Existing code examples remain unchanged]

      // Adding and Deleting Properties
      addingPropertiesExample: `const person = { name: 'Alice', age: 25 };
person.email = 'alice@example.com';
console.log(person.email); // Output: alice@example.com`,

      deletingPropertiesExample: `const person = { name: 'Bob', age: 30 };
delete person.age;
console.log(person.age); // Output: undefined`,

      // Object Methods
      definingMethodsExample: `const person = {
  name: 'Charlie',
  greet() {
    return \`Hello, my name is \${this.name}.\`;
  }
};`,

      callingMethodsExample: `console.log(person.greet()); // Output: Hello, my name is Charlie.`,

      // Advanced Object Features
      gettersSettersExample: `const person = {
  firstName: 'Dana',
  lastName: 'Smith',
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

console.log(person.fullName); // Output: Dana Smith
person.fullName = 'Eve Johnson';
console.log(person.firstName); // Output: Eve`,

      computedPropertyNamesExample: `const propName = 'age';
const person = {
  name: 'Frank',
  [propName]: 40
};
console.log(person.age); // Output: 40`,

      objectDestructuringExample: `const person = { name: 'Grace', age: 27, city: 'London' };
const { name, age } = person;
console.log(name); // Output: Grace
console.log(age);  // Output: 27`,

      // Object Prototypes
      objectPrototypesExample: `function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}.\`;
};

const person = new Person('Hannah');
console.log(person.greet()); // Output: Hi, I'm Hannah.`,

      // Object Creation Patterns
      modulePatternExample: `const personModule = (function() {
  let name = 'Ian';

  function getName() {
    return name;
  }

  function setName(newName) {
    name = newName;
  }

  return {
    getName,
    setName
  };
})();

console.log(personModule.getName()); // Output: Ian
personModule.setName('Jack');
console.log(personModule.getName()); // Output: Jack`,

      // Practical Examples
      practicalExample: `const cart = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
};

cart.addItem({ name: 'Apple', price: 1.5 });
cart.addItem({ name: 'Banana', price: 2.0 });
console.log(cart.getTotalPrice()); // Output: 3.5`,
    };
  },
};
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  overflow-x: auto;
}

@media (max-width: 768px) {
  code {
    font-size: 0.6rem;
  }
}
</style>
