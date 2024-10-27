<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-yellow-500 rounded-t-xl p-4">
        <img src="/js/logo.png" alt="JavaScript Logo" class="w-12 h-12">
        <h1 class="text-2xl md:text-4xl font-bold text-black">Async Promise</h1>
      </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Table of Contents -->
      <nav class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><a href="#introduction" class="underline text-blue-800">Introduction to Asynchronous JavaScript</a></li>
          <li><a href="#why-async" class="underline text-blue-800">Why Asynchronous Programming?</a></li>
          <li><a href="#callbacks" class="underline text-blue-800">The Callback Hell</a></li>
          <li><a href="#promises" class="underline text-blue-800">Understanding Promises</a></li>
          <li><a href="#creating-promises" class="underline text-blue-800">Creating Promises</a></li>
          <li><a href="#consuming-promises" class="underline text-blue-800">Consuming Promises with then() and catch()</a></li>
          <li><a href="#chaining-promises" class="underline text-blue-800">Chaining Promises</a></li>
          <li><a href="#error-handling" class="underline text-blue-800">Error Handling in Promises</a></li>
          <li><a href="#promise-all-race" class="underline text-blue-800">Promise.all and Promise.race</a></li>
          <li><a href="#async-await" class="underline text-blue-800">Async/Await: Syntactic Sugar over Promises</a></li>
          <li><a href="#practical-examples" class="underline text-blue-800">Practical Examples</a></li>
          <li><a href="#best-practices" class="underline text-blue-800">Best Practices</a></li>
          <li><a href="#common-mistakes" class="underline text-blue-800">Common Mistakes</a></li>
          <li><a href="#summary" class="underline text-blue-800">Summary</a></li>
        </ul>
      </nav>

      <!-- Content Sections -->
      <!-- Introduction to Asynchronous JavaScript -->
      <section id="introduction" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Introduction to Asynchronous JavaScript</h2>
        <p class="md:text-lg mb-4">
          JavaScript is inherently synchronous and single-threaded, meaning it executes one task at a time. However, modern web applications often require handling multiple operations simultaneously, such as fetching data from APIs, reading files, or performing time-consuming computations. Asynchronous programming allows JavaScript to handle such tasks without blocking the main thread, ensuring a smooth and responsive user experience.
        </p>
        <p class="md:text-lg">
          This guide explores asynchronous programming concepts in JavaScript, focusing on Promises—a modern and powerful tool for managing asynchronous operations.
        </p>
      </section>

      <!-- Why Asynchronous Programming? -->
      <section id="why-async" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Asynchronous Programming?</h2>
        <p class="md:text-lg mb-4">
          Asynchronous programming is essential for tasks that take an indeterminate amount of time to complete. Without it, operations like network requests or file I/O would block the execution of subsequent code, leading to a poor user experience.
        </p>
        <ul class="list-disc list-inside md:text-lg">
          <li><strong>Non-blocking Operations:</strong> Allows the program to continue executing while waiting for an operation to complete.</li>
          <li><strong>Improved Performance:</strong> Efficiently utilizes system resources by handling multiple tasks concurrently.</li>
          <li><strong>Responsive UI:</strong> Ensures that the user interface remains interactive during long-running operations.</li>
        </ul>
      </section>

      <!-- The Callback Hell -->
      <section id="callbacks" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">The Callback Hell</h2>
        <p class="md:text-lg mb-4">
          Before Promises, asynchronous operations were handled using callbacks. While effective, nested callbacks often led to deeply indented code structures known as "callback hell," making code difficult to read and maintain.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ callbackHellExample }}</code></pre>
        </div>
        <p class="md:text-lg">
          The complexity of callback hell makes it challenging to handle errors and manage the flow of asynchronous operations. Promises were introduced to address these issues by providing a more manageable and readable approach.
        </p>
      </section>

      <!-- Understanding Promises -->
      <section id="promises" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Promises</h2>
        <p class="md:text-lg mb-4">
          Promises are objects that represent the eventual completion or failure of an asynchronous operation. They provide a cleaner and more intuitive way to handle asynchronous code compared to callbacks.
        </p>
        <ul class="list-disc list-inside md:text-lg mb-4">
          <li><strong>States of a Promise:</strong>
            <ul class="list-disc list-inside text-gray-600">
              <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected.</li>
              <li><strong>Fulfilled:</strong> The operation completed successfully.</li>
              <li><strong>Rejected:</strong> The operation failed.</li>
            </ul>
          </li>
          <li><strong>Advantages of Promises:</strong>
            <ul class="list-disc list-inside text-gray-600">
              <li>Avoids callback hell by flattening nested callbacks.</li>
              <li>Provides better error handling mechanisms.</li>
              <li>Enables chaining of asynchronous operations.</li>
            </ul>
          </li>
        </ul>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ promiseStatesExample }}</code></pre>
        </div>
      </section>

      <!-- Creating Promises -->
      <section id="creating-promises" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Creating Promises</h2>
        <p class="md:text-lg mb-4">
          A Promise is created using the <code>new Promise()</code> constructor, which takes an executor function as an argument. The executor function receives two functions as parameters: <code>resolve</code> and <code>reject</code>.
        </p>
        <p class="md:text-lg mb-4">
          <strong>Syntax:</strong>
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ creatingPromiseSyntax }}</code></pre>
        </div>
        <p class="md:text-lg mb-4">
          <strong>Explanation:</strong> In this example, the promise simulates an asynchronous operation (like fetching data) that resolves successfully after 2 seconds.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-6 overflow-auto">
          <pre><code class="language-javascript">{{ creatingPromiseExample }}</code></pre>
        </div>
      </section>

      <!-- Consuming Promises with then() and catch() -->
      <section id="consuming-promises" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Consuming Promises with then() and catch()</h2>
        <p class="md:text-lg mb-4">
          To handle the fulfillment or rejection of a promise, you use the <code>then()</code> and <code>catch()</code> methods.
        </p>
        <p class="md:text-lg mb-4">
          <strong>then():</strong> Invoked when the promise is fulfilled.
        </p>
        <p class="md:text-lg mb-4">
          <strong>catch():</strong> Invoked when the promise is rejected.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ consumingPromisesExample }}</code></pre>
        </div>
        <p class="md:text-lg">
          <strong>Explanation:</strong> The promise resolves after 2 seconds, triggering the <code>then()</code> block. If an error occurs, the <code>catch()</code> block handles it.
        </p>
      </section>

      <!-- Chaining Promises -->
      <section id="chaining-promises" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Chaining Promises</h2>
        <p class="md:text-lg mb-4">
          Promises can be chained to perform a series of asynchronous operations in sequence. Each <code>then()</code> returns a new promise, allowing for sequential execution.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ chainingPromisesExample }}</code></pre>
        </div>
        <p class="md:text-lg">
          <strong>Explanation:</strong> Each subsequent <code>then()</code> waits for the previous promise to resolve before executing, enabling a clear and manageable flow of asynchronous operations.
        </p>
      </section>

      <!-- Error Handling in Promises -->
      <section id="error-handling" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Error Handling in Promises</h2>
        <p class="md:text-lg mb-4">
          Proper error handling is crucial when working with promises to manage exceptions and unexpected behavior gracefully.
        </p>
        <p class="md:text-lg mb-4">
          <strong>Using catch():</strong> The <code>catch()</code> method handles any errors that occur in the promise chain.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ errorHandlingExample }}</code></pre>
        </div>
        <p class="md:text-lg mb-4">
          <strong>Explanation:</strong> If the promise is rejected, the error is caught in the <code>catch()</code> block, preventing unhandled promise rejections.
        </p>
      </section>

      <!-- Promise.all and Promise.race -->
      <section id="promise-all-race" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Promise.all and Promise.race</h2>
        <p class="md:text-lg mb-4">
          ES6 introduced utility methods for handling multiple promises simultaneously.
        </p>
        <ul class="list-disc list-inside md:text-lg mb-4">
          <li><strong>Promise.all:</strong> Waits for all promises to fulfill or any to reject.</li>
          <li><strong>Promise.race:</strong> Resolves or rejects as soon as one promise settles.</li>
        </ul>
        <p class="md:text-lg mb-4"><strong>Example of Promise.all:</strong></p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ promiseAllExample }}</code></pre>
        </div>
        <p class="md:text-lg mb-4">
          <strong>Explanation:</strong> <code>Promise.all</code> waits for all promises to resolve before executing the <code>then()</code> block. If any promise is rejected, it immediately triggers the <code>catch()</code> block.
        </p>
        <p class="md:text-lg mb-4"><strong>Example of Promise.race:</strong></p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ promiseRaceExample }}</code></pre>
        </div>
        <p class="md:text-lg">
          <strong>Explanation:</strong> <code>Promise.race</code> settles as soon as the first promise in the iterable settles, whether it's fulfilled or rejected.
        </p>
      </section>

      <!-- Async/Await: Syntactic Sugar over Promises -->
      <section id="async-await" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Async/Await: Syntactic Sugar over Promises</h2>
        <p class="md:text-lg mb-4">
          Introduced in ES2017, async/await provides a more readable and synchronous-looking way to write asynchronous code. Under the hood, it's built on top of Promises.
        </p>
        <ul class="list-disc list-inside md:text-lg mb-4">
          <li><strong>async:</strong> Declares an asynchronous function that returns a promise.</li>
          <li><strong>await:</strong> Pauses the async function until the promise is settled.</li>
        </ul>
        <p class="md:text-lg mb-4"><strong>Basic Async/Await Example:</strong></p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ asyncAwaitExample }}</code></pre>
        </div>
        <p class="md:text-lg mb-4">
          <strong>Explanation:</strong> The <code>fetchAndProcessData</code> function is declared as async, allowing the use of <code>await</code> to wait for the promise returned by <code>getData</code> to resolve.
        </p>
        <p class="md:text-lg mb-4"><strong>Error Handling with Async/Await:</strong></p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-javascript">{{ asyncAwaitErrorHandlingExample }}</code></pre>
        </div>
        <p class="md:text-lg">
          <strong>Explanation:</strong> Errors in async functions can be caught using try/catch blocks, providing a cleaner way to handle exceptions compared to traditional promise-based error handling.
        </p>
      </section>

      <!-- Practical Examples -->
      <section id="practical-examples" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Practical Examples</h2>
        <p class="md:text-lg mb-4">
          Applying Promises in real-world scenarios helps solidify understanding and showcases their practical utility.
        </p>

        <!-- Example 1: Fetching Data from an API -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-2">Fetching Data from an API</h3>
          <p class="md:text-lg mb-4">
            Using Promises to handle HTTP requests ensures that data fetching is managed asynchronously without blocking the main thread.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ fetchDataExample }}</code></pre>
          </div>
          <p class="md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>fetch</code> API returns a promise. By chaining <code>then()</code> methods, you can process the response data sequentially.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
            <pre><code class="language-javascript">{{ fetchDataUsage }}</code></pre>
          </div>
        </div>

        <!-- Example 2: Handling Multiple Asynchronous Operations -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-2">Handling Multiple Asynchronous Operations</h3>
          <p class="md:text-lg mb-4">
            Utilize <code>Promise.all</code> to handle multiple promises simultaneously, ensuring all operations complete before proceeding.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ multiplePromisesExample }}</code></pre>
          </div>
          <p class="md:text-lg mb-4">
            <strong>Explanation:</strong> <code>Promise.all</code> waits for all provided promises to resolve. If any promise is rejected, the entire <code>Promise.all</code> rejects.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
            <pre><code class="language-javascript">{{ multiplePromisesUsage }}</code></pre>
          </div>
        </div>

        <!-- Example 3: Implementing Retry Logic -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-2">Implementing Retry Logic</h3>
          <p class="md:text-lg mb-4">
            Enhance reliability by implementing retry mechanisms for operations that may fail intermittently, such as network requests.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ retryLogicExample }}</code></pre>
          </div>
          <p class="md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>retryOperation</code> function attempts to execute a promise-returning function multiple times before ultimately rejecting.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
            <pre><code class="language-javascript">{{ retryLogicUsage }}</code></pre>
          </div>
        </div>

        <!-- Example 4: Sequential API Calls -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-2">Sequential API Calls</h3>
          <p class="md:text-lg mb-4">
            Perform dependent API calls where the output of one call is needed for the next.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ sequentialApiCallsExample }}</code></pre>
          </div>
          <p class="md:text-lg mb-4">
            <strong>Explanation:</strong> The second API call depends on the data retrieved from the first call, demonstrating how promises can manage dependencies between asynchronous operations.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
            <pre><code class="language-javascript">{{ sequentialApiCallsUsage }}</code></pre>
          </div>
        </div>

        <!-- Example 5: Timeout with Promises -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-2">Timeout with Promises</h3>
          <p class="md:text-lg mb-4">
            Implement timeout functionality for operations that may take too long to complete.
          </p>
          <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
            <pre><code class="language-javascript">{{ timeoutPromiseExample }}</code></pre>
          </div>
          <p class="md:text-lg mb-4">
            <strong>Explanation:</strong> The <code>timeout</code> promise rejects after a specified duration, allowing you to handle cases where an operation exceeds the allowed time.
          </p>
          <div class="bg-gray-100 rounded-lg p-4 mb-6 overflow-auto">
            <pre><code class="language-javascript">{{ timeoutPromiseUsage }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Best Practices -->
      <section id="best-practices" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
        <p class="md:text-lg mb-4">
          Following best practices ensures that your asynchronous code is clean, efficient, and maintainable.
        </p>
        <ul class="list-disc list-inside md:text-lg">
          <li><strong>Always Handle Rejections:</strong> Use <code>catch()</code> or try/catch blocks to handle promise rejections and prevent unhandled promise errors.</li>
          <li><strong>Avoid Nesting Promises:</strong> Chain promises instead of nesting them to maintain readability and manageability.</li>
          <li><strong>Use Async/Await When Appropriate:</strong> Leverage async/await for clearer and more synchronous-looking asynchronous code.</li>
          <li><strong>Limit Concurrent Operations:</strong> Use tools like <code>Promise.all</code> responsibly to avoid overwhelming resources with too many concurrent operations.</li>
          <li><strong>Document Asynchronous Flows:</strong> Clearly document the flow of asynchronous operations to aid in understanding and maintenance.</li>
        </ul>
      </section>

      <!-- Common Mistakes -->
      <section id="common-mistakes" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Mistakes</h2>
        <p class="md:text-lg mb-4">
          Being aware of common pitfalls helps you avoid errors and write more robust asynchronous code.
        </p>
        <ul class="list-disc list-inside md:text-lg">
          <li><strong>Forgetting to Return Promises:</strong> Ensure that functions intended to return promises actually do so, preventing unexpected behaviors.</li>
          <li><strong>Ignoring Promise Rejections:</strong> Always handle potential rejections to maintain application stability.</li>
          <li><strong>Overusing Promise Chaining:</strong> Excessive chaining can make code harder to read; consider using async/await for better readability.</li>
          <li><strong>Mixing Callbacks and Promises:</strong> Avoid combining callbacks and promises, which can lead to confusion and bugs.</li>
          <li><strong>Not Understanding the Event Loop:</strong> A solid grasp of the JavaScript event loop is essential for effective asynchronous programming.</li>
        </ul>
      </section>

      <!-- Summary -->
      <section id="summary" class="mb-12">
        <h2 class="text-xl md:text-2xl font-semibold mb-4">Summary</h2>
        <p class="md:text-lg mb-4">
          Asynchronous programming is a cornerstone of modern JavaScript development, enabling efficient handling of time-consuming operations without blocking the main execution thread. Promises offer a structured and readable approach to managing asynchronous tasks, overcoming the limitations and complexities of callbacks.
        </p>
        <p class="md:text-lg">
          By mastering Promises and related asynchronous concepts, you can build responsive, high-performance applications that provide a seamless user experience. Remember to adhere to best practices and be mindful of common mistakes to harness the full potential of asynchronous JavaScript.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsyncPromisesGuide',
  data() {
    return {
      // Section 3: The Callback Hell
      callbackHellExample: `// Example of Callback Hell
getUser(userId, function(error, user) {
  if (error) {
    console.error(error);
  } else {
    getPosts(user, function(error, posts) {
      if (error) {
        console.error(error);
      } else {
        getComments(posts, function(error, comments) {
          if (error) {
            console.error(error);
          } else {
            console.log(comments);
          }
        });
      }
    });
  }
});`,

      // Section 4: Understanding Promises
      promiseStatesExample: `// Example of Promise States
const promise = new Promise((resolve, reject) => {
  // Initial state: Pending
  const success = true; // Change to false to see rejection
  if (success) {
    resolve('Promise Fulfilled!');
  } else {
    reject('Promise Rejected!');
  }
});

console.log(promise); // Output: Promise { 'Pending' }

// After some time
setTimeout(() => {
  console.log(promise); // Output: Promise { 'Fulfilled' } or Promise { 'Rejected' }
}, 1000);`,

      // Section 5: Creating Promises
      creatingPromiseSyntax: `const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  if (/* operation successful */) {
    resolve(result);
  } else {
    reject(error);
  }
});`,

      creatingPromiseExample: `// Creating a Promise that resolves after 2 seconds
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Change to false to simulate rejection
    if (success) {
      resolve('Data fetched successfully!');
    } else {
      reject('Error fetching data.');
    }
  }, 2000);
});`,

      // Section 6: Consuming Promises with then() and catch()
      consumingPromisesExample: `// Consuming the fetchData Promise
fetchData
  .then((message) => {
    console.log(message); // Output after 2 seconds: Data fetched successfully!
  })
  .catch((error) => {
    console.error(error); // Output if rejected: Error fetching data.
  });`,

      // Section 7: Chaining Promises
      chainingPromisesExample: `// Chaining Promises for sequential operations
fetchData
  .then((data) => {
    console.log(data); // Output: Data fetched successfully!
    return processData(data); // Returns another promise
  })
  .then((processedData) => {
    console.log(processedData); // Output from processData
    return saveData(processedData); // Returns another promise
  })
  .then((saveResult) => {
    console.log(saveResult); // Output from saveData
  })
  .catch((error) => {
    console.error(error); // Handles any rejection in the chain
  });

function processData(data) {
  return new Promise((resolve, reject) => {
    // Simulate processing
    setTimeout(() => {
      resolve(\`Processed: \${data}\`);
    }, 1000);
  });
}

function saveData(processedData) {
  return new Promise((resolve, reject) => {
    // Simulate saving
    setTimeout(() => {
      resolve(\`Data saved: \${processedData}\`);
    }, 1000);
  });
}`,

      // Section 8: Error Handling in Promises
      errorHandlingExample: `// Handling errors in Promises
const unreliablePromise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

unreliablePromise
  .then((message) => {
    console.log(message); // Output: Success!
  })
  .catch((error) => {
    console.error(error); // Output: Failure!
  });`,

      // Section 9: Promise.all and Promise.race
      promiseAllExample: `// Example of Promise.all
const promise1 = Promise.resolve('First Promise');
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Second Promise');
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Third Promise');
});

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('All Promises Resolved:', results);
  })
  .catch((error) => {
    console.error('One of the promises rejected:', error);
  });`,

      promiseRaceExample: `// Example of Promise.race
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'First Promise');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Second Promise');
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1500, 'Third Promise');
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // Output: 'First Promise'
  })
  .catch((error) => {
    console.error(error);
  });`,

      // Section 10: Async/Await
      asyncAwaitExample: `// Example of Async/Await
async function fetchAndProcessData() {
  try {
    const data = await fetchData;
    console.log(data); // Output: Data fetched successfully!
    const processed = await processData(data);
    console.log(processed); // Output: Processed: Data fetched successfully!
    const saved = await saveData(processed);
    console.log(saved); // Output: Data saved: Processed: Data fetched successfully!
  } catch (error) {
    console.error(error);
  }
}

fetchAndProcessData();`,

      asyncAwaitErrorHandlingExample: `// Error Handling with Async/Await
async function fetchWithErrorHandling() {
  try {
    const data = await unreliablePromise;
    console.log(data);
  } catch (error) {
    console.error('Caught an error:', error); // Output: Caught an error: Failure!
  }
}

fetchWithErrorHandling();`,

      // Section 11: Practical Examples
      // Example 1: Fetching Data from an API
      fetchDataExample: `// Example 11.1: Fetching Data from an API
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
      .then(response => {
        if (!response.ok) {
          reject('Network response was not ok');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}`,

      fetchDataUsage: `// Using the fetchUser function
fetchUser(1)
  .then(user => {
    console.log('User Data:', user);
  })
  .catch(error => {
    console.error('Error:', error);
  });`,

      // Example 2: Handling Multiple Asynchronous Operations
      multiplePromisesExample: `// Example 11.2: Handling Multiple Asynchronous Operations
const promiseA = new Promise((resolve) => setTimeout(() => resolve('A resolved'), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve('B resolved'), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve('C resolved'), 3000));

Promise.all([promiseA, promiseB, promiseC])
  .then((results) => {
    console.log('All Promises Resolved:', results);
  })
  .catch((error) => {
    console.error('One of the promises rejected:', error);
  });`,

      multiplePromisesUsage: `// Output after 3 seconds:
All Promises Resolved: ['A resolved', 'B resolved', 'C resolved']`,

      // Example 3: Implementing Retry Logic
      retryLogicExample: `// Example 11.3: Implementing Retry Logic
function retryOperation(operation, retries) {
  return new Promise((resolve, reject) => {
    operation()
      .then(resolve)
      .catch((error) => {
        if (retries > 0) {
          console.log(\`Retrying operation... (\${retries} retries left)\`);
          resolve(retryOperation(operation, retries - 1));
        } else {
          reject(error);
        }
      });
  });
}

// Sample operation that fails randomly
function unreliableOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve('Operation succeeded!');
      } else {
        reject('Operation failed!');
      }
    }, 1000);
  });
}`,

      retryLogicUsage: `// Using the retryOperation function
retryOperation(unreliableOperation, 3)
  .then(result => {
    console.log(result); // Output: Operation succeeded!
  })
  .catch(error => {
    console.error(error); // Output after retries: Operation failed!
  });`,

      // Example 4: Sequential API Calls
      sequentialApiCallsExample: `// Example 11.4: Sequential API Calls
function getUser(userId) {
  return fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`)
    .then(response => response.json());
}

function getPosts(user) {
  return fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${user.id}\`)
    .then(response => response.json());
}

function getComments(post) {
  return fetch(\`https://jsonplaceholder.typicode.com/comments?postId=\${post.id}\`)
    .then(response => response.json());
}

// Using Promise Chaining
getUser(1)
  .then(user => {
    console.log('User:', user);
    return getPosts(user);
  })
  .then(posts => {
    console.log('Posts:', posts);
    return getComments(posts[0]);
  })
  .then(comments => {
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error('Error:', error);
  });`,

      sequentialApiCallsUsage: `// Output:
User: { id: 1, name: 'Leanne Graham', ... }
Posts: [{ userId: 1, id: 1, title: '...', body: '...' }, ...]
Comments: [{ postId: 1, id: 1, name: '...', email: '...', body: '...' }, ...]`,

      // Example 5: Timeout with Promises
      timeoutPromiseExample: `// Example 11.5: Timeout with Promises
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Operation timed out');
    }, ms);
  });
}

function fetchWithTimeout(resource, options, ms) {
  return Promise.race([
    fetch(resource, options),
    timeout(ms)
  ]);
}`,

      timeoutPromiseUsage: `// Using the fetchWithTimeout function
fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', {}, 1000)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('Error:', error); // Output if operation times out or fetch fails
  });`,
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

h2, p , h1, h3, h4{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}

</style>
