<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Working with Axios</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      
      <!-- What is Axios? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">What is Axios?</h2>
      <p class="text-base md:text-lg mb-4">
        Axios is a popular promise-based HTTP client for JavaScript, which can be used in both the browser and Node.js environments. It simplifies making HTTP requests to interact with APIs, handle responses, and manage errors.
      </p>
      <p class="text-base md:text-lg mb-6">
        With Axios, you can perform various HTTP methods such as GET, POST, PUT, DELETE, and more, making it a versatile tool for handling data communication in your React applications.
      </p>

      <!-- Why Use Axios in React? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Why Use Axios in React?</h2>
      <p class="text-base md:text-lg mb-4">
        Axios offers several advantages when used in React applications:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Ease of Use:</strong> Simple and intuitive API for making HTTP requests.</li>
        <li><strong>Promise-Based:</strong> Facilitates asynchronous operations and easier error handling.</li>
        <li><strong>Interceptors:</strong> Allows you to intercept requests or responses before they are handled.</li>
        <li><strong>Automatic JSON Transformation:</strong> Automatically transforms JSON data, reducing the need for manual parsing.</li>
        <li><strong>Cancellation:</strong> Supports request cancellation to abort ongoing requests if necessary.</li>
      </ul>

      <!-- Setting Up Axios in React -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Setting Up Axios in React</h2>

      <!-- Installing Axios using npm or yarn -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Installing Axios</h3>
      <p class="text-base md:text-lg mb-4">
        You can install Axios using either <code>npm</code> or <code>yarn</code>. It's recommended to install the latest version to leverage new features and improvements.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Using npm:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
npm install axios
        </code>
      </pre>
      <p class="text-base md:text-lg mb-4">
        <strong>Using yarn:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
yarn add axios
        </code>
      </pre>

      <!-- Importing and Configuring Axios -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Importing and Configuring Axios</h3>
      <p class="text-base md:text-lg mb-4">
        After installation, you need to import Axios into your React components or set it up globally for use throughout your application.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Importing Axios in a Component:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosExample() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    axios.get('https://api.example.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        setError(error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    &lt;div&gt;
      {error ? (
        &lt;p&gt;Error: {error.message}&lt;/p&gt;
      ) : (
        &lt;ul&gt;
          {users.map(user =&gt; (
            &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;
          ))}
        &lt;/ul&gt;
      )}
    &lt;/div&gt;
  );
}

export default AxiosExample;
        </code>
      </pre>

      <!-- Setting Up a Global Axios Instance -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Setting Up a Global Axios Instance</h3>
      <p class="text-base md:text-lg mb-4">
        To avoid repetitive imports and configurations, you can set up a global Axios instance using React Context or by configuring it in a separate file.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Creating a Separate Axios Instance:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  // You can add custom headers here
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config =&gt; {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error =&gt; {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response =&gt; response,
  error =&gt; {
    if (error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        You can then import this instance wherever you need to make HTTP requests:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance';

function AxiosExample() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = () =&gt; {
    axiosInstance.get('/data')
      .then(response =&gt; {
        setData(response.data);
      })
      .catch(error =&gt; {
        setError(error);
      });
  };

  useEffect(() =&gt; {
    fetchData();
  }, []);

  return (
    &lt;div&gt;
      {error ? (
        &lt;p&gt;Error: {error.message}&lt;/p&gt;
      ) : (
        &lt;ul&gt;
          {data.map(item =&gt; (
            &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
          ))}
        &lt;/ul&gt;
      )}
    &lt;/div&gt;
  );
}

export default AxiosExample;
        </code>
      </pre>

      <!-- Making HTTP Requests -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Making HTTP Requests</h2>

      <!-- Performing GET Requests -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Performing GET Requests</h3>
      <p class="text-base md:text-lg mb-4">
        GET requests are used to retrieve data from a server. Here's how you can perform a GET request using Axios in a React component:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetRequestExample() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () =&gt; {
    try {
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() =&gt; {
    fetchData();
  }, []);

  return (
    &lt;div&gt;
      {error ? (
        &lt;p&gt;Error: {error.message}&lt;/p&gt;
      ) : (
        &lt;ul&gt;
          {data.map(item =&gt; (
            &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
          ))}
        &lt;/ul&gt;
      )}
    &lt;/div&gt;
  );
}

export default GetRequestExample;
        </code>
      </pre>

      <!-- Performing POST Requests -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Performing POST Requests</h3>
      <p class="text-base md:text-lg mb-4">
        POST requests are used to send data to a server. Below is an example of how to perform a POST request in a React component:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState } from 'react';
import axios from 'axios';

function PostRequestExample() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) =&gt; {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) =&gt; {
    e.preventDefault();
    try {
      const res = await axios.post('https://api.example.com/submit', formData);
      setResponse(res.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    &lt;form onSubmit={submitForm}&gt;
      &lt;div&gt;
        &lt;label&gt;Name:&lt;/label&gt;
        &lt;input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        /&gt;
      &lt;/div&gt;
      &lt;div&gt;
        &lt;label&gt;Email:&lt;/label&gt;
        &lt;input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        /&gt;
      &lt;/div&gt;
      &lt;button type="submit"&gt;Submit&lt;/button&gt;
      {response && &lt;p&gt;Success: {response.message}&lt;/p&gt;}
      {error && &lt;p&gt;Error: {error.message}&lt;/p&gt;}
    &lt;/form&gt;
  );
}

export default PostRequestExample;
        </code>
      </pre>

      <!-- Handling Responses and Errors -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Handling Responses and Errors</h3>
      <p class="text-base md:text-lg mb-4">
        Axios provides a straightforward way to handle responses and errors. You can use <code>then</code> and <code>catch</code> for promise-based handling or <code>try-catch</code> blocks with async-await.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example with Async-Await:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HandleResponsesExample() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () =&gt; {
    try {
      const response = await axios.get('https://api.example.com/data');
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() =&gt; {
    fetchData();
  }, []);

  return (
    &lt;div&gt;
      {error ? (
        &lt;p&gt;Error: {error.message}&lt;/p&gt;
      ) : (
        &lt;ul&gt;
          {data.map(item =&gt; (
            &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
          ))}
        &lt;/ul&gt;
      )}
    &lt;/div&gt;
  );
}

export default HandleResponsesExample;
        </code>
      </pre>

      <!-- Using Axios Interceptors -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Using Axios Interceptors</h2>
      <p class="text-base md:text-lg mb-4">
        Axios interceptors allow you to intercept requests or responses before they are handled by <code>then</code> or <code>catch</code>. This is useful for adding authentication tokens, logging, or modifying request/response data.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example of Setting Up a Request Interceptor:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config =&gt; {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error =&gt; {
    return Promise.reject(error);
  }
);

export default axiosInstance;
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Example of Setting Up a Response Interceptor:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import axios from 'axios';

// Assuming axiosInstance is already created with interceptors
axiosInstance.interceptors.response.use(
  response =&gt; response,
  error =&gt; {
    if (error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
        </code>
      </pre>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Axios is a powerful and flexible HTTP client that integrates seamlessly with React applications. By understanding how to set up Axios, perform various HTTP requests, handle responses and errors, and utilize interceptors, you can efficiently manage data communication in your React projects.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next section, we'll explore advanced Axios features, including handling file uploads, setting up global configurations, and optimizing performance for large-scale applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkingWithAxios',
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
