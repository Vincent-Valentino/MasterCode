<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Python Conditions" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Control flow statements allow you to execute certain parts of your code based on conditions. This enables your program to make decisions and perform different actions accordingly. In Python, the primary control flow statements are <code>if</code>, <code>elif</code>, and <code>else</code>.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#if-statement" class="text-blue-800 underline">The <code>if</code> Statement</a></li>
        <li><a href="#if-else-statement" class="text-blue-800 underline">The <code>if-else</code> Statement</a></li>
        <li><a href="#if-elif-else-statement" class="text-blue-800 underline">The <code>if-elif-else</code> Statement</a></li>
        <li><a href="#nested-if-statements" class="text-blue-800 underline">Nested <code>if</code> Statements</a></li>
        <li><a href="#conditional-expressions" class="text-blue-800 underline">Conditional Expressions (Ternary Operator)</a></li>
        <li><a href="#pass-statement" class="text-blue-800 underline">The <code>pass</code> Statement</a></li>
      </ul>

      <!-- The if Statement -->
      <h2 id="if-statement" class="text-xl md:text-2xl font-semibold mb-4">The <code>if</code> Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>if</code> statement is used to test a specific condition. If the condition evaluates to <code>True</code>, the block of code under the <code>if</code> statement is executed.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ ifSyntaxCode }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Let's check if a number is positive:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ positiveNumberCode }}</code></pre>
      </div>

      <!-- The if-else Statement -->
      <h2 id="if-else-statement" class="text-xl md:text-2xl font-semibold mb-4">The <code>if-else</code> Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>if-else</code> statement adds an alternative path when the <code>if</code> condition evaluates to <code>False</code>.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ ifElseSyntaxCode }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Checking if a number is positive or negative:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ positiveNegativeCode }}</code></pre>
      </div>

      <!-- The if-elif-else Statement -->
      <h2 id="if-elif-else-statement" class="text-xl md:text-2xl font-semibold mb-4">The <code>if-elif-else</code> Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>elif</code> (short for "else if") allows you to check multiple conditions sequentially. As soon as one condition is met, the corresponding block of code is executed, and the rest are skipped.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ ifElifElseSyntaxCode }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Determine if a number is positive, zero, or negative:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ numberSignCode }}</code></pre>
      </div>

      <!-- Nested if Statements -->
      <h2 id="nested-if-statements" class="text-xl md:text-2xl font-semibold mb-4">Nested <code>if</code> Statements</h2>
      <p class="text-base md:text-lg mb-4">
        You can place an <code>if</code> statement inside another <code>if</code> statement to check multiple conditions.
      </p>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Determine if a number is positive and even:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ nestedIfCode }}</code></pre>
      </div>

      <!-- Conditional Expressions (Ternary Operator) -->
      <h2 id="conditional-expressions" class="text-xl md:text-2xl font-semibold mb-4">Conditional Expressions (Ternary Operator)</h2>
      <p class="text-base md:text-lg mb-4">
        Python supports conditional expressions (also known as the ternary operator), which allow you to write <code>if-else</code> statements in a single line.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <p class="text-base md:text-lg mb-4">
        <code>value_if_true if condition else value_if_false</code>
      </p>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ ternaryOperatorCode }}</code></pre>
      </div>

      <!-- The pass Statement -->
      <h2 id="pass-statement" class="text-xl md:text-2xl font-semibold mb-4">The <code>pass</code> Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>pass</code> statement does nothing and is used when a statement is required syntactically but no code needs to be executed. It's often used as a placeholder.
      </p>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ passStatementCode }}</code></pre>
      </div>

      <!-- Tip: Indentation in Python -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <h3 class="text-lg md:text-xl font-semibold mb-2">Important Tip: Indentation in Python</h3>
        <p class="text-base md:text-lg">
          Python uses indentation (whitespace at the beginning of a line) to define code blocks. All the code inside an <code>if</code> statement must be indented consistently. Usually, 4 spaces are used for indentation.
        </p>
      </div>

      <!-- Logical Operators with Conditions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Using Logical Operators with Conditions</h2>
      <p class="text-base md:text-lg mb-4">
        You can combine conditions using logical operators like <code>and</code>, <code>or</code>, and <code>not</code>.
      </p>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Check if a number is between 1 and 10:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ logicalOperatorsCode }}</code></pre>
      </div>

      <!-- Example with 'or' Operator -->
      <p class="text-base md:text-lg mb-4">
        Check if a character is a vowel:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ vowelCheckCode }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Control flow statements like <code>if</code>, <code>elif</code>, and <code>else</code> allow your Python programs to make decisions and execute code conditionally. Understanding how to use these statements effectively is crucial for creating dynamic and responsive programs.
      </p>
      <p class="text-base md:text-lg">
        In the next section, we'll explore <strong>Loops</strong> in Python, which will enable you to execute code repeatedly based on conditions.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue"
export default {
  name: "ConditionPython",
  components: {
    Header
  },
  data() {
    return {
      ifSyntaxCode: `if condition:
    # block of code to be executed if the condition is True
`,
      positiveNumberCode: `num = 5
if num > 0:
    print("The number is positive")
`,
      ifElseSyntaxCode: `if condition:
    # block of code if condition is True
else:
    # block of code if condition is False
`,
      positiveNegativeCode: `num = -5
if num > 0:
    print("Positive")
else:
    print("Negative")
`,
      ifElifElseSyntaxCode: `if condition1:
    # code block for condition1
elif condition2:
    # code block for condition2
else:
    # code block if none of the conditions are met
`,
      numberSignCode: `num = 0
if num > 0:
    print("Positive")
elif num == 0:
    print("Zero")
else:
    print("Negative")
`,
      nestedIfCode: `num = 10
if num > 0:
    if num % 2 == 0:
        print("Positive and Even")
`,
      ternaryOperatorCode: `result = "Positive" if num > 0 else "Negative"
`,
      passStatementCode: `num = 5
if num > 0:
    pass  # Placeholder for future code
`,
      logicalOperatorsCode: `num = 5
if num > 1 and num < 10:
    print("Number is between 1 and 10")
`,
      vowelCheckCode: `char = 'a'
if char in 'aeiou':
    print("Vowel")
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