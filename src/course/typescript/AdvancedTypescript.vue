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
        <li><a href="#best-practices" class="underline">13. Best Practices</a></li>
        <li><a href="#common-mistakes" class="underline">14. Common Mistakes</a></li>
        <li><a href="#summary" class="underline">15. Summary</a></li>
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

    <!-- Section 2: Union Types -->
    <section id="union-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">2. Union Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Union types allow a variable to be one of several types. This provides flexibility while maintaining type safety.
      </p>

      <h3 class="text-2xl font-semibold mb-2">2.1. Basic Union</h3>
      <p class="text-lg text-gray-700 mb-4">
        Use the <code>|</code> operator to specify that a variable can be one of several types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ unionTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Result</code> type can be either a <code>Success</code> or a <code>Failure</code>, allowing functions to return multiple types.
      </p>
    </section>

    <!-- Section 3: Conditional Types -->
    <section id="conditional-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">3. Conditional Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Conditional types provide a way to choose one type or another based on a condition. They are powerful for creating flexible and reusable type definitions.
      </p>

      <h3 class="text-2xl font-semibold mb-2">3.1. Basic Conditional Type</h3>
      <p class="text-lg text-gray-700 mb-4">
        Conditional types use the syntax <code>T extends U ? X : Y</code>, where the type is determined based on whether <code>T</code> extends <code>U</code>.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ conditionalTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>IsString</code> type checks if a type extends <code>string</code>. If it does, it results in <code>true</code>; otherwise, <code>false</code>.
      </p>
    </section>

    <!-- Section 4: Mapped Types -->
    <section id="mapped-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">4. Mapped Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Mapped types allow you to create new types by transforming each property in an existing type. They are useful for creating variations of interfaces or types without redundant code.
      </p>

      <h3 class="text-2xl font-semibold mb-2">4.1. Readonly Mapped Type</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>Readonly</code> mapped type transforms all properties of a given type into read-only properties. This ensures that once an object is created, its properties cannot be reassigned.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ mappedTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700 mb-4">
        <strong>Explanation:</strong> The <code>ReadonlyUser</code> type is created by applying the <code>Readonly</code> mapped type to the <code>User</code> interface, making all its properties read-only.
      </p>
    </section>

    <!-- Section 5: Utility Types -->
    <section id="utility-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">5. Utility Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript provides several utility types that facilitate common type transformations. These built-in types help in manipulating types without writing custom mapped types.
      </p>

      <h3 class="text-2xl font-semibold mb-2">5.1. Partial</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>Partial</code> utility type makes all properties in a type optional. This is useful for functions that update objects where not all properties are required.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ partialExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>updateUser</code> function accepts a <code>PartialUser</code> object, allowing partial updates to the <code>User</code> interface.
      </p>

      <h3 class="text-2xl font-semibold mb-2">5.2. Pick</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>Pick</code> utility type constructs a type by picking a set of properties from an existing type.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ pickExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>UserContactInfo</code> type is created by picking only the <code>name</code> and <code>email</code> properties from the <code>User</code> interface.
      </p>

      <h3 class="text-2xl font-semibold mb-2">5.3. Omit</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>Omit</code> utility type constructs a type by excluding a set of properties from an existing type.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ omitExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>UserWithoutEmail</code> type is created by omitting the <code>email</code> property from the <code>User</code> interface.
      </p>

      <h3 class="text-2xl font-semibold mb-2">5.4. Record</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>Record</code> utility type constructs an object type whose keys are <code>K</code> and values are <code>T</code>.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ recordExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>UserRoles</code> type defines an object where the keys are user IDs and the values are their respective roles.
      </p>
    </section>

    <!-- Section 6: Type Guards -->
    <section id="type-guards" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">6. Type Guards</h2>
      <p class="text-lg text-gray-700 mb-4">
        Type guards are techniques used to determine the type of a variable within a conditional block. They enhance type safety by allowing TypeScript to infer types based on runtime checks.
      </p>

      <h3 class="text-2xl font-semibold mb-2">6.1. typeof Type Guards</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>typeof</code> operator can be used in type guards to narrow down the type of a variable to primitive types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ typeofTypeGuardExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>printId</code> function uses a <code>typeof</code> type guard to handle both <code>number</code> and <code>string</code> types appropriately.
      </p>

      <h3 class="text-2xl font-semibold mb-2">6.2. instanceof Type Guards</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>instanceof</code> operator can be used to check if an object is an instance of a specific class, enabling type narrowing based on class inheritance.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ instanceofTypeGuardExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>processVehicle</code> function uses an <code>instanceof</code> type guard to determine if the vehicle is a <code>Car</code> or a <code>Truck</code>, allowing for type-specific operations.
      </p>

      <h3 class="text-2xl font-semibold mb-2">6.3. Custom Type Guards</h3>
      <p class="text-lg text-gray-700 mb-4">
        Custom type guards are user-defined functions that return a type predicate. They provide a way to perform complex type checks beyond simple <code>typeof</code> or <code>instanceof</code> checks.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ customTypeGuardExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>isAdmin</code> function is a custom type guard that determines if a user is an admin by checking the <code>role</code> property.
      </p>
    </section>

    <!-- Section 7: Advanced Generics -->
    <section id="advanced-generics" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">7. Advanced Generics</h2>
      <p class="text-lg text-gray-700 mb-4">
        Advanced generics in TypeScript offer enhanced flexibility and type safety, enabling developers to create more sophisticated and reusable components.
      </p>

      <h3 class="text-2xl font-semibold mb-2">7.1. Generic Constraints</h3>
      <p class="text-lg text-gray-700 mb-4">
        Constraints restrict the types that can be used as type parameters, ensuring that generics are used with appropriate types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericConstraintsExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>getProperty</code> function uses a constraint to ensure that the type parameter <code>T</code> extends <code>object</code>, allowing safe access to properties.
      </p>

      <h3 class="text-2xl font-semibold mb-2">7.2. Generic Inference</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript can infer generic types based on the arguments passed to functions, reducing the need for explicit type annotations.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericInferenceExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> In the <code>identity</code> function call, TypeScript infers the type parameter <code>T</code> based on the argument provided, eliminating the need to explicitly specify the type.
      </p>

      <h3 class="text-2xl font-semibold mb-2">7.3. Conditional Types with Generics</h3>
      <p class="text-lg text-gray-700 mb-4">
        Combining conditional types with generics allows for dynamic type transformations based on type parameters.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ conditionalGenericsExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>IsArray</code> type uses a conditional type to determine if a given type extends <code>any[]</code>, resulting in <code>true</code> or <code>false</code> accordingly.
      </p>
    </section>

    <!-- Section 8: Decorators -->
    <section id="decorators" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">8. Decorators</h2>
      <p class="text-lg text-gray-700 mb-4">
        Decorators provide a way to add annotations and meta-programming syntax for class declarations and members. They enable developers to modify classes and their members dynamically, enhancing functionality without altering the original code structure.
      </p>

      <h3 class="text-2xl font-semibold mb-2">8.1. Class Decorators</h3>
      <p class="text-lg text-gray-700 mb-4">
        Class decorators are applied to class declarations and can be used to observe, modify, or replace a class definition.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ classDecoratorExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>sealed</code> decorator modifies the class by preventing new properties from being added to it.
      </p>

      <h3 class="text-2xl font-semibold mb-2">8.2. Method Decorators</h3>
      <p class="text-lg text-gray-700 mb-4">
        Method decorators are applied to methods within a class and can be used to observe, modify, or replace method definitions.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ methodDecoratorExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>log</code> decorator logs the execution of the <code>greet</code> method, providing insights into method calls.
      </p>

      <h3 class="text-2xl font-semibold mb-2">8.3. Property Decorators</h3>
      <p class="text-lg text-gray-700 mb-4">
        Property decorators are applied to properties within a class and can be used to observe, modify, or replace property definitions.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ propertyDecoratorExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>format</code> decorator modifies the property's descriptor to format the value before it's set.
      </p>
    </section>

    <!-- Section 9: Module Augmentation -->
    <section id="module-augmentation" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">9. Module Augmentation</h2>
      <p class="text-lg text-gray-700 mb-4">
        Module augmentation allows you to extend existing modules by adding new declarations. This is particularly useful when working with third-party libraries that may not expose all necessary type definitions.
      </p>

      <h3 class="text-2xl font-semibold mb-2">9.1. Extending Interfaces from External Modules</h3>
      <p class="text-lg text-gray-700 mb-4">
        You can augment modules by reopening them and adding new members to existing interfaces or types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ moduleAugmentationExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The example demonstrates how to augment the <code>express</code> module by adding a new property <code>user</code> to the <code>Request</code> interface.
      </p>
    </section>

    <!-- Section 10: Declaration Merging -->
    <section id="declaration-merging" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">10. Declaration Merging</h2>
      <p class="text-lg text-gray-700 mb-4">
        Declaration merging is a TypeScript feature that combines multiple declarations with the same name into a single definition. This allows for the extension of existing types and interfaces without modifying their original source code.
      </p>

      <h3 class="text-2xl font-semibold mb-2">10.1. Merging Interfaces</h3>
      <p class="text-lg text-gray-700 mb-4">
        When multiple interfaces with the same name are declared, TypeScript merges their properties into a single interface.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ mergingInterfacesExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>User</code> interface is declared twice, and TypeScript merges them into a single interface that includes all properties from both declarations.
      </p>
    </section>

    <!-- Section 11: keyof and typeof Operators -->
    <section id="keyof-typeof" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">11. keyof and typeof Operators</h2>
      <p class="text-lg text-gray-700 mb-4">
        The <code>keyof</code> and <code>typeof</code> operators are powerful tools in TypeScript's type system, allowing for dynamic type manipulation based on existing types and variables.
      </p>

      <h3 class="text-2xl font-semibold mb-2">11.1. keyof Operator</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>keyof</code> operator takes an object type and produces a string or numeric literal union of its keys.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ keyofExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>PersonKeys</code> type is a union of the keys of the <code>Person</code> interface, resulting in <code>'name' | 'age'</code>.
      </p>

      <h3 class="text-2xl font-semibold mb-2">11.2. typeof Operator</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>typeof</code> operator can be used to capture the type of a variable or object at compile time, enabling dynamic type referencing.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ typeofExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>userType</code> variable captures the type of the <code>user</code> object using the <code>typeof</code> operator.
      </p>
    </section>

    <!-- Section 12: Template Literal Types -->
    <section id="template-literal-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">12. Template Literal Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Template literal types allow you to create new string-like types by combining string literals with other types. They enable more expressive and flexible type definitions.
      </p>

      <h3 class="text-2xl font-semibold mb-2">12.1. Basic Template Literal Type</h3>
      <p class="text-lg text-gray-700 mb-4">
        By combining string literals with type parameters, you can create dynamic and expressive type definitions.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ templateLiteralTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>StatusMessage</code> type constructs a new string type by combining a base string with a type parameter.
      </p>
    </section>

    <!-- Section 13: Best Practices -->
    <section id="best-practices" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">13. Best Practices</h2>
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

    <!-- Section 14: Common Mistakes -->
    <section id="common-mistakes" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">14. Common Mistakes</h2>
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

    <!-- Section 15: Summary -->
    <section id="summary" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">15. Summary</h2>
      <p class="text-lg text-gray-700 mb-4">
        Advanced TypeScript features empower developers to write more flexible, reusable, and type-safe code. By mastering intersection and union types, conditional and mapped types, utility types, type guards, and advanced generics, you can tackle complex type scenarios with ease.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Decorators, module augmentation, declaration merging, and template literal types further enhance TypeScript's capabilities, enabling more expressive and maintainable code structures. Adhering to best practices and being mindful of common mistakes will ensure that your advanced TypeScript code remains clean, efficient, and robust.
      </p>
      <p class="text-lg text-gray-700">
        Embrace these advanced TypeScript concepts to elevate your JavaScript development, creating applications that are not only powerful but also maintainable and scalable for the future.
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
handleResult(failureResult); // Output: Error: Something went wrong.
`,

      // Section 3: Conditional Types
      conditionalTypeExample: `// Conditional Types Example
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
`,

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
// user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
`,

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
                          // Loaded 500 kg of cargo.
