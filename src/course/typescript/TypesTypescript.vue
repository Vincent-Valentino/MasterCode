<template>
  <div class="container mx-auto p-6">
    <!-- Header Section -->
    <header class="mb-8">
      <h1 class="text-5xl font-bold text-blue-600 mb-4">Understanding Types in TypeScript</h1>
      <p class="text-xl text-gray-700">
        Dive deep into TypeScript's powerful type system. Learn how to leverage types to write safer, more maintainable code.
      </p>
    </header>

    <!-- Table of Contents -->
    <nav class="mb-8">
      <h2 class="text-3xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-blue-500">
        <li><a href="#basic-types" class="underline">1. Basic Types</a></li>
        <li><a href="#arrays-tuples" class="underline">2. Arrays and Tuples</a></li>
        <li><a href="#enums" class="underline">3. Enums</a></li>
        <li><a href="#any-unknown-never" class="underline">4. Special Types: any, unknown, never</a></li>
        <li><a href="#type-aliases" class="underline">5. Type Aliases</a></li>
        <li><a href="#interfaces" class="underline">6. Interfaces</a></li>
        <li><a href="#union-intersection" class="underline">7. Union and Intersection Types</a></li>
        <li><a href="#generics" class="underline">8. Generics</a></li>
        <li><a href="#type-inference" class="underline">9. Type Inference</a></li>
        <li><a href="#type-guards" class="underline">10. Type Guards</a></li>
        <li><a href="#literal-types" class="underline">11. Literal Types</a></li>
        <li><a href="#advanced-types" class="underline">12. Advanced Types</a></li>
        <li><a href="#type-compatibility" class="underline">13. Type Compatibility</a></li>
        <li><a href="#type-operators" class="underline">14. Type Operators</a></li>
        <li><a href="#practical-examples" class="underline">15. Practical Examples</a></li>
        <li><a href="#best-practices" class="underline">16. Best Practices</a></li>
        <li><a href="#common-mistakes" class="underline">17. Common Mistakes</a></li>
        <li><a href="#summary" class="underline">18. Summary</a></li>
      </ul>
    </nav>

    <!-- Section 1: Basic Types -->
    <section id="basic-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">1. Basic Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript introduces several basic types that are essential for defining the nature of variables and function return values. These types help in enforcing type safety and preventing common errors.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Number:</strong> Represents both integer and floating-point numbers.</li>
        <li><strong>String:</strong> Represents textual data.</li>
        <li><strong>Boolean:</strong> Represents logical values: <code>true</code> or <code>false</code>.</li>
        <li><strong>Null and Undefined:</strong> Represents absence of value.</li>
        <li><strong>Void:</strong> Represents the absence of any type, commonly used for functions that do not return a value.</li>
        <li><strong>Object:</strong> Represents non-primitive types.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">1.1. Number Type</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>number</code> type in TypeScript is used to represent all numerical values, including integers, floats, and hexadecimal values.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ numberTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> TypeScript enforces that the variable <code>age</code> can only hold numeric values. Attempting to assign a non-number will result in a compile-time error.
      </p>

      <h3 class="text-2xl font-semibold mt-6 mb-2">1.2. String Type</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>string</code> type is used for textual data. TypeScript ensures that variables of type <code>string</code> only contain string values.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ stringTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The variable <code>firstName</code> is strictly typed to hold string values. Assigning a number or other type will cause a type error.
      </p>

      <h3 class="text-2xl font-semibold mt-6 mb-2">1.3. Boolean Type</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>boolean</code> type represents logical values: <code>true</code> or <code>false</code>. It is commonly used for conditional checks and control flow.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ booleanTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>isActive</code> variable can only be assigned boolean values, ensuring clarity in logic operations.
      </p>
    </section>

    <!-- Section 2: Arrays and Tuples -->
    <section id="arrays-tuples" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">2. Arrays and Tuples</h2>
      <p class="text-lg text-gray-700 mb-4">
        Arrays and tuples are used to store collections of values. While arrays can hold multiple values of the same type, tuples allow you to store a fixed number of elements with specific types.
      </p>
      
      <h3 class="text-2xl font-semibold mb-2">2.1. Arrays</h3>
      <p class="text-lg text-gray-700 mb-4">
        In TypeScript, arrays can be defined using two syntaxes: the general array type <code>Type[]</code> and the generic array type <code>Array&lt;Type&gt;</code>.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ arrayTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>numbers</code> array can only contain numeric values. Attempting to add a different type will result in a type error.
      </p>

      <h3 class="text-2xl font-semibold mb-2">2.2. Tuples</h3>
      <p class="text-lg text-gray-700 mb-4">
        Tuples allow you to define an array with a fixed number of elements where each element can have a different type. They are useful for representing a collection of related values.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ tupleTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>user</code> tuple contains a string and a number. The order and types of the elements are strictly enforced.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A diagram comparing arrays and tuples, highlighting the differences in type consistency and element order.
        Alt Text: "Diagram illustrating the differences between arrays and tuples in TypeScript."
      -->
    </section>

    <!-- Section 3: Enums -->
    <section id="enums" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">3. Enums</h2>
      <p class="text-lg text-gray-700 mb-4">
        Enums (short for Enumerations) allow you to define a set of named constants. They make it easier to document intent or create a set of distinct cases.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Numeric Enums:</strong> Default behavior where members are assigned numeric values.</li>
        <li><strong>String Enums:</strong> Members are assigned string values.</li>
        <li><strong>Heterogeneous Enums:</strong> Mix of string and numeric members.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">3.1. Numeric Enums</h3>
      <p class="text-lg text-gray-700 mb-4">
        Numeric enums are the default enum type in TypeScript. Members are auto-incremented from 0 unless specified otherwise.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ numericEnumExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Direction</code> enum assigns numeric values starting from 0. You can also manually assign values as needed.
      </p>

      <h3 class="text-2xl font-semibold mb-2">3.2. String Enums</h3>
      <p class="text-lg text-gray-700 mb-4">
        String enums allow you to assign string values to enum members, providing more readable and meaningful values.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ stringEnumExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Status</code> enum assigns explicit string values to each member, enhancing clarity in code.
      </p>

      <h3 class="text-2xl font-semibold mb-2">3.3. Heterogeneous Enums</h3>
      <p class="text-lg text-gray-700 mb-4">
        Heterogeneous enums contain both string and numeric members. However, it's generally recommended to stick to one type for consistency.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ heterogeneousEnumExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Status</code> enum includes both string and numeric values. While possible, this approach can lead to confusion and is not commonly used.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A visual representation of enums, showing numeric and string enums with their corresponding values.
        Alt Text: "Visual diagram illustrating numeric and string enums in TypeScript."
      -->
    </section>

    <!-- Section 4: Special Types: any, unknown, never -->
    <section id="any-unknown-never" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">4. Special Types: any, unknown, never</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript provides special types that offer more flexibility and expressiveness. Understanding these types is crucial for writing effective TypeScript code.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>any:</strong> Opt-out of type checking. Use sparingly to allow flexibility.</li>
        <li><strong>unknown:</strong> Safer alternative to <code>any</code>; requires type checking before usage.</li>
        <li><strong>never:</strong> Represents values that never occur, such as functions that always throw errors or have infinite loops.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">4.1. The any Type</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>any</code> type allows you to opt-out of type checking for a particular variable. While it provides flexibility, excessive use can undermine TypeScript's type safety.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ anyTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>data</code> variable can hold any type of value, allowing for flexibility but sacrificing type safety.
      </p>

      <h3 class="text-2xl font-semibold mb-2">4.2. The unknown Type</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>unknown</code> type is the type-safe counterpart of <code>any</code>. It represents any value but requires type checking before performing operations on it.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ unknownTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>input</code> variable can hold any type of value, but TypeScript enforces type checks before it can be used in operations, enhancing safety.
      </p>

      <h3 class="text-2xl font-semibold mb-2">4.3. The never Type</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>never</code> type represents values that never occur. It is typically used in functions that throw errors or have infinite loops.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ neverTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>fail</code> function never returns a value because it always throws an error, aligning with the <code>never</code> type.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A table comparing any, unknown, and never types, highlighting their use cases and differences.
        Alt Text: "Comparison table of TypeScript's any, unknown, and never types."
      -->
    </section>

    <!-- Section 5: Type Aliases -->
    <section id="type-aliases" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">5. Type Aliases</h2>
      <p class="text-lg text-gray-700 mb-4">
        Type aliases allow you to create a new name for a type. They are particularly useful for simplifying complex type definitions and enhancing code readability.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Basic Type Aliases:</strong> Create aliases for primitive or existing types.</li>
        <li><strong>Union Type Aliases:</strong> Combine multiple types into one.</li>
        <li><strong>Intersection Type Aliases:</strong> Combine multiple types into one, requiring all constituent types.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">5.1. Basic Type Aliases</h3>
      <p class="text-lg text-gray-700 mb-4">
        Type aliases can simplify complex type annotations by giving them meaningful names.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ typeAliasExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>ID</code> type alias makes it clear that the variable <code>userId</code> represents an identifier, enhancing code semantics.
      </p>

      <h3 class="text-2xl font-semibold mb-2">5.2. Union Type Aliases</h3>
      <p class="text-lg text-gray-700 mb-4">
        Union types allow a variable to hold one of several types. This is useful for functions that can accept multiple types of arguments.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ unionTypeAliasExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Status</code> type can be either <code>'active'</code> or <code>'inactive'</code>, allowing for flexible yet type-safe assignments.
      </p>

      <h3 class="text-2xl font-semibold mb-2">5.3. Intersection Type Aliases</h3>
      <p class="text-lg text-gray-700 mb-4">
        Intersection types combine multiple types into one, requiring that a variable satisfies all the constituent types. This is useful for merging interfaces or combining multiple features.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ intersectionTypeAliasExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Employee</code> type combines both <code>Person</code> and <code>Worker</code> interfaces, ensuring that an <code>Employee</code> has properties from both.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A Venn diagram illustrating the concept of union and intersection types, showing overlapping and distinct type properties.
        Alt Text: "Venn diagram showing union and intersection types in TypeScript."
      -->
    </section>

    <!-- Section 6: Interfaces -->
    <section id="interfaces" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">6. Interfaces</h2>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces in TypeScript define the structure of objects, enforcing specific property types and method signatures. They are instrumental in ensuring consistency and type safety across different parts of an application.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Defining Interfaces:</strong> Specify the shape of objects.</li>
        <li><strong>Optional Properties:</strong> Allow certain properties to be optional.</li>
        <li><strong>Readonly Properties:</strong> Prevent modification of properties after initialization.</li>
        <li><strong>Extending Interfaces:</strong> Create new interfaces by extending existing ones.</li>
        <li><strong>Implementing Interfaces:</strong> Enforce that classes adhere to specific interfaces.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">6.1. Defining Interfaces</h3>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces define the structure that objects must adhere to, specifying required properties and their types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ interfaceDefinitionExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>User</code> interface specifies that any object adhering to it must have <code>id</code>, <code>name</code>, and <code>email</code> properties with corresponding types.
      </p>

      <h3 class="text-2xl font-semibold mb-2">6.2. Optional Properties</h3>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces can include optional properties by appending a question mark (<code>?</code>) to the property name.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ optionalPropertyExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>age</code> property in the <code>User</code> interface is optional, allowing objects to omit it without causing a type error.
      </p>

      <h3 class="text-2xl font-semibold mb-2">6.3. Readonly Properties</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>readonly</code> modifier ensures that a property cannot be reassigned after initialization, providing immutability.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ readonlyPropertyExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> Once the <code>id</code> property is set, any attempt to reassign it will result in a compile-time error, preventing unintended modifications.
      </p>

      <h3 class="text-2xl font-semibold mb-2">6.4. Extending Interfaces</h3>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces can extend other interfaces, allowing for the creation of more complex types based on existing ones.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ interfaceExtendingExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Employee</code> interface extends both <code>Person</code> and <code>Worker</code>, inheriting their properties and ensuring that any <code>Employee</code> object has all required properties from both interfaces.
      </p>

      <h3 class="text-2xl font-semibold mb-2">6.5. Implementing Interfaces in Classes</h3>
      <p class="text-lg text-gray-700 mb-4">
        Classes can implement interfaces to ensure they adhere to specific contracts, enforcing the presence of certain properties and methods.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ classImplementingInterfaceExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Person</code> class implements the <code>User</code> interface, ensuring it has all the properties and methods defined by the interface.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A UML diagram showing interfaces and how classes implement them, including inheritance.
        Alt Text: "UML diagram illustrating interfaces and class implementations in TypeScript."
      -->
    </section>

    <!-- Section 7: Union and Intersection Types -->
    <section id="union-intersection" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">7. Union and Intersection Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Union and intersection types allow for more flexible type definitions by combining multiple types into one.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Union Types:</strong> Allow a variable to be one of several types.</li>
        <li><strong>Intersection Types:</strong> Combine multiple types into one, requiring all constituent types.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">7.1. Union Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        Union types enable a variable to hold values of different types, providing flexibility while maintaining type safety.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ unionTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>ID</code> type can be either a <code>string</code> or a <code>number</code>, allowing for versatile usage scenarios.
      </p>

      <h3 class="text-2xl font-semibold mb-2">7.2. Intersection Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        Intersection types merge multiple types into one, ensuring that a variable satisfies all included types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ intersectionTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Employee</code> type must satisfy both <code>Person</code> and <code>Worker</code> interfaces, ensuring comprehensive type coverage.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Diagrams illustrating union and intersection types with Venn diagrams or overlapping shapes to show type relationships.
        Alt Text: "Venn diagrams illustrating union and intersection types in TypeScript."
      -->
    </section>

    <!-- Section 8: Generics -->
    <section id="generics" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">8. Generics</h2>
      <p class="text-lg text-gray-700 mb-4">
        Generics provide a way to create reusable components and functions that can work with a variety of types while maintaining type safety. They enable developers to write flexible and maintainable code without sacrificing type integrity.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Generic Functions:</strong> Functions that can operate on different types while preserving type information.</li>
        <li><strong>Generic Interfaces:</strong> Interfaces that can work with various types.</li>
        <li><strong>Generic Classes:</strong> Classes that can handle different types in a type-safe manner.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">8.1. Generic Functions</h3>
      <p class="text-lg text-gray-700 mb-4">
        Generic functions allow you to define a function with type parameters, making it flexible to handle different types while ensuring type safety.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericFunctionExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>identity</code> function uses a generic type <code>T</code>, allowing it to accept and return a value of any type while maintaining type consistency.
      </p>

      <h3 class="text-2xl font-semibold mb-2">8.2. Generic Interfaces</h3>
      <p class="text-lg text-gray-700 mb-4">
        Generic interfaces enable the creation of flexible and reusable interfaces that can work with various types.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericInterfaceExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Pair</code> interface can hold two values of any specified types, making it versatile for different use cases.
      </p>

      <h3 class="text-2xl font-semibold mb-2">8.3. Generic Classes</h3>
      <p class="text-lg text-gray-700 mb-4">
        Generic classes allow you to define classes that can operate with various types, enhancing reusability and type safety.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericClassExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Stack</code> class is a generic class that can manage a stack of any specified type, ensuring type safety throughout its operations.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A diagram showing how generics allow functions, interfaces, and classes to operate with various types without losing type information.
        Alt Text: "Diagram illustrating the concept of generics in TypeScript."
      -->
    </section>

    <!-- Section 9: Functions in TypeScript -->
    <section id="functions" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">9. Functions in TypeScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript enhances JavaScript functions by allowing explicit type annotations for parameters and return types. This ensures that functions are used correctly and consistently across the codebase.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Parameter Types:</strong> Define the types of function parameters.</li>
        <li><strong>Return Types:</strong> Specify the type of value a function returns.</li>
        <li><strong>Optional Parameters:</strong> Define parameters that are not required.</li>
        <li><strong>Default Parameters:</strong> Assign default values to parameters.</li>
        <li><strong>Rest Parameters:</strong> Handle functions with a variable number of arguments.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">9.1. Parameter and Return Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        Defining parameter and return types ensures that functions receive and return the expected types, enhancing reliability.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ functionTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>add</code> function explicitly states that it accepts two numbers and returns a number, preventing accidental type mismatches.
      </p>

      <h3 class="text-2xl font-semibold mb-2">9.2. Optional and Default Parameters</h3>
      <p class="text-lg text-gray-700 mb-4">
        Optional and default parameters provide flexibility in function signatures, allowing for more versatile function usage.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ optionalDefaultParametersExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>greet</code> function has an optional <code>age</code> parameter and a default <code>greeting</code> parameter, allowing it to be called with varying numbers of arguments.
      </p>

      <h3 class="text-2xl font-semibold mb-2">9.3. Rest Parameters</h3>
      <p class="text-lg text-gray-700 mb-4">
        Rest parameters allow functions to accept an indefinite number of arguments as an array, enabling more flexible function signatures.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ restParametersExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>sum</code> function uses a rest parameter to accept multiple numbers and calculate their total, providing flexibility in the number of arguments passed.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Flowchart showing how TypeScript functions handle parameter and return types, including optional and rest parameters.
        Alt Text: "Flowchart illustrating TypeScript function parameter and return type handling."
      -->
    </section>

    <!-- Section 10: Type Guards -->
    <section id="type-guards" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">10. Type Guards</h2>
      <p class="text-lg text-gray-700 mb-4">
        Type Guards are techniques used to narrow down the type of a variable within a conditional block. They enable more precise type checking and safer code execution.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>typeof Type Guards:</strong> Check the type of primitive values.</li>
        <li><strong>instanceof Type Guards:</strong> Check if an object is an instance of a particular class.</li>
        <li><strong>Custom Type Guards:</strong> Create user-defined functions to perform type checks.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">10.1. typeof Type Guards</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>typeof</code> operator can be used to create type guards for primitive types like <code>string</code>, <code>number</code>, and <code>boolean</code>.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ typeofTypeGuardExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>printValue</code> function uses a <code>typeof</code> check to determine if the input is a string before performing string-specific operations.
      </p>

      <h3 class="text-2xl font-semibold mb-2">10.2. instanceof Type Guards</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>instanceof</code> operator is used to check if an object is an instance of a specific class, enabling type-safe access to class-specific properties and methods.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ instanceofTypeGuardExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>isDog</code> function determines if an animal is an instance of the <code>Dog</code> class before invoking dog-specific methods.
      </p>

      <h3 class="text-2xl font-semibold mb-2">10.3. Custom Type Guards</h3>
      <p class="text-lg text-gray-700 mb-4">
        Custom type guards are user-defined functions that determine whether a variable conforms to a specific type, allowing for more complex and precise type checking.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ customTypeGuardExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>isString</code> function checks if the input is a string, enabling type-safe operations within conditional blocks.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Flowcharts demonstrating how type guards work in TypeScript, including typeof, instanceof, and custom type guards.
        Alt Text: "Flowcharts illustrating the use of type guards in TypeScript."
      -->
    </section>

    <!-- Section 11: Literal Types -->
    <section id="literal-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">11. Literal Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Literal types allow you to specify the exact value a string or number must have. They are useful for creating highly specific types and for enforcing specific values in variables and function parameters.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>String Literal Types:</strong> Restrict a variable to a specific string value.</li>
        <li><strong>Number Literal Types:</strong> Restrict a variable to a specific number value.</li>
        <li><strong>Boolean Literal Types:</strong> Restrict a variable to a specific boolean value.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">11.1. String Literal Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        String literal types allow variables to hold only a specific string value, enhancing type safety by restricting possible values.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ stringLiteralTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Status</code> type can only be <code>'active'</code> or <code>'inactive'</code>, preventing any other string values from being assigned.
      </p>

      <h3 class="text-2xl font-semibold mb-2">11.2. Number Literal Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        Number literal types restrict a variable to a specific numeric value, ensuring that only predefined numbers are used.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ numberLiteralTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Direction</code> type can only be <code>0</code>, <code>1</code>, or <code>2</code>, ensuring that only valid direction codes are used.
      </p>

      <h3 class="text-2xl font-semibold mb-2">11.3. Boolean Literal Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        Boolean literal types limit a variable to either <code>true</code> or <code>false</code>, enhancing type safety in boolean contexts.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ booleanLiteralTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>isAdmin</code> variable can only be <code>true</code> or <code>false</code>, preventing any other truthy or falsy values from being assigned.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A table comparing general types with literal types, highlighting the specificity of literal types.
        Alt Text: "Comparison table showing general types versus literal types in TypeScript."
      -->
    </section>

    <!-- Section 12: Advanced Types -->
    <section id="advanced-types" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">12. Advanced Types</h2>
      <p class="text-lg text-gray-700 mb-4">
        Advanced types in TypeScript offer powerful tools for creating more sophisticated and flexible type definitions, enabling developers to model complex data structures and scenarios.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Mapped Types:</strong> Create new types based on existing ones by transforming their properties.</li>
        <li><strong>Conditional Types:</strong> Define types that depend on a condition.</li>
        <li><strong>Indexed Access Types:</strong> Access the type of a property in another type.</li>
        <li><strong>Type Utilities:</strong> Utilize built-in utility types like <code>Partial</code>, <code>Readonly</code>, <code>Pick</code>, and <code>Record</code>.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">12.1. Mapped Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        Mapped types allow you to create new types by transforming the properties of an existing type. They are useful for creating variations of types without duplicating code.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ mappedTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>ReadonlyUser</code> type makes all properties of <code>User</code> read-only, preventing modifications after initialization.
      </p>

      <h3 class="text-2xl font-semibold mb-2">12.2. Conditional Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        Conditional types allow you to define a type based on a condition, similar to ternary operators in JavaScript. They enable more dynamic and context-sensitive type definitions.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ conditionalTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>IsString</code> type evaluates to <code>true</code> if <code>T</code> is a <code>string</code>, and <code>false</code> otherwise.
      </p>

      <h3 class="text-2xl font-semibold mb-2">12.3. Indexed Access Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        Indexed access types allow you to retrieve the type of a specific property from another type, enabling more granular type definitions.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ indexedAccessTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>UserName</code> type retrieves the type of the <code>name</code> property from the <code>User</code> interface, ensuring type consistency.
      </p>

      <h3 class="text-2xl font-semibold mb-2">12.4. Type Utilities</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript provides several built-in utility types that simplify common type transformations, promoting code reuse and reducing redundancy.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
        <li><code>Partial&lt;T&gt;</code>: Makes all properties in <code>T</code> optional.</li>
        <li><code>Readonly&lt;T&gt;</code>: Makes all properties in <code>T</code> read-only.</li>
        <li><code>Pick&lt;T, K&gt;</code>: Creates a new type by picking a set of properties <code>K</code> from <code>T</code>.</li>
        <li><code>Record&lt;K, T&gt;</code>: Constructs a type with a set of properties <code>K</code> of type <code>T</code>.</li>
      </ul>

      <h4 class="text-2xl font-semibold mb-2">12.4.1. Partial Type</h4>
      <p class="text-lg text-gray-700 mb-4">
        The <code>Partial</code> utility type makes all properties of a type optional, which is useful for scenarios like updating objects.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ partialTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>updateUser</code> function accepts a <code>PartialUser</code>, allowing updates to any subset of the <code>User</code> properties.
      </p>

      <h4 class="text-2xl font-semibold mb-2">12.4.2. Readonly Type</h4>
      <p class="text-lg text-gray-700 mb-4">
        The <code>Readonly</code> utility type makes all properties of a type read-only, preventing modifications after object creation.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ readonlyTypeExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>readOnlyUser</code> object cannot have its properties altered after initialization, ensuring immutability.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A diagram showing how utility types transform existing types into new types with specific modifications.
        Alt Text: "Diagram illustrating how TypeScript's utility types transform existing types."
      -->
    </section>

    <!-- Section 13: Type Compatibility -->
    <section id="type-compatibility" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">13. Type Compatibility</h2>
      <p class="text-lg text-gray-700 mb-4">
        Type compatibility in TypeScript determines how different types relate to each other, influencing how variables and functions can interact based on their types. Understanding type compatibility is essential for leveraging TypeScript's type system effectively.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Structural Typing:</strong> TypeScript uses structural typing, meaning that compatibility is based on the structure rather than the explicit type names.</li>
        <li><strong>Assignable Types:</strong> Types can be assigned to each other if their structures are compatible.</li>
        <li><strong>Function Compatibility:</strong> Functions must match the expected signature, considering parameters and return types.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">13.1. Structural Typing</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript's structural type system focuses on the shape of data, allowing types to be compatible based on their members rather than their explicit names.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ structuralTypingExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> Even though <code>Point3D</code> extends <code>Point2D</code>, a <code>Point3D</code> object is assignable to a <code>Point2D</code> type because it includes all required properties.
      </p>

      <h3 class="text-2xl font-semibold mb-2">13.2. Function Compatibility</h3>
      <p class="text-lg text-gray-700 mb-4">
        Function compatibility ensures that functions can be assigned to variables or passed as arguments only if their signatures are compatible.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ functionCompatibilityExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>sum</code> function can be assigned to a variable expecting a function with two number parameters and a number return type, ensuring compatibility.
      </p>

      <h3 class="text-2xl font-semibold mb-2">13.3. Generics Compatibility</h3>
      <p class="text-lg text-gray-700 mb-4">
        Generics introduce additional flexibility in type definitions. Understanding how generic types interact is crucial for creating reusable components.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ genericsCompatibilityExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>identity</code> function demonstrates how generic functions can maintain type consistency across different usages.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A diagram illustrating structural typing and how TypeScript determines type compatibility based on structure.
        Alt Text: "Diagram illustrating TypeScript's structural typing and type compatibility."
      -->
    </section>

    <!-- Section 14: Type Operators -->
    <section id="type-operators" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">14. Type Operators</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript offers several type operators that allow for advanced type manipulations, enhancing the expressiveness and flexibility of type definitions.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>keyof:</strong> Retrieves the keys of a type.</li>
        <li><strong>typeof:</strong> Gets the type of a variable or property.</li>
        <li><strong>in:</strong> Creates mapped types by iterating over keys.</li>
        <li><strong>extends:</strong> Used in conditional types to extend or constrain types.</li>
        <li><strong>as:</strong> Performs type assertions.</li>
      </ul>

      <h3 class="text-2xl font-semibold mt-6 mb-2">14.1. keyof Operator</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>keyof</code> operator creates a union of string literal types representing the keys of a given type. It's useful for creating dynamic and type-safe operations based on object keys.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ keyofOperatorExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>keyof User</code> type results in a union type of the keys of the <code>User</code> interface, i.e., <code>'id' | 'name' | 'email'</code>.
      </p>

      <h3 class="text-2xl font-semibold mb-2">14.2. typeof Operator</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>typeof</code> operator in TypeScript can be used to get the type of a variable or property, allowing for dynamic type assignments.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ typeofOperatorExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>username</code> variable inherits the type of <code>user.name</code>, ensuring consistency.
      </p>

      <h3 class="text-2xl font-semibold mb-2">14.3. in Operator</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>in</code> operator is used in mapped types to iterate over keys of a type, allowing for dynamic type creation.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ inOperatorExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>ReadonlyUser</code> type makes all properties of <code>User</code> read-only by iterating over each key using the <code>in</code> operator.
      </p>

      <h3 class="text-2xl font-semibold mb-2">14.4. extends Operator</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>extends</code> keyword is used in conditional types to create type constraints, allowing for more precise type definitions based on conditions.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ extendsOperatorExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>IsString</code> type checks if <code>T</code> extends <code>string</code>, returning <code>true</code> or <code>false</code> accordingly.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Flowcharts or diagrams showing how type operators like keyof, typeof, in, and extends manipulate types in TypeScript.
        Alt Text: "Diagram illustrating TypeScript's type operators and their effects on types."
      -->
    </section>

    <!-- Section 15: Practical Examples -->
    <section id="practical-examples" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">15. Practical Examples</h2>
      <p class="text-lg text-gray-700 mb-4">
        Applying TypeScript's type features in real-world scenarios helps solidify understanding and demonstrates practical utility.
      </p>
      
      <!-- Example 1: Advanced Interfaces with Generics -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">15.1. Advanced Interfaces with Generics</h3>
        <p class="text-lg text-gray-700 mb-4">
          Combining interfaces with generics allows for the creation of highly reusable and type-safe components.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ advancedInterfaceGenericsExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Response</code> interface uses a generic type <code>T</code> to define the shape of the response data, allowing flexibility in handling different data types.
        </p>
      </div>

      <!-- Example 2: Using Enums in Functions -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">15.2. Using Enums in Functions</h3>
        <p class="text-lg text-gray-700 mb-4">
          Enums can be effectively used in functions to handle a set of predefined cases, enhancing code readability and reliability.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ enumFunctionExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>getStatusMessage</code> function uses the <code>Status</code> enum to return appropriate messages based on the status value.
        </p>
      </div>

      <!-- Example 3: Generic Classes with Constraints -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">15.3. Generic Classes with Constraints</h3>
        <p class="text-lg text-gray-700 mb-4">
          Applying constraints to generics ensures that the types used meet certain criteria, enhancing type safety.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ genericClassConstraintExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Repository</code> class is generic but constrained to types that extend the <code>ID</code> interface, ensuring that all entities have an <code>id</code> property.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Real-world application diagrams showcasing how TypeScript types integrate into different parts of an application (e.g., API responses, component props).
        Alt Text: "Diagram showing TypeScript types integration in a real-world application scenario."
      -->
    </section>

    <!-- Section 16: Best Practices -->
    <section id="best-practices" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">16. Best Practices</h2>
      <p class="text-lg text-gray-700 mb-4">
        Adhering to best practices ensures that your TypeScript code is clean, efficient, and maintainable. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Prefer Type Inference:</strong> Let TypeScript infer types when possible to reduce redundancy and improve code readability.</li>
        <li><strong>Use Interfaces Over Type Aliases for Objects:</strong> Interfaces are extendable and more suitable for defining object structures.</li>
        <li><strong>Avoid Using <code>any</code>:</strong> The <code>any</code> type disables type checking. Use it sparingly and only when necessary.</li>
        <li><strong>Leverage Readonly Properties:</strong> Use the <code>readonly</code> modifier to prevent unintended modifications.</li>
        <li><strong>Consistent Naming Conventions:</strong> Use clear and consistent naming for types, interfaces, and variables to enhance code clarity.</li>
        <li><strong>Utilize Utility Types:</strong> Make use of TypeScript's built-in utility types like <code>Partial</code>, <code>Readonly</code>, and <code>Pick</code> to simplify type manipulations.</li>
        <li><strong>Enable Strict Mode:</strong> Activate TypeScript's strict mode to enforce stricter type checking and catch potential errors early.</li>
        <li><strong>Document Complex Types:</strong> Use comments and documentation to explain complex type definitions and their intended usage.</li>
      </ul>
    </section>

    <!-- Section 17: Common Mistakes -->
    <section id="common-mistakes" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">17. Common Mistakes</h2>
      <p class="text-lg text-gray-700 mb-4">
        Being aware of common pitfalls helps you avoid errors and write more robust TypeScript code. Here are some frequent mistakes developers make:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Overusing <code>any</code> Type:</strong> Relying too much on <code>any</code> undermines TypeScript's type safety benefits.</li>
        <li><strong>Ignoring Type Inference:</strong> Explicitly specifying types when TypeScript can infer them leads to unnecessary verbosity.</li>
        <li><strong>Misusing Interfaces and Type Aliases:</strong> Not understanding when to use interfaces versus type aliases can lead to confusion and code inconsistencies.</li>
        <li><strong>Not Enabling Strict Mode:</strong> Skipping strict mode allows subtle bugs to creep into your codebase.</li>
        <li><strong>Incorrectly Using Type Assertions:</strong> Overusing type assertions can bypass TypeScript's type checks, leading to potential runtime errors.</li>
        <li><strong>Forgetting to Export and Import:</strong> Missing export/import statements can cause modules not to work as intended.</li>
        <li><strong>Not Utilizing Generics Properly:</strong> Poor implementation of generics reduces code reusability and type safety.</li>
        <li><strong>Neglecting to Update Type Definitions:</strong> Failing to keep type definitions up-to-date leads to type mismatches and errors.</li>
      </ul>
    </section>

    <!-- Section 18: Summary -->
    <section id="summary" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">18. Summary</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript's robust type system empowers developers to write safer and more maintainable code. By leveraging basic and advanced types, interfaces, generics, and type operators, you can model complex data structures and enforce strict type safety across your applications.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Understanding and utilizing TypeScript's type features enhances code quality, reduces runtime errors, and improves developer productivity. Adhering to best practices and avoiding common mistakes further solidifies your TypeScript proficiency, enabling you to build scalable and reliable applications.
      </p>
      <p class="text-lg text-gray-700">
        Embrace TypeScript's type system to unlock the full potential of your JavaScript projects, ensuring they are robust, maintainable, and future-proof.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TypesTypeScript',
  data() {
    return {
      // Section 1: Basic Types
      numberTypeExample: `let age: number = 30;
age = 31; // Valid
// age = 'thirty'; // Error: Type 'string' is not assignable to type 'number'.`,

      stringTypeExample: `let firstName: string = 'John';
firstName = 'Jane'; // Valid
// firstName = 42; // Error: Type 'number' is not assignable to type 'string'.`,

      booleanTypeExample: `let isActive: boolean = true;
isActive = false; // Valid
// isActive = 'yes'; // Error: Type 'string' is not assignable to type 'boolean'.`,

      // Section 2: Arrays and Tuples
      arrayTypeExample: `let numbers: number[] = [1, 2, 3];
numbers.push(4); // Valid
// numbers.push('five'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.`,

      tupleTypeExample: `let user: [string, number] = ['Alice', 25];
console.log(user[0]); // Output: Alice
console.log(user[1]); // Output: 25
// user = [25, 'Alice']; // Error: Type 'number' is not assignable to type 'string'.`,

      // Section 3: Enums
      numericEnumExample: `enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0`,

      stringEnumExample: `enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

let userStatus: Status = Status.Active;
console.log(userStatus); // Output: ACTIVE`,

      heterogeneousEnumExample: `enum Mixed {
  No = 0,
  Yes = 'YES'
}

let response: Mixed = Mixed.Yes;
console.log(response); // Output: YES`,

      // Section 4: Special Types: any, unknown, never
      anyTypeExample: `let data: any = 'Hello, World!';
data = 100; // Valid
data = { key: 'value' }; // Valid
console.log(data); // Output: { key: 'value' }`,

      unknownTypeExample: `let input: unknown = 'Hello, TypeScript!';
input = 42; // Valid

if (typeof input === 'string') {
  console.log(input.toUpperCase()); // Valid
}

// input.toUpperCase(); // Error: Object is of type 'unknown'.`,

      neverTypeExample: `function fail(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

// let result: never = fail('An error occurred.'); // Valid
// let loop: never = infiniteLoop(); // Valid`,

      // Section 5: Type Aliases
      typeAliasExample: `type ID = string | number;

let userId: ID = 'abc123';
userId = 456; // Valid
// userId = true; // Error: Type 'boolean' is not assignable to type 'ID'.`,

      unionTypeAliasExample: `type Status = 'active' | 'inactive';

let userStatus: Status = 'active';
userStatus = 'inactive'; // Valid
// userStatus = 'pending'; // Error: Type '"pending"' is not assignable to type 'Status'.`,

      intersectionTypeAliasExample: `interface Person {
  name: string;
}

interface Worker {
  employeeId: number;
}

type Employee = Person & Worker;

let employee: Employee = {
  name: 'John Doe',
  employeeId: 1234
};
// employee = { name: 'Jane Doe' }; // Error: Property 'employeeId' is missing.`,

      // Section 6: Interfaces
      interfaceDefinitionExample: `interface User {
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

      optionalPropertyExample: `interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};
// age is optional`,

      readonlyPropertyExample: `interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: 'Charlie'
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
user.name = 'Charles'; // Valid`,

      interfaceExtendingExample: `interface Person {
  name: string;
  age: number;
}

interface Worker {
  employeeId: number;
}

interface Employee extends Person, Worker {
  department: string;
}

const employee: Employee = {
  name: 'Diana',
  age: 28,
  employeeId: 5678,
  department: 'Engineering'
};`,

      classImplementingInterfaceExample: `interface User {
  id: number;
  name: string;
  email: string;
}

class Person implements User {
  constructor(public id: number, public name: string, public email: string) {}
  
  displayInfo(): void {
    console.log(\`ID: \${this.id}, Name: \${this.name}, Email: \${this.email}\`);
  }
}

const person = new Person(2, 'Ethan', 'ethan@example.com');
person.displayInfo(); // Output: ID: 2, Name: Ethan, Email: ethan@example.com`,

      // Section 7: Union and Intersection Types
      unionTypeExample: `type ID = string | number;

let userId: ID = 'abc123';
userId = 456; // Valid
// userId = true; // Error: Type 'boolean' is not assignable to type 'ID'.`,

      intersectionTypeExample: `interface Person {
  name: string;
}

interface Worker {
  employeeId: number;
}

type Employee = Person & Worker;

let employee: Employee = {
  name: 'John Doe',
  employeeId: 1234
};
// employee = { name: 'Jane Doe' }; // Error: Property 'employeeId' is missing.`,

      // Section 8: Generics
      genericFunctionExample: `function identity<T>(arg: T): T {
  return arg;
}

let num = identity<number>(42);
let str = identity<string>('Hello, Generics!');
console.log(num); // Output: 42
console.log(str); // Output: Hello, Generics!`,

      genericInterfaceExample: `interface Pair<K, V> {
  key: K;
  value: V;
}

const pair: Pair<string, number> = {
  key: 'age',
  value: 30
};
console.log(pair); // Output: { key: 'age', value: 30 }`,

      genericClassExample: `class Stack<T> {
  private items: T[] = [];
  
  push(item: T): void {
    this.items.push(item);
  }
  
  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // Output: 20

const stringStack = new Stack<string>();
stringStack.push('Hello');
stringStack.push('World');
console.log(stringStack.pop()); // Output: World`,

      // Section 9: Type Inference
      typeInferenceExample: `let inferredNumber = 10; // TypeScript infers number
// inferredNumber = 'ten'; // Error: Type 'string' is not assignable to type 'number'.

function inferReturnType(): string {
  return 'Type Inference';
}

let inferredString = inferReturnType(); // TypeScript infers string
// inferredString = 100; // Error: Type 'number' is not assignable to type 'string'.`,

      // Section 10: Type Guards
      typeofTypeGuardExample: `function printValue(value: string | number): void {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()); // Safe: value is string
  } else {
    console.log(value.toFixed(2)); // Safe: value is number
  }
}

printValue('hello'); // Output: HELLO
printValue(123.456); // Output: 123.46`,

      instanceofTypeGuardExample: `class Dog {
  bark(): void {
    console.log('Woof! Woof!');
  }
}

class Cat {
  meow(): void {
    console.log('Meow! Meow!');
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark(); // Safe: animal is Dog
  } else {
    animal.meow(); // Safe: animal is Cat
  }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog); // Output: Woof! Woof!
makeSound(cat); // Output: Meow! Meow!`,

      customTypeGuardExample: `function isString(value: any): value is string {
  return typeof value === 'string';
}

function processValue(value: string | number): void {
  if (isString(value)) {
    console.log(value.toUpperCase()); // Safe: value is string
  } else {
    console.log(value.toFixed(2)); // Safe: value is number
  }
}

processValue('TypeScript'); // Output: TYPESCRIPT
processValue(99.99); // Output: 99.99`,

      // Section 11: Literal Types
      stringLiteralTypeExample: `type Status = 'active' | 'inactive';

let userStatus: Status = 'active';
userStatus = 'inactive'; // Valid
// userStatus = 'pending'; // Error: Type '"pending"' is not assignable to type 'Status'.`,

      numberLiteralTypeExample: `type Direction = 0 | 1 | 2;

let moveDirection: Direction = 0;
moveDirection = 1; // Valid
moveDirection = 2; // Valid
// moveDirection = 3; // Error: Type '3' is not assignable to type 'Direction'.`,

      booleanLiteralTypeExample: `type LightStatus = true | false;

let isLightOn: LightStatus = true;
isLightOn = false; // Valid
// isLightOn = 'on'; // Error: Type '"on"' is not assignable to type 'LightStatus'.`,

      // Section 12: Advanced Types
      mappedTypeExample: `type Readonly<T> = {
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
user.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.`,
      
      // Section 14: Partial Mapped Type
      partialMappedTypeExample: `type Partial<T> = {
  [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;

const updateUser = (user: PartialUser) => {
  // Update logic here
};

updateUser({ name: 'Bob' }); // Valid
updateUser({ age: 30 }); // Error: Object literal may only specify known properties, and 'age' does not exist in type 'PartialUser'.`,
      
      // Section 14: Type Compatibility
      structuralTypingExample: `// Structural Typing Example
interface Animal {
  name: string;
  move(distance: number): void;
}

class Dog {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  move(distance: number) {
    console.log(\`\${this.name} moved \${distance} meters.\`);
  }
}

let animal: Animal = new Dog('Rex');
animal.move(10); // Output: Rex moved 10 meters.`,
      
      functionCompatibilityExample: `// Function Type Compatibility
type Handler = (a: number, b: number) => void;

function fn1(a: number) {
  console.log(a);
}

let fn2: Handler = fn1; // Error: Type '(a: number) => void' is not assignable to type 'Handler'.
                        // Expected 2 arguments, but got 1.`,
      
      genericsCompatibilityExample: `// Generics Type Compatibility
interface Container<T> {
  value: T;
}

let container1: Container<string> = { value: 'Hello' };
let container2: Container<any> = container1; // Compatible because string is assignable to any`,
      
      // Section 15: Practical Examples
      interfaceExtensionExample: `// Interface Extension Example
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
  department: string;
}

const employee: Employee = {
  name: 'John Doe',
  age: 30,
  employeeId: 12345,
  department: 'Engineering'
};`,
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