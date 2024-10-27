<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Java Collections Framework" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        The Java Collections Framework is a unified architecture for representing and manipulating collections, enabling developers to work with groups of objects in a consistent and efficient manner. It provides a set of interfaces, implementations, and algorithms that simplify data handling and enhance code reusability. Understanding the Collections Framework is essential for building robust and high-performance Java applications.
      </p>

      <!-- Key Concepts of Collections Framework -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Key Concepts of the Collections Framework</h2>
      <p class="text-base md:text-lg mb-4">
        The Collections Framework is built around a few core interfaces and classes that provide various ways to store and manipulate data. The primary components include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Interfaces:</strong> Define the core functionalities and behaviors of different types of collections.</li>
        <li><strong>Implementations:</strong> Concrete classes that provide specific behaviors and performance characteristics.</li>
        <li><strong>Algorithms:</strong> Provide methods for manipulating collections, such as sorting and searching.</li>
      </ul>

      <!-- Collection Interfaces -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Collection Interfaces</h2>
      <p class="text-base md:text-lg mb-4">
        The Collections Framework is built around several key interfaces that define the contracts for various types of collections. Understanding these interfaces is crucial for selecting the appropriate collection type for your needs.
      </p>

      <!-- List of Core Interfaces -->
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Collection:</strong> The root interface that represents a group of objects, known as elements.</li>
        <li><strong>List:</strong> An ordered collection that allows duplicate elements and provides positional access.</li>
        <li><strong>Set:</strong> A collection that does not allow duplicate elements.</li>
        <li><strong>Queue:</strong> A collection designed for holding elements prior to processing, typically in a FIFO manner.</li>
        <li><strong>Deque:</strong> A double-ended queue that allows insertion and removal of elements from both ends.</li>
        <li><strong>Map:</strong> An object that maps keys to values, with no duplicate keys allowed.</li>
      </ul>

      <!-- Implementations of Collections -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Implementations of Collections</h2>
      <p class="text-base md:text-lg mb-4">
        Each collection interface has multiple implementations that offer different performance characteristics and behaviors. Selecting the right implementation is key to optimizing your application's performance and functionality.
      </p>

      <!-- List of Common Implementations -->
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>ArrayList:</strong> A resizable-array implementation of the List interface, providing fast random access and efficient iteration.</li>
        <li><strong>LinkedList:</strong> A doubly-linked list implementation of the List and Deque interfaces, offering efficient insertions and deletions.</li>
        <li><strong>HashSet:</strong> A hash table-based implementation of the Set interface, allowing for constant-time performance for basic operations.</li>
        <li><strong>TreeSet:</strong> A NavigableSet implementation based on a TreeMap, which stores elements in a sorted order.</li>
        <li><strong>PriorityQueue:</strong> An unbounded priority queue based on a priority heap, ordering elements according to their natural ordering or a provided comparator.</li>
        <li><strong>HashMap:</strong> A hash table-based implementation of the Map interface, providing constant-time performance for basic operations.</li>
        <li><strong>TreeMap:</strong> A Red-Black tree-based implementation of the Map interface, storing keys in a sorted order.</li>
      </ul>

      <!-- Iterating Over Collections -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Iterating Over Collections</h2>
      <p class="text-base md:text-lg mb-4">
        Iterating over collections efficiently is essential for performing operations on each element. Java provides several ways to iterate over collections, each with its own advantages.
      </p>

      <!-- Enhanced For Loop Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Enhanced For Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The enhanced for loop, also known as the for-each loop, provides a concise way to iterate over elements in a collection.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Iterating over an ArrayList
List&lt;String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Cherry");

for (String fruit : fruits) {
    System.out.println(fruit);
}
</code>
      </pre>

      <!-- Iterator Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Iterator</h3>
      <p class="text-base md:text-lg mb-4">
        The Iterator interface provides a way to traverse elements in a collection while allowing the removal of elements during iteration.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using an Iterator to remove elements
List&lt;Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
Iterator&lt;Integer> iterator = numbers.iterator();

while (iterator.hasNext()) {
    Integer number = iterator.next();
    if (number % 2 == 0) {
        iterator.remove();
    }
}

System.out.println(numbers); // Output: [1, 3, 5]
</code>
      </pre>

      <!-- Stream API Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Stream API</h3>
      <p class="text-base md:text-lg mb-4">
        Introduced in Java 8, the Stream API provides a functional approach to processing collections, enabling operations like filtering, mapping, and reducing in a declarative manner.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Stream API to filter and collect elements
List&lt;String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
List&lt;String> filteredNames = names.stream()
                                  .filter(name -> name.startsWith("A") || name.startsWith("C"))
                                  .collect(Collectors.toList());

System.out.println(filteredNames); // Output: [Alice, Charlie]
</code>
      </pre>

      <!-- Generics in Collections -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Generics in Collections</h2>
      <p class="text-base md:text-lg mb-4">
        Generics allow you to specify the type of objects that a collection can hold, providing type safety and eliminating the need for explicit type casting.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Generics with HashMap
Map&lt;String, Integer> studentScores = new HashMap<>();
studentScores.put("Alice", 90);
studentScores.put("Bob", 85);
studentScores.put("Charlie", 95);

// Retrieving a value without casting
int aliceScore = studentScores.get("Alice");
System.out.println("Alice's Score: " + aliceScore);
</code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when working with the Collections Framework ensures that your code is efficient, maintainable, and free of common pitfalls.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Choose the Right Collection:</strong> Select the appropriate collection type based on your specific needs, considering factors like ordering, uniqueness, and performance.</li>
        <li><strong>Leverage Interfaces:</strong> Program to interfaces rather than implementations to increase flexibility and ease of maintenance.</li>
        <li><strong>Use Generics:</strong> Utilize generics to enforce type safety and eliminate the need for casting.</li>
        <li><strong>Prefer Enhanced For Loops:</strong> Use enhanced for loops or the Stream API for cleaner and more readable iteration over collections.</li>
        <li><strong>Avoid Unnecessary Collections:</strong> Only use collections when necessary to conserve memory and improve performance.</li>
        <li><strong>Synchronize When Necessary:</strong> Ensure thread safety when working with collections in multi-threaded environments, using synchronized wrappers or concurrent collections.</li>
        <li><strong>Minimize Exposure:</strong> Keep collections encapsulated within classes to protect data integrity and prevent unintended modifications.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        The Java Collections Framework is a powerful toolset that simplifies the handling of groups of objects. By understanding its core interfaces, various implementations, and best practices, developers can write more efficient, readable, and maintainable code. Mastery of the Collections Framework is essential for any Java developer aiming to build scalable and high-performance applications.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of the Java Collections Framework, explore the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/collections/" class="text-blue-600 hover:underline">Java Tutorials: Collections Framework</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/collections-in-java-2/" class="text-blue-600 hover:underline">GeeksforGeeks: Collections in Java</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/java-collection-framework" class="text-blue-600 hover:underline">JavaTpoint: Java Collection Framework</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-collection-framework" class="text-blue-600 hover:underline">Baeldung: Java Collection Framework</a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/java-collections-framework/" class="text-blue-600 hover:underline">Udemy: Java Collections Framework Courses</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaCollectionsFramework',
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for long lines */
  overflow-x: auto;      /* Adds horizontal scroll for long code lines */
}

a {
  color: #1e40af; /* Tailwind's blue-800 */
}

h2, p , h1, h3, h4{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
