<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Java Generics" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Generics are a powerful feature in Java that enable classes, interfaces, and methods to operate on objects of various types while providing compile-time type safety. By leveraging generics, developers can write more flexible, reusable, and maintainable code, reducing the need for type casting and minimizing runtime errors. This section delves into the fundamentals of Java Generics, exploring their syntax, benefits, and best practices through detailed explanations and practical examples.
      </p>

      <!-- What are Generics? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What are Generics?</h2>
      <p class="text-base md:text-lg mb-4">
        Generics allow you to define classes, interfaces, and methods with type parameters, which can be specified when the generic type is instantiated or invoked. This provides a way to create components that can work with any data type, enhancing code reusability and type safety.
      </p>

      <!-- Benefits of Generics -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Benefits of Generics</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Type Safety:</strong> Generics enable compile-time type checking, preventing ClassCastException at runtime.</li>
        <li><strong>Code Reusability:</strong> Write generic algorithms that can operate on different data types without code duplication.</li>
        <li><strong>Elimination of Casts:</strong> Reduce the need for explicit type casting, making the code cleaner and less error-prone.</li>
        <li><strong>Enhanced Readability:</strong> Clearer code intent by specifying the types of objects that collections and methods can work with.</li>
      </ul>

      <!-- Generic Classes -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Generic Classes</h2>
      <p class="text-base md:text-lg mb-4">
        A generic class is a class that can operate on objects of various types while providing compile-time type safety. The type parameter is specified in angle brackets (<code>&lt;T&gt;</code>) after the class name.
      </p>

      <!-- Code Example 1: Generic Class -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Generic Class Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Generic Box Class
public class Box&lt;T> {
    private T content;

    public void setContent(T content) {
        this.content = content;
    }

    public T getContent() {
        return content;
    }

