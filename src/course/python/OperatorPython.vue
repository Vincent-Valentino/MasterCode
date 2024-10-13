<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-blue-600 rounded-t-xl p-4">
      <img src="/python/logo.png" alt="Python Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Operators and Expressions in Python</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Operators are special symbols in Python that perform operations on variables and values. They form the backbone of most programming tasks, allowing you to manipulate data and variables to perform calculations, comparisons, and logical operations.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#arithmetic-operators" class="text-blue-800 underline">Arithmetic Operators</a></li>
        <li><a href="#assignment-operators" class="text-blue-800 underline">Assignment Operators</a></li>
        <li><a href="#comparison-operators" class="text-blue-800 underline">Comparison Operators</a></li>
        <li><a href="#logical-operators" class="text-blue-800 underline">Logical Operators</a></li>
        <li><a href="#bitwise-operators" class="text-blue-800 underline">Bitwise Operators</a></li>
        <li><a href="#membership-operators" class="text-blue-800 underline">Membership Operators</a></li>
        <li><a href="#identity-operators" class="text-blue-800 underline">Identity Operators</a></li>
        <li><a href="#operator-precedence" class="text-blue-800 underline">Operator Precedence</a></li>
      </ul>

      <!-- Arithmetic Operators -->
      <h2 id="arithmetic-operators" class="text-xl md:text-2xl font-semibold mb-4">Arithmetic Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Arithmetic operators are used to perform mathematical operations like addition, subtraction, multiplication, etc.
      </p>

      <!-- Arithmetic Operators Table -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-base md:text-lg border-collapse">
          <thead>
            <tr class="bg-blue-200">
              <th class="border px-4 py-2">Operator</th>
              <th class="border px-4 py-2">Description</th>
              <th class="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>+</code></td>
              <td class="border px-4 py-2">Addition</td>
              <td class="border px-4 py-2"><code>a + b</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>-</code></td>
              <td class="border px-4 py-2">Subtraction</td>
              <td class="border px-4 py-2"><code>a - b</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>*</code></td>
              <td class="border px-4 py-2">Multiplication</td>
              <td class="border px-4 py-2"><code>a * b</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>/</code></td>
              <td class="border px-4 py-2">Division</td>
              <td class="border px-4 py-2"><code>a / b</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>%</code></td>
              <td class="border px-4 py-2">Modulus (Remainder)</td>
              <td class="border px-4 py-2"><code>a % b</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>//</code></td>
              <td class="border px-4 py-2">Floor Division</td>
              <td class="border px-4 py-2"><code>a // b</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>**</code></td>
              <td class="border px-4 py-2">Exponentiation</td>
              <td class="border px-4 py-2"><code>a ** b</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Examples of Arithmetic Operators -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Examples</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ ArithmeticOperator }}</code></pre>
      </div>

      <!-- Tip: Using Underscores in Numeric Literals -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <h3 class="text-lg md:text-xl font-semibold mb-2">Tip: Readable Large Numbers</h3>
        <p class="text-base md:text-lg">
          You can use underscores to make large numbers more readable:
          <code class="bg-gray-100 rounded px-1">amount = 1_000_000</code>. Python will ignore the underscores.
        </p>
      </div>

      <!-- Assignment Operators -->
      <h2 id="assignment-operators" class="text-xl md:text-2xl font-semibold mb-4">Assignment Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Assignment operators are used to assign values to variables. They can also combine assignment with an arithmetic operation.
      </p>

      <!-- Assignment Operators Table -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-base md:text-lg border-collapse">
          <thead>
            <tr class="bg-blue-200">
              <th class="border px-4 py-2">Operator</th>
              <th class="border px-4 py-2">Equivalent To</th>
              <th class="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>=</code></td>
              <td class="border px-4 py-2">Simple Assignment</td>
              <td class="border px-4 py-2"><code>a = 5</code></td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>+=</code></td>
              <td class="border px-4 py-2"><code>a = a + b</code></td>
              <td class="border px-4 py-2"><code>a += b</code></td>
            </tr>
            <!-- Continue with other assignment operators -->
            <!-- ... -->
          </tbody>
        </table>
      </div>

      <!-- Examples of Assignment Operators -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Examples</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ AssignmentOperator }}</code></pre>
      </div>

      <!-- Comparison Operators -->
      <h2 id="comparison-operators" class="text-xl md:text-2xl font-semibold mb-4">Comparison Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Comparison operators are used to compare two values. They return a boolean value: <code>True</code> or <code>False</code>.
      </p>

      <!-- Comparison Operators Table -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-base md:text-lg border-collapse">
          <thead>
            <tr class="bg-blue-200">
              <th class="border px-4 py-2">Operator</th>
              <th class="border px-4 py-2">Description</th>
              <th class="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>==</code></td>
              <td class="border px-4 py-2">Equal to</td>
              <td class="border px-4 py-2"><code>a == b</code></td>
            </tr>
            <!-- Continue with other comparison operators -->
            <!-- ... -->
          </tbody>
        </table>
      </div>

      <!-- Examples of Comparison Operators -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Examples</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ ComparasionOperator }}</code></pre>
      </div>


      <!-- Logical Operators -->
      <h2 id="logical-operators" class="text-xl md:text-2xl font-semibold mb-4">Logical Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Logical operators are used to combine conditional statements. The result of a logical operation is a boolean value.
      </p>

      <!-- Logical Operators Table -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-base md:text-lg border-collapse">
          <thead>
            <tr class="bg-blue-200">
              <th class="border px-4 py-2">Operator</th>
              <th class="border px-4 py-2">Description</th>
              <th class="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>and</code></td>
              <td class="border px-4 py-2">Returns True if both statements are true</td>
              <td class="border px-4 py-2"><code>a > b and b > 0</code></td>
            </tr>
            <!-- Continue with other logical operators -->
            <!-- ... -->
          </tbody>
        </table>
      </div>

      <!-- Examples of Logical Operators -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Examples</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ LogicalOperator }}</code></pre>
      </div>

      <!-- Tip: Short-Circuit Evaluation -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <h3 class="text-lg md:text-xl font-semibold mb-2">Tip: Short-Circuit Evaluation</h3>
        <p class="text-base md:text-lg">
          Python uses short-circuit evaluation for logical operators. In an <code>and</code> operation, if the first condition is False, Python won't check the second condition.
        </p>
      </div>

      <!-- Bitwise Operators -->
      <h2 id="bitwise-operators" class="text-xl md:text-2xl font-semibold mb-4">Bitwise Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Bitwise operators perform operations on the binary representations of integers. They are often used in low-level programming, such as working with hardware or optimizing performance.
      </p>

      <!-- Bitwise Operators Table -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-base md:text-lg border-collapse">
          <thead>
            <tr class="bg-blue-200">
              <th class="border px-4 py-2">Operator</th>
              <th class="border px-4 py-2">Name</th>
              <th class="border px-4 py-2">Description</th>
              <th class="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <!-- Bitwise AND -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>&amp;</code></td>
              <td class="border px-4 py-2">Bitwise AND</td>
              <td class="border px-4 py-2">Sets each bit to 1 if both bits are 1</td>
              <td class="border px-4 py-2"><code>a &amp; b</code></td>
            </tr>
            <!-- Bitwise OR -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>|</code></td>
              <td class="border px-4 py-2">Bitwise OR</td>
              <td class="border px-4 py-2">Sets each bit to 1 if one of two bits is 1</td>
              <td class="border px-4 py-2"><code>a | b</code></td>
            </tr>
            <!-- Bitwise XOR -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>^</code></td>
              <td class="border px-4 py-2">Bitwise XOR</td>
              <td class="border px-4 py-2">Sets each bit to 1 if only one of two bits is 1</td>
              <td class="border px-4 py-2"><code>a ^ b</code></td>
            </tr>
            <!-- Bitwise NOT -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>~</code></td>
              <td class="border px-4 py-2">Bitwise NOT</td>
              <td class="border px-4 py-2">Inverts all the bits</td>
              <td class="border px-4 py-2"><code>~a</code></td>
            </tr>
            <!-- Left Shift -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>&lt;&lt;</code></td>
              <td class="border px-4 py-2">Left Shift</td>
              <td class="border px-4 py-2">Shifts bits left, adding zeros on the right</td>
              <td class="border px-4 py-2"><code>a &lt;&lt; n</code></td>
            </tr>
            <!-- Right Shift -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>&gt;&gt;</code></td>
              <td class="border px-4 py-2">Right Shift</td>
              <td class="border px-4 py-2">Shifts bits right, discarding bits on the right</td>
              <td class="border px-4 py-2"><code>a &gt;&gt; n</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Examples of Bitwise Operators -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Examples</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ BitwiseOperator }}</code></pre>
      </div>

      <!-- Note on Bitwise NOT Operator -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <h3 class="text-lg md:text-xl font-semibold mb-2">Note:</h3>
        <p class="text-base md:text-lg">
          The bitwise NOT operator <code>~a</code> inverts all the bits and adds 1 to the result, effectively calculating <code>-(a + 1)</code>.
        </p>
      </div>

      <!-- Membership Operators -->
      <h2 id="membership-operators" class="text-xl md:text-2xl font-semibold mb-4">Membership Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Membership operators test for membership in a sequence (like lists, tuples, or strings).
      </p>

      <!-- Membership Operators Table -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-base md:text-lg border-collapse">
          <thead>
            <tr class="bg-blue-200">
              <th class="border px-4 py-2">Operator</th>
              <th class="border px-4 py-2">Description</th>
              <th class="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <!-- 'in' Operator -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>in</code></td>
              <td class="border px-4 py-2">Returns True if a value is found in the sequence</td>
              <td class="border px-4 py-2"><code>x in y</code></td>
            </tr>
            <!-- 'not in' Operator -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>not in</code></td>
              <td class="border px-4 py-2">Returns True if a value is not found in the sequence</td>
              <td class="border px-4 py-2"><code>x not in y</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Examples of Membership Operators -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Examples</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ MembershipOperator }}</code></pre>
      </div>

      <!-- Identity Operators -->
      <h2 id="identity-operators" class="text-xl md:text-2xl font-semibold mb-4">Identity Operators</h2>
      <p class="text-base md:text-lg mb-4">
        Identity operators compare the memory locations of two objects.
      </p>

      <!-- Identity Operators Table -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-base md:text-lg border-collapse">
          <thead>
            <tr class="bg-blue-200">
              <th class="border px-4 py-2">Operator</th>
              <th class="border px-4 py-2">Description</th>
              <th class="border px-4 py-2">Example</th>
            </tr>
          </thead>
          <tbody>
            <!-- 'is' Operator -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>is</code></td>
              <td class="border px-4 py-2">Returns True if both variables point to the same object</td>
              <td class="border px-4 py-2"><code>x is y</code></td>
            </tr>
            <!-- 'is not' Operator -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>is not</code></td>
              <td class="border px-4 py-2">Returns True if both variables do not point to the same object</td>
              <td class="border px-4 py-2"><code>x is not y</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Examples of Identity Operators -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Examples</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ IdentityOperator }}</code></pre>
      </div>

      <!-- Note on 'is' vs '==' -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <h3 class="text-lg md:text-xl font-semibold mb-2">Note:</h3>
        <p class="text-base md:text-lg">
          The <code>is</code> operator checks if two variables point to the same object in memory, while <code>==</code> checks if the values are equal.
        </p>
      </div>

      <!-- Operator Precedence -->
      <h2 id="operator-precedence" class="text-xl md:text-2xl font-semibold mb-4">Operator Precedence</h2>
      <p class="text-base md:text-lg mb-4">
        Operator precedence determines the order in which operations are evaluated in expressions. Operators with higher precedence are evaluated before operators with lower precedence.
      </p>

      <!-- Operator Precedence Table -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-base md:text-lg border-collapse">
          <thead>
            <tr class="bg-blue-200">
              <th class="border px-4 py-2">Operator</th>
              <th class="border px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <!-- Operators from highest to lowest precedence -->
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>**</code></td>
              <td class="border px-4 py-2">Exponentiation</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>+, - (Unary)</code></td>
              <td class="border px-4 py-2">Positive, Negative</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>*, /, //, %</code></td>
              <td class="border px-4 py-2">Multiplication, Division, Floor Division, Modulus</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>+, -</code></td>
              <td class="border px-4 py-2">Addition, Subtraction</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>&lt;, &lt;=, &gt;, &gt;=</code></td>
              <td class="border px-4 py-2">Comparisons</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>==, !=</code></td>
              <td class="border px-4 py-2">Equality Operators</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>not</code></td>
              <td class="border px-4 py-2">Logical NOT</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>and</code></td>
              <td class="border px-4 py-2">Logical AND</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="border px-4 py-2"><code>or</code></td>
              <td class="border px-4 py-2">Logical OR</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Examples of Operator Precedence -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Examples</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ PrecendeOperator }}</code></pre>
      </div>

      <!-- Tip: Using Parentheses -->
      <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <h3 class="text-lg md:text-xl font-semibold mb-2">Tip:</h3>
        <p class="text-base md:text-lg">
          Use parentheses <code>( )</code> to explicitly specify the order of operations and improve code readability.
        </p>
      </div>

      <!-- Additional Examples and Tricks -->
      <h2 id="additional-examples" class="text-xl md:text-2xl font-semibold mb-4">Additional Examples and Tricks</h2>
      <!-- Example: Swapping Variables -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Swapping Variables</h3>
      <p class="text-base md:text-lg mb-4">
        In Python, you can swap the values of two variables without a temporary variable:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ VariablesSwap }}</code></pre>
      </div>

      <!-- Example: Chained Comparisons -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Chained Comparisons</h3>
      <p class="text-base md:text-lg mb-4">
        Python allows chaining comparison operators for concise expressions:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ ChainedComparasion }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding operators and expressions is fundamental to programming in Python. Operators allow you to perform calculations, compare values, and control the logic of your programs. Be sure to practice using different operators to become comfortable with their functionality.
      </p>
      <p class="text-base md:text-lg">
        Up next, we'll delve into control flow statements like <code>if</code>, <code>else</code>, and <code>elif</code>, which will enable your programs to make decisions based on conditions.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OperatorsAndExpressions',
  data() {
    return {
      ArithmeticOperator: `
# Arithmetic Operators Example
a = 10
b = 3

# Addition
print(a + b)  # Output: 13

# Subtraction
print(a - b)  # Output: 7

# Multiplication
print(a * b)  # Output: 30

# Division
print(a / b)  # Output: 3.33 (float)

# Modulus
print(a % b)  # Output: 1
`,
      AssignmentOperator: `
# Assignment Operators Example
a = 5
b = 10

# Add and Assign
a += b  # Equivalent to: a = a + b
print(a)  # Output: 15

# Multiply and Assign
a *= 2  # Equivalent to: a = a * 2
print(a)  # Output: 30
`,
      BitwiseOperator: `
# Bitwise Operators Example
a = 6  # 110 in binary
b = 3  # 011 in binary

# Bitwise AND
print(a & b)  # Output: 2 (binary: 010)

# Bitwise OR
print(a | b)  # Output: 7 (binary: 111)
`,
      IdentityOperator: `
# Identity Operators Example
x = [1, 2, 3]
y = [1, 2, 3]
z = x

# is Operator
print(x is z)  # Output: True
print(x is y)  # Output: False
`,
      LogicalOperator: `
# Logical Operators Example
a = True
b = False

# and Operator
print(a and b)  # Output: False

# or Operator
print(a or b)  # Output: True
`,
      MembershipOperator: `
# Membership Operators Example
x = 'Python'
y = {1, 2, 3, 4}

# in Operator
print('y' in x)  # Output: False

# not in Operator
print(5 not in y)  # Output: True
`,
      PrecedenceOperator: `
# Operator Precedence Example
result = 10 + 2 * 3  # Multiplication first, then addition
print(result)  # Output: 16

# Use of parentheses to alter precedence
result = (10 + 2) * 3
print(result)  # Output: 36
`,
      ChainedComparison: `
# Chained Comparison Example
x = 5
print(3 < x < 10)  # Output: True
`,
      ComparisonOperator: `
# Comparison Operators Example
a = 10
b = 20

# Equal to
print(a == b)  # Output: False

# Not equal to
print(a != b)  # Output: True
`,
      VariablesSwap: `
# Variables Swap Example
a = 5
b = 10

# Swap the values
a, b = b, a

print(a)  # Output: 10
print(b)  # Output: 5
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