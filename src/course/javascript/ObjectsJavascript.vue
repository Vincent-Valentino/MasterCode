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
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#creating-objects" class="text-blue-800 underline">Creating Objects</a></li>
        <li><a href="#accessing-properties" class="text-blue-800 underline">Accessing Properties</a></li>
        <li><a href="#adding-deleting-properties" class="text-blue-800 underline">Adding and Deleting Properties</a></li>
        <li><a href="#object-methods" class="text-blue-800 underline">Object Methods</a></li>
        <li><a href="#advanced-object-features" class="text-blue-800 underline">Advanced Object Features</a></li>
        <li><a href="#object-prototypes" class="text-blue-800 underline">Object Prototypes</a></li>
        <li><a href="#object-creation-patterns" class="text-blue-800 underline">Object Creation Patterns</a></li>
        <li><a href="#practical-examples" class="text-blue-800 underline">Practical Examples</a></li>
        <li><a href="#best-practices" class="text-blue-800 underline">Best Practices</a></li>
        <li><a href="#common-mistakes" class="text-blue-800 underline">Common Mistakes</a></li>
      </ul>

      <!-- Creating Objects -->
      <section id="creating-objects" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Creating Objects</h2>
        <p class="text-base md:text-lg mb-4">
          JavaScript offers multiple ways to create objects. Each method has its own use cases and benefits. Understanding these methods allows you to choose the most appropriate one for your specific needs.
        </p>

        <!-- Object Literal Syntax -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Object Literal Syntax</h3>
          <p class="text-base md:text-lg mb-4">
            The object literal syntax is the simplest and most common way to create objects. It's concise and readable, making it ideal for creating simple objects.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ objectLiteralSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> In this example, an object `person` is created with properties `name`, `age`, and `city`.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ objectLiteralUsage }}</code></pre>
          </div>
        </div>

        <!-- new Object() Syntax -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. Using <code>new Object()</code> Syntax</h3>
          <p class="text-base md:text-lg mb-4">
            This method uses the Object constructor to create a new object. It's more verbose than the literal syntax but can be useful in certain scenarios.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ newObjectSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Here, a new object `person` is created, and properties are added individually.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ newObjectUsage }}</code></pre>
          </div>
        </div>

        <!-- Constructor Functions -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">3. Constructor Functions</h3>
          <p class="text-base md:text-lg mb-4">
            Constructor functions allow you to create multiple objects with the same structure. They serve as blueprints for creating similar objects.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ constructorFunctionSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `Person` constructor function initializes new objects with `name`, `age`, and `city` properties.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ constructorFunctionUsage }}</code></pre>
          </div>
        </div>

        <!-- Classes (ES6+) -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">4. Using Classes (ES6+)</h3>
          <p class="text-base md:text-lg mb-4">
            ES6 introduced the `class` syntax, which provides a clearer and more intuitive way to create objects and handle inheritance.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ classSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `Person` class includes a constructor for initializing properties and a method `greet` for object behavior.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ classUsage }}</code></pre>
          </div>
        </div>

        <!-- Factory Functions -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">5. Factory Functions</h3>
          <p class="text-base md:text-lg mb-4">
            Factory functions are functions that return new objects. They offer flexibility and can include private variables using closures.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ factoryFunctionSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `createPerson` factory function returns a new object with `name`, `age`, and `city` properties, along with a `greet` method.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ factoryFunctionUsage }}</code></pre>
          </div>
        </div>

        <!-- Object.create() Method -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">6. <code>Object.create()</code> Method</h3>
          <p class="text-base md:text-lg mb-4">
            The <code>Object.create()</code> method creates a new object with the specified prototype object and properties. It's useful for setting up inheritance chains.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ objectCreateSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Here, a new object `person` is created with `personPrototype` as its prototype, inheriting the `greet` method.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ objectCreateUsage }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Accessing Object Properties -->
      <section id="accessing-properties" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Accessing Object Properties</h2>
        <p class="text-base md:text-lg mb-4">
          Once an object is created, you can access its properties and methods in various ways. Understanding these methods is essential for effective object manipulation.
        </p>

        <!-- Dot Notation -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Dot Notation</h3>
          <p class="text-base md:text-lg mb-4">
            Dot notation is the most straightforward and commonly used method to access object properties. It's simple and readable but has some limitations.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ dotNotationExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Accessing the `name` property of the `person` object using dot notation.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ dotNotationUsage }}</code></pre>
          </div>
        </div>

        <!-- Bracket Notation -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. Bracket Notation</h3>
          <p class="text-base md:text-lg mb-4">
            Bracket notation allows you to access properties using strings or variables. It's especially useful when property names are dynamic or contain special characters.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ bracketNotationExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Accessing the `first-name` property using bracket notation, which is necessary because the property name contains a hyphen.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ bracketNotationUsage }}</code></pre>
          </div>
        </div>

        <!-- Accessing Nested Properties -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">3. Accessing Nested Properties</h3>
          <p class="text-base md:text-lg mb-4">
            Objects can contain other objects, allowing for complex data structures. Accessing nested properties requires chaining the access methods.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ nestedPropertiesSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Accessing the `street` property within the `address` object of the `person` object.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ nestedPropertiesUsage }}</code></pre>
          </div>
        </div>

        <!-- Dynamic Property Access -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">4. Dynamic Property Access</h3>
          <p class="text-base md:text-lg mb-4">
            You can dynamically access object properties using variables or expressions. This is particularly useful when property names are determined at runtime.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ dynamicPropertyAccessSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The property to access is determined by the value of the `prop` variable.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ dynamicPropertyAccessUsage }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Adding and Deleting Properties -->
      <section id="adding-deleting-properties" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Adding and Deleting Properties</h2>
        <p class="text-base md:text-lg mb-4">
          JavaScript objects are dynamic, allowing you to add or remove properties at any time. This flexibility is powerful but should be used judiciously to maintain code clarity.
        </p>

        <!-- Adding Properties -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Adding Properties</h3>
          <p class="text-base md:text-lg mb-4">
            You can add new properties to an existing object using either dot notation or bracket notation.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ addingPropertiesExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Adding a `city` property to the `person` object using dot notation.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ addingPropertiesUsage }}</code></pre>
          </div>
        </div>

        <!-- Deleting Properties -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. Deleting Properties</h3>
          <p class="text-base md:text-lg mb-4">
            The `delete` operator removes a property from an object. Once deleted, the property is no longer accessible.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ deletingPropertiesExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Deleting the `age` property from the `person` object.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ deletingPropertiesUsage }}</code></pre>
          </div>
        </div>

        <!-- Adding Multiple Properties -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">3. Adding Multiple Properties at Once</h3>
          <p class="text-base md:text-lg mb-4">
            You can add multiple properties to an object simultaneously by assigning them one after another or using methods like `Object.assign()`.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ addingMultiplePropertiesExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Adding `email` and `phone` properties to the `person` object using bracket notation.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ addingMultiplePropertiesUsage }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Object Methods -->
      <section id="object-methods" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Object Methods</h2>
        <p class="text-base md:text-lg mb-4">
          Methods are functions stored as object properties. They allow objects to perform actions and interact with their own data and other objects.
        </p>

        <!-- Adding Methods -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Adding Methods</h3>
          <p class="text-base md:text-lg mb-4">
            Methods can be added to objects using function expressions or arrow functions. They enable objects to encapsulate behavior.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ addingMethodsExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Adding a `greet` method to the `person` object that returns a greeting message.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ addingMethodsUsage }}</code></pre>
          </div>
        </div>

        <!-- The this Keyword -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. The <code>this</code> Keyword</h3>
          <p class="text-base md:text-lg mb-4">
            The <code>this</code> keyword refers to the current object context within a method. It allows methods to access and manipulate the object's properties.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ thisKeywordExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `greet` method uses `this` to access the object's `name` and `age` properties.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ thisKeywordUsage }}</code></pre>
          </div>
        </div>

        <!-- Method Shorthand (ES6+) -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">3. Method Shorthand (ES6+)</h3>
          <p class="text-base md:text-lg mb-4">
            ES6 introduced a shorthand syntax for defining methods within objects, making the code more concise.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ methodShorthandSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `greet` method is defined using the ES6 shorthand, omitting the `function` keyword.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ methodShorthandUsage }}</code></pre>
          </div>
        </div>

        <!-- Arrow Functions as Methods -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">4. Arrow Functions as Methods</h3>
          <p class="text-base md:text-lg mb-4">
            While arrow functions provide a concise syntax, they do not have their own <code>this</code> binding. This makes them unsuitable for defining object methods that rely on <code>this</code>.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ arrowFunctionMethodExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Using an arrow function for the `greet` method results in <code>this</code> not referring to the object.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ arrowFunctionMethodUsage }}</code></pre>
          </div>
        </div }

        <!-- Returning Objects from Methods -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">5. Returning Objects from Methods</h3>
          <p class="text-base md:text-lg mb-4">
            Methods can return objects, allowing for more complex interactions and data manipulations.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ returningObjectFromMethodSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `getAddress` method returns an object containing address details.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ returningObjectFromMethodUsage }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Advanced Object Features -->
      <section id="advanced-object-features" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Advanced Object Features</h2>
        <p class="text-base md:text-lg mb-4">
          ES6 and later versions introduced several advanced features that enhance the capabilities and flexibility of JavaScript objects. These features simplify object manipulation and improve code readability.
        </p>

        <!-- Object Destructuring -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Object Destructuring</h3>
          <p class="text-base md:text-lg mb-4">
            Destructuring allows you to extract properties from objects and assign them to variables in a concise manner.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ destructuringExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Extracting `name`, `age`, and `city` from the `person` object into individual variables.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ destructuringUsage }}</code></pre>
          </div>
        </div>

        <!-- Property Shorthand -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. Property Shorthand</h3>
          <p class="text-base md:text-lg mb-4">
            When the variable name matches the property name, you can use shorthand syntax to assign properties.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ shorthandExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Creating an object `person` where property names are the same as variable names.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ shorthandUsage }}</code></pre>
          </div>
        </div>

        <!-- Computed Property Names -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">3. Computed Property Names</h3>
          <p class="text-base md:text-lg mb-4">
            Computed property names allow you to define object properties dynamically using expressions.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ computedPropertiesExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The property name is determined by the value of `propName`.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ computedPropertiesUsage }}</code></pre>
          </div>
        </div>

        <!-- Spread and Rest with Objects -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">4. Spread and Rest with Objects</h3>
          <p class="text-base md:text-lg mb-4">
            The spread operator (`...`) allows you to create a shallow copy of an object or merge multiple objects into one. The rest operator (`...`) is used to collect the remaining properties into a new object.
          </p>

          <!-- Spread Operator Syntax -->
          <h4 class="text-md md:text-lg font-semibold mb-2">Spread Operator Syntax</h4>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ spreadOperatorSyntax }}</code></pre>
          </div>

          <!-- Spread Operator Example -->
          <h4 class="text-md md:text-lg font-semibold mb-2">Spread Operator Example</h4>
          <p class="text-base md:text-lg mb-4">Merging two objects using the spread operator:</p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ spreadOperatorExample }}</code></pre>
          </div>

          <!-- Rest Operator Syntax -->
          <h4 class="text-md md:text-lg font-semibold mb-2">Rest Operator Syntax</h4>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ restOperatorSyntax }}</code></pre>
          </div>

          <!-- Rest Operator Example -->
          <h4 class="text-md md:text-lg font-semibold mb-2">Rest Operator Example</h4>
          <p class="text-base md:text-lg mb-4">Extracting specific properties and collecting the rest:</p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ restOperatorExample }}</code></pre>
          </div>
        </div>

        <!-- Object.assign() Method -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">5. <code>Object.assign()</code> Method</h3>
          <p class="text-base md:text-lg mb-4">
            The <code>Object.assign()</code> method copies all enumerable own properties from one or more source objects to a target object. It's useful for merging objects or cloning them.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ objectAssignSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Merging `source` properties into `target`.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ objectAssignUsage }}</code></pre>
          </div>
        </div>

        <!-- Object.freeze() Method -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">6. <code>Object.freeze()</code> Method</h3>
          <p class="text-base md:text-lg mb-4">
            The <code>Object.freeze()</code> method freezes an object, preventing new properties from being added, existing properties from being removed, and existing properties from being changed.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ objectFreezeSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Attempting to modify a frozen object results in no changes.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ objectFreezeUsage }}</code></pre>
          </div>
        </div>

        <!-- Object.seal() Method -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">7. <code>Object.seal()</code> Method</h3>
          <p class="text-base md:text-lg mb-4">
            The <code>Object.seal()</code> method seals an object, preventing new properties from being added and marking all existing properties as non-configurable. However, existing property values can still be changed.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ objectSealSyntax }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Sealing the `user` object allows modifying existing properties but prevents adding or deleting properties.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ objectSealUsage }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Object Prototypes -->
      <section id="object-prototypes" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Object Prototypes</h2>
        <p class="text-base md:text-lg mb-4">
          Every JavaScript object has a prototype. A prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.
        </p>

        <!-- Understanding Prototypes -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Understanding Prototypes</h3>
          <p class="text-base md:text-lg mb-4">
            The prototype chain is a fundamental concept in JavaScript that allows objects to inherit properties and methods from their prototypes.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ prototypeExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `person` object inherits from `personPrototype`, allowing it to use the `greet` method.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ prototypeUsage }}</code></pre>
          </div>
        </div>

        <!-- Prototype Chain -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. Prototype Chain</h3>
          <p class="text-base md:text-lg mb-4">
            The prototype chain allows objects to inherit properties and methods from their prototypes, enabling property lookup up the chain.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ prototypeChainExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Demonstrating how the `person` object accesses the `greet` method from its prototype.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ prototypeChainUsage }}</code></pre>
          </div>
        </div>

        <!-- Modifying Prototypes -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">3. Modifying Prototypes</h3>
          <p class="text-base md:text-lg mb-4">
            You can add properties or methods to an object's prototype, making them available to all instances inheriting from that prototype.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ modifyPrototypeExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> Adding a new method `sayGoodbye` to `personPrototype`, which becomes available to all `person` objects.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ modifyPrototypeUsage }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Object Creation Patterns -->
      <section id="object-creation-patterns" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Object Creation Patterns</h2>
        <p class="text-base md:text-lg mb-4">
          Various patterns exist for creating and managing objects in JavaScript. These patterns help in organizing code, promoting reusability, and managing complexity.
        </p>

        <!-- Singleton Pattern -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">1. Singleton Pattern</h3>
          <p class="text-base md:text-lg mb-4">
            The Singleton pattern ensures that a class has only one instance and provides a global point of access to it.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ singletonPatternExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `Singleton` ensures only one instance is created and reused.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ singletonPatternUsage }}</code></pre>
          </div>
        </div>

        <!-- Module Pattern -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">2. Module Pattern</h3>
          <p class="text-base md:text-lg mb-4">
            The Module pattern encapsulates private and public members, promoting better code organization and avoiding global namespace pollution.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ modulePatternExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `CounterModule` encapsulates the `count` variable and provides public methods to interact with it.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ modulePatternUsage }}</code></pre>
          </div>
        </div>

        <!-- Factory Pattern -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">3. Factory Pattern</h3>
          <p class="text-base md:text-lg mb-4">
            The Factory pattern provides a way to create objects without specifying the exact class of the object that will be created.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ factoryPatternExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `createVehicle` factory function creates different types of vehicle objects based on the input parameter.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ factoryPatternUsage }}</code></pre>
          </div>
        </div>

        <!-- Revealing Module Pattern -->
        <div class="mb-6">
          <h3 class="text-lg md:text-xl font-semibold mb-2">4. Revealing Module Pattern</h3>
          <p class="text-base md:text-lg mb-4">
            An extension of the Module pattern, the Revealing Module pattern focuses on exposing only certain methods and properties, keeping others private.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ revealingModulePatternExample }}</code></pre>
          </div>
          <p class="text-base md:text-lg mb-4">
            <strong>Explanation:</strong> The `UserModule` reveals only the `getName` and `setName` methods, keeping other methods private.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6">
            <pre><code class="language-javascript">{{ revealingModulePatternUsage }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Practical Examples -->
      <section id="practical-examples" class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Practical Examples</h2>
        <p class="text-base md:text-lg mb-4">
          Applying the concepts learned to real-world scenarios helps solidify understanding. Below are several practical examples demonstrating the use of JavaScript objects.
        </p>
            <!-- Example 1: Managing a To-Do List -->
         <div class="mb-6">
           <h3 class="text-lg md:text-xl font-semibold mb-2">1. Managing a To-Do List</h3>
           <p class="text-base md:text-lg mb-4">
             This example showcases how to use objects to manage a simple to-do list. We'll create a `ToDoList` object that can add, remove, and display tasks.
           </p>
           <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
             <pre><code class="language-javascript">{{ todoListExample }}</code></pre>
           </div>
           <p class="text-base md:text-lg mb-4">
             <strong>Explanation:</strong> The `ToDoList` object contains an array of tasks and methods to manipulate this array, such as adding a new task, removing an existing task, and displaying all tasks.
           </p>
           <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
             <pre><code class="language-javascript">{{ todoListUsage }}</code></pre>
           </div>
         </div>
 
         <!-- Example 2: Creating a Simple Calculator -->
         <div class="mb-6">
           <h3 class="text-lg md:text-xl font-semibold mb-2">2. Creating a Simple Calculator</h3>
           <p class="text-base md:text-lg mb-4">
             In this example, we'll create a `Calculator` object that can perform basic arithmetic operations such as addition, subtraction, multiplication, and division.
           </p>
           <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
             <pre><code class="language-javascript">{{ calculatorExample }}</code></pre>
           </div>
           <p class="text-base md:text-lg mb-4">
             <strong>Explanation:</strong> The `Calculator` object includes methods for each arithmetic operation. Each method takes two numbers as parameters and returns the result of the operation.
           </p>
           <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
             <pre><code class="language-javascript">{{ calculatorUsage }}</code></pre>
           </div>
         </div>
 
         <!-- Example 3: Building a User Profile -->
         <div class="mb-6">
           <h3 class="text-lg md:text-xl font-semibold mb-2">3. Building a User Profile</h3>
           <p class="text-base md:text-lg mb-4">
             This example demonstrates how to create a `UserProfile` object that stores user information and provides methods to update and display the profile details.
           </p>
           <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
             <pre><code class="language-javascript">{{ userProfileExample }}</code></pre>
           </div>
           <p class="text-base md:text-lg mb-4">
             <strong>Explanation:</strong> The `UserProfile` object holds user data such as name, age, and email. It includes methods to update the user's email and display the current profile information.
           </p>
           <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
             <pre><code class="language-javascript">{{ userProfileUsage }}</code></pre>
           </div>
         </div>
 
         <!-- Example 4: Inventory Management -->
         <div class="mb-6">
           <h3 class="text-lg md:text-xl font-semibold mb-2">4. Inventory Management</h3>
           <p class="text-base md:text-lg mb-4">
             Manage a store's inventory using an `Inventory` object. This object can add new items, remove items, update quantities, and list all available products.
           </p>
           <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
             <pre><code class="language-javascript">{{ inventoryExample }}</code></pre>
           </div>
           <p class="text-base md:text-lg mb-4">
             <strong>Explanation:</strong> The `Inventory` object maintains a list of products, each with a name, quantity, and price. Methods are provided to manipulate the inventory effectively.
           </p>
           <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
             <pre><code class="language-javascript">{{ inventoryUsage }}</code></pre>
           </div>
         </div>
 
         <!-- Example 5: Library Catalog -->
         <div class="mb-6">
           <h3 class="text-lg md:text-xl font-semibold mb-2">5. Library Catalog</h3>
           <p class="text-base md:text-lg mb-4">
             Create a `LibraryCatalog` object to manage books in a library. This object can add new books, remove books, search for books by title or author, and display all available books.
           </p>
           <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
             <pre><code class="language-javascript">{{ libraryCatalogExample }}</code></pre>
           </div>
           <p class="text-base md:text-lg mb-4">
             <strong>Explanation:</strong> The `LibraryCatalog` object stores an array of book objects, each containing details like title, author, and ISBN. Methods facilitate managing the catalog efficiently.
           </p>
           <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
             <pre><code class="language-javascript">{{ libraryCatalogUsage }}</code></pre>
           </div>
         </div>
 
         <!-- Add more practical examples as needed -->
       </section>
 
       <!-- Best Practices -->
       <section id="best-practices" class="mb-8">
         <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
         <p class="text-base md:text-lg mb-4">
           When working with JavaScript objects, adhering to best practices ensures your code is efficient, maintainable, and less prone to errors.
         </p>
 
         <ul class="list-disc list-inside text-base md:text-lg mb-6">
           <li><strong>Consistent Naming Conventions:</strong> Use clear and consistent names for object properties and methods.</li>
           <li><strong>Immutability:</strong> Where possible, avoid mutating objects directly. Use methods that return new objects instead.</li>
           <li><strong>Encapsulation:</strong> Keep related data and functions together within objects to promote modularity.</li>
           <li><strong>Use Object.freeze() and Object.seal():</strong> Protect objects from unintended modifications when necessary.</li>
           <li><strong>Leverage ES6+ Features:</strong> Utilize modern JavaScript features like destructuring, spread/rest operators, and classes to write cleaner and more efficient code.</li>
         </ul>
       </section>
 
       <!-- Common Mistakes -->
       <section id="common-mistakes" class="mb-8">
         <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Mistakes</h2>
         <p class="text-base md:text-lg mb-4">
           Even experienced developers can make mistakes when working with objects. Being aware of these common pitfalls can help you avoid them.
         </p>
 
         <ul class="list-disc list-inside text-base md:text-lg mb-6">
           <li><strong>Accidental Global Variables:</strong> Forgetting to declare variables within objects can lead to unintended global variables.</li>
           <li><strong>Incorrect `this` Binding:</strong> Misunderstanding how `this` works within object methods can cause unexpected behavior.</li>
           <li><strong>Mutating Frozen Objects:</strong> Attempting to modify objects that have been frozen using `Object.freeze()` will fail.</li>
           <li><strong>Overusing Object Constructors:</strong> Relying too heavily on constructor functions instead of object literals or classes can make code less readable.</li>
           <li><strong>Ignoring Prototypes:</strong> Not leveraging prototypes for method inheritance can lead to redundant code.</li>
         </ul>
       </section>
 
       <!-- Summary -->
       <section id="summary" class="mb-8">
         <h2 class="text-xl md:text-2xl font-semibold mb-4">Summary</h2>
         <p class="text-base md:text-lg mb-4">
           JavaScript objects are versatile and powerful tools for organizing and managing data. By understanding how to create, manipulate, and utilize objects effectively, you can write more efficient and maintainable code. Remember to follow best practices and be mindful of common mistakes to enhance your programming skills.
         </p>
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
 
       objectLiteralUsage: `console.log(person.name); // Output: Alice
 console.log(person.age);  // Output: 25
 console.log(person.city); // Output: New York`,
 
       newObjectSyntax: `const person = new Object();
 person.name = 'Bob';
 person.age = 30;
 person.city = 'London';`,
 
       newObjectUsage: `console.log(person.name); // Output: Bob
 console.log(person.age);  // Output: 30
 console.log(person.city); // Output: London`,
 
       constructorFunctionSyntax: `function Person(name, age, city) {
   this.name = name;
   this.age = age;
   this.city = city;
 }
 
 const person1 = new Person('Charlie', 28, 'Berlin');
 const person2 = new Person('Dana', 22, 'Madrid');`,
 
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
 
 const person1 = new Person('Eve', 35, 'Paris');
 console.log(person1.greet()); // Output: Hello, my name is Eve!`,
 
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
 
       // Practical Examples
       todoListExample: `const ToDoList = {
   tasks: [],
 
   addTask(task) {
     this.tasks.push(task);
     console.log(\`Added task: "\${task}"\`);
   },
 
   removeTask(index) {
     if (index > -1 && index < this.tasks.length) {
       const removed = this.tasks.splice(index, 1);
       console.log(\`Removed task: "\${removed}"\`);
     } else {
       console.log('Invalid index. No task removed.');
     }
   },
 
   displayTasks() {
     if (this.tasks.length === 0) {
       console.log('No tasks in the to-do list.');
     } else {
       console.log('To-Do List:');
       this.tasks.forEach((task, index) => {
         console.log(\`\${index + 1}. \${task}\`);
       });
     }
   }
 };`,
 
       todoListUsage: `// Adding tasks
 ToDoList.addTask('Buy groceries');
 ToDoList.addTask('Call Alice');
 ToDoList.addTask('Finish project');
 
 // Displaying tasks
 ToDoList.displayTasks();
 // Output:
 // Added task: "Buy groceries"
 // Added task: "Call Alice"
 // Added task: "Finish project"
 // To-Do List:
 // 1. Buy groceries
 // 2. Call Alice
 // 3. Finish project
 
 // Removing a task
 ToDoList.removeTask(1);
 
 // Displaying tasks after removal
 ToDoList.displayTasks();
 // Output:
 // Removed task: "Call Alice"
 // To-Do List:
 // 1. Buy groceries
 // 2. Finish project`,
 
       calculatorExample: `const Calculator = {
   add(a, b) {
     return a + b;
   },
 
   subtract(a, b) {
     return a - b;
   },
 
   multiply(a, b) {
     return a * b;
   },
 
   divide(a, b) {
     if (b === 0) {
       return 'Error: Division by zero';
     }
     return a / b;
   }
 };`,
 
       calculatorUsage: `console.log(Calculator.add(5, 3));       // Output: 8
 console.log(Calculator.subtract(10, 4)); // Output: 6
 console.log(Calculator.multiply(7, 6));  // Output: 42
 console.log(Calculator.divide(20, 5));    // Output: 4
 console.log(Calculator.divide(10, 0));    // Output: Error: Division by zero`,
 
       userProfileExample: `const UserProfile = {
   name: 'Lily',
   age: 28,
   email: 'lily@example.com',
 
   updateEmail(newEmail) {
     this.email = newEmail;
     console.log(\`Email updated to: \${this.email}\`);
   },
 
   displayProfile() {
     console.log(\`Name: \${this.name}\`);
     console.log(\`Age: \${this.age}\`);
     console.log(\`Email: \${this.email}\`);
   }
 };`,
 
       userProfileUsage: `// Displaying the initial profile
 UserProfile.displayProfile();
 // Output:
 // Name: Lily
 // Age: 28
 // Email: lily@example.com
 
 // Updating the email
 UserProfile.updateEmail('lily.new@example.com');
 
 // Displaying the updated profile
 UserProfile.displayProfile();
 // Output:
 // Name: Lily
 // Age: 28
 // Email: lily.new@example.com`,
 
       inventoryExample: `const Inventory = {
   products: [],
 
   addProduct(product) {
     this.products.push(product);
     console.log(\`Added product: \${product.name}\`);
   },
 
   removeProduct(productName) {
     const index = this.products.findIndex(p => p.name === productName);
     if (index !== -1) {
       this.products.splice(index, 1);
       console.log(\`Removed product: \${productName}\`);
     } else {
       console.log(\`Product "\${productName}" not found.\`);
     }
   },
 
   updateQuantity(productName, quantity) {
     const product = this.products.find(p => p.name === productName);
     if (product) {
       product.quantity = quantity;
       console.log(\`Updated quantity for \${productName} to \${quantity}\`);
     } else {
       console.log(\`Product "\${productName}" not found.\`);
     }
   },
 
   listProducts() {
     if (this.products.length === 0) {
       console.log('No products in inventory.');
     } else {
       console.log('Inventory List:');
       this.products.forEach((product, index) => {
         console.log(\`\${index + 1}. \${product.name} - Quantity: \${product.quantity} - Price: \$\${product.price}\`);
       });
     }
   }
 };`,
 
       inventoryUsage: `// Adding products
 Inventory.addProduct({ name: 'Laptop', quantity: 10, price: 999.99 });
 Inventory.addProduct({ name: 'Smartphone', quantity: 25, price: 499.99 });
 
 // Listing products
 Inventory.listProducts();
 // Output:
 // Added product: Laptop
 // Added product: Smartphone
 // Inventory List:
 // 1. Laptop - Quantity: 10 - Price: $999.99
 // 2. Smartphone - Quantity: 25 - Price: $499.99
 
 // Updating quantity
 Inventory.updateQuantity('Laptop', 8);
 
 // Removing a product
 Inventory.removeProduct('Smartphone');
 
 // Listing products after updates
 Inventory.listProducts();
 // Output:
 // Updated quantity for Laptop to 8
 // Removed product: Smartphone
 // Inventory List:
 // 1. Laptop - Quantity: 8 - Price: $999.99`,
 
       libraryCatalogExample: `const LibraryCatalog = {
   books: [],
 
   addBook(book) {
     this.books.push(book);
     console.log(\`Added book: "\${book.title}" by \${book.author}\`);
   },
 
   removeBook(isbn) {
     const index = this.books.findIndex(b => b.isbn === isbn);
     if (index !== -1) {
       const removed = this.books.splice(index, 1);
       console.log(\`Removed book: "\${removed[0].title}" by \${removed[0].author}\`);
     } else {
       console.log(\`Book with ISBN "\${isbn}" not found.\`);
     }
   },
 
   searchByTitle(title) {
     const results = this.books.filter(b => b.title.toLowerCase().includes(title.toLowerCase()));
     console.log(\`Search results for "\${title}":\`);
     results.forEach(b => {
       console.log(\`- "\${b.title}" by \${b.author}\`);
     });
   },
 
   searchByAuthor(author) {
     const results = this.books.filter(b => b.author.toLowerCase().includes(author.toLowerCase()));
     console.log(\`Search results for author "\${author}":\`);
     results.forEach(b => {
       console.log(\`- "\${b.title}" by \${b.author}\`);
     });
   },
 
   listAllBooks() {
     if (this.books.length === 0) {
       console.log('No books in the catalog.');
     } else {
       console.log('Library Catalog:');
       this.books.forEach((book, index) => {
         console.log(\`\${index + 1}. "\${book.title}" by \${book.author} (ISBN: \${book.isbn})\`);
       });
     }
   }
 };`,
 
       libraryCatalogUsage: `// Adding books
 LibraryCatalog.addBook({ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', isbn: '978-0596517748' });
 LibraryCatalog.addBook({ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', isbn: '978-1593279509' });
 LibraryCatalog.addBook({ title: 'You Don\'t Know JS', author: 'Kyle Simpson', isbn: '978-1491904244' });
 
 // Listing all books
 LibraryCatalog.listAllBooks();
 // Output:
 // Added book: "JavaScript: The Good Parts" by Douglas Crockford
 // Added book: "Eloquent JavaScript" by Marijn Haverbeke
 // Added book: "You Don't Know JS" by Kyle Simpson
 // Library Catalog:
 // 1. "JavaScript: The Good Parts" by Douglas Crockford (ISBN: 978-0596517748)
 // 2. "Eloquent JavaScript" by Marijn Haverbeke (ISBN: 978-1593279509)
 // 3. "You Don't Know JS" by Kyle Simpson (ISBN: 978-1491904244)
 
 // Searching for books by title
 LibraryCatalog.searchByTitle('JavaScript');
 // Output:
 // Search results for "JavaScript":
 // - "JavaScript: The Good Parts" by Douglas Crockford
 // - "Eloquent JavaScript" by Marijn Haverbeke
 
 // Searching for books by author
 LibraryCatalog.searchByAuthor('Kyle');
 // Output:
 // Search results for author "Kyle":
 // - "You Don't Know JS" by Kyle Simpson
 
 // Removing a book
 LibraryCatalog.removeBook('978-0596517748');
 
 // Listing all books after removal
 LibraryCatalog.listAllBooks();
 // Output:
 // Removed book: "JavaScript: The Good Parts" by Douglas Crockford
 // Library Catalog:
 // 1. "Eloquent JavaScript" by Marijn Haverbeke (ISBN: 978-1593279509)
 // 2. "You Don't Know JS" by Kyle Simpson (ISBN: 978-1491904244)`,
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