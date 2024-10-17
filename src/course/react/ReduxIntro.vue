<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Redux</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      
      <!-- What is Redux? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What is Redux?</h2>
      <p class="text-base md:text-lg mb-4">
        Redux is a predictable state container for JavaScript applications. It helps you write applications that behave consistently, run in different environments, and are easy to test. While it is most commonly used with libraries like React or Angular for building user interfaces, it can be used with any other JavaScript frameworks or libraries.
      </p>
      <p class="text-base md:text-lg mb-6">
        Redux centralizes your application's state and logic, making it easier to understand, debug, and maintain. It follows a unidirectional data flow, which helps in managing the complexity of large-scale applications.
      </p>

      <!-- Why Use Redux? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Why Use Redux?</h2>
      <p class="text-base md:text-lg mb-4">
        Redux offers several advantages when managing state in React applications:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Predictable State Management:</strong> The state is predictable due to the strict rules governing how and when updates can occur.</li>
        <li><strong>Centralized Store:</strong> All application state is stored in a single place, making it easier to track changes and debug.</li>
        <li><strong>Ease of Testing:</strong> Reducers and action creators are pure functions, which simplifies testing.</li>
        <li><strong>Maintainability:</strong> The clear structure of actions, reducers, and the store promotes better organization and scalability.</li>
        <li><strong>Developer Tools:</strong> Powerful developer tools like Redux DevTools provide time-travel debugging and state inspection.</li>
      </ul>

      <!-- How to Use Redux -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">How to Use Redux</h2>
      <p class="text-base md:text-lg mb-4">
        Using Redux in a React application involves several key steps: setting up the Redux store, creating actions and reducers, and connecting React components to the Redux store. Below are the detailed steps to implement Redux in your React application.
      </p>

      <!-- Step 1: Install Redux and React-Redux -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">1. Install Redux and React-Redux</h3>
      <p class="text-base md:text-lg mb-4">
        You can install Redux and React-Redux using either <code>npm</code> or <code>yarn</code>. React-Redux is the official React binding for Redux, which allows React components to read data from the Redux store and dispatch actions to the store.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Using npm:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
npm install redux react-redux
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Using yarn:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
yarn add redux react-redux
        </code>
      </pre>

      <!-- Step 2: Create Actions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">2. Create Actions</h3>
      <p class="text-base md:text-lg mb-4">
        Actions are payloads of information that send data from your application to your Redux store. They are the only source of information for the store. You send them to the store using <code>store.dispatch()</code>.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { createAction } from '@reduxjs/toolkit';

// Action Types
export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
        </code>
      </pre>

      <!-- Step 3: Create Reducers -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">3. Create Reducers</h3>
      <p class="text-base md:text-lg mb-4">
        Reducers specify how the application's state changes in response to actions sent to the store. Remember that reducers must be pure functions that take the previous state and an action, and return the next state.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { createReducer } from '@reduxjs/toolkit';
import { increment, decrement } from './actions';

const initialState = {
  count: 0,
};

const counterReducer = createReducer(initialState, (builder) =&gt; {
  builder
    .addCase(increment, (state) =&gt; {
      state.count += 1;
    })
    .addCase(decrement, (state) =&gt; {
      state.count -= 1;
    });
});

export default counterReducer;
        </code>
      </pre>

      <!-- Step 4: Configure the Store -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">4. Configure the Store</h3>
      <p class="text-base md:text-lg mb-4">
        The Redux store brings together the state, actions, and reducers that make up your app. The store has several responsibilities:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Holds the Application State:</strong> The state tree is stored inside the Redux store.</li>
        <li><strong>Allows Access to State via getState():</strong> The store provides the <code>getState()</code> method to access the current state.</li>
        <li><strong>Allows State to be Updated via dispatch(action):</strong> The store's <code>dispatch()</code> method is used to dispatch actions.</li>
        <li><strong>Registers Listeners via subscribe(listener):</strong> The store allows you to subscribe to changes in the state.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
        </code>
      </pre>

      <!-- Step 5: Provide the Store to React -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">5. Provide the Store to React</h3>
      <p class="text-base md:text-lg mb-4">
        Use the <code>Provider</code> component from React-Redux to make the Redux store available to your React components.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  &lt;Provider store={store}&gt;
    &lt;App /&gt;
  &lt;/Provider&gt;,
  document.getElementById('root')
);
        </code>
      </pre>

      <!-- Step 6: Connect React Components to Redux -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">6. Connect React Components to Redux</h3>
      <p class="text-base md:text-lg mb-4">
        Use the <code>useSelector</code> hook to access the state and the <code>useDispatch</code> hook to dispatch actions from your React components.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function Counter() {
  const count = useSelector(state =&gt; state.counter.count);
  const dispatch = useDispatch();

  return (
    &lt;div&gt;
      &lt;h1&gt;Count: {count}&lt;/h1&gt;
      &lt;button onClick={() =&gt; dispatch(increment())}&gt;Increment&lt;/button&gt;
      &lt;button onClick={() =&gt; dispatch(decrement())}&gt;Decrement&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Counter;
        </code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        To effectively utilize Redux in your React applications, consider the following best practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Keep the State Minimal:</strong> Only store the necessary data in the Redux store to avoid unnecessary complexity.</li>
        <li><strong>Use Redux Toolkit:</strong> Leverage Redux Toolkit for simplifying store setup, reducing boilerplate, and improving code readability.</li>
        <li><strong>Organize Actions and Reducers:</strong> Keep your actions and reducers organized, possibly by feature or domain, to maintain scalability.</li>
        <li><strong>Immutable Updates:</strong> Always return new state objects from reducers instead of mutating the existing state.</li>
        <li><strong>Use Selectors:</strong> Create reusable selectors to encapsulate the logic of retrieving specific pieces of state.</li>
        <li><strong>Middleware:</strong> Utilize middleware like Redux Thunk or Redux Saga for handling asynchronous operations.</li>
        <li><strong>Avoid Overusing Redux:</strong> Not every piece of state needs to be in Redux. Use local component state when appropriate.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Redux is a powerful tool for managing state in React applications, especially as they grow in complexity. By centralizing your application's state and following best practices, you can create maintainable, scalable, and predictable applications. In the next section, we'll explore advanced Redux concepts, including middleware integration, asynchronous actions, and optimizing performance.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToReduxForReact',
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
