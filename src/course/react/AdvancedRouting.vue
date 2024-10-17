<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Advanced Routing</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">

      <!-- Dynamic Routing with Parameters -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Dynamic Routing with Parameters</h2>
      
      <!-- Defining dynamic routes using URL parameters (:id, etc.) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Defining Dynamic Routes with URL Parameters</h3>
      <p class="text-base md:text-lg mb-4">
        Dynamic routing allows you to define routes that can accept parameters. These parameters can be used to render dynamic content based on the URL.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/users/:id" element=&lt;UserProfile /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Accessing URL parameters using the useParams hook -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Accessing URL Parameters with <code>useParams</code></h3>
      <p class="text-base md:text-lg mb-4">
        The <code>useParams</code> hook allows you to access the URL parameters defined in your routes. This is useful for fetching data based on the parameter.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();

  return (
    &lt;div&gt;
      &lt;h1&gt;User Profile&lt;/h1&gt;
      &lt;p&gt;User ID: {id}&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default UserProfile;
        </code>
      </pre>

      <!-- Creating routes that accept parameters and passing them to components -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Passing Parameters to Components</h3>
      <p class="text-base md:text-lg mb-4">
        When defining dynamic routes, the parameters in the URL can be accessed within the target component using the <code>useParams</code> hook. This allows components to render content based on the parameter values.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  // Fetch product data based on productId

  return (
    &lt;div&gt;
      &lt;h1&gt;Product Detail&lt;/h1&gt;
      &lt;p&gt;Product ID: {productId}&lt;/p&gt;
      {/* Render product details here */}
    &lt;/div&gt;
  );
}

export default ProductDetail;
        </code>
      </pre>

      <!-- Handling 404 Errors (Not Found Pages) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Handling 404 Errors (Not Found Pages)</h2>
      
      <!-- Setting up a default 404 page using a catch-all route (*) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Setting Up a 404 Page with a Catch-All Route</h3>
      <p class="text-base md:text-lg mb-4">
        To handle undefined routes and display a custom 404 Not Found page, you can use a catch-all route with the path <code>*</code>.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        {/* Other routes */}
        &lt;Route path="*" element=&lt;NotFound /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Programmatic Navigation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Programmatic Navigation</h2>
      
      <!-- Using the useNavigate hook for programmatic navigation -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>useNavigate</code> for Navigation</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>useNavigate</code> hook allows you to navigate to different routes programmatically, such as after a form submission or an API call.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    // On success:
    navigate('/dashboard');
  };

  return (
    &lt;div&gt;
      &lt;h1&gt;Login&lt;/h1&gt;
      &lt;button onClick={handleLogin}&gt;Login&lt;/button&gt;
    &lt;/div&gt;
  );
}

export default Login;
        </code>
      </pre>

      <!-- Redirecting users to different routes -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Redirecting Users</h3>
      <p class="text-base md:text-lg mb-4">
        You can redirect users to different routes based on certain conditions using the <code>useNavigate</code> hook or the <code>&lt;Navigate&gt;</code> component.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example using <code>Navigate</code> Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return &lt;Navigate to="/login" replace /&gt;;
  }
  return children;
}

export default ProtectedRoute;
        </code>
      </pre>

      <!-- Route Protection and Authentication -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Route Protection and Authentication</h2>
      
      <!-- Creating protected routes using conditional rendering -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating Protected Routes</h3>
      <p class="text-base md:text-lg mb-4">
        Protecting certain routes ensures that only authenticated users can access them. This can be achieved by conditionally rendering routes based on authentication status.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const isAuthenticated = // determine authentication status

  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/login" element=&lt;Login /&gt; /&gt;
        &lt;Route 
          path="/dashboard" 
          element=&lt;ProtectedRoute isAuthenticated={isAuthenticated}&gt;
                    &lt;Dashboard /&gt;
                  &lt;/ProtectedRoute&gt; 
        /&gt;
        &lt;Route path="*" element=&lt;NotFound /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Redirecting unauthenticated users to a login page -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Redirecting Unauthenticated Users</h3>
      <p class="text-base md:text-lg mb-4">
        When a user attempts to access a protected route without being authenticated, they should be redirected to the login page.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return &lt;Navigate to="/login" replace /&gt;;
  }
  return children;
}

export default ProtectedRoute;
        </code>
      </pre>

      <!-- Nested Routes -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Nested Routes</h2>
      
      <!-- Defining and rendering child routes -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Defining Child Routes</h3>
      <p class="text-base md:text-lg mb-4">
        Nested routes allow you to define routes within routes, enabling a hierarchical structure for your application's UI.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/dashboard" element=&lt;Dashboard /&gt;&gt;
          &lt;Route path="profile" element=&lt;Profile /&gt; /&gt;
          &lt;Route path="settings" element=&lt;Settings /&gt; /&gt;
        &lt;/Route&gt;
        &lt;Route path="*" element=&lt;NotFound /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Using Outlet to render nested components -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>Outlet</code> for Nested Components</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>Outlet</code> component is used in parent routes to render their child routes. It acts as a placeholder for the child components.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Dashboard&lt;/h1&gt;
      &lt;nav&gt;
        &lt;Link to="profile"&gt;Profile&lt;/Link&gt; | 
        &lt;Link to="settings"&gt;Settings&lt;/Link&gt;
      &lt;/nav&gt;
      &lt;Outlet /&gt;
    &lt;/div&gt;
  );
}

export default Dashboard;
        </code>
      </pre>

      <!-- Structuring layouts for parent and child routes -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Structuring Layouts with Parent and Child Routes</h3>
      <p class="text-base md:text-lg mb-4">
        By using nested routes and the <code>Outlet</code> component, you can create complex layouts where parent components provide a common structure for their child components.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element=&lt;MainLayout /&gt;&gt;
          &lt;Route index element=&lt;Home /&gt; /&gt;
          &lt;Route path="about" element=&lt;About /&gt; /&gt;
          &lt;Route path="contact" element=&lt;Contact /&gt; /&gt;
        &lt;/Route&gt;
        &lt;Route path="*" element=&lt;NotFound /&gt; /&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}

export default App;
        </code>
      </pre>

      <!-- Route Transitions and Animation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Route Transitions and Animation</h2>
      
      <!-- Animating route transitions (optional) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Animating Route Transitions</h3>
      <p class="text-base md:text-lg mb-4">
        Adding animations to route transitions can enhance the user experience by providing visual feedback during navigation.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example using <code>CSSTransition</code> from <code>react-transition-group</code>:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home';
import About from './About';
import './transitions.css';

function App() {
  const location = useLocation();

  return (
    &lt;TransitionGroup&gt;
      &lt;CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      &gt;
        &lt;Routes location={location}&gt;
          &lt;Route path="/" element=&lt;Home /&gt; /&gt;
          &lt;Route path="/about" element=&lt;About /&gt; /&gt;
        &lt;/Routes&gt;
      &lt;/CSSTransition&gt;
    &lt;/TransitionGroup&gt;
  );
}

export default function WrappedApp() {
  return (
    &lt;BrowserRouter&gt;
      &lt;App /&gt;
    &lt;/BrowserRouter&gt;
  );
}
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>transitions.css:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-css">
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
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        This setup will fade components in and out during route transitions, creating a smooth visual effect.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Advanced routing in React Router empowers you to build complex, scalable, and user-friendly single-page applications. By leveraging dynamic routes, nested routes, route protection, and animations, you can create a seamless and engaging user experience.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next section, we'll explore state management in React and how it integrates with React Router to manage application state across different routes effectively.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvancedRouting',
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

/* Optional: Styles for route transitions */
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
