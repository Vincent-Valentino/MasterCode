<template>
  <div class="container mx-auto p-6">
    <!-- Header Section -->
    <header class="mb-8">
      <h1 class="text-5xl font-bold text-blue-600 mb-4">TypeScript Basics</h1>
      <p class="text-xl text-gray-700">
        Master the fundamentals of TypeScript to enhance your JavaScript projects with strong typing and advanced features.
      </p>
    </header>

    <!-- Table of Contents -->
    <nav class="mb-8">
      <h2 class="text-3xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-blue-500">
        <li><a href="#introduction" class="underline">1. Introduction to TypeScript</a></li>
        <li><a href="#why-typescript" class="underline">2. Why Use TypeScript Instead of Just JavaScript?</a></li>
        <li><a href="#setting-up" class="underline">3. Setting Up TypeScript with Vue.js</a></li>
        <li><a href="#type-annotations" class="underline">4. Type Annotations</a></li>
        <li><a href="#basic-types" class="underline">5. Basic Types</a></li>
        <li><a href="#interfaces" class="underline">6. Interfaces</a></li>
        <li><a href="#classes-inheritance" class="underline">7. Classes and Inheritance</a></li>
        <li><a href="#enums" class="underline">8. Enums</a></li>
        <li><a href="#generics" class="underline">9. Generics</a></li>
        <li><a href="#functions" class="underline">10. Functions in TypeScript</a></li>
        <li><a href="#type-inference" class="underline">11. Type Inference</a></li>
        <li><a href="#union-intersection" class="underline">12. Union and Intersection Types</a></li>
        <li><a href="#type-assertions" class="underline">13. Type Assertions</a></li>
        <li><a href="#modules" class="underline">14. Modules: Import and Export</a></li>
        <li><a href="#integration-with-vue" class="underline">15. Integration with Vue.js</a></li>
        <li><a href="#practical-examples" class="underline">16. Practical Examples</a></li>
        <li><a href="#best-practices" class="underline">17. Best Practices</a></li>
        <li><a href="#common-mistakes" class="underline">18. Common Mistakes</a></li>
        <li><a href="#summary" class="underline">19. Summary</a></li>
      </ul>
    </nav>

    <!-- Section 1: Introduction to TypeScript -->
    <section id="introduction" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">1. Introduction to TypeScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript is a statically typed superset of JavaScript developed and maintained by Microsoft. It adds optional static typing and other powerful features to JavaScript, enabling developers to write more robust, maintainable, and scalable code.
      </p>
      <p class="text-lg text-gray-700">
        Unlike JavaScript, TypeScript compiles to plain JavaScript, ensuring compatibility with any JavaScript environment. This means you can gradually adopt TypeScript in your existing JavaScript projects without a complete rewrite.
      </p>
    </section>

    <!-- Section 2: Why Use TypeScript Instead of Just JavaScript? -->
    <section id="why-typescript" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">2. Why Use TypeScript Instead of Just JavaScript?</h2>
      <p class="text-lg text-gray-700 mb-4">
        While JavaScript is a powerful and flexible language, it lacks certain features that can help manage complex codebases effectively. TypeScript addresses these limitations by introducing several enhancements:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
        <li><strong>Static Typing:</strong> Detect errors at compile-time rather than runtime, reducing bugs and improving code quality.</li>
        <li><strong>Enhanced Tooling:</strong> Improved IntelliSense, autocompletion, and navigation in IDEs make development faster and more efficient.</li>
        <li><strong>Better Maintainability:</strong> Clearer contracts and interfaces make the codebase easier to understand and maintain.</li>
        <li><strong>Advanced Features:</strong> Access to features like interfaces, enums, generics, and more that are not available in vanilla JavaScript.</li>
        <li><strong>Compatibility:</strong> TypeScript compiles to JavaScript, ensuring compatibility with existing JavaScript libraries and frameworks.</li>
      </ul>
      <p class="text-lg text-gray-700">
        These advantages make TypeScript an excellent choice for large-scale applications, collaborative projects, and scenarios where code quality and maintainability are paramount.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A side-by-side comparison diagram showing JavaScript and TypeScript, highlighting added features in TypeScript.
        Alt Text: "Comparison between JavaScript and TypeScript highlighting TypeScript's additional features."
      -->
    </section>

    <!-- Section 3: Setting Up TypeScript with Vue.js -->
    <section id="setting-up" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">3. Setting Up TypeScript with Vue.js</h2>
      <p class="text-lg text-gray-700 mb-4">
        Integrating TypeScript into your Vue.js project enhances type safety and developer experience. Here's how to set it up:
      </p>
      <ol class="list-decimal list-inside text-lg text-gray-700 mb-4">
        <li><strong>Install Vue CLI:</strong> If you haven't already, install the Vue CLI globally.
          <pre class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto"><code class="language-shell">npm install -g @vue/cli</code></pre>
        </li>
        <li><strong>Create a New Vue Project with TypeScript:</strong> Use the Vue CLI to create a project with TypeScript support.
          <pre class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto"><code class="language-shell">vue create my-vue-app</code></pre>
          When prompted, select the TypeScript option.
        </li>
        <li><strong>Configure TypeScript:</strong> After project creation, ensure that the <code>tsconfig.json</code> file is correctly set up. You can customize compiler options as needed.</li>
        <li><strong>Using TypeScript in Components:</strong> In your Vue components, use the <code lang="ts"></code> attribute to enable TypeScript.
          <pre class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto"><code class="language-html">&lt;script lang="ts"&gt;
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      message: 'Hello, TypeScript!'
    };
  },
  methods: {
    greet(): void {
      console.log(this.message);
    }
  }
});
&lt;/script&gt;</code></pre>
        </li>
      </ol>
      <p class="text-lg text-gray-700">
        With these steps, your Vue.js project is now equipped with TypeScript, allowing you to leverage its powerful features to build more robust applications.
      </p>
    </section>

    <!-- Section 4: Type Annotations -->
    <section id="type-annotations" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">4. Type Annotations</h2>
      <p class="text-lg text-gray-700 mb-4">
        Type annotations allow you to specify the types of variables, function parameters, and return values explicitly. This enhances code clarity and helps catch type-related errors during development.
      </p>

      <!-- Subsection: Variable Type Annotations -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">4.1. Variable Type Annotations</h3>
        <p class="text-lg text-gray-700 mb-4">
          You can annotate variables with specific types to ensure they hold values of the intended type.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ variableTypeAnnotationExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The variable <code>username</code> is explicitly typed as a <code>string</code>, preventing it from being assigned values of other types.
        </p>
      </div>

      <!-- Subsection: Function Parameter and Return Type Annotations -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">4.2. Function Parameter and Return Type Annotations</h3>
        <p class="text-lg text-gray-700 mb-4">
          Type annotations can be applied to function parameters and return types to enforce type safety.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ functionTypeAnnotationExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>add</code> accepts two parameters of type <code>number</code> and returns a <code>number</code>. Attempting to pass non-number arguments will result in a compile-time error.
        </p>
      </div>
    </section>

    <!-- Section 5: Basic Types -->
    <section id="basic-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">5. Basic Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript introduces several basic types that help define the kind of values variables can hold. Understanding these types is fundamental to leveraging TypeScript's type system effectively.
      </p>

      <!-- Subsection: String -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">5.1. String</h3>
        <p class="text-lg text-gray-700 mb-4">
          The <code>string</code> type represents textual data.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ stringTypeExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> Variables <code>firstName</code> and <code>lastName</code> are typed as strings, ensuring they can only hold textual data.
        </p>
      </div>

      <!-- Subsection: Number -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">5.2. Number</h3>
        <p class="text-lg text-gray-700 mb-4">
          The <code>number</code> type represents both integer and floating-point numbers.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ numberTypeExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The variable <code>age</code> is explicitly typed as a number, preventing it from being assigned non-numeric values.
        </p>
      </div>

      <!-- Subsection: Boolean -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">5.3. Boolean</h3>
        <p class="text-lg text-gray-700 mb-4">
          The <code>boolean</code> type represents logical values: <code>true</code> or <code>false</code>.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ booleanTypeExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The variable <code>isActive</code> is typed as a boolean, ensuring it only holds true or false values.
        </p>
      </div>

      <!-- Subsection: Any -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">5.4. Any</h3>
        <p class="text-lg text-gray-700 mb-4">
          The <code>any</code> type disables type checking, allowing any type of value to be assigned. Use it sparingly, as it negates the benefits of TypeScript's type system.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ anyTypeExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The variable <code>data</code> can hold any type of value, providing flexibility but reducing type safety.
        </p>
      </div>

      <!-- Subsection: Unknown -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">5.5. Unknown</h3>
        <p class="text-lg text-gray-700 mb-4">
          The <code>unknown</code> type is similar to <code>any</code> but safer, as it requires type checking before performing operations on the value.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ unknownTypeExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The variable <code>value</code> is typed as unknown. Before using it as a string, we perform a type check to ensure safety.
        </p>
      </div>

      <!-- Subsection: Void -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">5.6. Void</h3>
        <p class="text-lg text-gray-700 mb-4">
          The <code>void</code> type represents the absence of having any type at all. It's commonly used as the return type for functions that do not return a value.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ voidTypeExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>logMessage</code> does not return any value, so its return type is <code>void</code>.
        </p>
      </div>

      <!-- Subsection: Null and Undefined -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">5.7. Null and Undefined</h3>
        <p class="text-lg text-gray-700 mb-4">
          TypeScript differentiates between <code>null</code> and <code>undefined</code>, allowing for more precise type definitions.
        </p>
        <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><strong>Null:</strong> Represents intentional absence of any object value.</li>
          <li><strong>Undefined:</strong> Represents uninitialized variables or missing function parameters.</li>
        </ul>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ nullUndefinedExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> Variables <code>emptyValue</code> and <code>uninitialized</code> are explicitly typed as <code>null</code> and <code>undefined</code>, respectively.
        </p>
      </div>

      <!-- Subsection: Never -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">5.8. Never</h3>
        <p class="text-lg text-gray-700 mb-4">
          The <code>never</code> type represents values that never occur. It's used to indicate functions that always throw an error or never return.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ neverTypeExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>fail</code> always throws an error and thus never returns a value, hence its return type is <code>never</code>.
        </p>
      </div>
    </section>

    <!-- Section 6: Interfaces -->
    <section id="interfaces" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">6. Interfaces</h2>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces in TypeScript define the shape of objects. They enforce structure by specifying the types of properties and methods that an object should have.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces are particularly useful for ensuring consistency across different parts of your codebase, enhancing maintainability and readability.
      </p>

      <!-- Subsection: Basic Interface Example -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.1. Basic Interface Example</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define an interface to describe the structure of an object.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ basicInterfaceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>User</code> interface specifies that a user object must have <code>id</code>, <code>name</code>, and <code>email</code> properties of specific types.
        </p>
      </div>

      <!-- Subsection: Optional Properties -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.2. Optional Properties</h3>
        <p class="text-lg text-gray-700 mb-4">
          Interfaces can define optional properties using the <code>?</code> symbol.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ optionalPropertiesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>address</code> property in the <code>User</code> interface is optional, allowing user objects to include or omit it.
        </p>
      </div>

      <!-- Subsection: Readonly Properties -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.3. Readonly Properties</h3>
        <p class="text-lg text-gray-700 mb-4">
          Use the <code>readonly</code> modifier to prevent properties from being reassigned after initialization.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ readonlyPropertiesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>id</code> property is readonly, ensuring that once a user is created, their ID cannot be changed.
        </p>
      </div>

      <!-- Subsection: Function Types in Interfaces -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.4. Function Types in Interfaces</h3>
        <p class="text-lg text-gray-700 mb-4">
          Interfaces can describe function types, specifying the types of parameters and return values.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ functionTypesInterfaceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>GreetFunction</code> interface defines a function that takes a <code>string</code> parameter and returns a <code>string</code>.
        </p>
      </div>

      <!-- Subsection: Extending Interfaces -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.5. Extending Interfaces</h3>
        <p class="text-lg text-gray-700 mb-4">
          Interfaces can extend other interfaces, allowing for the creation of more complex and hierarchical object structures.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ extendingInterfacesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Employee</code> interface extends the <code>User</code> interface, inheriting its properties and adding new ones specific to employees.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Diagram showing how interfaces can extend other interfaces, illustrating inheritance in TypeScript.
        Alt Text: "Diagram illustrating interface extension in TypeScript."
      -->
    </section>

    <!-- Section 7: Classes and Inheritance -->
    <section id="classes-inheritance" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">7. Classes and Inheritance</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript enhances JavaScript's class-based object-oriented programming capabilities by introducing features like access modifiers, inheritance, and abstract classes. These features promote better code organization, reusability, and encapsulation.
      </p>

      <!-- Subsection: Basic Class Example -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">7.1. Basic Class Example</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define a class with properties and methods.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ basicClassExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Person</code> class includes a constructor to initialize properties and a method <code>greet</code> to display a greeting message.
        </p>
      </div>

      <!-- Subsection: Access Modifiers -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">7.2. Access Modifiers</h3>
        <p class="text-lg text-gray-700 mb-4">
          Control the visibility of class members using <code>public</code>, <code>private</code>, and <code>protected</code> modifiers.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ accessModifiersExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>secret</code> property is private, making it inaccessible outside the class. The <code>getSecret</code> method provides controlled access to the private property.
        </p>
      </div>

      <!-- Subsection: Inheritance -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">7.3. Inheritance</h3>
        <p class="text-lg text-gray-700 mb-4">
          Extend classes to create specialized versions, promoting code reuse and hierarchical relationships.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ inheritanceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Employee</code> class extends the <code>Person</code> class, inheriting its properties and methods while adding new ones specific to employees.
        </p>
      </div>

      <!-- Subsection: Abstract Classes -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">7.4. Abstract Classes</h3>
        <p class="text-lg text-gray-700 mb-4">
          Abstract classes cannot be instantiated directly and are intended to be subclassed. They can contain abstract methods that must be implemented by derived classes.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ abstractClassExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Animal</code> abstract class defines an abstract method <code>makeSound</code> that must be implemented by any subclass.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: UML diagram showing class inheritance, with base class and derived classes illustrating abstract classes and method overriding.
        Alt Text: "UML diagram illustrating class inheritance and abstract classes in TypeScript."
      -->
    </section>

    <!-- Section 8: Enums -->
    <section id="enums" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">8. Enums</h2>
      <p class="text-lg text-gray-700 mb-4">
        Enums allow you to define a set of named constants, making it easier to document intent or create a set of distinct cases.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript provides both numeric and string enums, offering flexibility in how you define and use them.
      </p>

      <!-- Subsection: Numeric Enums -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">8.1. Numeric Enums</h3>
        <p class="text-lg text-gray-700 mb-4">
          Numeric enums assign numeric values to each member, starting from 0 by default.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ numericEnumExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Direction</code> enum assigns numeric values to each direction. You can also manually assign values if desired.
        </p>
      </div>

      <!-- Subsection: String Enums -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">8.2. String Enums</h3>
        <p class="text-lg text-gray-700 mb-4">
          String enums assign string values to each member, providing more readable and meaningful values.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ stringEnumExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Status</code> enum assigns specific string values to each status, enhancing clarity in the codebase.
        </p>
      </div>

      <!-- Subsection: Heterogeneous Enums -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">8.3. Heterogeneous Enums</h3>
        <p class="text-lg text-gray-700 mb-4">
          Heterogeneous enums contain both string and numeric members. However, they are generally discouraged in favor of consistent enum types.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ heterogeneousEnumExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>MixedEnum</code> contains both numeric and string values, which can lead to confusion and should be avoided when possible.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Diagram showing the structure of enums in TypeScript, differentiating between numeric, string, and heterogeneous enums.
        Alt Text: "Diagram illustrating different types of enums in TypeScript."
      -->
    </section>

    <!-- Section 9: Generics -->
    <section id="generics" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">9. Generics</h2>
      <p class="text-lg text-gray-700 mb-4">
        Generics provide a way to create reusable components that work with a variety of types, enabling developers to write flexible and type-safe code.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        By using generics, you can define functions, classes, and interfaces that operate on types specified by the consumer, promoting code reuse and type safety.
      </p>

      <!-- Subsection: Generic Functions -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">9.1. Generic Functions</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define functions that can operate on different types while maintaining type safety.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ genericFunctionExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>identity</code> returns the same value it receives, with the type preserved through the generic <code>T</code>.
        </p>
      </div>

      <!-- Subsection: Generic Classes -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">9.2. Generic Classes</h3>
        <p class="text-lg text-gray-700 mb-4">
          Create classes that can work with various types, enhancing flexibility and reusability.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ genericClassExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Box</code> class can store any type specified during instantiation, allowing for versatile usage.
        </p>
      </div>

      <!-- Subsection: Generic Interfaces -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">9.3. Generic Interfaces</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define interfaces that can work with multiple types, ensuring type consistency across different implementations.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ genericInterfaceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>KeyValuePair</code> interface describes a key-value pair where both the key and value can be of any specified type.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Flowchart showing how generics allow functions, classes, and interfaces to operate on multiple types while maintaining type safety.
        Alt Text: "Flowchart illustrating the concept of generics in TypeScript."
      -->
    </section>

    <!-- Section 10: Functions in TypeScript -->
    <section id="functions" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">10. Functions in TypeScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript enhances functions by allowing you to define types for parameters and return values, ensuring that functions are used correctly and consistently.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Additionally, TypeScript introduces features like optional parameters, default parameters, and rest parameters, providing greater flexibility in function definitions.
      </p>

      <!-- Subsection: Function Parameter Types -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.1. Function Parameter Types</h3>
        <p class="text-lg text-gray-700 mb-4">
          Specify types for function parameters to enforce correct usage.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ functionParameterTypesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>greet</code> expects a <code>string</code> parameter, ensuring that only strings are passed when calling the function.
        </p>
      </div>

      <!-- Subsection: Function Return Types -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.2. Function Return Types</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define the type of value a function returns, enhancing type safety.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ functionReturnTypeExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>add</code> returns a <code>number</code>, ensuring that the result of the function is always a number.
        </p>
      </div>

      <!-- Subsection: Optional Parameters -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.3. Optional Parameters</h3>
        <p class="text-lg text-gray-700 mb-4">
          Make function parameters optional using the <code>?</code> symbol.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ optionalParametersExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>printMessage</code> function can be called with or without the <code>message</code> parameter, defaulting to a predefined message if none is provided.
        </p>
      </div>

      <!-- Subsection: Default Parameters -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.4. Default Parameters</h3>
        <p class="text-lg text-gray-700 mb-4">
          Assign default values to function parameters, providing fallback options.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ defaultParametersExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> If <code>greeting</code> is not provided when calling <code>greet</code>, it defaults to "Hello".
        </p>
      </div>

      <!-- Subsection: Rest Parameters -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.5. Rest Parameters</h3>
        <p class="text-lg text-gray-700 mb-4">
          Use rest parameters to accept an indefinite number of arguments as an array.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ restParametersExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>sum</code> takes the first two numbers as fixed parameters and collects the rest into the <code>numbers</code> array for summation.
        </p>
      </div>

      <!-- Subsection: Arrow Functions with Types -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.6. Arrow Functions with Types</h3>
        <p class="text-lg text-gray-700 mb-4">
          Combine TypeScript's type annotations with arrow functions for concise and type-safe function definitions.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ arrowFunctionWithTypesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The arrow function <code>multiply</code> specifies types for its parameters and return value, ensuring type safety.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Diagram illustrating different function types in TypeScript, including regular functions and arrow functions with type annotations.
        Alt Text: "Diagram showing function types and type annotations in TypeScript."
      -->
    </section>

    <!-- Section 6: Interfaces -->
    <section id="interfaces" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">6. Interfaces</h2>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces in TypeScript define the shape of objects, ensuring that they adhere to specific structures. They are instrumental in creating contracts within your code, promoting consistency and reducing errors.
      </p>

      <!-- Subsection: Basic Interface Example -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.1. Basic Interface Example</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define an interface to describe the structure of an object.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ basicInterfaceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>User</code> interface specifies that a user object must have <code>id</code>, <code>name</code>, and <code>email</code> properties of specific types.
        </p>
      </div>

      <!-- Subsection: Optional Properties -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.2. Optional Properties</h3>
        <p class="text-lg text-gray-700 mb-4">
          Interfaces can define optional properties using the <code>?</code> symbol.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ optionalPropertiesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>address</code> property in the <code>User</code> interface is optional, allowing user objects to include or omit it.
        </p>
      </div>

      <!-- Subsection: Readonly Properties -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.3. Readonly Properties</h3>
        <p class="text-lg text-gray-700 mb-4">
          Use the <code>readonly</code> modifier to prevent properties from being reassigned after initialization.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ readonlyPropertiesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>id</code> property is readonly, ensuring that once a user is created, their ID cannot be changed.
        </p>
      </div>

      <!-- Subsection: Function Types in Interfaces -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.4. Function Types in Interfaces</h3>
        <p class="text-lg text-gray-700 mb-4">
          Interfaces can describe function types, specifying the types of parameters and return values.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ functionTypesInterfaceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>GreetFunction</code> interface defines a function that takes a <code>string</code> parameter and returns a <code>string</code>.
        </p>
      </div>

      <!-- Subsection: Extending Interfaces -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.5. Extending Interfaces</h3>
        <p class="text-lg text-gray-700 mb-4">
          Interfaces can extend other interfaces, allowing for the creation of more complex and hierarchical object structures.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ extendingInterfacesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Employee</code> interface extends the <code>User</code> interface, inheriting its properties and adding new ones specific to employees.
        </p>
      </div>

      <!-- Subsection: Indexable Types -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">6.6. Indexable Types</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define interfaces that describe types with index signatures, allowing for dynamic property keys.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ indexableTypesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>StringArray</code> interface describes an object where the keys are numbers and the values are strings, similar to an array of strings.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: UML diagram showing interface extension and implementation, including function types and indexable types.
        Alt Text: "UML diagram illustrating interface extension and indexable types in TypeScript."
      -->
    </section>

    <!-- Section 7: Classes and Inheritance -->
    <section id="classes-inheritance" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">7. Classes and Inheritance</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript enhances JavaScript's class-based object-oriented programming capabilities by introducing features like access modifiers, inheritance, and abstract classes. These features promote better code organization, reusability, and encapsulation.
      </p>

      <!-- Subsection: Basic Class Example -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">7.1. Basic Class Example</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define a class with properties and methods.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ basicClassExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Person</code> class includes a constructor to initialize properties and a method <code>greet</code> to display a greeting message.
        </p>
      </div>

      <!-- Subsection: Access Modifiers -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">7.2. Access Modifiers</h3>
        <p class="text-lg text-gray-700 mb-4">
          Control the visibility of class members using <code>public</code>, <code>private</code>, and <code>protected</code> modifiers.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ accessModifiersExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>secret</code> property is private, making it inaccessible outside the class. The <code>getSecret</code> method provides controlled access to the private property.
        </p>
      </div>

      <!-- Subsection: Inheritance -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">7.3. Inheritance</h3>
        <p class="text-lg text-gray-700 mb-4">
          Extend classes to create specialized versions, promoting code reuse and hierarchical relationships.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ inheritanceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Employee</code> class extends the <code>Person</code> class, inheriting its properties and methods while adding new ones specific to employees.
        </p>
      </div>

      <!-- Subsection: Abstract Classes -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">7.4. Abstract Classes</h3>
        <p class="text-lg text-gray-700 mb-4">
          Abstract classes cannot be instantiated directly and are intended to be subclassed. They can contain abstract methods that must be implemented by derived classes.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ abstractClassExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Animal</code> abstract class defines an abstract method <code>makeSound</code> that must be implemented by any subclass.
        </p>
      </div>

      <!-- Subsection: Static Members -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">7.5. Static Members</h3>
        <p class="text-lg text-gray-700 mb-4">
          Static members belong to the class itself rather than any instance, useful for utility functions and constants.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ staticMembersExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>MathUtils</code> class has a static method <code>add</code> that can be called without creating an instance of the class.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: UML class diagram showing classes, inheritance, abstract classes, and static members in TypeScript.
        Alt Text: "UML class diagram illustrating classes, inheritance, abstract classes, and static members in TypeScript."
      -->
    </section>

    <!-- Section 8: Enums -->
    <section id="enums" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">8. Enums</h2>
      <p class="text-lg text-gray-700 mb-4">
        Enums allow you to define a set of named constants, enhancing code readability and reducing errors caused by using magic numbers or strings.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript provides both numeric and string enums, offering flexibility in how you define and use them.
      </p>

      <!-- Subsection: Numeric Enums -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">8.1. Numeric Enums</h3>
        <p class="text-lg text-gray-700 mb-4">
          Numeric enums assign numeric values to each member, starting from 0 by default.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ numericEnumExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Direction</code> enum assigns numeric values to each direction. You can also manually assign values if desired.
        </p>
      </div>

      <!-- Subsection: String Enums -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">8.2. String Enums</h3>
        <p class="text-lg text-gray-700 mb-4">
          String enums assign string values to each member, providing more readable and meaningful values.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ stringEnumExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Status</code> enum assigns specific string values to each status, enhancing clarity in the codebase.
        </p>
      </div>

      <!-- Subsection: Heterogeneous Enums -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">8.3. Heterogeneous Enums</h3>
        <p class="text-lg text-gray-700 mb-4">
          Heterogeneous enums contain both string and numeric members. However, they are generally discouraged in favor of consistent enum types.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ heterogeneousEnumExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>MixedEnum</code> contains both numeric and string values, which can lead to confusion and should be avoided when possible.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Diagram showing different types of enums (numeric, string, heterogeneous) and their use cases.
        Alt Text: "Diagram illustrating different types of enums in TypeScript."
      -->
    </section>

    <!-- Section 9: Generics -->
    <section id="generics" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">9. Generics</h2>
      <p class="text-lg text-gray-700 mb-4">
        Generics provide a way to create reusable components that work with a variety of types, enabling developers to write flexible and type-safe code.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        By using generics, you can define functions, classes, and interfaces that operate on types specified by the consumer, promoting code reuse and type safety.
      </p>

      <!-- Subsection: Generic Functions -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">9.1. Generic Functions</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define functions that can operate on different types while maintaining type safety.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ genericFunctionExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>identity</code> returns the same value it receives, with the type preserved through the generic <code>T</code>.
        </p>
      </div>

      <!-- Subsection: Generic Classes -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">9.2. Generic Classes</h3>
        <p class="text-lg text-gray-700 mb-4">
          Create classes that can work with various types, enhancing flexibility and reusability.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ genericClassExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Box</code> class can store any type specified during instantiation, allowing for versatile usage.
        </p>
      </div>

      <!-- Subsection: Generic Interfaces -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">9.3. Generic Interfaces</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define interfaces that can work with multiple types, ensuring type consistency across different implementations.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ genericInterfaceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>KeyValuePair</code> interface describes a key-value pair where both the key and value can be of any specified type.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Diagram showing how generics allow functions, classes, and interfaces to operate on multiple types while maintaining type safety.
        Alt Text: "Flowchart illustrating the concept of generics in TypeScript."
      -->
    </section>

    <!-- Section 10: Functions in TypeScript -->
    <section id="functions" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">10. Functions in TypeScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript enhances functions by allowing you to define types for parameters and return values, ensuring that functions are used correctly and consistently.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Additionally, TypeScript introduces features like optional parameters, default parameters, and rest parameters, providing greater flexibility in function definitions.
      </p>

      <!-- Subsection: Function Parameter Types -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.1. Function Parameter Types</h3>
        <p class="text-lg text-gray-700 mb-4">
          Specify types for function parameters to enforce correct usage.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ functionParameterTypesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>greet</code> expects a <code>string</code> parameter, ensuring that only strings are passed when calling the function.
        </p>
      </div>

      <!-- Subsection: Function Return Types -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.2. Function Return Types</h3>
        <p class="text-lg text-gray-700 mb-4">
          Define the type of value a function returns, enhancing type safety.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ functionReturnTypeExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>add</code> returns a <code>number</code>, ensuring that the result of the function is always a number.
        </p>
      </div>

      <!-- Subsection: Optional Parameters -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.3. Optional Parameters</h3>
        <p class="text-lg text-gray-700 mb-4">
          Make function parameters optional using the <code>?</code> symbol.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ optionalParametersExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>printMessage</code> function can be called with or without the <code>message</code> parameter, defaulting to a predefined message if none is provided.
        </p>
      </div>

      <!-- Subsection: Default Parameters -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.4. Default Parameters</h3>
        <p class="text-lg text-gray-700 mb-4">
          Assign default values to function parameters, providing fallback options.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ defaultParametersExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> If <code>greeting</code> is not provided when calling <code>greet</code>, it defaults to "Hello".
        </p>
      </div>

      <!-- Subsection: Rest Parameters -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.5. Rest Parameters</h3>
        <p class="text-lg text-gray-700 mb-4">
          Use rest parameters to accept an indefinite number of arguments as an array.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ restParametersExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>sum</code> takes the first two numbers as fixed parameters and collects the rest into the <code>numbers</code> array for summation.
        </p>
      </div>

      <!-- Subsection: Arrow Functions with Types -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">10.6. Arrow Functions with Types</h3>
        <p class="text-lg text-gray-700 mb-4">
          Combine TypeScript's type annotations with arrow functions for concise and type-safe function definitions.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ arrowFunctionWithTypesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The arrow function <code>multiply</code> specifies types for its parameters and return value, ensuring type safety.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Diagram showing different function types in TypeScript, including regular functions and arrow functions with type annotations.
        Alt Text: "Diagram showing function types and type annotations in TypeScript."
      -->
    </section>

    <!-- Section 11: Type Inference -->
    <section id="type-inference" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">11. Type Inference</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript's type inference automatically deduces the types of variables and expressions when explicit type annotations are not provided. This feature reduces the need for redundant type annotations while maintaining type safety.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Understanding how TypeScript infers types helps in writing cleaner and more efficient code.
      </p>

      <!-- Subsection: Variable Type Inference -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">11.1. Variable Type Inference</h3>
        <p class="text-lg text-gray-700 mb-4">
          TypeScript infers the type of a variable based on its initial assignment.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ variableTypeInferenceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The variable <code>username</code> is inferred to be of type <code>string</code> based on its initial value. Attempting to assign a different type later will result in a compile-time error.
        </p>
      </div>

      <!-- Subsection: Function Return Type Inference -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">11.2. Function Return Type Inference</h3>
        <p class="text-lg text-gray-700 mb-4">
          TypeScript infers the return type of functions based on the returned values.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ functionReturnTypeInferenceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>add</code> returns a number, so TypeScript infers its return type as <code>number</code>. Returning a different type would cause a compile-time error.
        </p>
      </div>

      <!-- Subsection: Contextual Typing -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">11.3. Contextual Typing</h3>
        <p class="text-lg text-gray-700 mb-4">
          TypeScript uses the context in which a variable is used to infer its type.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ contextualTypingExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> In the event handler <code>handleClick</code>, TypeScript infers the type of the <code>event</code> parameter based on the context of the event listener.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Flowchart showing how TypeScript infers types based on variable assignments and usage contexts.
        Alt Text: "Flowchart illustrating TypeScript's type inference mechanisms."
      -->
    </section>

    <!-- Section 12: Union and Intersection Types -->
    <section id="union-intersection" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">12. Union and Intersection Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Union and intersection types provide powerful ways to combine types, enabling more flexible and expressive type definitions.
      </p>

      <!-- Subsection: Union Types -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">12.1. Union Types</h3>
        <p class="text-lg text-gray-700 mb-4">
          Union types allow a variable to hold values of multiple types.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ unionTypesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The variable <code>result</code> can be either a string or a number. TypeScript enforces type safety by allowing operations only valid for both types.
        </p>
      </div>

      <!-- Subsection: Intersection Types -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">12.2. Intersection Types</h3>
        <p class="text-lg text-gray-700 mb-4">
          Intersection types combine multiple types into one, requiring the variable to satisfy all combined types.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ intersectionTypesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The variable <code>employee</code> must satisfy both the <code>User</code> and <code>Worker</code> interfaces, possessing properties from both.
        </p>
      </div>

      <!-- Subsection: Practical Use Cases -->
      <div class="mb-6">
        <h3 class="text-2xl font-semibold mb-2">12.3. Practical Use Cases</h3>
        <p class="text-lg text-gray-700 mb-4">
          Union and intersection types are useful in scenarios where functions need to handle multiple types or combine functionalities from different interfaces.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ practicalUseCasesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The function <code>processInput</code> can handle either a string or a number, performing different operations based on the input type.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Diagram showing how union and intersection types combine multiple types, illustrating the flexibility and constraints they introduce.
        Alt Text: "Diagram illustrating union and intersection types in TypeScript."
      -->
    </section>

    <!-- Section 13: Type Assertions -->
