<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Python Strings" value="python" />
    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Strings are one of the most common and versatile data types in Python. They represent sequences of characters and are used to store and manipulate text. In this section, we will dive into various string operations and explore Python’s built-in string methods, formatting techniques, and other important string manipulations.
        <br /><br />
        By the end of this guide, you will have a solid understanding of how to work with strings effectively in Python.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#creating-strings" class="text-blue-800 underline">Creating Strings</a></li>
        <li><a href="#string-operations" class="text-blue-800 underline">String Operations</a></li>
        <li><a href="#string-methods" class="text-blue-800 underline">String Methods</a></li>
        <li><a href="#string-formatting" class="text-blue-800 underline">String Formatting</a></li>
        <li><a href="#string-slicing" class="text-blue-800 underline">String Slicing</a></li>
        <li><a href="#escape-characters" class="text-blue-800 underline">Escape Characters</a></li>
      </ul>

      <!-- Creating Strings -->
      <h2 id="creating-strings" class="text-xl md:text-2xl font-semibold mb-4">Creating Strings</h2>
      <p class="text-base md:text-lg mb-4">
        In Python, you can create strings using single quotes (<code>' '</code>), double quotes (<code>" "</code>), or triple quotes (<code>''' '''</code> or <code>""" """</code>). Triple quotes allow you to create multi-line strings or docstrings, which are useful for documentation.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ creatingStringsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        <strong>Example:</strong>
        <ul class="list-disc list-inside mt-2">
          <li><code>'Hello, World!'</code> – A string with single quotes</li>
          <li><code>"Python is awesome!"</code> – A string with double quotes</li>
          <li><code>"""This is a multi-line string"""</code> – A string with triple quotes</li>
        </ul>
      </p>

      <!-- String Operations -->
      <h2 id="string-operations" class="text-xl md:text-2xl font-semibold mb-4">String Operations</h2>
      <p class="text-base md:text-lg mb-4">
        Python supports various operations on strings, including concatenation, repetition, and accessing individual characters via indexing. Let’s explore some of these common operations.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ stringOperationsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        <strong>Examples:</strong>
        <ul class="list-disc list-inside mt-2">
          <li><code>'Hello' + ' World'</code> – Concatenation of strings, output: <code>'Hello World'</code></li>
          <li><code>'Python' * 3</code> – Repetition, output: <code>'PythonPythonPython'</code></li>
          <li><code>my_string[0]</code> – Accessing individual characters by index, where <code>my_string = 'Python'</code>, output: <code>'P'</code></li>
          <li><code>my_string[-1]</code> – Accessing the last character, output: <code>'n'</code></li>
        </ul>
      </p>

      <!-- String Methods -->
      <h2 id="string-methods" class="text-xl md:text-2xl font-semibold mb-4">String Methods</h2>
      <p class="text-base md:text-lg mb-4">
        Python provides numerous built-in methods for string manipulation. Here are some commonly used ones:
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
          <tr>
            <td class="border border-gray-300 p-2"><code>upper()</code></td>
            <td class="border border-gray-300 p-2">Converts string to uppercase</td>
            <td class="border border-gray-300 p-2"><code>"hello".upper()  # "HELLO"</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>lower()</code></td>
            <td class="border border-gray-300 p-2">Converts string to lowercase</td>
            <td class="border border-gray-300 p-2"><code>"WORLD".lower()  # "world"</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>strip()</code></td>
            <td class="border border-gray-300 p-2">Removes leading and trailing whitespace</td>
            <td class="border border-gray-300 p-2"><code>"  python  ".strip()  # "python"</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>replace()</code></td>
            <td class="border border-gray-300 p-2">Replaces a substring with another</td>
            <td class="border border-gray-300 p-2"><code>"Hello".replace("o", "0")  # "Hell0"</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>split()</code></td>
            <td class="border border-gray-300 p-2">Splits string into a list</td>
            <td class="border border-gray-300 p-2"><code>"a,b,c".split(",")  # ["a", "b", "c"]</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>find()</code></td>
            <td class="border border-gray-300 p-2">Finds the first occurrence of a substring</td>
            <td class="border border-gray-300 p-2"><code>"Python".find("t")  # 3</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>isalpha()</code></td>
            <td class="border border-gray-300 p-2">Checks if all characters in the string are alphabetic</td>
            <td class="border border-gray-300 p-2"><code>"Hello".isalpha()  # True</code></td>
          </tr>
          <tr>
            <td class="border border-gray-300 p-2"><code>isdigit()</code></td>
            <td class="border border-gray-300 p-2">Checks if all characters in the string are digits</td>
            <td class="border border-gray-300 p-2"><code>"1234".isdigit()  # True</code></td>
          </tr>
        </tbody>
      </table>

      <!-- String Formatting -->
      <h2 id="string-formatting" class="text-xl md:text-2xl font-semibold mb-4">String Formatting</h2>
      <p class="text-base md:text-lg mb-4">
        Python offers several ways to format strings. The most common methods are:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Percent Operator:</strong> Uses <code>%</code> for string interpolation. Example: <code>"%s is %d years old" % ("Alice", 25)</code></li>
        <li><strong>.format() Method:</strong> More readable formatting. Example: <code>"{} is {} years old".format("Alice", 25)</code></li>
        <li><strong>F-Strings (Python 3.6+):</strong> Fast and intuitive. Example: <code>f"{name} is {age} years old"</code></li>
      </ul>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ stringFormattingCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        <strong>Examples:</strong>
        <ul class="list-disc list-inside mt-2">
          <li>
            <strong>Percent Operator:</strong>
            <pre class="bg-gray-800 text-white p-2 mb-3 rounded mt-2">
