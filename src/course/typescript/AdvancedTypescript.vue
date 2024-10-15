<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-blue-950 rounded-t-xl p-4">
      <img src="/ts/logo.svg" alt="Typescript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-200">Advanced TypeScript Features</h1>
    </div>

    <!-- Section: Decorators in TypeScript -->
    <section id="decorators" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-3xl font-semibold mb-4">Decorators in TypeScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        Decorators are a powerful feature in TypeScript that allow you to modify classes, methods, properties, and parameters at design time. They provide a way to add annotations and a meta-programming syntax for class declarations and members.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Enabling Decorators</h3>
      <p class="text-lg text-gray-700 mb-4">
        To use decorators, you need to enable the <code>experimentalDecorators</code> compiler option in your <code>tsconfig.json</code> file:
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-json" v-pre>{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Decorator Factories</h3>
      <p class="text-lg text-gray-700 mb-4">
        A decorator is a special kind of declaration that can be attached to classes, methods, properties, or parameters. Decorators are functions that return a function (known as a decorator factory).
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>// Decorator factory
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Class Decorators</h3>
      <p class="text-lg text-gray-700 mb-4">
        A class decorator is applied to the constructor of the class. It can be used to observe, modify, or replace a class definition.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>function logClass(target: Function) {
  console.log('Class:', target.name);
}

@logClass
class Person {
  constructor(public name: string) {}
}

