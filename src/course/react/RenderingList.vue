<template>
  <div>
    
  </div>
</template><template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Rendering Lists in React</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">

      <!-- 1. Understanding Why Lists are Important in React -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">1. Understanding Why Lists are Important in React</h2>

      <!-- What is a list in React? -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">What is a List in React?</h3>
      <p class="text-base md:text-lg mb-4">
        In React, a list is a collection of elements that are rendered dynamically based on data. Lists are fundamental for displaying repeated content, such as items in a todo list, products in an online store, or entries fetched from an API.
      </p>

      <!-- Common use cases for rendering lists -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Common Use Cases for Rendering Lists</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Displaying data arrays (e.g., lists of users, products, posts).</li>
        <li>Creating navigation menus.</li>
        <li>Generating form fields dynamically.</li>
        <li>Rendering comments or reviews.</li>
      </ul>

      <!-- 2. Rendering Static Lists -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">2. Rendering Static Lists</h2>

      <!-- How to map over an array and render a list of elements -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Mapping Over an Array to Render Elements</h3>
      <p class="text-base md:text-lg mb-4">
        To render a list in React, you typically use the <code>.map()</code> function to iterate over an array and return JSX elements for each item.
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

      <!-- Using the .map() function to iterate over arrays in JSX -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using the <code>.map()</code> Function in JSX</h3>
      <p class="text-base md:text-lg mb-6">
        The <code>.map()</code> function is essential for transforming arrays into lists of JSX elements. It takes a callback function that returns a JSX element for each item in the array.
      </p>

      <!-- 3. The Importance of Keys -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">3. The Importance of Keys</h2>

      <!-- What are keys in React, and why are they necessary for list rendering? -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">What are Keys in React?</h3>
      <p class="text-base md:text-lg mb-4">
        Keys are unique identifiers assigned to each element in a list. They help React identify which items have changed, been added, or removed, enhancing the efficiency of the rendering process.
      </p>

      <!-- How to assign unique keys for each list item to avoid rendering issues -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Assigning Unique Keys</h3>
      <p class="text-base md:text-lg mb-4">
        When rendering lists, always provide a unique <code>key</code> prop to each list item. This key should be stable and unique across re-renders.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function TodoList() {
  const todos = [
    { id: 1, task: 'Learn React' },
    { id: 2, task: 'Build a Project' },
    { id: 3, task: 'Master Redux' },
  ];

  return (
    &lt;ul&gt;
      {todos.map((todo) =&gt; (
        &lt;li key={todo.id}&gt;{todo.task}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default TodoList;
        </code>
      </pre>

      <!-- Best practices for generating unique keys -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Best Practices for Keys</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Use unique identifiers from your data (e.g., IDs from a database).</li>
        <li>Avoid using array indices as keys, especially if the list can change.</li>
        <li>Ensure keys are consistent across renders to prevent unnecessary re-renders.</li>
      </ul>

      <!-- 4. Rendering Dynamic Lists -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">4. Rendering Dynamic Lists</h2>

      <!-- Rendering lists from dynamic data (e.g., fetched from an API) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Rendering Lists from Dynamic Data</h3>
      <p class="text-base md:text-lg mb-4">
        Dynamic lists are generated based on data fetched from external sources like APIs. This allows your application to display up-to-date information.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() =&gt; {
    fetch('https://api.example.com/users')
      .then(response =&gt; response.json())
      .then(data =&gt; setUsers(data));
  }, []);

  return (
    &lt;ul&gt;
      {users.map((user) =&gt; (
        &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default UserList;
        </code>
      </pre>

      <!-- Using React state to store and display dynamic lists -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using React State for Dynamic Lists</h3>
      <p class="text-base md:text-lg mb-6">
        React's state management allows you to store and update dynamic data, which in turn re-renders the list to reflect changes.
      </p>

      <!-- 5. Conditional Rendering of List Items -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">5. Conditional Rendering of List Items</h2>

      <!-- How to conditionally render list items using logical operators -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Logical Operators for Conditional Rendering</h3>
      <p class="text-base md:text-lg mb-4">
        You can conditionally render list items based on certain criteria using logical operators like <code>&&</code> or ternary operators.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function ActiveUsersList({ users }) {
  return (
    &lt;ul&gt;
      {users.map(user =&gt; (
        user.isActive &amp;&amp; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default ActiveUsersList;
        </code>
      </pre>

      <!-- Rendering lists based on specific conditions (e.g., filtering items) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Filtering Items Before Rendering</h3>
      <p class="text-base md:text-lg mb-6">
        You can filter the data before mapping to render only the items that meet certain conditions.
      </p>

      <!-- 6. Handling Empty Lists -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">6. Handling Empty Lists</h2>

      <!-- Handling cases when the list is empty -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Displaying a Message for Empty Lists</h3>
      <p class="text-base md:text-lg mb-4">
        It's important to handle scenarios where the list might be empty to enhance user experience.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return &lt;p&gt;No tasks available.&lt;/p&gt;;
  }

  return (
    &lt;ul&gt;
      {tasks.map(task =&gt; (
        &lt;li key={task.id}&gt;{task.name}&lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default TaskList;
        </code>
      </pre>

      <!-- 7. Rendering Lists of Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">7. Rendering Lists of Components</h2>

      <!-- Rendering complex lists where each item is a separate component -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Separate Components for List Items</h3>
      <p class="text-base md:text-lg mb-4">
        For more complex list items, it's advisable to create separate components. This promotes reusability and cleaner code.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function Product({ product }) {
  return (
    &lt;div className="product"&gt;
      &lt;h3&gt;{product.name}&lt;/h3&gt;
      &lt;p&gt;Price: ${product.price}&lt;/p&gt;
    &lt;/div&gt;
  );
}

function ProductList({ products }) {
  return (
    &lt;div&gt;
      {products.map(product =&gt; (
        &lt;Product key={product.id} product={product} /&gt;
      ))}
    &lt;/div&gt;
  );
}

export default ProductList;
        </code>
      </pre>

      <!-- Passing props to list items as components -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Passing Props to Components</h3>
      <p class="text-base md:text-lg mb-6">
        When rendering lists of components, pass the necessary data as props to each component.
      </p>

      <!-- 8. Optimizing List Rendering -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">8. Optimizing List Rendering</h2>

      <!-- Optimizing the rendering of large lists using techniques like pagination or infinite scrolling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Handling Large Lists with Pagination or Infinite Scrolling</h3>
      <p class="text-base md:text-lg mb-4">
        Rendering large lists can impact performance. Implementing pagination or infinite scrolling can help manage performance by loading data in chunks.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example of Pagination:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect } from 'react';

function PaginatedList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() =&gt; {
    fetch(`https://api.example.com/items?page=${page}`)
      .then(response =&gt; response.json())
      .then(data =&gt; setItems(prev =&gt; [...prev, ...data]));
  }, [page]);

  const loadMore = () =&gt; setPage(prev => prev + 1);

  return (
    &lt;div&gt;
      &lt;ul&gt;
        {items.map(item =&gt; (
          &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
      &lt;button onClick={loadMore}&gt;Load More&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default PaginatedList;
        </code>
      </pre>

      <!-- Using React.memo to prevent unnecessary re-rendering of list items (advanced) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Preventing Unnecessary Re-Renders with <code>React.memo</code></h3>
      <p class="text-base md:text-lg mb-4">
        Wrapping list item components with <code>React.memo</code> can prevent them from re-rendering unless their props change, improving performance.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

const ListItem = React.memo(({ item }) =&gt; {
  console.log('Rendering:', item.name);
  return &lt;li&gt;{item.name}&lt;/li&gt;;
});

function ItemList({ items }) {
  return (
    &lt;ul&gt;
      {items.map(item =&gt; (
        &lt;ListItem key={item.id} item={item} /&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default ItemList;
        </code>
      </pre>

      <!-- 9. Nested Lists -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">9. Nested Lists</h2>

      <!-- How to render nested lists inside another list -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Rendering Nested Lists</h3>
      <p class="text-base md:text-lg mb-4">
        Nested lists are lists within lists, useful for displaying hierarchical data structures like categories and subcategories.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function Category({ category }) {
  return (
    &lt;li&gt;
      {category.name}
      &lt;ul&gt;
        {category.subcategories.map(sub =&gt; (
          &lt;li key={sub.id}&gt;{sub.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/li&gt;
  );
}

function CategoryList({ categories }) {
  return (
    &lt;ul&gt;
      {categories.map(category =&gt; (
        &lt;Category key={category.id} category={category} /&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default CategoryList;
        </code>
      </pre>

      <!-- 10. Handling Events on List Items -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">10. Handling Events on List Items</h2>

      <!-- Adding event handlers (e.g., onClick) to list items -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Adding Event Handlers to List Items</h3>
      <p class="text-base md:text-lg mb-4">
        You can attach event handlers to list items to handle user interactions like clicks, selections, or deletions.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function TaskList({ tasks, onDelete }) {
  return (
    &lt;ul&gt;
      {tasks.map(task =&gt; (
        &lt;li key={task.id}&gt;
          {task.name}
          &lt;button onClick={() =&gt; onDelete(task.id)}&gt;Delete&lt;/button&gt;
        &lt;/li&gt;
      ))}
    &lt;/ul&gt;
  );
}

export default TaskList;
        </code>
      </pre>

      <!-- Passing data (such as the item’s index or id) through events -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Passing Data Through Event Handlers</h3>
      <p class="text-base md:text-lg mb-6">
        When handling events, you can pass relevant data (like the item's ID or index) to identify which item triggered the event.
      </p>

      <!-- 11. Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering the rendering of lists in React is essential for building dynamic and efficient user interfaces. By understanding how to render static and dynamic lists, handle keys, manage events, and optimize performance, you can create robust React applications that effectively display and manage data.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next module, we'll explore state management in React, delving into hooks like <code>useState</code> and <code>useReducer</code>, as well as integrating state management libraries for more complex applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RenderingListsInReact',
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