    public static void main(String[] args) {
        Box&lt;String> stringBox = new Box<>();
        stringBox.setContent("Hello, Generics!");
        System.out.println(stringBox.getContent()); // Output: Hello, Generics!

        Box&lt;Integer> integerBox = new Box<>();
        integerBox.setContent(123);
        System.out.println(integerBox.getContent()); // Output: 123
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>Box</code> class is a generic class with a type parameter <code>T</code>. It can store any type of object, such as <code>String</code> or <code>Integer</code>, ensuring type safety without requiring explicit casting.
      </p>

      <!-- Generic Methods -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Generic Methods</h2>
      <p class="text-base md:text-lg mb-4">
        Generic methods are methods that introduce their own type parameters. These type parameters can be used within the method's signature and body, allowing the method to operate on various data types.
      </p>

      <!-- Code Example 2: Generic Method -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Generic Method Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Generic Method to Swap Elements
public class Utility {
    public static &lt;T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    public static void main(String[] args) {
        Integer[] numbers = {1, 2, 3, 4};
        swap(numbers, 0, 2);
        System.out.println(Arrays.toString(numbers)); // Output: [3, 2, 1, 4]

        String[] words = {"apple", "banana", "cherry"};
        swap(words, 1, 2);
        System.out.println(Arrays.toString(words)); // Output: [apple, cherry, banana]
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        The <code>swap</code> method is a generic method that can swap elements in an array of any type. The type parameter <code>T</code> allows the method to operate on arrays of different types without duplication.
      </p>

      <!-- Bounded Type Parameters -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Bounded Type Parameters</h2>
      <p class="text-base md:text-lg mb-4">
        Bounded type parameters restrict the types that can be used as arguments for a type parameter. This ensures that the type parameter adheres to certain constraints, enabling the use of specific methods and properties.
      </p>

      <!-- Code Example 3: Bounded Type Parameters -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Bounded Type Parameters Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Bounded Type Parameter with Comparable
public class MaximumFinder {
    public static &lt;T extends Comparable&lt;T>> T findMax(T a, T b, T c) {
        T max = a;
        if (b.compareTo(max) > 0) {
            max = b;
        }
        if (c.compareTo(max) > 0) {
            max = c;
        }
        return max;
    }

    public static void main(String[] args) {
        System.out.println(findMax(10, 20, 15)); // Output: 20
        System.out.println(findMax("apple", "banana", "cherry")); // Output: cherry
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Here, the type parameter <code>T</code> is bounded by the <code>Comparable</code> interface, ensuring that the elements can be compared using the <code>compareTo</code> method. This allows the <code>findMax</code> method to determine the maximum value among three elements.
      </p>

      <!-- Wildcards -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Wildcards</h2>
      <p class="text-base md:text-lg mb-4">
        Wildcards are special symbols in generics that represent an unknown type. They provide flexibility when working with generic types, especially in scenarios involving inheritance.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Unbounded Wildcards:</strong> Represent any type using <code>?</code>.</li>
        <li><strong>Upper Bounded Wildcards:</strong> Restrict to a specific type or its subclasses using <code>? extends Type</code>.</li>
        <li><strong>Lower Bounded Wildcards:</strong> Restrict to a specific type or its superclasses using <code>? super Type</code>.</li>
      </ul>

      <!-- Code Example 4: Wildcards -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Wildcards Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Using Wildcards in Methods
public class WildcardExample {
    // Unbounded Wildcard
    public static void printList(List<?> list) {
        for(Object obj : list) {
            System.out.println(obj);
        }
    }

    // Upper Bounded Wildcard
    public static void printNumbers(List<? extends Number> list) {
        for(Number num : list) {
            System.out.println(num);
        }
    }

    // Lower Bounded Wildcard
    public static void addNumbers(List<? super Integer> list) {
        list.add(10);
        list.add(20);
    }

    public static void main(String[] args) {
        List&lt;String> strings = Arrays.asList("Java", "Generics", "Tutorial");
        printList(strings);

        List&lt;Integer> integers = Arrays.asList(1, 2, 3);
        printNumbers(integers);

        List&lt;Number> numbers = new ArrayList<>();
        addNumbers(numbers);
        printNumbers(numbers); // Output includes 10 and 20
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        The <code>printList</code> method uses an unbounded wildcard, allowing it to accept lists of any type. The <code>printNumbers</code> method uses an upper bounded wildcard to accept lists of <code>Number</code> or its subclasses. The <code>addNumbers</code> method uses a lower bounded wildcard to accept lists that can hold <code>Integer</code> objects.
      </p>

      <!-- Type Inference -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Type Inference</h2>
      <p class="text-base md:text-lg mb-4">
        Type inference allows the compiler to automatically determine the type parameters based on the context, reducing verbosity and enhancing code readability.
      </p>

      <!-- Code Example 5: Type Inference -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Type Inference Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Type Inference with Generic Methods
public class TypeInferenceExample {
    // Generic Method
    public static &lt;T> T getFirstElement(List&lt;T> list) {
        return list.get(0);
    }

    public static void main(String[] args) {
        List&lt;String> names = Arrays.asList("Alice", "Bob", "Charlie");
        String firstName = getFirstElement(names); // Compiler infers T as String
        System.out.println("First Name: " + firstName); // Output: First Name: Alice
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the compiler infers the type parameter <code>T</code> as <code>String</code> based on the argument provided to the <code>getFirstElement</code> method, eliminating the need to explicitly specify the type.
      </p>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Using Generics</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when working with generics ensures that your code remains type-safe, readable, and maintainable. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use Generics to Enforce Type Safety:</strong> Always specify type parameters to prevent ClassCastException and enhance code clarity.</li>
        <li><strong>Prefer Interfaces Over Implementations:</strong> Declare variables and parameters using generic interfaces (e.g., <code>List&lt;T&gt;</code> instead of <code>ArrayList&lt;T&gt;</code>) to promote flexibility.</li>
        <li><strong>Avoid Using Raw Types:</strong> Refrain from using generic types without type parameters (e.g., <code>List</code> instead of <code>List&lt;String&gt;</code>) to maintain type safety.</li>
        <li><strong>Leverage Bounded Type Parameters:</strong> Use bounded type parameters to restrict the types that can be used with generics, enabling the use of specific methods and properties.</li>
        <li><strong>Utilize Wildcards Appropriately:</strong> Apply wildcards to provide flexibility in method parameters while maintaining type safety.</li>
        <li><strong>Minimize Type Parameter Scope:</strong> Declare type parameters at the most limited scope necessary to improve code readability and reduce complexity.</li>
        <li><strong>Document Generic Classes and Methods:</strong> Provide clear documentation to explain the purpose and constraints of generic type parameters.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Java Generics are a fundamental feature that enhance the flexibility, reusability, and type safety of your code. By understanding how to define and utilize generic classes and methods, apply bounded type parameters and wildcards, and follow best practices, you can write more robust and maintainable Java applications. Embracing generics not only reduces runtime errors but also contributes to cleaner and more expressive code, making your development process more efficient and effective.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of Java Generics, explore the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/java/generics/" class="text-blue-600 hover:underline">Java Tutorials: Generics</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/generics-in-java/" class="text-blue-600 hover:underline">GeeksforGeeks: Generics in Java</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/java-generics" class="text-blue-600 hover:underline">JavaTpoint: Java Generics</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-generics" class="text-blue-600 hover:underline">Baeldung: Guide to Java Generics</a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/java-generics-and-collections/" class="text-blue-600 hover:underline">Udemy: Java Generics and Collections Courses</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaGenerics',
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
