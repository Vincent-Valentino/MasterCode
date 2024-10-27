<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Python Dictionaries" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Dictionaries are one of Python's most powerful and flexible data structures. They allow you to store key-value pairs, providing fast lookups and efficient data organization. In this comprehensive guide, we'll explore every aspect of Python dictionaries, from basic operations to advanced techniques.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#creating-dictionaries" class="text-blue-800 underline">Creating Dictionaries</a></li>
        <li><a href="#accessing-elements" class="text-blue-800 underline">Accessing Dictionary Elements</a></li>
        <li><a href="#modifying-dictionaries" class="text-blue-800 underline">Modifying Dictionaries</a></li>
        <li><a href="#dictionary-methods" class="text-blue-800 underline">Dictionary Methods</a></li>
        <li><a href="#dictionary-views" class="text-blue-800 underline">Dictionary Views</a></li>
        <li><a href="#dictionary-comprehensions" class="text-blue-800 underline">Dictionary Comprehensions</a></li>
        <li><a href="#nested-dictionaries" class="text-blue-800 underline">Nested Dictionaries</a></li>
        <li><a href="#advanced-techniques" class="text-blue-800 underline">Advanced Techniques</a></li>
      </ul>

      <!-- Creating Dictionaries -->
      <h2 id="creating-dictionaries" class="text-xl md:text-2xl font-semibold mb-4">Creating Dictionaries</h2>
      <p class="text-base md:text-lg mb-4">
        There are several ways to create dictionaries in Python:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ creatingDictionariesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        In this example, we've shown four different ways to create dictionaries:
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-6">
        <li>Using curly braces <code>{}</code> with key-value pairs</li>
        <li>Using the <code>dict()</code> constructor with keyword arguments</li>
        <li>Using a list of tuples with the <code>dict()</code> constructor</li>
        <li>Using dictionary comprehension</li>
      </ol>
      <p class="text-base md:text-lg mb-4">
        Each method has its use cases. The first method is the most common and readable for small dictionaries. The second is useful when your keys are valid Python identifiers. The third is handy when you have key-value pairs in a list. The fourth is powerful for creating dictionaries based on some computation.
      </p>

      <!-- Accessing Dictionary Elements -->
      <h2 id="accessing-elements" class="text-xl md:text-2xl font-semibold mb-4">Accessing Dictionary Elements</h2>
      <p class="text-base md:text-lg mb-4">
        There are multiple ways to access elements in a dictionary:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ accessingElementsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Let's break down these access methods:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Using square brackets <code>[]</code> is the most common way to access a value. However, it raises a <code>KeyError</code> if the key doesn't exist.</li>
        <li>The <code>get()</code> method is safer as it returns <code>None</code> (or a specified default value) if the key doesn't exist.</li>
        <li><code>setdefault()</code> is similar to <code>get()</code>, but it also adds the key with the default value if it doesn't exist.</li>
      </ul>

      <!-- Modifying Dictionaries -->
      <h2 id="modifying-dictionaries" class="text-xl md:text-2xl font-semibold mb-4">Modifying Dictionaries</h2>
      <p class="text-base md:text-lg mb-4">
        Dictionaries are mutable, meaning you can change their content after creation:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ modifyingDictionariesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates various ways to modify a dictionary:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Adding a new key-value pair using square bracket notation</li>
        <li>Updating an existing value</li>
        <li>Using the <code>update()</code> method to add or update multiple key-value pairs at once</li>
        <li>Removing a key-value pair using the <code>del</code> keyword</li>
        <li>Removing and returning a value using the <code>pop()</code> method</li>
        <li>Removing and returning the last inserted item using <code>popitem()</code> (in Python 3.7+, it removes an arbitrary item in earlier versions)</li>
        <li>Clearing all items from the dictionary using <code>clear()</code></li>
      </ul>

      <!-- Dictionary Methods -->
      <h2 id="dictionary-methods" class="text-xl md:text-2xl font-semibold mb-4">Dictionary Methods</h2>
      <p class="text-base md:text-lg mb-4">
        Python dictionaries come with several built-in methods. Let's explore each one in detail:
      </p>

      <h3 class="text-lg md:text-xl font-semibold mb-2">1. clear()</h3>
      <p class="text-base md:text-lg mb-4">
        Removes all items from the dictionary.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ clearMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">2. copy()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns a shallow copy of the dictionary.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ copyMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">3. fromkeys()</h3>
      <p class="text-base md:text-lg mb-4">
        Creates a new dictionary with specified keys and an optional value.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ fromkeysMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">4. get()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns the value of a specified key, or a default value if the key doesn't exist.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ getMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">5. items()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns a view object containing key-value pairs as tuples.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ itemsMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">6. keys()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns a view object containing the dictionary's keys.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ keysMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">7. pop()</h3>
      <p class="text-base md:text-lg mb-4">
        Removes and returns the value of a specified key.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ popMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">8. popitem()</h3>
      <p class="text-base md:text-lg mb-4">
        Removes and returns the last inserted key-value pair (arbitrary pair in versions before Python 3.7).
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ popitemMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">9. setdefault()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns the value of a specified key. If the key doesn't exist, it inserts the key with a specified value.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ setdefaultMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">10. update()</h3>
      <p class="text-base md:text-lg mb-4">
        Updates the dictionary with specified key-value pairs.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ updateMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">11. values()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns a view object containing the dictionary's values.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ valuesMethodCode }}</code></pre>
      </div>

      <!-- Dictionary Views -->
      <h2 id="dictionary-views" class="text-xl md:text-2xl font-semibold mb-4">Dictionary Views</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>keys()</code>, <code>values()</code>, and <code>items()</code> methods return view objects, which have some special properties:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ dictionaryViewsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        View objects are dynamic, meaning they reflect changes in the dictionary. They also support set-like operations if all elements are hashable.
      </p>

      <!-- Dictionary Comprehensions -->
      <h2 id="dictionary-comprehensions" class="text-xl md:text-2xl font-semibold mb-4">Dictionary Comprehensions</h2>
      <p class="text-base md:text-lg mb-4">
        Dictionary comprehensions provide a concise way to create dictionaries:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ dictionaryComprehensionsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        These examples demonstrate how to create dictionaries using comprehensions, which can be more readable and efficient than traditional loops for simple transformations.
      </p>

      <!-- Nested Dictionaries -->
      <h2 id="nested-dictionaries" class="text-xl md:text-2xl font-semibold mb-4">Nested Dictionaries</h2>
      <p class="text-base md:text-lg mb-4">
        Dictionaries can contain other dictionaries as values, creating nested structures:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ nestedDictionariesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Nested dictionaries are useful for representing complex, hierarchical data structures. However, be cautious with deeply nested structures as they can become difficult to manage and may impact performance for very large datasets.
      </p>

      <!-- Advanced Techniques -->
      <h2 id="advanced-techniques" class="text-xl md:text-2xl font-semibold mb-4">Advanced Techniques</h2>
      <p class="text-base md:text-lg mb-4">
        Let's explore some advanced techniques for working with dictionaries:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ advancedTechniquesCode }}</code></pre>
      </div>
        <p class="text-base md:text-lg mb-4">
        These advanced techniques demonstrate the versatility of Python dictionaries. The <code>collections.defaultdict</code> is particularly useful for handling missing keys, while <code>collections.OrderedDict</code> maintains the order of insertion (note that in Python 3.7+, regular dictionaries also maintain order). The <code>sorted()</code> function with a key function allows for flexible sorting of dictionaries.
      </p>

      <h3 class="text-lg md:text-xl font-semibold mb-2">Merging Dictionaries</h3>
      <p class="text-base md:text-lg mb-4">
        In Python 3.9+, there's a new way to merge dictionaries using the union operator (<code>|</code>):
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ mergingDictionariesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        This new syntax provides a more concise way to merge dictionaries compared to the <code>update()</code> method or dictionary unpacking.
      </p>

      <h3 class="text-lg md:text-xl font-semibold mb-2">Dictionary and Set Comprehensions</h3>
      <p class="text-base md:text-lg mb-4">
        We can combine dictionary comprehensions with set operations for more complex transformations:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ dictionarySetComprehensionsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        These examples show how to use set operations within dictionary comprehensions to create new dictionaries based on complex conditions.
      </p>

      <h3 class="text-lg md:text-xl font-semibold mb-2">Working with JSON</h3>
      <p class="text-base md:text-lg mb-4">
        Dictionaries are commonly used when working with JSON data:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ jsonDictionaryCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to convert between JSON strings and Python dictionaries, which is crucial when working with web APIs or config files.
      </p>

      <h3 class="text-lg md:text-xl font-semibold mb-2">Memory Efficient Dictionaries</h3>
      <p class="text-base md:text-lg mb-4">
        For scenarios where memory usage is a concern, you can use <code>__slots__</code> to create memory-efficient classes that behave similarly to dictionaries:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ memoryEfficientDictionaryCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        While not technically a dictionary, this approach can be useful when you need dictionary-like behavior with a fixed set of keys and want to minimize memory usage.
      </p>

      <h3 class="text-lg md:text-xl font-semibold mb-2">Custom Dictionary Subclasses</h3>
      <p class="text-base md:text-lg mb-4">
        You can create custom dictionary subclasses to add or modify functionality:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ customDictionarySubclassCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        This example shows how to create a custom dictionary that automatically converts keys to lowercase. This can be useful for creating case-insensitive dictionaries or adding other custom behaviors.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Python dictionaries are incredibly versatile and powerful data structures. They offer fast lookups, flexible key types, and a wide range of built-in methods for manipulation. Key points to remember:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Dictionaries store key-value pairs and provide O(1) average case complexity for lookups.</li>
        <li>Keys must be immutable (e.g., strings, numbers, tuples) and unique within a dictionary.</li>
        <li>Dictionaries are mutable, allowing for dynamic addition, modification, and removal of key-value pairs.</li>
        <li>Dictionary methods like <code>get()</code> and <code>setdefault()</code> provide safe ways to access and manipulate values.</li>
        <li>Dictionary views (<code>keys()</code>, <code>values()</code>, <code>items()</code>) offer dynamic access to dictionary contents.</li>
        <li>Dictionary comprehensions provide a concise way to create dictionaries based on existing iterables.</li>
        <li>Advanced techniques like <code>defaultdict</code>, <code>OrderedDict</code>, and custom subclasses allow for specialized dictionary behaviors.</li>
      </ul>
      <p class="text-base md:text-lg mb-4">
        Mastering dictionaries is crucial for effective Python programming. They are used extensively in data processing, configuration management, caching, and many other applications. As you continue your Python journey, you'll find dictionaries to be an indispensable tool in your programming toolkit.
      </p>
      <p class="text-base md:text-lg">
        In the next section, we'll explore <strong>Python Sets</strong>, another built-in data structure that shares some similarities with dictionaries but has its own unique properties and use cases.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue"
