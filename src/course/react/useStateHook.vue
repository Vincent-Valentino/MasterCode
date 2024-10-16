<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">UseState and State Management</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      
      <!-- What is State -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What is State?</h2>
      <p class="text-base md:text-lg mb-4">
        In React, <strong>state</strong> refers to a built-in object that stores property values that belong to a component. State allows components to create and manage their own data, which can change over time in response to user actions, network responses, or other events. This dynamic data management is crucial for building interactive and responsive user interfaces.
      </p>
      <p class="text-base md:text-lg mb-6">
        Without state, components would be static and unable to reflect changes, making applications less engaging and functional. State enables React components to respond to user input, fetch data, and update the UI seamlessly.
      </p>
      
      <!-- Example of Why We Need State -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Why Do We Need State?</h2>
      <p class="text-base md:text-lg mb-4">
        Consider a simple counter application. Without state, the counter would not be able to track the number of times a button is clicked. State allows the component to remember and update the count dynamically.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the `count` state keeps track of the number of button clicks, allowing the UI to update accordingly.
      </p>
      
      <!-- useState Hook -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">useState Hook</h2>
      <p class="text-base md:text-lg mb-4">
        The `useState` hook is a fundamental part of React's Hooks API. It allows functional components to manage their own state without the need for class components.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>What is useState?</strong>
      </p>
      <p class="text-base md:text-lg mb-4">
        `useState` is a function that lets you add React state to functional components. It returns a pair: the current state value and a function that lets you update it.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Why Use useState?</strong> It simplifies state management in functional components, making your code cleaner and more readable. With Hooks like `useState`, you can handle state and side effects in functional components, which were previously only possible in class components.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>How to Use useState:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Example;
        </code>
      </pre>
      
      <!-- Initial State and Lazy Initialization -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Initial State and Lazy Initialization</h2>
      <p class="text-base md:text-lg mb-4">
        <strong>Initial State:</strong> When you declare a state variable using `useState`, you provide an initial value. This value sets the starting point for the state.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Lazy Initialization:</strong> If calculating the initial state is computationally expensive, you can pass a function to `useState`. This function will only be executed once during the initial render, improving performance.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function ExpensiveComponent() {
  const [value, setValue] = useState(() => {
    // Expensive computation
    const initialValue = computeInitialValue();
    return initialValue;
  });

  return &lt;div&gt;Value: {value}&lt;/div&gt;;
}

function computeInitialValue() {
  // Simulate expensive computation
  let total = 0;
  for (let i = 0; i < 1000000; i++) {
    total += i;
  }
  return total;
}

export default ExpensiveComponent;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, `computeInitialValue` is an expensive function that calculates the initial state. By passing a function to `useState`, React ensures that the computation runs only once.
      </p>
      
      <!-- State Update -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">State Update</h2>
      <p class="text-base md:text-lg mb-4">
        To update the state in React, you use the state updater function returned by `useState`. This function schedules an update to the component's state and tells React that this component and its children need to be re-rendered with the updated state.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(prevIsOn => !prevIsOn);

  return (
    &lt;div&gt;
      &lt;p&gt;The switch is {isOn ? 'ON' : 'OFF'}.&lt;/p&gt;
      &lt;button onClick={toggle}&gt;
        Toggle
      &lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Toggle;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Here, clicking the "Toggle" button updates the `isOn` state, switching between "ON" and "OFF".
      </p>
      
      <!-- Conditional State Updates -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conditional State Updates</h2>
      <p class="text-base md:text-lg mb-4">
        Sometimes, you may want to update the state based on certain conditions. This ensures that state updates occur only when specific criteria are met.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function AgeChecker() {
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const newAge = e.target.value;
    setAge(newAge);
    
    if (newAge >= 18) {
      setMessage('You are eligible to vote.');
    } else {
      setMessage('You are not eligible to vote.');
    }
  };

  return (
    &lt;div&gt;
      &lt;input
        type="number"
        value={age}
        onChange={handleChange}
        placeholder="Enter your age"
      /&gt;
      &lt;p&gt;{message}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default AgeChecker;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the `message` state updates based on the entered age. If the age is 18 or above, a message indicating eligibility to vote is displayed; otherwise, a different message is shown.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Can I Have Multiple States?</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        Yes, you can declare multiple state variables in a single component by calling `useState` multiple times. This approach keeps state variables independent and easier to manage.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function MultiState() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
      
      &lt;input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      /&gt;
      &lt;p&gt;Name: {name}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default MultiState;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Here, the component manages two separate pieces of state: `count` and `name`.
      </p>
      
      <!-- Avoiding Derived States -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Avoiding Derived States</h2>
      <p class="text-base md:text-lg mb-4">
        <strong>Derived State:</strong> Derived state refers to state variables that can be computed from other state variables or props. Storing derived state can lead to inconsistencies and bugs.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Why Avoid Derived States?</strong> It introduces redundancy and makes the state harder to manage. Instead, compute values on the fly during rendering.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';

function UserInfo({ firstName, lastName }) {
  // Avoid storing fullName as state
  const fullName = `${firstName} ${lastName}`;

  return &lt;h1&gt;Hello, {fullName}!&lt;/h1&gt;;
}

export default UserInfo;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, `fullName` is derived from `firstName` and `lastName` props. Instead of storing `fullName` in state, it's computed directly in the render, ensuring consistency.
      </p>
      
      <!-- Sharing State Between Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Sharing State Between Components</h2>
      <p class="text-base md:text-lg mb-4">
        When two or more components need access to the same state, it's best to lift the state up to their closest common ancestor. This ensures that both components receive the state as props, maintaining a unidirectional data flow.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Example:</strong>
      </p>
      <p class="text-base md:text-lg mb-4">
        Suppose you have two sibling components that need to share a piece of state, such as a user's name. Instead of each component managing its own state, you lift the state up to their common parent.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Parent Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

function Parent() {
  const [name, setName] = useState('');

  return (
    &lt;div&gt;
      &lt;FirstChild name={name} setName={setName} /&gt;
      &lt;SecondChild name={name} /&gt;
    &lt;/div&gt;
  );
}

export default Parent;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>FirstChild Component:</strong> Responsible for updating the name.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function FirstChild({ name, setName }) {
  return (
    &lt;div&gt;
      &lt;input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      /&gt;
    &lt;/div&gt;
  );
}

export default FirstChild;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>SecondChild Component:</strong> Displays the name.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';

function SecondChild({ name }) {
  return &lt;h2&gt;Hello, {name}!&lt;/h2&gt;;
}

export default SecondChild;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this setup, both `FirstChild` and `SecondChild` receive the `name` state from the `Parent` component. `FirstChild` can update the `name`, and `SecondChild` reflects the updated value, ensuring synchronized state across components.
      </p>
      
      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering state management is crucial for building dynamic and responsive React applications. Understanding how to use the `useState` hook, managing multiple state variables, avoiding derived states, and sharing state between components empowers you to create interactive user interfaces that respond seamlessly to user interactions and data changes.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will explore <strong>Advanced State Management</strong>, delving into more complex state management techniques and tools to handle intricate application requirements.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StateManagement',
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
