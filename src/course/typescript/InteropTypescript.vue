<template>
  <div class="container mx-auto p-6">
    <!-- Header Section -->
    <header class="mb-8">
      <h1 class="text-5xl font-bold text-purple-600 mb-4">Advanced TypeScript Concepts</h1>
      <p class="text-xl text-gray-700">
        Elevate your TypeScript skills by diving deep into advanced topics. Master complex type manipulations, enhance your code with powerful features, and write more robust and maintainable applications.
      </p>
    </header>

    <!-- Table of Contents -->
    <nav class="mb-8">
      <h2 class="text-3xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-purple-500">
        <li><a href="#intersection-types" class="underline">1. Intersection Types</a></li>
        <li><a href="#union-types" class="underline">2. Union Types</a></li>
        <li><a href="#conditional-types" class="underline">3. Conditional Types</a></li>
        <li><a href="#mapped-types" class="underline">4. Mapped Types</a></li>
        <li><a href="#utility-types" class="underline">5. Utility Types</a></li>
        <li><a href="#type-guards" class="underline">6. Type Guards</a></li>
        <li><a href="#advanced-generics" class="underline">7. Advanced Generics</a></li>
        <li><a href="#decorators" class="underline">8. Decorators</a></li>
        <li><a href="#module-augmentation" class="underline">9. Module Augmentation</a></li>
        <li><a href="#declaration-merging" class="underline">10. Declaration Merging</a></li>
        <li><a href="#keyof-typeof" class="underline">11. keyof and typeof Operators</a></li>
        <li><a href="#template-literal-types" class="underline">12. Template Literal Types</a></li>
        <li><a href="#module-interop" class="underline">13. Module Interoperability</a></li>
        <li><a href="#best-practices" class="underline">14. Best Practices</a></li>
        <li><a href="#common-mistakes" class="underline">15. Common Mistakes</a></li>
        <li><a href="#summary" class="underline">16. Summary</a></li>
      </ul>
    </nav>

    <!-- Section 1: Intersection Types -->
    <section id="intersection-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">1. Intersection Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Intersection types allow you to combine multiple types into one. This is useful when you want a type that includes all properties from multiple interfaces or types.
      </p>

      <h3 class="text-2xl font-semibold mb-2">1.1. Basic Intersection</h3>
      <p class="text-lg text-gray-700 mb-4">
        By using the <code>&amp;</code> operator, you can create an intersection type that includes all properties from the involved types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ intersectionTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Admin</code> type combines both <code>User</code> and <code>Permissions</code> types, ensuring that an admin has all user properties as well as specific permissions.
      </p>
    </section>

    <!-- Sections 2 to 12: Already Included -->

    <!-- Section 13: Module Interoperability -->
    <section id="module-interop" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">13. Module Interoperability</h2>
      <p class="text-lg text-gray-700 mb-4">
        Module interoperability in TypeScript allows you to seamlessly integrate different module systems and third-party JavaScript libraries into your TypeScript projects. Understanding how to work with CommonJS, ES Modules, and type declarations is crucial for building robust and maintainable applications.
      </p>

      <!-- Subsection 13.1: CommonJS vs ES Modules -->
      <h3 class="text-2xl font-semibold mb-2">13.1. CommonJS vs ES Modules</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript supports both CommonJS and ES Module systems. Understanding the differences between these module systems is essential for proper module interoperability.
      </p>

      <h4 class="text-xl font-semibold mb-2">13.1.1. CommonJS Modules</h4>
      <p class="text-lg text-gray-700 mb-4">
        CommonJS is the module system used by Node.js. It uses <code>require</code> and <code>module.exports</code> for importing and exporting modules.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ commonJSExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The example shows how to export a module using <code>module.exports</code> and import it using <code>require</code>.
      </p>

      <h4 class="text-xl font-semibold mb-2">13.1.2. ES Modules</h4>
      <p class="text-lg text-gray-700 mb-4">
        ES Modules are the standardized module system in JavaScript, using <code>import</code> and <code>export</code> statements. They offer better static analysis and tree-shaking capabilities.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ esModuleExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The example demonstrates exporting a function using <code>export</code> and importing it using <code>import</code>.
      </p>

      <!-- Subsection 13.2: Using esModuleInterop -->
      <h3 class="text-2xl font-semibold mb-2">13.2. Using <code>esModuleInterop</code></h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>esModuleInterop</code> compiler option enables compatibility between CommonJS and ES Modules. It allows default imports from modules with no default export, making it easier to work with CommonJS modules in ES Module syntax.
      </p>
      <h4 class="text-xl font-semibold mb-2">13.2.1. tsconfig.json Configuration</h4>
      <p class="text-lg text-gray-700 mb-4">
        To enable <code>esModuleInterop</code>, update your <code>tsconfig.json</code> file as follows:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-json">{{ tsconfigExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> Setting <code>"esModuleInterop": true</code> allows for seamless default imports from CommonJS modules.
      </p>

      <!-- Subsection 13.3: Importing CommonJS Modules with ES Module Syntax -->
      <h3 class="text-2xl font-semibold mb-2">13.3. Importing CommonJS Modules with ES Module Syntax</h3>
      <p class="text-lg text-gray-700 mb-4">
        With <code>esModuleInterop</code> enabled, you can use ES Module syntax to import CommonJS modules.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ importingCommonJSExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>lodash</code> library is a CommonJS module. With <code>esModuleInterop</code> enabled, you can import it using ES Module default import syntax.
      </p>

      <!-- Subsection 13.4: Using Declaration Files (.d.ts) -->
      <h3 class="text-2xl font-semibold mb-2">13.4. Using Declaration Files (.d.ts)</h3>
      <p class="text-lg text-gray-700 mb-4">
        Declaration files provide TypeScript type definitions for JavaScript libraries, enabling type checking and IntelliSense support. They are essential for integrating third-party JavaScript libraries into TypeScript projects.
      </p>
      <h4 class="text-xl font-semibold mb-2">13.4.1. Installing Type Definitions</h4>
      <p class="text-lg text-gray-700 mb-4">
        Use the <code>@types</code> namespace to install type definitions for popular JavaScript libraries.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-shell">npm install --save-dev @types/lodash</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> Installing <code>@types/lodash</code> provides TypeScript with the necessary type definitions for the <code>lodash</code> library.
      </p>
    
      <h4 class="text-xl font-semibold mb-2">13.4.2. Creating Custom Declaration Files</h4>
      <p class="text-lg text-gray-700 mb-4">
        For JavaScript libraries without existing type definitions, you can create custom declaration files to define the necessary types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ customDeclarationFileExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The custom declaration file <code>myLibrary.d.ts</code> declares the types for a hypothetical <code>myLibrary</code> module.
      </p>
    </section>

    <!-- Sections 14 to 16: Best Practices, Common Mistakes, Summary -->

    <!-- Section 14: Best Practices -->
    <section id="best-practices" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">14. Best Practices</h2>
      <p class="text-lg text-gray-700 mb-4">
        Adhering to best practices when working with advanced TypeScript features ensures that your code remains clean, efficient, and maintainable. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Use Descriptive Type Names:</strong> Choose meaningful names for types, interfaces, and type parameters to enhance code readability.</li>
        <li><strong>Leverage Utility Types:</strong> Utilize TypeScript's built-in utility types to simplify type transformations and reduce the need for custom types.</li>
        <li><strong>Constrain Generics Appropriately:</strong> Use constraints to ensure that generics are used with compatible types, enhancing type safety.</li>
        <li><strong>Keep Types Simple:</strong> Avoid overly complex type definitions that can make the code difficult to understand and maintain.</li>
        <li><strong>Document Complex Types:</strong> Use comments and documentation to explain the purpose and usage of advanced type features.</li>
        <li><strong>Reuse Types and Interfaces:</strong> Promote type reusability by defining shared interfaces and types that can be extended or combined as needed.</li>
        <li><strong>Avoid Overusing Type Assertions:</strong> Rely on TypeScript's type inference and type guards instead of excessive type assertions to maintain type safety.</li>
        <li><strong>Test Advanced Types:</strong> Ensure that complex type definitions work as intended by writing comprehensive tests.</li>
      </ul>
    </section>

    <!-- Section 15: Common Mistakes -->
    <section id="common-mistakes" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">15. Common Mistakes</h2>
      <p class="text-lg text-gray-700 mb-4">
        Being aware of common pitfalls helps you avoid errors and write more robust TypeScript code when working with advanced features. Here are some frequent mistakes developers make:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Overcomplicating Types:</strong> Creating overly complex types can make the codebase difficult to understand and maintain.</li>
        <li><strong>Ignoring Type Inference:</strong> Relying too heavily on explicit type annotations when TypeScript can infer types can lead to unnecessary verbosity.</li>
        <li><strong>Misusing Mapped Types:</strong> Not understanding how mapped types transform existing types can result in unexpected type behaviors.</li>
        <li><strong>Incorrectly Using Conditional Types:</strong> Misapplying conditional types can lead to type mismatches and reduce type safety.</li>
        <li><strong>Neglecting Constraints:</strong> Failing to constrain generics properly can allow incompatible types, undermining type safety.</li>
        <li><strong>Overusing Module Augmentation:</strong> Excessive module augmentation can lead to code that is hard to trace and debug.</li>
        <li><strong>Not Testing Advanced Types:</strong> Skipping tests for complex type definitions can leave hidden bugs and type mismatches.</li>
        <li><strong>Ignoring Best Practices:</strong> Not following best practices can lead to inconsistent and error-prone code.</li>
      </ul>
    </section>

    <!-- Section 16: Summary -->
    <section id="summary" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">16. Summary</h2>
      <p class="text-lg text-gray-700 mb-4">
        Advanced TypeScript features empower developers to write more flexible, reusable, and type-safe code. By mastering intersection and union types, conditional and mapped types, utility types, type guards, and advanced generics, you can tackle complex type scenarios with ease.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Decorators, module augmentation, declaration merging, and template literal types further enhance TypeScript's capabilities, enabling more expressive and maintainable code structures. Adhering to best practices and being mindful of common mistakes will ensure that your advanced TypeScript code remains clean, efficient, and robust.
      </p>
      <p class="text-lg text-gray-700">
        Embrace these advanced TypeScript concepts to elevate your JavaScript development, ensuring your applications are not only powerful but also maintainable and scalable for the future.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AdvancedTypeScript',
  data() {
    return {
      // Section 1: Intersection Types
      intersectionTypeExample: `// Intersection Types Example
interface User {
  id: number;
  name: string;
}

interface Permissions {
  role: string;
  accessLevel: number;
}

type Admin = User & Permissions;

const admin: Admin = {
  id: 1,
  name: 'Alice',
  role: 'Administrator',
  accessLevel: 5
};`,

      // Section 2: Union Types
      unionTypeExample: `// Union Types Example
type Success = {
  status: 'success';
  data: any;
};

type Failure = {
  status: 'failure';
  error: string;
};

type Result = Success | Failure;

function handleResult(result: Result) {
  if (result.status === 'success') {
    console.log('Data:', result.data);
  } else {
    console.error('Error:', result.error);
  }
}

const successResult: Result = { status: 'success', data: { id: 1, name: 'Alice' } };
const failureResult: Result = { status: 'failure', error: 'Something went wrong.' };

handleResult(successResult); // Output: Data: { id: 1, name: 'Alice' }
handleResult(failureResult); // Output: Error: Something went wrong.`,

      // Section 3: Conditional Types
      conditionalTypeExample: `// Conditional Types Example
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false`,

      // Section 4: Mapped Types
      mappedTypeExample: `// Readonly Mapped Type Example
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};

// Attempting to modify a property
// user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.`,

      // Section 5: Utility Types
      partialExample: `// Partial Utility Type Example
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

function updateUser(user: PartialUser) {
  // Update logic here
}

updateUser({ name: 'Bob' }); // Valid
updateUser({ age: 30 }); // Error: Object literal may only specify known properties, and 'age' does not exist in type 'PartialUser'.`,

      pickExample: `// Pick Utility Type Example
interface User {
  id: number;
  name: string;
  email: string;
}

type UserContactInfo = Pick<User, 'name' | 'email'>;

const contactInfo: UserContactInfo = {
  name: 'Alice',
  email: 'alice@example.com'
};`,

      omitExample: `// Omit Utility Type Example
interface User {
  id: number;
  name: string;
  email: string;
}

type UserWithoutEmail = Omit<User, 'email'>;

const user: UserWithoutEmail = {
  id: 1,
  name: 'Bob'
  // email: 'bob@example.com' // Error: Property 'email' does not exist on type 'UserWithoutEmail'.
};`,

      recordExample: `// Record Utility Type Example
interface User {
  id: number;
  name: string;
}

type UserRoles = Record<number, string>;

const roles: UserRoles = {
  1: 'Administrator',
  2: 'Editor',
  3: 'Viewer'
};

console.log(roles); // Output: { '1': 'Administrator', '2': 'Editor', '3': 'Viewer' }`,

      // Section 6: Type Guards
      typeofTypeGuardExample: `// typeof Type Guard Example
function printId(id: string | number) {
  if (typeof id === 'string') {
    console.log(\`ID is a string: \${id.toUpperCase()}\`);
  } else {
    console.log(\`ID is a number: \${id}\`);
  }
}

printId('abc123'); // Output: ID is a string: ABC123
printId(456);      // Output: ID is a number: 456`,

      instanceofTypeGuardExample: `// instanceof Type Guard Example
class Car {
  move(distance: number): void {
    console.log(\`Car moved \${distance} meters.\`);
  }
}

class Truck {
  move(distance: number): void {
    console.log(\`Truck moved \${distance} meters.\`);
  }
  
  loadCargo(amount: number): void {
    console.log(\`Loaded \${amount} kg of cargo.\`);
  }
}

type Vehicle = Car | Truck;

function processVehicle(vehicle: Vehicle) {
  vehicle.move(100);
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(500);
  }
}

const myCar = new Car();
const myTruck = new Truck();

processVehicle(myCar);   // Output: Car moved 100 meters.
processVehicle(myTruck); // Output: Truck moved 100 meters.
                          // Loaded 500 kg of cargo.`,

      customTypeGuardExample: `// Custom Type Guard Example
interface User {
  name: string;
  role: string;
}

interface Admin extends User {
  adminLevel: number;
}

function isAdmin(user: User): user is Admin {
  return user.role === 'admin';
}

function displayUserInfo(user: User) {
  console.log(\`Name: \${user.name}\`);
  if (isAdmin(user)) {
    console.log(\`Admin Level: \${user.adminLevel}\`);
  }
}

const user1: User = { name: 'Alice', role: 'admin', adminLevel: 3 };
const user2: User = { name: 'Bob', role: 'user' };

displayUserInfo(user1);
// Output:
// Name: Alice
// Admin Level: 3

displayUserInfo(user2);
// Output:
// Name: Bob`,

      // Section 7: Advanced Generics
      genericConstraintsExample: `// Generic Constraints Example
interface Lengthwise {
  length: number;
}

function getProperty<T extends Lengthwise, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'Charlie', age: 25, length: 180 };

const name = getProperty(person, 'name'); // Valid
const age = getProperty(person, 'age');   // Valid
const length = getProperty(person, 'length'); // Valid
// const weight = getProperty(person, 'weight'); // Error: Argument of type '"weight"' is not assignable to parameter of type 'keyof Lengthwise'.`,

      genericInferenceExample: `// Generic Inference Example
function identity<T>(arg: T): T {
  return arg;
}

const inferredNumber = identity(100); // TypeScript infers T as number
const inferredString = identity('Generics'); // TypeScript infers T as string

console.log(inferredNumber); // Output: 100
console.log(inferredString); // Output: Generics`,

      conditionalGenericsExample: `// Conditional Types with Generics Example
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<string>; // false
type Test2 = IsArray<number[]>; // true
type Test3 = IsArray<Array<string>>; // true`,

      // Section 8: Decorators
      classDecoratorExample: `// Class Decorator Example
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
    return \`Hello, \${this.greeting}\`;
  }
}

const greeter = new Greeter('World');
console.log(greeter.greet()); // Output: Hello, World
// greeter.newProperty = 'Test'; // Error: Property 'newProperty' does not exist on type 'Greeter'.`,

      methodDecoratorExample: `// Method Decorator Example
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function(...args: any[]) {
    console.log(\`Method \${propertyKey} called with args: \${JSON.stringify(args)}\`);
    return originalMethod.apply(this, args);
  };
  
  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3)); 
// Output:
// Method add called with args: [5,3]
// 8`,

      propertyDecoratorExample: `// Property Decorator Example
function format(target: any, propertyKey: string) {
  let value: string;
  
  const getter = () => value;
  const setter = (newVal: string) => {
    value = newVal.trim();
  };
  
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class User {
  @format
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

const user = new User('  Alice  ');
console.log(user.name); // Output: "Alice"
user.name = '  Bob  ';
console.log(user.name); // Output: "Bob"`,

      // Section 9: Module Augmentation
      moduleAugmentationExample: `// Module Augmentation Example
// Assuming we are augmenting the 'express' module

// In a separate file, e.g., express-augmentation.d.ts
import * as express from 'express';

declare module 'express' {
  interface Request {
    user?: {
      id: number;
      name: string;
    };
  }
}

// Usage in application code
import express from 'express';

const app = express();

app.use((req, res, next) => {
  req.user = { id: 1, name: 'Alice' };
  next();
});

app.get('/', (req, res) => {
  if (req.user) {
    res.send(\`Hello, \${req.user.name}\`);
  } else {
    res.send('Hello, Guest');
  }
});`,

      // Section 10: Declaration Merging
      mergingInterfacesExample: `// Declaration Merging Example
interface User {
  id: number;
  name: string;
}

interface User {
  email: string;
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};

console.log(user);
// Output: { id: 1, name: 'Alice', email: 'alice@example.com' }`,

      // Section 11: keyof and typeof Operators
      keyofExample: `// keyof Operator Example
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: 'Bob', age: 25 };
const name = getProperty(person, 'name'); // Type is string
const age = getProperty(person, 'age');   // Type is number
// const height = getProperty(person, 'height'); // Error: Argument of type '"height"' is not assignable to parameter of type 'keyof Person'.`,

      typeofExample: `// typeof Operator Example
const user = {
  id: 1,
  name: 'Charlie'
};

type UserType = typeof user; // { id: number; name: string; }

function printUser(user: UserType) {
  console.log(\`ID: \${user.id}, Name: \${user.name}\`);
}

printUser(user); // Output: ID: 1, Name: Charlie`,

      // Section 12: Template Literal Types
      templateLiteralTypeExample: `// Template Literal Types Example
type Status = 'success' | 'error' | 'pending';
type StatusMessage = \`\${Status}_message\`;

const successMessage: StatusMessage = 'success_message'; // Valid
const errorMessage: StatusMessage = 'error_message';     // Valid
const pendingMessage: StatusMessage = 'pending_message'; // Valid
// const invalidMessage: StatusMessage = 'unknown_message'; // Error: Type '"unknown_message"' is not assignable to type 'StatusMessage'.`,

      // Section 13: Module Interoperability
      commonJSExample: `// CommonJS Modules Example
// Exporting a module using CommonJS
// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };

// Importing a CommonJS module using require
// app.js
const math = require('./math');

console.log(math.add(2, 3)); // Output: 5`,

      esModuleExample: `// ES Modules Example
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// Importing an ES Module
// app.ts
import { add } from './math';

console.log(add(2, 3)); // Output: 5`,

      tsconfigExample: `// tsconfig.json Configuration
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "esModuleInterop": true,
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}`,

      importingCommonJSExample: `// Importing a CommonJS Module with ES Module Syntax
// Assuming esModuleInterop is enabled in tsconfig.json

// lodash.js (CommonJS Module)
const _ = require('lodash');

module.exports = _;

// app.ts
import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5];
const reversed = _.reverse([...numbers]);

console.log(reversed); // Output: [5, 4, 3, 2, 1]`,

      customDeclarationFileExample: `// Custom Declaration File Example
// myLibrary.d.ts
declare module 'myLibrary' {
  export function greet(name: string): string;
  export const version: string;
}

// myLibrary.js (JavaScript Module)
function greet(name) {
  return \`Hello, \${name}!\`;
}

const version = '1.0.0';

module.exports = { greet, version };

// app.ts
import { greet, version } from 'myLibrary';

console.log(greet('Alice')); // Output: Hello, Alice!
console.log(version);        // Output: 1.0.0`,

    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
header h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
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
  color: #7c3aed; /* Tailwind's purple-600 */
}
a:hover {
  color: #6b21a8; /* Tailwind's purple-800 */
}
pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 1em;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
}
code {
  font-family: 'Fira Code', monospace;
}
</style>