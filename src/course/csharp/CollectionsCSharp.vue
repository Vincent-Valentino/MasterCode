<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-950 rounded-t-xl p-4">
      <img src="/csharp/logo.svg" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">C# Collections</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        In C#, collections are fundamental data structures that allow developers to store, manage, and manipulate groups of related data efficiently. They provide powerful tools for organizing data, enabling operations such as searching, sorting, filtering, and iterating over items. Understanding the various types of collections available in C#, their strengths, and their limitations is essential for writing optimized and maintainable code. This section explores different collection types in C#, including arrays, lists, dictionaries, queues, stacks, and generics, providing real-world analogies and practical code examples to illustrate their usage.
      </p>

      <!-- Arrays and Their Limitations -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Arrays and Their Limitations</h2>
      <p class="text-base md:text-lg mb-4">
        Arrays are the most basic and fundamental collection type in C#. They allow you to store a fixed-size sequential collection of elements of the same type. While arrays are simple and efficient for storing and accessing data, they come with several limitations that can hinder their flexibility and usability in more complex scenarios.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Think of an array as a row of mailboxes in an apartment building. Each mailbox has a fixed position and can only hold a specific type of mail (e.g., letters). While it's easy to access a mailbox if you know its number, adding or removing mailboxes is cumbersome and inflexible.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Defining and Using Arrays:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defining and using an array
