<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">useEffect Hook</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      
      <!-- What is useEffect -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What is useEffect?</h2>
      <p class="text-base md:text-lg mb-4">
        The <strong>useEffect</strong> hook in React allows you to perform side effects in functional components. Side effects can include data fetching, setting up subscriptions, and manually changing the DOM in React components. Essentially, useEffect serves the same purpose as lifecycle methods like <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in class-based components.
      </p>
      <p class="text-base md:text-lg mb-6">
        By using useEffect, you can synchronize your component with external systems, manage subscriptions, or handle any operations that need to occur outside the standard rendering process.
      </p>
      
      <!-- Basic Usage -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Basic Usage</h2>
      <p class="text-base md:text-lg mb-4">
        The useEffect hook accepts two arguments: a function containing the side effect and an optional dependency array. If the dependency array is not provided, the effect runs after every render. If an empty array is provided, the effect runs only once after the initial render.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Example;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the document title updates every time the component renders, reflecting the current count.
      </p>
      
      <!-- Dependency Array -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Dependency Array</h2>
      <p class="text-base md:text-lg mb-4">
        The dependency array is the second argument to useEffect. It determines when the effect should re-run based on changes to its dependencies.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong> The dependency array allows you to control the execution of the effect by specifying variables that the effect depends on. If any value in the array changes between renders, the effect will re-run. This optimization helps prevent unnecessary executions of the effect, improving performance and avoiding potential bugs.
      </p>
      
      <!-- Cleaning Up Effects -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Cleaning Up Effects</h2>
      <p class="text-base md:text-lg mb-4">
        Cleaning up effects is crucial to prevent memory leaks and other unintended side effects. useEffect can return a cleanup function that React will call before the component unmounts or before the effect re-runs due to dependency changes.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() =&gt; {
      setSeconds(prevSeconds =&gt; prevSeconds + 1);
    }, 1000);

    // Cleanup function
    return () =&gt; clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once

  return &lt;div&gt;Seconds: {seconds}&lt;/div&gt;;
}

export default Timer;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the cleanup function clears the interval when the component unmounts, preventing the interval from continuing indefinitely.
      </p>
      
      <!-- Conditional Effects and Cleanup -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conditional Effects and Cleanup</h2>
      <p class="text-base md:text-lg mb-4">
        Sometimes, you may want to run effects conditionally based on certain states or props. This ensures that effects execute only when specific conditions are met.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect } from 'react';

function Search({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    let isCancelled = false;

    fetch(`https://api.example.com/search?q=${query}`)
      .then(response =&gt; response.json())
      .then(data =&gt; {
        if (!isCancelled) {
          setResults(data.results);
        }
      });

    return () =&gt; {
      isCancelled = true;
    };
  }, [query]);

  return (
    &lt;div&gt;
      {results.map(result =&gt; (
        &lt;div key={result.id}&gt;{result.name}&lt;/div&gt;
      ))}
    &lt;/div&gt;
  );
}

export default Search;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the effect runs only when the `query` prop changes. The cleanup function sets a flag to prevent updating state if the component unmounts before the fetch completes.
      </p>
      
      <!-- What to Avoid and the Danger of useEffect -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What to Avoid and the Danger of useEffect</h2>
      <p class="text-base md:text-lg mb-4">
        While useEffect is a powerful tool, improper usage can lead to performance issues and bugs. Here are some common pitfalls to avoid:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Infinite Loops:</strong> Forgetting to include dependencies or incorrectly specifying them can cause useEffect to run continuously, leading to infinite loops.</li>
        <li><strong>Overusing Effects:</strong> Not all operations need to be inside useEffect. Use it only for side effects, not for deriving data or handling simple calculations.</li>
        <li><strong>Neglecting Cleanup:</strong> Failing to clean up subscriptions or intervals can cause memory leaks and unexpected behavior.</li>
        <li><strong>Ignoring Dependency Arrays:</strong> Not providing a dependency array when necessary can result in unnecessary re-executions of the effect.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Dangers of Improper use:</strong> Misusing useEffect can degrade application performance, cause unexpected side effects, and make debugging more challenging. Always carefully consider the dependencies and ensure proper cleanup to maintain optimal application behavior.
      </p>
      
      <!-- Running Effects After Render -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Running Effects After Render</h2>
      <p class="text-base md:text-lg mb-4">
        useEffect runs after the component has rendered to the DOM. This timing is crucial because it allows you to perform operations that require the DOM to be in place, such as measuring elements, fetching data, or integrating with third-party libraries.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect, useRef } from 'react';

function FocusInput() {
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input after render
    inputRef.current.focus();
  }, []);

  return (
    &lt;div&gt;
      &lt;input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) =&gt; setValue(e.target.value)}
        placeholder="Focus on me"
      /&gt;
    &lt;/div&gt;
  );
}

export default FocusInput;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the input field is automatically focused after the component mounts, ensuring a better user experience.
      </p>
      
      <!-- Async Render -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Async Render</h2>
      <p class="text-base md:text-lg mb-4">
        React's rendering process can be asynchronous, meaning that updates to state and props might not happen immediately. When using useEffect, it's important to handle asynchronous operations carefully to avoid race conditions and ensure that your component's state remains consistent.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect } from 'react';

function DataFetcher({ url }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (!isCancelled) {
          setData(result);
        }
      } catch (error) {
        if (!isCancelled) {
          console.error('Error fetching data:', error);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () =&gt; {
      isCancelled = true;
    };
  }, [url]);

  if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
  if (!data) return &lt;div&gt;No data available.&lt;/div&gt;;

  return (
    &lt;div&gt;
      &lt;pre&gt;{JSON.stringify(data, null, 2)}&lt;/pre&gt;
    &lt;/div&gt;
  );
}

export default DataFetcher;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This example demonstrates handling asynchronous data fetching within useEffect. It includes cancellation logic to prevent state updates if the component unmounts before the fetch completes, ensuring that the component's state remains consistent.
      </p>
      
      <!-- Concept Recap and Common Usage -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Concept Recap and Common Usage</h2>
      <p class="text-base md:text-lg mb-4">
        The <strong>useEffect</strong> hook is a powerful tool in React that allows you to perform side effects in functional components. Understanding how to use it effectively is essential for building dynamic and responsive applications.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Key Points:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>useEffect handles side effects like data fetching, subscriptions, and manual DOM manipulations.</li>
        <li>The dependency array controls when the effect runs, optimizing performance and preventing unnecessary executions.</li>
        <li>Always clean up effects to avoid memory leaks and unintended side effects.</li>
        <li>Be cautious of infinite loops by properly managing dependencies.</li>
        <li>Handle asynchronous operations carefully to maintain state consistency.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Common Usage Scenarios:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Fetching data from APIs when a component mounts or when certain dependencies change.</li>
        <li>Setting up and cleaning up event listeners or subscriptions.</li>
        <li>Updating the document title or manipulating the DOM based on component state.</li>
        <li>Integrating with third-party libraries that require DOM manipulation.</li>
      </ul>
      
      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering the useEffect hook is crucial for managing side effects in React applications. It provides a declarative way to handle operations that interact with the outside world, ensuring that your components remain predictable and efficient.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will delve into <strong>Advanced Hooks</strong>, exploring more complex state management techniques and custom hooks to enhance your React development skills.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UseEffect',
  data() {
    return {
      // Any additional state or data properties can be added here if needed
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
