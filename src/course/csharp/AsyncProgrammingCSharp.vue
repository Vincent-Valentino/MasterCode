<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-950 rounded-t-xl p-4">
      <img src="/csharp/logo.svg" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Asynchronous Programming in C#</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        In today's fast-paced digital landscape, application performance and responsiveness are paramount. Users expect seamless and instantaneous interactions, whether they're loading data, performing computations, or interacting with various services. **Asynchronous programming** in C# offers a powerful paradigm to enhance application performance by allowing tasks to run concurrently without blocking the main thread. This approach leads to more responsive applications, efficient resource utilization, and improved user experiences. This section delves into the fundamentals of asynchronous programming in C#, covering the `async` and `await` keywords, Tasks and the Task-based Asynchronous Pattern (TAP), handling asynchronous exceptions, and best practices to follow. Through real-world analogies and practical code examples, you'll gain a thorough understanding of how to implement and leverage asynchronous programming in your C# applications.
      </p>

      <!-- Understanding Asynchronous Programming -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Asynchronous Programming</h2>
      <p class="text-base md:text-lg mb-4">
        **Asynchronous programming** allows a program to initiate a potentially time-consuming operation and continue executing other tasks without waiting for the operation to complete. This is particularly useful in scenarios where the application needs to perform multiple operations simultaneously, such as fetching data from a server, reading files, or performing complex computations.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Imagine you're cooking dinner while simultaneously responding to phone calls. Instead of waiting to finish chopping vegetables before answering the phone, you can handle the calls while the vegetables are still being prepared. This multitasking approach leads to more efficient use of time and resources.
      </p>

      <!-- Why Use Asynchronous Programming -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Use Asynchronous Programming</h2>
      <p class="text-base md:text-lg mb-4">
        Asynchronous programming offers several benefits that can significantly enhance the performance and responsiveness of your applications:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Improved Responsiveness:</strong> Applications remain responsive to user interactions while performing background operations.</li>
        <li><strong>Efficient Resource Utilization:</strong> System resources are used more effectively by avoiding idle time during blocking operations.</li>
        <li><strong>Scalability:</strong> Applications can handle more concurrent operations without significant performance degradation.</li>
        <li><strong>Enhanced User Experience:</strong> Users experience smoother and faster interactions, leading to higher satisfaction.</li>
      </ul>

      <!-- Async and Await Keywords -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Async and Await Keywords</h2>
      <p class="text-base md:text-lg mb-4">
        The `async` and `await` keywords are central to implementing asynchronous programming in C#. They simplify the process of writing asynchronous code by allowing developers to write code that looks synchronous but operates asynchronously under the hood.
      </p>

      <!-- Async Keyword -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Async Keyword</h3>
      <p class="text-base md:text-lg mb-6">
        The `async` modifier is used to declare a method as asynchronous. It enables the use of the `await` keyword within the method, allowing asynchronous operations to be awaited without blocking the calling thread.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Key Points:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Methods marked with `async` can contain one or more `await` expressions.</li>
        <li>An `async` method typically returns a `Task` or `Task&lt;T&gt;`, but it can also return `void` (primarily for event handlers).</li>
        <li>The presence of `async` allows the compiler to transform the method into a state machine that handles asynchronous operations.</li>
      </ul>

      <!-- Await Keyword -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Await Keyword</h3>
      <p class="text-base md:text-lg mb-6">
        The `await` keyword is used to suspend the execution of an `async` method until the awaited task completes. This allows other tasks to run concurrently, enhancing the application's responsiveness.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Key Points:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>The method in which `await` is used must be marked with the `async` keyword.</li>
        <li>Using `await` does not block the calling thread; instead, it returns control to the caller until the awaited task completes.</li>
        <li>After the awaited task completes, execution resumes from the point where it was suspended.</li>
      </ul>

      <!-- Example: Using Async and Await -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using Async and Await</h3>
      <p class="text-base md:text-lg mb-4">
        Below is a practical example demonstrating how to use the `async` and `await` keywords to perform an asynchronous operation without blocking the main thread.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Asynchronous method using async and await
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class AsyncAwaitExample
{
    public static async Task Main(string[] args)
    {
        Console.WriteLine("Fetching data from API...");
        string data = await FetchDataFromApiAsync("https://api.example.com/data");
        Console.WriteLine("Data fetched successfully.");
        Console.WriteLine(data);
    }

    public static async Task&lt;string&gt; FetchDataFromApiAsync(string url)
    {
        using (HttpClient client = new HttpClient())
        {
            // Asynchronously get the response
            HttpResponseMessage response = await client.GetAsync(url);
            
            // Ensure the request was successful
            response.EnsureSuccessStatusCode();
            
            // Asynchronously read the response content
            string responseData = await response.Content.ReadAsStringAsync();
            return responseData;
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Main Method:</strong> Marked with `async` and returns a `Task`. It calls the asynchronous method `FetchDataFromApiAsync` using the `await` keyword, which suspends the execution of `Main` until the data is fetched.
        </li>
        <li>
          <strong>FetchDataFromApiAsync Method:</strong> An asynchronous method that uses `HttpClient` to fetch data from a specified API. It uses `await` to asynchronously wait for the HTTP response and to read the response content without blocking the thread.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Fetching data from API...
Data fetched successfully.
{
    "id": 1,
    "name": "Sample Data",
    "value": "This is a sample response from the API."
}
</code>
      </pre>

      <!-- Tasks and Task-based Asynchronous Pattern (TAP) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Tasks and Task-based Asynchronous Pattern (TAP)</h2>
      <p class="text-base md:text-lg mb-4">
        The **Task-based Asynchronous Pattern (TAP)** is the recommended model for asynchronous programming in C#. It leverages the `Task` and `Task&lt;T&gt;` types to represent asynchronous operations, providing a flexible and scalable approach to managing concurrency.
      </p>

      <!-- Understanding Tasks -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Understanding Tasks</h3>
      <p class="text-base md:text-lg mb-6">
        A **Task** represents an asynchronous operation that can be awaited. It can be thought of as a placeholder for a future result, allowing the program to continue executing while the task completes in the background.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Key Points:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Task:</strong> Represents a non-returning asynchronous operation.</li>
        <li><strong>Task&lt;T&gt;:</strong> Represents an asynchronous operation that returns a result of type <code>T</code>.</li>
        <li>Tasks can be created manually using the <code>new Task()</code> constructor or through factory methods like <code>Task.Run()</code> and <code>Task.Factory.StartNew()</code>.</li>
        <li>Tasks provide methods like <code>ContinueWith()</code> to specify continuation actions after the task completes.</li>
      </ul>

      <!-- Example: Using Tasks -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using Tasks</h3>
      <p class="text-base md:text-lg mb-4">
        Below is an example demonstrating the creation and execution of tasks using the Task-based Asynchronous Pattern.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Creating and running tasks
using System;
using System.Threading.Tasks;

public class TaskExample
{
    public static async Task Main(string[] args)
    {
        Console.WriteLine("Starting tasks...");

        Task task1 = Task.Run(() => DoWork("Task 1", 2000));
        Task&lt;string&gt; task2 = Task.Run(() => DoWorkWithResult("Task 2", 3000));

        await Task.WhenAll(task1, task2);

        Console.WriteLine("All tasks completed.");
        Console.WriteLine($"Result from Task 2: {task2.Result}");
    }

    public static void DoWork(string name, int delay)
    {
        Console.WriteLine($"{name} started.");
        Task.Delay(delay).Wait(); // Simulate work
        Console.WriteLine($"{name} completed.");
    }

    public static string DoWorkWithResult(string name, int delay)
    {
        Console.WriteLine($"{name} started.");
        Task.Delay(delay).Wait(); // Simulate work
        Console.WriteLine($"{name} completed.");
        return $"{name} Result";
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Task.Run:</strong> Creates and starts a new task to execute the specified action asynchronously.
        </li>
        <li>
          <strong>Task.WhenAll:</strong> Awaits the completion of multiple tasks concurrently.
        </li>
        <li>
          <strong>DoWork Method:</strong> Simulates work by delaying for a specified time and then completes.
        </li>
        <li>
          <strong>DoWorkWithResult Method:</strong> Similar to <code>DoWork</code> but returns a string result upon completion.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Starting tasks...
Task 1 started.
Task 2 started.
Task 1 completed.
Task 2 completed.
All tasks completed.
Result from Task 2: Task 2 Result
</code>
      </pre>

      <!-- Handling Asynchronous Exceptions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Handling Asynchronous Exceptions</h2>
      <p class="text-base md:text-lg mb-4">
        Just like synchronous code, asynchronous operations can throw exceptions. However, handling exceptions in asynchronous methods requires a different approach to ensure that errors are properly caught and managed.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Key Points:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Exceptions thrown in asynchronous methods are captured in the returned Task and re-thrown when awaited.</li>
        <li>Use try-catch blocks around <code>await</code> expressions to handle exceptions from asynchronous operations.</li>
        <li>When using continuation tasks, handle exceptions within the continuation.</li>
      </ul>

      <!-- Example: Handling Exceptions in Async Methods -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Handling Exceptions in Async Methods</h3>
      <p class="text-base md:text-lg mb-4">
        Below is an example demonstrating how to handle exceptions that occur within asynchronous methods.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Handling exceptions in asynchronous methods
using System;
using System.Net.Http;
using System.Threading.Tasks;

public class AsyncExceptionHandlingExample
{
    public static async Task Main(string[] args)
    {
        try
        {
            string data = await FetchDataAsync("https://invalidurl.example.com");
            Console.WriteLine(data);
        }
        catch (HttpRequestException ex)
        {
            Console.WriteLine($"Request error: {ex.Message}");
        }
        catch (TaskCanceledException ex)
        {
            Console.WriteLine("Request timed out.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An unexpected error occurred: {ex.Message}");
        }
    }

    public static async Task&lt;string&gt; FetchDataAsync(string url)
    {
        using (HttpClient client = new HttpClient())
        {
            // Set a timeout for the request
            client.Timeout = TimeSpan.FromSeconds(5);

            // This will throw HttpRequestException for invalid URLs
            HttpResponseMessage response = await client.GetAsync(url);
            response.EnsureSuccessStatusCode(); // Throws if not a success code

            string content = await response.Content.ReadAsStringAsync();
            return content;
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Main Method:</strong> Contains a try-catch block that awaits the asynchronous method <code>FetchDataAsync</code>. It catches specific exceptions like <code>HttpRequestException</code> and <code>TaskCanceledException</code>, as well as a general <code>Exception</code>.
        </li>
        <li>
          <strong>FetchDataAsync Method:</strong> Attempts to fetch data from a specified URL using <code>HttpClient</code>. It sets a timeout and ensures that the response indicates success. Exceptions are thrown if the URL is invalid or if the request times out.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output for Invalid URL:
Request error: No such host is known.
Operation completed.

</code>
      </pre>

      <!-- Best Practices in Asynchronous Programming -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices in Asynchronous Programming</h2>
      <p class="text-base md:text-lg mb-4">
        To effectively utilize asynchronous programming in C#, it's essential to adhere to best practices that ensure code quality, maintainability, and performance.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use Async All the Way:</strong> If one part of a call chain is asynchronous, consider making the entire chain asynchronous to avoid blocking threads.</li>
        <li><strong>Avoid Blocking Calls:</strong> Refrain from using blocking calls like <code>Task.Wait()</code> or <code>Task.Result</code> as they can lead to deadlocks and reduced performance.</li>
        <li><strong>Prefer Task-Based Asynchronous Pattern (TAP):</strong> TAP is the recommended pattern for asynchronous programming in C#, leveraging <code>Task</code> and <code>Task&lt;T&gt;</code>.</li>
        <li><strong>Handle Exceptions Properly:</strong> Always handle exceptions in asynchronous methods using try-catch blocks around <code>await</code> expressions.</li>
        <li><strong>Use ConfigureAwait(false)</strong>: In library code, use <code>ConfigureAwait(false)</code> to avoid capturing the synchronization context, improving performance and avoiding deadlocks.</li>
        <li><strong>Keep Async Methods Short and Focused:</strong> Design asynchronous methods to perform a single task or a small set of related tasks to enhance readability and maintainability.</li>
        <li><strong>Use Cancellation Tokens:</strong> Implement cancellation tokens to allow operations to be canceled, improving responsiveness and resource management.</li>
        <li><strong>Test Asynchronous Code Thoroughly:</strong> Asynchronous code can introduce race conditions and timing issues. Ensure comprehensive testing to identify and resolve such problems.</li>
        <li><strong>Document Async Methods:</strong> Clearly document the behavior of asynchronous methods, including their expected inputs, outputs, and potential exceptions.</li>
      </ul>

      <!-- Example: Avoiding Blocking Calls -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Avoiding Blocking Calls</h3>
      <p class="text-base md:text-lg mb-4">
        Below is an example illustrating the pitfalls of using blocking calls in asynchronous methods and how to refactor the code to be fully asynchronous.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Refactoring blocking calls to asynchronous methods
using System;
using System.Threading.Tasks;

public class BlockingVsAsyncExample
{
    public static void Main(string[] args)
    {
        // Blocking call
        Console.WriteLine("Starting blocking call...");
        DoWorkBlocking();
        Console.WriteLine("Blocking call completed.");

        // Asynchronous call
        Console.WriteLine("\nStarting asynchronous call...");
        DoWorkAsync().Wait();
        Console.WriteLine("Asynchronous call completed.");
    }

    public static void DoWorkBlocking()
    {
        // Simulate work with blocking call
        Task.Delay(3000).Wait(); // Blocks the thread
        Console.WriteLine("Work done in blocking method.");
    }

    public static async Task DoWorkAsync()
    {
        // Simulate work with asynchronous call
        await Task.Delay(3000); // Does not block the thread
        Console.WriteLine("Work done in asynchronous method.");
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>DoWorkBlocking Method:</strong> Uses <code>Task.Delay(3000).Wait()</code> to simulate a 3-second delay. This is a blocking call that halts the execution of the thread.
        </li>
        <li>
          <strong>DoWorkAsync Method:</strong> Uses <code>await Task.Delay(3000)</code> to simulate a 3-second delay asynchronously. This does not block the thread, allowing other operations to execute concurrently.
        </li>
        <li>
          <strong>Main Method:</strong> Demonstrates the difference between blocking and asynchronous calls by executing both methods and observing their behavior.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Starting blocking call...
Work done in blocking method.
Blocking call completed.

Starting asynchronous call...
Work done in asynchronous method.
Asynchronous call completed.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Observations:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>The blocking call halts the execution until the operation completes.</li>
        <li>The asynchronous call allows the program to remain responsive and continue executing other tasks while waiting for the operation to complete.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Asynchronous programming is a powerful tool in C# that enables developers to build responsive, efficient, and scalable applications. By leveraging the `async` and `await` keywords, Tasks, and the Task-based Asynchronous Pattern (TAP), you can perform operations concurrently without blocking the main thread, leading to improved performance and user experiences.
      </p>
      <p class="text-base md:text-lg mb-6">
        Understanding how to handle asynchronous exceptions is crucial to maintaining application stability and providing meaningful feedback to users. By adhering to best practices such as avoiding blocking calls, catching specific exceptions, and implementing cancellation tokens, you can ensure that your asynchronous code is robust and maintainable.
      </p>
      <p class="text-base md:text-lg mb-6">
        As you continue to integrate asynchronous programming into your C# projects, you'll find that it not only enhances the performance of your applications but also aligns with modern software development practices aimed at maximizing efficiency and responsiveness. Embrace the asynchronous paradigm, and unlock the full potential of your C# applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsynchronousProgrammingInCSharp',
  data() {
    return {
      // Additional data properties can be added here if needed
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
