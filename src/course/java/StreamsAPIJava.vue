<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Java Streams API" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        The Java Streams API, introduced in Java 8, revolutionizes the way developers process collections of data. It provides a functional approach to handling sequences of elements, enabling operations like filtering, mapping, and reducing to be performed in a declarative and concise manner. Mastering the Streams API is essential for writing efficient and readable Java code.
      </p>

      <!-- What are Streams? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What are Streams?</h2>
      <p class="text-base md:text-lg mb-4">
        Streams represent a sequence of elements supporting sequential and parallel aggregate operations. Unlike collections, streams do not store data. Instead, they convey elements from a source (like a collection) through a pipeline of computational operations.
      </p>

      <!-- Creating Streams -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Creating Streams</h2>
      <p class="text-base md:text-lg mb-4">
        Streams can be created from various data sources, including collections, arrays, and I/O channels. Here are some common ways to create streams:
      </p>

      <!-- Code Example 1: Creating a Stream from a Collection -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating a Stream from a Collection</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>// Creating a Stream from a List
List&lt;String> names = Arrays.asList("Alice", "Bob", "Charlie", "Diana");
Stream&lt;String> nameStream = names.stream();
</code>
      </pre>

      <!-- Code Example 2: Creating a Stream from an Array -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating a Stream from an Array</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Creating a Stream from an Array
String[] namesArray = {"Eve", "Frank", "Grace", "Heidi"};
Stream&lt;String> arrayStream = Arrays.stream(namesArray);</code></pre>

      <!-- Intermediate Operations -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Intermediate Operations</h2>
      <p class="text-base md:text-lg mb-4">
        Intermediate operations are operations that transform a stream into another stream. They are lazy, meaning they are not executed until a terminal operation is invoked. Common intermediate operations include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>filter:</strong> Selects elements that match a given predicate.</li>
        <li><strong>map:</strong> Transforms each element using a provided function.</li>
        <li><strong>sorted:</strong> Sorts the elements in natural or specified order.</li>
        <li><strong>distinct:</strong> Removes duplicate elements.</li>
        <li><strong>limit:</strong> Truncates the stream to a specified size.</li>
      </ul>

      <!-- Code Example 3: Using filter and map -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using filter and map</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Filtering and Mapping a Stream
List&lt;String> names = Arrays.asList("Alice", "Bob", "Charlie", "Diana");
List&lt;String> filteredNames = names.stream()
                                  .filter(name -> name.startsWith("C"))
                                  .map(String::toUpperCase)
                                  .collect(Collectors.toList());

System.out.println(filteredNames); // Output: [CHARLIE]
</code>
      </pre>

      <!-- Terminal Operations -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Terminal Operations</h2>
      <p class="text-base md:text-lg mb-4">
        Terminal operations produce a result or a side-effect and mark the end of the stream pipeline. Once a terminal operation is invoked, the stream is consumed and cannot be used further. Common terminal operations include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>collect:</strong> Accumulates elements into a collection or another form.</li>
        <li><strong>forEach:</strong> Performs an action for each element.</li>
        <li><strong>reduce:</strong> Combines elements to produce a single result.</li>
        <li><strong>count:</strong> Returns the number of elements.</li>
        <li><strong>anyMatch, allMatch, noneMatch:</strong> Checks for elements matching a predicate.</li>
      </ul>

      <!-- Code Example 4: Using collect -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using collect</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Collecting Stream Elements into a List
List&lt;Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List&lt;Integer> squaredNumbers = numbers.stream()
                                     .map(n -> n * n)
                                     .collect(Collectors.toList());

System.out.println(squaredNumbers); // Output: [1, 4, 9, 16, 25]
</code>
      </pre>

      <!-- Parallel Streams -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Parallel Streams</h2>
      <p class="text-base md:text-lg mb-4">
        Parallel streams allow you to perform operations concurrently, leveraging multi-core processors to improve performance for large datasets. By invoking the `parallelStream()` method instead of `stream()`, streams can process elements in parallel.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Using Parallel Streams
List&lt;Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
int sum = numbers.parallelStream()
                 .filter(n -> n % 2 == 0)
                 .mapToInt(Integer::intValue)
                 .sum();

System.out.println("Sum of even numbers: " + sum); // Output: Sum of even numbers: 30
</code>
      </pre>

      <!-- Code Example 5: Using reduce -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using reduce</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Reducing Stream Elements to a Single Value
List&lt;String> words = Arrays.asList("Java", "Streams", "API");
Optional&lt;String> concatenated = words.stream()
                                     .reduce((a, b) -> a + " " + b);

concatenated.ifPresent(System.out::println); // Output: Java Streams API
</code>
      </pre>

      <!-- Code Example 6: Using anyMatch -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using anyMatch</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Checking if Any Element Matches a Condition
List&lt;String> names = Arrays.asList("Alice", "Bob", "Charlie", "Diana");
boolean hasCharlie = names.stream()
                           .anyMatch(name -> name.equals("Charlie"));

System.out.println("Contains Charlie? " + hasCharlie); // Output: Contains Charlie? true
</code>
      </pre>

      <!-- Code Example 7: Using forEach -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using forEach</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Performing an Action on Each Element
List&lt;String> fruits = Arrays.asList("Apple", "Banana", "Cherry");
fruits.stream()
      .forEach(fruit -> System.out.println("Fruit: " + fruit));
</code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Using Streams</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when working with the Streams API ensures that your code remains efficient, readable, and maintainable. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Prefer Stream Over Loops:</strong> Use streams for operations that can benefit from a functional approach, enhancing readability and conciseness.</li>
        <li><strong>Limit Intermediate Operations:</strong> Avoid excessive chaining of intermediate operations to prevent performance overhead.</li>
        <li><strong>Use Parallel Streams Judiciously:</strong> While parallel streams can improve performance, they may introduce complexity and overhead. Use them only when processing large datasets.</li>
        <li><strong>Leverage Method References:</strong> Use method references (e.g., `String::toUpperCase`) for cleaner and more readable code.</li>
        <li><strong>Avoid Side Effects:</strong> Streams are designed for functional-style operations. Avoid modifying external state within stream operations to maintain predictability.</li>
        <li><strong>Choose Appropriate Collectors:</strong> Utilize built-in collectors like `Collectors.toList()`, `Collectors.toSet()`, or create custom collectors as needed.</li>
        <li><strong>Handle Optional Results:</strong> When using operations like `findFirst()` or `reduce()`, handle the `Optional` results appropriately to avoid `NoSuchElementException`.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        The Java Streams API offers a powerful and expressive way to process collections of data. By embracing a functional programming style, streams enable developers to write more concise, readable, and efficient code. Understanding how to create streams, apply intermediate and terminal operations, and follow best practices will empower you to leverage the full potential of the Streams API in your Java applications.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of the Java Streams API, explore the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/collections/streams/" class="text-blue-600 hover:underline">Java Tutorials: Streams</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/stream-in-java/" class="text-blue-600 hover:underline">GeeksforGeeks: Stream in Java</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/java-stream-api" class="text-blue-600 hover:underline">JavaTpoint: Java Stream API</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-8-streams" class="text-blue-600 hover:underline">Baeldung: Guide to Java 8 Streams</a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/java-streams-api/" class="text-blue-600 hover:underline">Udemy: Java Streams API Courses</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaStreamsAPI',
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
</style>