public class ArrayExample
{
    public static void Main(string[] args)
    {
        // Declaring and initializing an array of integers
        int[] numbers = new int[5] { 10, 20, 30, 40, 50 };
        
        // Accessing elements by index
        Console.WriteLine($"First number: {numbers[0]}"); // Output: First number: 10
        Console.WriteLine($"Third number: {numbers[2]}"); // Output: Third number: 30
        
        // Iterating through the array using a for loop
        Console.WriteLine("All numbers:");
        for (int i = 0; i < numbers.Length; i++)
        {
            Console.WriteLine(numbers[i]);
        }
        // Output:
        // 10
        // 20
        // 30
        // 40
        // 50
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, an array of integers named <code>numbers</code> is declared and initialized with five elements. Arrays provide fast access to elements via their index, but their fixed size means you cannot add or remove elements once the array is created.
      </p>

      <!-- Limitations of Arrays -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Limitations of Arrays</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Fixed Size:</strong> Once an array is created, its size cannot be changed. This inflexibility can lead to wasted memory if the array is too large or insufficient capacity if it's too small.</li>
        <li><strong>Type Homogeneity:</strong> All elements in an array must be of the same type. This restricts the ability to store heterogeneous data within a single array.</li>
        <li><strong>Lack of Built-in Methods:</strong> Arrays lack many of the convenient methods available in other collection types, such as adding or removing elements dynamically.</li>
        <li><strong>Performance Overhead for Resizing:</strong> To resize an array, a new array must be created, and existing elements must be copied over, which can be inefficient for large datasets.</li>
      </ul>

      <!-- Lists -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Lists</h2>
      <p class="text-base md:text-lg mb-4">
        Lists are dynamic collections provided by the <code>List&lt;T&gt;</code> class in C#. Unlike arrays, lists can grow and shrink in size, offering more flexibility and functionality. They are part of the <code>System.Collections.Generic</code> namespace and are widely used due to their versatility and ease of use.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Imagine a list as a to-do list on your smartphone. You can easily add new tasks, remove completed ones, and reorder items as needed, making it a flexible and dynamic way to manage your tasks.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Defining and Using Lists:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defining and using a List
using System;
using System.Collections.Generic;

public class ListExample
{
    public static void Main(string[] args)
    {
        // Declaring and initializing a list of strings
        List&lt;string&gt; fruits = new List&lt;string&gt; { "Apple", "Banana", "Cherry" };
        
        // Adding elements to the list
        fruits.Add("Date");
        fruits.Add("Elderberry");
        
        // Removing an element from the list
        fruits.Remove("Banana");
        
        // Accessing elements by index
        Console.WriteLine($"First fruit: {fruits[0]}"); // Output: First fruit: Apple
        
        // Iterating through the list using foreach loop
        Console.WriteLine("All fruits:");
        foreach (string fruit in fruits)
        {
            Console.WriteLine(fruit);
        }
        // Output:
        // Apple
        // Cherry
        // Date
        // Elderberry
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, a <code>List&lt;string&gt;</code> named <code>fruits</code> is declared and initialized with three elements. Elements can be easily added or removed using the <code>Add</code> and <code>Remove</code> methods, and the list can be iterated over using a <code>foreach</code> loop.
      </p>

      <!-- Advantages of Lists -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Advantages of Lists</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Dynamic Sizing:</strong> Lists can dynamically resize themselves as elements are added or removed, eliminating the need to define a fixed size upfront.</li>
        <li><strong>Rich Set of Methods:</strong> Lists provide a comprehensive set of methods for adding, removing, searching, sorting, and manipulating elements, making them highly versatile.</li>
        <li><strong>Type Safety:</strong> Being a generic collection, <code>List&lt;T&gt;</code> ensures type safety by restricting elements to a specific type, reducing runtime errors.</li>
        <li><strong>Performance:</strong> Lists offer efficient performance for most common operations, such as adding and accessing elements by index.</li>
      </ul>

      <!-- Dictionaries -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Dictionaries</h2>
      <p class="text-base md:text-lg mb-4">
        Dictionaries are key-value pair collections provided by the <code>Dictionary&lt;TKey, TValue&gt;</code> class in C#. They allow for fast retrieval of values based on unique keys, making them ideal for scenarios where quick lookups are necessary. Dictionaries are part of the <code>System.Collections.Generic</code> namespace.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Consider a dictionary as a real-world dictionary where you can quickly look up the meaning of a word (key) to find its definition (value). Each word is unique, ensuring fast and accurate retrieval of definitions.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Defining and Using Dictionaries:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defining and using a Dictionary
using System;
using System.Collections.Generic;

public class DictionaryExample
{
    public static void Main(string[] args)
    {
        // Declaring and initializing a dictionary with string keys and int values
        Dictionary&lt;string, int&gt; ages = new Dictionary&lt;string, int&gt;
        {
            { "Alice", 30 },
            { "Bob", 25 },
            { "Charlie", 35 }
        };
        
        // Adding a new key-value pair
        ages.Add("David", 28);
        
        // Updating an existing value
        ages["Alice"] = 31;
        
        // Removing a key-value pair
        ages.Remove("Bob");
        
        // Accessing a value by key
        Console.WriteLine($"Charlie's age: {ages["Charlie"]}"); // Output: Charlie's age: 35
        
        // Iterating through the dictionary using foreach loop
        Console.WriteLine("All ages:");
        foreach (KeyValuePair&lt;string, int&gt; entry in ages)
        {
            Console.WriteLine($"{entry.Key}: {entry.Value}");
        }
        // Output:
        // Alice: 31
        // Charlie: 35
        // David: 28
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, a <code>Dictionary&lt;string, int&gt;</code> named <code>ages</code> is declared and initialized with three key-value pairs. The dictionary allows adding new entries, updating existing ones, and removing entries based on their keys. Values can be accessed directly using their associated keys, and the dictionary can be iterated over using a <code>foreach</code> loop.
      </p>

      <!-- Advantages of Dictionaries -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Advantages of Dictionaries</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Fast Lookups:</strong> Dictionaries provide constant-time complexity (O(1)) for lookups, making them highly efficient for retrieving values based on keys.</li>
        <li><strong>Unique Keys:</strong> Each key in a dictionary must be unique, ensuring that each value can be accessed reliably without ambiguity.</li>
        <li><strong>Flexible Value Types:</strong> Dictionaries can store values of any type, allowing for versatile data storage based on requirements.</li>
        <li><strong>Easy to Use:</strong> The <code>Dictionary&lt;TKey, TValue&gt;</code> class offers intuitive methods for adding, removing, and accessing elements, simplifying data management.</li>
      </ul>

      <!-- Queues -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Queues</h2>
      <p class="text-base md:text-lg mb-4">
        Queues are first-in, first-out (FIFO) collections provided by the <code>Queue&lt;T&gt;</code> class in C#. They are ideal for scenarios where order of processing is crucial, such as task scheduling, handling requests, or managing data streams.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Think of a queue as a line at a ticket counter. The first person to join the line is the first to be served, and new arrivals are added to the end of the line.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Defining and Using Queues:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defining and using a Queue
using System;
using System.Collections.Generic;

public class QueueExample
{
    public static void Main(string[] args)
    {
        // Declaring and initializing a queue of strings
        Queue&lt;string&gt; tasks = new Queue&lt;string&gt;();
        
        // Enqueuing (adding) elements to the queue
        tasks.Enqueue("Task 1");
        tasks.Enqueue("Task 2");
        tasks.Enqueue("Task 3");
        
        // Dequeuing (removing) elements from the queue
        string firstTask = tasks.Dequeue();
        Console.WriteLine($"Processing: {firstTask}"); // Output: Processing: Task 1
        
        // Peeking at the next element without removing it
        string nextTask = tasks.Peek();
        Console.WriteLine($"Next task: {nextTask}"); // Output: Next task: Task 2
        
        // Iterating through the queue using foreach loop
        Console.WriteLine("Remaining tasks:");
        foreach (string task in tasks)
        {
            Console.WriteLine(task);
        }
        // Output:
        // Task 2
        // Task 3
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, a <code>Queue&lt;string&gt;</code> named <code>tasks</code> is declared and initialized. Elements are added to the queue using the <code>Enqueue</code> method and removed using the <code>Dequeue</code> method. The <code>Peek</code> method allows viewing the next element without removing it, and the queue can be iterated over using a <code>foreach</code> loop.
      </p>

      <!-- Advantages of Queues -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Advantages of Queues</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Order Preservation:</strong> Queues maintain the order of elements, ensuring that the first element added is the first to be processed.</li>
        <li><strong>Simple Interface:</strong> Queues offer straightforward methods for adding and removing elements, simplifying the management of ordered data.</li>
        <li><strong>Efficiency:</strong> Queues provide efficient operations for enqueuing and dequeuing elements, with constant-time complexity (O(1)).</li>
        <li><strong>Thread Safety:</strong> The <code>ConcurrentQueue&lt;T&gt;</code> class provides thread-safe operations, making queues suitable for multi-threaded environments.</li>
      </ul>

      <!-- Stacks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Stacks</h2>
      <p class="text-base md:text-lg mb-4">
        Stacks are last-in, first-out (LIFO) collections provided by the <code>Stack&lt;T&gt;</code> class in C#. They are ideal for scenarios where the most recently added item needs to be processed first, such as undo mechanisms, expression evaluation, or backtracking algorithms.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Imagine a stack of plates in a cafeteria. The last plate placed on top is the first one to be taken off, following the LIFO principle.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Defining and Using Stacks:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defining and using a Stack
using System;
using System.Collections.Generic;

public class StackExample
{
    public static void Main(string[] args)
    {
        // Declaring and initializing a stack of integers
        Stack&lt;int&gt; numbers = new Stack&lt;int&gt;();
        
        // Pushing elements onto the stack
        numbers.Push(10);
        numbers.Push(20);
        numbers.Push(30);
        
        // Popping the top element from the stack
        int topNumber = numbers.Pop();
        Console.WriteLine($"Popped number: {topNumber}"); // Output: Popped number: 30
        
        // Peeking at the top element without removing it
        int peekNumber = numbers.Peek();
        Console.WriteLine($"Next number to pop: {peekNumber}"); // Output: Next number to pop: 20
        
        // Iterating through the stack using foreach loop
        Console.WriteLine("Remaining numbers:");
        foreach (int number in numbers)
        {
            Console.WriteLine(number);
        }
        // Output:
        // 20
        // 10
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, a <code>Stack&lt;int&gt;</code> named <code>numbers</code> is declared and initialized. Elements are added to the stack using the <code>Push</code> method and removed using the <code>Pop</code> method. The <code>Peek</code> method allows viewing the top element without removing it, and the stack can be iterated over using a <code>foreach</code> loop.
      </p>

      <!-- Advantages of Stacks -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Advantages of Stacks</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Order Control:</strong> Stacks strictly follow the LIFO principle, ensuring that the most recently added element is always processed first.</li>
        <li><strong>Efficient Operations:</strong> Stacks provide efficient push and pop operations with constant-time complexity (O(1)).</li>
        <li><strong>Simplicity:</strong> Stacks offer a simple interface for adding and removing elements, making them easy to implement and use.</li>
        <li><strong>Memory Management:</strong> Stacks can be used for managing memory in certain applications, such as maintaining function call stacks.</li>
      </ul>

      <!-- Generics in Collections (List&lt;T&gt;, Dictionary&lt;TKey, TValue&gt;) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Generics in Collections</h2>
      <p class="text-base md:text-lg mb-4">
        Generics provide a way to define type-safe data structures without committing to actual data types. By using generics, collections can handle any data type while ensuring compile-time type safety, reducing runtime errors, and improving code reusability. Generics are a powerful feature in C# that enhances the flexibility and robustness of collections like <code>List&lt;T&gt;</code> and <code>Dictionary&lt;TKey, TValue&gt;</code>.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Imagine a toolbox that can be customized to hold different tools. Instead of having separate toolboxes for hammers, screwdrivers, and wrenches, you have a generic toolbox that can adapt to hold any type of tool based on your needs.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Using Generics with List&lt;T&gt; and Dictionary&lt;TKey, TValue&gt;:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Generics with List&lt;T&gt; and Dictionary&lt;TKey, TValue&gt;
using System;
using System.Collections.Generic;

public class GenericsExample
{
    public static void Main(string[] args)
    {
        // Using List&lt;T&gt; with different data types
        List&lt;int&gt; integerList = new List&lt;int&gt; { 1, 2, 3, 4, 5 };
        List&lt;string&gt; stringList = new List&lt;string&gt; { "Apple", "Banana", "Cherry" };
        
        // Adding elements
        integerList.Add(6);
        stringList.Add("Date");
        
        // Iterating through List&lt;T&gt;
        Console.WriteLine("Integer List:");
        foreach (int number in integerList)
        {
            Console.WriteLine(number);
        }
        // Output:
        // 1
        // 2
        // 3
        // 4
        // 5
        // 6
        
        Console.WriteLine("\nString List:");
        foreach (string fruit in stringList)
        {
            Console.WriteLine(fruit);
        }
        // Output:
        // Apple
        // Banana
        // Cherry
        // Date
        
        // Using Dictionary&lt;TKey, TValue&gt;
        Dictionary&lt;string, string&gt; capitals = new Dictionary&lt;string, string&gt;
        {
            { "USA", "Washington D.C." },
            { "Canada", "Ottawa" },
            { "UK", "London" }
        };
        
        // Adding a new key-value pair
        capitals.Add("Australia", "Canberra");
        
        // Accessing values by key
        Console.WriteLine($"\nCapital of Canada: {capitals["Canada"]}"); // Output: Capital of Canada: Ottawa
        
        // Iterating through Dictionary&lt;TKey, TValue&gt;
        Console.WriteLine("\nAll Capitals:");
        foreach (KeyValuePair&lt;string, string&gt; entry in capitals)
        {
            Console.WriteLine($"Country: {entry.Key}, Capital: {entry.Value}");
        }
        // Output:
        // Country: USA, Capital: Washington D.C.
        // Country: Canada, Capital: Ottawa
        // Country: UK, Capital: London
        // Country: Australia, Capital: Canberra
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, generics are used to create lists and dictionaries that can handle different data types. The <code>List&lt;T&gt;</code> class is used with both integers and strings, demonstrating how generics provide flexibility while maintaining type safety. Similarly, the <code>Dictionary&lt;TKey, TValue&gt;</code> class is utilized to map country names (keys) to their capitals (values), ensuring that each key is unique and that values can be efficiently retrieved.
      </p>

      <!-- Advantages of Generics in Collections -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Advantages of Generics in Collections</h3>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Type Safety:</strong> Generics enforce type constraints at compile-time, reducing the risk of runtime type errors and eliminating the need for type casting.</li>
        <li><strong>Performance:</strong> Generic collections eliminate the overhead associated with boxing and unboxing of value types, resulting in better performance.</li>
        <li><strong>Code Reusability:</strong> Generics allow you to create reusable and flexible collection types that can work with any data type, enhancing code maintainability and reducing redundancy.</li>
        <li><strong>Enhanced Readability:</strong> By specifying the type parameters, generics provide clearer and more readable code, making it easier to understand the purpose and usage of collections.</li>
      </ul>

      <!-- Other Collection Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Other Collection Types</h2>
      <p class="text-base md:text-lg mb-4">
        Beyond arrays, lists, dictionaries, queues, and stacks, C# offers a variety of other collection types tailored for specific use cases. These include sets, linked lists, hash sets, and more. Understanding the appropriate collection type to use based on your requirements is crucial for optimizing performance and ensuring code efficiency.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Think of different collection types as various storage containers designed for specific purposes. Just as you would choose a toolbox, a filing cabinet, or a refrigerator based on what you need to store, you select collection types in C# based on the nature of your data and the operations you intend to perform.
      </p>

      <!-- Example: Using LinkedList&lt;T&gt; -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using LinkedList&lt;T&gt;</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>LinkedList&lt;T&gt;</code> class represents a doubly linked list, allowing efficient insertion and removal of elements at any position. Unlike arrays and lists, linked lists do not require contiguous memory allocation, making them suitable for scenarios where frequent modifications are needed.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using LinkedList&lt;T&gt;
using System;
using System.Collections.Generic;

public class LinkedListExample
{
    public static void Main(string[] args)
    {
        // Declaring and initializing a linked list of strings
        LinkedList&lt;string&gt; linkedList = new LinkedList&lt;string&gt;();
        
        // Adding elements to the end
        linkedList.AddLast("Node 1");
        linkedList.AddLast("Node 2");
        linkedList.AddLast("Node 3");
        
        // Adding elements to the beginning
        linkedList.AddFirst("Node 0");
        
        // Inserting an element after a specific node
        LinkedListNode&lt;string&gt; node = linkedList.Find("Node 1");
        if (node != null)
        {
            linkedList.AddAfter(node, "Node 1.5");
        }
        
        // Removing an element
        linkedList.Remove("Node 2");
        
        // Iterating through the linked list using foreach loop
        Console.WriteLine("Linked List Contents:");
        foreach (string item in linkedList)
        {
            Console.WriteLine(item);
        }
        // Output:
        // Node 0
        // Node 1
        // Node 1.5
        // Node 3
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, a <code>LinkedList&lt;string&gt;</code> named <code>linkedList</code> is declared and initialized. Elements are added to both the beginning and the end of the list using <code>AddFirst</code> and <code>AddLast</code> methods. The <code>AddAfter</code> method inserts a new node after a specified existing node. Elements can be removed using the <code>Remove</code> method, and the linked list can be iterated over using a <code>foreach</code> loop.
      </p>

      <!-- Summary of Collection Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Summary of Collection Types</h2>
      <p class="text-base md:text-lg mb-4">
        Choosing the right collection type is pivotal for optimizing performance and ensuring the efficiency of your C# applications. Here's a summary of the primary collection types discussed:
      </p>
      <table class="min-w-full table-auto mb-6">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">Collection Type</th>
            <th class="px-4 py-2">Use Case</th>
            <th class="px-4 py-2">Advantages</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border px-4 py-2 font-semibold">Array</td>
            <td class="border px-4 py-2">Fixed-size, high-performance storage of elements</td>
            <td class="border px-4 py-2">Fast access by index, simple structure</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2 font-semibold">List&lt;T&gt;</td>
            <td class="border px-4 py-2">Dynamic-size, versatile storage of elements</td>
            <td class="border px-4 py-2">Flexible sizing, rich set of methods, type safety</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 font-semibold">Dictionary&lt;TKey, TValue&gt;</td>
            <td class="border px-4 py-2">Key-value pair storage for fast lookups</td>
            <td class="border px-4 py-2">Fast retrieval, unique keys, type safety</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2 font-semibold">Queue&lt;T&gt;</td>
            <td class="border px-4 py-2">First-in, first-out processing</td>
            <td class="border px-4 py-2">Order preservation, efficient enqueue/dequeue operations</td>
          </tr>
          <tr>
            <td class="border px-4 py-2 font-semibold">Stack&lt;T&gt;</td>
            <td class="border px-4 py-2">Last-in, first-out processing</td>
            <td class="border px-4 py-2">Efficient push/pop operations, simple interface</td>
          </tr>
          <tr class="bg-gray-100">
            <td class="border px-4 py-2 font-semibold">LinkedList&lt;T&gt;</td>
            <td class="border px-4 py-2">Efficient insertion/removal at any position</td>
            <td class="border px-4 py-2">Flexible structure, no need for contiguous memory</td>
          </tr>
        </tbody>
      </table>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Using Collections</h2>
      <p class="text-base md:text-lg mb-4">
        To effectively utilize collections in C#, consider the following best practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Select the Appropriate Collection Type:</strong> Choose a collection that best fits your use case based on factors like data type, required operations, and performance considerations.</li>
        <li><strong>Use Generics for Type Safety:</strong> Leverage generic collections to ensure type safety, reducing the risk of runtime errors and enhancing code readability.</li>
        <li><strong>Initialize Collections Properly:</strong> Initialize collections with an appropriate capacity when possible to minimize resizing overhead.</li>
        <li><strong>Avoid Using Arrays for Dynamic Data:</strong> Use dynamic collections like <code>List&lt;T&gt;</code> when dealing with data that changes in size to benefit from their flexibility.</li>
        <li><strong>Utilize LINQ for Data Manipulation:</strong> Employ Language Integrated Query (LINQ) to perform complex queries and transformations on collections efficiently.</li>
        <li><strong>Implement Proper Error Handling:</strong> Handle potential exceptions, such as key not found in dictionaries or invalid index access in arrays and lists.</li>
        <li><strong>Optimize Memory Usage:</strong> Be mindful of the memory footprint of collections, especially when dealing with large datasets, to prevent performance bottlenecks.</li>
      </ul>

      <!-- Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Pitfalls to Avoid with Collections</h2>
      <p class="text-base md:text-lg mb-4">
        While collections are powerful tools, improper use can lead to inefficiencies and bugs. Here are some common pitfalls to be aware of:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Choosing the Wrong Collection Type:</strong> Selecting an inappropriate collection can lead to suboptimal performance and increased complexity. Understand the characteristics of each collection type before making a choice.</li>
        <li><strong>Ignoring Capacity Management:</strong> Failing to set an initial capacity for collections like <code>List&lt;T&gt;</code> can result in frequent resizing operations, which are costly in terms of performance.</li>
        <li><strong>Not Using Generics:</strong> Using non-generic collections like <code>ArrayList</code> can lead to type safety issues and unnecessary type casting, increasing the risk of runtime errors.</li>
        <li><strong>Assuming Thread Safety:</strong> Most collections are not thread-safe by default. If you need to use collections in a multi-threaded environment, consider using concurrent collections or implementing proper synchronization mechanisms.</li>
        <li><strong>Overusing Complex Collections:</strong> While advanced collections like <code>LinkedList&lt;T&gt;</code> and <code>HashSet&lt;T&gt;</code> offer specific advantages, overusing them in simple scenarios can complicate the code without providing significant benefits.</li>
        <li><strong>Neglecting to Handle Nulls:</strong> Collections can contain null elements or may themselves be null. Ensure proper null checks to prevent unexpected exceptions.</li>
        <li><strong>Misusing Indexes:</strong> Accessing elements by incorrect indices can lead to out-of-range exceptions. Always validate indices before accessing elements in arrays and lists.</li>
      </ul>

      <!-- Practical Problem Solving -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Practical Examples Solving Simple Problems</h2>
      <p class="text-base md:text-lg mb-4">
        To reinforce your understanding of collections in C#, let's explore some practical examples that solve simple problems using different collection types.
      </p>

      <!-- Example 1: Managing a Student Roster with List&lt;T&gt; -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 1: Managing a Student Roster with List&lt;T&gt;</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to use a <code>List&lt;Student&gt;</code> to manage a roster of students, including adding, removing, and searching for students.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Managing a Student Roster with List&lt;T&gt;
using System;
using System.Collections.Generic;

public class Student
{
    public string Name { get; set; }
    public int ID { get; set; }
    
    public Student(string name, int id)
    {
        Name = name;
        ID = id;
    }
    
    public void DisplayInfo()
    {
        Console.WriteLine($"Student Name: {Name}, ID: {ID}");
    }
}

public class StudentRoster
{
    private List&lt;Student&gt; students = new List&lt;Student&gt;();
    
    public void AddStudent(Student student)
    {
        students.Add(student);
        Console.WriteLine($"Added {student.Name} to the roster.");
    }
    
    public void RemoveStudent(int id)
    {
        Student studentToRemove = students.Find(s => s.ID == id);
        if (studentToRemove != null)
        {
            students.Remove(studentToRemove);
            Console.WriteLine($"Removed {studentToRemove.Name} from the roster.");
        }
        else
        {
            Console.WriteLine($"No student found with ID: {id}");
        }
    }
    
    public void DisplayAllStudents()
    {
        Console.WriteLine("Student Roster:");
        foreach (Student student in students)
        {
            student.DisplayInfo();
        }
    }
    
    public Student FindStudentByID(int id)
    {
        return students.Find(s => s.ID == id);
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        StudentRoster roster = new StudentRoster();
        
        // Adding students
        roster.AddStudent(new Student("Alice", 101));
        roster.AddStudent(new Student("Bob", 102));
        roster.AddStudent(new Student("Charlie", 103));
        
        // Displaying all students
        roster.DisplayAllStudents();
        // Output:
        // Added Alice to the roster.
        // Added Bob to the roster.
        // Added Charlie to the roster.
        // Student Roster:
        // Student Name: Alice, ID: 101
        // Student Name: Bob, ID: 102
        // Student Name: Charlie, ID: 103
        
        // Removing a student
        roster.RemoveStudent(102); // Output: Removed Bob from the roster.
        
        // Displaying all students after removal
        roster.DisplayAllStudents();
        // Output:
        // Student Roster:
        // Student Name: Alice, ID: 101
        // Student Name: Charlie, ID: 103
        
        // Finding a student by ID
        Student foundStudent = roster.FindStudentByID(101);
        if (foundStudent != null)
        {
            foundStudent.DisplayInfo(); // Output: Student Name: Alice, ID: 101
        }
        else
        {
            Console.WriteLine("Student not found.");
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>Student</code>  class represents a student with properties for name and ID. The <code>StudentRoster</code> class manages a list of students using <code>List&lt;Student&gt;</code>. Methods are provided to add, remove, display, and find students within the roster. This demonstrates the flexibility and ease of use that <code>List&lt;T&gt;</code> offers for managing dynamic collections of objects.
      </p>

      <!-- Example 2: Tracking Inventory with Dictionary&lt;TKey, TValue&gt; -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 2: Tracking Inventory with Dictionary&lt;TKey, TValue&gt;</h3>
      <p class="text-base md:text-lg mb-4">
        This example illustrates how to use a <code>Dictionary&lt;string, int&gt;</code> to track inventory items and their quantities, enabling efficient lookups and updates.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Tracking Inventory with Dictionary&lt;TKey, TValue&gt;
using System;
using System.Collections.Generic;

public class Inventory
{
    private Dictionary&lt;string, int&gt; items = new Dictionary&lt;string, int&gt;();
    
    public void AddItem(string itemName, int quantity)
    {
        if (items.ContainsKey(itemName))
        {
            items[itemName] += quantity;
            Console.WriteLine($"Updated {itemName} quantity to {items[itemName]}.");
        }
        else
        {
            items.Add(itemName, quantity);
            Console.WriteLine($"Added {itemName} with quantity {quantity}.");
        }
    }
    
    public void RemoveItem(string itemName, int quantity)
    {
        if (items.ContainsKey(itemName))
        {
            if (items[itemName] >= quantity)
            {
                items[itemName] -= quantity;
                Console.WriteLine($"Reduced {itemName} quantity to {items[itemName]}.");
                
                if (items[itemName] == 0)
                {
                    items.Remove(itemName);
                    Console.WriteLine($"{itemName} is now out of stock.");
                }
            }
            else
            {
                Console.WriteLine($"Insufficient quantity of {itemName} to remove.");
            }
        }
        else
        {
            Console.WriteLine($"Item {itemName} does not exist in inventory.");
        }
    }
    
    public void DisplayInventory()
    {
        Console.WriteLine("Current Inventory:");
        foreach (KeyValuePair&lt;string, int&gt; entry in items)
        {
            Console.WriteLine($"Item: {entry.Key}, Quantity: {entry.Value}");
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Inventory inventory = new Inventory();
        
        // Adding items
        inventory.AddItem("Laptop", 10);      // Output: Added Laptop with quantity 10.
        inventory.AddItem("Smartphone", 20);  // Output: Added Smartphone with quantity 20.
        inventory.AddItem("Tablet", 15);      // Output: Added Tablet with quantity 15.
        
        // Displaying inventory
        inventory.DisplayInventory();
        // Output:
        // Current Inventory:
        // Item: Laptop, Quantity: 10
        // Item: Smartphone, Quantity: 20
        // Item: Tablet, Quantity: 15
        
        // Updating existing item
        inventory.AddItem("Laptop", 5);       // Output: Updated Laptop quantity to 15.
        
        // Removing items
        inventory.RemoveItem("Smartphone", 5); // Output: Reduced Smartphone quantity to 15.
        inventory.RemoveItem("Tablet", 15);     // Output:
        // Reduced Tablet quantity to 0.
        // Tablet is now out of stock.
        
        // Attempting to remove non-existent item
        inventory.RemoveItem("Monitor", 2);     // Output: Item Monitor does not exist in inventory.
        
        // Displaying inventory after removals
        inventory.DisplayInventory();
        // Output:
        // Current Inventory:
        // Item: Laptop, Quantity: 15
        // Item: Smartphone, Quantity: 15
      }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>Inventory</code> class uses a <code>Dictionary&lt;string, int&gt;</code> to map item names to their quantities. The class provides methods to add items, remove items, and display the current inventory. The dictionary allows for efficient lookups and updates, ensuring that inventory management operations are performed swiftly and accurately.
      </p>

      <!-- Example 3: Implementing a Task Scheduler with Queue&lt;T&gt; -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 3: Implementing a Task Scheduler with Queue&lt;T&gt;</h3>
      <p class="text-base md:text-lg mb-4">
        This example showcases how to use a <code>Queue&lt;string&gt;</code> to implement a simple task scheduler, processing tasks in the order they were added.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Implementing a Task Scheduler with Queue&lt;T&gt;
using System;
using System.Collections.Generic;

public class TaskScheduler
{
    private Queue&lt;string&gt; taskQueue = new Queue&lt;string&gt;();
    
    public void AddTask(string task)
    {
        taskQueue.Enqueue(task);
        Console.WriteLine($"Added task: {task}");
    }
    
    public void ProcessNextTask()
    {
        if (taskQueue.Count > 0)
        {
            string task = taskQueue.Dequeue();
            Console.WriteLine($"Processing task: {task}");
        }
        else
        {
            Console.WriteLine("No tasks to process.");
        }
    }
    
    public void DisplayAllTasks()
    {
        Console.WriteLine("All Pending Tasks:");
        foreach (string task in taskQueue)
        {
            Console.WriteLine(task);
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        TaskScheduler scheduler = new TaskScheduler();
        
        // Adding tasks
        scheduler.AddTask("Backup Database");
        scheduler.AddTask("Send Report");
        scheduler.AddTask("Update Software");
        
        // Displaying all tasks
        scheduler.DisplayAllTasks();
        // Output:
        // Added task: Backup Database
        // Added task: Send Report
        // Added task: Update Software
        // All Pending Tasks:
        // Backup Database
        // Send Report
        // Update Software
        
        // Processing tasks
        scheduler.ProcessNextTask(); // Output: Processing task: Backup Database
        scheduler.ProcessNextTask(); // Output: Processing task: Send Report
        
        // Displaying remaining tasks
        scheduler.DisplayAllTasks();
        // Output:
        // All Pending Tasks:
        // Update Software
        
        // Processing remaining tasks
        scheduler.ProcessNextTask(); // Output: Processing task: Update Software
        scheduler.ProcessNextTask(); // Output: No tasks to process.
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>TaskScheduler</code> class uses a <code>Queue&lt;string&gt;</code> to manage tasks. Tasks are added to the queue using the <code>AddTask</code> method and processed in the order they were added using the <code>ProcessNextTask</code> method. The <code>DisplayAllTasks</code> method allows viewing all pending tasks, demonstrating the FIFO behavior of queues.
      </p>

      <!-- Example 4: Implementing a Browser History with Stack&lt;T&gt; -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 4: Implementing a Browser History with Stack&lt;T&gt;</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to use a <code>Stack&lt;string&gt;</code> to implement a simple browser history, allowing users to navigate back through their visited pages.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Implementing a Browser History with Stack&lt;T&gt;
using System;
using System.Collections.Generic;

public class BrowserHistory
{
    private Stack&lt;string&gt; history = new Stack&lt;string&gt;();
    
    public void VisitPage(string url)
    {
        history.Push(url);
        Console.WriteLine($"Visited: {url}");
    }
    
    public void GoBack()
    {
        if (history.Count > 0)
        {
            string previousPage = history.Pop();
            Console.WriteLine($"Went back from: {previousPage}");
        }
        else
        {
            Console.WriteLine("No pages in history.");
        }
    }
    
    public void DisplayHistory()
    {
        Console.WriteLine("Browser History:");
        foreach (string page in history)
        {
            Console.WriteLine(page);
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        BrowserHistory browser = new BrowserHistory();
        
        // Visiting pages
        browser.VisitPage("https://www.google.com");
        browser.VisitPage("https://www.github.com");
        browser.VisitPage("https://www.stackoverflow.com");
        
        // Displaying history
        browser.DisplayHistory();
        // Output:
        // Visited: https://www.google.com
        // Visited: https://www.github.com
        // Visited: https://www.stackoverflow.com
        // Browser History:
        // https://www.stackoverflow.com
        // https://www.github.com
        // https://www.google.com
        
        // Going back
        browser.GoBack(); // Output: Went back from: https://www.stackoverflow.com
        browser.GoBack(); // Output: Went back from: https://www.github.com
        
        // Displaying remaining history
        browser.DisplayHistory();
        // Output:
        // Browser History:
        // https://www.google.com
        
        // Attempting to go back with one page left
        browser.GoBack(); // Output: Went back from: https://www.google.com
        browser.GoBack(); // Output: No pages in history.
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>BrowserHistory</code> class uses a <code>Stack&lt;string&gt;</code> to manage the history of visited web pages. Pages are added to the stack using the <code>VisitPage</code> method and removed using the <code>GoBack</code> method, adhering to the LIFO principle. The <code>DisplayHistory</code> method allows viewing the current state of the browser history.
      </p>

      <!-- Example 5: Implementing a To-Do List with LinkedList&lt;T&gt; -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 5: Implementing a To-Do List with LinkedList&lt;T&gt;</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to use a <code>LinkedList&lt;string&gt;</code> to implement a to-do list, allowing for efficient insertion and removal of tasks at any position.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Implementing a To-Do List with LinkedList&lt;T&gt;
using System;
using System.Collections.Generic;

public class ToDoList
{
    private LinkedList&lt;string&gt; tasks = new LinkedList&lt;string&gt;();
    
    public void AddTask(string task, string afterTask = null)
    {
        if (string.IsNullOrEmpty(afterTask))
        {
            tasks.AddLast(task);
            Console.WriteLine($"Added task: {task} at the end.");
        }
        else
        {
            LinkedListNode&lt;string&gt; node = tasks.Find(afterTask);
            if (node != null)
            {
                tasks.AddAfter(node, task);
                Console.WriteLine($"Added task: {task} after {afterTask}.");
            }
            else
            {
                Console.WriteLine($"Task {afterTask} not found. Adding {task} at the end.");
                tasks.AddLast(task);
            }
        }
    }
    
    public void RemoveTask(string task)
    {
        if (tasks.Remove(task))
        {
            Console.WriteLine($"Removed task: {task}.");
        }
        else
        {
            Console.WriteLine($"Task {task} not found.");
        }
    }
    
    public void DisplayTasks()
    {
        Console.WriteLine("To-Do List:");
        foreach (string task in tasks)
        {
            Console.WriteLine($"- {task}");
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        ToDoList toDo = new ToDoList();
        
        // Adding tasks
        toDo.AddTask("Buy groceries");                             // Output: Added task: Buy groceries at the end.
        toDo.AddTask("Call Alice", "Buy groceries");              // Output: Added task: Call Alice after Buy groceries.
        toDo.AddTask("Pay bills", "Call Alice");                  // Output: Added task: Pay bills after Call Alice.
        toDo.AddTask("Walk the dog", "Nonexistent Task");         // Output: Task Nonexistent Task not found. Adding Walk the dog at the end.
        
        // Displaying tasks
        toDo.DisplayTasks();
        // Output:
        // To-Do List:
        // - Buy groceries
        // - Call Alice
        // - Pay bills
        // - Walk the dog
        
        // Removing a task
        toDo.RemoveTask("Call Alice");                             // Output: Removed task: Call Alice.
        
        // Displaying tasks after removal
        toDo.DisplayTasks();
        // Output:
        // To-Do List:
        // - Buy groceries
        // - Pay bills
        // - Walk the dog
        
        // Attempting to remove a non-existent task
        toDo.RemoveTask("Attend meeting");                        // Output: Task Attend meeting not found.
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>ToDoList</code> class uses a <code>LinkedLis&lt;string&gt;</code> to manage a list of tasks. Tasks can be added at the end or after a specified existing task using the <code>AddTask</code> method. The <code>RemoveTask</code> method allows for the removal of tasks by name, and the <code>DisplayTasks</code> method provides a view of all current tasks. The flexibility of linked lists makes them suitable for scenarios where tasks need to be inserted or removed from arbitrary positions efficiently.
      </p>

      <!-- Example 6: Filtering Data with LINQ and Collections -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 6: Filtering Data with LINQ and Collections</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to use LINQ (Language Integrated Query) in conjunction with collections to perform complex data filtering and manipulation tasks.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Filtering Data with LINQ and Collections
using System;
using System.Collections.Generic;
using System.Linq;

public class Employee
{
    public string Name { get; set; }
    public string Department { get; set; }
    public double Salary { get; set; }
    
    public Employee(string name, string department, double salary)
    {
        Name = name;
        Department = department;
        Salary = salary;
    }
}

public class LINQExample
{
    public static void Main(string[] args)
    {
        // Creating a list of employees
        List&lt;Employee&gt; employees = new List&lt;Employee&gt;
        {
            new Employee("Alice", "HR", 50000),
            new Employee("Bob", "IT", 60000),
            new Employee("Charlie", "Finance", 55000),
            new Employee("David", "IT", 70000),
            new Employee("Eve", "HR", 48000),
            new Employee("Frank", "Finance", 62000)
        };
        
        // Example 1: Filtering employees in the IT department
        var itEmployees = employees.Where(e => e.Department == "IT");
        Console.WriteLine("IT Department Employees:");
        foreach (Employee emp in itEmployees)
        {
            Console.WriteLine($"{emp.Name}, Salary: {emp.Salary}");
        }
        // Output:
        // IT Department Employees:
        // Bob, Salary: 60000
        // David, Salary: 70000
        
        // Example 2: Finding employees with salary greater than 55000
        var highEarners = employees.Where(e => e.Salary > 55000);
        Console.WriteLine("\nEmployees with Salary > 55000:");
        foreach (Employee emp in highEarners)
        {
            Console.WriteLine($"{emp.Name}, Department: {emp.Department}, Salary: {emp.Salary}");
        }
        // Output:
        // Employees with Salary > 55000:
        // Bob, Department: IT, Salary: 60000
        // David, Department: IT, Salary: 70000
        // Frank, Department: Finance, Salary: 62000
        
        // Example 3: Grouping employees by department
        var groupedByDept = employees.GroupBy(e => e.Department);
        Console.WriteLine("\nEmployees Grouped by Department:");
        foreach (var group in groupedByDept)
        {
            Console.WriteLine($"Department: {group.Key}");
            foreach (Employee emp in group)
            {
                Console.WriteLine($"\t{emp.Name}, Salary: {emp.Salary}");
            }
        }
        // Output:
        // Employees Grouped by Department:
        // Department: HR
        //     Alice, Salary: 50000
        //     Eve, Salary: 48000
        // Department: IT
        //     Bob, Salary: 60000
        //     David, Salary: 70000
        // Department: Finance
        //     Charlie, Salary: 55000
        //     Frank, Salary: 62000
        
        // Example 4: Ordering employees by salary descending
        var orderedBySalary = employees.OrderByDescending(e => e.Salary);
        Console.WriteLine("\nEmployees Ordered by Salary (Descending):");
        foreach (Employee emp in orderedBySalary)
        {
            Console.WriteLine($"{emp.Name}, Salary: {emp.Salary}");
        }
        // Output:
        // Employees Ordered by Salary (Descending):
        // David, Salary: 70000
        // Frank, Salary: 62000
        // Bob, Salary: 60000
        // Charlie, Salary: 55000
        // Alice, Salary: 50000
        // Eve, Salary: 48000
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, a <code>List&lt;Employee&gt;</code> is created with various employees. LINQ is used to perform different operations:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Filtering:</strong> The <code>Where</code> method filters employees based on department and salary criteria.</li>
        <li><strong>Grouping:</strong> The <code>GroupBy</code> method groups employees by their department.</li>
        <li><strong>Ordering:</strong> The <code>OrderByDescending</code> method orders employees based on their salary in descending order.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        This example highlights the power of LINQ in querying and manipulating collections, making data operations more expressive and concise.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering collections in C# is essential for effective data management and manipulation in your applications. From the simplicity of arrays to the versatility of lists, dictionaries, queues, and stacks, each collection type offers unique advantages tailored to specific use cases. Generics further enhance the power of collections by ensuring type safety and reusability, while advanced collections like linked lists provide flexibility for complex data operations.

        By understanding the strengths and limitations of each collection type, you can make informed decisions that optimize performance, maintainability, and scalability of your code. Additionally, leveraging LINQ in combination with collections empowers you to perform sophisticated data queries and transformations with ease.

        Adhering to best practices, such as selecting the appropriate collection type, managing capacity wisely, and utilizing generics effectively, will lead to more robust and efficient applications. Avoiding common pitfalls, like overusing inheritance or neglecting type safety, ensures that your code remains clean, maintainable, and performant.

        As you continue to develop your C# skills, integrating a deep understanding of collections will significantly enhance your ability to handle data-driven tasks and build complex, high-quality software solutions. Whether you're managing a student roster, tracking inventory, scheduling tasks, or implementing browser history, the right collection type can make all the difference in achieving your programming goals.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSharpCollections',
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