export default {
  name: "DictPython",
  components: {
    Header
  },
  data() {
    return {
      creatingDictionariesCode: `# Method 1: Using curly braces
person = {'name': 'John', 'age': 30, 'city': 'New York'}

# Method 2: Using dict() constructor with keyword arguments
person = dict(name='John', age=30, city='New York')

# Method 3: Using dict() with a list of tuples
person = dict([('name', 'John'), ('age', 30), ('city', 'New York')])

# Method 4: Using dictionary comprehension
keys = ['name', 'age', 'city']
values = ['John', 30, 'New York']
person = {k: v for k, v in zip(keys, values)}

print(person)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}
`,
      accessingElementsCode: `person = {'name': 'John', 'age': 30, 'city': 'New York'}

# Using square brackets
print(person['name'])  # Output: John
# print(person['country'])  # Raises KeyError

# Using get() method
print(person.get('name'))  # Output: John
print(person.get('country'))  # Output: None
print(person.get('country', 'Unknown'))  # Output: Unknown

# Using setdefault() method
print(person.setdefault('age', 25))  # Output: 30 (existing key)
print(person.setdefault('country', 'USA'))  # Output: USA (new key-value pair added)
print(person)  # Output: {'name': 'John', 'age': 30, 'city': 'New York', 'country': 'USA'}
`,
      modifyingDictionariesCode: `person = {'name': 'John', 'age': 30}

# Adding a new key-value pair
person['city'] = 'New York'

# Updating an existing value
person['age'] = 31

# Using update() method to add or update multiple key-value pairs
person.update({'job': 'Engineer', 'age': 32})

print(person)  # Output: {'name': 'John', 'age': 32, 'city': 'New York', 'job': 'Engineer'}

# Removing a key-value pair using del keyword
del person['city']

# Removing and returning a value using pop() method
age = person.pop('age')
print(f"Removed age: {age}")

# Removing and returning the last inserted item using popitem()
last_item = person.popitem()
print(f"Removed last item: {last_item}")

print(person)  # Output: {'name': 'John'}

# Clearing all items from the dictionary
person.clear()
print(person)  # Output: {}
`,
      clearMethodCode: `person = {'name': 'John', 'age': 30, 'city': 'New York'}
print(person)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}

person.clear()
print(person)  # Output: {}
`,
      copyMethodCode: `original = {'name': 'John', 'age': 30, 'city': 'New York'}
copied = original.copy()

print(original)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}
print(copied)    # Output: {'name': 'John', 'age': 30, 'city': 'New York'}

# Modifying the copied dictionary doesn't affect the original
copied['age'] = 31
print(original['age'])  # Output: 30
print(copied['age'])    # Output: 31

# Note: copy() creates a shallow copy
nested = {'name': 'John', 'info': {'age': 30, 'city': 'New York'}}
nested_copy = nested.copy()
nested_copy['info']['age'] = 31
print(nested['info']['age'])      # Output: 31 (changed)
print(nested_copy['info']['age']) # Output: 31 (changed)
`,
      fromkeysMethodCode: `# Creating a dictionary with default values
keys = ['name', 'age', 'city']
default_value = 'Unknown'

person = dict.fromkeys(keys, default_value)
print(person)  # Output: {'name': 'Unknown', 'age': 'Unknown', 'city': 'Unknown'}

# Using fromkeys() with a default value of None
another_person = dict.fromkeys(keys)
print(another_person)  # Output: {'name': None, 'age': None, 'city': None}

# Be careful with mutable default values
mutable_default = dict.fromkeys(keys, [])
mutable_default['name'].append('John')
print(mutable_default)
# Output: {'name': ['John'], 'age': ['John'], 'city': ['John']}
# All keys reference the same list object
`,
      getMethodCode: `person = {'name': 'John', 'age': 30}

# Basic usage
print(person.get('name'))  # Output: John
print(person.get('city'))  # Output: None

# Using a default value
print(person.get('city', 'Unknown'))  # Output: Unknown

# Difference between get() and direct access
print(person.get('country'))  # Output: None
# print(person['country'])    # Raises KeyError

# Using get() in conditionals
if person.get('job') is None:
    print("Person's job is not specified")

# Chaining get() for nested dictionaries
nested = {'user': {'name': 'John', 'age': 30}}
print(nested.get('user', {}).get('name', 'Unknown'))  # Output: John
print(nested.get('profile', {}).get('email', 'No email'))  # Output: No email
`,
      itemsMethodCode: `person = {'name': 'John', 'age': 30, 'city': 'New York'}

# Getting all key-value pairs
items = person.items()
print(items)  # Output: dict_items([('name', 'John'), ('age', 30), ('city', 'New York')])

# Iterating over key-value pairs
for key, value in person.items():
    print(f"{key}: {value}")

# Converting to a list
items_list = list(person.items())
print(items_list)  # Output: [('name', 'John'), ('age', 30), ('city', 'New York')]

# Checking if a tuple is in items
print(('name', 'John') in person.items())  # Output: True

# items view is dynamic
view = person.items()
person['country'] = 'USA'
print(view)  # Output includes the new item: dict_items([('name', 'John'), ('age', 30), ('city', 'New York'), ('country', 'USA')])
`,
      keysMethodCode: `person = {'name': 'John', 'age': 30, 'city': 'New York'}

# Getting all keys
keys = person.keys()
print(keys)  # Output: dict_keys(['name', 'age', 'city'])

# Iterating over keys
for key in person.keys():
    print(key)

# Converting to a list
keys_list = list(person.keys())
print(keys_list)  # Output: ['name', 'age', 'city']

# Checking if a key exists
print('name' in person.keys())  # Output: True
print('name' in person)  # This is equivalent and more efficient

# keys view is dynamic
view = person.keys()
person['country'] = 'USA'
print(view)  # Output includes the new key: dict_keys(['name', 'age', 'city', 'country'])

# Using keys view in set operations
other_keys = {'age', 'height', 'weight'}
common_keys = person.keys() & other_keys
print(common_keys)  # Output: {'age'}
`,
      popMethodCode: `person = {'name': 'John', 'age': 30, 'city': 'New York'}

# Remove and return a value for a specified key
age = person.pop('age')
print(age)    # Output: 30
print(person) # Output: {'name': 'John', 'city': 'New York'}

# Using a default value when key is not found
country = person.pop('country', 'Unknown')
print(country)  # Output: Unknown

# KeyError is raised if the key is not found and no default is provided
try:
    person.pop('country')
except KeyError:
    print("KeyError: 'country' not found in dictionary")

# pop() with a variable key
key_to_remove = 'city'
if key_to_remove in person:
    value = person.pop(key_to_remove)
    print(f"Removed {key_to_remove}: {value}")

print(person)  # Output: {'name': 'John'}
`,
      popitemMethodCode: `person = {'name': 'John', 'age': 30, 'city': 'New York'}

# Remove and return the last inserted item (Python 3.7+)
last_item = person.popitem()
print(last_item)  # Output: ('city', 'New York')
print(person)     # Output: {'name': 'John', 'age': 30}

# Continue removing items
second_last = person.popitem()
print(second_last)  # Output: ('age', 30)
print(person)       # Output: {'name': 'John'}

# KeyError is raised if the dictionary is empty
try:
    person.popitem()
    person.popitem()  # This will raise KeyError
except KeyError:
    print("KeyError: popitem() from an empty dictionary")

# Using popitem() in a loop to empty a dictionary
inventory = {'apples': 5, 'bananas': 2, 'oranges': 8}
while inventory:
    item, quantity = inventory.popitem()
    print(f"Sold out: {quantity} {item}")

print(inventory)  # Output: {}
`,
      setdefaultMethodCode: `person = {'name': 'John', 'age': 30}

# Get an existing key's value
name = person.setdefault('name', 'Unknown')
print(name)  # Output: John
print(person)  # Output: {'name': 'John', 'age': 30}

# Set a default value for a non-existing key
city = person.setdefault('city', 'New York')
print(city)  # Output: New York
print(person)  # Output: {'name': 'John', 'age': 30, 'city': 'New York'}

# Using setdefault with lists
contacts = {}
contacts.setdefault('John', []).append('123-456-7890')
contacts.setdefault('John', []).append('john@example.com')
print(contacts)  # Output: {'John': ['123-456-7890', 'john@example.com']}

# Counting occurrences using setdefault
text = "hello world"
char_count = {}
for char in text:
    char_count.setdefault(char, 0)
    char_count[char] += 1
print(char_count)  # Output: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
`,
      updateMethodCode: `person = {'name': 'John', 'age': 30}

# Update with another dictionary
person.update({'city': 'New York', 'age': 31})
print(person)  # Output: {'name': 'John', 'age': 31, 'city': 'New York'}

# Update with keyword arguments
person.update(country='USA', job='Engineer')
print(person)  # Output: {'name': 'John', 'age': 31, 'city': 'New York', 'country': 'USA', 'job': 'Engineer'}

# Update with a list of tuples
person.update([('hobby', 'reading'), ('age', 32)])
print(person)  # Output: {'name': 'John', 'age': 32, 'city': 'New York', 'country': 'USA', 'job': 'Engineer', 'hobby': 'reading'}

# Update with the keys from another dictionary, but keep original values if key exists
another_person = {'name': 'Jane', 'age': 28, 'city': 'London', 'pet': 'cat'}
person.update({k: person.get(k, v) for k, v in another_person.items()})
print(person)  # Output: {'name': 'John', 'age': 32, 'city': 'New York', 'country': 'USA', 'job': 'Engineer', 'hobby': 'reading', 'pet': 'cat'}

# Using update() in a function to handle default parameters
def create_person(name, age, **kwargs):
    person = {'name': name, 'age': age}
    person.update(kwargs)
    return person

new_person = create_person('Alice', 25, city='Paris', job='Artist')
print(new_person)  # Output: {'name': 'Alice', 'age': 25, 'city': 'Paris', 'job': 'Artist'}
`,
      valuesMethodCode: `person = {'name': 'John', 'age': 30, 'city': 'New York'}

# Getting all values
values = person.values()
print(values)  # Output: dict_values(['John', 30, 'New York'])

# Iterating over values
for value in person.values():
    print(value)

# Converting to a list
values_list = list(person.values())
print(values_list)  # Output: ['John', 30, 'New York']

# Checking if a value exists
print(30 in person.values())  # Output: True

# values view is dynamic
view = person.values()
person['country'] = 'USA'
print(view)  # Output includes the new value: dict_values(['John', 30, 'New York', 'USA'])

# Counting value occurrences
grades = {'Alice': 'A', 'Bob': 'B', 'Charlie': 'A', 'David': 'C'}
grade_counts = {}
for grade in grades.values():
    grade_counts[grade] = grade_counts.get(grade, 0) + 1
print(grade_counts)  # Output: {'A': 2, 'B': 1, 'C': 1}
`,
      dictionaryViewsCode: `person = {'name': 'John', 'age': 30, 'city': 'New York'}

# Creating views
keys_view = person.keys()
values_view = person.values()
items_view = person.items()

print(keys_view)    # Output: dict_keys(['name', 'age', 'city'])
print(values_view)  # Output: dict_values(['John', 30, 'New York'])
print(items_view)   # Output: dict_items([('name', 'John'), ('age', 30), ('city', 'New York')])

# Views are dynamic
person['country'] = 'USA'
print(keys_view)    # Output: dict_keys(['name', 'age', 'city', 'country'])

# Set operations on views
other_dict = {'age': 25, 'gender': 'Male', 'city': 'London'}
common_keys = person.keys() & other_dict.keys()
print(common_keys)  # Output: {'age', 'city'}

# Length of views
print(len(keys_view))  # Output: 4

# Iterating over views
for item in items_view:
    print(f"{item[0]}: {item[1]}")

# Views support membership tests
print('name' in keys_view)     # Output: True
print('John' in values_view)   # Output: True
print(('age', 30) in items_view)  # Output: True
`,
      dictionaryComprehensionsCode: `# Basic dictionary comprehension
squares = {x: x**2 for x in range(6)}
print(squares)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Dictionary comprehension with conditions
even_squares = {x: x**2 for x in range(11) if x % 2 == 0}
print(even_squares)  # Output: {0: 0, 2: 4, 4: 16, 6: 36, 8: 64, 10: 100}

# Creating a dictionary from two lists
names = ['Alice', 'Bob', 'Charlie']
ages = [25, 30, 35]
name_age = {name: age for name, age in zip(names, ages)}
print(name_age)  # Output: {'Alice': 25, 'Bob': 30, 'Charlie': 35}

# Swapping keys and values
original = {'a': 1, 'b': 2, 'c': 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # Output: {1: 'a', 2: 'b', 3: 'c'}

# Conditional value assignment
scores = {'Alice': 85, 'Bob': 92, 'Charlie': 78, 'David': 95}
grade_dict = {name: 'A' if score >= 90 else 'B' if score >= 80 else 'C' for name, score in scores.items()}
print(grade_dict)  # Output: {'Alice': 'B', 'Bob': 'A', 'Charlie': 'C', 'David': 'A'}

# Nested dictionary comprehension
matrix = {(i, j): i*j for i in range(3) for j in range(3)}
print(matrix)  # Output: {(0, 0): 0, (0, 1): 0, (0, 2): 0, (1, 0): 0, (1, 1): 1, (1, 2): 2, (2, 0): 0, (2, 1): 2, (2, 2): 4}
`,
      nestedDictionariesCode: `# Creating a nested dictionary
company = {
    'department1': {
        'name': 'Engineering',
        'manager': 'Alice',
        'employees': {
            'Bob': {'position': 'Developer', 'salary': 75000},
            'Charlie': {'position': 'Tester', 'salary': 70000}
        }
    },
    'department2': {
        'name': 'Marketing',
        'manager': 'David',
        'employees': {
            'Eve': {'position': 'Marketing Specialist', 'salary': 65000},
            'Frank': {'position': 'Content Writer', 'salary': 60000}
        }
    }
}

# Accessing nested dictionary elements
print(company['department1']['name'])  # Output: Engineering
print(company['department2']['employees']['Eve']['position'])  # Output: Marketing Specialist

# Modifying nested dictionary elements
company['department1']['employees']['Bob']['salary'] += 5000
print(company['department1']['employees']['Bob'])  # Output: {'position': 'Developer', 'salary': 80000}

# Adding new elements to nested dictionaries
company['department1']['employees']['David'] = {'position': 'Designer', 'salary': 72000}

# Iterating over nested dictionaries
for dept_id, dept_info in company.items():
    print(f"\nDepartment: {dept_info['name']}")
    print(f"Manager: {dept_info['manager']}")
    print("Employees:")
    for emp_name, emp_info in dept_info['employees'].items():
        print(f"  - {emp_name}: {emp_info['position']} ({emp_info['salary']})")

# Using get() with nested dictionaries to handle missing keys safely
intern_salary = company.get('department3', {}).get('employees', {}).get('Intern', {}).get('salary', 'Not found')
print(f"\nIntern salary: {intern_salary}")  # Output: Intern salary: Not found

# Updating nested dictionaries
company['department2']['employees'].update({
    'Grace': {'position': 'Social Media Manager', 'salary': 62000}
})

# Removing nested elements
removed_employee = company['department1']['employees'].pop('Charlie')
print(f"\nRemoved employee: {removed_employee}")

# Deep copy for nested dictionaries
import copy
company_copy = copy.deepcopy(company)
company_copy['department1']['manager'] = 'Alex'
print(f"\nOriginal manager: {company['department1']['manager']}")  # Output: Alice
print(f"Copied manager: {company_copy['department1']['manager']}")  # Output: Alex
`,
      advancedTechniquesCode: `from collections import defaultdict, OrderedDict
import operator

# Using defaultdict
word_count = defaultdict(int)
text = "the quick brown fox jumps over the lazy dog"
for word in text.split():
    word_count[word] += 1
print(dict(word_count))

# Using OrderedDict (note: in Python 3.7+, regular dicts maintain insertion order)
ordered = OrderedDict([('b', 2), ('a', 1), ('c', 3)])
print(ordered)
ordered.move_to_end('b')
print(ordered)

# Sorting a dictionary by values
scores = {'Alice': 85, 'Bob': 92, 'Charlie': 78, 'David': 95}
sorted_scores = dict(sorted(scores.items(), key=operator.itemgetter(1), reverse=True))
print(sorted_scores)

# Merging dictionaries (Python 3.5+)
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
merged = {**dict1, **dict2}
print(merged)

# Dictionary of functions
def add(x, y): return x + y
def subtract(x, y): return x - y
operations = {
    'add': add,
    'subtract': subtract
}
print(operations['add'](5, 3))

# Using dictionaries for switch-case like behavior
def handle_a(): return "Handling A"
def handle_b(): return "Handling B"
def handle_default(): return "Handling Default"

handlers = {
    'A': handle_a,
    'B': handle_b
}
action = 'A'
result = handlers.get(action, handle_default)()
print(result)
`,
      mergingDictionariesCode: `# Python 3.9+ dictionary union operator
dict1 = {'a': 1, 'b': 2}
dict2 = {'b': 3, 'c': 4}
merged = dict1 | dict2
print(merged)  # Output: {'a': 1, 'b': 3, 'c': 4}

# Updating in-place
dict1 |= dict2
print(dict1)  # Output: {'a': 1, 'b': 3, 'c': 4}

# Merging multiple dictionaries
dict3 = {'d': 5, 'e': 6}
merged_multi = dict1 | dict2 | dict3
print(merged_multi)  # Output: {'a': 1, 'b': 3, 'c': 4, 'd': 5, 'e': 6}

# Comparison with update() method
dict4 = {'a': 1, 'b': 2}
dict5 = {'b': 3, 'c': 4}
dict4.update(dict5)
print(dict4)  # Output: {'a': 1, 'b': 3, 'c': 4}

# Note: The union operator creates a new dictionary, while update() modifies in-place
`,
      dictionarySetComprehensionsCode: `# Combining dictionary and set operations
set1 = {1, 2, 3, 4, 5}
set2 = {3, 4, 5, 6, 7}

# Dictionary of elements in set1 but not in set2
diff_dict = {x: x**2 for x in (set1 - set2)}
print(diff_dict)  # Output: {1: 1, 2: 4}

# Dictionary of common elements
common_dict = {x: x**3 for x in (set1 & set2)}
print(common_dict)  # Output: {3: 27, 4: 64, 5: 125}

# Dictionary of all unique elements
union_dict = {x: 'Set1' if x in set1 else 'Set2' for x in (set1 | set2)}
print(union_dict)  # Output: {1: 'Set1', 2: 'Set1', 3: 'Set1', 4: 'Set1', 5: 'Set1', 6: 'Set2', 7: 'Set2'}

# Filtering a dictionary based on a set
original_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
keys_to_keep = {'b', 'c', 'e', 'f'}
filtered_dict = {k: v for k, v in original_dict.items() if k in keys_to_keep}
print(filtered_dict)  # Output: {'b': 2, 'c': 3, 'e': 5}

# Creating a dictionary from the intersection of two dictionaries
dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'b': 20, 'c': 30, 'd': 40}
intersection_dict = {k: (dict1[k], dict2[k]) for k in dict1.keys() & dict2.keys()}
print(intersection_dict)  # Output: {'b': (2, 20), 'c': (3, 30)}
`,
      jsonDictionaryCode: `import json

# Python dictionary
person = {
    'name': 'John Doe',
    'age': 30,
    'city': 'New York',
    'hobbies': ['reading', 'swimming', 'cycling'],
    'married': False
}

# Converting dictionary to JSON string
json_string = json.dumps(person, indent=2)
print("JSON String:")
print(json_string)

# Converting JSON string back to Python dictionary
decoded_person = json.loads(json_string)
print("\nDecoded Python Dictionary:")
print(decoded_person)

# Working with JSON files
# Writing to a JSON file
with open('person.json', 'w') as json_file:
    json.dump(person, json_file, indent=2)

# Reading from a JSON file
with open('person.json', 'r') as json_file:
    loaded_person = json.load(json_file)

print("\nLoaded from JSON file:")
print(loaded_person)

# Handling custom objects
class Date:
    def __init__(self, day, month, year):
        self.day = day
        self.month = month
        self.year = year

# Custom JSON encoder
class DateEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Date):
            return f"{obj.day:02d}-{obj.month:02d}-{obj.year}"
        return super().default(obj)

person_with_date = {
    'name': 'Jane Doe',
    'birthdate': Date(15, 5, 1990)
}

# Using the custom encoder
json_with_date = json.dumps(person_with_date, cls=DateEncoder, indent=2)
print("\nJSON with custom date encoding:")
print(json_with_date)

# Custom JSON decoder
def date_decoder(dct):
    for key, value in dct.items():
        if key == 'birthdate':
            day, month, year = map(int, value.split('-'))
            dct[key] = Date(day, month, year)
    return dct

# Decoding with custom decoder
decoded_person_with_date = json.loads(json_with_date, object_hook=date_decoder)
print("\nDecoded person with custom date:")
print(f"Name: {decoded_person_with_date['name']}")
print(f"Birthdate: {decoded_person_with_date['birthdate'].day}-{decoded_person_with_date['birthdate'].month}-{decoded_person_with_date['birthdate'].year}")
`,
      memoryEfficientDictionaryCode: `class MemoryEfficientPerson:
    __slots__ = ['name', 'age', 'city']

    def __init__(self, name, age, city):
        self.name = name
        self.age = age
        self.city = city

# Creating an instance
person = MemoryEfficientPerson("John Doe", 30, "New York")

# Accessing attributes
print(f"Name: {person.name}")
print(f"Age: {person.age}")
print(f"City: {person.city}")

# Trying to add a new attribute will raise an AttributeError
try:
    person.email = "john@example.com"
except AttributeError as e:
    print(f"Error: {e}")

# Comparing memory usage
import sys

regular_dict = {'name': "John Doe", 'age': 30, 'city': "New York"}
print(f"\nMemory usage of regular dict: {sys.getsizeof(regular_dict)} bytes")
print(f"Memory usage of MemoryEfficientPerson: {sys.getsizeof(person)} bytes")

# Note: The actual memory savings can be more significant for larger numbers of instances

# Creating multiple instances
people = [MemoryEfficientPerson(f"Person {i}", 20 + i, f"City {i}") for i in range(1000)]
print(f"\nMemory usage of 1000 MemoryEfficientPerson instances: {sum(sys.getsizeof(p) for p in people)} bytes")

regular_people = [{'name': f"Person {i}", 'age': 20 + i, 'city': f"City {i}"} for i in range(1000)]
print(f"Memory usage of 1000 regular dictionaries: {sum(sys.getsizeof(p) for p in regular_people)} bytes")
`,
      customDictionarySubclassCode: `class CaseInsensitiveDict(dict):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._convert_keys()
    
    def __getitem__(self, key):
        return super().__getitem__(key.lower())
    
    def __setitem__(self, key, value):
        super().__setitem__(key.lower(), value)
    
    def __delitem__(self, key):
        super().__delitem__(key.lower())
    
    def __contains__(self, key):
        return super().__contains__(key.lower())
    
    def get(self, key, default=None):
        return super().get(key.lower(), default)
    
    def _convert_keys(self):
        for key in list(self.keys()):
            value = super().pop(key)
            self[key.lower()] = value

# Using the CaseInsensitiveDict
ci_dict = CaseInsensitiveDict()
ci_dict['Name'] = 'John Doe'
ci_dict['AGE'] = 30

print(ci_dict['name'])  # Output: John Doe
print(ci_dict['AgE'])   # Output: 30

ci_dict['city'] = 'New York'
print(ci_dict.get('CITY'))  # Output: New York

print('NaMe' in ci_dict)  # Output: True

# Converting a regular dictionary
regular_dict = {'Name': 'Jane Doe', 'Job': 'Engineer'}
ci_dict2 = CaseInsensitiveDict(regular_dict)
print(ci_dict2['name'])  # Output: Jane Doe
print(ci_dict2['JOB'])   # Output: Engineer

# Updating values
ci_dict2['NAME'] = 'Janet Doe'
print(ci_dict2['name'])  # Output: Janet Doe

# Deleting items
del ci_dict2['job']
print(ci_dict2)  # Output: {'name': 'Janet Doe'}

# Iterating over items
for key, value in ci_dict.items():
    print(f"{key}: {value}")

# Note: Keys are stored in lowercase, but this is an implementation detail
print(ci_dict.keys())  # Output: dict_keys(['name', 'age', 'city'])
`,
    };
  },
};
</script>

<style scoped>
  pre {
  font-size: 0.65rem;
  white-space: pre-wrap; /* Ensures text wrapping for very long lines */
  overflow-x: auto;      /* Adds horizontal scroll for overflow content */ 
  }

  code {
  overflow-x: scroll;
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