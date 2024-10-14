<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-yellow-500 rounded-t-xl p-4">
      <img src="/icons/javascript.svg" alt="JavaScript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">ES6 JavaScript</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Table of Contents -->
      <nav class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><a href="#introduction" class="underline text-blue-800">Introduction to ES6</a></li>
          <li><a href="#let-const" class="underline text-blue-800">Let and Const</a></li>
          <li><a href="#arrow-functions" class="underline text-blue-800">Arrow Functions</a></li>
          <li><a href="#template-literals" class="underline text-blue-800">Template Literals</a></li>
          <li><a href="#destructuring" class="underline text-blue-800">Destructuring Assignment</a></li>
          <li><a href="#spread-rest" class="underline text-blue-800">Spread and Rest Operators</a></li>
          <li><a href="#classes" class="underline text-blue-800">Classes</a></li>
          <li><a href="#modules" class="underline text-blue-800">Modules</a></li>
          <li><a href="#promises" class="underline text-blue-800">Promises</a></li>
          <li><a href="#default-parameters" class="underline text-blue-800">Default Parameters</a></li>
          <li><a href="#enhanced-objects" class="underline text-blue-800">Enhanced Object Literals</a></li>
          <li><a href="#iterators-generators" class="underline text-blue-800">Iterators and Generators</a></li>
          <li><a href="#symbols" class="underline text-blue-800">Symbols</a></li>
          <li><a href="#best-practices" class="underline text-blue-800">Best Practices</a></li>
          <li><a href="#common-mistakes" class="underline text-blue-800">Common Mistakes</a></li>
          <li><a href="#summary" class="underline text-blue-800">Summary</a></li>
        </ul>
      </nav>

      <!-- Content Sections -->
      <!-- Introduction to ES6 -->
      <section id="introduction" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Introduction to ES6</h2>
        <p class="text-lg text-gray-700 mb-4">
          ECMAScript 2015, commonly known as ES6, is a significant update to JavaScript that introduced numerous features to enhance the language's capabilities, improve code readability, and facilitate modern development practices.
        </p>
        <p class="text-lg text-gray-700">
          <strong>Why ES6?</strong> Before ES6, JavaScript lacked many features that developers needed for large-scale applications, such as classes, modules, and enhanced object literals. ES6 addressed these gaps, making JavaScript more powerful and easier to work with.
        </p>
      </section>

      <!-- Let and Const -->
      <section id="let-const" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Let and Const</h2>
        <p class="text-lg text-gray-700 mb-4">
          Prior to ES6, JavaScript only had <code>var</code> for variable declarations. ES6 introduced <code>let</code> and <code>const</code> to provide block-scoped variables, enhancing code predictability and reducing bugs.
        </p>

        <!-- Let -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Let</h3>
          <p class="text-lg text-gray-700 mb-4">
            <code>let</code> allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ letExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The variable <code>message</code> is declared using <code>let</code> inside the <code>if</code> block, making it inaccessible outside the block.
          </p>
        </div>

        <!-- Const -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Const</h3>
          <p class="text-lg text-gray-700 mb-4">
            <code>const</code> is used to declare variables that are read-only. Once a <code>const</code> variable is assigned, it cannot be reassigned.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ constExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> Attempting to reassign a <code>const</code> variable results in a TypeError. However, if the <code>const</code> holds an object, the object's properties can still be modified.
          </p>
        </div>

        <!-- When to Use Let and Const -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">When to Use Let and Const</h3>
          <ul class="list-disc list-inside text-lg text-gray-700">
            <li><strong>Use <code>const</code> by default:</strong> If a variable's value should not change, declare it with <code>const</code>.</li>
            <li><strong>Use <code>let</code> when reassignment is needed:</strong> For variables that will change over time, use <code>let</code>.</li>
            <li><strong>Avoid <code>var</code>:</strong> Prefer <code>let</code> and <code>const</code> to avoid scope-related bugs.</li>
          </ul>
        </div>
      </section>

      <!-- Arrow Functions -->
      <section id="arrow-functions" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Arrow Functions</h2>
        <p class="text-lg text-gray-700 mb-4">
          Arrow functions provide a concise syntax for writing functions in JavaScript. They also inherit the <code>this</code> value from their enclosing context, which helps avoid common pitfalls related to <code>this</code>.
        </p>

        <!-- Basic Arrow Function Example -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Basic Arrow Function Syntax</h3>
          <p class="text-lg text-gray-700 mb-4">
            Arrow functions offer a shorter syntax compared to traditional function expressions.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ arrowFunctionExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The arrow function <code>add</code> takes two parameters and returns their sum. Notice the omission of the <code>function</code> keyword and the use of the <code>=></code> syntax.
          </p>
        </div>

        <!-- Arrow Function with Implicit Return -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Arrow Function with Implicit Return</h3>
          <p class="text-lg text-gray-700 mb-4">
            If the function body contains only a single expression, you can omit the curly braces and the <code>return</code> statement.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ arrowFunctionImplicitReturn }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The arrow function <code>multiply</code> implicitly returns the product of <code>a</code> and <code>b</code> without needing the <code>return</code> keyword.
          </p>
        </div>

        <!-- Arrow Functions and This -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Arrow Functions and <code>this</code></h3>
          <p class="text-lg text-gray-700 mb-4">
            Arrow functions do not have their own <code>this</code> binding. Instead, they inherit <code>this</code> from the parent scope.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ arrowFunctionThis }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> In the object <code>counter</code>, the arrow function used in <code>setTimeout</code> inherits <code>this</code> from the surrounding context, correctly accessing <code>this.count</code>.
          </p>
        </div>
      </section>

      <!-- Template Literals -->
      <section id="template-literals" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Template Literals</h2>
        <p class="text-lg text-gray-700 mb-4">
          Template literals provide an easy way to create multiline strings and perform string interpolation. They enhance readability and simplify dynamic string creation.
        </p>

        <!-- Basic Template Literal Example -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Basic Template Literal Usage</h3>
          <p class="text-lg text-gray-700 mb-4">
            Template literals are enclosed by backticks (<code>`</code>) instead of single or double quotes.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ templateLiteralExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The variables <code>name</code> and <code>age</code> are embedded directly within the string using the <code>${}</code> syntax.
          </p>
        </div>

        <!-- Multiline Strings -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Multiline Strings</h3>
          <p class="text-lg text-gray-700 mb-4">
            Template literals allow for easy creation of multiline strings without the need for concatenation or escape characters.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ multilineStringExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The string spans multiple lines, preserving the line breaks as they appear in the code.
          </p>
        </div>

        <!-- Expression Interpolation -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Expression Interpolation</h3>
          <p class="text-lg text-gray-700 mb-4">
            You can embed any JavaScript expression within a template literal.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ expressionInterpolationExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The expression <code>${a + b}</code> is evaluated and its result is embedded in the string.
          </p>
        </div>
      </section>

      <!-- Destructuring Assignment -->
      <section id="destructuring" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Destructuring Assignment</h2>
        <p class="text-lg text-gray-700 mb-4">
          Destructuring allows you to extract values from arrays or properties from objects into distinct variables. It simplifies the process of working with complex data structures.
        </p>

        <!-- Object Destructuring -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Object Destructuring</h3>
          <p class="text-lg text-gray-700 mb-4">
            Extract specific properties from an object into variables.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ objectDestructuringExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The properties <code>name</code> and <code>age</code> are extracted from the <code>person</code> object into separate variables.
          </p>
        </div>

        <!-- Array Destructuring -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Array Destructuring</h3>
          <p class="text-lg text-gray-700 mb-4">
            Extract values from an array into variables.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ arrayDestructuringExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The first and second elements of the <code>colors</code> array are extracted into <code>firstColor</code> and <code>secondColor</code> variables.
          </p>
        </div>

        <!-- Nested Destructuring -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Nested Destructuring</h3>
          <p class="text-lg text-gray-700 mb-4">
            Destructure nested objects and arrays.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ nestedDestructuringExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> Nested properties <code>street</code> and <code>city</code> are extracted from the <code>address</code> object within <code>person</code>.
          </p>
        </div>
      </section>

      <!-- Spread and Rest Operators -->
      <section id="spread-rest" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Spread and Rest Operators</h2>
        <p class="text-lg text-gray-700 mb-4">
          The spread (<code>...</code>) and rest (<code>...</code>) operators provide a concise way to expand and collect elements in arrays and objects. They enhance flexibility in function parameters, object manipulation, and array operations.
        </p>

        <!-- Spread Operator -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Spread Operator</h3>
          <p class="text-lg text-gray-700 mb-4">
            The spread operator expands elements of an iterable (like an array) or properties of an object.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ spreadOperatorExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The spread operator is used to copy elements from <code>arr1</code> and <code>arr2</code> into a new array <code>combined</code>.
          </p>
        </div>

        <!-- Rest Operator -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Rest Operator</h3>
          <p class="text-lg text-gray-700 mb-4">
            The rest operator collects multiple elements into a single array.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ restOperatorExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The rest operator collects all remaining elements after the first two into the <code>others</code> array.
          </p>
        </div>

        <!-- Spread with Objects -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Spread with Objects</h3>
          <p class="text-lg text-gray-700 mb-4">
            The spread operator can also be used to copy and merge objects.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ spreadWithObjectsExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>merged</code> object combines properties from <code>obj1</code> and <code>obj2</code>.
          </p>
        </div>
      </section>

      <!-- Classes -->
      <section id="classes" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Classes</h2>
        <p class="text-lg text-gray-700 mb-4">
          ES6 introduced a more intuitive syntax for creating objects and handling inheritance through classes. While JavaScript remains prototype-based, classes provide a clearer and more familiar structure for developers from class-based languages.
        </p>

        <!-- Basic Class Example -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Basic Class Syntax</h3>
          <p class="text-lg text-gray-700 mb-4">
            Classes in ES6 provide a blueprint for creating objects with predefined properties and methods.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ basicClassExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>Person</code> class defines a constructor to initialize object properties and a method <code>greet</code> to display a greeting message.
          </p>
        </div>

        <!-- Inheritance with Classes -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Inheritance with Classes</h3>
          <p class="text-lg text-gray-700 mb-4">
            Classes can inherit from other classes, allowing for hierarchical and reusable code structures.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ inheritanceClassExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>Student</code> class extends the <code>Person</code> class, inheriting its properties and methods while adding new ones specific to students.
          </p>
        </div>

        <!-- Static Methods -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Static Methods</h3>
          <p class="text-lg text-gray-700 mb-4">
            Static methods belong to the class itself rather than any instance, useful for utility functions.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ staticMethodExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>Person</code> class has a static method <code>isAdult</code> that determines if a person is an adult based on age.
          </p>
        </div>
      </section>

      <!-- Modules -->
      <section id="modules" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Modules</h2>
        <p class="text-lg text-gray-700 mb-4">
          ES6 modules allow you to organize your code into separate files, promoting reusability and maintainability. Modules can export variables, functions, classes, etc., which can then be imported into other modules.
        </p>

        <!-- Export and Import -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Export and Import</h3>
          <p class="text-lg text-gray-700 mb-4">
            Use <code>export</code> to expose code from a module and <code>import</code> to bring it into another module.
          </p>
          <div class="flex flex-col md:flex-row gap-4 mb-4">
            <!-- Export Example -->
            <div class="bg-gray-800 text-white rounded-lg p-4 overflow-auto flex-1">
              <pre><code class="language-javascript">{{ exportExample }}</code></pre>
            </div>
            <!-- Import Example -->
            <div class="bg-gray-800 text-white rounded-lg p-4 overflow-auto flex-1">
              <pre><code class="language-javascript">{{ importExample }}</code></pre>
            </div>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>math.js</code> module exports a function <code>add</code>, which is then imported and used in another file.
          </p>
        </div>

        <!-- Default Exports -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Default Exports</h3>
          <p class="text-lg text-gray-700 mb-4">
            A module can have one default export, which can be a function, class, or object.
          </p>
          <div class="flex flex-col md:flex-row gap-4 mb-4">
            <!-- Default Export Example -->
            <div class="bg-gray-800 text-white rounded-lg p-4 overflow-auto flex-1">
              <pre><code class="language-javascript">{{ defaultExportExample }}</code></pre>
            </div>
            <!-- Import Default Export Example -->
            <div class="bg-gray-800 text-white rounded-lg p-4 overflow-auto flex-1">
              <pre><code class="language-javascript">{{ importDefaultExportExample }}</code></pre>
            </div>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>logger.js</code> module exports a default function, which can be imported without curly braces.
          </p>
        </div>
      </section>

      <!-- Promises -->
      <section id="promises" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Promises</h2>
        <p class="text-lg text-gray-700 mb-4">
          Promises provide a cleaner and more manageable way to handle asynchronous operations compared to traditional callback functions. They represent a value that may be available now, later, or never.
        </p>

        <!-- Basic Promise Example -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Basic Promise Syntax</h3>
          <p class="text-lg text-gray-700 mb-4">
            Create a promise that resolves after a certain period.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ promiseExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The promise resolves with the message "Operation Successful!" after 2 seconds. The <code>.then()</code> method handles the resolved value.
          </p>
        </div>

        <!-- Chaining Promises -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Chaining Promises</h3>
          <p class="text-lg text-gray-700 mb-4">
            Chain multiple asynchronous operations in a readable manner.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ promiseChainingExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> Each <code>.then()</code> returns a new promise, allowing for sequential asynchronous operations.
          </p>
        </div>

        <!-- Handling Errors with Promises -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Handling Errors with Promises</h3>
          <p class="text-lg text-gray-700 mb-4">
            Use <code>.catch()</code> to handle errors in promise chains.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ promiseErrorHandlingExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> If any promise in the chain is rejected, the <code>.catch()</code> method handles the error.
          </p>
        </div>
      </section>

      <!-- Default Parameters -->
      <section id="default-parameters" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Default Parameters</h2>
        <p class="text-lg text-gray-700 mb-4">
          Default parameters allow you to initialize function parameters with default values if no value or <code>undefined</code> is passed.
        </p>

        <!-- Basic Default Parameters Example -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Basic Default Parameters Usage</h3>
          <p class="text-lg text-gray-700 mb-4">
            Assign default values to function parameters.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ defaultParametersExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> If <code>greeting</code> is not provided, it defaults to "Hello".
          </p>
        </div>

        <!-- Default Parameters with Expressions -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Default Parameters with Expressions</h3>
          <p class="text-lg text-gray-700 mb-4">
            Use expressions to define default parameter values.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ defaultParametersExpressionExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The default value for <code>initialCount</code> is dynamically calculated based on the length of the <code>items</code> array.
          </p>
        </div>
      </section>

      <!-- Enhanced Object Literals -->
      <section id="enhanced-objects" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Enhanced Object Literals</h2>
        <p class="text-lg text-gray-700 mb-4">
          ES6 introduces several enhancements to object literals, making it easier to create objects with dynamic properties, concise methods, and more.
        </p>

        <!-- Property Shorthand -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Property Shorthand</h3>
          <p class="text-lg text-gray-700 mb-4">
            When property names are the same as variable names, you can use shorthand syntax.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ propertyShorthandExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> Instead of writing <code>name: name</code>, you can simply write <code>name</code>.
          </p>
        </div>

        <!-- Method Definitions -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Method Definitions</h3>
          <p class="text-lg text-gray-700 mb-4">
            Define methods in objects without the <code>function</code> keyword.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ methodDefinitionExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>greet</code> method is defined using the concise method syntax.
          </p>
        </div>

        <!-- Computed Property Names -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Computed Property Names</h3>
          <p class="text-lg text-gray-700 mb-4">
            Use expressions to define dynamic property names within objects.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ computedPropertyExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The property name is determined by the value of <code>propName</code>.
          </p>
        </div>
      </section>

      <!-- Iterators and Generators -->
      <section id="iterators-generators" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Iterators and Generators</h2>
        <p class="text-lg text-gray-700 mb-4">
          Iterators and generators provide powerful ways to traverse and generate sequences of values in JavaScript.
        </p>

        <!-- Iterators -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Iterators</h3>
          <p class="text-lg text-gray-700 mb-4">
            Iterators allow you to define custom iteration behavior for objects.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ iteratorExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>myIterable</code> object implements the <code>[Symbol.iterator]</code> method, allowing it to be iterated over with a <code>for...of</code> loop.
          </p>
        </div>

        <!-- Generators -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Generators</h3>
          <p class="text-lg text-gray-700 mb-4">
            Generators are functions that can be paused and resumed, enabling the generation of sequences of values on the fly.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ generatorExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>numberGenerator</code> function yields numbers from 1 to 5, allowing iteration over generated values.
          </p>
        </div>
      </section>

      <!-- Symbols -->
      <section id="symbols" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Symbols</h2>
        <p class="text-lg text-gray-700 mb-4">
          Symbols are unique and immutable primitive values that can be used as identifiers for object properties, ensuring property keys are unique and avoiding name collisions.
        </p>

        <!-- Basic Symbol Example -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Basic Symbol Usage</h3>
          <p class="text-lg text-gray-700 mb-4">
            Create symbols and use them as object property keys.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ symbolExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> Each symbol is unique, even if they have the same description.
          </p>
        </div>

        <!-- Symbols and Object Properties -->
        <div class="mb-6">
          <h3 class="text-2xl font-semibold mb-2">Symbols as Property Keys</h3>
          <p class="text-lg text-gray-700 mb-4">
            Use symbols to define properties that won't clash with other property names.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ symbolPropertyExample }}</code></pre>
          </div>
          <p class="text-lg text-gray-700">
            <strong>Explanation:</strong> The <code>uniqueKey</code> symbol ensures that the property is unique and doesn't interfere with other properties.
          </p>
        </div>
      </section>

      <!-- Best Practices -->
      <section id="best-practices" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
        <p class="text-lg text-gray-700 mb-4">
          Adhering to best practices ensures your code is clean, efficient, and maintainable.
        </p>

        <ul class="list-disc list-inside text-lg text-gray-700">
          <li><strong>Use <code>const</code> by default:</strong> Only use <code>let</code> when you need to reassign variables.</li>
          <li><strong>Leverage Arrow Functions:</strong> Use arrow functions for concise syntax and to avoid issues with <code>this</code>.</li>
          <li><strong>Prefer Template Literals:</strong> Use template literals for easier string manipulation and readability.</li>
          <li><strong>Embrace Destructuring:</strong> Use destructuring to extract data from objects and arrays cleanly.</li>
          <li><strong>Utilize Spread and Rest:</strong> Use spread for copying and merging and rest for function parameters.</li>
          <li><strong>Implement Classes Wisely:</strong> Use classes to organize related functionalities and promote reusability.</li>
          <li><strong>Organize Code with Modules:</strong> Split your code into modules for better maintainability and scope management.</li>
          <li><strong>Handle Asynchronous Operations with Promises:</strong> Use promises for cleaner asynchronous code.</li>
        </ul>
      </section>

      <!-- Common Mistakes -->
      <section id="common-mistakes" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Mistakes</h2>
        <p class="text-lg text-gray-700 mb-4">
          Being aware of common mistakes can help you avoid pitfalls and write more robust code.
        </p>

        <ul class="list-disc list-inside text-lg text-gray-700">
          <li><strong>Misusing <code>this</code> in Arrow Functions:</strong> Remember that arrow functions do not have their own <code>this</code>.</li>
          <li><strong>Overusing <code>var</code>:</strong> Prefer <code>let</code> and <code>const</code> to avoid scope-related bugs.</li>
          <li><strong>Not Handling Promise Rejections:</strong> Always include <code>.catch()</code> to handle errors in promise chains.</li>
          <li><strong>Ignoring Module Load Order:</strong> Ensure that modules are imported in the correct order to avoid undefined dependencies.</li>
          <li><strong>Shadowing Variables:</strong> Avoid declaring variables with the same name in overlapping scopes, which can lead to unexpected behaviors.</li>
        </ul>
      </section>

      <!-- Summary -->
      <section id="summary" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Summary</h2>
        <p class="text-lg text-gray-700 mb-4">
          ES6 introduced a wealth of features that have significantly enhanced JavaScript's capabilities, making it more powerful and easier to write maintainable code. Understanding and effectively utilizing these features is essential for modern JavaScript development.
        </p>
        <p class="text-lg text-gray-700">
          By mastering ES6 features such as <code>let</code>/<code>const</code>, arrow functions, template literals, destructuring, spread/rest operators, classes, modules, promises, and more, you can write cleaner, more efficient, and more robust JavaScript code.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ES6Guide',
  data() {
    return {
      // Let and Const
      letExample: `function greet() {
  let message = 'Hello, World!';
  if (true) {
    let message = 'Hello, Block!';
    console.log(message); // Output: Hello, Block!
  }
  console.log(message); // Output: Hello, World!
}

greet();`,

      constExample: `const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Attempting to reassign a const variable
// PI = 3.14; // TypeError: Assignment to constant variable.

// However, const objects can have their properties modified
const person = { name: 'Alice', age: 25 };
person.age = 26;
console.log(person); // Output: { name: 'Alice', age: 26 }`,

      // Arrow Functions
      arrowFunctionExample: `const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); // Output: 8`,

      arrowFunctionImplicitReturn: `const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // Output: 20`,

      arrowFunctionThis: `const counter = {
  count: 0,
  incrementAfterDelay() {
    setTimeout(() => {
      this.count++;
      console.log(this.count); // Output: 1
    }, 1000);
  }
};

counter.incrementAfterDelay();`,

      // Template Literals
      templateLiteralExample: `const name = 'John';
const age = 30;
const message = \`My name is \${name} and I am \${age} years old.\`;
console.log(message); // Output: My name is John and I am 30 years old.`,

      multilineStringExample: `const multiline = \`This is a string
that spans multiple
lines.\`;
console.log(multiline);
/*
Output:
This is a string
that spans multiple
lines.
*/`,

      expressionInterpolationExample: `const a = 10;
const b = 20;
const result = \`The sum of \${a} and \${b} is \${a + b}.\`;
console.log(result); // Output: The sum of 10 and 20 is 30.`,

      // Destructuring Assignment
      objectDestructuringExample: `const person = {
  name: 'Emma',
  age: 28,
  city: 'New York'
};

const { name, age, city } = person;
console.log(name); // Output: Emma
console.log(age);  // Output: 28
console.log(city); // Output: New York`,

      arrayDestructuringExample: `const colors = ['red', 'green', 'blue', 'yellow'];

const [firstColor, secondColor, ...otherColors] = colors;
console.log(firstColor);  // Output: red
console.log(secondColor); // Output: green
console.log(otherColors); // Output: ['blue', 'yellow']`,

      nestedDestructuringExample: `const person = {
  name: 'Liam',
  age: 32,
  address: {
    street: '123 Main St',
    city: 'Los Angeles',
    country: 'USA'
  }
};

const { name, address: { street, city } } = person;
console.log(name);   // Output: Liam
console.log(street); // Output: 123 Main St
console.log(city);   // Output: Los Angeles`,

      // Spread and Rest Operators
      spreadOperatorExample: `const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]`,

      restOperatorExample: `function sum(a, b, ...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, a + b);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15`,

      spreadWithObjectsExample: `const obj1 = { name: 'Alice', age: 25 };
const obj2 = { city: 'New York', occupation: 'Engineer' };
const merged = { ...obj1, ...obj2 };
console.log(merged);
// Output: { name: 'Alice', age: 25, city: 'New York', occupation: 'Engineer' }`,

      // Classes
      basicClassExample: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hello, my name is \${this.name}.\`;
  }
}

const person1 = new Person('Sophia', 30);
console.log(person1.greet()); // Output: Hello, my name is Sophia.`,

      inheritanceClassExample: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hello, my name is \${this.name}.\`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    return \`\${this.name} is studying \${this.major}.\`;
  }
}

const student1 = new Student('Daniel', 22, 'Computer Science');
console.log(student1.greet()); // Output: Hello, my name is Daniel.
console.log(student1.study()); // Output: Daniel is studying Computer Science.`,

      staticMethodExample: `class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static isAdult(age) {
    return age >= 18;
  }
}

console.log(Person.isAdult(20)); // Output: true
console.log(Person.isAdult(16)); // Output: false`,

      // Modules
      exportExample: `// math.js
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;`,

      importExample: `// main.js
import { add, PI } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(PI);        // Output: 3.14159`,

      defaultExportExample: `// logger.js
export default function log(message) {
  console.log(message);
}`,

      importDefaultExportExample: `// main.js
import log from './logger.js';

log('This is a default export example.'); // Output: This is a default export example.`,

      // Promises
      promiseExample: `const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Operation Successful!');
  }, 2000);
});

myPromise.then((message) => {
  console.log(message); // Output after 2 seconds: Operation Successful!
});`,

      promiseChainingExample: `const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
};

fetchData()
  .then((message) => {
    console.log(message); // Output: Data fetched
    return 'Processing data';
  })
  .then((message) => {
    console.log(message); // Output: Processing data
    return 'Data processed';
  })
  .then((message) => {
    console.log(message); // Output: Data processed
  });`,

      promiseErrorHandlingExample: `const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Fetch Error');
    }, 1000);
  });
};

fetchData()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error); // Output after 1 second: Fetch Error
  });`,

      // Default Parameters
      defaultParametersExample: `function greet(name = 'Guest', greeting = 'Hello') {
  console.log(\`\${greeting}, \${name}!\`);
}

greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!
greet('Bob', 'Hi'); // Output: Hi, Bob!`,

      defaultParametersExpressionExample: `function initializeCount(initialCount = items.length) {
  console.log(\`Initial Count: \${initialCount}\`);
}

const items = ['apple', 'banana', 'cherry'];
initializeCount(); // Output: Initial Count: 3
initializeCount(10); // Output: Initial Count: 10`,

      // Enhanced Object Literals
      propertyShorthandExample: `const name = 'Olivia';
const age = 29;

const person = { name, age };
console.log(person); // Output: { name: 'Olivia', age: 29 }`,

      methodDefinitionExample: `const person = {
  name: 'Noah',
  age: 34,
  greet() {
    return \`Hi, I'm \${this.name} and I'm \${this.age} years old.\`;
  }
};

console.log(person.greet()); // Output: Hi, I'm Noah and I'm 34 years old.`,

      computedPropertyExample: `const propName = 'score';
const player = {
  name: 'Emma',
  [propName]: 42
};

console.log(player.score); // Output: 42`,

      // Iterators and Generators
      iteratorExample: `const myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

for (const value of myIterable) {
  console.log(value);
}
// Output:
// 1
// 2
// 3`,

      generatorExample: `function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // Output: 1
console.log(gen.next().value); // Output: 2
console.log(gen.next().value); // Output: 3
console.log(gen.next().done);  // Output: true`,

      // Symbols
      symbolExample: `const sym1 = Symbol('unique');
const sym2 = Symbol('unique');

console.log(sym1 === sym2); // Output: false`,

      symbolPropertyExample: `const uniqueKey = Symbol('id');

const user = {
  name: 'Lily',
  [uniqueKey]: 12345
};

console.log(user[uniqueKey]); // Output: 12345
console.log(Object.keys(user)); // Output: ['name']
console.log(Object.getOwnPropertySymbols(user)); // Output: [Symbol(id)]`,
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
