<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-purple-950">Context API in React</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      
      <!-- What is Context API? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What is Context API?</h2>
      <p class="text-base md:text-lg mb-4">
        The Context API is a feature in React that allows for efficient state management by enabling the sharing of data across the component tree without having to pass props down manually at every level. It provides a way to create global variables that can be passed around in a React application.
      </p>
      <p class="text-base md:text-lg mb-6">
        Introduced in React 16.3, the Context API is designed to solve problems related to prop drilling and to make state management more streamlined, especially in larger applications.
      </p>

      <!-- Why Use Context API? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Why Use Context API?</h2>
      <p class="text-base md:text-lg mb-4">
        The Context API offers several advantages in React applications:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Avoid Prop Drilling:</strong> Eliminate the need to pass props through multiple layers of components.</li>
        <li><strong>Global State Management:</strong> Share state across the entire application or specific parts of it.</li>
        <li><strong>Ease of Maintenance:</strong> Simplify the component hierarchy by reducing the number of props.</li>
        <li><strong>Improved Readability:</strong> Make the codebase cleaner and easier to understand.</li>
        <li><strong>Better Performance:</strong> Optimize re-renders by selectively updating components that consume the context.</li>
      </ul>

      <!-- How to Use Context API -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">How to Use Context API</h2>
      <p class="text-base md:text-lg mb-4">
        Using the Context API involves creating a context, providing it to components, and consuming it where needed. Below are the steps to implement Context API in a React application:
      </p>

      <!-- Step 1: Create a Context -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">1. Create a Context</h3>
      <p class="text-base md:text-lg mb-4">
        First, create a context using the <code>createContext</code> function. This context will hold the data you want to share across components.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { createContext } from 'react';

// Create a Context
export const ThemeContext = createContext('light');
        </code>
      </pre>

      <!-- Step 2: Provide Context -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">2. Provide Context</h3>
      <p class="text-base md:text-lg mb-4">
        Use the <code>Provider</code> component to pass the current value to the tree below. Any component wrapped inside the Provider can access the context value.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import { ThemeContext } from './ThemeContext';
import ChildComponent from './ChildComponent';

function App() {
  const theme = 'dark'; // This could be dynamic

  return (
    &lt;ThemeContext.Provider value={theme}&gt;
      &lt;ChildComponent /&gt;
    &lt;/ThemeContext.Provider&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Step 3: Consume Context -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">3. Consume Context</h3>
      <p class="text-base md:text-lg mb-4">
        Components can consume the context using the <code>useContext</code> hook or the <code>Consumer</code> component.
      </p>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Using useContext Hook</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ChildComponent() {
  const theme = useContext(ThemeContext);

  return (
    &lt;div&gt;
      Current Theme: {theme}
    &lt;/div&gt;
  );
}

export default ChildComponent;
        </code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Using Consumer Component</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React from 'react';
import { ThemeContext } from './ThemeContext';

function ChildComponent() {
  return (
    &lt;ThemeContext.Consumer&gt;
      {theme =&gt; &lt;div&gt;Current Theme: {theme}&lt;/div&gt;}
    &lt;/ThemeContext.Consumer&gt;
  );
}

export default ChildComponent;
        </code>
      </pre>

      <!-- Examples -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Examples</h2>
      
      <!-- Example 1: Theme Toggler -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 1: Theme Toggler</h3>
      <p class="text-base md:text-lg mb-4">
        Below is an example of a theme toggler using Context API. It allows users to switch between light and dark themes.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { createContext, useState, useContext } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Theme Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =&gt; {
    setTheme((prevTheme) =&gt; (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    &lt;ThemeContext.Provider value=&#123;&#123;  theme, toggleTheme &#125;&#125; &gt;
      {children}
    &lt;/ThemeContext.Provider&gt;
  );
}

// Child Component that consumes the context
function ThemeToggler() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    &lt;div className={`theme-${theme}`} style= padding: '20px', textAlign: 'center' &#125;&#125; &gt;
      &lt;h1&gt;Current Theme: {theme}&lt;/h1&gt;
      &lt;button onClick={toggleTheme}&gt;Toggle Theme&lt;/button&gt;
    &lt;/div&gt;
  );
}

// App Component
function App() {
  return (
    &lt;ThemeProvider&gt;
      &lt;ThemeToggler /&gt;
    &lt;/ThemeProvider&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Example 2: User Authentication -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 2: User Authentication</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to manage user authentication state across the application using Context API.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { createContext, useState, useContext } from 'react';

// Create a Context for Auth
const AuthContext = createContext();

// Auth Provider Component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) =&gt; {
    setUser(userData);
  };

  const logout = () =&gt; {
    setUser(null);
  };

  return (
    &lt;AuthContext.Provider value=&#123;&#123; user, login, logout &#125;&#125; &gt;
      {children}
    &lt;/AuthContext.Provider&gt;
  );
}

// Child Component that consumes the context
function UserProfile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return &lt;p&gt;No user is logged in.&lt;/p&gt;;
  }

  return (
    &lt;div&gt;
      &lt;h2&gt;Welcome, {user.name}!&lt;/h2&gt;
      &lt;button onClick={logout}&gt;Logout&lt;/button&gt;
    &lt;/div&gt;
  );
}

// App Component
function App() {
  const { login } = useContext(AuthContext);

  const handleLogin = () =&gt; {
    const mockUser = { name: 'John Doe', email: 'john@example.com' };
    login(mockUser);
  };

  return (
    &lt;AuthProvider&gt;
      &lt;div style=&#123;&#123; textAlign: 'center', marginTop: '50px' &#125;&#125;&amp;&gt;
        &lt;button onClick={handleLogin}&gt;Login&lt;/button&gt;
        &lt;UserProfile /&gt;
      &lt;/div&gt;
    &lt;/AuthProvider&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        To effectively utilize the Context API in your React applications, consider the following best practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Minimize Context Usage:</strong> Use Context API sparingly. It is best suited for global data like themes, authentication, or user settings. For local component state, prefer using <code>useState</code> or other state management solutions.</li>
        <li><strong>Separate Concerns:</strong> Create separate contexts for different parts of your application to avoid unnecessary re-renders and to keep contexts manageable.</li>
        <li><strong>Memoize Context Values:</strong> Use <code>useMemo</code> to memoize context values, preventing unnecessary re-renders of consuming components.</li>
        <li><strong>Avoid Overusing Context:</strong> For complex state management needs, consider using dedicated libraries like Redux or MobX instead of Context API.</li>
        <li><strong>Structure Providers Wisely:</strong> Organize your context providers logically within your component tree to maintain clarity and efficiency.</li>
        <li><strong>Type Safety:</strong> If using TypeScript, define proper types for your context to leverage type-checking and reduce bugs.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        The Context API is a powerful tool in React that simplifies state management by providing a way to share data across the component tree without prop drilling. By understanding its core concepts, implementing it effectively, and adhering to best practices, you can enhance the scalability and maintainability of your React applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next section, we'll delve deeper into advanced Context API patterns, including custom hooks for context consumption and integrating Context API with other state management libraries.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContextAPIInReact',
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
