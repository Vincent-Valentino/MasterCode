<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-green-600 rounded-t-xl p-4">
      <img src="/vue/logo.svg" alt="Vue.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Vue Event Handling</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction to Event Handling -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Introduction to Event Handling</h2>
      <p class="text-base md:text-lg mb-4">
        Event handling in Vue is one of the most essential aspects of building dynamic and interactive user interfaces. Vue's event handling model revolves around the concept of reactivity, where changes in the user interface are triggered by user actions, such as clicking a button, submitting a form, or pressing a key. This reactivity model allows for the seamless updating of the user interface in response to these actions, making Vue an excellent framework for building modern, reactive web applications.
      </p>

      <!-- Basics of Event Handling in Vue -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Basics of Event Handling in Vue</h3>
      <p class="text-base md:text-lg mb-4">
        At its core, event handling in Vue involves the binding of event listeners to elements within the DOM (Document Object Model). An event listener is a function or method that listens for specific events triggered by user interaction. In the context of Vue, events such as click, keyup, submit, and many others can be captured and handled using Vue's built-in event system.
      </p>

      <!-- Using v-on for Event Listeners -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>v-on</code> for Event Listeners</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>v-on</code> directive is Vue’s tool for capturing and handling these events. By using <code>v-on</code>, developers can assign event handlers to DOM elements in a declarative manner. Unlike vanilla JavaScript, where developers need to write separate event handling logic, Vue makes it easier by integrating event listeners directly into the template. This improves the maintainability and readability of the code, especially in large applications.
      </p>
      <!-- Code Example: Using v-on -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ usingVOnExample }}</code></pre>
      </div>

      <!-- Event Listener Shorthand (@ Syntax) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Event Listener Shorthand (<code>@</code> Syntax)</h3>
      <p class="text-base md:text-lg mb-4">
        In addition to the standard <code>v-on</code> directive, Vue provides a shorthand syntax for event handling using the <code>@</code> symbol. Instead of writing <code>v-on:click</code>, developers can simply use <code>@click</code>, reducing the verbosity of the code. While this might seem like a small improvement, in larger applications where event handling is widespread, this shorthand notation can make the codebase significantly cleaner and easier to work with.
      </p>
      <!-- Code Example: Shorthand Syntax -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ shorthandSyntaxExample }}</code></pre>
      </div>

      <!-- Listening for Native DOM Events -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Listening for Native DOM Events</h2>
      <p class="text-base md:text-lg mb-4">
        When developing Vue applications, it is crucial to understand that the framework is built on top of the DOM. As such, Vue can listen to and handle native DOM events in a manner similar to traditional JavaScript event listeners. However, the advantage of using Vue's event system is that it integrates seamlessly with Vue's reactivity system, enabling the UI to automatically update based on user interactions.
      </p>

      <!-- Handling Native DOM Events -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Handling Native DOM Events (e.g., Click, Submit, Keyup)</h3>
      <p class="text-base md:text-lg mb-4">
        Events like <code>click</code>, <code>submit</code>, and <code>keyup</code> are some of the most common user actions on a webpage. Handling these events in Vue is as simple as using the <code>v-on</code> directive or its shorthand <code>@</code>. For example, listening to a click event on a button can trigger a method that performs an action such as submitting a form, toggling visibility, or even fetching data from an API.
      </p>
      <!-- Code Example: Handling Click Event -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ handlingClickEventExample }}</code></pre>
      </div>

      <!-- Binding Multiple Events to a Single Element -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Binding Multiple Events to a Single Element</h3>
      <p class="text-base md:text-lg mb-4">
        Vue allows multiple event listeners to be bound to a single element, which can be incredibly useful when an element needs to respond to different types of user interactions. For instance, an input field might need to respond to both <code>focus</code> and <code>blur</code> events to apply and remove validation styles.
      </p>
      <!-- Code Example: Multiple Event Bindings -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ multipleEventBindingsExample }}</code></pre>
      </div>

      <!-- Method Binding in Event Handlers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Method Binding in Event Handlers</h2>
      <p class="text-base md:text-lg mb-4">
        One of the strengths of Vue's event handling system is its ability to bind methods to events. Methods in Vue are simply functions defined within the component's script section that contain the logic to be executed when an event occurs. Binding methods to event handlers allows developers to encapsulate the event handling logic within reusable functions, promoting modularity and separation of concerns.
      </p>

      <!-- Calling Methods on Event Triggers -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Calling Methods on Event Triggers</h3>
      <p class="text-base md:text-lg mb-4">
        In Vue, methods are often used to handle events such as button clicks, form submissions, or any other user interaction. When an event occurs, the corresponding method is triggered, and the logic within the method is executed. This approach enables developers to define reusable methods that can be bound to multiple events, simplifying the code and making it more maintainable.
      </p>
      <!-- Code Example: Calling Methods -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ callingMethodsExample }}</code></pre>
      </div>

      <!-- Passing Arguments to Event Methods -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Passing Arguments to Event Methods</h3>
      <p class="text-base md:text-lg mb-4">
        In some cases, event handlers need to perform actions based on dynamic data or user input. Vue makes it easy to pass arguments to methods bound to event listeners, allowing for more flexible and dynamic event handling.
      </p>
      <!-- Code Example: Passing Arguments -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ passingArgumentsExample }}</code></pre>
      </div>

      <!-- Accessing the Event Object in Methods -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Accessing the Event Object in Methods</h3>
      <p class="text-base md:text-lg mb-4">
        When an event is triggered, the native DOM event object is often needed to access information such as the target element, the type of event, or additional metadata associated with the event. Vue provides the <code>$event</code> object, which can be passed to methods to access this information.
      </p>
      <!-- Code Example: Accessing Event Object -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ accessingEventObjectExample }}</code></pre>
      </div>

      <!-- Event Modifiers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Event Modifiers</h2>
      <p class="text-base md:text-lg mb-4">
        Event modifiers in Vue provide a convenient way to alter the behavior of event listeners without writing additional logic in the methods themselves. Modifiers are special directives that can be added to event listeners to modify the default behavior of events. This feature makes Vue more expressive and allows developers to handle common event scenarios with less code.
      </p>

      <!-- Preventing Default Behavior with .prevent -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Preventing Default Behavior with <code>.prevent</code></h3>
      <p class="text-base md:text-lg mb-4">
        In web development, certain events have default behaviors associated with them. For example, submitting a form will cause the browser to reload the page. In many cases, developers need to prevent these default behaviors to implement custom functionality, such as handling form submission asynchronously.
      </p>
      <!-- Code Example: .prevent Modifier -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ preventModifierExample }}</code></pre>
      </div>

      <!-- Stopping Event Propagation with .stop -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Stopping Event Propagation with <code>.stop</code></h3>
      <p class="text-base md:text-lg mb-4">
        Event propagation is the process by which an event triggered on a child element bubbles up through its parent elements in the DOM. In some cases, this propagation is undesirable, as it can cause unintended behavior when multiple event listeners are attached to different levels of the DOM hierarchy.
      </p>
      <!-- Code Example: .stop Modifier -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ stopModifierExample }}</code></pre>
      </div>

      <!-- Limiting Events to Once with .once -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Limiting Events to Once with <code>.once</code></h3>
      <p class="text-base md:text-lg mb-4">
        In some scenarios, events should only be handled once. For example, a "submit" button should only be clicked once to prevent multiple form submissions. Vue's <code>.once</code> modifier ensures that an event listener is only triggered the first time the event occurs and is automatically removed afterward.
      </p>
      <!-- Code Example: .once Modifier -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ onceModifierExample }}</code></pre>
      </div>

      <!-- Using .self to Restrict Event Triggers to the Element Itself -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>.self</code> to Restrict Event Triggers to the Element Itself</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>.self</code> modifier in Vue is designed to limit the scope of event handling to the element that directly receives the event, effectively preventing events from being handled by parent elements even if they share the same event type. This is particularly useful in complex component hierarchies where multiple elements might respond to the same event type, and you want to ensure that only specific elements handle certain events.
      </p>
      <!-- Code Example: .self Modifier -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ selfModifierExample }}</code></pre>
      </div>

      <!-- Key Modifiers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Key Modifiers</h2>
      <p class="text-base md:text-lg mb-4">
        Key modifiers in Vue provide a streamlined approach to handling keyboard events by allowing developers to specify which keys should trigger particular event handlers. This feature is essential for creating responsive and accessible web applications, as it enables the development of intuitive user interfaces that respond appropriately to user input.
      </p>

      <!-- Handling Keyboard Events with Key Modifiers -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Handling Keyboard Events with Key Modifiers (e.g., <code>.enter</code>, <code>.esc</code>, <code>.tab</code>)</h3>
      <p class="text-base md:text-lg mb-4">
        Keyboard interactions are a fundamental aspect of user experience, especially for applications that require data input or navigation through keyboard shortcuts. Vue's key modifiers simplify the process of capturing and responding to specific key presses by allowing developers to attach modifiers directly to event listeners.
      </p>
      <!-- Code Example: Key Modifiers -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ keyModifiersExample }}</code></pre>
      </div>

      <!-- Using Custom Key Aliases -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Custom Key Aliases</h3>
      <p class="text-base md:text-lg mb-4">
        While Vue provides a range of predefined key modifiers, there may be instances where developers need to handle keys that do not have built-in aliases or require more specific handling. Vue's flexibility allows for the creation of custom key aliases, enabling developers to extend the functionality of key modifiers to accommodate a wider variety of keys.
      </p>
      <!-- Code Example: Custom Key Aliases -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-javascript">{{ customKeyAliasesExample }}</code></pre>
      </div>

      <!-- Handling Specific Keys Using Key Codes or Names -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Handling Specific Keys Using Key Codes or Names</h3>
      <p class="text-base md:text-lg mb-4">
        In situations where precise control over specific keys is required, Vue allows developers to handle individual keys using their corresponding key codes or names. This level of specificity is crucial for applications that need to respond to less common keys or implement custom keyboard shortcuts that are not covered by the standard key modifiers.
      </p>
      <!-- Code Example: Specific Keys -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ specificKeysExample }}</code></pre>
      </div>

      <!-- Mouse Button Modifiers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Mouse Button Modifiers</h2>
      <p class="text-base md:text-lg mb-4">
        Mouse interactions are a key component of user experience in web applications, enabling users to perform a wide range of actions through clicks, double-clicks, and other mouse events. Vue's mouse button modifiers offer a convenient way to handle different mouse button interactions, allowing developers to create more interactive and responsive interfaces.
      </p>

      <!-- Handling Specific Mouse Buttons -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Handling Specific Mouse Buttons (<code>.left</code>, <code>.right</code>, <code>.middle</code>)</h3>
      <p class="text-base md:text-lg mb-4">
        Different mouse buttons often serve different purposes in user interactions. Vue's mouse button modifiers (<code>.left</code>, <code>.right</code>, <code>.middle</code>) provide a straightforward way to differentiate between these interactions and handle them appropriately.
      </p>
      <!-- Code Example: Mouse Button Modifiers -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ mouseButtonModifiersExample }}</code></pre>
      </div>

      <!-- Combining Mouse Modifiers with Other Event Handling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Combining Mouse Modifiers with Other Event Handling</h3>
      <p class="text-base md:text-lg mb-4">
        Vue's mouse button modifiers can be combined with other event modifiers to create complex and sophisticated event handling scenarios. This capability enables developers to implement more advanced interactions that respond to multiple conditions or constraints.
      </p>
      <!-- Code Example: Combining Mouse Modifiers -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ combiningMouseModifiersExample }}</code></pre>
      </div>

      <!-- Event Binding for Form Inputs -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Event Binding for Form Inputs</h2>
      <p class="text-base md:text-lg mb-4">
        Forms are a fundamental part of many web applications, serving as the primary means for users to input and submit data. Effective event handling for form inputs is crucial for creating responsive, user-friendly, and accessible forms that provide immediate feedback and validation.
      </p>

      <!-- Listening to Input Events -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Listening to Input Events (e.g., <code>change</code>, <code>input</code>, <code>focus</code>, <code>blur</code>)</h3>
      <p class="text-base md:text-lg mb-4">
        Form inputs generate a variety of events that can be leveraged to enhance user experience and ensure data integrity. By listening to events such as <code>change</code>, <code>input</code>, <code>focus</code>, and <code>blur</code>, developers can implement real-time validation, provide immediate feedback, and manage the state of form elements effectively.
      </p>
      <!-- Code Example: Input Events -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ inputEventsExample }}</code></pre>
      </div>

      <!-- Handling Form Submissions with Event Handlers -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Handling Form Submissions with Event Handlers</h3>
      <p class="text-base md:text-lg mb-4">
        Form submission is a critical event in web applications, often leading to data being sent to a server for processing. Handling form submissions effectively involves intercepting the default behavior to implement custom logic, such as validation, data transformation, and asynchronous data submission.
      </p>
      <!-- Code Example: Form Submission Handling -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ formSubmissionHandlingExample }}</code></pre>
      </div>

      <!-- Using v-model for Two-Way Data Binding Alongside Event Handling -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>v-model</code> for Two-Way Data Binding Alongside Event Handling</h3>
      <p class="text-base md:text-lg mb-4">
        Vue's <code>v-model</code> directive facilitates two-way data binding between form inputs and the component's data. This seamless synchronization ensures that the user interface remains in sync with the underlying data model, reducing the need for manual data management and enhancing the overall efficiency of form handling.
      </p>
      <!-- Code Example: v-model with Event Handling -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ vModelWithEventHandlingExample }}</code></pre>
      </div>

      <!-- Custom Event Handling -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Custom Event Handling</h2>
      <p class="text-base md:text-lg mb-4">
        In Vue, components often need to communicate with one another to create complex and interactive applications. Custom events provide a mechanism for child components to emit events that parent components can listen for and respond to, facilitating a clear and structured communication channel between different parts of the application.
      </p>

      <!-- Emitting Custom Events with $emit -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Emitting Custom Events with <code>$emit</code></h3>
      <p class="text-base md:text-lg mb-4">
        Custom events in Vue are emitted using the <code>$emit</code> method, which allows child components to notify their parent components of specific actions or changes. This mechanism is essential for maintaining a unidirectional data flow, where data is passed down from parent to child components via props, and events are sent up from child to parent components via custom events.
      </p>
      <!-- Code Example: Emitting Custom Events -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-javascript">{{ emittingCustomEventsExample }}</code></pre>
      </div>

      <!-- Listening for Custom Events -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Listening for Custom Events</h3>
      <p class="text-base md:text-lg mb-4">
        Parent components listen for custom events emitted by their child components by attaching event listeners using the same <code>v-on</code> directive or its shorthand <code>@</code> that is used for native DOM events.
      </p>
      <!-- Code Example: Listening for Custom Events -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ listeningCustomEventsExample }}</code></pre>
      </div>

      <!-- Passing Data with Custom Events -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Passing Data with Custom Events</h3>
      <p class="text-base md:text-lg mb-4">
        Custom events not only signal that an action has occurred but can also carry data that provides additional context or information about the event. This capability is essential for creating meaningful and effective communication between components.
      </p>
      <!-- Code Example: Passing Data with Custom Events -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-javascript">{{ passingDataCustomEventsExample }}</code></pre>
      </div>

      <!-- Handling Events in Parent-Child Component Relationships -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Handling Events in Parent-Child Component Relationships</h3>
      <p class="text-base md:text-lg mb-4">
        The parent-child component relationship is fundamental in Vue applications, as it defines the hierarchy and structure of the components within the application. Handling events in this relationship involves a clear and organized approach to communication, ensuring that data flows smoothly and efficiently between different parts of the application.
      </p>
      <!-- Code Example: Parent-Child Event Handling -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre v-pre><code class="language-html">{{ parentChildEventHandlingExample }}</code></pre>
      </div>

      <!-- Event Handling with Dynamic Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Event Handling with Dynamic Components</h2>
      <p class="text-base md:text-lg mb-4">
        Dynamic components in Vue allow developers to render components conditionally or based on dynamic data, enabling the creation of flexible and adaptable user interfaces. Handling events with dynamic components introduces additional considerations, as the components being rendered can change at runtime, requiring a consistent and reliable approach to event management.
      </p>

      <!-- Binding Events to Dynamic Components -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Binding Events to Dynamic Components</h3>
      <p class="text-base md:text-lg mb-4">
        When working with dynamic components, it's essential to ensure that event bindings remain consistent and functional, regardless of which component is currently being rendered. Vue's component system provides mechanisms to bind events to dynamic components seamlessly, ensuring that the appropriate event listeners are attached as components are created or removed.
      </p>
      <!-- Code Example: Binding Events to Dynamic Components -->
      <div class="bg-gray-800 text-white rounded-lg p-4">
        <pre v-pre><code class="language-html">{{ bindingEventsDynamicComponentsExample }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueEventHandling",
  data() {
    return {
      // Code Examples
      usingVOnExample: `
<button v-on:click="handleClick">Click Me</button>
      `,
      shorthandSyntaxExample: `
<button @click="handleClick">Click Me</button>
      `,
      handlingClickEventExample: `
<button @click="submitForm">Submit</button>
      `,
      multipleEventBindingsExample: `
<input
  @focus="handleFocus"
  @blur="handleBlur"
  @input="handleInput"
/>
      `,
      callingMethodsExample: `
<!-- Template -->
<button @click="greetUser">Greet</button>

<!-- Script -->
export default {
  methods: {
    greetUser() {
      alert('Hello, User!');
    }
  }
};
      `,
      passingArgumentsExample: `
<!-- Template -->
<button @click="addToCart(product.id)">Add to Cart</button>

<!-- Script -->
export default {
  methods: {
    addToCart(productId) {
      // Logic to add product to cart
    }
  }
};
      `,
      accessingEventObjectExample: `
<!-- Template -->
<input @keyup="logKey($event)">

<!-- Script -->
export default {
  methods: {
    logKey(event) {
      console.log('Key pressed:', event.key);
    }
  }
};
      `,
      preventModifierExample: `
<form @submit.prevent="processForm">
  <!-- Form fields -->
</form>
      `,
      stopModifierExample: `
<button @click.stop="handleButtonClick">Click Me</button>
      `,
      onceModifierExample: `
<button @click.once="initialize">Initialize</button>
      `,
      selfModifierExample: `
<div @click.self="handleDivClick">
  <p>Clicking here won't trigger the handler.</p>
</div>
      `,
      keyModifiersExample: `
<input @keyup.enter="submitForm" placeholder="Press Enter to submit">
      `,
      customKeyAliasesExample: `
// In main.js
Vue.config.keyCodes = {
  f2: 113
};

// In component
<input @keyup.f2="openSearch">
      `,
      specificKeysExample: `
<input @keyup.page-down="nextPage">
      `,
      mouseButtonModifiersExample: `
<button @click.right="showContextMenu">Right Click Me</button>
      `,
      combiningMouseModifiersExample: `
<button @click.middle.prevent="handleMiddleClick">Middle Click Me</button>
      `,
      inputEventsExample: `
<input
  @input="validateInput"
  @change="handleChange"
  @focus="handleFocus"
  @blur="handleBlur"
/>
      `,
      formSubmissionHandlingExample: `
<form @submit.prevent="submitData">
  <!-- Form fields -->
</form>
      `,
      vModelWithEventHandlingExample: `
<input v-model="username" @input="checkUsername">
      `,
      emittingCustomEventsExample: `
// ChildComponent.vue
export default {
  methods: {
    sendUpdate() {
      this.$emit('update', { data: 'New Data' });
    }
  }
};
      `,
      listeningCustomEventsExample: `
<!-- ParentComponent.vue -->
<ChildComponent @update="handleUpdate"/>
      `,
      passingDataCustomEventsExample: `
// Emitting event with data
this.$emit('itemSelected', itemId);

// Listening and handling the event
<ItemList @itemSelected="selectItem"/>

methods: {
  selectItem(id) {
    // Handle the selected item
  }
}
      `,
      parentChildEventHandlingExample: `
<!-- ChildComponent.vue -->
<button @click="$emit('incrementCount')">Increment</button>

<!-- ParentComponent.vue -->
<ChildComponent @incrementCount="count++"/>
      `,
      bindingEventsDynamicComponentsExample: `
<component :is="currentComponent" @action="handleAction"></component>
      `
    };
  }
};
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  overflow-x: auto;
}

@media (max-width: 768px) {
  pre,
  code {
    font-size: 0.75rem;
  }
}
</style>
