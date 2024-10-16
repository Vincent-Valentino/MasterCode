<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Components and Props</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      
      <!-- What are Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What are Components?</h2>
      <p class="text-base md:text-lg mb-4">
        Components are the building blocks of React applications. They allow you to split the UI into independent, reusable pieces that can be managed separately. Each component encapsulates its own structure, behavior, and styling, making it easier to develop and maintain complex user interfaces.
      </p>
      <p class="text-base md:text-lg mb-6">
        There are two main types of components in React:
      </p>
      
      <!-- Functional vs Class Components -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Functional and Class Components</h3>
      <p class="text-base md:text-lg mb-4">
        <strong>Functional Components:</strong> These are JavaScript functions that return JSX. They are simple, easy to read, and are the preferred way to create components in modern React development. Functional components can use React Hooks to manage state and side effects.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Class Components:</strong> These are ES6 classes that extend `React.Component`. They have additional features like lifecycle methods and internal state management. While powerful, class components are generally more verbose and are being gradually replaced by functional components with Hooks.
      </p>
      
      <!-- Comparison Table -->
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left bg-white border-collapse">
          <thead>
            <tr>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Feature</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Functional Components</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Class Components</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Syntax</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">JavaScript functions</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">ES6 classes</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">State Management</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Using Hooks</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">this.state</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Lifecycle Methods</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Using Hooks like useEffect</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Built-in lifecycle methods</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Boilerplate</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Less verbose</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">More verbose</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Performance</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Generally faster</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Slightly slower due to additional features</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p class="text-base md:text-lg mb-6">
        <strong>When to Use:</strong> Functional components are recommended for most use cases due to their simplicity and the power of Hooks. Class components can still be used, especially in older codebases or when specific lifecycle methods are needed.
      </p>
      
      <!-- Simple Functional Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Simple Functional Components</h2>
      <p class="text-base md:text-lg mb-4">
        Creating functional components is straightforward. You define a JavaScript function that returns JSX and export it for use in other parts of your application.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Creating and Exporting a Functional Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

export default Welcome;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Importing and Using the Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    &lt;div&gt;
      &lt;Welcome name="Alice" /&gt;
      &lt;Welcome name="Bob" /&gt;
    &lt;/div&gt;
  );
}

export default App;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example demonstrates how to create a simple functional component, export it, and import it into another component for use.
      </p>
      
      <!-- Best Practices in Creating Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Best Practices in Creating Components</h2>
      <p class="text-base md:text-lg mb-4">
        Following best practices ensures that your components are reusable, maintainable, and easy to understand. Here are some recommended practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use Meaningful Names:</strong> Name your components based on their functionality or the UI element they represent.</li>
        <li><strong>Keep Components Small and Focused:</strong> Each component should handle a single piece of functionality or UI element.</li>
        <li><strong>Use Prop Types or TypeScript:</strong> Define the expected types for props to catch errors early.</li>
        <li><strong>Avoid Unnecessary State:</strong> Only use state when necessary to manage dynamic data.</li>
        <li><strong>Structure Your Files Logically:</strong> Organize components in directories based on their roles or features.</li>
        <li><strong>Include Images for Clarity:</strong> Visual aids like screenshots or diagrams can help illustrate component structures and interactions.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example with Images:</strong> When documenting or teaching components, include images that show the component hierarchy or how components interact within the application.
      </p>
      
      <!-- What are Props -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What are Props?</h2>
      <p class="text-base md:text-lg mb-4">
        Props, short for properties, are a way to pass data from one component to another. They allow components to be dynamic and reusable by providing them with the necessary data to render.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Why Use Props:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Enable Component Reusability: Components can be used in different contexts with different data.</li>
        <li>Maintain Data Flow: Props help maintain a unidirectional data flow, making the application easier to debug and understand.</li>
        <li>Customize Components: They allow components to be customized based on the data passed to them.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Can Sibling Components Pass Props?</strong> No, sibling components cannot pass props directly to each other. Props are passed from parent to child. To enable communication between siblings, you can lift the shared state up to their common parent or use state management libraries like Redux or Context API.
      </p>
      
      <!-- Using Props Example -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Using Props</h2>
      <p class="text-base md:text-lg mb-4">
        Here's a simple example of how to use props in functional components:
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Parent Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    &lt;div&gt;
      &lt;Greeting name="Alice" /&gt;
      &lt;Greeting name="Bob" /&gt;
    &lt;/div&gt;
  );
}

