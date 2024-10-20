<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="File Handling in Python" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        File handling is a crucial aspect of programming, allowing you to work with external data, store information persistently, and process large datasets. In Python, file handling is straightforward yet powerful, offering various modes and methods to read, write, and manipulate files. This comprehensive guide will cover all aspects of file handling in Python, from basic operations to advanced techniques.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#file-basics" class="text-blue-800 underline">File Basics</a></li>
        <li><a href="#reading-files" class="text-blue-800 underline">Reading Files</a></li>
        <li><a href="#writing-files" class="text-blue-800 underline">Writing Files</a></li>
        <li><a href="#appending-files" class="text-blue-800 underline">Appending to Files</a></li>
        <li><a href="#with-statement" class="text-blue-800 underline">Using the 'with' Statement</a></li>
        <li><a href="#file-methods" class="text-blue-800 underline">File Object Methods</a></li>
        <li><a href="#binary-files" class="text-blue-800 underline">Working with Binary Files</a></li>
        <li><a href="#csv-files" class="text-blue-800 underline">CSV File Handling</a></li>
        <li><a href="#json-files" class="text-blue-800 underline">JSON File Handling</a></li>
        <li><a href="#error-handling" class="text-blue-800 underline">Error Handling in File Operations</a></li>
        <li><a href="#os-module" class="text-blue-800 underline">File and Directory Operations with os Module</a></li>
        <li><a href="#advanced-techniques" class="text-blue-800 underline">Advanced Techniques</a></li>
      </ul>

      <!-- File Basics -->
      <h2 id="file-basics" class="text-xl md:text-2xl font-semibold mb-4">File Basics</h2>
      <p class="text-base md:text-lg mb-4">
        Before we dive into reading and writing files, let's understand the basics of file handling in Python:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ fileBasicsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Key points about file handling basics:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>The <code>open()</code> function is used to open files.</li>
        <li>File modes determine how the file is opened (read, write, append, etc.).</li>
        <li>Always close files after you're done to free up system resources.</li>
        <li>The <code>with</code> statement is recommended as it automatically closes the file.</li>
      </ul>

      <!-- Reading Files -->
      <h2 id="reading-files" class="text-xl md:text-2xl font-semibold mb-4">Reading Files</h2>
      <p class="text-base md:text-lg mb-4">
        Python offers several methods to read file contents:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ readingFilesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        These methods provide flexibility in how you read file contents, allowing you to choose the most appropriate approach for your specific needs.
      </p>

      <!-- Writing Files -->
      <h2 id="writing-files" class="text-xl md:text-2xl font-semibold mb-4">Writing Files</h2>
      <p class="text-base md:text-lg mb-4">
        Writing to files in Python is straightforward:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ writingFilesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        When writing to files, be cautious as the 'w' mode overwrites existing file content. Use 'a' mode to append instead of overwriting.
      </p>

      <!-- Appending to Files -->
      <h2 id="appending-files" class="text-xl md:text-2xl font-semibold mb-4">Appending to Files</h2>
      <p class="text-base md:text-lg mb-4">
        To add content to an existing file without overwriting it, use the append mode:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ appendingFilesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Appending is useful for adding new data to log files or continuously updating a file with new information.
      </p>

      <!-- Using the 'with' Statement -->
      <h2 id="with-statement" class="text-xl md:text-2xl font-semibold mb-4">Using the 'with' Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>with</code> statement provides a clean way to work with files:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ withStatementCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Using <code>with</code> ensures that the file is properly closed after operations are completed, even if an exception occurs.
      </p>

      <!-- File Object Methods -->
      <h2 id="file-methods" class="text-xl md:text-2xl font-semibold mb-4">File Object Methods</h2>
      <p class="text-base md:text-lg mb-4">
        File objects in Python have several useful methods:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ fileMethodsCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        These methods provide fine-grained control over file operations, allowing you to navigate and manipulate file contents effectively.
      </p>

      <!-- Working with Binary Files -->
      <h2 id="binary-files" class="text-xl md:text-2xl font-semibold mb-4">Working with Binary Files</h2>
      <p class="text-base md:text-lg mb-4">
        Binary files store data in binary format and are used for non-text files like images:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ binaryFilesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        When working with binary files, remember to use the 'b' flag in the file mode and handle data as bytes.
      </p>

      <!-- CSV File Handling -->
      <h2 id="csv-files" class="text-xl md:text-2xl font-semibold mb-4">CSV File Handling</h2>
      <p class="text-base md:text-lg mb-4">
        CSV (Comma-Separated Values) files are common for storing tabular data:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ csvFilesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        The <code>csv</code> module provides efficient tools for reading and writing CSV files, handling various formats and delimiters.
      </p>

      <!-- JSON File Handling -->
      <h2 id="json-files" class="text-xl md:text-2xl font-semibold mb-4">JSON File Handling</h2>
      <p class="text-base md:text-lg mb-4">
        JSON (JavaScript Object Notation) is a popular data format for configuration files and API responses:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ jsonFilesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        The <code>json</code> module makes it easy to work with JSON data, converting between Python objects and JSON strings.
      </p>

      <!-- Error Handling in File Operations -->
      <h2 id="error-handling" class="text-xl md:text-2xl font-semibold mb-4">Error Handling in File Operations</h2>
      <p class="text-base md:text-lg mb-4">
        Proper error handling is crucial when working with files:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ errorHandlingCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Using try-except blocks helps manage common file-related errors and ensures graceful error handling in your programs.
      </p>

      <!-- File and Directory Operations with os Module -->
      <h2 id="os-module" class="text-xl md:text-2xl font-semibold mb-4">File and Directory Operations with os Module</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>os</code> module provides functions for interacting with the operating system:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ osModuleCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        The <code>os</code> module is essential for file and directory manipulation, offering cross-platform compatibility for many operations.
      </p>

      <!-- Advanced Techniques -->
      <h2 id="advanced-techniques" class="text-xl md:text-2xl font-semibold mb-4">Advanced Techniques</h2>
      <p class="text-base md:text-lg mb-4">
        Let's explore some advanced file handling techniques:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ advancedTechniquesCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        These advanced techniques showcase the versatility of Python's file handling capabilities, allowing you to work with files efficiently in various scenarios.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        File handling is a fundamental skill in Python programming, enabling you to work with external data, persist information, and process large datasets. Key points to remember:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Always close files after use or use the <code>with</code> statement for automatic file closing.</li>
        <li>Choose the appropriate file mode (read, write, append) based on your needs.</li>
        <li>Use binary mode for non-text files.</li>
        <li>Take advantage of specialized modules like <code>csv</code> and <code>json</code> for specific file formats.</li>
        <li>Implement proper error handling to manage file-related exceptions.</li>
        <li>Utilize the <code>os</code> module for file and directory operations.</li>
        <li>Explore advanced techniques for efficient file processing and manipulation.</li>
      </ul>
      <p class="text-base md:text-lg">
        Mastering file handling in Python will greatly enhance your ability to create robust, data-driven applications and scripts.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue"
