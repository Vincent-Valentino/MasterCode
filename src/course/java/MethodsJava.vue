<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Java Methods" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Methods are fundamental building blocks in Java that allow you to perform actions, return values, and organize code into reusable blocks. Understanding how to define and utilize methods effectively is essential for writing clean, efficient, and maintainable Java applications.
      </p>

      <!-- What are Methods? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What are Methods?</h2>
      <p class="text-base md:text-lg mb-4">
        A method in Java is a collection of statements that are grouped together to perform an operation. Methods help in breaking down complex problems into smaller, manageable tasks, promoting code reusability and modularity.
      </p>

      <!-- Declaring Methods -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Declaring Methods</h2>
      <p class="text-base md:text-lg mb-4">
        To declare a method in Java, you need to specify the access modifier, return type, method name, and parameters (if any). Here's the basic syntax:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
public int add(int a, int b) {
    return a + b;
}
</code>
      </pre>

      <!-- Components of a Method -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Components of a Method</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Access Modifier:</strong> Determines the visibility of the method (e.g., <code>public</code>, <code>private</code>).</li>
        <li><strong>Return Type:</strong> Specifies the type of value the method returns. Use <code>void</code> if the method does not return a value.</li>
        <li><strong>Method Name:</strong> Follows naming conventions, typically using camelCase.</li>
        <li><strong>Parameters:</strong> Input values passed to the method, defined within parentheses.</li>
      </ul>

      <!-- Method Overloading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Method Overloading</h2>
      <p class="text-base md:text-lg mb-4">
        Method overloading allows multiple methods to have the same name but different parameters within the same class. It enhances code readability and flexibility by enabling methods to handle different types or numbers of inputs.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
public int add(int a, int b) {
    return a + b;
}

public double add(double a, double b) {
    return a + b;
}
</code>
      </pre>

      <!-- Static vs. Instance Methods -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Static vs. Instance Methods</h2>
      <p class="text-base md:text-lg mb-4">
        In Java, methods can be categorized as static or instance methods based on how they are accessed and utilized.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Static Methods:</strong> Belong to the class and can be called without creating an instance of the class. Defined using the <code>static</code> keyword.</li>
        <li><strong>Instance Methods:</strong> Belong to an instance of a class and require creating an object to be invoked.</li>
      </ul>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Static method
public static void displayMessage() {
    System.out.println("Hello from a static method!");
}

// Instance method
public void displayName(String name) {
    System.out.println("Hello, " + name + "!");
}
</code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Using Methods</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use Meaningful Names:</strong> Choose descriptive method names that clearly indicate their functionality.</li>
        <li><strong>Keep Methods Short and Focused:</strong> Each method should perform a single task or responsibility.</li>
        <li><strong>Limit Parameters:</strong> Reduce the number of parameters to enhance readability and maintainability.</li>
        <li><strong>Use Appropriate Access Modifiers:</strong> Restrict method access based on necessity to encapsulate and protect data.</li>
        <li><strong>Document Methods:</strong> Provide clear documentation and comments to explain complex logic or behaviors.</li>
        <li><strong>Avoid Side Effects:</strong> Methods should avoid unintended changes to the state of objects or external systems.</li>
        <li><strong>Leverage Method Overloading Judiciously:</strong> Use overloading to enhance flexibility without causing confusion.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Mastering methods in Java is crucial for building organized and efficient applications. By understanding how to declare methods, utilize overloading, and distinguish between static and instance methods, you can write code that is both reusable and maintainable. Adhering to best practices ensures that your methods contribute positively to the overall structure and readability of your codebase.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of methods in Java, consider exploring the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html" class="text-blue-600 hover:underline">Java Tutorials: Methods</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/method-overloading-in-java/" class="text-blue-600 hover:underline">GeeksforGeeks: Method Overloading in Java</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/static-method-in-java" class="text-blue-600 hover:underline">JavaTpoint: Static Methods in Java</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-static-vs-instance-methods" class="text-blue-600 hover:underline">Baeldung: Static vs Instance Methods in Java</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaMethods',
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

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
