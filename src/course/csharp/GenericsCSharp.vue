<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-blue-600 rounded-t-xl p-4">
      <img src="/csharp/logo.png" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">C# Generics</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        In the realm of C# programming, **generics** play a pivotal role in creating flexible, type-safe, and reusable code. Generics allow developers to define classes, methods, and data structures with placeholders for the type of data they store or manipulate. This powerful feature not only enhances code reusability but also ensures compile-time type safety, reducing runtime errors and improving overall application robustness. This section delves into the intricacies of generics in C#, covering how to define generic classes and methods, apply generic constraints, and understand the myriad benefits that generics offer over non-generic collections. Through real-world analogies and practical code examples, you'll gain a comprehensive understanding of how to leverage generics to build efficient and maintainable applications.
      </p>

      <!-- Understanding Generics -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Generics</h2>
      <p class="text-base md:text-lg mb-4">
        **Generics** enable developers to define classes, interfaces, and methods with a placeholder for the type of data they operate on. This allows for the creation of components that can work with any data type while maintaining type safety. Before generics were introduced, developers often relied on non-generic collections like `ArrayList` or `Hashtable`, which stored objects as `System.Object` types. While flexible, these collections lacked type safety, leading to potential runtime errors and the need for explicit type casting.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Imagine a vending machine designed to dispense snacks. Without generics, the machine could only dispense one type of snack (e.g., chips), requiring separate machines for different snacks (e.g., candy, nuts). With generics, a single versatile vending machine can dispense any type of snack, whether chips, candy, or nuts, simply by specifying the desired type. This versatility reduces redundancy and enhances efficiency.
      </p>

      <!-- Defining Generic Classes and Methods -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Defining Generic Classes and Methods</h2>
      <p class="text-base md:text-lg mb-4">
        Generics in C# are defined using angle brackets (`<>`) and a type parameter. This type parameter acts as a placeholder that can be replaced with a specific type when the generic class or method is instantiated or invoked.
      </p>

      <!-- Generic Classes -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Generic Classes</h3>
      <p class="text-base md:text-lg mb-4">
        A generic class allows you to define a class with a type parameter, enabling it to handle different data types without sacrificing type safety. Here's how you can define and use a generic class in C#:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defining and using a generic class
using System;

namespace GenericsExample
{
    // Define a generic class with a type parameter T
    public class GenericBox&lt;T&gt;
    {
        public T Value { get; set; }

        public GenericBox(T value)
        {
            Value = value;
        }

