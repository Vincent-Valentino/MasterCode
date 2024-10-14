<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-blue-600 rounded-t-xl p-4">
      <img src="/icons/typescript.svg" alt="TypeScript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">TypeScript and JavaScript Interoperability</h1>
    </div>

    <!-- Section: Understanding JavaScript Compatibility -->
    <section id="js-compatibility" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-3xl font-semibold mb-4">Understanding JavaScript Compatibility</h2>
      <p class="text-lg text-gray-700 mb-4">
        One of the core philosophies of TypeScript is that it is a superset of JavaScript, meaning that all valid JavaScript code is also valid TypeScript code. This compatibility allows developers to incrementally adopt TypeScript in existing JavaScript projects.
      </p>

      <h3 class="text-2xl font-semibold mb-2">TypeScript Is JavaScript with Types</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript builds upon JavaScript by adding static type definitions. These types provide a way to describe the shape of an object, providing better documentation and allowing TypeScript to validate your code.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Transpilation to JavaScript</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript code is not executed directly by browsers or Node.js. Instead, TypeScript code is transpiled (or compiled) into plain JavaScript code, which can then be executed in any JavaScript environment.
      </p>

      <h3 class="text-2xl font-semibold mb-2">ESNext Features Support</h3>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript supports the latest JavaScript features (known as ESNext) and can transpile them down to earlier versions like ES5 or ES6, ensuring compatibility with older environments.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">let greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet('Alice')); // Output: Hello, Alice!</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Tip: Gradual Adoption</h3>
      <p class="text-lg text-gray-700 mb-4">
        You don't have to rewrite your entire JavaScript codebase in TypeScript all at once. You can gradually introduce TypeScript by renaming files from <code>.js</code> to <code>.ts</code> and adding type annotations where appropriate.
      </p>
    </section>

    <!-- Section: Working with JavaScript Libraries in TypeScript -->
    <section id="js-libraries" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-3xl font-semibold mb-4">Working with JavaScript Libraries in TypeScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        When using JavaScript libraries in a TypeScript project, you might encounter issues due to the lack of type definitions. TypeScript needs type information to provide type checking and IntelliSense.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Using Type Definitions</h3>
      <p class="text-lg text-gray-700 mb-4">
        Many popular JavaScript libraries have type definitions available, either bundled with the library or available through the <code>@types</code> repository. Type definitions provide TypeScript with information about the library's API.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Example: Using Lodash in TypeScript</h3>
      <p class="text-lg text-gray-700 mb-4">
        Let's see how to use the Lodash library in a TypeScript project.
      </p>

      <!-- Installation Instructions -->
      <div class="bg-gray-50 p-4 rounded mb-4">
        <h4 class="text-xl font-semibold mb-2">Step 1: Install Lodash and Its Type Definitions</h4>
        <pre class="bg-gray-800 rounded p-4 overflow-x-auto" v-pre>
<code class="language-bash">
npm install lodash
npm install --save-dev @types/lodash</code></pre>
      </div>

      <h4 class="text-xl font-semibold mb-2">Step 2: Import and Use Lodash Functions</h4>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">import _ from 'lodash';

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = _.reverse([...numbers]);

console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Handling Libraries Without Type Definitions</h3>
      <p class="text-lg text-gray-700 mb-4">
        If a library does not have type definitions, you can create custom type definitions or use the <code>declare</code> keyword to inform TypeScript about the module.
      </p>

      <h4 class="text-xl font-semibold mb-2">Using the <code>declare</code> Keyword</h4>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">// Declare the module
declare module 'some-library';

// Now you can import it without TypeScript errors
import someLibrary from 'some-library';

someLibrary.doSomething();</code></pre>

      <h4 class="text-xl font-semibold mb-2">Creating Custom Type Definitions</h4>
      <p class="text-lg text-gray-700 mb-4">
        You can create a <code>d.ts</code> file to define types for the library.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">// some-library.d.ts
declare module 'some-library' {
  export function doSomething(): void;
}</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Tip: Contribute to DefinitelyTyped</h3>
      <p class="text-lg text-gray-700 mb-4">
        If you create type definitions for a library, consider contributing them to the DefinitelyTyped repository so others can benefit.
      </p>
    </section>

    <!-- Section: Using @types to Handle Type Definitions -->
    <section id="types-handling" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-3xl font-semibold mb-4">Using @types to Handle Type Definitions</h2>
      <p class="text-lg text-gray-700 mb-4">
        The <code>@types</code> namespace on npm is a community-driven repository of TypeScript type definitions. It allows you to easily install type definitions for popular libraries.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Installing Type Definitions</h3>
      <p class="text-lg text-gray-700 mb-4">
        To install type definitions for a library, use npm or yarn:
      </p>

      <!-- Installation Instructions -->
      <div class="bg-gray-50 rounded mb-4">
        <pre class="bg-gray-800 rounded p-4 overflow-x-auto" v-pre>
<code class="language-bash">npm install --save-dev @types/library-name
# or
yarn add --dev @types/library-name</code></pre>
      </div>

      <h3 class="text-2xl font-semibold mb-2">Example: Adding Types for Express.js</h3>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-bash">npm install express
npm install --save-dev @types/express</code></pre>

      <p class="text-lg text-gray-700 mb-4">
        Now, you can use Express with full type support:
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Global vs. Module Type Definitions</h3>
      <p class="text-lg text-gray-700 mb-4">
        Some libraries have global type definitions, while others use module-based definitions. Be aware of how the library exports its types to import them correctly.
      </p>

      <h4 class="text-xl font-semibold mb-2">Global Type Definitions</h4>
      <p class="text-lg text-gray-700 mb-4">
        For libraries that add to the global scope, you might not need to import them explicitly.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">// Assume jQuery is globally available
