<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Python Lists" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Lists are one of the most versatile and commonly used data structures in Python. They are ordered, mutable, and allow duplicate elements. In this course, we'll explore the various operations and methods available for working with lists in Python 3.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#creating-lists" class="text-blue-800 underline">Creating Lists</a></li>
        <li><a href="#accessing-elements" class="text-blue-800 underline">Accessing List Elements</a></li>
        <li><a href="#list-operations" class="text-blue-800 underline">List Operations</a></li>
        <li><a href="#list-methods" class="text-blue-800 underline">List Methods</a></li>
        <li><a href="#list-comprehensions" class="text-blue-800 underline">List Comprehensions</a></li>
        <li><a href="#advanced-topics" class="text-blue-800 underline">Advanced Topics</a></li>
      </ul>

      <!-- Creating Lists -->
      <h2 id="creating-lists" class="text-xl md:text-2xl font-semibold mb-4">Creating Lists</h2>
      <p class="text-base md:text-lg mb-4">
        Lists in Python can be created in several ways:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ creatingListsCode }}</code></pre>
      </div>

      <!-- Accessing List Elements -->
      <h2 id="accessing-elements" class="text-xl md:text-2xl font-semibold mb-4">Accessing List Elements</h2>
      <p class="text-base md:text-lg mb-4">
        List elements can be accessed using indexing and slicing:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ accessingElementsCode }}</code></pre>
      </div>

      <!-- List Operations -->
      <h2 id="list-operations" class="text-xl md:text-2xl font-semibold mb-4">List Operations</h2>
      <p class="text-base md:text-lg mb-4">
        Python supports various operations on lists:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ listOperationsCode }}</code></pre>
      </div>

      <!-- List Methods -->
      <h2 id="list-methods" class="text-xl md:text-2xl font-semibold mb-4">List Methods</h2>
      <p class="text-base md:text-lg mb-4">
        Python provides numerous built-in methods for list manipulation:
      </p>
      <table class="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 p-2">Method</th>
            <th class="border border-gray-300 p-2">Description</th>
            <th class="border border-gray-300 p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="method in listMethods" :key="method.name">
            <td class="border border-gray-300 p-2"><code>{{ method.name }}</code></td>
            <td class="border border-gray-300 p-2">{{ method.description }}</td>
            <td class="border border-gray-300 p-2"><code>{{ method.example }}</code></td>
          </tr>
        </tbody>
      </table>

      <!-- List Comprehensions -->
      <h2 id="list-comprehensions" class="text-xl md:text-2xl font-semibold mb-4">List Comprehensions</h2>
      <p class="text-base md:text-lg mb-4">
        List comprehensions provide a concise way to create lists based on existing lists or other iterable objects:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ listComprehensionsCode }}</code></pre>
      </div>

      <!-- Advanced Topics -->
      <h2 id="advanced-topics" class="text-xl md:text-2xl font-semibold mb-4">Advanced Topics</h2>
      <p class="text-base md:text-lg mb-4">
        Some advanced topics related to Python lists include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Nested lists (lists within lists)</li>
        <li>Using lists as stacks and queues</li>
        <li>List filtering and mapping</li>
        <li>Sorting complex lists</li>
      </ul>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ advancedTopicsCode }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Lists are a fundamental data structure in Python, offering great flexibility and a wide range of operations. Understanding how to work with lists effectively is crucial for many programming tasks in Python.
      </p>
      <p class="text-base md:text-lg">
        In the next section, we'll explore <strong>Python Dictionaries</strong>, another powerful and commonly used data structure.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue"
export default {
  name: "PythonLists",
  components: {
    Header
  },
  data() {
    return {
      creatingListsCode: `# Creating lists
empty_list = []
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0, [4, 5]]
using_list_function = list("Python")
`,
      accessingElementsCode: `# Accessing list elements
fruits = ["apple", "banana", "cherry", "date"]
print(fruits[0])  # Output: apple
print(fruits[-1])  # Output: date
print(fruits[1:3])  # Output: ['banana', 'cherry']
`,
      listOperationsCode: `# List operations
list1 = [1, 2, 3]
list2 = [4, 5, 6]
concatenated = list1 + list2  # [1, 2, 3, 4, 5, 6]
repeated = list1 * 3  # [1, 2, 3, 1, 2, 3, 1, 2, 3]
length = len(list1)  # 3
exists = 2 in list1  # True
`,
      listComprehensionsCode: `# List comprehensions
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
`,
      advancedTopicsCode: `# Nested lists
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1][1])  # Output: 5

# Using list as a stack
stack = [1, 2, 3]
stack.append(4)  # Push
stack.pop()  # Pop

# List filtering and mapping
numbers = [1, 2, 3, 4, 5]
odds = list(filter(lambda x: x % 2 != 0, numbers))
squared = list(map(lambda x: x**2, numbers))

# Sorting complex lists
people = [("John", 25), ("Jane", 30), ("Mike", 22)]
sorted_people = sorted(people, key=lambda x: x[1])
`,
      listMethods: [
        { name: 'append(x)', description: 'Add an element to the end of the list', example: 'fruits.append("orange")' },
        { name: 'extend(iterable)', description: 'Extend the list by appending elements from an iterable', example: 'fruits.extend(["grape", "kiwi"])' },
        { name: 'insert(i, x)', description: 'Insert an element at a given position', example: 'fruits.insert(1, "mango")' },
        { name: 'remove(x)', description: 'Remove the first occurrence of an element', example: 'fruits.remove("banana")' },
        { name: 'pop([i])', description: 'Remove and return the element at a given position', example: 'fruits.pop(2)' },
        { name: 'clear()', description: 'Remove all elements from the list', example: 'fruits.clear()' },
        { name: 'index(x[, start[, end]])', description: 'Return the index of the first occurrence of an element', example: 'fruits.index("cherry")' },
        { name: 'count(x)', description: 'Return the number of occurrences of an element', example: 'fruits.count("apple")' },
        { name: 'sort(key=None, reverse=False)', description: 'Sort the list in-place', example: 'fruits.sort()' },
        { name: 'reverse()', description: 'Reverse the elements of the list in-place', example: 'fruits.reverse()' },
        { name: 'copy()', description: 'Return a shallow copy of the list', example: 'new_fruits = fruits.copy()' },
      ],
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