<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Using Keys in React</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">

      <!-- 1. What are Keys in React? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What are Keys in React?</h2>

      <!-- Keys as Unique Identifiers -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Keys as Unique Identifiers</h3>
      <p class="text-base md:text-lg mb-4">
        Keys are unique identifiers used by React to keep track of elements in a list. They help React identify which items have changed, been added, or removed, enhancing the efficiency of the rendering process.
      </p>

      <!-- Keys Improve React's Efficiency -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Keys Improve React's Efficiency</h3>
      <p class="text-base md:text-lg mb-6">
        By assigning keys to elements, React can optimize rendering performance, ensuring that only the necessary components are re-rendered when the state changes.
      </p>

      <!-- 2. Why are Keys Necessary? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Why are Keys Necessary?</h2>

      <!-- Keys Improve Rendering Performance -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Keys Improve Rendering Performance</h3>
      <p class="text-base md:text-lg mb-4">
        Keys allow React to minimize re-renders by keeping track of elements. This means that when the data changes, React can quickly determine which items need to be updated without re-rendering the entire list.
      </p>

      <!-- Keys Differentiate Between List Items -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Keys Differentiate Between List Items</h3>
      <p class="text-base md:text-lg mb-6">
        By providing unique keys, React can differentiate between list items, ensuring that updates to one item don’t unnecessarily re-render others. This leads to more efficient and predictable UI updates.
      </p>

      <!-- 3. How to Add Keys in Lists -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">How to Add Keys in Lists</h2>

      <!-- Adding a Key Prop Inside .map() -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Adding a Key Prop Inside <code>.map()</code></h3>
      <p class="text-base md:text-lg mb-4">
        When rendering lists in React, you should add a <code>key</code> prop to each element inside the <code>.map()</code> function. This key must be unique among its siblings.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function FruitList() {
  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    &lt;ul&gt;
      {fruits.map((fruit, index) =&gt; (
        &lt;li key={index}&gt;{fruit}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default FruitList;
        </code>
      </pre>

      <!-- Keys Must Be Unique to Siblings -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Keys Must Be Unique to Siblings</h3>
      <p class="text-base md:text-lg mb-6">
        Each key should be unique among its siblings but doesn’t need to be globally unique. This ensures that React can accurately track each element within its immediate list.
      </p>

      <!-- 4. Best Practices for Generating Keys -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Best Practices for Generating Keys</h2>

      <!-- Use Stable and Unique Values from Data -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Use Stable and Unique Values from Data</h3>
      <p class="text-base md:text-lg mb-4">
        The best keys are unique and stable. Use unique identifiers from your data, such as IDs from a database, to ensure keys remain consistent across renders.
      </p>

      <!-- Avoid Using Array Indexes as Keys -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Avoid Using Array Indexes as Keys</h3>
      <p class="text-base md:text-lg mb-6">
        Using array indexes as keys can lead to unexpected behavior, especially when items are reordered, added, or removed. Only use indexes as keys for static lists that do not change.
      </p>

      <!-- 5. Common Mistakes with Keys -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Common Mistakes with Keys</h2>

      <!-- Using Non-Unique Values -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Non-Unique Values</h3>
      <p class="text-base md:text-lg mb-4">
        Assigning the same key to multiple elements can cause rendering issues and unexpected behavior, as React relies on keys to differentiate between elements.
      </p>

      <!-- Using Array Indexes in Dynamic Lists -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Array Indexes in Dynamic Lists</h3>
      <p class="text-base md:text-lg mb-4">
        When lists are dynamic and items can be reordered, added, or removed, using array indexes as keys can lead to incorrect item associations and performance issues.
      </p>

      <!-- Not Providing a Key -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Not Providing a Key</h3>
      <p class="text-base md:text-lg mb-6">
        Failing to provide a key prop when rendering lists can result in React displaying warnings and inefficient rendering behavior.
      </p>

      <!-- 6. Keys in Nested Lists -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Keys in Nested Lists</h2>

      <!-- Unique Keys at Each Level -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Unique Keys at Each Level</h3>
      <p class="text-base md:text-lg mb-4">
        When rendering nested lists, each level of the list should have its own unique key. This ensures that React can accurately track each element within its respective list.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function SubItem({ sub }) {
  return &lt;li key={sub.id}&gt;{sub.name}&lt;/li&gt;;
}

function Item({ item }) {
  return (
    &lt;li key={item.id}&gt;
      {item.name}
      &lt;ul&gt;
        {item.subItems.map(sub =&gt; (
          &lt;SubItem key={sub.id} sub={sub} /&gt;
        ))}
      &lt;/ul&gt;
    &lt;/li&gt;
  );
}

function NestedList({ items }) {
  return (
    &lt;ul&gt;
      {items.map(item =&gt; (
        &lt;Item key={item.id} item={item} /&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default NestedList;
        </code>
      </pre>

      <!-- 7. Handling Dynamic Lists with Changing Keys -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Handling Dynamic Lists with Changing Keys</h2>

      <!-- Strategies for Dynamic Keys -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Strategies for Dynamic Keys</h3>
      <p class="text-base md:text-lg mb-4">
        When list data changes dynamically, ensure that keys remain consistent by using stable identifiers. Avoid keys that can change over time, such as random numbers, to maintain React’s ability to track elements correctly.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example of Stable Keys:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function ProductList({ products }) {
  return (
    &lt;ul&gt;
      {products.map(product =&gt; (
        &lt;li key={product.id}&gt;{product.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default ProductList;
        </code>
      </pre>

      <!-- Avoiding Changing Keys -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Avoiding Changing Keys</h3>
      <p class="text-base md:text-lg mb-6">
        Do not use keys that can change between renders, such as timestamps or random values, as this can disrupt React’s reconciliation process and lead to inefficient rendering.
      </p>

      <!-- 8. Examples of Correct Key Usage -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Examples of Correct Key Usage</h2>

      <!-- Rendering with Unique Identifiers -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Rendering with Unique Identifiers</h3>
      <p class="text-base md:text-lg mb-4">
        Using unique identifiers like IDs from a database ensures that each key is stable and unique across renders.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Correct Usage Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function UserList({ users }) {
  return (
    &lt;ul&gt;
      {users.map(user =&gt; (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default UserList;
        </code>
      </pre>

      <!-- Incorrect Key Usage with Array Indexes -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Incorrect Key Usage with Array Indexes</h3>
      <p class="text-base md:text-lg mb-4">
        Using array indexes as keys in dynamic lists can lead to issues when the list changes.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Incorrect Usage Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function TodoList({ todos }) {
  return (
    &lt;ul&gt;
      {todos.map((todo, index) =&gt; (
        &lt;li key={index}&gt;{todo.text}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default TodoList;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Fix:</strong> Use a unique identifier instead of the index.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function TodoList({ todos }) {
  return (
    &lt;ul&gt;
      {todos.map(todo =&gt; (
        &lt;li key={todo.id}&gt;{todo.text}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default TodoList;
        </code>
      </pre>

      <!-- 9. Debugging Key Issues -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Debugging Key Issues</h2>

      <!-- Identifying Warning Messages -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Identifying Warning Messages</h3>
      <p class="text-base md:text-lg mb-4">
        React will display warning messages in the console if keys are missing or non-unique. These warnings help developers identify and resolve key-related issues.
      </p>

      <!-- Resolving Key-Related Warnings -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Resolving Key-Related Warnings</h3>
      <p class="text-base md:text-lg mb-6">
        To resolve key-related warnings, ensure that each list item has a unique and stable key. Review the data structure to identify appropriate unique identifiers.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example Warning:</strong> "Each child in a list should have a unique 'key' prop."
      </p>

      <!-- 10. Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Understanding and properly using keys in React is crucial for efficient list rendering and maintaining optimal application performance. By following best practices and avoiding common mistakes, you can ensure that your React applications handle dynamic data gracefully and render updates seamlessly.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next module, we'll explore state management in React, including hooks like <code>useState</code> and <code>useReducer</code>, to manage and manipulate data effectively within your components.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsingKeysInReact',
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

.active {
  font-weight: bold;
  color: #1D4ED8; /* Example active link color */
}

/* Optional: Styles for route transitions if needed */
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transition: opacity 300ms;
}
</style>
