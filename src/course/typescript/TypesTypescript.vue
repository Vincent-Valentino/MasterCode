<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-blue-950 rounded-t-xl p-4">
      <img src="/ts/logo.svg" alt="Typescript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-200">Working with Types</h1>
    </div>

    <!-- Section: Introduction to Type Inference -->
    <section id="type-inference" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Introduction to Type Inference</h2>
      <p class="text-base md:text-lg mb-6">
        Type inference is a powerful feature in TypeScript where the compiler automatically infers the type of a variable based on its initial value. This reduces the need for explicit type annotations and leads to cleaner code.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Basic Type Inference</h3>
      <p class="text-base md:text-lg mb-6">
        When you declare a variable and initialize it, TypeScript infers the type from the assigned value.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let message = 'Hello, TypeScript!'; // inferred as string
message = 'New message';
// message = 42; // Error: Type 'number' is not assignable to type 'string'
</code></pre>
      <p class="text-base md:text-lg mb-6">
        In this example, <code>message</code> is inferred to be of type <code>string</code> because it was initialized with a string. Assigning a number to it later will result in a type error.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Best Common Type</h3>
      <p class="text-base md:text-lg mb-6">
        When inferring types for more complex structures like arrays, TypeScript uses the concept of the "best common type".
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let mixedArray = [1, 'two', true]; // inferred as (string | number | boolean)[]
</code></pre>
      <p class="text-base md:text-lg mb-6">
        The array <code>mixedArray</code> contains elements of different types, so TypeScript infers the array type as <code>(string | number | boolean)[]</code>.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Contextual Typing</h3>
      <p class="text-base md:text-lg mb-6">
        TypeScript can infer types based on how variables are used, not just how they are declared.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">window.onmousedown = function (event) {
  console.log(event.button); // event is inferred as MouseEvent
};
</code></pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the type of <code>event</code> is inferred from the context of the <code>onmousedown</code> event handler.
      </p>
    </section>

    <!-- Section: Union and Intersection Types -->
    <section id="union-intersection" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xlfont-semibold mb-4">Union and Intersection Types</h2>
      <p class="text-base md:text-lg mb-6">
        Union and intersection types allow you to combine multiple types into one. They are essential for writing flexible and type-safe code.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Union Types</h3>
      <p class="text-base md:text-lg mb-6">
        A union type describes a value that can be one of several types, using the pipe (<code>|</code>) symbol.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let id: number | string;
id = 10;          // Valid
id = 'ABC123';    // Valid
// id = true;     // Error: Type 'boolean' is not assignable to type 'number | string'
</code></pre>
      <p class="text-base md:text-lg mb-6">
        Here, <code>id</code> can be either a <code>number</code> or a <code>string</code>.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Intersection Types</h3>
      <p class="text-base md:text-lg mb-6">
        An intersection type combines multiple types into one, using the ampersand (<code>&amp;</code>) symbol. The resulting type has all the properties of the intersected types.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type Staff = Person & Employee;

let staffMember: Staff = {
  name: 'John Doe',
  employeeId: 12345
};
</code></pre>
      <p class="text-base md:text-lg mb-6">
        The <code>Staff</code> type combines <code>Person</code> and <code>Employee</code>, so <code>staffMember</code> must have both <code>name</code> and <code>employeeId</code>.
      </p>
    </section>

    <!-- Section: Literal Types and Type Aliases -->
    <section id="literal-types" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xlfont-semibold mb-4">Literal Types and Type Aliases</h2>
      <p class="text-base md:text-lg mb-6">
        Literal types allow you to specify exact values a variable can hold, and type aliases let you create custom type names.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Literal Types</h3>
      <p class="text-base md:text-lg mb-6">
        A literal type is a type that represents a specific value, like a string or number literal.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let direction: 'up' | 'down' | 'left' | 'right';
