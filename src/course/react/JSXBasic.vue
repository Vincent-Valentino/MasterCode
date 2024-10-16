<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">JSX Basics</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      <!-- What is JSX -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What is JSX?</h2>
      <p class="text-base md:text-lg mb-4">
        JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. JSX is used in React to describe what the UI should look like. Unlike traditional HTML, JSX is more powerful and integrates seamlessly with JavaScript, enabling dynamic content and expressions.
      </p>
      <p class="text-base md:text-lg mb-6">
        While HTML is a markup language used to structure content, and JavaScript is a programming language used to manipulate that content, JSX combines the two, allowing developers to write components that encapsulate both structure and behavior in a single place.
      </p>

      <!-- Embedding Expressions in JSX -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Embedding Expressions in JSX</h2>
      <p class="text-base md:text-lg mb-4">
        JSX allows you to embed JavaScript expressions within curly braces `{}`. This capability enables dynamic content rendering based on variables or function results.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Using Variables:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
&lt;!-- Example of Embedding a Variable in JSX --&gt;
const name = "John Doe";
&lt;h1&gt;Hello, {name}!&lt;/h1&gt;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Using Functions:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
&lt;!-- Example of Embedding a Function in JSX --&gt;
function getGreeting() {
  return "Welcome to React!";
}

&lt;p&gt;{getGreeting()}&lt;/p&gt;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        These examples demonstrate how JSX can seamlessly integrate JavaScript logic to produce dynamic and interactive user interfaces.
      </p>

      <!-- JSX Syntax Rules -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">JSX Syntax Rules</h2>
      <p class="text-base md:text-lg mb-4">
        JSX has specific syntax rules that differentiate it from both HTML and plain JavaScript:
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Single Parent Element:</strong> JSX expressions must have one root parent element. This means all JSX elements must be wrapped within a single enclosing tag.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
&lt;!-- Incorrect JSX: Multiple root elements --&gt;
&lt;h1&gt;Hello&lt;/h1&gt;
&lt;p&gt;Welcome to React!&lt;/p&gt;

&lt;!-- Correct JSX: Single root element --&gt;
&lt;div&gt;
  &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;p&gt;Welcome to React!&lt;/p&gt;
&lt;/div&gt;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Closed Tags:</strong> All JSX tags must be properly closed. Self-closing tags should end with a slash.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
&lt;!-- Incorrect JSX: Unclosed tag --&gt;
&lt;img src="logo.png" alt="Logo"&gt;

&lt;!-- Correct JSX: Self-closing tag --&gt;
&lt;img src="logo.png" alt="Logo" /&gt;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        These syntax rules ensure that JSX remains consistent and avoids potential rendering issues.
      </p>

      <!-- Single Parent and React Fragments -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Single Parent and React Fragments</h2>
      <p class="text-base md:text-lg mb-4">
        The requirement for a single parent element in JSX can sometimes lead to unnecessary wrapper elements in the DOM. To address this, React provides <strong>Fragments</strong>, which allow you to group a list of children without adding extra nodes to the DOM.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Using React Fragments:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
&lt;!-- Using a Fragment with shorthand syntax --&gt;
&lt;&gt;
  &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;p&gt;Welcome to React!&lt;/p&gt;
&lt;/&gt;

&lt;!-- Using React.Fragment --&gt;
&lt;React.Fragment&gt;
  &lt;h1&gt;Hello&lt;/h1&gt;
  &lt;p&gt;Welcome to React!&lt;/p&gt;
&lt;/React.Fragment&gt;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        By using Fragments, you can maintain a clean DOM structure without unnecessary wrapper elements.
      </p>

      <!-- JSX and HTML: Common Differences -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">JSX and HTML: Common Differences</h2>

      <!-- className instead of class -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>className</code> Instead of <code>class</code></h3>
      <p class="text-base md:text-lg mb-4">
        In HTML, the `class` attribute is used to apply CSS classes to elements. However, in JSX, you must use `className` instead of `class`. This is because `class` is a reserved keyword in JavaScript, and using `className` avoids conflicts.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
&lt;!-- HTML Example --&gt;
&lt;div class="container"&gt;Content&lt;/div&gt;