        public void Display()
        {
            Console.WriteLine($"The value is: {Value}");
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            // Create a GenericBox for an integer
            GenericBox&lt;int&gt; intBox = new GenericBox&lt;int&gt;(123);
            intBox.Display(); // Output: The value is: 123

            // Create a GenericBox for a string
            GenericBox&lt;string&gt; strBox = new GenericBox&lt;string&gt;("Hello Generics");
            strBox.Display(); // Output: The value is: Hello Generics
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
          <strong>GenericBox&lt;T&gt; Class:</strong> This generic class has a type parameter <code>T</code>, allowing it to store and display values of any specified type.
        </li>
        <li>
          <strong>Constructor:</strong> The constructor accepts a parameter of type <code>T</code>, initializing the <code>Value</code> property.
        </li>
        <li>
          <strong>Display Method:</strong> This method prints the value stored in the box, demonstrating how the generic type <code>T</code> is utilized.
        </li>
        <li>
          <strong>Program Class:</strong> In the <code>Main</code> method, instances of <code>GenericBox</code> are created for both <code>int</code> and <code>string</code> types, showcasing the versatility and type safety of generics.
        </li>
      </ul>

      <!-- Generic Methods -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Generic Methods</h3>
      <p class="text-base md:text-lg mb-4">
        Similar to generic classes, generic methods allow you to define methods with type parameters. These type parameters can be used to specify the types of method parameters, return types, or both. Here's an example of a generic method:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defining and using a generic method
using System;

namespace GenericsExample
{
    public class Utilities
    {
        // Define a generic method with type parameter T
        public void Swap&lt;T&gt;(ref T a, ref T b)
        {
            T temp = a;
            a = b;
            b = temp;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            Utilities util = new Utilities();

            int x = 10;
            int y = 20;
            Console.WriteLine($"Before Swap: x = {x}, y = {y}");
            util.Swap&lt;int&gt;(ref x, ref y);
            Console.WriteLine($"After Swap: x = {x}, y = {y}");
            // Output:
            // Before Swap: x = 10, y = 20
            // After Swap: x = 20, y = 10

            string first = "Hello";
            string second = "World";
            Console.WriteLine($"\nBefore Swap: first = {first}, second = {second}");
            util.Swap&lt;string&gt;(ref first, ref second);
            Console.WriteLine($"After Swap: first = {first}, second = {second}");
            // Output:
            // Before Swap: first = Hello, second = World
            // After Swap: first = World, second = Hello
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
          <strong>Swap&lt;T&gt; Method:</strong> This generic method swaps the values of two variables of any specified type. The use of the <code>ref</code> keyword allows the method to modify the original variables.
        </li>
        <li>
          <strong>Program Class:</strong> Demonstrates the use of the generic <code>Swap</code> method with both <code>int</code> and <code>string</code> types, showcasing how the same method can operate on different data types without duplication.
        </li>
      </ul>

      <!-- Generic Constraints -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Generic Constraints</h2>
      <p class="text-base md:text-lg mb-4">
        While generics offer immense flexibility, there are scenarios where certain operations or methods require the type parameters to meet specific requirements. **Generic constraints** allow you to enforce these requirements, ensuring that the type parameters provide the necessary functionality. Constraints can specify that a type parameter must inherit from a particular class, implement an interface, have a parameterless constructor, or be a reference/value type.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Types of Constraints:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>where T : struct</strong> – The type argument must be a value type.</li>
        <li><strong>where T : class</strong> – The type argument must be a reference type.</li>
        <li><strong>where T : new()</strong> – The type argument must have a parameterless constructor.</li>
        <li><strong>where T : <em>BaseClass</em></strong> – The type argument must inherit from a specific base class.</li>
        <li><strong>where T : <em>Interface</em></strong> – The type argument must implement a specific interface.</li>
      </ul>

      <!-- Example: Using Generic Constraints -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using Generic Constraints</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to apply generic constraints to ensure that the type parameters meet specific requirements. Here, we create a generic repository class that can only work with classes that have a parameterless constructor.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Implementing generic constraints
using System;
using System.Collections.Generic;

namespace GenericsExample
{
    // Define a base class
    public class Entity
    {
        public int Id { get; set; }
    }

    // Define an interface
    public interface IRepository&lt;T&gt;
    {
        void Add(T item);
        T GetById(int id);
    }

    // Implement a generic repository with constraints
    public class Repository&lt;T&gt; : IRepository&lt;T&gt; where T : Entity, new()
    {
        private readonly List&lt;T&gt; _items = new List&lt;T&gt;();

        public void Add(T item)
        {
            if (item.Id == 0)
            {
                item.Id = _items.Count + 1;
            }
            _items.Add(item);
            Console.WriteLine($"Added {typeof(T).Name} with ID {item.Id}");
        }

        public T GetById(int id)
        {
            foreach (var item in _items)
            {
                if (item.Id == id)
                {
                    Console.WriteLine($"Retrieved {typeof(T).Name} with ID {id}");
                    return item;
                }
            }
            Console.WriteLine($"{typeof(T).Name} with ID {id} not found.");
            return default;
        }
    }

    // Define a class that inherits from Entity
    public class Product : Entity
    {
        public string Name { get; set; }

        public Product()
        {
            // Parameterless constructor
        }

        public Product(string name)
        {
            Name = name;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            // Create a repository for Product
            IRepository&lt;Product&gt; productRepository = new Repository&lt;Product&gt;();

            // Add products
            productRepository.Add(new Product("Laptop"));
            productRepository.Add(new Product("Smartphone"));

            // Retrieve a product by ID
            Product retrievedProduct = productRepository.GetById(1);
            if (retrievedProduct != null)
            {
                Console.WriteLine($"Product ID: {retrievedProduct.Id}, Name: {retrievedProduct.Name}");
            }

            // Attempt to retrieve a non-existing product
            productRepository.GetById(3);
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
          <strong>Generic Constraints:</strong> The <code>Repository&lt;T&gt;</code> class includes a generic constraint <code>where T : Entity, new()</code>, ensuring that the type parameter <code>T</code> must inherit from the <code>Entity</code> class and have a parameterless constructor.
        </li>
        <li>
          <strong>Entity Class:</strong> Serves as a base class with an <code>Id</code> property, providing a common structure for entities managed by the repository.
        </li>
        <li>
          <strong>IRepository&lt;T&gt; Interface:</strong> Defines the contract for the repository, including methods to add items and retrieve them by ID.
        </li>
        <li>
          <strong>Repository&lt;T&gt; Class:</strong> Implements the <code>IRepository&lt;T&gt;</code> interface and manages a list of items. The <code>Add</code> method assigns an ID if not already set and adds the item to the collection. The <code>GetById</code> method retrieves an item by its ID.
        </li>
        <li>
          <strong>Product Class:</strong> Inherits from <code>Entity</code> and represents a product with a <code>Name</code> property. It includes both a parameterless constructor (required by the generic constraint) and a constructor that accepts a name.
        </li>
        <li>
          <strong>Program Class:</strong> Demonstrates the use of the generic repository by adding and retrieving products, showcasing the type safety and reusability provided by generics.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Added Product with ID 1
Added Product with ID 2
Retrieved Product with ID 1
Product ID: 1, Name: Laptop
Product with ID 3 not found.
</code>
      </pre>

      <!-- Example: Using Generics with LINQ -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Example: Using Generics with LINQ</h2>
      <p class="text-base md:text-lg mb-4">
        LINQ (Language Integrated Query) is a powerful feature in C# that enables querying data in a type-safe and expressive manner. It leverages generics extensively to ensure that queries are both efficient and type-safe.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Generics with LINQ
using System;
using System.Collections.Generic;
using System.Linq;

namespace GenericsExample
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            // Create a list of products using a generic List&lt;T&gt;
            List&lt;Product&gt; products = new List&lt;Product&gt;
            {
                new Product { Id = 1, Name = "Laptop", Price = 999.99 },
                new Product { Id = 2, Name = "Smartphone", Price = 499.99 },
                new Product { Id = 3, Name = "Tablet", Price = 299.99 },
                new Product { Id = 4, Name = "Monitor", Price = 199.99 }
            };

            // Use LINQ to query products with price greater than $300
            var expensiveProducts = products.Where(p => p.Price > 300);

            Console.WriteLine("Products with price greater than $300:");
            foreach (var product in expensiveProducts)
            {
                Console.WriteLine($"ID: {product.Id}, Name: {product.Name}, Price: ${product.Price}");
            }

            // Example of a generic method
            Console.WriteLine("\nUsing a generic method to find a product by ID:");
            Product foundProduct = FindProductById(products, 2);
            if (foundProduct != null)
            {
                Console.WriteLine($"Found Product - ID: {foundProduct.Id}, Name: {foundProduct.Name}, Price: ${foundProduct.Price}");
            }
            else
            {
                Console.WriteLine("Product not found.");
            }
        }

        // Generic method to find an item by a predicate
        public static T FindItem&lt;T&gt;(List&lt;T&gt; items, Func&lt;T, bool&gt; predicate)
        {
            return items.FirstOrDefault(predicate);
        }

        // Specific method using the generic FindItem method
        public static Product FindProductById(List&lt;Product&gt; products, int id)
        {
            return FindItem(products, p => p.Id == id);
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
          <strong>Product Class:</strong> Defines a simple <code>Product</code> class with properties <code>Id</code>, <code>Name</code>, and <code>Price</code>.
        </li>
        <li>
          <strong>Program Class:</strong> Demonstrates the use of generics with LINQ by creating a <code>List&lt;Product&gt;</code> and performing queries on it.
        </li>
        <li>
          <strong>LINQ Query:</strong> The <code>Where</code> method is a generic method that filters the list based on the provided predicate. In this case, it selects products with a price greater than $300.
        </li>
        <li>
          <strong>Generic Method (FindItem&lt;T&gt;):</strong> A reusable method that takes a list of any type <code>T</code> and a predicate to find the first matching item. It utilizes the <code>FirstOrDefault</code> LINQ method to perform the search.
        </li>
        <li>
          <strong>FindProductById Method:</strong> A specific implementation that uses the generic <code>FindItem</code> method to find a product by its ID. This showcases how generic methods can be leveraged to create reusable and type-safe utility functions.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
Products with price greater than $300:
ID: 1, Name: Laptop, Price: $999.99
ID: 2, Name: Smartphone, Price: $499.99

Using a generic method to find a product by ID:
Found Product - ID: 2, Name: Smartphone, Price: $499.99
</code>
      </pre>

      <!-- Benefits of Using Generics -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Benefits of Using Generics</h2>
      <p class="text-base md:text-lg mb-4">
        Generics offer a multitude of advantages that make them a cornerstone of modern C# programming. Understanding these benefits can help you write more efficient, maintainable, and type-safe code.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Key Benefits:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Type Safety:</strong> Generics provide compile-time type checking, ensuring that only the specified type is used. This reduces the risk of runtime errors and eliminates the need for explicit casting.</li>
        <li><strong>Performance:</strong> By avoiding boxing and unboxing operations required by non-generic collections (which store items as <code>object</code>), generics offer better performance, especially when dealing with value types.</li>
        <li><strong>Code Reusability:</strong> Generics enable the creation of reusable components that can operate on various data types, eliminating the need to write multiple versions of the same class or method for different types.</li>
        <li><strong>Cleaner and More Readable Code:</strong> With generics, the code is more expressive and easier to understand, as the intended types are clearly specified, enhancing overall code readability.</li>
        <li><strong>Flexibility:</strong> Generics allow for the creation of versatile data structures and algorithms that can handle various types without sacrificing type safety or performance.</li>
      </ul>

      <!-- Advantages of Generics Over Non-Generic Collections -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Advantages of Generics Over Non-Generic Collections</h3>
      <p class="text-base md:text-lg mb-4">
        Prior to the introduction of generics in C# 2.0, developers relied heavily on non-generic collections such as <code>ArrayList</code> and <code>Hashtable</code>. While these collections provided flexibility by storing objects of any type, they came with significant drawbacks that generics address effectively.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Drawbacks of Non-Generic Collections:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Lack of Type Safety:</strong> Non-generic collections store items as <code>object</code>, allowing any type of object to be added. This can lead to runtime errors when retrieving items and casting them to the expected type.</li>
        <li><strong>Performance Overhead:</strong> Storing value types as <code>object</code> involves boxing (converting a value type to a reference type) and unboxing (converting back), which incurs additional memory and processing costs.</li>
        <li><strong>Code Clarity:</strong> Retrieving items from non-generic collections often requires explicit casting, which can clutter the code and obscure the intended types.</li>
        <li><strong>Limited Functionality:</strong> Non-generic collections do not provide compile-time type checking, making it harder to enforce constraints and ensuring that only specific types of objects are stored.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>How Generics Address These Issues:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Enhanced Type Safety:</strong> Generics enforce type constraints at compile-time, ensuring that only specified types can be added to collections or passed to methods. This eliminates the need for explicit casting and reduces the risk of type-related runtime errors.</li>
        <li><strong>Improved Performance:</strong> The generic <code>List&lt;T&gt;</code> avoids boxing and unboxing operations, enhancing performance, especially when dealing with large collections or frequent type conversions.</li>
        <li><strong>Cleaner Code:</strong> Generic collections and methods allow developers to work with specific types directly, resulting in more readable and maintainable code without the clutter of explicit casts.</li>
        <li><strong>Greater Flexibility and Reusability:</strong> Generics enable the creation of versatile and reusable components that can operate on a wide range of data types, promoting a more abstract and powerful programming approach.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Example: Comparing Generic and Non-Generic Collections**
      </p>
      <h4 class="text-lg md:text-xl font-semibold mb-2">Using Non-Generic Collection (ArrayList)</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using ArrayList (Non-Generic)
using System;
using System.Collections;

namespace GenericsExample
{
    public class Program
    {
        public static void Main(string[] args)
        {
            ArrayList list = new ArrayList();
            list.Add(1);
            list.Add("Two");
            list.Add(3.0);

            foreach (var item in list)
            {
                // Requires explicit casting
                if (item is int)
                {
                    int number = (int)item;
                    Console.WriteLine($"Integer: {number}");
                }
                else if (item is string)
                {
                    string text = (string)item;
                    Console.WriteLine($"String: {text}");
                }
                else if (item is double)
                {
                    double dbl = (double)item;
                    Console.WriteLine($"Double: {dbl}");
                }
            }
        }
    }
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Using Generic Collection (List&lt;T&gt;)</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using List&lt;T&gt; (Generic)
using System;
using System.Collections.Generic;

namespace GenericsExample
{
    public class Program
    {
        public static void Main(string[] args)
        {
            // Create a list of integers
            List&lt;int&gt; intList = new List&lt;int&gt;();
            intList.Add(1);
            intList.Add(2);
            intList.Add(3);

            foreach (int number in intList)
            {
                Console.WriteLine($"Integer: {number}");
            }

            // Create a list of strings
            List&lt;string&gt; stringList = new List&lt;string&gt;();
            stringList.Add("One");
            stringList.Add("Two");
            stringList.Add("Three");

            foreach (string text in stringList)
            {
                Console.WriteLine($"String: {text}");
            }
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
          <strong>ArrayList (Non-Generic):</strong> The <code>ArrayList</code> can store items of any type, but retrieving them requires explicit casting and type checking, which can lead to runtime errors and reduced code clarity.
        </li>
        <li>
          <strong>List&lt;T&gt; (Generic):</strong> The <code>List&lt;T&gt;</code> is strongly-typed, ensuring that only items of the specified type can be added. This eliminates the need for explicit casting and enhances type safety.
        </li>
        <li>
          <strong>Code Clarity and Safety:</strong> The generic version is more concise and safer, as it leverages compile-time type checking to prevent type mismatches.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Output using ArrayList:
Integer: 1
String: Two
Double: 3

// Output using List&lt;T&gt;:
Integer: 1
Integer: 2
Integer: 3
String: One
String: Two
String: Three
</code>
      </pre>

      <!-- Implementing a Generic Class or Method -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Implementing a Generic Class or Method</h2>
      <p class="text-base md:text-lg mb-4">
        To further understand the practical applications of generics, let's implement a generic stack data structure. A stack is a collection that follows the Last-In-First-Out (LIFO) principle. By making it generic, we can create stacks for any data type, ensuring type safety and reusability.
      </p>

      <!-- Example: Implementing a Generic Stack -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Implementing a Generic Stack</h3>
      <p class="text-base md:text-lg mb-4">
        Below is an implementation of a generic <code>Stack&lt;T&gt;</code> class, complete with methods to push, pop, and peek at items.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Implementing a generic Stack&lt;T&gt; class
using System;
using System.Collections.Generic;

namespace GenericsExample
{
    // Define a generic Stack class
    public class Stack&lt;T&gt;
    {
        private List&lt;T&gt; _items = new List&lt;T&gt;();

        // Push an item onto the stack
        public void Push(T item)
        {
            _items.Add(item);
            Console.WriteLine($"{item} pushed onto the stack.");
        }

        // Pop an item from the stack
        public T Pop()
        {
            if (_items.Count == 0)
            {
                throw new InvalidOperationException("The stack is empty.");
            }

            T lastItem = _items[_items.Count - 1];
            _items.RemoveAt(_items.Count - 1);
            Console.WriteLine($"{lastItem} popped from the stack.");
            return lastItem;
        }

        // Peek at the top item without removing it
        public T Peek()
        {
            if (_items.Count == 0)
            {
                throw new InvalidOperationException("The stack is empty.");
            }

            T lastItem = _items[_items.Count - 1];
            Console.WriteLine($"Top item is: {lastItem}");
            return lastItem;
        }

        // Check if the stack is empty
        public bool IsEmpty()
        {
            return _items.Count == 0;
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            // Create a stack for integers
            Stack&lt;int&gt; intStack = new Stack&lt;int&gt;();
            intStack.Push(10);
            intStack.Push(20);
            intStack.Push(30);

            intStack.Peek(); // Output: Top item is: 30
            intStack.Pop();  // Output: 30 popped from the stack.
            intStack.Pop();  // Output: 20 popped from the stack.
            intStack.Pop();  // Output: 10 popped from the stack.

            // Attempt to pop from an empty stack
            try
            {
                intStack.Pop();
            }
            catch (InvalidOperationException ex)
            {
                Console.WriteLine($"Exception: {ex.Message}");
            }

            // Create a stack for strings
            Stack&lt;string&gt; stringStack = new Stack&lt;string&gt;();
            stringStack.Push("Apple");
            stringStack.Push("Banana");
            stringStack.Push("Cherry");

            stringStack.Peek(); // Output: Top item is: Cherry
            stringStack.Pop();  // Output: Cherry popped from the stack.
            stringStack.Pop();  // Output: Banana popped from the stack.
            stringStack.Pop();  // Output: Apple popped from the stack.
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
          <strong>Stack&lt;T&gt; Class:</strong> This generic class uses a <code>List&lt;T&gt;</code> to store items, allowing it to manage any data type specified by the type parameter <code>T</code>.
        </li>
        <li>
          <strong>Push Method:</strong> Adds an item of type <code>T</code> to the top of the stack and logs the action.
        </li>
        <li>
          <strong>Pop Method:</strong> Removes and returns the top item from the stack. It throws an <code>InvalidOperationException</code> if the stack is empty, ensuring that the method handles invalid operations gracefully.
        </li>
        <li>
          <strong>Peek Method:</strong> Returns the top item without removing it, allowing you to inspect the current top of the stack.
        </li>
        <li>
          <strong>IsEmpty Method:</strong> Checks if the stack is empty, providing a convenient way to verify the stack's state.
        </li>
        <li>
          <strong>Program Class:</strong> Demonstrates the use of the generic <code>Stack&lt;T&gt;</code> class with both <code>int</code> and <code>string</code> types, highlighting the versatility and type safety of generics.
        </li>
        <li>
          <strong>Exception Handling:</strong> Shows how attempting to pop from an empty stack triggers an exception, emphasizing the importance of robust error handling in generic classes.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Sample Output:
10 pushed onto the stack.
20 pushed onto the stack.
30 pushed onto the stack.
Top item is: 30
30 popped from the stack.
20 popped from the stack.
10 popped from the stack.
Exception: The stack is empty.
Apple pushed onto the stack.
Banana pushed onto the stack.
Cherry pushed onto the stack.
Top item is: Cherry
Cherry popped from the stack.
Banana popped from the stack.
Apple popped from the stack.
</code>
      </pre>

      <!-- Benefits of Using Generics in Practice -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Benefits of Using Generics in Practice</h2>
      <p class="text-base md:text-lg mb-4">
        The practical applications of generics extend beyond simple data storage. They are integral to the implementation of collections, algorithms, and libraries that are both efficient and type-safe. Let's explore some of the real-world benefits of using generics in C#.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>1. Enhanced Type Safety:</strong> Generics ensure that the types used are consistent, catching type-related errors at compile-time rather than at runtime. This eliminates the need for explicit type casting and reduces the risk of runtime exceptions.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>2. Performance Optimization:</strong> By avoiding boxing and unboxing operations, generics improve the performance of applications, particularly when dealing with large data sets or value types.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>3. Code Reusability and Maintainability:</strong> Generics promote code reuse by allowing the same class or method to operate on different data types, reducing code duplication and enhancing maintainability.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>4. Flexibility in API Design:</strong> Generics allow for the design of flexible and versatile APIs that can handle different data types without compromising on type safety or functionality.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>5. Integration with LINQ:</strong> Language Integrated Query (LINQ) heavily relies on generics to provide type-safe querying capabilities over various data sources, enhancing data manipulation and retrieval processes.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>6. Improved Readability and Expressiveness:</strong> Generic code is often more readable and expressive, as the intended data types are clearly specified, making the codebase easier to understand and navigate.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Generics are a fundamental feature in C# that empower developers to create flexible, type-safe, and reusable components. By allowing the definition of classes and methods with type parameters, generics promote code reusability and maintainability while ensuring that type-related errors are caught at compile-time. This leads to more robust and efficient applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        Understanding how to define generic classes and methods, apply generic constraints, and leverage generics in real-world scenarios such as LINQ queries and custom data structures equips you with the tools to build scalable and maintainable software solutions. The advantages of generics over non-generic collections, including enhanced type safety, improved performance, and cleaner code, make them an indispensable part of modern C# programming.
      </p>
      <p class="text-base md:text-lg mb-6">
        As you continue to integrate generics into your C# projects, you'll discover their versatility and power in handling a wide range of programming challenges. Embrace generics to unlock the full potential of your code, ensuring that your applications are not only efficient and robust but also easy to maintain and extend in the long run.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSharpGenerics',
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