export default {
  name: "FileHandlingPython",
  components: {
    Header
  },
  data() {
    return {
      fileBasicsCode: `# Opening a file
file = open('example.txt', 'r')  # 'r' mode for reading

# Reading content
content = file.read()
print(content)

# Closing the file
file.close()

# Using 'with' statement (recommended)
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
# File is automatically closed after the 'with' block

# File modes:
# 'r' - Read (default)
# 'w' - Write (overwrites existing content)
# 'a' - Append
# 'x' - Exclusive creation
# 'b' - Binary mode
# '+' - Updating (reading and writing)
`,
      readingFilesCode: `# Reading entire file
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)

# Reading line by line
with open('example.txt', 'r') as file:
    for line in file:
        print(line.strip())  # strip() removes leading/trailing whitespace

# Reading specific number of characters
with open('example.txt', 'r') as file:
    chunk = file.read(10)  # Read first 10 characters
    print(chunk)

# Reading all lines into a list
with open('example.txt', 'r') as file:
    lines = file.readlines()
    print(lines)

# Reading specific line
with open('example.txt', 'r') as file:
    lines = file.readlines()
    if len(lines) >= 3:
        third_line = lines[2]
        print(f"Third line: {third_line}")
`,
writingFilesCode: `# Writing to a file (overwrites existing content)
with open('output.txt', 'w') as file:
    file.write("Hello, World!")
    file.write("This is a new line.\n")
    file.write("Another line of text.")

# Writing multiple lines at once
lines = ['Line 1\n', 'Line 2\n', 'Line 3\n']
with open('output.txt', 'w') as file:
    file.writelines(lines)

# Writing variables to a file
x = 10
y = 20
with open('output.txt', 'w') as file:
    file.write(f"x = {x}, y = {y}\n")

# Writing formatted strings
name = "Alice"
age = 30
with open('output.txt', 'w') as file:
    file.write(f"Name: {name}, Age: {age}\n")

# Writing in binary mode
data = bytes([0x41, 0x42, 0x43])  # ASCII for 'ABC'
with open('binary_output.bin', 'wb') as file:
    file.write(data)
`,
      appendingFilesCode: `# Appending to a file
with open('log.txt', 'a') as file:
    file.write("This line will be appended.\n")

# Appending multiple lines
new_lines = ['New line 1\n', 'New line 2\n', 'New line 3\n']
with open('log.txt', 'a') as file:
    file.writelines(new_lines)

# Appending with timestamp
from datetime import datetime

with open('log.txt', 'a') as file:
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    file.write(f"[{timestamp}] Log entry\n")

# Checking if file exists before appending
import os

filename = 'data.txt'
if not os.path.exists(filename):
    with open(filename, 'w') as file:
        file.write("Initial content\n")

with open(filename, 'a') as file:
    file.write("Appended content\n")

# Appending to a file and reading its contents
with open('numbers.txt', 'a+') as file:
    file.write("100\n")
    file.seek(0)  # Move cursor to the beginning of the file
    content = file.read()
    print(f"Updated content: {content}")
`,
      withStatementCode: `# Basic usage of 'with' statement
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
# File is automatically closed after this block

# Using 'with' for multiple files
with open('input.txt', 'r') as input_file, open('output.txt', 'w') as output_file:
    content = input_file.read()
    output_file.write(content.upper())

# Nested 'with' statements
with open('outer.txt', 'r') as outer_file:
    with open('inner.txt', 'w') as inner_file:
        content = outer_file.read()
        inner_file.write(f"Content from outer file: {content}")

# Custom context manager for file handling
class CustomFileHandler:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None

    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

# Using the custom context manager
with CustomFileHandler('custom.txt', 'w') as file:
    file.write("Using custom context manager")
`,
      fileMethodsCode: `# Opening a file
file = open('example.txt', 'r+')  # 'r+' mode for reading and writing

# read() - Read entire file content
content = file.read()
print("Entire file content:", content)

# seek() - Move the cursor to a specific position
file.seek(0)  # Move to the beginning of the file

# readline() - Read a single line
line = file.readline()
print("First line:", line)

# tell() - Get the current position of the cursor
position = file.tell()
print("Current position:", position)

# write() - Write to the file
file.write("New content\\n")

# truncate() - Truncate the file to a specific size
file.truncate(20)  # Truncate to 20 bytes

# flush() - Flush the internal buffer
file.flush()

# fileno() - Get the file descriptor number
fd = file.fileno()
print("File descriptor:", fd)

# isatty() - Check if the file stream is interactive
is_tty = file.isatty()
print("Is TTY:", is_tty)

# readable(), writable(), seekable() - Check file mode
print("Readable:", file.readable())
print("Writable:", file.writable())
print("Seekable:", file.seekable())

# Closing the file
file.close()

# Using 'with' statement (recommended)
with open('example.txt', 'r') as file:
    print(file.read())
# File is automatically closed after the 'with' block
`,
      binaryFilesCode: `# Writing binary data
data = bytes([0x48, 0x65, 0x6C, 0x6C, 0x6F])  # "Hello" in ASCII
with open('binary_file.bin', 'wb') as file:
    file.write(data)

# Reading binary data
with open('binary_file.bin', 'rb') as file:
    binary_data = file.read()
    print("Binary data:", binary_data)
    print("Decoded data:", binary_data.decode('ascii'))

# Writing structured binary data
import struct

# Pack data into binary format
packed_data = struct.pack('if', 123, 45.67)
with open('structured_data.bin', 'wb') as file:
    file.write(packed_data)

# Reading structured binary data
with open('structured_data.bin', 'rb') as file:
    binary_data = file.read()
    unpacked_data = struct.unpack('if', binary_data)
    print("Unpacked data:", unpacked_data)

# Copying binary files
def copy_binary_file(source, destination):
    with open(source, 'rb') as src, open(destination, 'wb') as dst:
        while True:
            chunk = src.read(4096)  # Read in 4KB chunks
            if not chunk:
                break
            dst.write(chunk)

# Example usage of binary file copy
copy_binary_file('source_image.jpg', 'copied_image.jpg')
`,
      csvFilesCode: `import csv

# Writing CSV data
data = [
    ['Name', 'Age', 'City'],
    ['Alice', '30', 'New York'],
    ['Bob', '25', 'Los Angeles'],
    ['Charlie', '35', 'Chicago']
]

with open('data.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)

# Reading CSV data
with open('data.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Writing CSV with dictionary
dict_data = [
    {'Name': 'David', 'Age': '40', 'City': 'Houston'},
    {'Name': 'Eve', 'Age': '28', 'City': 'Miami'}
]

with open('dict_data.csv', 'w', newline='') as file:
    fieldnames = ['Name', 'Age', 'City']
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(dict_data)

# Reading CSV as dictionary
with open('dict_data.csv', 'r') as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row)

# Handling different delimiters
with open('data_semicolon.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter=';')
    writer.writerows(data)

with open('data_semicolon.csv', 'r') as file:
    reader = csv.reader(file, delimiter=';')
    for row in reader:
        print(row)

# Handling CSV files with custom dialect
csv.register_dialect('custom', delimiter='|', quoting=csv.QUOTE_ALL)

with open('custom_data.csv', 'w', newline='') as file:
    writer = csv.writer(file, dialect='custom')
    writer.writerows(data)

with open('custom_data.csv', 'r') as file:
    reader = csv.reader(file, dialect='custom')
    for row in reader:
        print(row)
`,
      jsonFilesCode: `import json

# Writing JSON data
data = {
    "name": "John Doe",
    "age": 30,
    "city": "New York",
    "hobbies": ["reading", "swimming", "cycling"],
    "married": False
}

with open('data.json', 'w') as file:
    json.dump(data, file, indent=4)

# Reading JSON data
with open('data.json', 'r') as file:
    loaded_data = json.load(file)
    print(loaded_data)

# Converting Python object to JSON string
json_string = json.dumps(data, indent=4)
print(json_string)

# Parsing JSON string to Python object
parsed_data = json.loads(json_string)
print(parsed_data)

# Handling custom objects
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

def person_encoder(obj):
    if isinstance(obj, Person):
        return {"name": obj.name, "age": obj.age}
    raise TypeError(f"Object of type {obj.__class__.__name__} is not JSON serializable")

person = Person("Alice", 25)
json_string = json.dumps(person, default=person_encoder)
print(json_string)

# Custom JSON decoder
def person_decoder(dct):
    if 'name' in dct and 'age' in dct:
        return Person(dct['name'], dct['age'])
    return dct

json_string = '{"name": "Bob", "age": 30}'
decoded_person = json.loads(json_string, object_hook=person_decoder)
print(f"Name: {decoded_person.name}, Age: {decoded_person.age}")
`,
      errorHandlingCode: `# Handling FileNotFoundError
try:
    with open('non_existent_file.txt', 'r') as file:
        content = file.read()
except FileNotFoundError:
    print("The file does not exist.")

# Handling PermissionError
try:
    with open('/root/restricted_file.txt', 'w') as file:
        file.write("This won't work without proper permissions.")
except PermissionError:
    print("You don't have permission to write to this file.")

# Handling IOError (general input/output error)
try:
    with open('some_file.txt', 'r') as file:
        content = file.read()
except IOError as e:
    print(f"An I/O error occurred: {e}")

# Using multiple except blocks
try:
    with open('example.txt', 'r') as file:
        content = file.read()
        value = int(content)
except FileNotFoundError:
    print("The file does not exist.")
except ValueError:
    print("The file does not contain a valid integer.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")

# Using else and finally clauses
try:
    with open('example.txt', 'r') as file:
        content = file.read()
except FileNotFoundError:
    print("The file does not exist.")
else:
    print("File read successfully.")
    print(f"Content: {content}")
finally:
    print("File operation attempt completed.")

# Custom exception for file operations
class FileOperationError(Exception):
    pass

def read_sensitive_data(filename):
    try:
        with open(filename, 'r') as file:
            data = file.read()
            if 'sensitive' in data.lower():
                raise FileOperationError("File contains sensitive data")
            return data
    except FileNotFoundError:
        raise FileOperationError("Sensitive file not found")

try:
    content = read_sensitive_data('sensitive_data.txt')
    print(content)
except FileOperationError as e:
    print(f"Error: {e}")
`,
      osModuleCode: `import os

# Get current working directory
current_dir = os.getcwd()
print(f"Current directory: {current_dir}")

# Change directory
os.chdir('/path/to/new/directory')

# List directory contents
contents = os.listdir()
print(f"Directory contents: {contents}")

# Create a new directory
os.mkdir('new_folder')

# Create a directory and all necessary parent directories
os.makedirs('path/to/nested/directory', exist_ok=True)

# Remove a file
os.remove('file_to_delete.txt')

# Rename a file
os.rename('old_name.txt', 'new_name.txt')

# Remove an empty directory
os.rmdir('empty_directory')

# Remove a directory and its contents
import shutil
shutil.rmtree('directory_to_delete')

# Check if a path exists
if os.path.exists('file_or_directory'):
    print("Path exists")

# Check if a path is a file
if os.path.isfile('example.txt'):
    print("It's a file")

# Check if a path is a directory
if os.path.isdir('folder'):
    print("It's a directory")

# Get file size
size = os.path.getsize('example.txt')
print(f"File size: {size} bytes")

# Get file modification time
mod_time = os.path.getmtime('example.txt')
print(f"Last modified: {mod_time}")

# Join path components
full_path = os.path.join('folder', 'subfolder', 'file.txt')
print(f"Full path: {full_path}")

# Split a path into directory and file
dir_path, file_name = os.path.split('/path/to/file.txt')
print(f"Directory: {dir_path}, File: {file_name}")

# Get file extension
_, extension = os.path.splitext('file.txt')
print(f"File extension: {extension}")

# Walk through directory tree
for root, dirs, files in os.walk('folder'):
    print(f"Current directory: {root}")
    print(f"Subdirectories: {dirs}")
    print(f"Files: {files}")
    print()
`,
advancedTechniquesCode: `import os
import shutil
import tempfile
import mmap
import fileinput
import glob
import io

# Using temporary files
with tempfile.NamedTemporaryFile(mode='w+', delete=False) as temp_file:
    temp_file.write("Temporary content")
    temp_name = temp_file.name

print(f"Temporary file created: {temp_name}")

with open(temp_name, 'r') as file:
    content = file.read()
    print(f"Temporary file content: {content}")

os.unlink(temp_name)

# Memory-mapped files
with open('large_file.bin', 'wb') as f:
    f.write(b'0' * 1000000)

with open('large_file.bin', 'r+b') as f:
    mmapped_file = mmap.mmap(f.fileno(), 0)
    print(f"First 10 bytes: {mmapped_file[:10]}")
    mmapped_file[0:5] = b'12345'
    mmapped_file.close()

# Verify changes
with open('large_file.bin', 'rb') as f:
    print(f"Updated first 10 bytes: {f.read(10)}")

# File-like objects
buffer = io.StringIO()
buffer.write('Hello, ')
buffer.write('world!')
buffer.seek(0)
print(buffer.read())  # Output: Hello, world!

binary_buffer = io.BytesIO()
binary_buffer.write(b'\\x48\\x65\\x6c\\x6c\\x6f')
binary_buffer.seek(0)
print(binary_buffer.read())  # Output: b'Hello'

# Using fileinput to process multiple files
with open('file1.txt', 'w') as f1, open('file2.txt', 'w') as f2:
    f1.write("File 1 content\\n")
    f2.write("File 2 content\\n")

for line in fileinput.input(['file1.txt', 'file2.txt']):
    print(f"{fileinput.filename()}: {line.strip()}")

# Using glob to find files
for file in glob.glob('*.txt'):
    print(f"Found file: {file}")

# Handling large files with generators
def read_large_file(file_path):
    with open(file_path, 'r') as file:
        while True:
            chunk = file.read(4096)  # Read 4KB at a time
            if not chunk:
                break
            yield chunk

with open('large_file.txt', 'w') as f:
    f.write('Large content\\n' * 1000000)

for chunk in read_large_file('large_file.txt'):
    print(f"Processing chunk: {chunk[:20]}...")  # Process only first 20 chars of each chunk

# File locking for concurrent access
import fcntl

def lock_file(file):
    fcntl.flock(file.fileno(), fcntl.LOCK_EX)

def unlock_file(file):
    fcntl.flock(file.fileno(), fcntl.LOCK_UN)

with open('shared_file.txt', 'w') as file:
    lock_file(file)
    try:
        file.write("Writing to locked file")
    finally:
        unlock_file(file)

# Using pathlib for file operations
from pathlib import Path

file_path = Path('example.txt')
file_path.write_text("Content using pathlib")
content = file_path.read_text()
print(f"Content read using pathlib: {content}")

# Atomic file writes
import atomicwrites

with atomicwrites.atomic_write('important_data.txt', overwrite=True) as f:
    f.write("Critical data")

# Handling compressed files
import gzip
import shutil

with open('original.txt', 'w') as f:
    f.write("Original content" * 1000)

with open('original.txt', 'rb') as f_in:
    with gzip.open('compressed.gz', 'wb') as f_out:
        shutil.copyfileobj(f_in, f_out)

with gzip.open('compressed.gz', 'rb') as f:
    decompressed_content = f.read()
    print(f"Decompressed content: {decompressed_content[:20]}...")

# Clean up created files
for file in ['file1.txt', 'file2.txt', 'large_file.bin', 'large_file.txt', 'shared_file.txt', 'example.txt', 'important_data.txt', 'original.txt', 'compressed.gz']:
    if os.path.exists(file):
        os.remove(file)

print("Advanced file operations completed and temporary files cleaned up.")
`,
    };
  },
};
</script>

<style>
  pre {
  font-size: 0.6rem;
  white-space: pre-wrap; /* Ensures text wrapping for very long lines */
  overflow-x: auto;      /* Adds horizontal scroll for overflow content */ 
  }

  @media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}
</style>