direction = 'up';       // Valid
// direction = 'forward'; // Error: Type '"forward"' is not assignable
</code></pre>
      <p class="text-base md:text-lg mb-6">
        In this example, <code>direction</code> can only be one of the specified string literals.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Type Aliases</h3>
      <p class="text-base md:text-lg mb-6">
        Type aliases allow you to create a new name for an existing type. They are especially useful for complex types.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'Hello';
value = 100;
</code></pre>
      <p class="text-base md:text-lg mb-6">
        Here, <code>StringOrNumber</code> is a type alias for <code>string | number</code>.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Combining Literal Types and Type Aliases</h3>
      <p class="text-base md:text-lg mb-6">
        You can use type aliases with literal types to define more specific types.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">type CardinalDirection = 'North' | 'East' | 'South' | 'West';

function move(direction: CardinalDirection) {
  console.log(`Moving ${direction}`);
}

move('North');    // Valid
// move('Up');    // Error: Argument of type '"Up"' is not assignable
</code></pre>
    </section>

    <!-- Section: Type Guards and Type Assertions -->
    <section id="type-guards" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xlfont-semibold mb-4">Type Guards and Type Assertions</h2>
      <p class="text-base md:text-lg mb-6">
        Type guards and type assertions are techniques used to inform the TypeScript compiler about the type of a variable, allowing for safer code.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Type Guards</h3>
      <p class="text-base md:text-lg mb-6">
        Type guards are expressions that perform runtime checks to ensure a variable is of a certain type.
      </p>

      <h4 class="text-xl font-semibold mb-2">Using <code>typeof</code></h4>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(`ID in uppercase: ${id.toUpperCase()}`);
  } else {
    console.log(`ID squared: ${id * id}`);
  }
}

printId('abc'); // Output: ID in uppercase: ABC
printId(3);     // Output: ID squared: 9
</code></pre>

      <h4 class="text-xl font-semibold mb-2">Using <code>instanceof</code></h4>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Dog {
  bark() {
    console.log('Woof!');
  }
}

class Cat {
  meow() {
    console.log('Meow!');
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog()); // Output: Woof!
makeSound(new Cat()); // Output: Meow!
</code></pre>

      <h4 class="text-xl font-semibold mb-2">Custom Type Guards</h4>
      <p class="text-base md:text-lg mb-6">
        You can create custom type guard functions using <code>parameter is Type</code> syntax.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Type Assertions</h3>
      <p class="text-base md:text-lg mb-6">
        Type assertions tell the compiler to treat a variable as a specific type. They do not perform any runtime checks or restructuring of data.
      </p>

      <h4 class="text-xl font-semibold mb-2">Syntax of Type Assertions</h4>
      <p class="text-base md:text-lg mb-6">
        There are two ways to write type assertions:
      </p>
      <ul class="list-disc list-inside text-lg mb-4">
        <li>Angle-bracket syntax: <code>&lt;Type&gt;value</code></li>
        <li><code>as</code> syntax: <code>value as Type</code></li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        The <code>as</code> syntax is preferred in modern TypeScript, especially when working with JSX.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let someValue: any = 'This is a string';

let strLength: number = (someValue as string).length;
// Or using angle-bracket syntax:
// let strLength: number = (&lt;string&gt;someValue).length;
</code></pre>

      <h4 class="text-xl font-semibold mb-2">Non-Null Assertion Operator</h4>
      <p class="text-base md:text-lg mb-6">
        The non-null assertion operator (<code>!</code>) tells the compiler that a variable is not <code>null</code> or <code>undefined</code>.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">function getValue(): string | undefined {
  return 'Hello';
}

let value = getValue();
console.log(value!.toUpperCase()); // Compiler assumes value is not null or undefined
</code></pre>
      <p class="text-base md:text-lg mb-6">
        Use the non-null assertion operator cautiously, as it can lead to runtime errors if the value is actually <code>null</code> or <code>undefined</code>.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WorkingWithTypes',
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

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
