<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-yellow-500 rounded-t-xl p-4">
        <img src="/js/logo.png" alt="JavaScript Logo" class="w-12 h-12">
        <h1 class="text-2xl md:text-4xl font-bold text-black">JavaScript Events</h1>
      </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Events are a core part of JavaScript that allow you to create interactive and dynamic web pages. They are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can respond to them. In this course, we'll delve deep into JavaScript events, exploring their types, handling mechanisms, and best practices.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#event-introduction" class="text-blue-800 underline">Introduction to Events</a></li>
        <li><a href="#event-types" class="text-blue-800 underline">Types of Events</a></li>
        <li><a href="#event-listeners" class="text-blue-800 underline">Event Listeners and Handlers</a></li>
        <li><a href="#event-object" class="text-blue-800 underline">The Event Object</a></li>
        <li><a href="#event-propagation" class="text-blue-800 underline">Event Propagation</a></li>
        <li><a href="#event-delegation" class="text-blue-800 underline">Event Delegation</a></li>
        <li><a href="#custom-events" class="text-blue-800 underline">Custom Events</a></li>
        <li><a href="#advanced-topics" class="text-blue-800 underline">Advanced Topics</a></li>
      </ul>

      <!-- Introduction to Events -->
      <h2 id="event-introduction" class="text-xl md:text-2xl font-semibold mb-4">Introduction to Events</h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript events are actions that occur in the browser, such as user interactions or browser actions. They are essential for making web pages interactive. Understanding how events work is fundamental to developing responsive web applications.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ eventIntroductionCode }}</code></pre>
      </div>

      <!-- Types of Events -->
      <h2 id="event-types" class="text-xl md:text-2xl font-semibold mb-4">Types of Events</h2>
      <p class="text-base md:text-lg mb-4">
        Events can be categorized based on their nature. Here are some common types:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-4">
        <li><strong>Mouse Events:</strong> <code>click</code>, <code>dblclick</code>, <code>mouseover</code>, <code>mouseout</code></li>
        <li><strong>Keyboard Events:</strong> <code>keydown</code>, <code>keyup</code>, <code>keypress</code></li>
        <li><strong>Form Events:</strong> <code>submit</code>, <code>change</code>, <code>focus</code>, <code>blur</code></li>
        <li><strong>Window Events:</strong> <code>load</code>, <code>resize</code>, <code>scroll</code>, <code>unload</code></li>
      </ul>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ eventTypesCode }}</code></pre>
      </div>

      <!-- Event Listeners and Handlers -->
      <h2 id="event-listeners" class="text-xl md:text-2xl font-semibold mb-4">Event Listeners and Handlers</h2>
      <p class="text-base md:text-lg mb-4">
        Event listeners are functions that wait for an event to occur. When the event occurs, the event handler function is executed. There are several ways to add event listeners in JavaScript.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ eventListenersCode }}</code></pre>
      </div>

      <!-- The Event Object -->
      <h2 id="event-object" class="text-xl md:text-2xl font-semibold mb-4">The Event Object</h2>
      <p class="text-base md:text-lg mb-4">
        When an event is triggered, an event object is created containing information about the event. This object is passed to the event handler and can be used to access event properties.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ eventObjectCode }}</code></pre>
      </div>

      <!-- Event Propagation -->
      <h2 id="event-propagation" class="text-xl md:text-2xl font-semibold mb-4">Event Propagation</h2>
      <p class="text-base md:text-lg mb-4">
        Event propagation determines the order in which event handlers are called when an event occurs in an element nested within other elements. It involves three phases: capturing, target, and bubbling.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ eventPropagationCode }}</code></pre>
      </div>

      <!-- Event Delegation -->
      <h2 id="event-delegation" class="text-xl md:text-2xl font-semibold mb-4">Event Delegation</h2>
      <p class="text-base md:text-lg mb-4">
        Event delegation is a technique involving adding an event listener to a parent element instead of adding it to the descendant elements. The listener analyzes bubbled events to find a match on child elements.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ eventDelegationCode }}</code></pre>
      </div>

      <!-- Custom Events -->
      <h2 id="custom-events" class="text-xl md:text-2xl font-semibold mb-4">Custom Events</h2>
      <p class="text-base md:text-lg mb-4">
        Custom events allow you to create and dispatch events in your application. They are useful for decoupling components and creating flexible architectures.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ customEventsCode }}</code></pre>
      </div>

      <!-- Advanced Topics -->
      <h2 id="advanced-topics" class="text-xl md:text-2xl font-semibold mb-4">Advanced Topics</h2>
      <p class="text-base md:text-lg mb-4">
        In this section, we'll explore advanced event handling techniques, including throttling and debouncing events, passive event listeners, and touch events.
      </p>
      <!-- Code Example -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ advancedTopicsCode }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript events are powerful tools for creating interactive web experiences. By understanding how to effectively handle events, you can build responsive and user-friendly applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptEvents',
  data() {
    return {
      eventIntroductionCode: `<!-- Sample HTML Structure for Events -->
<!DOCTYPE html>
<html>
<head>
  <title>Event Introduction</title>
</head>
<body>
  <button id="clickButton">Click Me</button>
  <input type="text" id="textInput" placeholder="Type something...">
  <div id="hoverDiv">Hover over me!</div>
</body>
</html>
      `,
      eventTypesCode: `// Mouse Events
document.getElementById('clickButton').addEventListener('click', function() {
  console.log('Button clicked');
});

document.getElementById('hoverDiv').addEventListener('mouseover', function() {
  console.log('Mouse over div');
});

// Keyboard Events
document.getElementById('textInput').addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});

// Form Events
document.getElementById('textInput').addEventListener('focus', function() {
  console.log('Input focused');
});

// Window Events
window.addEventListener('resize', function() {
  console.log('Window resized');
});
      `,
      eventListenersCode: `/* Adding Event Listeners */

// Using addEventListener
const button = document.getElementById('clickButton');
button.addEventListener('click', function() {
  alert('Button clicked using addEventListener!');
});

// Using onclick property
button.onclick = function() {
  alert('Button clicked using onclick property!');
};

// Assigning named function
function handleClick() {
  alert('Button clicked with named function!');
}
button.addEventListener('click', handleClick);

// Removing Event Listeners
button.removeEventListener('click', handleClick);

// Using inline event handlers (not recommended)
// <button onclick="alert('Button clicked inline!')">Click Me</button>
      `,
      eventObjectCode: `/* Understanding the Event Object */

document.getElementById('clickButton').addEventListener('click', function(event) {
  console.log('Event type:', event.type); // 'click'
  console.log('Target element:', event.target); // The button element
  console.log('Mouse coordinates:', event.clientX, event.clientY);
  console.log('Modifier keys:', event.altKey, event.ctrlKey, event.shiftKey);
});

document.getElementById('textInput').addEventListener('keydown', function(event) {
  console.log('Key:', event.key);
  console.log('Key code:', event.keyCode);
  console.log('Event object:', event);
});
      `,
      eventPropagationCode: `/* Event Propagation */

<!-- HTML Structure -->
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>

/* JavaScript Code */
// Capturing Phase
document.getElementById('grandparent').addEventListener('click', function() {
  console.log('Grandparent capturing');
}, true);

document.getElementById('parent').addEventListener('click', function() {
  console.log('Parent capturing');
}, true);

document.getElementById('child').addEventListener('click', function() {
  console.log('Child capturing');
}, true);

// Bubbling Phase
document.getElementById('grandparent').addEventListener('click', function() {
  console.log('Grandparent bubbling');
}, false);

document.getElementById('parent').addEventListener('click', function() {
  console.log('Parent bubbling');
}, false);

document.getElementById('child').addEventListener('click', function() {
  console.log('Child bubbling');
}, false);

/* Output when clicking the button:
   - Capturing Phase:
     Grandparent capturing
     Parent capturing
     Child capturing
   - At Target:
     Child bubbling
   - Bubbling Phase:
     Parent bubbling
     Grandparent bubbling
*/

// Stopping Propagation
document.getElementById('child').addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('Propagation stopped at child');
});
      `,
      eventDelegationCode: `/* Event Delegation Example */

<!-- HTML Structure -->
<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

/* JavaScript Code */
// Adding event listener to the parent element
document.getElementById('itemList').addEventListener('click', function(event) {
  if (event.target && event.target.nodeName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});

// Dynamically adding new list items
const newItem = document.createElement('li');
newItem.textContent = 'Item 4';
document.getElementById('itemList').appendChild(newItem);

// The event listener on the parent element will handle clicks on new items
      `,
      customEventsCode: `/* Custom Events */

// Creating and dispatching a custom event
const customEvent = new Event('myCustomEvent');

document.addEventListener('myCustomEvent', function() {
  console.log('Custom event triggered');
});

// Dispatching the event
document.dispatchEvent(customEvent);

// Custom event with additional data
const customEventWithData = new CustomEvent('myCustomEventWithData', {
  detail: { message: 'Hello, World!' }
});

document.addEventListener('myCustomEventWithData', function(event) {
  console.log('Custom event data:', event.detail.message);
});

// Dispatching the event with data
document.dispatchEvent(customEventWithData);
      `,
      advancedTopicsCode: `/* Advanced Event Handling */

// Throttling Events
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

window.addEventListener('resize', throttle(function() {
  console.log('Throttled resize event');
}, 1000));

// Debouncing Events
function debounce(func, delay) {
  let debounceTimer;
  return function() {
    const args = arguments;
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  }
}

window.addEventListener('scroll', debounce(function() {
  console.log('Debounced scroll event');
}, 500));

// Passive Event Listeners
window.addEventListener('touchstart', function(event) {
  console.log('Touch started');
}, { passive: true });

// Touch Events
document.addEventListener('touchmove', function(event) {
  console.log('Touch move:', event.touches[0].clientX, event.touches[0].clientY);
});

// Pointer Events
document.addEventListener('pointerdown', function(event) {
  console.log('Pointer down:', event.pointerType);
});
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
