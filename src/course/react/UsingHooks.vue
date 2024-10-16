<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Using React Hooks</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      
      <!-- What are Hooks and Why Use Hooks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What are Hooks and Why Use Hooks?</h2>
      <p class="text-base md:text-lg mb-4">
        <strong>Hooks</strong> are special functions in React that let you "hook into" React features without writing a class. Introduced in React 16.8, hooks enable you to use state and other React features in functional components, promoting cleaner and more concise code.
      </p>
      <p class="text-base md:text-lg mb-6">
        Hooks simplify complex component logic by allowing you to reuse stateful logic between components. They eliminate the need for class components, making it easier to manage state, side effects, and lifecycle events within functional components. This leads to improved code readability, easier testing, and better separation of concerns.
      </p>
      
      <!-- Rules of Hooks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Rules of Hooks</h2>
      <p class="text-base md:text-lg mb-4">
        To ensure hooks work correctly and predictably, React enforces two main rules:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Only Call Hooks at the Top Level:</strong> Don’t call hooks inside loops, conditions, or nested functions. Always use hooks at the top level of your React function to ensure they are called in the same order each time a component renders.</li>
        <li><strong>Only Call Hooks from React Functions:</strong> Call hooks from React function components or custom hooks. Don’t call hooks from regular JavaScript functions to maintain the consistent behavior of hooks.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Adhering to these rules ensures that React can correctly preserve the state of hooks between multiple useState and useEffect calls.
      </p>
      
      <!-- Common Hooks Table -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Common Hooks</h2>
      <p class="text-base md:text-lg mb-4">
        Below is a table of some of the most commonly used React hooks, including their syntax and explanations.
      </p>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left bg-white border-collapse">
          <thead>
            <tr>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Hook</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Syntax</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useState</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const [state, setState] = useState(initialState);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useState</strong> allows you to add state to functional components. It returns a state variable and a function to update that state.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useEffect</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                useEffect(() => { /* side effect */ }, [dependencies]);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useEffect</strong> lets you perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useContext</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const value = useContext(MyContext);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useContext</strong> allows you to consume context values in functional components without needing to wrap them in a Consumer.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useReducer</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const [state, dispatch] = useReducer(reducer, initialState);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useReducer</strong> is an alternative to useState for managing complex state logic. It is similar to Redux reducers but localized within a component.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useRef</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const refContainer = useRef(initialValue);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useRef</strong> allows you to persist values between renders and directly access DOM elements.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useMemo</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useMemo</strong> memoizes a computed value, preventing expensive calculations on every render unless dependencies change.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useCallback</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useCallback</strong> returns a memoized version of a callback function, preventing unnecessary re-creations on every render.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useLayoutEffect</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                useLayoutEffect(() => { /* effect */ }, [dependencies]);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useLayoutEffect</strong> is similar to useEffect but fires synchronously after all DOM mutations, useful for reading layout from the DOM and synchronously re-rendering.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useImperativeHandle</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                useImperativeHandle(ref, () => ({ /* exposed methods */ }), [dependencies]);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useImperativeHandle</strong> customizes the instance value that is exposed to parent components when using refs, allowing you to control which methods or properties are accessible.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useDebugValue</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                useDebugValue(value);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useDebugValue</strong> is used to display a label for custom hooks in React DevTools, aiding in debugging.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Uncommon but Popular Hooks Table -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Uncommon but Popular Hooks</h2>
      <p class="text-base md:text-lg mb-4">
        In addition to the common hooks, there are several less frequently used but highly useful hooks that serve specific purposes. Below is a table of some of these hooks.
      </p>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left bg-white border-collapse">
          <thead>
            <tr>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Hook</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Syntax</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Explanation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useTransition</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const [isPending, startTransition] = useTransition();
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useTransition</strong> allows you to mark state updates as transitions, enabling React to prioritize more urgent updates and keep the UI responsive.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useDeferredValue</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const deferredValue = useDeferredValue(value);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useDeferredValue</strong> defers updating a value until less urgent updates have been processed, improving rendering performance for high-latency updates.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useId</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const id = useId();
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useId</strong> generates a unique ID that can be used for accessibility attributes, ensuring that IDs are consistent across server and client renders.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useSyncExternalStore</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useSyncExternalStore</strong> is used for subscribing to external stores, ensuring that the component stays in sync with external data sources in a concurrent-safe way.
              </td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">useInsertionEffect</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                useInsertionEffect(() =&gt; { /* side effect */ }, [dependencies]);
              </td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">
                <strong>useInsertionEffect</strong> is used for injecting styles before any DOM mutations, ensuring styles are applied correctly during concurrent rendering.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        React Hooks revolutionize the way you write React components by enabling state management and side effects in functional components. Understanding both common and less common hooks empowers you to build more efficient, readable, and maintainable React applications. By adhering to the rules of hooks and leveraging their capabilities, you can harness the full potential of React's functional programming paradigm.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next course, we will delve deeper into <strong>Advanced Hooks</strong>, exploring custom hooks and more sophisticated state management techniques to further enhance your React development skills.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UsingReactHooks',
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
