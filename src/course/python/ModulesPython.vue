<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Working with Modules in Python" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Introduction to Python Modules</h2>
      <p class="text-base md:text-lg mb-6">
        In Python, a module is a file containing Python definitions and statements. The file name is the module name with the suffix .py added. Modules allow you to logically organize your Python code, making it more readable and reusable. They play a crucial role in structuring large programs and promoting code reusability.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#creating-modules" class="text-blue-800 underline">Creating Modules</a></li>
        <li><a href="#importing-modules" class="text-blue-800 underline">Importing Modules</a></li>
        <li><a href="#from-import" class="text-blue-800 underline">From ... Import Statement</a></li>
        <li><a href="#namespaces" class="text-blue-800 underline">Namespaces and Scoping</a></li>
        <li><a href="#packages" class="text-blue-800 underline">Packages</a></li>
        <li><a href="#standard-library" class="text-blue-800 underline">Python Standard Library</a></li>
        <li><a href="#third-party" class="text-blue-800 underline">Working with Third-Party Modules</a></li>
        <li><a href="#best-practices" class="text-blue-800 underline">Best Practices</a></li>
      </ul>

      <!-- Creating Modules -->
      <h2 id="creating-modules" class="text-xl md:text-2xl font-semibold mb-4">1. Creating Modules</h2>
      <p class="text-base md:text-lg mb-4">
        Creating a module in Python is as simple as creating a .py file. Let's create a simple module and see how to use it.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ creatingModulesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        In this example, we've created a simple module named 'my_module.py' with a function and a variable. We can now use this module in other Python scripts.
      </p>

      <!-- Importing Modules -->
      <h2 id="importing-modules" class="text-xl md:text-2xl font-semibold mb-4">2. Importing Modules</h2>
      <p class="text-base md:text-lg mb-4">
        Once you have created a module, you can use it in your Python programs by importing it. There are several ways to import modules in Python.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ importingModulesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        These examples demonstrate different ways to import and use modules in Python. Each method has its use cases, and the choice often depends on how you want to use the module in your code.
      </p>

      <!-- From ... Import Statement -->
      <h2 id="from-import" class="text-xl md:text-2xl font-semibold mb-4">3. From ... Import Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The 'from ... import' statement allows you to import specific attributes or functions from a module directly into the current namespace.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ fromImportCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        While convenient, be cautious when using 'from module import *' as it can lead to naming conflicts and make the code less readable.
      </p>

      <!-- Namespaces and Scoping -->
      <h2 id="namespaces" class="text-xl md:text-2xl font-semibold mb-4">4. Namespaces and Scoping</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding namespaces and scoping is crucial when working with modules. A namespace is a container for a set of identifiers (names).
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ namespacesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Proper use of namespaces helps avoid naming conflicts and makes your code more organized and readable.
      </p>

      <!-- Packages -->
      <h2 id="packages" class="text-xl md:text-2xl font-semibold mb-4">5. Packages</h2>
      <p class="text-base md:text-lg mb-4">
        Packages are a way of structuring Python's module namespace by using "dotted module names". They help in organizing related modules into a single tree-like hierarchy.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ packagesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Packages allow you to create a hierarchical structure for your modules, which is particularly useful for large projects.
      </p>

      <!-- Python Standard Library -->
      <h2 id="standard-library" class="text-xl md:text-2xl font-semibold mb-4">6. Python Standard Library</h2>
      <p class="text-base md:text-lg mb-4">
        Python comes with a rich standard library that offers a wide range of modules and packages. Let's look at some commonly used standard library modules.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ standardLibraryCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        The standard library provides a wealth of modules for various tasks, from file I/O to web services. Familiarizing yourself with these can greatly enhance your productivity.
      </p>

      <!-- Working with Third-Party Modules -->
      <h2 id="third-party" class="text-xl md:text-2xl font-semibold mb-4">7. Working with Third-Party Modules</h2>
      <p class="text-base md:text-lg mb-4">
        Python's ecosystem is rich with third-party modules that extend its capabilities. Here's how you can work with them:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ thirdPartyCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Third-party modules greatly extend Python's capabilities. Always refer to the module's documentation for proper usage and installation instructions.
      </p>

      <!-- Best Practices -->
      <h2 id="best-practices" class="text-xl md:text-2xl font-semibold mb-4">8. Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Here are some best practices to follow when working with modules in Python:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Use meaningful and descriptive names for your modules.</li>
        <li>Keep modules focused on a specific functionality.</li>
        <li>Use relative imports within packages.</li>
        <li>Avoid circular imports.</li>
        <li>Use the 'if __name__ == "__main__":' idiom for executable modules.</li>
        <li>Document your modules using docstrings.</li>
      </ul>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ bestPracticesCode }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Modules are a fundamental concept in Python, allowing you to organize, reuse, and share code effectively. By mastering the use of modules, you can write more maintainable and scalable Python programs. Remember to explore the standard library, make use of third-party modules when appropriate, and follow best practices in your module design and usage.
      </p>
      <p class="text-base md:text-lg">
        As you continue to develop your Python skills, you'll find that effective use of modules is key to building robust and efficient software systems.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue"
