<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-green-600 rounded-t-xl p-4">
      <img src="/vue/logo.svg" alt="Vue.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Mastering Vue.js Directives</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction to Directives -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction to Directives</h2>
        <p class="mb-4">
          Directives are special attributes in Vue.js that allow you to extend the behavior of HTML elements. They are prefixed with <code>v-</code> to indicate that they are Vue-specific attributes. Directives can react to data changes and apply special reactive behavior to the rendered DOM.
        </p>
        <p class="mb-4">
          The basic syntax for a directive is:
        </p>
        <pre class="bg-gray-100 p-2 rounded"><code>v-directiveName:argument.modifier="value"</code></pre>
        <p class="mt-4">
          Where:
          <ul class="list-disc pl-6">
            <li><code>directiveName</code> is the name of the directive (e.g., bind, model, on)</li>
            <li><code>argument</code> is optional and depends on the directive</li>
            <li><code>modifier</code> is optional and allows you to specify special directive behavior</li>
            <li><code>value</code> is the expression the directive will use</li>
          </ul>
        </p>
      </section>

      <!-- Common Built-in Directives -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Common Built-in Directives</h2>

        <!-- v-bind -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-bind</h3>
          <p class="mb-2">
            The <code>v-bind</code> directive is used to dynamically bind one or more attributes, or a component prop to an expression. It's often shortened to just a colon (:).
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vBindExample }}</code></pre>
          </div>
        </div>

        <!-- v-model -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-model</h3>
          <p class="mb-2">
            <code>v-model</code> creates a two-way binding on a form input element or a component. It automatically picks the correct way to update the element based on the input type.
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vModelExample }}</code></pre>
          </div>
        </div>

        <!-- v-if, v-else, v-else-if -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-if, v-else, v-else-if</h3>
          <p class="mb-2">
            These directives are used for conditional rendering of elements. <code>v-if</code> will only render the element if the expression evaluates to true.
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vIfExample }}</code></pre>
          </div>
        </div>

        <!-- v-show -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-show</h3>
          <p class="mb-2">
            <code>v-show</code> is used for toggling the visibility of an element. Unlike <code>v-if</code>, a <code>v-show</code> element is always rendered and remains in the DOM.
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vShowExample }}</code></pre>
          </div>
        </div>

        <!-- v-for -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-for</h3>
          <p class="mb-2">
            <code>v-for</code> is used to render a list of items based on an array or an object. It requires a special syntax in the form of <code>item in items</code>.
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vForExample }}</code></pre>
          </div>
        </div>

        <!-- v-on -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-on</h3>
          <p class="mb-2">
            <code>v-on</code> attaches an event listener to the element. It's typically abbreviated to the @ symbol.
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vOnExample }}</code></pre>
          </div>
        </div>

        <!-- v-pre, v-cloak, v-once -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-pre, v-cloak, v-once</h3>
          <p class="mb-2">
            These are utility directives:
            <ul class="list-disc pl-6">
              <li><code>v-pre</code> skips compilation for this element and all its children</li>
              <li><code>v-cloak</code> hides un-compiled mustache bindings until the component is ready</li>
              <li><code>v-once</code> renders the element and component once only, and skips future updates</li>
            </ul>
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vUtilityExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Modifiers in Directives -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Modifiers in Directives</h2>
        <p class="mb-4">
          Modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way. Here are some common types of modifiers:
        </p>

        <!-- Event Modifiers -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Event Modifiers</h3>
          <p class="mb-2">
            Event modifiers allow you to modify the behavior of events. Some common ones include:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li><code>.stop</code> - calls event.stopPropagation()</li>
            <li><code>.prevent</code> - calls event.preventDefault()</li>
            <li><code>.capture</code> - adds event listener in capture mode</li>
            <li><code>.self</code> - only trigger handler if event.target is the element itself</li>
            <li><code>.once</code> - trigger the handler at most once</li>
          </ul>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ eventModifiersExample }}</code></pre>
          </div>
        </div>

        <!-- Key Modifiers -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Key Modifiers</h3>
          <p class="mb-2">
            When listening for keyboard events, you often need to check for specific keys. Vue allows adding key modifiers for <code>v-on</code> when listening for key events:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ keyModifiersExample }}</code></pre>
          </div>
        </div>

        <!-- Mouse Button Modifiers -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Mouse Button Modifiers</h3>
          <p class="mb-2">
            These modifiers restrict the handler to events triggered by a specific mouse button:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ mouseModifiersExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Conditional Directives -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Conditional Directives</h2>
        <p class="mb-4">
          Conditional directives allow you to render elements based on certain conditions. Let's explore <code>v-if</code> and <code>v-show</code> in more detail.
        </p>

        <!-- v-if and v-else Logic -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-if and v-else Logic</h3>
          <p class="mb-2">
            <code>v-if</code> is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value. You can use <code>v-else</code> to indicate an "else block" for <code>v-if</code>.
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vIfElseExample }}</code></pre>
          </div>
        </div>

        <!-- v-show vs v-if -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-show vs v-if: Differences and Performance Considerations</h3>
          <p class="mb-2">
            While <code>v-if</code> is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles, <code>v-show</code> is much simpler - the element is always rendered regardless of initial condition, with CSS-based toggling.
          </p>
          <p class="mb-2">
            Generally speaking, <code>v-if</code> has higher toggle costs while <code>v-show</code> has higher initial render costs. So prefer <code>v-show</code> if you need to toggle something very often, and prefer <code>v-if</code> if the condition is unlikely to change at runtime.
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vShowVsVIfExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- List Rendering with v-for -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">List Rendering with v-for</h2>
        <p class="mb-4">
          The <code>v-for</code> directive is used to render a list of items based on an array. The syntax requires a special form of <code>item in items</code>, where <code>items</code> is the source data array and <code>item</code> is an alias for the array element being iterated on.
        </p>

        <!-- Rendering Arrays and Objects -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Rendering Arrays and Objects</h3>
          <p class="mb-2">
            You can use <code>v-for</code> to iterate through both arrays and objects:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vForArrayObjectExample }}</code></pre>
          </div>
        </div>

        <!-- Using the :key Attribute -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Using the :key Attribute</h3>
          <p class="mb-2">
            When using <code>v-for</code>, it's recommended to provide a <code>key</code> attribute for each item. This helps Vue identify which items in a list have changed, been added, or been removed, leading to more predictable behavior.
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vForKeyExample }}</code></pre>
          </div>
        </div>

        <!-- Nested Loops and v-for with Ranges -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Nested Loops and v-for with Ranges</h3>
          <p class="mb-2">
            You can nest <code>v-for</code> directives and even use them with a range of numbers:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vForNestedRangeExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Handling Events with v-on -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Handling Events with v-on</h2>
        <p class="mb-4">
          The <code>v-on</code> directive is used to listen to DOM events and run JavaScript when they're triggered. It's often abbreviated to the @ symbol.
        </p>

        <!-- Basic Event Handling -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Basic Event Handling</h3>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vOnBasicExample }}</code></pre>
          </div>
        </div>

        <!-- Method Event Handlers -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Method Event Handlers</h3>
          <p class="mb-2">
            The logic for many event handlers will be more complex, so keeping your methods in the <code>methods</code> option is a good idea:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vOnMethodExample }}</code></pre>
          </div>
        </div>

        <!-- Event Modifiers -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Event Modifiers</h3>
          <p class="mb-2">
            Vue provides event modifiers for <code>v-on</code> to address common needs:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vOnModifiersExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Two-Way Data Binding with v-model -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Two-Way Data Binding with v-model</h2>
        <p class="mb-4">
          The <code>v-model</code> directive creates two-way data bindings on form inputs, textareas, and select elements. It automatically picks the correct way to update the element based on the input type.
        </p>

        <!-- Basic Usage -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Basic Usage</h3>
          <p class="mb-2">
            Here's a simple example of <code>v-model</code> with a text input:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vModelBasicExample }}</code></pre>
          </div>
        </div>

        <!-- Checkbox and Radio -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Checkbox and Radio Inputs</h3>
          <p class="mb-2">
            <code>v-model</code> also works with checkboxes and radio buttons:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vModelCheckboxRadioExample }}</code></pre>
          </div>
        </div>

        <!-- Select Element -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Select Element</h3>
          <p class="mb-2">
            <code>v-model</code> can be used with select dropdowns as well:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vModelSelectExample }}</code></pre>
          </div>
        </div>

        <!-- Modifiers -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">v-model Modifiers</h3>
          <p class="mb-2">
            Vue provides modifiers for <code>v-model</code> to handle common scenarios:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li><code>.lazy</code> - sync after "change" instead of "input"</li>
            <li><code>.number</code> - cast input string to numbers</li>
            <li><code>.trim</code> - trim input</li>
          </ul>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ vModelModifiersExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Custom Directives -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Custom Directives</h2>
        <p class="mb-4">
          Vue allows you to create custom directives to encapsulate reusable logic. These are particularly useful when you need direct DOM access.
        </p>

        <!-- Creating Custom Directives -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Creating Custom Directives</h3>
          <p class="mb-2">
            Here's an example of a custom directive that focuses an input element:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ customDirectiveExample }}</code></pre>
          </div>
        </div>

        <!-- Directive Hooks -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Directive Hooks</h3>
          <p class="mb-2">
            A custom directive can provide several hook functions:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li><code>bind</code>: called when the directive is first bound to the element</li>
            <li><code>inserted</code>: called when the bound element has been inserted into its parent node</li>
            <li><code>update</code>: called after the containing component has updated, but possibly before its children have updated</li>
            <li><code>componentUpdated</code>: called after the containing component and its children have updated</li>
            <li><code>unbind</code>: called only once, when the directive is unbound from the element</li>
          </ul>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ directiveHooksExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Dynamic Arguments in Directives -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Dynamic Arguments in Directives</h2>
        <p class="mb-4">
          Starting with version 2.6.0, Vue introduced dynamic argument expressions, allowing you to use a dynamic value as a directive argument.
        </p>

        <!-- Dynamic Arguments with v-bind -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Dynamic Arguments with v-bind</h3>
          <p class="mb-2">
            You can use a dynamic attribute name with <code>v-bind</code>:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ dynamicBindExample }}</code></pre>
          </div>
        </div>

        <!-- Dynamic Arguments with v-on -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Dynamic Arguments with v-on</h3>
          <p class="mb-2">
            Similarly, you can use dynamic event names with <code>v-on</code>:
          </p>
          <div class="bg-gray-100 p-4 rounded">
            <pre><code>{{ dynamicOnExample }}</code></pre>
          </div>
        </div>

        <!-- Restrictions -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Restrictions</h3>
          <p class="mb-2">
            There are some restrictions to dynamic argument expressions:
          </p>
          <ul class="list-disc pl-6 mb-2">
            <li>Expressions have some syntax constraints because certain characters are invalid inside HTML attribute names.</li>
            <li>Spaces and quotes won't work in the HTML attribute name.</li>
          </ul>
          <p class="mb-2">
            If you need to pass a complex dynamic argument, it's probably better to use a computed property.
          </p>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Wrapping Up</h2>
        <p class="mb-4">
          Directives are a powerful feature in Vue.js that allow you to extend HTML with new capabilities. From built-in directives like <code>v-bind</code>, <code>v-model</code>, and <code>v-for</code> to custom directives you create yourself, they provide a way to create expressive and reactive user interfaces.
        </p>
        <p class="mb-4">
          As you continue your Vue.js journey, you'll find that mastering directives is key to building efficient and maintainable applications. Practice using these directives in your projects, and don't hesitate to create custom directives when you find yourself repeating the same DOM manipulations.
        </p>
        <p>
          Remember, the Vue.js documentation is an excellent resource for more in-depth information and edge cases. Happy coding!
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueDirectivesCourse',
  data() {
    return {
      vBindExample: `
<template>
  <div>
    <img v-bind:src="imageSrc" v-bind:alt="imageAlt">
    <!-- Shorthand -->
    <img :src="imageSrc" :alt="imageAlt">
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: 'path/to/image.jpg',
      imageAlt: 'A beautiful landscape'
    }
  }
}
<\/script>
      `,
      vModelExample: `
<template>
  <div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
<\/script>
      `,
      vIfExample: `
<template>
  <div>
    <p v-if="seen">Now you see me</p>
    <p v-else>Now you don't</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true
    }
  }
}
<\/script>
      `,
      vShowExample: `
<template>
  <div>
    <p v-show="isVisible">This paragraph is visible</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    }
  }
}
<\/script>
      `,
      vForExample: `
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' }
      ]
    }
  }
}
<\/script>
      `,
      vOnExample: `
<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <!-- Shorthand -->
    <button @click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  }
}
<\/script>
      `,
      vUtilityExample: `
<template>
  <div>
    <span v-pre>{{ this will not be compiled }}</span>
    <div v-cloak>{{ message }}</div>
    <p v-once>This will never change: {{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
      msg: 'Initial message'
    }
  }
}
<\/script>

<style>
[v-cloak] {
  display: none;
}
</style>
      `,
      eventModifiersExample: `
<template>
  <div>
    <!-- the click event's propagation will be stopped -->
    <a @click.stop="doThis"></a>

    <!-- the submit event will no longer reload the page -->
    <form @submit.prevent="onSubmit"></form>

    <!-- modifiers can be chained -->
    <a @click.stop.prevent="doThat"></a>

    <!-- use capture mode when adding the event listener -->
    <div @click.capture="doThis">...</div>

    <!-- only trigger handler if event.target is the element itself -->
    <div @click.self="doThat">...</div>
  </div>
</template>
      `,
      keyModifiersExample: `
<template>
  <div>
    <!-- only call \`submit\` when the \`key\` is \`Enter\` -->
    <input @keyup.enter="submit">

    <!-- \`.exact\` modifier allows control of the exact combination of system modifiers needed to trigger an event -->
    <button @click.ctrl.exact="onCtrlClick">A</button>
  </div>
</template>
      `,
      mouseModifiersExample: `
<template>
  <div>
    <!-- only call \`mousedownHandler\` for left button mouse clicks -->
    <div @mousedown.left="mousedownHandler">Left Click</div>

    <!-- only call \`mousedownHandler\` for right button mouse clicks -->
    <div @mousedown.right="mousedownHandler">Right Click</div>
  </div>
</template>
      `,
      vIfElseExample: `
<template>
  <div>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'B'
    }
  }
}
<\/script>
      `,
      vShowVsVIfExample: `
<template>
  <div>
    <h1 v-if="ok">Title (v-if)</h1>
    <h1 v-show="ok">Title (v-show)</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ok: true
    }
  }
}
<\/script>
      `,
      vForArrayObjectExample: `
<template>
  <div>
    <!-- Array example -->
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        {{ index }}: {{ item.name }}
      </li>
    </ul>

    <!-- Object example -->
    <ul>
      <li v-for="(value, key, index) in myObject" :key="key">
        {{ index }}. {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' }
      ],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
}
<\/script>
      `,
      vForKeyExample: `
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange}
      ]
    }
  }
}
<\/script>
      `,
      vForNestedRangeExample: `
<template>
  <div>
    <!-- Nested v-for -->
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        <ul>
          <li v-for="(childItem, index) in item.children" :key="childItem.id">
            {{ index }}. {{ childItem.name }}
          </li>
        </ul>
      </li>
    </ul>

    <!-- v-for with a range -->
    <span v-for="n in 10" :key="n">{{ n }} </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { 
          id: 1, 
          name: 'Fruits', 
          children: [
            { id: 'a', name: 'Apple' },
            { id: 'b', name: 'Banana' }
          ]
        },
        { 
          id: 2, 
          name: 'Vegetables', 
          children: [
            { id: 'c', name: 'Carrot' },
            { id: 'd', name: 'Potato' }
          ]
        }
      ]
    }
  }
}
<\/script>
      `,
      vOnBasicExample: `
<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  }
}
<\/script>
      `,
      vOnMethodExample: `
<template>
  <div>
    <!-- \`greet\` is the name of a method defined below -->
    <button v-on:click="greet">Greet</button>
  </div>
</template>

<script>
export default {
  methods: {
    greet(event) {
      // \`this\` inside methods points to the Vue instance
      alert('Hello ' + this.name + '!')
      // \`event\` is the native DOM event
      if (event) {
        alert(event.target.tagName)
      }
    }
  },
  data() {
    return {
      name: 'Vue.js'
    }
  }
}
<\/script>
      `,
      vOnModifiersExample: `
<template>
  <div>
    <!-- the click event's propagation will be stopped -->
    <a v-on:click.stop="doThis"></a>

    <!-- the submit event will no longer reload the page -->
    <form v-on:submit.prevent="onSubmit"></form>

    <!-- modifiers can be chained -->
    <a v-on:click.stop.prevent="doThat"></a>

    <!-- just the modifier -->
    <form v-on:submit.prevent></form>

    <!-- use capture mode when adding the event listener -->
    <div v-on:click.capture="doThis">...</div>

    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <div v-on:click.self="doThat">...</div>
  </div>
</template>
      `,
      vModelBasicExample: `
<template>
  <div>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
<\/script>
      `,
      vModelCheckboxRadioExample: `
<template>
  <div>
    <!-- Checkbox -->
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <!-- Radio buttons -->
    <div>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
    </div>
    <div>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
    </div>
    <span>Picked: {{ picked }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      picked: ''
    }
  }
}
<\/script>
      `,
      vModelSelectExample: `
<template>
  <div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  }
}
<\/script>
      `,
      vModelModifiersExample: `
<template>
  <div>
    <!-- synced after "change" instead of "input" -->
    <input v-model.lazy="msg">

    <!-- user input to be automatically typecast as a Number -->
    <input v-model.number="age" type="number">

    <!-- whitespace from user input to be automatically trimmed -->
    <input v-model.trim="msg">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      age: 0
    }
  }
}
<\/script>
      `,
      customDirectiveExample: `
<template>
  <div>
    <!-- When the page loads, the input element will be focused -->
    <input v-focus>
  </div>
</template>

<script>
export default {
  directives: {
    focus: {
      // When the bound element is inserted into the DOM...
      inserted: function (el) {
        // Focus the element
        el.focus()
      }
    }
  }
}
<\/script>
      `,
      directiveHooksExample: `
Vue.directive('color-swatch', {
  bind: function (el, binding) {
    el.style.backgroundColor = binding.value
  },
  update: function (el, binding) {
    el.style.backgroundColor = binding.value
  }
})

// Usage:
// <div v-color-swatch="color"></div>
      `,
      dynamicBindExample: `
<template>
  <div>
    <a v-bind:[attributeName]="url"> ... </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attributeName: 'href',
      url: 'https://vuejs.org/'
    }
  }
}
<\/script>
      `,
      dynamicOnExample: `
<template>
  <div>
    <a v-on:[eventName]="doSomething"> ... </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventName: 'click'
    }
  },
  methods: {
    doSomething() {
      console.log('Event triggered!')
    }
  }
}
<\/script>
      `
    }
  }
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>