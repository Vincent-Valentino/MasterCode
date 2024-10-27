<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Python Sets" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Sets are an unordered collection of unique elements in Python. They are mutable, iterable, and can store multiple items. Sets are particularly useful for removing duplicates from sequences and performing mathematical set operations such as union, intersection, and difference. In this comprehensive guide, we'll explore every aspect of Python sets, from basic operations to advanced techniques.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#creating-sets" class="text-blue-800 underline">Creating Sets</a></li>
        <li><a href="#set-operations" class="text-blue-800 underline">Set Operations</a></li>
        <li><a href="#modifying-sets" class="text-blue-800 underline">Modifying Sets</a></li>
        <li><a href="#set-methods" class="text-blue-800 underline">Set Methods</a></li>
        <li><a href="#set-comparisons" class="text-blue-800 underline">Set Comparisons</a></li>
        <li><a href="#frozensets" class="text-blue-800 underline">Frozensets</a></li>
        <li><a href="#set-comprehensions" class="text-blue-800 underline">Set Comprehensions</a></li>
        <li><a href="#advanced-techniques" class="text-blue-800 underline">Advanced Techniques</a></li>
        <li><a href="#performance-considerations" class="text-blue-800 underline">Performance Considerations</a></li>
      </ul>

      <!-- Creating Sets -->
      <h2 id="creating-sets" class="text-xl md:text-2xl font-semibold mb-4">Creating Sets</h2>
      <p class="text-base md:text-lg mb-4">
        There are multiple ways to create sets in Python:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ creatingSetsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Key points about creating sets:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Sets automatically remove duplicate elements.</li>
        <li>Sets can contain different types of elements, as long as they are hashable.</li>
        <li>Mutable objects like lists or dictionaries cannot be elements of a set.</li>
        <li>The order of elements in a set is arbitrary and can change between different runs of a program.</li>
      </ul>

      <!-- Set Operations -->
      <h2 id="set-operations" class="text-xl md:text-2xl font-semibold mb-4">Set Operations</h2>
      <p class="text-base md:text-lg mb-4">
        Python sets support various mathematical set operations:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ setOperationsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        These set operations are fundamental to working with sets and can be very useful in various programming scenarios, such as data deduplication, finding common elements, or identifying differences between collections.
      </p>

      <!-- Modifying Sets -->
      <h2 id="modifying-sets" class="text-xl md:text-2xl font-semibold mb-4">Modifying Sets</h2>
      <p class="text-base md:text-lg mb-4">
        Sets are mutable, which means you can add or remove elements after creation:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ modifyingSetsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        When modifying sets, keep in mind:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Adding a duplicate element has no effect.</li>
        <li>Removing a non-existent element with <code>remove()</code> raises a <code>KeyError</code>, while <code>discard()</code> doesn't.</li>
        <li>The <code>pop()</code> method removes and returns an arbitrary element.</li>
        <li>The <code>clear()</code> method removes all elements from the set.</li>
      </ul>

      <!-- Set Methods -->
      <h2 id="set-methods" class="text-xl md:text-2xl font-semibold mb-4">Set Methods</h2>
      <p class="text-base md:text-lg mb-4">
        Python sets come with several built-in methods. Let's explore each one in detail:
      </p>

      <h3 class="text-lg md:text-xl font-semibold mb-2">1. add()</h3>
      <p class="text-base md:text-lg mb-4">
        Adds an element to the set. If the element already exists, the set remains unchanged.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ addMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">2. clear()</h3>
      <p class="text-base md:text-lg mb-4">
        Removes all elements from the set.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ clearMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">3. copy()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns a shallow copy of the set.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ copyMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">4. difference()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns a new set containing elements that are in the set but not in the specified other set(s).
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ differenceMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">5. difference_update()</h3>
      <p class="text-base md:text-lg mb-4">
        Removes all elements of another set from this set.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ differenceUpdateMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">6. discard()</h3>
      <p class="text-base md:text-lg mb-4">
        Removes an element from the set if it is present.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ discardMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">7. intersection()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns a new set with elements common to the set and all others.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ intersectionMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">8. intersection_update()</h3>
      <p class="text-base md:text-lg mb-4">
        Updates the set, keeping only elements found in it and all others.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ intersectionUpdateMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">9. isdisjoint()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns True if two sets have a null intersection.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ isdisjointMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">10. issubset()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns True if another set contains this set.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ issubsetMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">11. issuperset()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns True if this set contains another set.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ issupersetMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">12. pop()</h3>
      <p class="text-base md:text-lg mb-4">
        Removes and returns an arbitrary element from the set. Raises KeyError if the set is empty.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ popMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">13. remove()</h3>
      <p class="text-base md:text-lg mb-4">
        Removes an element from the set. Raises KeyError if the element is not present.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ removeMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">14. symmetric_difference()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns a new set with elements in either the set or other but not both.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ symmetricDifferenceMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">15. symmetric_difference_update()</h3>
      <p class="text-base md:text-lg mb-4">
        Updates the set, keeping only elements found in either set, but not in both.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ symmetricDifferenceUpdateMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">16. union()</h3>
      <p class="text-base md:text-lg mb-4">
        Returns a new set with elements from the set and all others.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ unionMethodCode }}</code></pre>
      </div>

      <h3 class="text-lg md:text-xl font-semibold mb-2">17. update()</h3>
      <p class="text-base md:text-lg mb-4">
        Updates the set, adding elements from all others.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ updateMethodCode }}</code></pre>
      </div>

      <!-- Set Comparisons -->
      <h2 id="set-comparisons" class="text-xl md:text-2xl font-semibold mb-4">Set Comparisons</h2>
      <p class="text-base md:text-lg mb-4">
        Sets can be compared using various operators:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ setComparisonsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        These comparison operators provide a concise way to check for subset, superset, and equality relationships between sets.
      </p>

      <!-- Frozensets -->
      <h2 id="frozensets" class="text-xl md:text-2xl font-semibold mb-4">Frozensets</h2>
      <p class="text-base md:text-lg mb-4">
        Frozensets are immutable versions of sets:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ frozensetsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Frozensets are immutable versions of sets. They have the following characteristics:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Once created, frozensets cannot be modified (no add or remove operations).</li>
        <li>Frozensets can be used as dictionary keys or as elements of another set.</li>
        <li>They support all non-modifying set operations (e.g., union, intersection, difference).</li>
      </ul>

      <!-- Set Comprehensions -->
      <h2 id="set-comprehensions" class="text-xl md:text-2xl font-semibold mb-4">Set Comprehensions</h2>
      <p class="text-base md:text-lg mb-4">
        Set comprehensions provide a concise way to create sets based on existing iterables:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ setComprehensionsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Set comprehensions are powerful tools for creating sets with transformed or filtered elements from other iterables. They can often replace loops and provide more readable and efficient code.
      </p>

      <!-- Advanced Techniques -->
      <h2 id="advanced-techniques" class="text-xl md:text-2xl font-semibold mb-4">Advanced Techniques</h2>
      <p class="text-base md:text-lg mb-4">
        Let's explore some advanced techniques for working with sets:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ advancedTechniquesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        These advanced techniques showcase the versatility of sets in Python. They can be particularly useful in data processing, algorithmic problems, and optimizing certain operations.
      </p>

      <!-- Performance Considerations -->
      <h2 id="performance-considerations" class="text-xl md:text-2xl font-semibold mb-4">Performance Considerations</h2>
      <p class="text-base md:text-lg mb-4">
        Sets offer significant performance advantages in certain scenarios:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ performanceConsiderationsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Key performance considerations for sets include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Membership testing in sets is generally O(1), making it much faster than lists for large collections.</li>
        <li>Set operations like union, intersection, and difference are optimized and can be faster than manual implementations with loops.</li>
        <li>Creating a set from a list with many duplicates can significantly reduce memory usage.</li>
        <li>For very small collections, the overhead of creating a set might outweigh its benefits.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Python sets are powerful data structures that offer unique capabilities:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Efficient membership testing and removal of duplicates</li>
        <li>Mathematical set operations (union, intersection, difference)</li>
        <li>Mutable nature allows for dynamic modification (except for frozensets)</li>
        <li>Comprehensions for concise set creation</li>
        <li>Performance benefits in appropriate scenarios</li>
      </ul>
      <p class="text-base md:text-lg mb-4">
        Mastering sets is crucial for effective Python programming, especially when dealing with unique collections, set operations, or performance-critical code. As you continue your Python journey, you'll find sets to be an indispensable tool in your programming toolkit.
      </p>
      <p class="text-base md:text-lg">
        In the next section, we'll explore <strong>Python File Handling</strong>, which will introduce you to reading from and writing to files in Python.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue"
