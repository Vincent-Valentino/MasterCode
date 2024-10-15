<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-950 rounded-t-xl p-4">
      <img src="/csharp/logo.svg" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Delegate and Event in C#</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        In the landscape of C# programming, **delegates** and **events** stand out as powerful constructs that enable developers to create flexible, reusable, and decoupled code. These features facilitate communication between different parts of an application, promoting a modular architecture that is easier to maintain and extend. This section delves into the intricacies of delegates and events in C#, exploring their definitions, usages, and the benefits they bring to software design. Through detailed explanations, real-world analogies, and practical code examples, you will gain a comprehensive understanding of how to leverage delegates and events to build robust and scalable applications.
      </p>

      <!-- Understanding Delegates -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Delegates</h2>
      <p class="text-base md:text-lg mb-4">
        A **delegate** in C# is a type that represents references to methods with a specific signature and return type. Delegates are similar to function pointers in C and C++, but are type-safe and secure. They are primarily used to implement callback methods and event handling, allowing methods to be passed as parameters and invoked dynamically.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Imagine a delegate as a mail forwarding service. You provide the service with an address (method signature), and whenever mail (method invocation) arrives at that address, the service forwards it to the appropriate recipient (method implementation). This allows for flexible and dynamic handling of messages without needing to know the exact recipient in advance.
      </p>

      <!-- Delegates and Their Usage -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Delegates and Their Usage</h3>
      <p class="text-base md:text-lg mb-4">
        Delegates are foundational to many C# features, including events, LINQ, and asynchronous programming. They enable methods to be treated as first-class objects, allowing them to be assigned to variables, passed as parameters, and returned from other methods.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Key Points:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Type Safety:</strong> Delegates are type-safe, meaning they ensure that the signature of the method matches the delegate's signature.</li>
        <li><strong>Flexibility:</strong> Delegates allow methods to be passed as parameters, enabling dynamic method invocation.</li>
        <li><strong>Encapsulation:</strong> Delegates encapsulate method references, promoting encapsulation and modularity.</li>
      </ul>

      <!-- Example: Defining and Using Delegates -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Defining and Using Delegates</h3>
      <p class="text-base md:text-lg mb-4">
        Below is an example demonstrating how to define a delegate, assign methods to it, and invoke the delegate.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defining and using delegates
using System;

namespace DelegateExample
{
    // Define a delegate that takes an int and returns void
    public delegate void ProcessNumberDelegate(int number);

    public class NumberProcessor
    {
        // Method that matches the delegate signature
        public void PrintNumber(int number)
        {
            Console.WriteLine($"Number: {number}");
        }

        // Another method that matches the delegate signature
        public void SquareNumber(int number)
        {
            Console.WriteLine($"Square of {number}: {number * number}");
        }