`,

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
// Name: Bob
`,

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
// const weight = getProperty(person, 'weight'); // Error: Argument of type '"weight"' is not assignable to parameter of type 'keyof Lengthwise'.
`,

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
type Test3 = IsArray<Array<string>>; // true
`,

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
// greeter.newProperty = 'Test'; // Error: Property 'newProperty' does not exist on type 'Greeter'.
`,

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
// 8
`,

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
console.log(user.name); // Output: "Bob"
`,

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
});
`,

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
// Output: { id: 1, name: 'Alice', email: 'alice@example.com' }
`,

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
// const height = getProperty(person, 'height'); // Error: Argument of type '"height"' is not assignable to parameter of type 'keyof Person'.
`,

      typeofExample: `// typeof Operator Example
const user = {
  id: 1,
  name: 'Charlie'
};

type UserType = typeof user; // { id: number; name: string; }

function printUser(user: UserType) {
  console.log(\`ID: \${user.id}, Name: \${user.name}\`);
}

printUser(user); // Output: ID: 1, Name: Charlie
`,

      // Section 12: Template Literal Types
      templateLiteralTypeExample: `// Template Literal Types Example
type Status = 'success' | 'error' | 'pending';
type StatusMessage = \`\${Status}_message\`;

const successMessage: StatusMessage = 'success_message'; // Valid
const errorMessage: StatusMessage = 'error_message';     // Valid
const pendingMessage: StatusMessage = 'pending_message'; // Valid
// const invalidMessage: StatusMessage = 'unknown_message'; // Error: Type '"unknown_message"' is not assignable to type 'StatusMessage'.
`,

      // Section 13: Best Practices
      // Already described in the template

      // Section 14: Common Mistakes
      // Already described in the template
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
