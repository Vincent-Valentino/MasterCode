<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Java Control Structure" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Control structures are essential in Java programming as they dictate the flow of execution based on specific conditions and iterations. Mastering these structures allows developers to build dynamic and efficient applications by making informed decisions and repeating tasks as needed.
      </p>

      <!-- Conditional Statements -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conditional Statements</h2>
      <p class="text-base md:text-lg mb-4">
        Conditional statements enable your program to execute certain blocks of code based on whether specific conditions are met. Java offers several conditional constructs, including <code>if</code>, <code>else if</code>, <code>else</code>, and the <code>switch</code> statement.
      </p>

      <!-- Conditional Statements Comparison Table -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Conditional Statements: Java vs. Other Languages</h3>
      <p class="text-base md:text-lg mb-4">
        Comparing Java's conditional statements with those in Python, C#, and JavaScript highlights differences in syntax and capabilities.
      </p>

      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Feature</th>
          <th class="px-4 py-2">Java</th>
          <th class="px-4 py-2">Python</th>
          <th class="px-4 py-2">C#</th>
          <th class="px-4 py-2">JavaScript</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Syntax</td>
          <td class="border px-4 py-2">Uses curly braces <code>{}</code> to define blocks.</td>
          <td class="border px-4 py-2">Uses indentation to define blocks.</td>
          <td class="border px-4 py-2">Uses curly braces <code>{}</code> to define blocks.</td>
          <td class="border px-4 py-2">Uses curly braces <code>{}</code> and sometimes parentheses <code>()</code>.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Multiple Conditions</td>
          <td class="border px-4 py-2"><code>else if</code> and <code>switch</code> statements available.</td>
          <td class="border px-4 py-2"><code>elif</code> and multiple <code>if-else</code> chains.</td>
          <td class="border px-4 py-2"><code>else if</code> and <code>switch</code> statements available.</td>
          <td class="border px-4 py-2"><code>else if</code> and <code>switch</code> statements available.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Switch Statement Features</td>
          <td class="border px-4 py-2">Can switch on integers, enums, strings, and wrapper classes.</td>
          <td class="border px-4 py-2">Limited; does not support switching on data types.</td>
          <td class="border px-4 py-2">Similar to Java with added pattern matching in newer versions.</td>
          <td class="border px-4 py-2">Enhanced with pattern matching in ES2020 and later.</td>
        </tr>
        </tbody>
      </table>

      <!-- Explanation of Conditional Statements -->
      <p class="text-base md:text-lg mb-6">
        Java's <code>if</code> and <code>else</code> statements provide a straightforward way to execute code blocks based on boolean conditions. The <code>switch</code> statement offers a more organized approach when dealing with multiple discrete values, enhancing code readability and maintainability.
      </p>

      <!-- For Loops -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">For Loops</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>for</code> loop is a fundamental control structure in Java that allows for repeated execution of a block of code. Java supports different forms of the <code>for</code> loop, making it versatile for various iteration needs.
      </p>

      <!-- For Loops Comparison Table -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">For Loops: Java vs. Other Languages</h3>
      <p class="text-base md:text-lg mb-4">
        Comparing Java's <code>for</code> loop with those in C++, Python, and JavaScript highlights its flexibility and consistency.
      </p>

      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Feature</th>
          <th class="px-4 py-2">Java</th>
          <th class="px-4 py-2">C++</th>
          <th class="px-4 py-2">Python</th>
          <th class="px-4 py-2">JavaScript</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Loop Types</td>
          <td class="border px-4 py-2">Traditional <code>for</code>, enhanced <code>for-each</code>.</td>
          <td class="border px-4 py-2">Traditional <code>for</code>, range-based <code>for</code>.</td>
          <td class="border px-4 py-2">For loops using <code>for</code>, <code>while</code>, and comprehensions.</td>
          <td class="border px-4 py-2">Traditional <code>for</code>, <code>for...in</code>, <code>for...of</code>.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Syntax Simplicity</td>
          <td class="border px-4 py-2">Consistent syntax for all <code>for</code> loop types.</td>
          <td class="border px-4 py-2">Multiple syntaxes for different loop types.</td>
          <td class="border px-4 py-2">Flexible, but syntax varies.</td>
          <td class="border px-4 py-2">Multiple syntaxes enhance flexibility.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Loop Control</td>
          <td class="border px-4 py-2">Supports <code>break</code> and <code>continue</code>.</td>
          <td class="border px-4 py-2">Supports <code>break</code> and <code>continue</code>.</td>
          <td class="border px-4 py-2">Supports <code>break</code> and <code>continue</code>.</td>
          <td class="border px-4 py-2">Supports <code>break</code> and <code>continue</code>.</td>
        </tr>
        </tbody>
      </table>

      <!-- Explanation of For Loops -->
      <p class="text-base md:text-lg mb-6">
        Java's <code>for</code> loop is highly versatile, supporting traditional counting loops as well as enhanced for-each loops for iterating over collections and arrays. This flexibility allows developers to choose the most appropriate loop type based on the specific requirements of their code.
      </p>

      <!-- Switch Statements -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Switch Statements</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>switch</code> statement in Java provides a streamlined way to execute different parts of code based on the value of an expression. It serves as an alternative to multiple <code>if-else</code> statements, enhancing code readability.
      </p>

      <!-- Switch Statements Comparison Table -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Switch Statements: Java vs. Other Languages</h3>
      <p class="text-base md:text-lg mb-4">
        Comparing Java's <code>switch</code> statement with those in C#, JavaScript, and Ruby highlights differences in functionality and syntax.
      </p>

      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Feature</th>
          <th class="px-4 py-2">Java</th>
          <th class="px-4 py-2">C#</th>
          <th class="px-4 py-2">JavaScript</th>
          <th class="px-4 py-2">Ruby</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Supported Types</td>
          <td class="border px-4 py-2">int, char, String, enums</td>
          <td class="border px-4 py-2">int, string, enums, patterns</td>
          <td class="border px-4 py-2">string, number, boolean</td>
          <td class="border px-4 py-2">anything, including ranges and patterns</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Fallthrough Behavior</td>
          <td class="border px-4 py-2">Requires explicit <code>break</code> to prevent fallthrough.</td>
          <td class="border px-4 py-2">No fallthrough by default; <code>goto case</code> to fall through.</td>
          <td class="border px-4 py-2">Allows fallthrough unless <code>break</code> is used.</td>
          <td class="border px-4 py-2">No fallthrough; <code>break</code> is implicit.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Default Case</td>
          <td class="border px-4 py-2">Uses <code>default</code> to handle unmatched cases.</td>
          <td class="border px-4 py-2">Uses <code>default</code> as the final case.</td>
          <td class="border px-4 py-2">Uses <code>default</code> as the final case.</td>
          <td class="border px-4 py-2">Uses <code>else</code> within the <code>case</code> construct.</td>
        </tr>
        </tbody>
      </table>

      <!-- Explanation of Switch Statements -->
      <p class="text-base md:text-lg mb-6">
        Java's <code>switch</code> statement evaluates an expression and executes the corresponding case block. Each case must end with a <code>break</code> statement to prevent fallthrough, ensuring that only the matching case is executed. The <code>default</code> case handles any values not explicitly matched by other cases.
      </p>

      <!-- Enhanced For Loop -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Enhanced For Loop</h2>
      <p class="text-base md:text-lg mb-4">
        The enhanced <code>for</code> loop, also known as the for-each loop, provides a simplified syntax for iterating over arrays and collections without the need for an index variable.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
    <code>
    int[] numbers = {1, 2, 3, 4, 5};
    for (int number : numbers) {
        System.out.println("Number: " + number);
    }
    </code>
      </pre>

      <!-- Explanation of Enhanced For Loop -->
      <p class="text-base md:text-lg mb-6">
        The enhanced for loop iterates over each element in the array or collection, assigning it to the loop variable in each iteration. This approach reduces boilerplate code and minimizes the risk of errors associated with index manipulation.
      </p>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when using control structures enhances code readability, maintainability, and efficiency. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Keep Conditions Simple:</strong> Avoid overly complex conditions in <code>if</code> and <code>switch</code> statements to enhance readability.
        </li>
        <li>
          <strong>Avoid Deep Nesting:</strong> Deeply nested loops and conditionals can make code difficult to follow. Consider refactoring or using helper methods to flatten the structure.
        </li>
        <li>
          <strong>Use Descriptive Variable Names:</strong> Clear and descriptive variable names improve code understandability, especially within loops and conditional statements.
        </li>
        <li>
          <strong>Prefer Enhanced For Loops:</strong> Use the enhanced for loop when iterating over collections and arrays to reduce boilerplate code and potential indexing errors.
        </li>
        <li>
          <strong>Handle All Cases in Switch Statements:</strong> Ensure that all possible cases are handled, including a <code>default</code> case to manage unexpected values.
        </li>
        <li>
          <strong>Limit the Use of <code>goto</code>:</strong> Although Java does not support <code>goto</code>, in languages that do, limit its usage to maintain clear and predictable code flow.
        </li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Mastering control structures in Java is crucial for building efficient and dynamic applications. By effectively utilizing conditional statements, loops, and switch cases, developers can create programs that respond intelligently to different scenarios and handle repetitive tasks seamlessly. Adhering to best practices ensures that your code remains clean, readable, and maintainable.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of control structures in Java, consider exploring the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html" class="text-blue-600 hover:underline">Java Tutorials: Flow Control</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/java-control-statements/" class="text-blue-600 hover:underline">GeeksforGeeks: Java Control Statements</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/java-control-statements" class="text-blue-600 hover:underline">JavaTpoint: Java Control Statements</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-switch-statements" class="text-blue-600 hover:underline">Baeldung: Java Switch Statements</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaControlStructures',
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
