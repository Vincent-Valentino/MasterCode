<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-blue-600 rounded-t-xl p-4">
      <img src="/python/logo.png" alt="Python Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-yellow-400">Python Variables and Data Types</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction to Variables -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What Are Variables?</h2>
      <p class="text-base md:text-lg mb-6">
        In Python, a <span class="font-semibold">variable</span> acts like a labeled box that stores information. Variables allow you to save data such as numbers, text, or more complex structures, which you can reuse throughout your program. Think of variables as containers for storing data values.
      </p>

      <!-- Assigning Values to Variables -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Assigning Values to Variables</h2>
      <p class="text-base md:text-lg mb-4">
        To assign a value to a variable, use the <code class="bg-gray-200 rounded px-1">=</code> operator. The syntax is straightforward:
      </p>
      <p class="text-base md:text-lg mb-6">
        <code class="bg-gray-100 rounded px-2 py-1">variable_name = value</code>
      </p>

      <!-- Example Code -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ pythonCode }}</code></pre>
      </div>

      <!-- Breaking Down the Example -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Breaking Down the Example</h2>
      <p class="text-base md:text-lg mb-4">
        In the code above, we've created four variables, each storing a different type of data:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">name</span>: A string that stores text data, e.g., <code class="bg-gray-100 rounded px-1">"James"</code>.</li>
        <li><span class="font-semibold">age</span>: An integer that stores whole numbers, e.g., <code class="bg-gray-100 rounded px-1">17</code>.</li>
        <li><span class="font-semibold">weight</span>: A float that stores decimal numbers, e.g., <code class="bg-gray-100 rounded px-1">60.8</code>.</li>
        <li><span class="font-semibold">is_student</span>: A boolean that represents logical values, e.g., <code class="bg-gray-100 rounded px-1">True</code>.</li>
      </ul>

      <!-- Understanding Data Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Data Types</h2>
      <p class="text-base md:text-lg mb-4">
        Data types define the kind of data a variable can hold. Python has several built-in data types that allow you to work with different kinds of information:
      </p>

      <!-- Data Types Table -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-base md:text-lg border-collapse">
          <thead>
            <tr class="bg-blue-200">
              <th class="border px-4 py-2">Data Type</th>
              <th class="border px-4 py-2">Description</th>
              <th class="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2">String (<code>str</code>)</td>
              <td class="border px-4 py-2">Textual data enclosed in quotes.</td>
              <td class="border px-4 py-2"><code>"Hello, World!"</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2">Integer (<code>int</code>)</td>
              <td class="border px-4 py-2">Whole numbers, positive or negative.</td>
              <td class="border px-4 py-2"><code>42</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2">Float (<code>float</code>)</td>
              <td class="border px-4 py-2">Numbers with decimal points.</td>
              <td class="border px-4 py-2"><code>3.14</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2">Boolean (<code>bool</code>)</td>
              <td class="border px-4 py-2">Logical values representing truthiness.</td>
              <td class="border px-4 py-2"><code>True</code> or <code>False</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Why Data Types Matter -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Are Data Types Important?</h2>
      <p class="text-base md:text-lg mb-6">
        Understanding data types is essential because they determine what operations you can perform on the data. For instance:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Strings can be concatenated (combined) or sliced.</li>
        <li>Integers and floats can be used in mathematical calculations.</li>
        <li>Booleans are used in conditional statements and logical operations.</li>
      </ul>

      <!-- Advanced Data Types -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Advanced Data Types</h2>
      <p class="text-base md:text-lg mb-4">
        Python also offers advanced data types to store collections of data:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">List</span>: An ordered, mutable collection of items. Example: <code class="bg-gray-100 rounded px-1">[1, 2, 3]</code></li>
        <li><span class="font-semibold">Tuple</span>: An ordered, immutable collection of items. Example: <code class="bg-gray-100 rounded px-1">(1, 2, 3)</code></li>
        <li><span class="font-semibold">Dictionary</span>: A collection of key-value pairs. Example: <code class="bg-gray-100 rounded px-1">{"name": "Alice", "age": 30}</code></li>
        <li><span class="font-semibold">Set</span>: An unordered collection of unique items. Example: <code class="bg-gray-100 rounded px-1">{1, 2, 3}</code></li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        These data types allow you to handle more complex data structures and will be covered in detail in future lessons.
      </p>

      <!-- Practical Example -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Practical Example</h2>
      <p class="text-base md:text-lg mb-4">
        Let's see how variables and data types work together in a simple program:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python"># Personal Information
first_name = "Emma"
last_name = "Johnson"
age = 28
height_cm = 165.5
is_employed = True

# Displaying the Information
print("Name:", first_name, last_name)
print("Age:", age)
print("Height (cm):", height_cm)
print("Employed:", is_employed)
</code></pre>
      </div>
      <p class="text-base md:text-lg mb-6">
        In this example, we're storing personal details using appropriate data types and then printing them out. This demonstrates how variables can be used to manage and display information.
      </p>

      <!-- Try It Yourself -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Try It Yourself!</h2>
      <p class="text-base md:text-lg mb-6">
        Open your Python interpreter or an online editor and try creating your own variables. Assign different data types and print them out to see how they work. Experimenting is a great way to learn!
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Variables and data types are fundamental concepts in Python programming. They form the building blocks for all your future code. Understanding how to use them effectively will make your programming journey much smoother.
      </p>
      <p class="text-base md:text-lg">
        In the next lesson, we'll explore how to perform operations on these data types and introduce control flow in your programs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VariablesAndDataTypes',
  data() {
    return {
pythonCode: `# Declaring Variables
name = "James"     # String type
age = 17           # Integer type
weight = 60.8      # Float type
is_student = True  # Boolean type

# Printing the values
print(name)
print(age)
print(weight)
print(is_student)
`,
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