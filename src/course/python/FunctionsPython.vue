<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-blue-600 rounded-t-xl p-4">
      <img src="/python/logo.png" alt="Python Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Python Functions</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Functions are a fundamental building block in Python programming. They allow you to organize your code into reusable blocks, improve readability, and follow the DRY (Don't Repeat Yourself) principle. In this comprehensive guide, we'll explore all aspects of Python functions, from basic definitions to advanced concepts and best practices.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#function-basics" class="text-blue-800 underline">Function Basics</a></li>
        <li><a href="#function-arguments" class="text-blue-800 underline">Function Arguments</a></li>
        <li><a href="#return-values" class="text-blue-800 underline">Return Values</a></li>
        <li><a href="#default-arguments" class="text-blue-800 underline">Default Arguments</a></li>
        <li><a href="#variable-scope" class="text-blue-800 underline">Variable Scope</a></li>
        <li><a href="#lambda-functions" class="text-blue-800 underline">Lambda Functions</a></li>
        <li><a href="#built-in-functions" class="text-blue-800 underline">Built-in Functions</a></li>
        <li><a href="#recursion" class="text-blue-800 underline">Recursion</a></li>
        <li><a href="#decorators" class="text-blue-800 underline">Decorators</a></li>
        <li><a href="#generators" class="text-blue-800 underline">Generators</a></li>
        <li><a href="#closures" class="text-blue-800 underline">Closures</a></li>
        <li><a href="#best-practices" class="text-blue-800 underline">Best Practices</a></li>
      </ul>

      <!-- Function Basics -->
      <h2 id="function-basics" class="text-xl md:text-2xl font-semibold mb-4">Function Basics</h2>
      <p class="text-base md:text-lg mb-4">
        Let's start with the basics of defining and calling functions in Python:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ functionBasicsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Key points about function basics:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Functions are defined using the <code>def</code> keyword.</li>
        <li>Function names should be lowercase with underscores (snake_case).</li>
        <li>The function body is indented.</li>
        <li>Functions can take parameters and return values.</li>
        <li>Docstrings provide documentation for functions.</li>
      </ul>

      <!-- Function Arguments -->
      <h2 id="function-arguments" class="text-xl md:text-2xl font-semibold mb-4">Function Arguments</h2>
      <p class="text-base md:text-lg mb-4">
        Python provides several ways to pass arguments to functions:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ functionArgumentsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Understanding different types of function arguments allows you to create flexible and powerful functions.
      </p>

      <!-- Return Values -->
      <h2 id="return-values" class="text-xl md:text-2xl font-semibold mb-4">Return Values</h2>
      <p class="text-base md:text-lg mb-4">
        Functions can return values using the <code>return</code> statement:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ returnValuesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Proper use of return values is crucial for creating functions that can be easily integrated into larger programs.
      </p>

      <!-- Default Arguments -->
      <h2 id="default-arguments" class="text-xl md:text-2xl font-semibold mb-4">Default Arguments</h2>
      <p class="text-base md:text-lg mb-4">
        Python allows you to specify default values for function arguments:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ defaultArgumentsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Default arguments provide flexibility and can simplify function calls in many cases.
      </p>

      <!-- Variable Scope -->
      <h2 id="variable-scope" class="text-xl md:text-2xl font-semibold mb-4">Variable Scope</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding variable scope is crucial when working with functions:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ variableScopeCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Proper management of variable scope helps prevent bugs and makes your functions more predictable.
      </p>

      <!-- Lambda Functions -->
      <h2 id="lambda-functions" class="text-xl md:text-2xl font-semibold mb-4">Lambda Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Lambda functions are small, anonymous functions that can have any number of arguments but can only have one expression:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ lambdaFunctionsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Lambda functions are useful for short, simple operations, especially as arguments to higher-order functions.
      </p>

      <!-- Built-in Functions -->
      <h2 id="built-in-functions" class="text-xl md:text-2xl font-semibold mb-4">Built-in Functions</h2>
      <p class="text-base md:text-lg mb-4">
        Python provides many useful built-in functions:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ builtInFunctionsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Familiarizing yourself with built-in functions can greatly enhance your Python programming efficiency.
      </p>

      <!-- Recursion -->
      <h2 id="recursion" class="text-xl md:text-2xl font-semibold mb-4">Recursion</h2>
      <p class="text-base md:text-lg mb-4">
        Recursion is a technique where a function calls itself:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ recursionCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        While powerful, recursion should be used carefully to avoid excessive memory usage and stack overflow errors.
      </p>

      <!-- Decorators -->
      <h2 id="decorators" class="text-xl md:text-2xl font-semibold mb-4">Decorators</h2>
      <p class="text-base md:text-lg mb-4">
        Decorators allow you to modify or enhance functions without changing their source code:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ decoratorsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Decorators are a powerful tool for adding functionality to functions, such as logging, timing, or access control.
      </p>

      <!-- Generators -->
      <h2 id="generators" class="text-xl md:text-2xl font-semibold mb-4">Generators</h2>
      <p class="text-base md:text-lg mb-4">
        Generators are functions that can be paused and resumed, yielding a series of values over time:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ generatorsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Generators are memory-efficient and useful for working with large datasets or infinite sequences.
      </p>

      <!-- Closures -->
      <h2 id="closures" class="text-xl md:text-2xl font-semibold mb-4">Closures</h2>
      <p class="text-base md:text-lg mb-4">
        Closures are functions that remember the environment in which they were created:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ closuresCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Closures are useful for creating function factories and maintaining state between function calls.
      </p>

      <!-- Best Practices -->
      <h2 id="best-practices" class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Here are some best practices for writing functions in Python:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ bestPracticesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Following these best practices will help you write cleaner, more maintainable, and more efficient Python code.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Functions are a cornerstone of Python programming, enabling code reuse, improving readability, and promoting modular design. Key points to remember:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Functions are defined using the <code>def</code> keyword and can take various types of arguments.</li>
        <li>Return values allow functions to produce output that can be used in other parts of your program.</li>
        <li>Default arguments, variable scope, and lambda functions provide flexibility in function design.</li>
        <li>Advanced concepts like decorators, generators, and closures offer powerful ways to enhance and customize function behavior.</li>
        <li>Following best practices ensures your functions are efficient, readable, and maintainable.</li>
      </ul>
      <p class="text-base md:text-lg">
        Mastering functions in Python will greatly enhance your ability to write efficient, modular, and reusable code.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PythonFunctions',
  data() {
    return {
      functionBasicsCode: `
def greet(name):
    """
    This function greets the person passed in as a parameter.
    """
    return f"Hello, {name}!"

# Calling the function
message = greet("Alice")
print(message)  # Output: Hello, Alice!

# Function with multiple parameters
def add(a, b):
    return a + b

result = add(3, 5)
print(result)  # Output: 8

# Function with no parameters
def say_hello():
    print("Hello, World!")

say_hello()  # Output: Hello, World!

# Function with docstring
def square(n):
    """
    This function returns the square of a number.
    
    Args:
    n (int): The number to be squared
    
    Returns:
    int: The square of the input number
    """
    return n ** 2

help(square)  # Displays the docstring
`,
      functionArgumentsCode: `
# Positional arguments
def greet(name, greeting):
    return f"{greeting}, {name}!"

print(greet("Alice", "Hello"))  # Output: Hello, Alice!

# Keyword arguments
print(greet(greeting="Hi", name="Bob"))  # Output: Hi, Bob!

# Default arguments
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Charlie"))  # Output: Hello, Charlie!
print(greet("David", "Hi"))  # Output: Hi, David!

# Variable-length arguments (*args)
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))  # Output: 10

# Keyword variable-length arguments (**kwargs)
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30, city="New York")
# Output:
# name: Alice
# age: 30
# city: New York

# Combining different types of arguments
def func(a, b, *args, **kwargs):
    print(f"a: {a}, b: {b}")
    print(f"args: {args}")
    print(f"kwargs: {kwargs}")

func(1, 2, 3, 4, 5, x=6, y=7)
# Output:
# a: 1, b: 2
# args: (3, 4, 5)
# kwargs: {'x': 6, 'y': 7}
`,
returnValuesCode: `
# Simple return
def square(n):
    return n ** 2

result = square(5)
print(result)  # Output: 25

# Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = min_max([1, 2, 3, 4, 5])
print(f"Min: {minimum}, Max: {maximum}")  # Output: Min: 1, Max: 5

# Returning None
def greet(name):
    print(f"Hello, {name}!")
    # No return statement, implicitly returns None

result = greet("Alice")
print(result)  # Output: None

# Early return
def absolute_value(n):
    if n >= 0:
        return n
    else:
        return -n

print(absolute_value(-5))  # Output: 5

# Returning a function
def get_multiplier(n):
    def multiplier(x):
        return x * n
    return multiplier

double = get_multiplier(2)
print(double(5))  # Output: 10

# Returning multiple values as a dictionary
def person_info(name, age, city):
    return {
        "name": name,
        "age": age,
        "city": city
    }

info = person_info("Alice", 30, "New York")
print(info)  # Output: {'name': 'Alice', 'age': 30, 'city': 'New York'}
`,
      defaultArgumentsCode: `
# Simple default argument
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))  # Output: Hello, Alice!
print(greet("Bob", "Hi"))  # Output: Hi, Bob!

# Multiple default arguments
def create_person(name, age=30, city="Unknown"):
    return f"{name} is {age} years old and lives in {city}."

print(create_person("Alice"))  # Output: Alice is 30 years old and lives in Unknown.
print(create_person("Bob", 25))  # Output: Bob is 25 years old and lives in Unknown.
print(create_person("Charlie", city="New York"))  # Output: Charlie is 30 years old and lives in New York.

# Default arguments with mutable objects (be careful!)
def add_item(item, list=[]):
    list.append(item)
    return list

print(add_item(1))  # Output: [1]
print(add_item(2))  # Output: [1, 2] (not [2] as you might expect!)

# Correct way to use mutable default arguments
def add_item_correct(item, list=None):
    if list is None:
        list = []
    list.append(item)
    return list

print(add_item_correct(1))  # Output: [1]
print(add_item_correct(2))  # Output: [2]

# Using functions as default arguments
def greet(name, greeter=str.capitalize):
    return greeter(f"hello, {name}")

print(greet("alice"))  # Output: Hello, alice
print(greet("bob", str.upper))  # Output: HELLO, BOB
`,
      variableScopeCode: `
# Global and local variables
global_var = 10

def func():
    local_var = 20
    print(f"Global variable inside function: {global_var}")
    print(f"Local variable inside function: {local_var}")

func()
print(f"Global variable outside function: {global_var}")
# print(f"Local variable outside function: {local_var}")  # This would raise a NameError

# Modifying global variables
count = 0

def increment():
    global count
    count += 1

increment()
print(f"Count: {count}")  # Output: Count: 1

# Nonlocal variables
def outer():
    x = "outer"
    def inner():
        nonlocal x
        x = "inner"
        print(f"Inside inner: {x}")
    inner()
    print(f"Inside outer: {x}")

outer()
# Output:
# Inside inner: inner
# Inside outer: inner

# Variable shadowing
x = 10

def shadow_test():
    x = 20
    print(f"Inside function: {x}")

shadow_test()
print(f"Outside function: {x}")
# Output:
# Inside function: 20
# Outside function: 10

# Using global variables (not recommended, but sometimes necessary)
CONFIG = {
    "debug": False,
    "api_key": "12345"
}

def enable_debug():
    global CONFIG
    CONFIG["debug"] = True

enable_debug()
print(CONFIG)  # Output: {'debug': True, 'api_key': '12345'}
`,
      lambdaFunctionsCode: `
# Simple lambda function
square = lambda x: x ** 2
print(square(5))  # Output: 25

# Lambda with multiple arguments
add = lambda x, y: x + y
print(add(3, 4))  # Output: 7

# Lambda with conditional expression
is_even = lambda x: True if x % 2 == 0 else False
print(is_even(4))  # Output: True
print(is_even(5))  # Output: False

# Using lambda with built-in functions
numbers = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x ** 2, numbers))
print(squared_numbers)  # Output: [1, 4, 9, 16, 25]

# Lambda with filter
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4]

# Lambda in sorting
people = [('Alice', 25), ('Bob', 30), ('Charlie', 22)]
sorted_people = sorted(people, key=lambda x: x[1])
print(sorted_people)  # Output: [('Charlie', 22), ('Alice', 25), ('Bob', 30)]

# Lambda in reduce
from functools import reduce
product = reduce(lambda x, y: x * y, numbers)
print(product)  # Output: 120

# Lambda as a default argument (be careful with this!)
def apply_operation(x, operation=lambda x: x):
    return operation(x)

print(apply_operation(5))  # Output: 5
print(apply_operation(5, lambda x: x ** 2))  # Output: 25
`,
      builtInFunctionsCode: `
# len() - Return the length of an object
print(len("Hello"))  # Output: 5

# type() - Return the type of an object
print(type(42))  # Output: <class 'int'>

# str(), int(), float() - Type conversion
print(str(42))  # Output: "42"
print(int("42"))  # Output: 42
print(float("3.14"))  # Output: 3.14

# range() - Generate a sequence of numbers
for i in range(5):
    print(i, end=" ")  # Output: 0 1 2 3 4

# enumerate() - Return an enumerate object
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
# Output:
# 0: apple
# 1: banana
# 2: cherry

# zip() - Combine iterables
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
for name, age in zip(names, ages):
    print(f"{name} is {age} years old")
# Output:
# Alice is 25 years old
# Bob is 30 years old
# Charlie is 35 years old

# map() - Apply a function to all items in an iterable
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]

# filter() - Filter items from an iterable
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)  # Output: [2, 4]

# any() and all() - Check conditions across iterables
print(any([True, False, False]))  # Output: True
print(all([True, True, False]))  # Output: False

# sorted() - Return a new sorted list
print(sorted([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]))
# Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# sum(), min(), max() - Mathematical operations on iterables
print(sum(numbers))  # Output: 15
print(min(numbers))  # Output: 1
print(max(numbers))  # Output: 5

# abs(), round() - Mathematical functions
print(abs(-42))  # Output: 42
print(round(3.14159, 2))  # Output: 3.14

# dir() - Return list of valid attributes of an object
print(dir(str))  # Output: ['__add__', '__class__', ..., 'zfill']

# help() - Interactive help system
help(print)  # Displays help for the print function
`,
      recursionCode: `
# Factorial calculation using recursion
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # Output: 120

# Fibonacci sequence using recursion
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")  # Output: 0 1 1 2 3 5 8 13 21 34

print()  # New line

# Binary search using recursion
def binary_search(arr, low, high, x):
    if high >= low:
        mid = (high + low) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
        else:
            return binary_search(arr, mid + 1, high, x)
    else:
        return -1

arr = [2, 3, 4, 10, 40]
result = binary_search(arr, 0, len(arr) - 1, 10)
print(f"Element found at index: {result}")  # Output: Element found at index: 3

# Tree traversal using recursion
class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

def inorder_traversal(node):
    if node:
        inorder_traversal(node.left)
        print(node.value, end=" ")
        inorder_traversal(node.right)

root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print("Inorder traversal:")
inorder_traversal(root)  # Output: 4 2 5 1 3

print()  # New line

# Tail recursion optimization
def tail_factorial(n, accumulator=1):
    if n == 0 or n == 1:
        return accumulator
    else:
        return tail_factorial(n - 1, n * accumulator)

print(f"Tail recursive factorial of 5: {tail_factorial(5)}")  # Output: 120
`,
      decoratorsCode: `
# Basic decorator
def uppercase_decorator(func):
    def wrapper():
        result = func()
        return result.upper()
    return wrapper

@uppercase_decorator
def greet():
    return "hello, world!"

print(greet())  # Output: HELLO, WORLD!

# Decorator with arguments
def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def say_hello(name):
    print(f"Hello, {name}!")

say_hello("Alice")
# Output:
# Hello, Alice!
# Hello, Alice!
# Hello, Alice!

# Class decorator
class CountCalls:
    def __init__(self, func):
        self.func = func
        self.num_calls = 0
    
    def __call__(self, *args, **kwargs):
        self.num_calls += 1
        print(f"This function has been called {self.num_calls} time(s)")
        return self.func(*args, **kwargs)

@CountCalls
def say_hi():
    print("Hi!")

say_hi()
say_hi()
# Output:
# This function has been called 1 time(s)
# Hi!
# This function has been called 2 time(s)
# Hi!

# Decorator with arguments and return value
def validate_input(min_value, max_value):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for arg in args:
                if not (min_value <= arg <= max_value):
                    raise ValueError(f"Argument {arg} not in range {min_value}-{max_value}")
            return func(*args, **kwargs)
        return wrapper
    return decorator

@validate_input(1, 100)
def calculate_square(n):
    return n ** 2

print(calculate_square(5))  # Output: 25
# print(calculate_square(200))  # Raises ValueError

# Multiple decorators
def bold(func):
    def wrapper():
        return "<b>" + func() + "</b>"
    return wrapper

def italic(func):
    def wrapper():
        return "<i>" + func() + "</i>"
    return wrapper

@bold
@italic
def hello():
    return "Hello, World!"

print(hello())  # Output: <b><i>Hello, World!</i></b>
`,
generatorsCode: `
# Simple generator function
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

for num in count_up_to(5):
    print(num, end=" ")  # Output: 1 2 3 4 5

print()  # New line

# Generator expression
squares = (x**2 for x in range(5))
for square in squares:
    print(square, end=" ")  # Output: 0 1 4 9 16

print()  # New line

# Infinite sequence generator
def fibonacci_generator():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci_generator()
for _ in range(10):
    print(next(fib), end=" ")  # Output: 0 1 1 2 3 5 8 13 21 34

print()  # New line

# Generator with send() method
def echo_generator():
    while True:
        received = yield
        yield f"Echo: {received}"

echo = echo_generator()
next(echo)  # Prime the generator
print(echo.send("Hello"))  # Output: Echo: Hello
print(echo.send("World"))  # Output: Echo: World

# Using generators for memory-efficient data processing
def process_large_file(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            yield line.strip().upper()

# Simulating a large file
with open('large_file.txt', 'w') as f:
    f.write("Hello\\nWorld\\nPython\\nGenerator\\n")

for processed_line in process_large_file('large_file.txt'):
    print(processed_line)
# Output:
# HELLO
# WORLD
# PYTHON
# GENERATOR

# Generator pipeline
def generate_numbers(n):
    for i in range(n):
        yield i

def square_numbers(numbers):
    for number in numbers:
        yield number ** 2

def add_one(numbers):
    for number in numbers:
        yield number + 1

pipeline = add_one(square_numbers(generate_numbers(5)))
for result in pipeline:
    print(result, end=" ")  # Output: 1 2 5 10 17

print()  # New line

# Cleaning up with generators
def with_cleanup(gen):
    try:
        yield from gen
    finally:
        next(gen, None)  # Advance to cleanup

def cleanup_generator():
    try:
        yield 1
        yield 2
        yield 3
    finally:
        print("Cleanup performed")

for item in with_cleanup(cleanup_generator()):
    print(item, end=" ")
# Output: 1 2 3 Cleanup performed
`,
      closuresCode: `
# Simple closure
def outer_function(x):
    def inner_function(y):
        return x + y
    return inner_function

add_five = outer_function(5)
print(add_five(3))  # Output: 8
print(add_five(7))  # Output: 12

# Closure with nonlocal variable
def counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

c = counter()
print(c())  # Output: 1
print(c())  # Output: 2
print(c())  # Output: 3

# Closure for data hiding
def create_account(initial_balance):
    balance = initial_balance
    def deposit(amount):
        nonlocal balance
        balance += amount
        return balance
    def withdraw(amount):
        nonlocal balance
        if amount <= balance:
            balance -= amount
            return balance
        else:
            return "Insufficient funds"
    def get_balance():
        return balance
    return deposit, withdraw, get_balance

deposit, withdraw, get_balance = create_account(100)
print(get_balance())  # Output: 100
print(deposit(50))    # Output: 150
print(withdraw(70))   # Output: 80
print(withdraw(100))  # Output: Insufficient funds

# Closure for memoization
def memoize(func):
    cache = {}
    def memoized(*args):
        if args in cache:
            return cache[args]
        result = func(*args)
        cache[args] = result
        return result
    return memoized

@memoize
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))  # Output: 55 (calculated)
print(fibonacci(10))  # Output: 55 (retrieved from cache)

# Closure for creating customizable functions
def power_function(exponent):
    def power(base):
        return base ** exponent
    return power

square = power_function(2)
cube = power_function(3)

print(square(4))  # Output: 16
print(cube(3))    # Output: 27
`,
      bestPracticesCode: `
# Use descriptive names
def calculate_area(length, width):
    return length * width

# Use docstrings
def greet(name):
    """
    Greet a person by name.

    Args:
    name (str): The name of the person to greet.

    Returns:
    str: A greeting message.
    """
    return f"Hello, {name}!"

# Use type hints (Python 3.5+)
def add_numbers(a: int, b: int) -> int:
    return a + b

# Return early
def process_positive_number(n):
    if n <= 0:
        return None
    # Process the positive number
    return n * 2

# Use *args and **kwargs when appropriate
def print_args(*args, **kwargs):
    for arg in args:
        print(arg)
    for key, value in kwargs.items():
        print(f"{key}: {value}")

# Avoid mutable default arguments
def append_to(element, target=None):
    if target is None:
        target = []
    target.append(element)
    return target

# Use keyword arguments for clarity
def create_person(name, age, city):
    return {"name": name, "age": age, "city": city}

person = create_person(name="Alice", age=30, city="New York")

# Keep functions small and focused
def process_data(data):
    clean_data = clean(data)
    analyzed_data = analyze(clean_data)
    return format_results(analyzed_data)

# Use exceptions for error handling
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# Use lambda functions sparingly and for simple operations
sorted_list = sorted([(1, 'one'), (2, 'two'), (3, 'three')], key=lambda x: x[1])

# Use built-in functions and libraries when possible
numbers = [1, 2, 3, 4, 5]
total = sum(numbers)
average = sum(numbers) / len(numbers)

# Use context managers for resource management
def read_file(filename):
    with open(filename, 'r') as file:
        return file.read()

# Use generators for large datasets
def process_large_dataset(data):
    for item in data:
        yield process_item(item)

# Test your functions
def test_add_numbers():
    assert add_numbers(2, 3) == 5, "Addition failed"
    print("Test passed")

test_add_numbers()
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