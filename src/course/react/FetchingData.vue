<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-cyan-950">Fetching Data from API in React</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">

      <!-- Introduction to Data Fetching -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Introduction to Data Fetching</h2>
      <p class="text-base md:text-lg mb-6">
        Fetching data from APIs is a fundamental aspect of building dynamic React applications. It allows your app to retrieve data from external sources, such as RESTful APIs or GraphQL endpoints, enabling the display of real-time information and enhancing user interaction.
      </p>

      <!-- Using the Fetch API -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Using the Fetch API</h2>
      <p class="text-base md:text-lg mb-4">
        The Fetch API provides a simple interface for fetching resources asynchronously across the network. It is built into modern browsers and offers a promise-based approach to handle HTTP requests.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Basic Fetch Example</h3>
      <p class="text-base md:text-lg mb-6">
        Here's a basic example of how to use the Fetch API within a React component to retrieve data from an API endpoint.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response =&gt; {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data =&gt; {
        setData(data);
        setLoading(false);
      })
      .catch(error =&gt; {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h1&gt;Fetched Data&lt;/h1&gt;
      &lt;ul&gt;
        {data.map(item =&gt; (
          &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default DataFetcher;
        </code>
      </pre>

      <!-- Using Axios for Data Fetching -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Using Axios for Data Fetching</h2>
      <p class="text-base md:text-lg mb-4">
        Axios is a popular third-party library for making HTTP requests. It offers several advantages over the Fetch API, including automatic JSON data transformation, request cancellation, and better error handling.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Installing Axios</h3>
      <p class="text-base md:text-lg mb-6">
        You can install Axios using npm or yarn:
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Using npm:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
npm install axios
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Using yarn:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-shell">
yarn add axios
        </code>
      </pre>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Basic Axios Example</h3>
      <p class="text-base md:text-lg mb-6">
        Here's how to use Axios within a React component to fetch data:
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosDataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    axios.get('https://api.example.com/data')
      .then(response =&gt; {
        setData(response.data);
        setLoading(false);
      })
      .catch(error =&gt; {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h1&gt;Fetched Data with Axios&lt;/h1&gt;
      &lt;ul&gt;
        {data.map(item =&gt; (
          &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default AxiosDataFetcher;
        </code>
      </pre>

      <!-- Using useEffect for Data Fetching -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Using useEffect for Data Fetching</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>useEffect</code> hook is essential for performing side effects in functional React components, such as fetching data from APIs. It allows you to run code after the component has rendered.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Fetching Data on Component Mount</h3>
      <p class="text-base md:text-lg mb-6">
        To fetch data when a component mounts, pass an empty dependency array to <code>useEffect</code>. This ensures the fetch operation runs only once.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useEffect, useState } from 'react';

function FetchOnMount() {
  const [data, setData] = useState([]);

  useEffect(() =&gt; {
    fetch('https://api.example.com/data')
      .then(response =&gt; response.json())
      .then(data =&gt; setData(data));
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    &lt;div&gt;
      &lt;h1&gt;Data on Mount&lt;/h1&gt;
      &lt;ul&gt;
        {data.map(item =&gt; (
          &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default FetchOnMount;
        </code>
      </pre>

      <!-- Handling Loading and Error States -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Handling Loading and Error States</h2>
      <p class="text-base md:text-lg mb-4">
        Managing loading and error states enhances user experience by providing feedback during data fetching processes.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Implementing Loading States</h3>
      <p class="text-base md:text-lg mb-6">
        Display a loading indicator while data is being fetched to inform users that an operation is in progress.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Implementing Error Handling</h3>
      <p class="text-base md:text-lg mb-6">
        Gracefully handle errors by displaying appropriate messages, allowing users to understand and possibly rectify issues.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useEffect, useState } from 'react';

function FetchWithLoadingAndError() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    fetch('https://api.example.com/data')
      .then(response =&gt; {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data =&gt; {
        setData(data);
        setLoading(false);
      })
      .catch(error =&gt; {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h1&gt;Fetched Data&lt;/h1&gt;
      &lt;ul&gt;
        {data.map(item =&gt; (
          &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default FetchWithLoadingAndError;
        </code>
      </pre>

      <!-- Displaying Fetched Data -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Displaying Fetched Data</h2>
      <p class="text-base md:text-lg mb-4">
        Once data is fetched, it can be displayed in various formats such as lists, tables, or custom components. Ensure that the UI is responsive and accessible.
      </p>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Rendering Data in Lists</h3>
      <p class="text-base md:text-lg mb-6">
        Use the <code>.map()</code> function to iterate over the data array and render each item as a list element.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useEffect, useState } from 'react';

function DataList() {
  const [items, setItems] = useState([]);

  useEffect(() =&gt; {
    fetch('https://api.example.com/items')
      .then(response =&gt; response.json())
      .then(data =&gt; setItems(data));
  }, []);

  return (
    &lt;div&gt;
      &lt;h1&gt;Item List&lt;/h1&gt;
      &lt;ul&gt;
        {items.map(item =&gt; (
          &lt;li key={item.id}&gt;{item.name} - {item.description}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default DataList;
        </code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Best Practices</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Always handle loading and error states to improve user experience.</li>
        <li>Use <code>useEffect</code> with an appropriate dependency array to control when data fetching occurs.</li>
        <li>Clean up side effects in <code>useEffect</code> to prevent memory leaks, especially with subscriptions or ongoing requests.</li>
        <li>Use environment variables to manage API endpoints and sensitive information.</li>
        <li>Implement caching strategies to reduce unnecessary network requests and improve performance.</li>
        <li>Ensure accessibility by providing appropriate ARIA attributes and semantic HTML.</li>
      </ul>

      <!-- Advanced Topics -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Advanced Topics</h2>
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Async/Await for Data Fetching</h3>
      <p class="text-base md:text-lg mb-6">
        The async/await syntax offers a cleaner and more readable way to handle asynchronous operations compared to traditional promise chaining.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import React, { useEffect, useState } from 'react';

function AsyncAwaitFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () =&gt; {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() =&gt; {
    fetchData();
  }, []);

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h1&gt;Data Fetched with Async/Await&lt;/h1&gt;
      &lt;ul&gt;
        {data.map(item =&gt; (
          &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default AsyncAwaitFetcher;
        </code>
      </pre>

      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Custom Hooks for Data Fetching</h3>
      <p class="text-base md:text-lg mb-6">
        Custom hooks can encapsulate data fetching logic, making your components cleaner and promoting code reuse.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Example:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code class="language-jsx">
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    const fetchData = async () =&gt; {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// Usage in a component
import React from 'react';
import useFetch from './useFetch';

function CustomHookFetcher() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
  if (error) return &lt;p&gt;Error: {error.message}&lt;/p&gt;;

  return (
    &lt;div&gt;
      &lt;h1&gt;Data Fetched with Custom Hook&lt;/h1&gt;
      &lt;ul&gt;
        {data.map(item =&gt; (
          &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
        ))}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}

export default CustomHookFetcher;
        </code>
      </pre>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Fetching data from APIs is a vital skill in React development, enabling your applications to interact with external data sources and provide dynamic content. By mastering the Fetch API, Axios, and React hooks like <code>useEffect</code>, you can efficiently manage data retrieval and enhance the responsiveness of your React applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the next module, we'll delve into state management in React, exploring hooks like <code>useState</code> and <code>useReducer</code>, as well as integrating state management libraries to handle complex application states effectively.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FetchingDataFromAPI',
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


h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>