<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-yellow-500 rounded-t-xl p-4">
        <img src="/js/logo.png" alt="JavaScript Logo" class="w-12 h-12">
        <h1 class="text-2xl md:text-4xl font-bold text-black">DOM Manipulation</h1>
      </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. In this course, we'll explore how to manipulate the DOM using JavaScript, covering everything from basic element selection to advanced event handling and manipulation techniques.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#dom-introduction" class="text-blue-800 underline">Introduction to the DOM</a></li>
        <li><a href="#selecting-elements" class="text-blue-800 underline">Selecting DOM Elements</a></li>
        <li><a href="#manipulating-elements" class="text-blue-800 underline">Manipulating DOM Elements</a></li>
        <li><a href="#event-handling" class="text-blue-800 underline">Event Handling</a></li>
        <li><a href="#dom-methods" class="text-blue-800 underline">Common DOM Methods</a></li>
        <li><a href="#advanced-topics" class="text-blue-800 underline">Advanced Topics</a></li>
      </ul>

      <!-- Introduction to the DOM -->
      <h2 id="dom-introduction" class="text-xl md:text-2xl font-semibold mb-4">Introduction to the DOM</h2>
      <p class="text-base md:text-lg mb-4">
        The DOM is a tree-like structure that represents the elements of a webpage. It allows developers to access and manipulate the content, structure, and styles of a document. Understanding the DOM is crucial for creating dynamic and interactive web applications.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ domIntroductionCode }}</code></pre>
      </div>

      <!-- Selecting DOM Elements -->
      <h2 id="selecting-elements" class="text-xl md:text-2xl font-semibold mb-4">Selecting DOM Elements</h2>
      <p class="text-base md:text-lg mb-4">
        Selecting elements is the first step in DOM manipulation. JavaScript provides several methods for selecting elements:
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ selectingElementsCode }}</code></pre>
      </div>

      <!-- Manipulating DOM Elements -->
      <h2 id="manipulating-elements" class="text-xl md:text-2xl font-semibold mb-4">Manipulating DOM Elements</h2>
      <p class="text-base md:text-lg mb-4">
        Once you have selected elements, you can manipulate them by changing their content, styles, attributes, and more.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ manipulatingElementsCode }}</code></pre>
      </div>

      <!-- Event Handling -->
      <h2 id="event-handling" class="text-xl md:text-2xl font-semibold mb-4">Event Handling</h2>
      <p class="text-base md:text-lg mb-4">
        Events are actions or occurrences that happen in the browser, such as a user clicking a button or submitting a form. Handling events is key to making interactive web pages.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ eventHandlingCode }}</code></pre>
      </div>

      <!-- Common DOM Methods -->
      <h2 id="dom-methods" class="text-xl md:text-2xl font-semibold mb-4">Common DOM Methods</h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript provides numerous methods for interacting with the DOM. Here's a list of some commonly used methods:
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
          <tr v-for="method in domMethods" :key="method.name">
            <td class="border border-gray-300 p-2"><code>{{ method.name }}</code></td>
            <td class="border border-gray-300 p-2">{{ method.description }}</td>
            <td class="border border-gray-300 p-2"><code>{{ method.example }}</code></td>
          </tr>
        </tbody>
      </table>

      <!-- Advanced Topics -->
      <h2 id="advanced-topics" class="text-xl md:text-2xl font-semibold mb-4">Advanced Topics</h2>
      <p class="text-base md:text-lg mb-4">
        In this section, we'll explore some advanced DOM manipulation techniques, including traversing the DOM tree, handling events in capturing and bubbling phases, and performance considerations.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ advancedTopicsCode }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Mastering DOM manipulation is essential for any web developer looking to create dynamic and responsive web applications. With the knowledge from this course, you're now equipped to manipulate the DOM effectively.
      </p>
      <p class="text-base md:text-lg">
        In the next section, we'll delve into <strong>JavaScript Events</strong>, covering event handlers.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DomManipulation',
  data() {
    return {
      domIntroductionCode: `<!-- Sample HTML Structure -->
<!DOCTYPE html>
<html>
<head>
  <title>DOM Introduction</title>
</head>
<body>
  <div id="content">
    <h1>Welcome to the DOM World</h1>
    <p>This is a sample paragraph.</p>
  </div>
</body>
</html>
      `,
      selectingElementsCode: `// Selecting elements by ID
const contentDiv = document.getElementById('content');

// Selecting elements by class name
const paragraphs = document.getElementsByClassName('text');

// Selecting elements by tag name
const divs = document.getElementsByTagName('div');

// Selecting elements using querySelector
const header = document.querySelector('h1');

// Selecting all matching elements
const allParagraphs = document.querySelectorAll('p');

// Logging selected elements
console.log(contentDiv, paragraphs, divs, header, allParagraphs);
      `,
      manipulatingElementsCode: `// Changing the content of an element
const header = document.querySelector('h1');
// Original content
console.log('Original header:', header.textContent);
// Changing the text content
header.textContent = 'DOM Manipulation is Fun!';
// Verify the change
console.log('Updated header:', header.textContent);

// Changing the HTML inside an element
const contentDiv = document.getElementById('content');
// Original HTML
console.log('Original HTML:', contentDiv.innerHTML);
// Updating the inner HTML
contentDiv.innerHTML = '<h2>New Content</h2><p>Updated paragraph.</p>';
// Verify the update
console.log('Updated HTML:', contentDiv.innerHTML);

// Modifying element attributes
const link = document.querySelector('a');
// Original href attribute
console.log('Original href:', link.getAttribute('href'));
// Setting a new href attribute
link.setAttribute('href', 'https://www.example.com');
// Verify the change
console.log('Updated href:', link.getAttribute('href'));

// Changing styles
contentDiv.style.backgroundColor = '#f0f0f0';
contentDiv.style.padding = '20px';
contentDiv.style.border = '1px solid #ccc';

// Adding and removing classes
contentDiv.classList.add('active');
console.log('Classes after adding "active":', contentDiv.className);
contentDiv.classList.remove('inactive');
console.log('Classes after removing "inactive":', contentDiv.className);

// Toggling classes
contentDiv.classList.toggle('highlight');
console.log('Classes after toggling "highlight":', contentDiv.className);

// Creating new elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.body.appendChild(newParagraph);

// Inserting elements before another element
const newHeader = document.createElement('h2');
newHeader.textContent = 'Inserted Header';
document.body.insertBefore(newHeader, contentDiv);

// Cloning elements
const clonedDiv = contentDiv.cloneNode(true);
document.body.appendChild(clonedDiv);

// Removing elements
const oldParagraph = document.querySelector('p');
oldParagraph.parentElement.removeChild(oldParagraph);

// Replacing elements
const newDiv = document.createElement('div');
newDiv.textContent = 'This div replaces the old content div.';
contentDiv.parentElement.replaceChild(newDiv, contentDiv);
      `,
      eventHandlingCode: `// Adding an event listener
const button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button clicked!');
});

// Removing an event listener
function handleClick() {
  console.log('Button clicked');
}
button.addEventListener('click', handleClick);
// Later in the code
button.removeEventListener('click', handleClick);

// Event object and properties
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
  console.log('Event code:', event.code);
  console.log('Ctrl key pressed:', event.ctrlKey);
});

// Event propagation (bubbling and capturing)
const outerDiv = document.getElementById('outer');
const innerDiv = document.getElementById('inner');

outerDiv.addEventListener('click', function() {
  console.log('Outer DIV clicked');
}, false); // Bubbling phase

innerDiv.addEventListener('click', function(event) {
  console.log('Inner DIV clicked');
  // Stop propagation to parent elements
  event.stopPropagation();
}, false);

// Event delegation
document.body.addEventListener('click', function(event) {
  if (event.target.matches('.clickable')) {
    console.log('A clickable element was clicked:', event.target);
  }
});

// Preventing default actions
const link = document.querySelector('a');
link.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Link click prevented');
});

// Once option for event listeners
button.addEventListener('click', function() {
  console.log('This will only run once');
}, { once: true });
      `,
      advancedTopicsCode: `// Traversing the DOM
const listItem = document.querySelector('li.active');
const parent = listItem.parentElement;
const children = parent.children;
const nextSibling = listItem.nextElementSibling;
const previousSibling = listItem.previousElementSibling;

// Cloning elements
const originalElement = document.getElementById('original');
const clonedElement = originalElement.cloneNode(true);
document.body.appendChild(clonedElement);

// Performance considerations
// Minimizing reflows and repaints
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const newDiv = document.createElement('div');
  newDiv.textContent = 'Item ' + i;
  fragment.appendChild(newDiv);
}
document.body.appendChild(fragment);

// Using requestAnimationFrame for animations
function animate() {
  // Animation code here
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// Handling events in capturing and bubbling phases
element.addEventListener('click', function() {
  console.log('Bubbling phase');
}, false); // Default is false

element.addEventListener('click', function() {
  console.log('Capturing phase');
}, true); // Use true for capturing phase

// Using event delegation for better performance
document.body.addEventListener('click', function(event) {
  if (event.target.matches('.delegated')) {
    console.log('Delegated event handler');
  }
});
      `,
      domMethods: [
        { name: 'getElementById(id)', description: 'Selects an element by its ID', example: 'document.getElementById("header")' },
        { name: 'getElementsByClassName(className)', description: 'Selects elements by their class name', example: 'document.getElementsByClassName("items")' },
        { name: 'getElementsByTagName(tagName)', description: 'Selects elements by their tag name', example: 'document.getElementsByTagName("div")' },
        { name: 'querySelector(selector)', description: 'Returns the first element matching the selector', example: 'document.querySelector(".container")' },
        { name: 'querySelectorAll(selector)', description: 'Returns all elements matching the selector', example: 'document.querySelectorAll("p")' },
        { name: 'createElement(tagName)', description: 'Creates a new element with the specified tag name', example: 'document.createElement("span")' },
        { name: 'appendChild(node)', description: 'Appends a node as the last child of a parent node', example: 'parentNode.appendChild(childNode)' },
        { name: 'removeChild(node)', description: 'Removes a child node from the parent node', example: 'parentNode.removeChild(childNode)' },
        { name: 'addEventListener(type, listener)', description: 'Adds an event listener to an element', example: 'element.addEventListener("click", handler)' },
        { name: 'setAttribute(name, value)', description: 'Sets an attribute on an element', example: 'element.setAttribute("src", "image.jpg")' },
        { name: 'getAttribute(name)', description: 'Gets the value of an attribute on an element', example: 'element.getAttribute("href")' },
        { name: 'classList.add(className)', description: 'Adds a class to the element', example: 'element.classList.add("active")' },
        { name: 'classList.remove(className)', description: 'Removes a class from the element', example: 'element.classList.remove("active")' },
        { name: 'classList.toggle(className)', description: 'Toggles a class on the element', example: 'element.classList.toggle("active")' },
        { name: 'innerHTML', description: 'Sets or gets the HTML content of an element', example: 'element.innerHTML = "<p>New Content</p>"' },
        { name: 'textContent', description: 'Sets or gets the text content of an element', example: 'element.textContent = "New Text"' },
        { name: 'style.property', description: 'Sets or gets the inline style of an element', example: 'element.style.color = "red"' },
        { name: 'remove()', description: 'Removes the element from the DOM', example: 'element.remove()' },
        { name: 'replaceChild(newNode, oldNode)', description: 'Replaces a child node with a new node', example: 'parent.replaceChild(newNode, oldNode)' },
        { name: 'insertBefore(newNode, referenceNode)', description: 'Inserts a new node before a reference node', example: 'parent.insertBefore(newNode, referenceNode)' },
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