<!-- Section 13: Type Assertions -->
<section id="type-assertions" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">13. Type Assertions</h2>
      <p class="text-lg text-gray-700 mb-4">
        Type Assertions allow you to override TypeScript's inferred types when you have more specific information about the type of a value. They are a way to inform the compiler about the type of a variable when you know better than the compiler.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Type Assertions are similar to type casting in other languages but do not perform any runtime checks or restructuring of data. They purely instruct the compiler to treat a value as a different type.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">13.1. Using the Angle-Bracket Syntax</h3>
      <p class="text-lg text-gray-700 mb-4">
        The angle-bracket syntax is one of the ways to perform type assertions in TypeScript. This method is more common in environments where JSX is not used, such as in React.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ angleBracketAssertionExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> Here, we assert that the <code>value</code> returned from <code>document.getElementById</code> is an <code>HTMLInputElement</code>, allowing access to its specific properties like <code>value</code>.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">13.2. Using the 'as' Syntax</h3>
      <p class="text-lg text-gray-700 mb-4">
        The 'as' syntax is another way to perform type assertions and is generally preferred in environments that use JSX, as the angle-bracket syntax can conflict with JSX's syntax.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ asSyntaxAssertionExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> Similar to the angle-bracket syntax, the 'as' syntax asserts that <code>value</code> is an <code>HTMLInputElement</code>, enabling access to its properties.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">13.3. Non-null Assertion Operator</h3>
      <p class="text-lg text-gray-700 mb-4">
        The non-null assertion operator (<code>!</code>) is used when you are certain that a value is not <code>null</code> or <code>undefined</code>, thus telling the compiler to ignore potential null or undefined values.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ nonNullAssertionExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> By appending <code>!</code> to <code>document.getElementById('myInput')</code>, we assert that the element exists, preventing TypeScript from raising an error about potential null values.
      </p>
      
      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A flowchart illustrating how Type Assertions guide the TypeScript compiler to treat variables as specific types.
        Alt Text: "Flowchart showing Type Assertions guiding the TypeScript compiler."
      -->
    </section>

    <!-- Section 14: Modules: Import and Export -->
    <section id="modules" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">14. Modules: Import and Export</h2>
      <p class="text-lg text-gray-700 mb-4">
        Modules in TypeScript (and JavaScript) allow you to organize your code into separate files, promoting reusability and maintainability. By using <code>import</code> and <code>export</code>, you can share code between different parts of your application seamlessly.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">14.1. Exporting in TypeScript</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>export</code> keyword is used to expose variables, functions, classes, interfaces, etc., from a module so that they can be imported and used in other modules.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ exportExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> In the above example, we export a function <code>greet</code> and an interface <code>User</code> from the module.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">14.2. Importing in TypeScript</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>import</code> keyword is used to bring in exported members from other modules. This allows you to utilize the functionality defined elsewhere in your application.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ importExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> Here, we import the <code>greet</code> function and <code>User</code> interface from the <code>greetModule.ts</code> file and use them within our current module.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">14.3. Default Exports</h3>
      <p class="text-lg text-gray-700 mb-4">
        Modules can have a single default export, which can be a function, class, object, or any other entity. Default exports are imported without curly braces.
      </p>
      <div class="flex flex-col md:flex-row gap-4 mb-4">
        <!-- Export Default Example -->
        <div class="bg-gray-800 text-white rounded-lg p-4 overflow-auto flex-1">
          <pre><code class="language-typescript">{{ exportDefaultExample }}</code></pre>
        </div>
        <!-- Import Default Example -->
        <div class="bg-gray-800 text-white rounded-lg p-4 overflow-auto flex-1">
          <pre><code class="language-typescript">{{ importDefaultExample }}</code></pre>
        </div>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>logger.ts</code> module exports a default function <code>log</code>, which is then imported without curly braces in the <code>app.ts</code> file.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">14.4. Re-exporting</h3>
      <p class="text-lg text-gray-700 mb-4">
        Re-exporting allows you to consolidate exports from multiple modules into a single module. This is particularly useful for creating an index file that aggregates exports for easier imports elsewhere.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ reExportExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>index.ts</code> file re-exports members from both <code>math.ts</code> and <code>logger.ts</code>, allowing them to be imported from a single source.
      </p>
      
      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A diagram showing multiple modules exporting and an index module re-exporting them for centralized imports.
        Alt Text: "Diagram illustrating module exports and re-exports with an index file."
      -->
    </section>

    <!-- Section 15: Integration with Vue.js -->
    <section id="integration-with-vue" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">15. Integration with Vue.js</h2>
      <p class="text-lg text-gray-700 mb-4">
        Integrating TypeScript with Vue.js enhances the development experience by providing type safety, improved tooling, and better code maintainability. Vue.js offers official support for TypeScript, making the integration seamless.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">15.1. Setting Up TypeScript in a Vue Project</h3>
      <p class="text-lg text-gray-700 mb-4">
        To set up TypeScript in a Vue project, you can use the Vue CLI with TypeScript support. This setup configures the necessary dependencies and project structure to start using TypeScript with Vue components.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-bash">{{ vueCliSetupExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The Vue CLI command initializes a new Vue project with TypeScript support, setting up the appropriate configuration files and dependencies.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">15.2. Using TypeScript in Vue Components</h3>
      <p class="text-lg text-gray-700 mb-4">
        Vue components can be written using TypeScript by specifying the <code>lang="ts"</code> attribute in the <code>&lt;script&gt;</code> tag. This allows you to define props, data, methods, and computed properties with type annotations.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ vueComponentExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The example demonstrates a Vue component written in TypeScript, defining props with types, data properties, and methods with type annotations.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">15.3. TypeScript Decorators in Vue</h3>
      <p class="text-lg text-gray-700 mb-4">
        Decorators provide a way to add annotations and a meta-programming syntax for class declarations and members. Vue Class Components use decorators to define components, props, and other options in a more declarative manner.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ decoratorsExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The example shows how to use decorators like <code>@Component</code> and <code>@Prop</code> to define a Vue component and its props using TypeScript.
      </p>
      
      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A screenshot of a Vue component written in TypeScript, highlighting the <code>lang="ts"</code> attribute and type annotations.
        Alt Text: "Screenshot of a Vue component integrated with TypeScript showing type annotations."
      -->
    </section>

    <!-- Section 16: Practical Examples -->
    <section id="practical-examples" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">16. Practical Examples</h2>
      <p class="text-lg text-gray-700 mb-4">
        Applying TypeScript in real-world scenarios solidifies understanding and showcases its practical utility in enhancing JavaScript projects.
      </p>
      
      <!-- Example 1: Defining Interfaces -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">16.1. Defining Interfaces</h3>
        <p class="text-lg text-gray-700 mb-4">
          Interfaces define the structure of objects, ensuring that they adhere to specific contracts. This is particularly useful for enforcing consistency across different parts of an application.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ interfaceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>User</code> interface specifies the structure that any user object must follow, enforcing type safety when creating or manipulating user data.
        </p>
      </div>
      
      <!-- Example 2: Using Generics -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">16.2. Using Generics</h3>
        <p class="text-lg text-gray-700 mb-4">
          Generics allow you to create reusable components and functions that work with a variety of data types, enhancing code flexibility and type safety.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ genericsExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>identity</code> function uses a generic type <code>T</code> to accept and return a value of any type, ensuring type consistency.
        </p>
      </div>
      
      <!-- Example 3: Classes and Inheritance -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">16.3. Classes and Inheritance</h3>
        <p class="text-lg text-gray-700 mb-4">
          TypeScript's class syntax provides a more structured and object-oriented approach to building applications. Inheritance allows classes to extend other classes, promoting code reuse and hierarchy.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ classesInheritanceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Animal</code> class serves as a base class, while the <code>Dog</code> class extends <code>Animal</code>, inheriting its properties and methods while adding its own.
        </p>
      </div>
      
      <!-- Example 4: Functions with Type Annotations -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">16.4. Functions with Type Annotations</h3>
        <p class="text-lg text-gray-700 mb-4">
          Type annotations in functions enhance clarity and prevent errors by specifying the types of parameters and return values.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ functionsTypeAnnotationsExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>add</code> function explicitly states that it accepts two <code>number</code> parameters and returns a <code>number</code>, ensuring type safety.
        </p>
      </div>
      
      <!-- Example 5: Using Enums -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">16.5. Using Enums</h3>
        <p class="text-lg text-gray-700 mb-4">
          Enums allow you to define a set of named constants, improving code readability and reducing the likelihood of errors caused by using arbitrary values.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ enumsExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Status</code> enum defines a set of possible states, making the code more descriptive and less error-prone.
        </p>
      </div>
      
      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A flowchart or diagram showing how TypeScript interfaces, generics, classes, and enums interact within a project.
        Alt Text: "Diagram illustrating the interaction of TypeScript interfaces, generics, classes, and enums."
      -->
    </section>

    <!-- Section 17: Best Practices -->
    <section id="best-practices" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">17. Best Practices</h2>
      <p class="text-lg text-gray-700 mb-4">
        Adhering to best practices ensures that your TypeScript code is clean, efficient, and maintainable. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Use <code>const</code> by Default:</strong> Prefer using <code>const</code> for variables that do not change to enhance code safety and readability.</li>
        <li><strong>Leverage Type Inference:</strong> Let TypeScript infer types where possible to reduce verbosity and improve maintainability.</li>
        <li><strong>Define Interfaces and Types:</strong> Use interfaces and type aliases to define clear contracts for your objects and functions.</li>
        <li><strong>Avoid Using <code>any</code>:</strong> The <code>any</code> type disables type checking. Use it sparingly and only when necessary.</li>
        <li><strong>Consistent Naming Conventions:</strong> Adopt consistent naming conventions for types, interfaces, classes, and variables to enhance code clarity.</li>
        <li><strong>Use Generics for Reusability:</strong> Implement generics to create flexible and reusable components and functions.</li>
        <li><strong>Organize Code with Modules:</strong> Structure your project using modules to promote code reuse and separation of concerns.</li>
        <li><strong>Enable Strict Mode:</strong> Activate TypeScript's strict mode to enforce stricter type checking and catch potential errors early.</li>
      </ul>
    </section>

    <!-- Section 18: Common Mistakes -->
    <section id="common-mistakes" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">18. Common Mistakes</h2>
      <p class="text-lg text-gray-700 mb-4">
        Being aware of common pitfalls helps you avoid errors and write more robust TypeScript code. Here are some frequent mistakes developers make:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Overusing <code>any</code>:</strong> Relying too much on the <code>any</code> type undermines TypeScript's type safety benefits.</li>
        <li><strong>Ignoring Type Inference:</strong> Explicitly specifying types when TypeScript can infer them can lead to unnecessary verbosity.</li>
        <li><strong>Misusing Interfaces and Types:</strong> Not understanding when to use interfaces versus type aliases can lead to confusion and code inconsistencies.</li>
        <li><strong>Not Enabling Strict Mode:</strong> Skipping strict mode can allow subtle bugs to creep into your codebase.</li>
        <li><strong>Incorrectly Using Type Assertions:</strong> Overusing type assertions can bypass TypeScript's type checks, leading to potential runtime errors.</li>
        <li><strong>Forgetting to Export and Import:</strong> Missing export/import statements can cause modules not to work as intended.</li>
        <li><strong>Not Utilizing Generics Properly:</strong> Poor implementation of generics can reduce code reusability and type safety.</li>
        <li><strong>Neglecting to Update Type Definitions:</strong> Failing to keep type definitions up-to-date can lead to type mismatches and errors.</li>
      </ul>
    </section>

    <!-- Section 19: Summary -->
    <section id="summary" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">19. Summary</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript is a powerful tool that enhances JavaScript by introducing static typing and advanced features, making it easier to write robust, maintainable, and scalable code. By understanding and leveraging TypeScript's core concepts—such as type annotations, interfaces, classes, generics, and modules—you can significantly improve your development workflow and code quality.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Integrating TypeScript with frameworks like Vue.js further amplifies its benefits, providing a seamless and type-safe development experience. While there is a learning curve associated with adopting TypeScript, the long-term advantages in terms of error reduction, improved tooling, and enhanced code maintainability make it a worthwhile investment for modern JavaScript projects.
      </p>
      <p class="text-lg text-gray-700">
        Embrace TypeScript to unlock the full potential of your JavaScript applications, ensuring they are robust, scalable, and maintainable for the future.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TypeScriptBasics',
  data() {
    return {
      // Section 13: Type Assertions
      angleBracketAssertionExample: `// Angle-Bracket Syntax for Type Assertions
const value = <HTMLInputElement>document.getElementById('myInput');
value.value = 'Hello, TypeScript!';`,

      asSyntaxAssertionExample: `// 'as' Syntax for Type Assertions
const value = document.getElementById('myInput') as HTMLInputElement;
value.value = 'Hello, TypeScript!';`,

      nonNullAssertionExample: `// Non-null Assertion Operator
const value = document.getElementById('myInput')!.value;
console.log(value);`,

      // Section 14: Modules: Import and Export
      exportExample: `// greetModule.ts
export interface User {
  name: string;
  age: number;
}

export function greet(user: User): string {
  return \`Hello, \${user.name}!\`;
}`,

      importExample: `// app.ts
import { greet, User } from './greetModule';

const user: User = { name: 'Alice', age: 30 };
console.log(greet(user)); // Output: Hello, Alice!`,

      exportDefaultExample: `// logger.ts
export default function log(message: string): void {
  console.log(message);
}`,

      importDefaultExample: `// app.ts
import log from './logger';

log('This is a default export example.'); // Output: This is a default export example.`,

      reExportExample: `// index.ts
export * from './math';
export * from './logger';`,

      // Section 15: Integration with Vue.js
      vueCliSetupExample: `// Using Vue CLI to set up a TypeScript project
vue create my-vue-app
// Select TypeScript in the preset options
// Follow the prompts to complete the setup`,

      vueComponentExample: `<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="increment">Increment</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Counter',
  props: {
    initialCount: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      count: this.initialCount as number
    };
  },
  methods: {
    increment(): void {
      this.count += 1;
    }
  },
  computed: {
    message(): string {
      return \`Current count is \${this.count}\`;
    }
  }
});
</script>

<style scoped>
button {
  padding: 0.5em 1em;
  margin-top: 1em;
}
</style>`,

      decoratorsExample: `// Using TypeScript Decorators in Vue
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MyComponent extends Vue {
  @Prop({ type: String, required: true }) readonly name!: string;

  greet(): void {
    console.log(\`Hello, \${this.name}!\`);
  }
}`,

      // Section 16: Practical Examples
      // Example 1: Defining Interfaces
      interfaceExample: `// Defining an Interface
interface User {
  id: number;
  name: string;
  email: string;
}

function getUserInfo(user: User): void {
  console.log(\`User ID: \${user.id}\`);
  console.log(\`Name: \${user.name}\`);
  console.log(\`Email: \${user.email}\`);
}

const user: User = {
  id: 1,
  name: 'Bob',
  email: 'bob@example.com'
};

getUserInfo(user);`,

      // Example 2: Using Generics
      genericsExample: `// Using Generics in a Function
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity<string>('Hello, Generics!');
console.log(num); // Output: 42
console.log(str); // Output: Hello, Generics!`,

      // Example 3: Classes and Inheritance
      classesInheritanceExample: `// Classes and Inheritance in TypeScript
class Animal {
  constructor(public name: string) {}
  
  move(distance: number = 0): void {
    console.log(\`\${this.name} moved \${distance} meters.\`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog('Rex');
dog.bark(); // Output: Woof! Woof!
dog.move(10); // Output: Rex moved 10 meters.`,

      // Example 4: Functions with Type Annotations
      functionsTypeAnnotationsExample: `// Functions with Type Annotations
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(5, 3);
console.log(sum); // Output: 8`,

      // Example 5: Using Enums
      enumsExample: `// Using Enums in TypeScript
enum Status {
  Active,
  Inactive,
  Pending
}

function getStatus(status: Status): string {
  switch(status) {
    case Status.Active:
      return 'Active';
    case Status.Inactive:
      return 'Inactive';
    case Status.Pending:
      return 'Pending';
    default:
      return 'Unknown';
  }
}

console.log(getStatus(Status.Active)); // Output: Active
console.log(getStatus(Status.Pending)); // Output: Pending`,

      // Suggested Image for Practical Examples
      // 
      // Image Suggestion: A flowchart illustrating how interfaces, generics, classes, and enums are used together in a TypeScript project.
      // Alt Text: "Flowchart demonstrating the use of interfaces, generics, classes, and enums in TypeScript."
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1000px;
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