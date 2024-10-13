<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-blue-600 rounded-t-xl p-4">
      <img src="/icons/typescript.svg" alt="Typescript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to Typescript</h1>
    </div>

    <!-- Section 1: Why TypeScript Instead of Just JavaScript? -->
    <section id="why-typescript" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-3xl font-semibold mb-4">Why TypeScript Instead of Just JavaScript?</h2>
      <p class="text-lg text-gray-700 mb-4">
        JavaScript is a versatile and widely-used language, but as applications grow in complexity, maintaining large codebases can become challenging. TypeScript addresses these challenges by introducing static typing and other advanced features that enhance code reliability, maintainability, and developer productivity.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Static Typing:</strong> Detect errors at compile-time rather than runtime, reducing bugs and improving code quality.</li>
        <li><strong>Enhanced Tooling:</strong> Improved IntelliSense, autocompletion, and navigation in IDEs.</li>
        <li><strong>Better Maintainability:</strong> Clearer contracts and interfaces make code easier to understand and maintain.</li>
        <li><strong>Advanced Features:</strong> Access to features like interfaces, enums, generics, and more that are not available in vanilla JavaScript.</li>
      </ul>
    </section>

    <!-- Section 2: Features Added by TypeScript -->
    <section id="features" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-3xl font-semibold mb-4">Features Added by TypeScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript enriches JavaScript by introducing several features that facilitate better coding practices and advanced functionalities.
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Type Annotations:</strong> Define variable types to enforce type safety.</li>
        <li><strong>Interfaces:</strong> Define contracts for objects, ensuring consistent structure.</li>
        <li><strong>Classes and Inheritance:</strong> Advanced object-oriented programming features with support for inheritance.</li>
        <li><strong>Generics:</strong> Create reusable and flexible components and functions.</li>
        <li><strong>Enums:</strong> Define a set of named constants for better code clarity.</li>
        <li><strong>Modules:</strong> Organize code into reusable modules with explicit imports and exports.</li>
        <li><strong>Decorators:</strong> Annotate and modify classes and properties (experimental feature).</li>
      </ul>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A diagram illustrating TypeScript features overlaying JavaScript, highlighting added functionalities like static typing, interfaces, etc.
        Alt Text: "Diagram showing TypeScript features enhancing JavaScript capabilities."
      -->
    </section>

    <!-- Section 3: Who Uses TypeScript and Why? -->
    <section id="usage" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-3xl font-semibold mb-4">Who Uses TypeScript and Why?</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript has been adopted by numerous companies and projects due to its ability to improve code quality and developer productivity. Prominent organizations leveraging TypeScript include:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
        <li><strong>Microsoft:</strong> As the creator of TypeScript, Microsoft extensively uses it in its products like Visual Studio Code.</li>
        <li><strong>Google:</strong> Angular, one of the most popular front-end frameworks, is built with TypeScript.</li>
        <li><strong>Airbnb:</strong> Utilizes TypeScript for its frontend codebase to enhance maintainability.</li>
        <li><strong>Slack:</strong> Employs TypeScript to manage its complex codebase efficiently.</li>
        <li><strong>Asana:</strong> Uses TypeScript to ensure type safety and reduce bugs in their applications.</li>
      </ul>
      <p class="text-lg text-gray-700">
        These organizations choose TypeScript to handle large-scale applications, enforce strict type checking, and improve collaboration among development teams.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: Logos of companies that use TypeScript (Microsoft, Google, Airbnb, Slack, Asana) arranged in a visually appealing manner.
        Alt Text: "Logos of companies that utilize TypeScript in their projects."
      -->
    </section>

    <!-- Section 4: Differences and Learning Curve Compared to JavaScript -->
    <section id="differences" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-3xl font-semibold mb-4">Differences and Learning Curve Compared to JavaScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        Transitioning from JavaScript to TypeScript involves understanding the key differences and adapting to the additional syntax and concepts. While TypeScript offers numerous advantages, it also introduces a learning curve, especially for developers unfamiliar with static typing and object-oriented programming principles.
      </p>

      <!-- Comparison Table -->
      <table class="min-w-full bg-white border border-gray-200 mb-6">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Feature</th>
            <th class="py-2 px-4 border-b">JavaScript</th>
            <th class="py-2 px-4 border-b">TypeScript</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-2 px-4 border-b">Typing</td>
            <td class="py-2 px-4 border-b">Dynamic Typing</td>
            <td class="py-2 px-4 border-b">Static Typing</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Type Annotations</td>
            <td class="py-2 px-4 border-b">Not Available</td>
            <td class="py-2 px-4 border-b">Supported</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Interfaces</td>
            <td class="py-2 px-4 border-b">Not Available</td>
            <td class="py-2 px-4 border-b">Supported</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Generics</td>
            <td class="py-2 px-4 border-b">Not Available</td>
            <td class="py-2 px-4 border-b">Supported</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Compilation</td>
            <td class="py-2 px-4 border-b">Interpreted at Runtime</td>
            <td class="py-2 px-4 border-b">Compiled to JavaScript</td>
          </tr>
          <tr>
            <td class="py-2 px-4 border-b">Tooling Support</td>
            <td class="py-2 px-4 border-b">Basic</td>
            <td class="py-2 px-4 border-b">Enhanced with IntelliSense, Autocompletion</td>
          </tr>
        </tbody>
      </table>

      <!-- Explanation of Table -->
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The table above highlights the fundamental differences between JavaScript and TypeScript. TypeScript introduces static typing, interfaces, generics, and requires a compilation step, which collectively contribute to more robust and maintainable code.
      </p>

      <!-- Learning Curve -->
      <h3 class="text-2xl font-semibold mt-6 mb-4">Learning Curve</h3>
      <p class="text-lg text-gray-700 mb-4">
        For developers familiar with JavaScript, learning TypeScript involves understanding additional syntax and concepts related to static typing and object-oriented programming. Key areas to focus on include:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>Type Annotations and Type Inference</li>
        <li>Interfaces and Type Aliases</li>
        <li>Generics</li>
        <li>Classes and Inheritance</li>
        <li>Modules and Namespaces</li>
      </ul>
      <p class="text-lg text-gray-700">
        However, the transition is often smooth, especially for those with experience in strongly-typed languages like Java or C#. The benefits in terms of code quality and tooling support make the investment in learning TypeScript worthwhile.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A side-by-side comparison diagram showing JavaScript and TypeScript with their respective features highlighted.
        Alt Text: "Side-by-side comparison of JavaScript and TypeScript features."
      -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToTypeScript',
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
</style>