<code>name = "Alice"
age = 25
print("%s is %d years old" % (name, age))  # Output: Alice is 25 years old</code></pre>
          </li>
          <li>
            <strong>.format() Method:</strong>
            <pre class="bg-gray-800 text-white p-2 mb-3 rounded mt-2">
<code>name = "Alice"
age = 25
print("{} is {} years old".format(name, age))  # Output: Alice is 25 years old</code></pre>
          </li>
          <li>
            <strong>F-Strings:</strong>
            <pre class="bg-gray-800 text-white p-2  mb-3 mt-2">
<code>name = "Alice"
age = 25
print(f"{name} is {age} years old")  # Output: Alice is 25 years old
</code></pre>
          </li>
        </ul>
      </p>

      <!-- String Slicing -->
      <h2 id="string-slicing" class="text-xl md:text-2xl font-semibold mb-4">String Slicing</h2>
      <p class="text-base md:text-lg mb-4">
        String slicing allows you to access parts of a string using index notation. This is useful for extracting substrings or reversing strings.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ stringSlicingCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        <strong>Examples:</strong>
        <ul class="list-disc list-inside mt-2">
          <li><code>my_string[1:5]</code> – Extracts characters from index 1 to 4.</li>
          <li><code>my_string[:4]</code> – Extracts characters from the beginning to index 3.</li>
          <li><code>my_string[2:]</code> – Extracts characters from index 2 to the end.</li>
          <li><code>my_string[-3:-1]</code> – Extracts the third and second last characters.</li>
          <li><code>my_string[::-1]</code> – Reverses the string.</li>
        </ul>
      </p>

      <!-- Escape Characters -->
      <h2 id="escape-characters" class="text-xl md:text-2xl font-semibold mb-4">Escape Characters</h2>
      <p class="text-base md:text-lg mb-4">
        Escape characters are used to represent certain special characters within strings. They are preceded by a backslash (<code>\</code>).
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ escapeCharactersCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        <strong>Common Escape Characters:</strong>
        <ul class="list-disc list-inside mt-2">
          <li><code>\\</code> – Backslash (<code>\</code>)</li>
          <li><code>\'</code> – Single quote (<code>'</code>)</li>
          <li><code>\"</code> – Double quote (<code>"</code>)</li>
          <li><code>\n</code> – Newline</li>
          <li><code>\t</code> – Tab</li>
          <li><code>\r</code> – Carriage return</li>
          <li><code>\b</code> – Backspace</li>
        </ul>
        <strong>Example:</strong>
        <pre class="bg-gray-700 text-white p-2 rounded mt-2">
<code>print("Hello\nWorld")  
# Output:
# Hello
# World

print("She said, \"Python is awesome!\"")
# Output: She said, "Python is awesome!"
</code></pre>
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Strings are a fundamental data type in Python, and understanding how to work with them is crucial for many programming tasks. This guide has covered the basics of creating, manipulating, and formatting strings in Python.
      </p>
      <p class="text-base md:text-lg">
        In the next section, we'll explore <strong>Lists and Tuples</strong> in Python, which will introduce you to more complex data structures.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue"
export default {
  name: "PythonStrings",
  components: {
    Header
  },
  data() {
    return {
      creatingStringsCode: `# Single, double, and triple quotes
single_quote_str = 'Hello, World!'
double_quote_str = "Python is awesome!"
triple_quote_str = '''This is a multi-line
string.'''
`,
      stringOperationsCode: `# Concatenation
str1 = "Hello"
str2 = "World"
result = str1 + " " + str2  # Output: 'Hello World'

# Repetition
repeat_str = "Python" * 3  # Output: 'PythonPythonPython'

# Indexing
my_string = "Python"
first_char = my_string[0]  # Output: 'P'
last_char = my_string[-1]  # Output: 'n'
`,
      stringFormattingCode: `# Percent formatting
name = "Alice"
age = 25
print("%s is %d years old" % (name, age))  # Output: Alice is 25 years old

# format() method
print("{} is {} years old".format(name, age))  # Output: Alice is 25 years old

# f-strings (Python 3.6+)
print(f"{name} is {age} years old")  # Output: Alice is 25 years old
`,
      stringSlicingCode: `my_string = "Python"
# Slice from index 1 to 4
print(my_string[1:5])  # Output: 'ytho'

# Slice from start to index 3
print(my_string[:4])  # Output: 'Pyth'

# Slice from index 2 to the end
print(my_string[2:])  # Output: 'thon'

# Reverse the string
print(my_string[::-1])  # Output: 'nohtyP'
`,
      escapeCharactersCode: `# Newline
print("Hello\\nWorld")  
# Output:
# Hello
# World

# Double quote inside a string
print("She said, \\"Python is awesome!\\"")
# Output: She said, "Python is awesome!"
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