&lt;!-- JSX Example --&gt;
&lt;div className="container"&gt;Content&lt;/div&gt;
        </code>
      </pre>

      <!-- Camel Case for Attributes -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Camel Case for Attributes</h3>
      <p class="text-base md:text-lg mb-4">
        Unlike HTML, JSX uses camelCase for attribute names instead of lowercase. This aligns with JavaScript naming conventions and avoids conflicts with reserved keywords.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Examples:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
&lt;!-- HTML Example --&gt;
&lt;input type="text" maxlength="10" disabled&gt;

&lt;!-- JSX Example --&gt;
&lt;input type="text" maxLength="10" disabled /&gt;
        </code>
      </pre>

      <!-- Using JavaScript in JSX -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Using JavaScript in JSX</h2>
      <p class="text-base md:text-lg mb-4">
        JSX allows you to embed JavaScript expressions directly within your markup. This includes using simple variables, functions, and even ternary operators for conditional rendering.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Simple JavaScript Expressions:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
const name = "Alice";
const getGreeting = () => "Welcome!";

&lt;div&gt;
  &lt;p&gt;Hello, {name}!&lt;/p&gt;
  &lt;p&gt;{getGreeting()}&lt;/p&gt;
&lt;/div&gt;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Ternary Operators for Conditional Rendering:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
const isLoggedIn = true;

&lt;div&gt;
  {isLoggedIn ? (
    &lt;p&gt;Welcome back!&lt;/p&gt;
  ) : (
    &lt;p&gt;Please log in.&lt;/p&gt;
  )}
&lt;/div&gt;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        These capabilities make JSX a powerful tool for creating dynamic and interactive user interfaces.
      </p>

      <!-- Styling in JSX -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Styling in JSX</h2>
      <p class="text-base md:text-lg mb-4">
        There are several ways to apply styles in JSX, including inline styles, CSS classes, and CSS-in-JS libraries.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Inline Styles:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
&lt;!-- Inline Styles Example --&gt;
&lt;div style=&#123; &#123; color: 'blue', fontSize: '14px' &#125; &#125;&gt;
  This text is styled inline.
&lt;/div&gt;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        While inline styles are quick and easy for simple styling, it's generally recommended to use CSS classes or other styling methods for better maintainability and scalability.
      </p>

      <!-- Rendering Elements in JSX -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Rendering Elements in JSX</h2>
      <p class="text-base md:text-lg mb-4">
        Rendering elements in JSX involves describing what you want to see on the screen. React then takes care of updating the DOM to match this description.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Basic Rendering:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import ReactDOM from 'react-dom';

const element = &lt;h1&gt;Hello, React!&lt;/h1&gt;;

ReactDOM.render(element, document.getElementById('root'));
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example renders a simple `&lt;h1&gt;` element into the DOM element with the ID `root`.
      </p>

      <!-- JSX Loops -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">JSX Loops</h2>
      <p class="text-base md:text-lg mb-4">
        Looping through data and rendering multiple elements is a common task in React. JSX supports loops through JavaScript methods like `map`.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Using `map` to Render a List:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
const fruits = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    &lt;ul&gt;
      {fruits.map((fruit, index) =&gt; (
        &lt;li key={index}&gt;{fruit}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the `map` function iterates over the `fruits` array and returns a list item for each fruit. The `key` attribute helps React identify which items have changed, are added, or are removed, improving performance.
      </p>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Following best practices ensures that your React code is clean, maintainable, and efficient.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use Meaningful Names:</strong> Name your components and variables clearly to reflect their purpose.</li>
        <li><strong>Keep Components Small:</strong> Break down large components into smaller, reusable ones.</li>
        <li><strong>Avoid Inline Functions:</strong> Define functions outside of JSX to prevent unnecessary re-renders.</li>
        <li><strong>Use PropTypes or TypeScript:</strong> Type checking helps catch bugs early and makes your code more robust.</li>
        <li><strong>Follow Consistent Formatting:</strong> Use tools like Prettier and ESLint to maintain a consistent code style.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Adhering to these best practices will enhance the quality of your React applications and streamline the development process.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering JSX is crucial for effectively building and managing React components. It allows you to seamlessly integrate JavaScript logic with your UI, creating dynamic and interactive user experiences.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we'll delve deeper into advanced JSX concepts and explore how to leverage its full potential in building sophisticated React applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JSXBasics',
  data() {
    return {
      // Any additional state or data properties can be added here
    };
  },
};
</script>

<style scoped>
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
