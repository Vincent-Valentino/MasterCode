<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Python Loops" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Loops allow you to execute a block of code repeatedly, which is essential for tasks that require iteration, such as processing items in a list or performing an action until a condition is met. In Python, the two primary looping constructs are the <code>for</code> loop and the <code>while</code> loop.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#for-loop" class="text-blue-800 underline">The <code>for</code> Loop</a></li>
        <li><a href="#while-loop" class="text-blue-800 underline">The <code>while</code> Loop</a></li>
        <li><a href="#loop-control-statements" class="text-blue-800 underline">Loop Control Statements</a></li>
        <ul class="list-disc list-inside ml-6">
          <li><a href="#break-statement" class="text-blue-800 underline">The <code>break</code> Statement</a></li>
          <li><a href="#continue-statement" class="text-blue-800 underline">The <code>continue</code> Statement</a></li>
          <li><a href="#else-in-loops" class="text-blue-800 underline">The <code>else</code> Clause in Loops</a></li>
        </ul>
        <li><a href="#nested-loops" class="text-blue-800 underline">Nested Loops</a></li>
        <li><a href="#looping-techniques" class="text-blue-800 underline">Looping Techniques</a></li>
      </ul>

      <!-- The for Loop -->
      <h2 id="for-loop" class="text-xl md:text-2xl font-semibold mb-4">The <code>for</code> Loop</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>for</code> loop is used for iterating over a sequence (such as a list, tuple, string, or range). It repeats a block of code for each item in the sequence.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ forLoopSyntaxCode }}</code></pre>
      </div>

      <!-- Example: Iterating Over a List -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Iterating Over a List</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ iterateListCode }}</code></pre>
      </div>

      <!-- Using the range() Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using the <code>range()</code> Function</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>range()</code> function generates a sequence of numbers, which is useful for looping a specific number of times.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ rangeFunctionCode }}</code></pre>
      </div>

      <!-- The while Loop -->
      <h2 id="while-loop" class="text-xl md:text-2xl font-semibold mb-4">The <code>while</code> Loop</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>while</code> loop repeatedly executes a block of code as long as a given condition is <code>True</code>.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ whileLoopSyntaxCode }}</code></pre>
      </div>

      <!-- Example: Countdown -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Countdown</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ countdownCode }}</code></pre>
      </div>

      <!-- Loop Control Statements -->
      <h2 id="loop-control-statements" class="text-xl md:text-2xl font-semibold mb-4">Loop Control Statements</h2>
      <p class="text-base md:text-lg mb-4">
        Loop control statements change the execution from its normal sequence. Python supports the following control statements:
      </p>

      <!-- The break Statement -->
      <h3 id="break-statement" class="text-lg md:text-xl font-semibold mb-2">The <code>break</code> Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>break</code> statement terminates the loop immediately and transfers execution to the statement after the loop.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ breakStatementCode }}</code></pre>
      </div>

      <!-- The continue Statement -->
      <h3 id="continue-statement" class="text-lg md:text-xl font-semibold mb-2">The <code>continue</code> Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>continue</code> statement skips the current iteration and moves to the next iteration of the loop.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ continueStatementCode }}</code></pre>
      </div>

      <!-- The else Clause in Loops -->
      <h3 id="else-in-loops" class="text-lg md:text-xl font-semibold mb-2">The <code>else</code> Clause in Loops</h3>
      <p class="text-base md:text-lg mb-4">
        An <code>else</code> clause can be used with loops. The <code>else</code> block is executed when the loop is exhausted (for <code>for</code> loops) or the condition becomes false (for <code>while</code> loops), but not when the loop is terminated by a <code>break</code> statement.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ elseInLoopCode }}</code></pre>
      </div>

      <!-- Nested Loops -->
      <h2 id="nested-loops" class="text-xl md:text-2xl font-semibold mb-4">Nested Loops</h2>
      <p class="text-base md:text-lg mb-4">
        You can use one or more loops inside another loop. This is called nesting. The inner loop is executed completely for each iteration of the outer loop.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ nestedLoopsCode }}</code></pre>
      </div>

      <!-- Looping Techniques -->
      <h2 id="looping-techniques" class="text-xl md:text-2xl font-semibold mb-4">Looping Techniques</h2>
      <p class="text-base md:text-lg mb-4">
        Python provides several techniques to loop through data structures more efficiently.
      </p>

      <!-- Enumerate Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>enumerate()</code></h3>
      <p class="text-base md:text-lg mb-4">
        The <code>enumerate()</code> function adds a counter to an iterable and returns it as an <code>enumerate</code> object.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ enumerateFunctionCode }}</code></pre>
      </div>

      <!-- Zip Function -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>zip()</code></h3>
      <p class="text-base md:text-lg mb-4">
        The <code>zip()</code> function combines multiple iterables into a single iterable of tuples.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ zipFunctionCode }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Loops are fundamental in Python programming, allowing you to execute code repeatedly based on conditions or over sequences. Understanding how to use loops effectively is crucial for tasks like data processing, automation, and algorithm implementation.
      </p>
      <p class="text-base md:text-lg">
        In the next section, we'll explore <strong>Functions in Python</strong>, which will enable you to create reusable blocks of code.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue"
export default {
  name: "PythonLoops",
  components: {
    Header
  },
  data() {
    return {
      forLoopSyntaxCode: `# Basic for loop in Python
for item in sequence:
    # Code block to execute
    print(item)
`,
      iterateListCode: `# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
`,
      rangeFunctionCode: `# Using range() in a for loop
for i in range(5):
    print(i)  # Prints 0 to 4
`,
      whileLoopSyntaxCode: `# Basic while loop in Python
while condition:
    # Code block to execute
    print("Looping")
`,
      countdownCode: `# Countdown using while loop
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blastoff!")
`,
      breakStatementCode: `# Using break in a loop
for i in range(10):
    if i == 5:
        break  # Exit the loop
    print(i)
`,
      continueStatementCode: `# Using continue in a loop
for i in range(10):
    if i % 2 == 0:
        continue  # Skip even numbers
    print(i)  # Only prints odd numbers
`,
      elseInLoopCode: `# else clause in a loop
for i in range(5):
    print(i)
else:
    print("Loop completed!")
`,
      nestedLoopsCode: `# Nested loops example
for i in range(3):
    for j in range(3):
        print(i, j)
`,
      enumerateFunctionCode: `# Using enumerate in a loop
names = ["John", "Jane", "Doe"]
for index, name in enumerate(names):
    print(index, name)
`,
      zipFunctionCode: `# Using zip() to combine iterables
names = ["John", "Jane", "Doe"]
ages = [28, 34, 40]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
`,
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