export default {
  name: "PythonSets",
  components: {
    Header
  },
  data() {
    return {
      creatingSetsCode: `# Creating a set from a list
fruits = set(['apple', 'banana', 'cherry', 'apple'])
print(fruits)  # Output: {'cherry', 'banana', 'apple'}

# Creating a set using curly braces
numbers = {1, 2, 3, 4, 5, 5, 4, 3, 2, 1}
print(numbers)  # Output: {1, 2, 3, 4, 5}

# Creating a set from a string
char_set = set('hello')
print(char_set)  # Output: {'h', 'e', 'l', 'o'}

# Creating an empty set
empty_set = set()
print(type(empty_set))  # Output: <class 'set'>

# Note: {} creates an empty dictionary, not an empty set
empty_dict = {}
print(type(empty_dict))  # Output: <class 'dict'>

# Creating a set with mixed data types
mixed_set = {42, 'python', (1, 2, 3)}
print(mixed_set)  # Output: {42, 'python', (1, 2, 3)}

# Attempting to create a set with mutable elements (will raise an error)
try:
    invalid_set = {[1, 2], 3}
except TypeError as e:
    print(f"Error: {e}")  # Output: Error: unhashable type: 'list'
`,
      setOperationsCode: `# Define two sets
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

# Union
print(A | B)  # Output: {1, 2, 3, 4, 5, 6, 7, 8}
print(A.union(B))  # Same as above

# Intersection
print(A & B)  # Output: {4, 5}
print(A.intersection(B))  # Same as above

# Difference
print(A - B)  # Output: {1, 2, 3}
print(A.difference(B))  # Same as above

# Symmetric Difference
print(A ^ B)  # Output: {1, 2, 3, 6, 7, 8}
print(A.symmetric_difference(B))  # Same as above

# Subset
C = {1, 2}
print(C.issubset(A))  # Output: True
print(C <= A)  # Same as above

# Proper Subset
print(C < A)  # Output: True
print(A < A)  # Output: False (a set is not a proper subset of itself)

# Superset
print(A.issuperset(C))  # Output: True
print(A >= C)  # Same as above

# Proper Superset
print(A > C)  # Output: True
print(A > A)  # Output: False (a set is not a proper superset of itself)

# Disjoint sets
D = {10, 11, 12}
print(A.isdisjoint(D))  # Output: True
print(A.isdisjoint(B))  # Output: False
`,
      modifyingSetsCode: `# Start with a set
fruits = {'apple', 'banana', 'cherry'}

# Adding elements
fruits.add('date')
print(fruits)  # Output: {'apple', 'banana', 'cherry', 'date'}

# Adding an element that already exists (no effect)
fruits.add('apple')
print(fruits)  # Output: {'apple', 'banana', 'cherry', 'date'}

# Adding multiple elements
fruits.update(['elderberry', 'fig'])
print(fruits)  # Output: {'apple', 'banana', 'cherry', 'date', 'elderberry', 'fig'}

# Removing elements
fruits.remove('banana')
print(fruits)  # Output: {'apple', 'cherry', 'date', 'elderberry', 'fig'}

# Attempting to remove a non-existent element
try:
    fruits.remove('grape')
except KeyError as e:
    print(f"Error: {e}")  # Output: Error: 'grape'

# Removing an element if it exists
fruits.discard('cherry')
print(fruits)  # Output: {'apple', 'date', 'elderberry', 'fig'}

# Discard has no effect if the element doesn't exist
fruits.discard('grape')  # No error raised

# Pop an arbitrary element
popped = fruits.pop()
print(f"Popped: {popped}")
print(fruits)

# Clear the set
fruits.clear()
print(fruits)  # Output: set()

# Attempting to pop from an empty set
try:
    fruits.pop()
except KeyError as e:
    print(f"Error: {e}")  # Output: Error: 'pop from an empty set'
`,
      addMethodCode: `fruits = {'apple', 'banana'}
print(fruits)  # Output: {'apple', 'banana'}

fruits.add('cherry')
print(fruits)  # Output: {'apple', 'banana', 'cherry'}

# Adding an existing element has no effect
fruits.add('apple')
print(fruits)  # Output: {'apple', 'banana', 'cherry'}

# Adding a different type of element
fruits.add(42)
print(fruits)  # Output: {'apple', 'banana', 'cherry', 42}

# Adding a tuple (hashable)
fruits.add((1, 2))
print(fruits)  # Output: {'apple', 'banana', 'cherry', 42, (1, 2)}

# Attempting to add an unhashable type (list)
try:
    fruits.add([3, 4])
except TypeError as e:
    print(f"Error: {e}")  # Output: Error: unhashable type: 'list'
`,
      clearMethodCode: `numbers = {1, 2, 3, 4, 5}
print(numbers)  # Output: {1, 2, 3, 4, 5}

numbers.clear()
print(numbers)  # Output: set()

# Clear an already empty set (no effect)
numbers.clear()
print(numbers)  # Output: set()

# Clear a set with mixed types
mixed_set = {1, 'two', (3, 4)}
print(mixed_set)  # Output: {1, 'two', (3, 4)}
mixed_set.clear()
print(mixed_set)  # Output: set()
`,
      copyMethodCode: `original = {1, 2, 3}
copied = original.copy()

print(original)  # Output: {1, 2, 3}
print(copied)    # Output: {1, 2, 3}

# Modifying the copy doesn't affect the original
copied.add(4)
print(original)  # Output: {1, 2, 3}
print(copied)    # Output: {1, 2, 3, 4}

# Shallow copy demonstration
nested = {1, 2, (3, 4)}
nested_copy = nested.copy()

# Modifying a mutable element in the original set
list_in_set = [5, 6]
nested.add(list_in_set)
list_in_set.append(7)

print(nested)       # Output: {1, 2, (3, 4), [5, 6, 7]}
print(nested_copy)  # Output: {1, 2, (3, 4)}

# But if we had added the list to both sets:
nested_copy.add(list_in_set)
print(nested)       # Output: {1, 2, (3, 4), [5, 6, 7]}
print(nested_copy)  # Output: {1, 2, (3, 4), [5, 6, 7]}
# Both sets now reference the same list object
`,
      differenceMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
set3 = {1, 2}

# Difference between two sets
diff = set1.difference(set2)
print(diff)  # Output: {1, 2, 3}

# Using the - operator (equivalent to difference())
diff = set1 - set2
print(diff)  # Output: {1, 2, 3}

# Difference with multiple sets
diff = set1.difference(set2, set3)
print(diff)  # Output: {3}

# The original sets remain unchanged
print(set1)  # Output: {1, 2, 3, 4, 5}
print(set2)  # Output: {4, 5, 6, 7, 8}

# Empty difference
print(set1.difference(set1))  # Output: set()

# Difference with an empty set
print(set1.difference(set()))  # Output: {1, 2, 3, 4, 5}
print(set().difference(set1))  # Output: set()
`,
      differenceUpdateMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
set3 = {1, 2}

print("Original set1:", set1)

# Update set1 with the difference
set1.difference_update(set2)
print("After difference_update with set2:", set1)  # Output: {1, 2, 3}

# Reset set1
set1 = {1, 2, 3, 4, 5}

# Update set1 with the difference of multiple sets
set1.difference_update(set2, set3)
print("After difference_update with set2 and set3:", set1)  # Output: {3}

# Using the -= operator (equivalent to difference_update())
set1 = {1, 2, 3, 4, 5}
set1 -= set2
print("After using -=:", set1)  # Output: {1, 2, 3}

# difference_update with an empty set (no effect)
set1 = {1, 2, 3, 4, 5}
set1.difference_update(set())
print("After difference_update with empty set:", set1)  # Output: {1, 2, 3, 4, 5}

# difference_update with itself (results in an empty set)
set1.difference_update(set1)
print("After difference_update with itself:", set1)  # Output: set()
`,
      discardMethodCode: `fruits = {'apple', 'banana', 'cherry', 'date'}
print("Original set:", fruits)

# Discard an existing element
fruits.discard('banana')
print("After discarding 'banana':", fruits)  # Output: {'apple', 'cherry', 'date'}

# Discard a non-existing element (no error)
fruits.discard('grape')
print("After discarding 'grape':", fruits)  # Output: {'apple', 'cherry', 'date'}

# Discard with a variable
fruit_to_remove = 'cherry'
fruits.discard(fruit_to_remove)
print(f"After discarding {fruit_to_remove}:", fruits)  # Output: {'apple', 'date'}

# Comparison with remove() method
try:
    fruits.remove('grape')  # This would raise a KeyError
except KeyError as e:
    print(f"Error with remove(): {e}")

fruits.discard('grape')  # This doesn't raise an error
print("Final set:", fruits)  # Output: {'apple', 'date'}
`,
      intersectionMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
set3 = {1, 2, 5}

# Intersection of two sets
print(set1.intersection(set2))  # Output: {4, 5}

# Using the & operator (equivalent to intersection())
print(set1 & set2)  # Output: {4, 5}

# Intersection of multiple sets
print(set1.intersection(set2, set3))  # Output: {5}

# The original sets remain unchanged
print(set1)  # Output: {1, 2, 3, 4, 5}
print(set2)  # Output: {4, 5, 6, 7, 8}
print(set3)  # Output: {1, 2, 5}

# Intersection with an empty set
print(set1.intersection(set()))  # Output: set()

# Intersection with itself
print(set1.intersection(set1))  # Output: {1, 2, 3, 4, 5}

# Intersection of disjoint sets
set4 = {10, 11, 12}
print(set1.intersection(set4))  # Output: set()

# Intersection with a set and a list
print(set1.intersection([2, 3, 4, 9]))  # Output: {2, 3, 4}
`,
      intersectionUpdateMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
set3 = {1, 2, 5}

print("Original set1:", set1)

# Update set1 with the intersection
set1.intersection_update(set2)
print("After intersection_update with set2:", set1)  # Output: {4, 5}

# Reset set1
set1 = {1, 2, 3, 4, 5}

# Update set1 with the intersection of multiple sets
set1.intersection_update(set2, set3)
print("After intersection_update with set2 and set3:", set1)  # Output: {5}

# Using the &= operator (equivalent to intersection_update())
set1 = {1, 2, 3, 4, 5}
set1 &= set2
print("After using &=:", set1)  # Output: {4, 5}

# intersection_update with an empty set
set1 = {1, 2, 3, 4, 5}
set1.intersection_update(set())
print("After intersection_update with empty set:", set1)  # Output: set()

# intersection_update with itself (no change)
set1 = {1, 2, 3, 4, 5}
set1.intersection_update(set1)
print("After intersection_update with itself:", set1)  # Output: {1, 2, 3, 4, 5}

# intersection_update with a list
set1 = {1, 2, 3, 4, 5}
set1.intersection_update([3, 4, 5, 6])
print("After intersection_update with a list:", set1)  # Output: {3, 4, 5}
`,
      isdisjointMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {6, 7, 8, 9, 10}
set3 = {5, 6, 7}
empty_set = set()

# Check if two sets are disjoint
print(set1.isdisjoint(set2))  # Output: True
print(set1.isdisjoint(set3))  # Output: False

# Check with an empty set
print(set1.isdisjoint(empty_set))  # Output: True
print(empty_set.isdisjoint(set1))  # Output: True

# Check with a set and itself
print(set1.isdisjoint(set1))  # Output: False

# Check with a list
print(set1.isdisjoint([6, 7, 8]))  # Output: True
print(set1.isdisjoint([1, 6, 7]))  # Output: False

# Check with a string
numbers = {'1', '2', '3'}
print(numbers.isdisjoint('456'))  # Output: True
print(numbers.isdisjoint('123'))  # Output: False

# Practical example: checking if there are common elements in multiple sets
fruits = {'apple', 'banana', 'cherry'}
vegetables = {'carrot', 'broccoli', 'spinach'}
meats = {'chicken', 'beef', 'pork'}

print(fruits.isdisjoint(vegetables) and fruits.isdisjoint(meats) and vegetables.isdisjoint(meats))
# Output: True (no common elements across all sets)
`,
      issubsetMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {2, 3, 4}
set3 = {1, 2, 3, 4, 5, 6}
empty_set = set()

# Check if set2 is a subset of set1
print(set2.issubset(set1))  # Output: True

# Using the <= operator (equivalent to issubset())
print(set2 <= set1)  # Output: True

# Check if set1 is a subset of set3
print(set1.issubset(set3))  # Output: True

# Check if set1 is a subset of itself
print(set1.issubset(set1))  # Output: True

# Check with an empty set
print(empty_set.issubset(set1))  # Output: True
print(set1.issubset(empty_set))  # Output: False

# Check if set1 is a subset of set2
print(set1.issubset(set2))  # Output: False

# Check with a list
print(set2.issubset([1, 2, 3, 4, 5]))  # Output: True

# Proper subset vs subset
print(set2 < set1)  # Output: True (proper subset)
print(set1 < set1)  # Output: False (not a proper subset of itself)

# Practical example: checking if a user has all required permissions
required_permissions = {'read', 'write'}
user_permissions = {'read', 'write', 'delete'}

if required_permissions.issubset(user_permissions):
    print("User has all required permissions")
else:
    print("User is missing some required permissions")
# Output: User has all required permissions
`,
      issupersetMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {2, 3, 4}
set3 = {1, 2, 3, 4, 5, 6}
empty_set = set()

# Check if set1 is a superset of set2
print(set1.issuperset(set2))  # Output: True

# Using the >= operator (equivalent to issuperset())
print(set1 >= set2)  # Output: True

# Check if set3 is a superset of set1
print(set3.issuperset(set1))  # Output: True

# Check if set1 is a superset of itself
print(set1.issuperset(set1))  # Output: True

# Check with an empty set
print(set1.issuperset(empty_set))  # Output: True
print(empty_set.issuperset(set1))  # Output: False

# Check if set2 is a superset of set1
print(set2.issuperset(set1))  # Output: False

# Check with a list
print(set1.issuperset([2, 3, 4]))  # Output: True

# Proper superset vs superset
print(set1 > set2)  # Output: True (proper superset)
print(set1 > set1)  # Output: False (not a proper superset of itself)

# Practical example: checking if a set of skills covers job requirements
job_requirements = {'Python', 'SQL'}
candidate_skills = {'Python', 'SQL', 'JavaScript', 'HTML', 'CSS'}

if candidate_skills.issuperset(job_requirements):
    print("Candidate meets all job requirements")
else:
    print("Candidate is missing some required skills")
# Output: Candidate meets all job requirements
`,
      popMethodCode: `fruits = {'apple', 'banana', 'cherry', 'date'}
print("Original set:", fruits)

# Pop an arbitrary element
popped = fruits.pop()
print(f"Popped element: {popped}")
print("Set after pop:", fruits)

# Pop another element
popped = fruits.pop()
print(f"Popped element: {popped}")
print("Set after pop:", fruits)

# Pop from a set with one element
single_element_set = {'last'}
last = single_element_set.pop()
print(f"Last element: {last}")
print("Set after popping last element:", single_element_set)  # Output: set()

# Attempting to pop from an empty set
try:
    empty_set = set()
    empty_set.pop()
except KeyError as e:
    print(f"Error: {e}")  # Output: Error: 'pop from an empty set'

# Practical example: processing tasks until the set is empty
tasks = {'task1', 'task2', 'task3'}
while tasks:
    current_task = tasks.pop()
    print(f"Processing {current_task}")
    # Process the task here
print("All tasks processed")
`,
      removeMethodCode: `fruits = {'apple', 'banana', 'cherry', 'date'}
print("Original set:", fruits)

# Remove an existing element
fruits.remove('banana')
print("After removing 'banana':", fruits)  # Output: {'apple', 'cherry', 'date'}

# Attempt to remove a non-existing element
try:
    fruits.remove('grape')
except KeyError as e:
    print(f"Error: {e}")  # Output: Error: 'grape'

# Remove with a variable
fruit_to_remove = 'cherry'
if fruit_to_remove in fruits:
    fruits.remove(fruit_to_remove)
    print(f"After removing {fruit_to_remove}:", fruits)
else:
    print(f"{fruit_to_remove} not found in the set")

# Comparison with discard() method
fruits.discard('grape')  # This doesn't raise an error
print("After discarding 'grape':", fruits)

# Practical example: removing processed items from a set
to_process = {'item1', 'item2', 'item3', 'item4'}
processed = set()

while to_process:
    item = to_process.pop()
    # Process the item
    print(f"Processing {item}")
    processed.add(item)

print("Processed items:", processed)
print("Remaining items to process:", to_process)
`,
symmetricDifferenceUpdateMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

print("Original set1:", set1)

# Update set1 with the symmetric difference
set1.symmetric_difference_update(set2)
print("After symmetric_difference_update with set2:", set1)  # Output: {1, 2, 3, 6, 7, 8}

# Reset set1
set1 = {1, 2, 3, 4, 5}

# Using the ^= operator (equivalent to symmetric_difference_update())
set1 ^= set2
print("After using ^=:", set1)  # Output: {1, 2, 3, 6, 7, 8}

# symmetric_difference_update with an empty set (no effect)
set1 = {1, 2, 3, 4, 5}
set1.symmetric_difference_update(set())
print("After symmetric_difference_update with empty set:", set1)  # Output: {1, 2, 3, 4, 5}

# symmetric_difference_update with itself (results in an empty set)
set1.symmetric_difference_update(set1)
print("After symmetric_difference_update with itself:", set1)  # Output: set()

# symmetric_difference_update with a list
set1 = {1, 2, 3, 4, 5}
set1.symmetric_difference_update([3, 4, 5, 6])
print("After symmetric_difference_update with a list:", set1)  # Output: {1, 2, 6}

# Practical example: updating a set of changed items
original_items = {'item1', 'item2', 'item3', 'item4'}
current_items = {'item2', 'item3', 'item5', 'item6'}

changed_items = original_items.copy()
changed_items.symmetric_difference_update(current_items)

print("Items that were added or removed:", changed_items)
# Output: {'item1', 'item4', 'item5', 'item6'}
`,
      unionMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
set3 = {7, 8, 9, 10}

# Union of two sets
union_result = set1.union(set2)
print(union_result)  # Output: {1, 2, 3, 4, 5, 6, 7, 8}

# Using the | operator (equivalent to union())
union_result = set1 | set2
print(union_result)  # Output: {1, 2, 3, 4, 5, 6, 7, 8}

# Union of multiple sets
union_result = set1.union(set2, set3)
print(union_result)  # Output: {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

# The original sets remain unchanged
print(set1)  # Output: {1, 2, 3, 4, 5}
print(set2)  # Output: {4, 5, 6, 7, 8}
print(set3)  # Output: {7, 8, 9, 10}

# Union with an empty set
print(set1.union(set()))  # Output: {1, 2, 3, 4, 5}

# Union with itself
print(set1.union(set1))  # Output: {1, 2, 3, 4, 5}

# Union with a list or other iterable
print(set1.union([4, 5, 6], {7, 8, 9}))  # Output: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Practical example: combining multiple sets of skills
python_skills = {'variables', 'functions', 'classes'}
web_skills = {'HTML', 'CSS', 'JavaScript'}
database_skills = {'SQL', 'MongoDB'}

all_skills = python_skills.union(web_skills, database_skills)
print("Combined skill set:", all_skills)
# Output: {'variables', 'functions', 'classes', 'HTML', 'CSS', 'JavaScript', 'SQL', 'MongoDB'}
`,
      updateMethodCode: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
list1 = [7, 8, 9]

print("Original set1:", set1)

# Update set1 with elements from set2
set1.update(set2)
print("After update with set2:", set1)  # Output: {1, 2, 3, 4, 5, 6, 7, 8}

# Reset set1
set1 = {1, 2, 3, 4, 5}

# Using the |= operator (equivalent to update())
set1 |= set2
print("After using |=:", set1)  # Output: {1, 2, 3, 4, 5, 6, 7, 8}

# Update with multiple iterables
set1 = {1, 2, 3, 4, 5}
set1.update(set2, list1)
print("After update with set2 and list1:", set1)  # Output: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Update with a string
set1 = {'a', 'b', 'c'}
set1.update('def')
print("After update with string:", set1)  # Output: {'a', 'b', 'c', 'd', 'e', 'f'}

# Update with a dictionary (only keys are added)
set1 = {1, 2, 3}
set1.update({4: 'four', 5: 'five'})
print("After update with dictionary:", set1)  # Output: {1, 2, 3, 4, 5}

# Practical example: updating a set of valid users
valid_users = {'alice', 'bob', 'charlie'}
new_users = ['david', 'eve']
disabled_users = {'charlie', 'frank'}

valid_users.update(new_users)
valid_users -= disabled_users

print("Updated valid users:", valid_users)
# Output: {'alice', 'bob', 'david', 'eve'}
`,
      setComparisonsCode: `set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}
set3 = {1, 2, 3, 4, 5}
subset = {2, 3, 4}

# Equality
print(set1 == set3)  # Output: True
print(set1 == set2)  # Output: False

# Inequality
print(set1 != set2)  # Output: True

# Subset
print(subset <= set1)  # Output: True (subset is a subset of set1)
print(set1 <= set1)   # Output: True (set1 is a subset of itself)

# Proper subset
print(subset < set1)  # Output: True (subset is a proper subset of set1)
print(set1 < set1)    # Output: False (set1 is not a proper subset of itself)

# Superset
print(set1 >= subset)  # Output: True (set1 is a superset of subset)
print(set1 >= set1)    # Output: True (set1 is a superset of itself)

# Proper superset
print(set1 > subset)  # Output: True (set1 is a proper superset of subset)
print(set1 > set1)    # Output: False (set1 is not a proper superset of itself)

# Disjoint sets
set4 = {10, 11, 12}
print(set1.isdisjoint(set4))  # Output: True (set1 and set4 have no common elements)
print(set1.isdisjoint(set2))  # Output: False (set1 and set2 have common elements)

# Practical example: checking permissions
admin_permissions = {'read', 'write', 'delete', 'manage_users'}
user_permissions = {'read', 'write'}
guest_permissions = {'read'}

print("Is user a subset of admin?", user_permissions <= admin_permissions)  # Output: True
print("Is guest a proper subset of user?", guest_permissions < user_permissions)  # Output: True
print("Are guest and admin permissions different?", guest_permissions != admin_permissions)  # Output: True
`,
      frozensetsCode: `# Creating a frozenset
frozen = frozenset([1, 2, 3, 4, 5])
print(frozen)  # Output: frozenset({1, 2, 3, 4, 5})

# Attempting to modify a frozenset (will raise an error)
try:
    frozen.add(6)
except AttributeError as e:
    print(f"Error: {e}")  # Output: Error: 'frozenset' object has no attribute 'add'

# Using frozenset as a dictionary key
fs1 = frozenset([1, 2, 3])
fs2 = frozenset([3, 4, 5])
set_dict = {fs1: "Set 1", fs2: "Set 2"}
print(set_dict[fs1])  # Output: Set 1

# Set operations with frozensets
fs3 = frozenset([3, 4, 5, 6])
print(fs1.union(fs3))  # Output: frozenset({1, 2, 3, 4, 5, 6})
print(fs1.intersection(fs3))  # Output: frozenset({3})
print(fs1.difference(fs3))  # Output: frozenset({1, 2})

# Frozenset in a regular set
regular_set = {1, 2, frozenset([3, 4]), 5}
print(regular_set)  # Output: {1, 2, frozenset({3, 4}), 5}

# Practical example: using frozensets for caching
import functools

@functools.lru_cache(maxsize=None)
def expensive_function(*args):
    return sum(args)

result1 = expensive_function(1, 2, 3)
result2 = expensive_function(1, 2, 3)  # This call uses the cached result
print(result1, result2)  # Output: 6 6

# Note: The lru_cache decorator uses frozenset internally to hash the arguments
`,
      setComprehensionsCode: `# Basic set comprehension
squares = {x**2 for x in range(10)}
print(squares)  # Output: {0, 1, 4, 9, 16, 25, 36, 49, 64, 81}

# Set comprehension with a condition
even_squares = {x**2 for x in range(10) if x % 2 == 0}
print(even_squares)  # Output: {0, 4, 16, 36, 64}

# Set comprehension with multiple iterations
pairs = {(x, y) for x in range(2) for y in range(2)}
print(pairs)  # Output: {(0, 0), (0, 1), (1, 0), (1, 1)}

# Set comprehension from a string
unique_chars = {char.upper() for char in "hello world"}
print(unique_chars)  # Output: {'H', 'E', 'L', 'O', 'W', 'R', 'D', ' '}

# Set comprehension from a list of words
words = ["hello", "world", "python", "programming"]
three_letter_words = {word for word in words if len(word) == 3}
print(three_letter_words)  # Output: set()

# Set comprehension with dictionary
prices = {'apple': 0.5, 'banana': 0.25, 'orange': 0.75, 'pear': 0.60}
expensive_fruits = {fruit for fruit, price in prices.items() if price > 0.5}
print(expensive_fruits)  # Output: {'orange', 'pear'}

# Nested set comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = {num for row in matrix for num in row}
print(flattened)  # Output: {1, 2, 3, 4, 5, 6, 7, 8, 9}

# Practical example: extracting unique tags from a list of articles
articles = [
    {"title": "Python Basics", "tags": ["python", "programming", "basics"]},
    {"title": "Data Science with Python", "tags": ["python", "data science", "machine learning"]},
    {"title": "Web Development", "tags": ["html", "css", "javascript"]}
]
all_tags = {tag for article in articles for tag in article["tags"]}
print(all_tags)
# Output: {'python', 'programming', 'basics', 'data science', 'machine learning', 'html', 'css', 'javascript'}
`,
advancedTechniquesCode: `# Using sets for efficient lookup
def find_common_elements(list1, list2):
    set1 = set(list1)
    return [element for element in list2 if element in set1]

print(find_common_elements([1, 2, 3, 4], [3, 4, 5, 6]))  # Output: [3, 4]

# Set operations on lists
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
union = list(set(list1) | set(list2))
intersection = list(set(list1) & set(list2))
difference = list(set(list1) - set(list2))

print("Union:", union)
print("Intersection:", intersection)
print("Difference:", difference)

# Using sets for removing duplicates while preserving order
from collections import OrderedDict

def remove_duplicates(sequence):
    return list(OrderedDict.fromkeys(sequence))

print(remove_duplicates([1, 2, 3, 2, 4, 3, 5]))  # Output: [1, 2, 3, 4, 5]

# Set of sets using frozenset
set_of_sets = {frozenset([1, 2]), frozenset([3, 4])}
print(set_of_sets)  # Output: {frozenset({1, 2}), frozenset({3, 4})}

# Using sets for graph representation
graph = {
    'A': set(['B', 'C']),
    'B': set(['A', 'D', 'E']),
    'C': set(['A', 'F']),
    'D': set(['B']),
    'E': set(['B', 'F']),
    'F': set(['C', 'E'])
}

def find_path(graph, start, end, path=[]):
    path = path + [start]
    if start == end:
        return path
    if start not in graph:
        return None
    for node in graph[start]:
        if node not in path:
            newpath = find_path(graph, node, end, path)
            if newpath:
                return newpath
    return None

print(find_path(graph, 'A', 'F'))  # Output: ['A', 'C', 'F']

# Using sets for finding unique elements in multiple lists
def unique_elements(*lists):
    return set().union(*lists)

list1 = [1, 2, 3]
list2 = [3, 4, 5]
list3 = [5, 6, 7]
print(unique_elements(list1, list2, list3))  # Output: {1, 2, 3, 4, 5, 6, 7}

# Using sets for efficient membership testing
large_list = list(range(1000000))
large_set = set(large_list)

import time

def test_membership(container):
    start_time = time.time()
    for i in range(1000000):
        if i in container:
            pass
    return time.time() - start_time

print(f"List membership test time: {test_membership(large_list):.2f} seconds")
print(f"Set membership test time: {test_membership(large_set):.2f} seconds")

# Using sets for finding the longest substring without repeating characters
def longest_substring_without_repeats(s):
    char_set = set()
    max_length = 0
    start = 0
    for end in range(len(s)):
        while s[end] in char_set:
            char_set.remove(s[start])
            start += 1
        char_set.add(s[end])
        max_length = max(max_length, end - start + 1)
    return max_length

print(longest_substring_without_repeats("abcabcbb"))  # Output: 3
print(longest_substring_without_repeats("bbbbb"))     # Output: 1
print(longest_substring_without_repeats("pwwkew"))    # Output: 3
`,
      performanceConsiderationsCode: `import time
import random

# Generate large datasets
large_list = [random.randint(1, 1000000) for _ in range(1000000)]
large_set = set(large_list)

# Membership testing
def test_membership(container, iterations=100000):
    start_time = time.time()
    for _ in range(iterations):
        random.randint(1, 1000000) in container
    return time.time() - start_time

list_time = test_membership(large_list)
set_time = test_membership(large_set)

print(f"List membership test time: {list_time:.4f} seconds")
print(f"Set membership test time: {set_time:.4f} seconds")
print(f"Set is {list_time / set_time:.2f}x faster")

# Removing duplicates
def remove_duplicates_list(lst):
    return list(dict.fromkeys(lst))

def remove_duplicates_set(lst):
    return list(set(lst))

list_with_duplicates = [random.randint(1, 100000) for _ in range(1000000)]

start_time = time.time()
remove_duplicates_list(list_with_duplicates)
list_time = time.time() - start_time

start_time = time.time()
remove_duplicates_set(list_with_duplicates)
set_time = time.time() - start_time

print(f"Remove duplicates using list: {list_time:.4f} seconds")
print(f"Remove duplicates using set: {set_time:.4f} seconds")
print(f"Set method is {list_time / set_time:.2f}x faster")

# Set operations vs. loop implementation
def intersection_loop(list1, list2):
    return [item for item in list1 if item in list2]

def intersection_set(list1, list2):
    return list(set(list1) & set(list2))

list1 = [random.randint(1, 1000000) for _ in range(100000)]
list2 = [random.randint(1, 1000000) for _ in range(100000)]

start_time = time.time()
intersection_loop(list1, list2)
loop_time = time.time() - start_time

start_time = time.time()
intersection_set(list1, list2)
set_time = time.time() - start_time

print(f"Intersection using loop: {loop_time:.4f} seconds")
print(f"Intersection using set: {set_time:.4f} seconds")
print(f"Set method is {loop_time / set_time:.2f}x faster")

# Memory usage
import sys

list_memory = sys.getsizeof(large_list) + sum(sys.getsizeof(item) for item in large_list)
set_memory = sys.getsizeof(large_set) + sum(sys.getsizeof(item) for item in large_set)

print(f"Memory usage of list: {list_memory / 1024 / 1024:.2f} MB")
print(f"Memory usage of set: {set_memory / 1024 / 1024:.2f} MB")
print(f"Memory saving with set: {(list_memory - set_memory) / 1024 / 1024:.2f} MB")
`,
    };
  },
};
</script>

<style scoped>
  pre {
  font-size: 0.9rem;
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