        public void ExecuteDelegate(ProcessNumberDelegate del, int number)
        {
            del(number);
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            NumberProcessor processor = new NumberProcessor();

            // Instantiate delegate with PrintNumber method
            ProcessNumberDelegate printDel = processor.PrintNumber;

            // Instantiate delegate with SquareNumber method
            ProcessNumberDelegate squareDel = processor.SquareNumber;

            Console.WriteLine("Using PrintNumber Delegate:");
            processor.ExecuteDelegate(printDel, 5); // Output: Number: 5

            Console.WriteLine("\nUsing SquareNumber Delegate:");
            processor.ExecuteDelegate(squareDel, 5); // Output: Square of 5: 25
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
          <strong>Delegate Definition:</strong> The delegate <code>ProcessNumberDelegate</code> is defined to represent methods that take an <code>int</code> parameter and return <code>void</code>.
        </li>
        <li>
          <strong>Method Assignments:</strong> The methods <code>PrintNumber</code> and <code>SquareNumber</code> in the <code>NumberProcessor</code> class match the delegate's signature and are assigned to instances of the delegate.
        </li>
        <li>
          <strong>Delegate Invocation:</strong> The <code>ExecuteDelegate</code> method accepts a delegate instance and an integer, then invokes the delegate with the provided number.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Using PrintNumber Delegate:
Number: 5

Using SquareNumber Delegate:
Square of 5: 25
</code>
      </pre>

      <!-- Events and Event Handlers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Events and Event Handlers</h2>
      <p class="text-base md:text-lg mb-4">
        **Events** in C# are built upon delegates and provide a way for a class to notify other classes or objects when something of interest occurs. Events promote a publish-subscribe model, enabling decoupled communication between components.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Think of an event as a broadcast notification. When a concert starts (event occurrence), all subscribers (attendees) receive the notification and react accordingly (e.g., start clapping).
      </p>

      <!-- Events and Their Usage -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Events and Their Usage</h3>
      <p class="text-base md:text-lg mb-4">
        Events are essential for creating responsive and interactive applications. They allow objects to communicate changes or actions without tightly coupling the components, enhancing modularity and flexibility.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Key Points:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Publisher and Subscriber:</strong> The class that declares the event is the publisher, and the classes that subscribe to the event are the subscribers.</li>
        <li><strong>Encapsulation:</strong> Events encapsulate delegate instances, preventing subscribers from invoking the event directly.</li>
        <li><strong>Notification Mechanism:</strong> Events provide a standardized way to notify subscribers when specific actions occur.</li>
      </ul>

      <!-- Example: Implementing Events and Event Handlers -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Implementing Events and Event Handlers</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates how to implement events and event handlers in a simple application. It showcases a <code>Button</code> class that publishes a <code>Clicked</code> event, and a <code>Logger</code> class that subscribes to the event to log click actions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Implementing delegates and events
using System;

namespace DelegateEventExample
{
    // Define a delegate for the event handler
    public delegate void ClickEventHandler(object sender, EventArgs e);

    // Publisher class
    public class Button
    {
        // Declare the event using the delegate
        public event ClickEventHandler Clicked;

        // Method to simulate button click
        public void Click()
        {
            Console.WriteLine("Button was clicked.");

            // Raise the event
            OnClicked(EventArgs.Empty);
        }

        // Protected virtual method to raise the event
        protected virtual void OnClicked(EventArgs e)
        {
            Clicked?.Invoke(this, e);
        }
    }

    // Subscriber class
    public class Logger
    {
        public void OnButtonClicked(object sender, EventArgs e)
        {
            Console.WriteLine("Logger: Button click event received.");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Button button = new Button();
            Logger logger = new Logger();

            // Subscribe the logger to the button's Clicked event
            button.Clicked += logger.OnButtonClicked;

            // Simulate button click
            button.Click();
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
          <strong>Delegate Definition:</strong> The delegate <code>ClickEventHandler</code> defines the signature for event handlers, taking an <code>object</code> sender and <code>EventArgs</code> e.
        </li>
        <li>
          <strong>Publisher Class (Button):</strong> The <code>Button</code> class declares the <code>Clicked</code> event using the <code>ClickEventHandler</code> delegate. The <code>Click</code> method simulates a button click and raises the event by invoking <code>OnClicked</code>.
        </li>
        <li>
          <strong>Subscriber Class (Logger):</strong> The <code>Logger</code> class contains a method <code>OnButtonClicked</code> that matches the delegate signature and handles the event by logging a message.
        </li>
        <li>
          <strong>Main Method:</strong> Creates instances of <code>Button</code> and <code>Logger</code>, subscribes the logger to the button's <code>Clicked</code> event, and simulates a button click by calling <code>button.Click()</code>.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Button was clicked.
Logger: Button click event received.
</code>
      </pre>

      <!-- Anonymous Methods and Lambda Expressions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Anonymous Methods and Lambda Expressions</h2>
      <p class="text-base md:text-lg mb-4">
        **Anonymous methods** and **lambda expressions** provide a concise way to define inline event handlers and delegate implementations without the need to declare separate methods. They enhance code readability and reduce boilerplate code, making the development process more efficient.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Consider anonymous methods and lambda expressions as short, on-the-spot instructions you give to a colleague. Instead of drafting a detailed report (separate method), you provide quick, concise directions to perform a specific task.
      </p>

      <!-- Anonymous Methods -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Anonymous Methods</h3>
      <p class="text-base md:text-lg mb-6">
        Introduced in C# 2.0, **anonymous methods** allow the definition of inline delegate implementations without naming them. They are useful for short, single-use event handlers and delegate instances.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Example: Using Anonymous Methods for Event Handling**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using anonymous methods for event handling
using System;

namespace DelegateEventExample
{
    public delegate void ClickEventHandler(object sender, EventArgs e);

    public class Button
    {
        public event ClickEventHandler Clicked;

        public void Click()
        {
            Console.WriteLine("Button was clicked.");
            OnClicked(EventArgs.Empty);
        }

        protected virtual void OnClicked(EventArgs e)
        {
            Clicked?.Invoke(this, e);
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Button button = new Button();

            // Subscribe using an anonymous method
            button.Clicked += delegate(object sender, EventArgs e)
            {
                Console.WriteLine("Anonymous Method: Button click event received.");
            };

            // Simulate button click
            button.Click();
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
          Instead of defining a separate method for handling the <code>Clicked</code> event, an anonymous method is used to provide the event handler inline. This reduces the need for additional method declarations and keeps related code grouped together.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Button was clicked.
Anonymous Method: Button click event received.
</code>
      </pre>

      <!-- Lambda Expressions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Lambda Expressions</h3>
      <p class="text-base md:text-lg mb-6">
        **Lambda expressions** offer a more concise and expressive syntax compared to anonymous methods. Introduced in C# 3.0, they simplify the definition of inline delegates and are widely used in LINQ queries, event handling, and functional programming paradigms within C#.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Example: Using Lambda Expressions for Event Handling**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using lambda expressions for event handling
using System;

namespace DelegateEventExample
{
    public delegate void ClickEventHandler(object sender, EventArgs e);

    public class Button
    {
        public event ClickEventHandler Clicked;

        public void Click()
        {
            Console.WriteLine("Button was clicked.");
            OnClicked(EventArgs.Empty);
        }

        protected virtual void OnClicked(EventArgs e)
        {
            Clicked?.Invoke(this, e);
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Button button = new Button();

            // Subscribe using a lambda expression
            button.Clicked += (sender, e) =>
            {
                Console.WriteLine("Lambda Expression: Button click event received.");
            };

            // Simulate button click
            button.Click();
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
          Lambda expressions provide a shorthand syntax for defining inline event handlers. The lambda expression <code>(sender, e) =&gt; { ... }</code> directly implements the delegate, making the code more concise and readable.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Button was clicked.
Lambda Expression: Button click event received.
</code>
      </pre>

      <!-- How Delegates and Events Enable Decoupled Architectures -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">How Delegates and Events Enable Decoupled Architectures</h2>
      <p class="text-base md:text-lg mb-4">
        **Decoupled architectures** promote separation of concerns, where different components of an application operate independently without direct dependencies on each other. Delegates and events play a pivotal role in achieving this by facilitating communication between components in a loosely coupled manner.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Benefits of Decoupled Architectures:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Maintainability:</strong> Changes in one component have minimal impact on others, making the system easier to maintain and update.</li>
        <li><strong>Reusability:</strong> Components can be reused across different parts of the application or even in different projects.</li>
        <li><strong>Testability:</strong> Independent components can be tested in isolation, enhancing the reliability of the application.</li>
        <li><strong>Scalability:</strong> The system can be scaled by adding or modifying components without significant restructuring.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Delegates and Events in Decoupling:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Indirect Communication:</strong> Delegates and events allow components to communicate indirectly. The publisher does not need to know the subscribers, and vice versa, reducing direct dependencies.
        </li>
        <li>
          <strong>Flexible Subscriptions:</strong> Multiple subscribers can respond to the same event, enabling flexible and dynamic interactions.
        </li>
        <li>
          <strong>Extensibility:</strong> New subscribers can be added without modifying the publisher, allowing the system to evolve without extensive changes.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Example: Decoupled Publisher and Subscriber Using Events**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Decoupled publisher and subscriber using events
using System;

namespace DelegateEventExample
{
    // Define a delegate for the event handler
    public delegate void DataProcessedEventHandler(object sender, DataProcessedEventArgs e);

    // Custom EventArgs to pass data
    public class DataProcessedEventArgs : EventArgs
    {
        public string Data { get; set; }

        public DataProcessedEventArgs(string data)
        {
            Data = data;
        }
    }

    // Publisher class
    public class DataProcessor
    {
        // Declare the event using the delegate
        public event DataProcessedEventHandler DataProcessed;

        // Method to process data
        public void ProcessData(string input)
        {
            Console.WriteLine($"Processing data: {input}");

            // Simulate data processing
            string processedData = input.ToUpper();

            // Raise the event after processing
            OnDataProcessed(new DataProcessedEventArgs(processedData));
        }

        // Protected virtual method to raise the event
        protected virtual void OnDataProcessed(DataProcessedEventArgs e)
        {
            DataProcessed?.Invoke(this, e);
        }
    }

    // Subscriber class 1
    public class Logger
    {
        public void OnDataProcessed(object sender, DataProcessedEventArgs e)
        {
            Console.WriteLine($"Logger: Data processed - {e.Data}");
        }
    }

    // Subscriber class 2
    public class Notifier
    {
        public void OnDataProcessed(object sender, DataProcessedEventArgs e)
        {
            Console.WriteLine($"Notifier: Data '{e.Data}' is ready.");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            DataProcessor processor = new DataProcessor();
            Logger logger = new Logger();
            Notifier notifier = new Notifier();

            // Subscribe to the DataProcessed event
            processor.DataProcessed += logger.OnDataProcessed;
            processor.DataProcessed += notifier.OnDataProcessed;

            // Process data
            processor.ProcessData("hello world");
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
          <strong>DataProcessedEventHandler Delegate:</strong> Defines the signature for event handlers that handle the <code>DataProcessed</code> event.
        </li>
        <li>
          <strong>DataProcessedEventArgs Class:</strong> Inherits from <code>EventArgs</code> and carries additional data related to the event, such as the processed data.
        </li>
        <li>
          <strong>DataProcessor Class (Publisher):</strong> Declares the <code>DataProcessed</code> event and contains the <code>ProcessData</code> method, which processes the input data and raises the event upon completion.
        </li>
        <li>
          <strong>Logger and Notifier Classes (Subscribers):</strong> Implement event handlers that respond to the <code>DataProcessed</code> event by logging the processed data and notifying users, respectively.
        </li>
        <li>
          <strong>Main Method:</strong> Creates instances of <code>DataProcessor</code>, <code>Logger</code>, and <code>Notifier</code>, subscribes the logger and notifier to the <code>DataProcessed</code> event, and initiates data processing.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Processing data: hello world
Logger: Data processed - HELLO WORLD
Notifier: Data 'HELLO WORLD' is ready.
</code>
      </pre>

      <!-- Anonymous Methods and Lambda Expressions in Events -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Anonymous Methods and Lambda Expressions in Events</h2>
      <p class="text-base md:text-lg mb-4">
        Utilizing **anonymous methods** and **lambda expressions** in event handling allows for more concise and readable code. These features eliminate the need for separate method declarations when the event handling logic is simple or specific to a particular instance.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Benefits:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Reduced Boilerplate:</strong> No need to declare separate event handler methods for simple actions.</li>
        <li><strong>Enhanced Readability:</strong> Event handling logic is kept close to the subscription point, making the code easier to follow.</li>
        <li><strong>Flexibility:</strong> Allows for inline customization of event responses without modifying subscriber classes.</li>
      </ul>

      <!-- Example: Using Lambda Expressions for Event Handling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using Lambda Expressions for Event Handling</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates how to use lambda expressions to handle events, providing a succinct and expressive way to define event responses.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using lambda expressions for event handling
using System;

namespace DelegateEventExample
{
    public delegate void DataProcessedEventHandler(object sender, DataProcessedEventArgs e);

    public class DataProcessedEventArgs : EventArgs
    {
        public string Data { get; set; }

        public DataProcessedEventArgs(string data)
        {
            Data = data;
        }
    }

    public class DataProcessor
    {
        public event DataProcessedEventHandler DataProcessed;

        public void ProcessData(string input)
        {
            Console.WriteLine($"Processing data: {input}");
            string processedData = input.ToUpper();
            OnDataProcessed(new DataProcessedEventArgs(processedData));
        }

        protected virtual void OnDataProcessed(DataProcessedEventArgs e)
        {
            DataProcessed?.Invoke(this, e);
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            DataProcessor processor = new DataProcessor();

            // Subscribe using a lambda expression for logging
            processor.DataProcessed += (sender, e) =>
            {
                Console.WriteLine($"Lambda Logger: Data processed - {e.Data}");
            };

            // Subscribe using a lambda expression for notification
            processor.DataProcessed += (sender, e) =>
            {
                Console.WriteLine($"Lambda Notifier: Data '{e.Data}' is ready.");
            };

            // Process data
            processor.ProcessData("delegates and events");
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
          Instead of defining separate methods for handling the <code>DataProcessed</code> event, lambda expressions are used to provide the event handlers inline. This makes the subscription process more concise and keeps the event handling logic close to the subscription point.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Processing data: delegates and events
Lambda Logger: Data processed - DELEGATES AND EVENTS
Lambda Notifier: Data 'DELEGATES AND EVENTS' is ready.
</code>
      </pre>

      <!-- Best Practices in Delegates and Events -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices in Delegates and Events</h2>
      <p class="text-base md:text-lg mb-4">
        Implementing delegates and events effectively requires adherence to certain best practices to ensure code quality, maintainability, and performance.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use EventHandler and EventHandler&lt;T&gt;:</strong> Prefer using the built-in <code>EventHandler</code> and <code>EventHandler&lt;T&gt;</code> delegates for defining events, as they provide a standardized pattern.</li>
        <li><strong>Encapsulate Event Invocation:</strong> Use protected virtual methods to raise events, allowing derived classes to override event-raising behavior if necessary.</li>
        <li><strong>Follow Naming Conventions:</strong> Name events using verbs or verb phrases (e.g., <code>Clicked</code>, <code>DataProcessed</code>) and event handler methods with the pattern <code>OnEventName</code> (e.g., <code>OnClicked</code>).</li>
        <li><strong>Check for Null Before Raising Events:</strong> Ensure that there are subscribers before invoking an event to prevent <code>NullReferenceException</code>.</li>
        <li><strong>Unsubscribe from Events:</strong> Always unsubscribe from events when they are no longer needed to prevent memory leaks and unintended behavior.</li>
        <li><strong>Avoid Long-Running Operations in Event Handlers:</strong> Keep event handler methods short and efficient to prevent blocking the event publisher.</li>
        <li><strong>Use Lambdas and Anonymous Methods Judiciously:</strong> While they enhance readability, overusing inline event handlers can make the code harder to debug and maintain.</li>
        <li><strong>Thread Safety:</strong> Ensure that event invocation is thread-safe, especially in multi-threaded environments.</li>
      </ul>

      <!-- Example: Best Practices Implementation -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Implementing Best Practices</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates the implementation of best practices in defining and handling events, including using <code>EventHandler</code>, encapsulating event invocation, and following naming conventions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Implementing best practices in delegates and events
using System;

namespace DelegateEventExample
{
    // Define EventArgs for the DataProcessed event
    public class DataProcessedEventArgs : EventArgs
    {
        public string ProcessedData { get; }

        public DataProcessedEventArgs(string data)
        {
            ProcessedData = data;
        }
    }

    // Publisher class using EventHandler&lt;T&gt;
    public class DataProcessor
    {
        // Declare the event using EventHandler&lt;T&gt;
        public event EventHandler&lt;DataProcessedEventArgs&gt; DataProcessed;

        // Method to process data
        public void ProcessData(string input)
        {
            Console.WriteLine($"Processing data: {input}");
            string processedData = input.ToUpper();
            OnDataProcessed(new DataProcessedEventArgs(processedData));
        }

        // Protected virtual method to raise the event
        protected virtual void OnDataProcessed(DataProcessedEventArgs e)
        {
            DataProcessed?.Invoke(this, e);
        }
    }

    // Subscriber class
    public class Subscriber
    {
        private readonly string _name;

        public Subscriber(string name)
        {
            _name = name;
        }

        // Event handler method following the naming convention
        public void OnDataProcessed(object sender, DataProcessedEventArgs e)
        {
            Console.WriteLine($"{_name} received processed data: {e.ProcessedData}");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            DataProcessor processor = new DataProcessor();
            Subscriber subscriber1 = new Subscriber("Subscriber1");
            Subscriber subscriber2 = new Subscriber("Subscriber2");

            // Subscribe using event handler methods
            processor.DataProcessed += subscriber1.OnDataProcessed;
            processor.DataProcessed += subscriber2.OnDataProcessed;

            // Process data
            processor.ProcessData("best practices");

            // Unsubscribe subscriber1
            processor.DataProcessed -= subscriber1.OnDataProcessed;

            // Process data again
            processor.ProcessData("event handling");
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
          <strong>Using EventHandler&lt;T&gt;:</strong> The <code>DataProcessed</code> event is declared using the generic <code>EventHandler&lt;T&gt;</code> delegate, which standardizes event signatures and enhances compatibility.
        </li>
        <li>
          <strong>Encapsulated Event Invocation:</strong> The <code>OnDataProcessed</code> method is protected and virtual, allowing derived classes to override event-raising behavior if necessary.
        </li>
        <li>
          <strong>Naming Conventions:</strong> Event handlers follow the <code>OnEventName</code> pattern, and events are named using verb phrases.
        </li>
        <li>
          <strong>Null Check Before Invocation:</strong> The <code>?.Invoke</code> syntax ensures that the event is only raised if there are subscribers, preventing <code>NullReferenceException</code>.
        </li>
        <li>
          <strong>Unsubscribing from Events:</strong> After the first data processing, <code>subscriber1</code> unsubscribes from the <code>DataProcessed</code> event to prevent further notifications, demonstrating proper event unsubscription.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Processing data: best practices
Subscriber1 received processed data: BEST PRACTICES
Subscriber2 received processed data: BEST PRACTICES
Processing data: event handling
Subscriber2 received processed data: EVENT HANDLING
</code>
      </pre>

      <!-- Anonymous Methods and Lambdas in Decoupled Architectures -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Anonymous Methods and Lambdas in Decoupled Architectures</h2>
      <p class="text-base md:text-lg mb-4">
        Integrating **anonymous methods** and **lambda expressions** into decoupled architectures further enhances the flexibility and scalability of applications. These features allow developers to define inline event handlers and delegate implementations, reducing the need for tightly coupled method declarations and promoting a more streamlined communication between components.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Benefits:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Inline Handling:</strong> Define event handlers directly at the subscription point without needing separate method declarations.</li>
        <li><strong>Enhanced Flexibility:</strong> Easily modify event responses without altering subscriber classes.</li>
        <li><strong>Reduced Boilerplate Code:</strong> Minimizes the amount of code required for simple event handling scenarios.</li>
      </ul>

      <!-- Example: Using Lambdas for Event Handling in Decoupled Architecture -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using Lambdas for Event Handling in Decoupled Architecture</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates how lambda expressions can be used to handle events in a decoupled architecture, allowing for inline and flexible event handling.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using lambda expressions for event handling in decoupled architecture
using System;

namespace DelegateEventExample
{
    public delegate void DataProcessedEventHandler(object sender, DataProcessedEventArgs e);

    public class DataProcessedEventArgs : EventArgs
    {
        public string ProcessedData { get; }

        public DataProcessedEventArgs(string data)
        {
            ProcessedData = data;
        }
    }

    public class DataProcessor
    {
        public event DataProcessedEventHandler DataProcessed;

        public void ProcessData(string input)
        {
            Console.WriteLine($"Processing data: {input}");
            string processedData = input.ToUpper();
            OnDataProcessed(new DataProcessedEventArgs(processedData));
        }

        protected virtual void OnDataProcessed(DataProcessedEventArgs e)
        {
            DataProcessed?.Invoke(this, e);
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            DataProcessor processor = new DataProcessor();

            // Subscribe using a lambda expression for logging
            processor.DataProcessed += (sender, e) =>
            {
                Console.WriteLine($"Lambda Logger: Data processed - {e.ProcessedData}");
            };

            // Subscribe using a lambda expression for notification
            processor.DataProcessed += (sender, e) =>
            {
                Console.WriteLine($"Lambda Notifier: Data '{e.ProcessedData}' is ready.");
            };

            // Process data
            processor.ProcessData("lambda expressions");
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
          Instead of creating separate subscriber classes or methods, lambda expressions are used to handle the <code>DataProcessed</code> event directly. This inline approach keeps the event handling logic concise and localized.
        </li>
        <li>
          Multiple subscribers can respond to the same event without needing explicit class-based handlers, promoting a more flexible and decoupled architecture.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Processing data: lambda expressions
Lambda Logger: Data processed - LAMBDA EXPRESSIONS
Lambda Notifier: Data 'LAMBDA EXPRESSIONS' is ready.
</code>
      </pre>

      <!-- Best Practices in Delegates and Events -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices in Delegates and Events</h2>
      <p class="text-base md:text-lg mb-4">
        To harness the full potential of delegates and events while maintaining code quality and performance, consider the following best practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use the Built-In Delegate Types:</strong> Prefer using <code>EventHandler</code> and <code>EventHandler&lt;T&gt;</code> over custom delegate types unless a specific signature is required.</li>
        <li><strong>Encapsulate Event Invocation:</strong> Always use protected virtual methods to raise events, allowing derived classes to handle event invocation differently if needed.</li>
        <li><strong>Follow Naming Conventions:</strong> Events should be named with verbs (e.g., <code>Clicked</code>, <code>DataProcessed</code>), and event handler methods should follow the <code>OnEventName</code> pattern (e.g., <code>OnClicked</code>).</li>
        <li><strong>Check for Subscribers Before Raising Events:</strong> Ensure that the event has subscribers by using the null-conditional operator (<code>?.</code>) before invoking it.</li>
        <li><strong>Unsubscribe from Events:</strong> Prevent memory leaks by unsubscribing from events when they are no longer needed, especially in long-running applications.</li>
        <li><strong>Keep Event Handlers Lightweight:</strong> Avoid performing heavy or blocking operations within event handlers to maintain application responsiveness.</li>
        <li><strong>Avoid Using Delegates for Control Flow:</strong> Use delegates and events for their intended purpose of handling specific actions and notifications, not for general control flow mechanisms.</li>
        <li><strong>Document Event Contracts:</strong> Clearly document what events your classes expose and what subscribers can expect when those events are raised.</li>
        <li><strong>Ensure Thread Safety:</strong> When dealing with multi-threaded applications, ensure that event invocation and handling are thread-safe to prevent race conditions and deadlocks.</li>
      </ul>

      <!-- Example: Implementing Best Practices -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Implementing Best Practices</h3>
      <p class="text-base md:text-lg mb-4">
        The following example demonstrates the implementation of best practices in defining and handling delegates and events, including using built-in delegate types, encapsulating event invocation, following naming conventions, and ensuring thread safety.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Implementing best practices in delegates and events
using System;
using System.Threading;

namespace DelegateEventExample
{
    // Use EventHandler&lt;T&gt; for the event delegate
    public class DataProcessedEventArgs : EventArgs
    {
        public string ProcessedData { get; }

        public DataProcessedEventArgs(string data)
        {
            ProcessedData = data;
        }
    }

    public class DataProcessor
    {
        // Declare the event using EventHandler&lt;T&gt;
        public event EventHandle&lt;DataProcessedEventArgs&gt; DataProcessed;

        private readonly object _lock = new object();

        public void ProcessData(string input)
        {
            Console.WriteLine($"Processing data: {input}");
            string processedData = input.ToUpper();

            // Simulate some processing delay
            Thread.Sleep(1000);

            // Raise the event in a thread-safe manner
            OnDataProcessed(new DataProcessedEventArgs(processedData));
        }

        // Encapsulate event invocation
        protected virtual void OnDataProcessed(DataProcessedEventArgs e)
        {
            // Use a local copy to prevent race conditions
            EventHandler&lt;DataProcessedEventArgs&gt; handler;
            lock (_lock)
            {
                handler = DataProcessed;
            }

            handler?.Invoke(this, e);
        }
    }

    public class Subscriber
    {
        private readonly string _name;

        public Subscriber(string name, DataProcessor processor)
        {
            _name = name;
            // Subscribe to the DataProcessed event using an event handler method
            processor.DataProcessed += OnDataProcessed;
        }

        // Event handler following the naming convention
        public void OnDataProcessed(object sender, DataProcessedEventArgs e)
        {
            Console.WriteLine($"{_name} received processed data: {e.ProcessedData}");
        }

        // Method to unsubscribe from the event
        public void Unsubscribe(DataProcessor processor)
        {
            processor.DataProcessed -= OnDataProcessed;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            DataProcessor processor = new DataProcessor();

            Subscriber subscriber1 = new Subscriber("Subscriber1", processor);
            Subscriber subscriber2 = new Subscriber("Subscriber2", processor);

            // Process data
            processor.ProcessData("best practices");

            // Unsubscribe subscriber1
            subscriber1.Unsubscribe(processor);

            // Process data again
            processor.ProcessData("event handling");

            // Wait for user input before closing
            Console.WriteLine("\nPress any key to exit.");
            Console.ReadKey();
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
          <strong>Using EventHandler&lt;T&gt;:</strong> The <code>DataProcessed</code> event is declared using the generic <code>EventHandler&lt;T&gt;</code> delegate, promoting consistency and standardization.
        </li>
        <li>
          <strong>Encapsulated Event Invocation:</strong> The <code>OnDataProcessed</code> method encapsulates the event invocation, using a thread-safe approach with a lock to prevent race conditions when accessing the event delegate.
        </li>
        <li>
          <strong>Naming Conventions:</strong> Event handlers are named following the <code>OnEventName</code> pattern, and events are named using verb phrases.
        </li>
        <li>
          <strong>Unsubscribing from Events:</strong> The <code>Subscriber</code> class includes an <code>Unsubscribe</code> method that removes the event handler from the event subscription, preventing memory leaks.
        </li>
        <li>
          <strong>Thread Safety:</strong> The event invocation is made thread-safe by using a lock and a local copy of the event delegate.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Processing data: best practices
Subscriber1 received processed data: BEST PRACTICES
Subscriber2 received processed data: BEST PRACTICES
Processing data: event handling
Subscriber2 received processed data: EVENT HANDLING

Press any key to exit.
</code>
      </pre>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Delegates and events are indispensable features in C# that empower developers to build flexible, reusable, and decoupled applications. By enabling methods to be treated as first-class objects and facilitating communication between different components through events, these constructs promote a modular and maintainable architecture.
      </p>
      <p class="text-base md:text-lg mb-6">
        Understanding how to define and use delegates and events effectively allows you to implement sophisticated patterns such as publish-subscribe, observer, and event-driven architectures. Moreover, leveraging anonymous methods and lambda expressions enhances code conciseness and readability, reducing boilerplate and keeping related logic closely tied together.
      </p>
      <p class="text-base md:text-lg mb-6">
        Adhering to best practices, such as using built-in delegate types, encapsulating event invocation, following naming conventions, ensuring thread safety, and properly managing event subscriptions, ensures that your use of delegates and events leads to robust and scalable applications. These practices not only improve the quality of your code but also simplify maintenance and future enhancements.
      </p>
      <p class="text-base md:text-lg mb-6">
        As you continue to integrate delegates and events into your C# projects, you'll find that they provide the necessary tools to handle complex interactions and behaviors within your applications seamlessly. Embrace these features to unlock the full potential of C# in crafting responsive, efficient, and maintainable software solutions.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DelegatesAndEventsInCSharp',
  data() {
    return {
      // Additional data properties can be added here if needed
    };
  },
};
</script>

<style>
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