$('#element').hide();</code></pre>

      <h4 class="text-xl font-semibold mb-2">Module Type Definitions</h4>
      <p class="text-lg text-gray-700 mb-4">
        For module-based libraries, you need to import them to access their types.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">import * as $ from 'jquery';

$('#element').hide();</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Tip: Use TypeScript's Automatic Type Acquisition</h3>
      <p class="text-lg text-gray-700 mb-4">
        Some editors, like Visual Studio Code, can automatically download type definitions for you. Ensure that <code>TypeScript: Disable Automatic Type Acquisition</code> is set to <code>false</code> in your editor settings.
      </p>
    </section>

    <!-- Section: Migrating a JavaScript Project to TypeScript -->
    <section id="migrating-js-to-ts" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-3xl font-semibold mb-4">Migrating a JavaScript Project to TypeScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        Migrating an existing JavaScript project to TypeScript can seem daunting, but with a systematic approach, it can be done efficiently. Below are steps and tips to help you through the process.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Step 1: Add a <code>tsconfig.json</code> File</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>tsconfig.json</code> file specifies the root files and compiler options required to compile the project.
      </p>

      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-json">
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "allowJs": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src/**/*"]
}</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Step 2: Rename Files to <code>.ts</code> or <code>.tsx</code></h3>
      <p class="text-lg text-gray-700 mb-4">
        Start by renaming your JavaScript files from <code>.js</code> to <code>.ts</code> (or <code>.tsx</code> for React projects). TypeScript will now type-check these files.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Step 3: Address Type Errors</h3>
      <p class="text-lg text-gray-700 mb-4">
        With <code>strict</code> mode enabled, TypeScript will report type errors. Begin fixing these errors by adding type annotations and correcting code where necessary.
      </p>

      <h4 class="text-xl font-semibold mb-2">Tip: Use <code>any</code> as a Temporary Measure</h4>
      <p class="text-lg text-gray-700 mb-4">
        If you encounter complex type errors, you can use the <code>any</code> type as a stopgap to silence errors. However, plan to replace <code>any</code> with proper types eventually.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Step 4: Add Type Definitions for External Libraries</h3>
      <p class="text-lg text-gray-700 mb-4">
        Install type definitions for any external libraries you're using, as shown in previous sections.

        <!-- List of Steps -->
        <ol class="list-decimal list-inside text-lg text-gray-700 mb-4">
          <li>Identify the libraries without type definitions.</li>
          <li>Install type definitions using <code>@types</code>.</li>
          <li>Create custom type definitions if necessary.</li>
        </ol>
      </p>

      <h3 class="text-2xl font-semibold mb-2">Step 5: Enable Stricter Compiler Options</h3>
      <p class="text-lg text-gray-700 mb-4">
        As you progress, consider enabling stricter compiler options to catch more errors.

        <!-- List of Compiler Options -->
        <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
          <li><code>"noImplicitAny": true</code> - Warns when the compiler infers an <code>any</code> type.</li>
          <li><code>"strictNullChecks": true</code> - Ensures that <code>null</code> and <code>undefined</code> are handled correctly.</li>
          <li><code>"noImplicitThis": true</code> - Warns when the type of <code>this</code> is implicitly <code>any</code>.</li>
        </ul>
      </p>

      <h3 class="text-2xl font-semibold mb-2">Step 6: Refactor to Use TypeScript Features</h3>
      <p class="text-lg text-gray-700 mb-4">
        Leverage TypeScript features to improve your codebase:

        <!-- List of Features -->
        <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
          <li>Use interfaces and type aliases to define object shapes.</li>
          <li>Implement enums for clearer value sets.</li>
          <li>Apply generics to create reusable components.</li>
          <li>Utilize access modifiers (<code>public</code>, <code>private</code>, <code>protected</code>) in classes.</li>
        </ul>
      </p>

      <h3 class="text-2xl font-semibold mb-2">Step 7: Continuous Integration and Testing</h3>
      <p class="text-lg text-gray-700 mb-4">
        Integrate TypeScript compilation into your build process and ensure that your tests pass after each change. This helps catch any issues introduced during the migration.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Tip: Use Migration Tools</h3>
      <p class="text-lg text-gray-700 mb-4">
        Tools like <a href="https://github.com/airbnb/ts-migrate" class="text-blue-600 hover:text-blue-800">ts-migrate</a> can automate parts of the migration process by adding type annotations and fixing trivial issues.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Common Pitfalls and How to Avoid Them</h3>

      <h4 class="text-xl font-semibold mb-2">Implicit <code>any</code> Types</h4>
      <p class="text-lg text-gray-700 mb-4">
        Leaving variables untyped can lead to implicit <code>any</code> types, which defeat the purpose of using TypeScript. Use type annotations or enable <code>"noImplicitAny": true</code> to catch these.
      </p>

      <h4 class="text-xl font-semibold mb-2">Ignoring Type Errors</h4>
      <p class="text-lg text-gray-700 mb-4">
        Avoid using TypeScript's <code>// @ts-ignore</code> comment to silence errors unless absolutely necessary. It's better to address the underlying issue.
      </p>

      <h4 class="text-xl font-semibold mb-2">Overusing the <code>any</code> Type</h4>
      <p class="text-lg text-gray-700 mb-4">
        While <code>any</code> can be a useful tool during migration, overusing it can lead to a loss of type safety. Strive to replace <code>any</code> with specific types as your migration progresses.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Final Thoughts</h3>
      <p class="text-lg text-gray-700 mb-4">
        Migrating to TypeScript is a worthwhile investment that can lead to more robust and maintainable code. Take the process step by step, and don't hesitate to involve your team in discussions about best practices.
      </p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'TypeScriptJSInteroperability',
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