let p = new Person('Alice');
// Output: Class: Person</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Method Decorators</h3>
      <p class="text-lg text-gray-700 mb-4">
        A method decorator is declared just before a method declaration. It can be used to observe, modify, or replace a method definition.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>function logMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method ${propertyKey} called with args:`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @logMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

let calc = new Calculator();
calc.add(2, 3);
// Output: Method add called with args: [2, 3]</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Property Decorators</h3>
      <p class="text-lg text-gray-700 mb-4">
        A property decorator is declared before a property declaration. It cannot modify the property initializer but can observe that a property has been declared.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>function logProperty(target: Object, propertyKey: string) {
  let value = target[propertyKey];

  const getter = () => {
    console.log(`Get ${propertyKey} => ${value}`);
    return value;
  };

  const setter = (newVal) => {
    console.log(`Set ${propertyKey} => ${newVal}`);
    value = newVal;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

class Person {
  @logProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let p = new Person('Bob');
p.name = 'Charlie';
// Output:
// Set name => Bob
// Set name => Charlie
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Parameter Decorators</h3>
      <p class="text-lg text-gray-700 mb-4">
        A parameter decorator is declared just before a parameter declaration. It can be used to observe that a parameter has been declared on a method.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>function logParameter(target: Object, propertyKey: string, parameterIndex: number) {
  console.log(`Parameter in method ${propertyKey} at position ${parameterIndex} has been decorated`);
}

class Greeter {
  greet(@logParameter message: string): string {
    return `Hello, ${message}`;
  }
}

let greeter = new Greeter();
greeter.greet('World');
// Output: Parameter in method greet at position 0 has been decorated</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Tip: Using Decorators Wisely</h3>
      <p class="text-lg text-gray-700 mb-4">
        Decorators can significantly enhance the functionality of your code, but they can also make it more complex. Use them judiciously and document their behavior to maintain code readability.
      </p>
    </section>

    <!-- Section: Conditional Types -->
    <section id="conditional-types" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-3xl font-semibold mb-4">Conditional Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Conditional types enable creating types that depend on a condition expressed using the <code>extends</code> keyword in a type expression. They are particularly useful for type transformations.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Basic Syntax</h3>
      <p class="text-lg text-gray-700 mb-4">
        The syntax for a conditional type is:
      </p>
      <p class="text-lg text-gray-700 mb-4">
        <code>T extends U ? X : Y</code>
      </p>
      <p class="text-lg text-gray-700 mb-4">
        If type <code>T</code> extends type <code>U</code>, then the type resolves to <code>X</code>; otherwise, it resolves to <code>Y</code>.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type IsString&lt;T&gt; = T extends string ? true : false;

type A = IsString&lt;string&gt;;  // true
type B = IsString&lt;number&gt;;  // false</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Distributive Conditional Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        When the checked type is a union, conditional types become distributive, meaning the conditional type is applied to each member of the union.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type TypeName&lt;T&gt; =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  'object';

type T0 = TypeName&lt;string&gt;;     // 'string'
type T1 = TypeName&lt;() => void&gt;; // 'function'
type T2 = TypeName&lt;string[]&gt;;  // 'object'
type T3 = TypeName&lt;string | (() => void)&gt;; // 'string' | 'function'</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Conditional Type Constraints</h3>
      <p class="text-lg text-gray-700 mb-4">
        Conditional types can be used to constrain type parameters.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

type AnimalName&lt;T extends Animal&gt; = T['name'];

let dogName: AnimalName&lt;Dog&gt; = 'Buddy';
// let numberName: AnimalName&lt;number&gt; = 'Nope'; // Error</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Tip: Avoid Overcomplicating Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        While conditional types are powerful, overusing them can make your code harder to understand. Keep your type definitions as simple as possible.
      </p>
    </section>

    <!-- Section: Mapped Types -->
    <section id="mapped-types" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-3xl font-semibold mb-4">Mapped Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Mapped types allow you to create new types by transforming each property in an existing type. They are especially useful for creating variations of existing types.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Creating Mapped Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        The basic syntax for a mapped type is:
      </p>
      <p class="text-lg text-gray-700 mb-4">
        <code>{ [P in K]: T[P] }</code>
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};

interface User {
  id: number;
  name: string;
}

let readonlyUser: Readonly&lt;User&gt; = {
  id: 1,
  name: 'Alice',
};

// readonlyUser.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Using Modifiers</h3>
      <p class="text-lg text-gray-700 mb-4">
        You can add or remove modifiers like <code>readonly</code> and <code>optional</code> (<code>?</code>) in mapped types.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type Partial&lt;T&gt; = {
  [P in keyof T]?: T[P];
};

type Required&lt;T&gt; = {
  [P in keyof T]-?: T[P];
};</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Mapping Over Unions</h3>
      <p class="text-lg text-gray-700 mb-4">
        Mapped types can be used with unions, creating types that are the union of the mappings.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type Keys = 'option1' | 'option2';

type Flags = { [K in Keys]: boolean };

let flags: Flags = {
  option1: true,
  option2: false,
};</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Tip: Combining Mapped and Conditional Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        You can create powerful type transformations by combining mapped types with conditional types.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type NullableProperties&lt;T&gt; = {
  [P in keyof T]: T[P] extends string ? string | null : T[P];
};

interface Product {
  name: string;
  price: number;
}

type NullableProduct = NullableProperties&lt;Product&gt;;

// Now, 'name' can be 'string' or 'null', 'price' remains 'number'</code></pre>
    </section>

    <!-- Section: Utility Types (Partial, Readonly, Pick, Record) -->
    <section id="utility-types" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-3xl font-semibold mb-4">Utility Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript provides several utility types to facilitate common type transformations. They are built using mapped types and conditional types.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Partial&lt;T&gt;</h3>
      <p class="text-lg text-gray-700 mb-4">
        Constructs a type with all properties of <code>T</code> set to optional.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(id: number, newUserData: Partial&lt;User&gt;) {
  // Implementation...
}</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Readonly&lt;T&gt;</h3>
      <p class="text-lg text-gray-700 mb-4">
        Constructs a type with all properties of <code>T</code> set to readonly.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>let user: Readonly&lt;User&gt; = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

// user.email = 'new@example.com'; // Error: Cannot assign to 'email' because it is a read-only property.</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Pick&lt;T, K&gt;</h3>
      <p class="text-lg text-gray-700 mb-4">
        Constructs a type by picking a set of properties <code>K</code> from <code>T</code>.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type UserPreview = Pick&lt;User, 'id' | 'name'&gt;;

let userPreview: UserPreview = {
  id: 1,
  name: 'Alice',
};</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Record&lt;K, T&gt;</h3>
      <p class="text-lg text-gray-700 mb-4">
        Constructs a type with a set of properties <code>K</code> of type <code>T</code>.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type PageInfo = {
  title: string;
};

type Page = 'home' | 'about' | 'contact';

const nav: Record&lt;Page, PageInfo&gt; = {
  home: { title: 'Home' },
  about: { title: 'About Us' },
  contact: { title: 'Contact' },
};</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Tip: Leveraging Utility Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        Utility types can simplify your type definitions and reduce repetition. Familiarize yourself with them to write more concise TypeScript code.
      </p>
    </section>

    <!-- Section: Advanced Type Inference -->
    <section id="advanced-type-inference" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-3xl font-semibold mb-4">Advanced Type Inference</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript's type inference capabilities can handle complex scenarios, reducing the need for explicit type annotations.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Inference in Generics</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript can infer type parameters in generic functions based on the arguments passed.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>function map&lt;T, U&gt;(array: T[], callback: (item: T) => U): U[] {
  return array.map(callback);
}

let numbers = [1, 2, 3];
let strings = map(numbers, (num) => num.toString());

console.log(strings); // Output: ['1', '2', '3']</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Inference with Contextual Typing</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript can infer types based on the context in which a function is used.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type Adder = (a: number, b: number) => number;

let add: Adder = (x, y) => x + y;
// x and y are inferred to be numbers</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Inference in Conditional Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript can infer types in conditional types using the <code>infer</code> keyword.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4">
<code class="language-typescript" v-pre>type ReturnType&lt;T&gt; = T extends (...args: any[]) => infer R ? R : any;

function getUser() {
  return { id: 1, name: 'Alice' };
}

type UserReturnType = ReturnType&lt;typeof getUser&gt;;
// UserReturnType is inferred as { id: number; name: string; }</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Tip: Trust the Compiler</h3>
      <p class="text-lg text-gray-700 mb-4">
        In many cases, you can rely on TypeScript's inference to determine types without explicit annotations. This can lead to cleaner and more maintainable code.
      </p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'AdvancedTypeScriptFeatures',
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