export default App;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Child Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function Greeting(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

export default Greeting;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the `App` component passes the `name` prop to the `Greeting` component, which then renders a personalized greeting message.
      </p>
      
      <!-- Default Props -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Default Props</h2>
      <p class="text-base md:text-lg mb-4">
        Default props allow you to define default values for props in case they are not provided by the parent component. This ensures that your components have fallback values and behave predictably.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Setting Default Props:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

Greeting.defaultProps = {
  name: 'Guest',
};

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        If the `name` prop is not provided, it defaults to "Guest".
      </p>
      
      <!-- What is propTypes -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What is propTypes?</h2>
      <p class="text-base md:text-lg mb-4">
        `propTypes` is a mechanism to ensure that components use the correct data types for props. It helps catch bugs by validating the types of props passed to components.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Using propTypes:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import PropTypes from 'prop-types';

function Greeting(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, `name` is required and must be a string. If a different type is passed or if it's missing, React will log a warning in the console during development.
      </p>
      
      <!-- Props vs State -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Props vs State</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding the difference between props and state is fundamental in React development. While both are used to manage data in components, they serve different purposes.
      </p>
      
      <!-- Comparison Table -->
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left bg-white border-collapse">
          <thead>
            <tr>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Aspect</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Props</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Purpose</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Pass data from parent to child components.</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Manage dynamic data within a component.</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Mutability</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Immutable: Read-only in child components.</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Mutable: Can be updated within the component.</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Initialization</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Passed by the parent component.</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Initialized within the component (using useState or this.state).</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Usage</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">For configuring components, passing data, event handlers.</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">For managing component-specific data like form inputs, toggles, etc.</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p class="text-base md:text-lg mb-6">
        <strong>Note:</strong> State will be covered in detail in the next course.
      </p>
      
      <!-- Example of Rendering Multiple Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Example of Rendering Multiple Components</h2>
      <p class="text-base md:text-lg mb-4">
        Rendering multiple instances of a component allows you to display dynamic lists or collections of data.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Parent Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import Product from './Product';

function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: '$999' },
    { id: 2, name: 'Smartphone', price: '$599' },
    { id: 3, name: 'Tablet', price: '$399' },
  ];

  return (
    &lt;div&gt;
      {products.map(product =&gt; (
        &lt;Product key={product.id} name={product.name} price={product.price} /&gt;
      ))}
    &lt;/div&gt;
  );
}

export default ProductList;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Child Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  return (
    &lt;div className="product"&gt;
      &lt;h2&gt;{props.name}&lt;/h2&gt;
      &lt;p&gt;Price: {props.price}&lt;/p&gt;
    &lt;/div&gt;
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the `ProductList` component renders multiple `Product` components by mapping over an array of product data. Each `Product` receives `name` and `price` as props, allowing for dynamic and reusable component instances.
      </p>
      
      <!-- Children Props and Component Composition -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Children Props and Component Composition</h2>
      <p class="text-base md:text-lg mb-4">
        React allows components to pass other components or elements as children, enabling powerful component composition. This makes it easy to build complex UIs by combining simpler components.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Using Children Props:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function Card(props) {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;{props.title}&lt;/h2&gt;
      &lt;div&gt;{props.children}&lt;/div&gt;
    &lt;/div&gt;
  );
}

export default Card;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Using the Card Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import Card from './Card';

function App() {
  return (
    &lt;div&gt;
      &lt;Card title="Card 1"&gt;
        &lt;p&gt;This is the content of Card 1.&lt;/p&gt;
      &lt;/Card&gt;
      
      &lt;Card title="Card 2"&gt;
        &lt;p&gt;This is the content of Card 2.&lt;/p&gt;
      &lt;/Card&gt;
    &lt;/div&gt;
  );
}

export default App;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Best Practices for Props:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Keep Props Simple:</strong> Pass only the necessary data to child components to keep them reusable and easy to understand.</li>
        <li><strong>Use Descriptive Names:</strong> Name props clearly to indicate their purpose and the data they carry.</li>
        <li><strong>Validate Props:</strong> Use `propTypes` or TypeScript to enforce the expected data types and requirements for props.</li>
        <li><strong>Avoid Over-Passing Props:</strong> Don't pass props that are not needed by child components, as it can lead to unnecessary re-renders and increased complexity.</li>
        <li><strong>Leverage Children Props for Flexibility:</strong> Use `children` props to allow parent components to pass varying content to child components.</li>
      </ul>
      
      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Understanding components and props is essential for building scalable and maintainable React applications. Components enable you to break down complex UIs into manageable pieces, while props allow for dynamic data passing and component customization.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will explore <strong>State Management</strong> in React, diving into how components can manage and update their internal state to create interactive user experiences.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentsAndProps',
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
