<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Performance Optimization in React</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      
      <!-- Introduction -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Introduction</h2>
      <p class="text-base md:text-lg mb-4">
        Optimizing the performance of React applications is crucial for enhancing user experience, reducing load times, and ensuring smooth interactions. As applications grow in complexity, maintaining optimal performance becomes a challenge that requires strategic approaches and best practices.
      </p>
      <p class="text-base md:text-lg mb-6">
        This module explores advanced performance optimization techniques in React, drawing insights from top-tier resources like Developer Way on YouTube. By implementing these strategies, you can build efficient, scalable, and high-performing React applications.
      </p>

      <!-- 1. Use Memoization -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">1. Use Memoization</h2>
      <p class="text-base md:text-lg mb-4">
        Memoization is a technique used to cache the results of expensive function calls and return the cached result when the same inputs occur again. In React, memoization helps prevent unnecessary re-renders, thereby improving performance.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>How to Implement:</strong>
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">a. React.memo</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>React.memo</code> higher-order component (HOC) memoizes functional components. It prevents re-rendering if the props haven't changed.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  // Expensive calculations or rendering
  return &lt;div&gt;{data.value}&lt;/div&gt;;
});

export default ExpensiveComponent;
        </code>
      </pre>

      <h3 class="text-lg md:text-xl font-semibold mb-2">b. useMemo Hook</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>useMemo</code> hook memoizes the result of a function, recomputing it only when its dependencies change. This is particularly useful for memoizing expensive computations.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useMemo } from 'react';