export default {
  name: "PythonModules",
  components: {
    Header
  },
  data() {
    return {
      creatingModulesCode: `
# File: my_module.py

def greet(name):
    return f"Hello, {name}!"

PI = 3.14159

# File: main.py

import my_module

print(my_module.greet("Alice"))  # Output: Hello, Alice!
print(my_module.PI)  # Output: 3.14159
`,
      importingModulesCode: `
# Simple import
import math
print(math.pi)  # Output: 3.141592653589793

# Importing with an alias
import math as m
print(m.pi)  # Output: 3.141592653589793

# Importing specific attributes
from math import pi, sqrt
print(pi)  # Output: 3.141592653589793
print(sqrt(16))  # Output: 4.0

# Importing all attributes (use with caution)
from math import *
print(sin(pi/2))  # Output: 1.0
`,
      fromImportCode: `
# Importing specific functions
from math import sin, cos, tan

print(sin(0))  # Output: 0.0
print(cos(0))  # Output: 1.0
print(tan(0))  # Output: 0.0

# Importing with an alias
from math import sqrt as square_root

print(square_root(16))  # Output: 4.0

# Importing all functions (use with caution)
from math import *

print(pi)  # Output: 3.141592653589793
print(e)   # Output: 2.718281828459045
`,
      namespacesCode: `
# Global namespace
global_var = 10

def outer_function():
    # Enclosing namespace
    enclosing_var = 20
    
    def inner_function():
        # Local namespace
        local_var = 30
        print(f"Access to global: {global_var}")
        print(f"Access to enclosing: {enclosing_var}")
        print(f"Access to local: {local_var}")
    
    inner_function()

outer_function()

# Output:
# Access to global: 10
# Access to enclosing: 20
# Access to local: 30

# Demonstrating the global keyword
def modify_global():
    global global_var
    global_var = 100

modify_global()
print(f"Modified global: {global_var}")  # Output: Modified global: 100
`,
      packagesCode: `
# Assume the following directory structure:
# mypackage/
# ├── __init__.py
# ├── module1.py
# └── subpackage/
#     ├── __init__.py
#     └── module2.py

# File: mypackage/module1.py
def function1():
    return "This is function1 from module1"

# File: mypackage/subpackage/module2.py
def function2():
    return "This is function2 from module2"

# Usage in main script
from mypackage import module1
from mypackage.subpackage import module2

print(module1.function1())  # Output: This is function1 from module1
print(module2.function2())  # Output: This is function2 from module2
`,
      standardLibraryCode: `
import os
import sys
import datetime
import random
import json

# Working with files and directories
print(os.getcwd())  # Get current working directory
print(os.listdir())  # List directory contents

# System-specific parameters and functions
print(sys.platform)  # Get platform identifier
print(sys.version)   # Get Python version

# Date and time operations
now = datetime.datetime.now()
print(f"Current date and time: {now}")

# Generate random numbers
print(random.randint(1, 10))  # Random integer between 1 and 10

# JSON encoding and decoding
data = {"name": "Alice", "age": 30}
json_string = json.dumps(data)
print(json_string)  # Output: {"name": "Alice", "age": 30}
`,
      thirdPartyCode: `
# First, install the requests module:
# pip install requests

import requests

# Making an HTTP GET request
response = requests.get('https://api.github.com')
print(response.status_code)  # Output: 200 (if successful)

# Parsing JSON response
data = response.json()
print(data['current_user_url'])  # Output: https://api.github.com/user

# Making a POST request
post_response = requests.post('https://httpbin.org/post', data={'key': 'value'})
print(post_response.text)  # Prints the response content
`,
bestPracticesCode: `
# File: my_module.py

"""
This module provides utility functions for string operations.

It demonstrates best practices in module creation and documentation.
"""

def reverse_string(s):
    """
    Reverse the given string.

    Args:
    s (str): The input string

    Returns:
    str: The reversed string
    """
    return s[::-1]

def capitalize_words(sentence):
    """
    Capitalize the first letter of each word in the sentence.

    Args:
    sentence (str): The input sentence

    Returns:
    str: The sentence with capitalized words
    """
    return ' '.join(word.capitalize() for word in sentence.split())

if __name__ == "__main__":
    # This code runs only if the module is executed directly
    print(reverse_string("Hello, World!"))
    print(capitalize_words("python is awesome"))

# Usage in another file
# from my_module import reverse_string, capitalize_words
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