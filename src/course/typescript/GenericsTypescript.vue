<template>
  <div class="container mx-auto p-6">
    <!-- Previous Sections (1-18) -->

    <!-- Section 19: TypeScript Generics -->
    <section id="typescript-generics" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">19. TypeScript Generics</h2>
      <p class="text-lg text-gray-700 mb-4">
        Generics provide a way to create reusable components that work with a variety of data types while maintaining type safety. They allow you to define placeholders for types that can be specified later, enabling flexible and robust code.
      </p>

      <!-- Subsection 19.1: Introduction to Generics -->
      <h3 class="text-3xl font-semibold mb-2">19.1. Introduction to Generics</h3>
      <p class="text-lg text-gray-700 mb-4">
        Generics enable you to create components, functions, and classes that can operate with different types without sacrificing type safety. By using generics, you can write more flexible and maintainable code that works across various data types.
      </p>

      <!-- Subsection 19.2: Generic Functions -->
      <h3 class="text-3xl font-semibold mb-2">19.2. Generic Functions</h3>
      <p class="text-lg text-gray-700 mb-4">
        Generic functions are functions that can accept parameters of various types while maintaining the type relationship between inputs and outputs. This allows for greater flexibility and reusability.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericFunctionExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>identity</code> function uses a generic type <code>T</code> to accept and return a value of any type. This ensures that the input and output types are consistent.
      </p>

      <!-- Subsection 19.3: Generic Classes -->
      <h3 class="text-3xl font-semibold mb-2">19.3. Generic Classes</h3>
      <p class="text-lg text-gray-700 mb-4">
        Generic classes allow you to create classes that can handle multiple data types. This is particularly useful for data structures like stacks, queues, and linked lists, where the type of data they handle can vary.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericClassExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Stack</code> class is generic and can handle any type specified when an instance is created. This allows for creating stacks of numbers, strings, or any other type without duplicating code.
      </p>

      <!-- Subsection 19.4: Generic Interfaces -->
      <h3 class="text-3xl font-semibold mb-2">19.4. Generic Interfaces</h3>
      <p class="text-lg text-gray-700 mb-4">
        Generic interfaces define contracts that can work with various data types. They are useful for defining the shape of objects that interact with generics, ensuring type safety across different implementations.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericInterfaceExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Pair</code> interface uses generics to define a tuple of two related types. This ensures that both elements of the pair are of the specified types, maintaining consistency.
      </p>

      <!-- Subsection 19.5: Constraints -->
      <h3 class="text-3xl font-semibold mb-2">19.5. Constraints</h3>
      <p class="text-lg text-gray-700 mb-4">
        Constraints limit the types that can be used with generics, ensuring that the generic types meet certain criteria. This enhances type safety by restricting the kinds of types that can be passed to generic components.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericsConstraintsExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>extend</code> keyword is used to constrain the generic type <code>T</code> to types that have a <code>length</code> property. This allows the <code>loggingIdentity</code> function to access the <code>length</code> property on <code>arg</code>, ensuring type safety.
      </p>

      <!-- Subsection 19.6: Default Type Parameters -->
      <h3 class="text-3xl font-semibold mb-2">19.6. Default Type Parameters</h3>
      <p class="text-lg text-gray-700 mb-4">
        Default type parameters allow you to specify default types for generics, making them optional when the type can be inferred or when a default type is sufficient.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ defaultTypeParametersExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Container</code> class has a default type parameter <code>T = string</code>. If no type is specified when creating an instance of <code>Container</code>, it defaults to <code>string</code>.
      </p>

      <!-- Subsection 19.7: Using Multiple Type Parameters -->
      <h3 class="text-3xl font-semibold mb-2">19.7. Using Multiple Type Parameters</h3>
      <p class="text-lg text-gray-700 mb-4">
        Generics can accept multiple type parameters, allowing for more complex type relationships and ensuring type consistency across related types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ multipleTypeParametersExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Pair</code> interface uses two generic types <code>T</code> and <code>U</code> to define a tuple containing two related but potentially different types.
      </p>

      <!-- Subsection 19.8: Key Benefits of Generics -->
      <h3 class="text-3xl font-semibold mb-2">19.8. Key Benefits of Generics</h3>
      <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
        <li><strong>Reusability:</strong> Write reusable components that work with any data type.</li>
        <li><strong>Type Safety:</strong> Maintain type safety without sacrificing flexibility.</li>
        <li><strong>Flexibility:</strong> Handle multiple data types with a single implementation.</li>
        <li><strong>Maintainability:</strong> Reduce code duplication and enhance code maintainability.</li>
      </ul>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A diagram illustrating how generics work in functions, classes, and interfaces, showing type placeholders and their replacements.
        Alt Text: "Diagram illustrating the concept of generics in TypeScript, showing type placeholders and their substitutions."
      -->
    </section>

    <!-- Section 20: Best Practices -->
    <section id="best-practices" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">20. Best Practices</h2>
      <p class="text-lg text-gray-700 mb-4">
        Adhering to best practices when working with generics ensures that your code remains clean, efficient, and maintainable. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Use Descriptive Type Parameter Names:</strong> Use meaningful names like <code>T</code>, <code>K</code>, <code>V</code>, or more descriptive names to clarify the role of each type parameter.</li>
        <li><strong>Constrain Type Parameters:</strong> Use constraints to limit the types that can be used with generics, enhancing type safety.</li>
        <li><strong>Leverage Default Type Parameters:</strong> Provide default type parameters to simplify usage when a default type is sufficient.</li>
        <li><strong>Keep Generics Simple:</strong> Avoid overly complex generic type relationships to maintain readability and simplicity.</li>
        <li><strong>Document Generic Components:</strong> Use comments and documentation to explain the purpose and usage of generic type parameters.</li>
        <li><strong>Reuse Existing Generics:</strong> Utilize built-in generics provided by TypeScript, such as <code>Partial</code>, <code>Readonly</code>, and <code>Record</code>, to avoid reinventing the wheel.</li>
        <li><strong>Avoid Using <code>any</code> with Generics:</strong> Using <code>any</code> with generics can undermine type safety. Prefer using more specific types or constraints.</li>
        <li><strong>Test Generic Components Thoroughly:</strong> Ensure that your generic components work correctly with a variety of type parameters through comprehensive testing.</li>
      </ul>
    </section>

    <!-- Section 21: Common Mistakes -->
    <section id="common-mistakes" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">21. Common Mistakes</h2>
      <p class="text-lg text-gray-700 mb-4">
        Being aware of common pitfalls helps you avoid errors and write more robust TypeScript code when working with generics. Here are some frequent mistakes developers make:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Overusing Generics:</strong> Using generics when simple types or interfaces would suffice can lead to unnecessary complexity.</li>
        <li><strong>Not Using Constraints:</strong> Failing to constrain type parameters can result in less type-safe code and unexpected behaviors.</li>
        <li><strong>Using <code>any</code> with Generics:</strong> Incorporating <code>any</code> defeats the purpose of generics by removing type safety.</li>
        <li><strong>Complex Generic Relationships:</strong> Creating overly intricate type relationships can make the code difficult to understand and maintain.</li>
        <li><strong>Ignoring Type Inference:</strong> Explicitly specifying type parameters when TypeScript can infer them can lead to verbosity and reduced readability.</li>
        <li><strong>Not Testing with Various Types:</strong> Failing to test generic components with different type parameters can leave hidden bugs and type mismatches.</li>
        <li><strong>Neglecting Documentation:</strong> Not documenting the purpose and usage of generic type parameters can lead to confusion and misuse.</li>
        <li><strong>Misnaming Type Parameters:</strong> Using non-descriptive or unclear names for type parameters can obscure their intended use and relationships.</li>
      </ul>
    </section>

    <!-- Section 22: Summary -->
    <section id="summary" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">22. Summary</h2>
      <p class="text-lg text-gray-700 mb-4">
        Generics are a powerful feature in TypeScript that enable the creation of flexible, reusable, and type-safe components. By understanding and leveraging generics, you can write more abstract and adaptable code that works seamlessly with various data types.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        From generic functions and classes to interfaces and constraints, generics provide a robust toolkit for handling diverse type scenarios. Adhering to best practices and being mindful of common mistakes will ensure that your usage of generics enhances your code quality and maintainability.
      </p>
      <p class="text-lg text-gray-700">
        Embrace generics to unlock greater flexibility and type safety in your TypeScript projects, paving the way for more scalable and maintainable applications.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TypesTypeScript',
  data() {
    return {
      // Section 19: TypeScript Generics
      genericFunctionExample: `// Generic Function Example
function identity<T>(arg: T): T {
  return arg;
}

const numberIdentity = identity<number>(42);
const stringIdentity = identity<string>('Hello, Generics!');

console.log(numberIdentity); // Output: 42
console.log(stringIdentity); // Output: Hello, Generics!`,

      genericClassExample: `// Generic Class Example
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // Output: 20

const stringStack = new Stack<string>();
stringStack.push('Hello');
stringStack.push('World');
console.log(stringStack.peek()); // Output: World`,

      genericInterfaceExample: `// Generic Interface Example
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<string, number> = {
  first: 'Age',
  second: 30
};

console.log(pair); // Output: { first: 'Age', second: 30 }`,

      genericsConstraintsExample: `// Generics with Constraints Example
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now TypeScript knows that arg has a .length property
  return arg;
}

loggingIdentity({ length: 10, value: 'Hello' }); // Output: 10
// loggingIdentity({ value: 'Hello' }); // Error: Argument of type '{ value: string; }' is not assignable to parameter of type 'Lengthwise'. Property 'length' is missing in type '{ value: string; }' but required in type 'Lengthwise'.`,

      defaultTypeParametersExample: `// Generic Class with Default Type Parameters
class Container<T = string> {
  constructor(public value: T) {}
}

const defaultContainer = new Container('Default String');
console.log(defaultContainer.value); // Output: Default String

const numberContainer = new Container<number>(123);
console.log(numberContainer.value); // Output: 123`,

      multipleTypeParametersExample: `// Generic Interface with Multiple Type Parameters
interface Pair<T, U> {
  first: T;
  second: U;
}

const pair: Pair<string, number> = {
  first: 'Height',
  second: 180
};

console.log(pair); // Output: { first: 'Height', second: 180 }`,
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
  color: #2563eb; /* Tailwind's blue-600 */
}
a:hover {
  color: #1e40af; /* Tailwind's blue-800 */
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
