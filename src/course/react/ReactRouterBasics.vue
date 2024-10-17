<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">React Router Basics</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      
      <!-- What is React Router? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What is React Router?</h2>
      <p class="text-base md:text-lg mb-4">
        React Router is a standard library for routing in React applications. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
      </p>
      <p class="text-base md:text-lg mb-6">
        With React Router, you can create single-page applications with multiple views, ensuring a seamless and dynamic user experience without full page reloads.
      </p>

      <!-- Why is routing necessary in single-page applications (SPAs)? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Why is Routing Necessary in Single-Page Applications (SPAs)?</h2>
      <p class="text-base md:text-lg mb-4">
        In Single-Page Applications, routing is essential to manage navigation between different views or components without reloading the entire page. It allows developers to:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Maintain State:</strong> Preserve the application state across different views.</li>
        <li><strong>Improve Performance:</strong> Load only the necessary components, reducing load times.</li>
        <li><strong>Enhance User Experience:</strong> Provide a fluid and responsive interface similar to traditional multi-page websites.</li>
      </ul>

      <!-- Setting Up React Router -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Setting Up React Router</h2>

      <!-- Installing React Router using npm or yarn -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Installing React Router</h3>
      <p class="text-base md:text-lg mb-4">
        You can install React Router using either <code>npm</code> or <code>yarn</code>. It's recommended to install the latest version to take advantage of new features and improvements.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Using npm:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
npm install react-router-dom
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Using yarn:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
yarn add react-router-dom
        </code>
      </pre>

      <!-- Importing essential components: BrowserRouter, Routes, Route, and Link -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Importing Essential Components</h3>
      <p class="text-base md:text-lg mb-4">
        After installation, you need to import the essential components provided by React Router to set up routing in your application.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Essential Components:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><code>BrowserRouter</code>: Wraps your application and enables routing using the HTML5 history API.</li>
        <li><code>Routes</code>: A container for all <code>Route</code> components.</li>
        <li><code>Route</code>: Defines a mapping between a URL path and a component.</li>
        <li><code>Link</code>: Creates navigational links that allow users to navigate between routes without reloading the page.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Here's how you can import these components in your main application file:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
        </code>
      </pre>

      <!-- Basic Routing -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Basic Routing</h2>

      <!-- Defining routes using the Route component -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Defining Routes with <code>Route</code></h3>
      <p class="text-base md:text-lg mb-4">
        The <code>Route</code> component is used to define a mapping between a URL path and the component that should be rendered when the path is matched.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element=&lt;Home /&gt; /&gt;
        &lt;Route path="/about" element=&lt;About /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Nesting routes inside the Routes component -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Nesting Routes</h3>
      <p class="text-base md:text-lg mb-4">
        Routes can be nested inside the <code>Routes</code> component to create a hierarchy of routes, allowing for more complex routing structures.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
&lt;Routes&gt;
  &lt;Route path="/" element=&lt;Layout /&gt;&gt;
    &lt;Route index element=&lt;Home /&gt; /&gt;
    &lt;Route path="about" element=&lt;About /&gt; /&gt;
    &lt;Route path="contact" element=&lt;Contact /&gt; /&gt;
  &lt;/Route&gt;
&lt;/Routes&gt;
        </code>
      </pre>

      <!-- Understanding the significance of path and element attributes in the Route component -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Path and Element Attributes in <code>Route</code></h3>
      <p class="text-base md:text-lg mb-4">
        The <code>Route</code> component uses two primary attributes:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>path:</strong> Defines the URL path that should match for the route.</li>
        <li><strong>element:</strong> Specifies the React component to render when the path matches.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        These attributes work together to determine which component should be displayed based on the current URL.
      </p>

      <!-- Navigating Between Pages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Navigating Between Pages</h2>

      <!-- Using Link and NavLink components for navigation -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>Link</code> and <code>NavLink</code> Components</h3>
      <p class="text-base md:text-lg mb-4">
        Instead of using traditional anchor (<code>&lt;a&gt;</code>) tags, React Router provides the <code>Link</code> and <code>NavLink</code> components to enable client-side navigation without triggering a full page reload.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example using <code>Link</code>:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    &lt;nav&gt;
      &lt;Link to="/"&gt;Home&lt;/Link&gt;
      &lt;Link to="/about"&gt;About&lt;/Link&gt;
      &lt;Link to="/contact"&gt;Contact&lt;/Link&gt;
    &lt;/nav&gt;
  );
}

export default Navbar;
        </code>
      </pre>

      <!-- Difference between Link and traditional anchor (<a>) tags -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Difference Between <code>Link</code> and Traditional <code>&lt;a&gt;</code> Tags</h3>
      <p class="text-base md:text-lg mb-4">
        The primary difference is that <code>Link</code> uses the HTML5 history API to update the URL without reloading the page, whereas traditional <code>&lt;a&gt;</code> tags cause a full page reload.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Using <code>&lt;a&gt;</code> Tag:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-html">
&lt;a href="/about"&gt;About&lt;/a&gt;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This approach reloads the entire page, which can be inefficient and disrupt the user experience.
      </p>

      <!-- Highlighting active links using NavLink -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Highlighting Active Links with <code>NavLink</code></h3>
      <p class="text-base md:text-lg mb-4">
        The <code>NavLink</code> component is similar to <code>Link</code> but provides additional styling attributes to indicate the active route. This helps users identify their current location within the application.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    &lt;nav&gt;
      &lt;NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'active' : undefined}
      &gt;Home&lt;/NavLink&gt;
      
      &lt;NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'active' : undefined}
      &gt;About&lt;/NavLink&gt;
      
      &lt;NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? 'active' : undefined}
      &gt;Contact&lt;/NavLink&gt;
    &lt;/nav&gt;
  );
}

export default Navbar;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the active link will have the class <code>active</code>, allowing you to apply specific styles to highlight it.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        React Router is a powerful library that enables efficient and dynamic routing in React applications. By understanding its core components and concepts, you can create seamless navigation experiences in your single-page applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next section, we'll explore advanced routing techniques, including nested routes, route parameters, and programmatic navigation, to further enhance your React applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReactRouterBasics',
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
</style>