function Component({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) =&gt; a.value - b.value);
  }, [items]);

  return (
    &lt;ul&gt;
      {sortedItems.map(item =&gt; (
        &lt;li key={item.id}&gt;{item.value}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default Component;
        </code>
      </pre>

      <!-- 2. Optimize Reconciliation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">2. Optimize Reconciliation</h2>
      <p class="text-base md:text-lg mb-4">
        Reconciliation is React's process of diffing the virtual DOM with the actual DOM to determine the minimal number of changes needed to update the UI. Optimizing this process can significantly enhance performance.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Best Practices:</strong>
      </p>
      <ul class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>Use Unique and Stable Keys:</strong> Always assign unique and consistent keys to list items to help React identify which items have changed.</li>
        <li><strong>Avoid Using Index as Key:</strong> Using indices as keys can lead to unexpected behavior, especially when items are reordered or removed.</li>
        <li><strong>Structure Your Components Wisely:</strong> Break down large components into smaller, manageable pieces to minimize the scope of re-renders.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example of Proper Key Usage:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function ItemList({ items }) {
  return (
    &lt;ul&gt;
      {items.map(item =&gt; (
        &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default ItemList;
        </code>
      </pre>

      <!-- 3. Utilize Higher-Order Components (HOCs) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">3. Utilize Higher-Order Components (HOCs)</h2>
      <p class="text-base md:text-lg mb-4">
        Higher-Order Components are functions that take a component and return a new component with enhanced capabilities. HOCs can help in abstracting common functionalities, thereby promoting code reuse and reducing duplication.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Best Practices:</strong>
      </p>
      <ul class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>Keep HOCs Pure:</strong> Ensure that HOCs do not modify the original component’s behavior in unexpected ways.</li>
        <li><strong>Compose HOCs Carefully:</strong> When using multiple HOCs, order them logically to maintain clarity and prevent conflicts.</li>
        <li><strong>Pass Through Props:</strong> Always pass unrecognized props to the wrapped component to maintain flexibility.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example of an HOC:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

// Higher-Order Component to add loading functionality
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) return &lt;div&gt;Loading...&lt;/div&gt;;
    return &lt;Component {...props} /&gt;;
  };
}

export default withLoading;
        </code>
      </pre>

      <!-- 4. Avoid Unnecessary Re-renders -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">4. Avoid Unnecessary Re-renders</h2>
      <p class="text-base md:text-lg mb-4">
        Unnecessary re-renders can degrade the performance of your React application. By minimizing these re-renders, you can ensure a smoother and more efficient user experience.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Strategies:</strong>
      </p>
      <ul class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>Use React.PureComponent:</strong> For class components, extending <code>React.PureComponent</code> performs a shallow comparison of props and state to prevent unnecessary updates.</li>
        <li><strong>Implement shouldComponentUpdate:</strong> Manually control when a component should re-render by implementing the <code>shouldComponentUpdate</code> lifecycle method.</li>
        <li><strong>Leverage React.memo:</strong> For functional components, wrapping them with <code>React.memo</code> can prevent re-renders if props haven’t changed.</li>
        <li><strong>Optimize Context Usage:</strong> Avoid placing frequently changing data in context to prevent widespread re-renders.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example Using React.memo:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

const PureComponent = React.memo(function PureComponent({ data }) {
  console.log('PureComponent Rendered');
  return &lt;div&gt;{data}&lt;/div&gt;;
});

export default PureComponent;
        </code>
      </pre>

      <!-- 5. Optimize Props Rendering -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">5. Optimize Props Rendering</h2>
      <p class="text-base md:text-lg mb-4">
        Efficiently managing how props are passed and rendered can significantly impact the performance of your React components. Avoiding the creation of new objects or functions on every render can prevent unnecessary updates.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Best Practices:</strong>
      </p>
      <ul class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>Avoid Inline Functions:</strong> Defining functions within the render method can lead to re-creation on every render, causing child components to re-render.</li>
        <li><strong>Use useCallback Hook:</strong> Memoize callback functions to prevent their re-creation unless dependencies change.</li>
        <li><strong>Prevent Passing New Object References:</strong> Avoid passing new object or array references as props unless necessary.</li>
        <li><strong>Destructure Props:</strong> Destructuring can help in preventing unnecessary renders by avoiding prop spreading.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example Using useCallback:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prevCount =&gt; prevCount + 1);
  }, []);

  return (
    &lt;div&gt;
      &lt;button onClick={handleClick}&gt;Increment&lt;/button&gt;
      &lt;ChildComponent onClick={handleClick} /&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default ParentComponent;
        </code>
      </pre>

      <!-- 6. Code Splitting and Lazy Loading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">6. Code Splitting and Lazy Loading</h2>
      <p class="text-base md:text-lg mb-4">
        Code splitting allows you to split your code into smaller chunks, which can then be loaded on demand. This reduces the initial load time and improves the performance of your React application.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>How to Implement:</strong>
      </p>
      <ul class="list-decimal list-inside text-base md:text-lg mb-6">
        <li><strong>React.lazy:</strong> Dynamically import components using <code>React.lazy</code> for lazy loading.</li>
        <li><strong>Suspense Component:</strong> Use the <code>Suspense</code> component to display a fallback UI while the lazy component is loading.</li>
        <li><strong>Dynamic Imports:</strong> Leverage dynamic <code>import()</code> statements to split code at logical breakpoints.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example of React.lazy and Suspense:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { Suspense, lazy } from 'react';

const LazyComponent = lazy(() =&gt; import('./LazyComponent'));

function App() {
  return (
    &lt;div&gt;
      &lt;Suspense fallback=&lt;div&gt;Loading...&lt;/div&gt;&gt;
        &lt;LazyComponent /&gt;
      &lt;/Suspense&gt;
    &lt;/div&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Implementing performance optimizations requires a strategic approach. Here are some best practices to follow:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Profile Your Application:</strong> Use tools like React Profiler and Chrome DevTools to identify performance bottlenecks before optimizing.</li>
        <li><strong>Keep Components Small and Focused:</strong> Smaller components are easier to optimize and maintain.</li>
        <li><strong>Avoid Inline Objects and Functions:</strong> Define objects and functions outside of the render method or use memoization hooks to prevent unnecessary re-renders.</li>
        <li><strong>Use Immutable Data Structures:</strong> Immutable data ensures that changes are easily detectable, which aids in preventing unnecessary re-renders.</li>
        <li><strong>Leverage Webpack Bundle Analyzer:</strong> Analyze your bundle size to identify and eliminate unnecessary dependencies.</li>
        <li><strong>Implement Throttling and Debouncing:</strong> Control the rate at which functions are executed to improve performance, especially for events like scrolling or resizing.</li>
        <li><strong>Optimize Images and Assets:</strong> Compress images and optimize asset loading to reduce load times.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Performance optimization in React is essential for building efficient and user-friendly applications. By implementing the strategies outlined in this module—such as memoization, optimizing reconciliation, utilizing higher-order components, avoiding unnecessary re-renders, optimizing props rendering, and employing code splitting—you can significantly enhance the performance of your React applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        Remember to continually profile and monitor your application to identify new areas for improvement. Adhering to these best practices will ensure that your React applications remain fast, responsive, and scalable as they grow in complexity.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerformanceOptimizationInReact',
  data() {
    return {
      // Additional state or data properties can be added here
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
