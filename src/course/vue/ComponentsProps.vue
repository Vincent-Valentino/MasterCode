<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-green-600 rounded-t-xl p-4">
      <img src="/vue/logo.svg" alt="Vue.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Vue Components and Props</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction to Vue Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Introduction to Vue Components</h2>
      <p class="text-base md:text-lg mb-4">
        Components are the building blocks of Vue.js applications. They allow you to encapsulate reusable code, making your application more organized and maintainable. Think of components as custom HTML elements that Vue.js controls.
      </p>

      <!-- Defining a Component -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Defining a Component</h3>
      <p class="text-base md:text-lg mb-4">
        A Vue component can be defined in several ways, including using the <code>Vue.component()</code> method or as Single-File Components (SFCs) with the <code>.vue</code> extension.
      </p>

      <!-- Single-File Components (.vue) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Single-File Components (.vue)</h3>
      <p class="text-base md:text-lg mb-4">
        Single-File Components allow you to define your template, script, and styles within a single <code>.vue</code> file. This approach enhances code organization and is recommended for larger applications.
      </p>

      <!-- Global vs. Local Components -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Global vs. Local Components</h3>
      <p class="text-base md:text-lg mb-6">
        Components can be registered globally or locally. Global components are available throughout your application, while local components are only available within the component they are registered in.
      </p>

      <!-- Creating Vue Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Creating Vue Components</h2>

      <!-- Using Vue.component() Method -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating a Component Using Vue.component()</h3>
      <p class="text-base md:text-lg mb-4">
        You can create a global component using the <code>Vue.component()</code> method. Here's an example:
      </p>

      <!-- Code Example: Global Component -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ globalComponentCode }}</code></pre>
      </div>

      <!-- Using Single-File Components (.vue) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating Components Using Single-File Components (.vue)</h3>
      <p class="text-base md:text-lg mb-4">
        Single-File Components allow you to define components in a modular way. Here's an example of a <code>ChildComponent.vue</code>:
      </p>

      <!-- Code Example: Single-File Component -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ singleFileComponentCode }}</code></pre>
      </div>

      <!-- Registering Components Globally -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Registering Components Globally</h3>
      <p class="text-base md:text-lg mb-4">
        To register a component globally, use the <code>Vue.component()</code> method in your main JavaScript file:
      </p>

      <!-- Code Example: Global Registration -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ globalRegistrationCode }}</code></pre>
      </div>

      <!-- Registering Components Locally -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Registering Components Locally</h3>
      <p class="text-base md:text-lg mb-4">
        To register a component locally within another component, import it and add it to the <code>components</code> option:
      </p>

      <!-- Code Example: Local Registration -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ localRegistrationCode }}</code></pre>
      </div>

      <!-- Passing Data to Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Passing Data to Components</h2>

      <!-- Introduction to Props -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Introduction to Props</h3>
      <p class="text-base md:text-lg mb-4">
        Props are custom attributes you can register on a component. They allow you to pass data from a parent component to a child component.
      </p>

      <!-- Defining Props in Child Components -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Defining Props in Child Components</h3>
      <p class="text-base md:text-lg mb-4">
        In the child component, define the props you expect to receive using the <code>props</code> option:
      </p>

      <!-- Code Example: Defining Props -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ definingPropsCode }}</code></pre>
      </div>

      <!-- Passing Props from Parent to Child -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Passing Props from Parent to Child</h3>
      <p class="text-base md:text-lg mb-4">
        In the parent component, pass data to the child component using custom attributes:
      </p>

      <!-- Code Example: Passing Props -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ passingPropsCode }}</code></pre>
      </div>

      <!-- Prop Types and Validation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Prop Types and Validation</h2>

      <!-- Defining Prop Types -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Defining Prop Types</h3>
      <p class="text-base md:text-lg mb-4">
        You can specify the type of a prop to ensure it receives the correct data type:
      </p>

      <!-- Code Example: Prop Types -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ propTypesCode }}</code></pre>
      </div>

      <!-- Setting Default Values for Props -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Setting Default Values for Props</h3>
      <p class="text-base md:text-lg mb-4">
        You can set default values for props in case the parent component doesn't provide them:
      </p>

      <!-- Code Example: Default Props -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ defaultPropsCode }}</code></pre>
      </div>

      <!-- Validating Props with Type Checks -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Validating Props with Type Checks</h3>
      <p class="text-base md:text-lg mb-4">
        Vue allows you to perform custom validation on props using the <code>validator</code> function:
      </p>

      <!-- Code Example: Prop Validation -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ propValidationCode }}</code></pre>
      </div>

      <!-- Dynamic and Static Props -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Dynamic and Static Props</h2>

      <!-- Passing Static Data via Props -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Passing Static Data via Props</h3>
      <p class="text-base md:text-lg mb-4">
        You can pass static values to props using string literals:
      </p>

      <!-- Code Example: Static Props -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ staticPropsCode }}</code></pre>
      </div>

      <!-- Passing Dynamic Data via Props -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Passing Dynamic Data via Props</h3>
      <p class="text-base md:text-lg mb-4">
        To pass dynamic data (e.g., variables), use the <code>v-bind</code> directive or its shorthand <code>:</code>:
      </p>

      <!-- Code Example: Dynamic Props -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ dynamicPropsCode }}</code></pre>
      </div>

      <!-- One-Way Data Flow in Vue -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">One-Way Data Flow in Vue</h3>
      <p class="text-base md:text-lg mb-6">
        In Vue, props are read-only from the child component's perspective. This enforces a one-way data flow, where child components cannot modify the props they receive.
      </p>

      <!-- Handling Prop Updates -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Handling Prop Updates</h2>

      <!-- Watching for Prop Changes -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Watching for Prop Changes</h3>
      <p class="text-base md:text-lg mb-4">
        If you need to perform actions when a prop changes, you can use watchers in your component:
      </p>

      <!-- Code Example: Watching Props -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ watchingPropsCode }}</code></pre>
      </div>

      <!-- Re-rendering Components on Prop Updates -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Re-rendering Components on Prop Updates</h3>
      <p class="text-base md:text-lg mb-6">
        Vue automatically re-renders components when the props they receive change, ensuring the UI stays in sync with the data.
      </p>

      <!-- Custom Events and Emitting Data -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Custom Events and Emitting Data</h2>

      <!-- Using $emit to Communicate from Child to Parent -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using <code>$emit</code> to Communicate from Child to Parent</h3>
      <p class="text-base md:text-lg mb-4">
        To send data from a child component to a parent component, the child can emit events using the <code>$emit</code> method:
      </p>

      <!-- Code Example: Emitting Events -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ emittingEventsCode }}</code></pre>
      </div>

      <!-- Emitting Custom Events -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Emitting Custom Events</h3>
      <p class="text-base md:text-lg mb-4">
        You can emit custom events with payloads to pass data back to the parent component:
      </p>

      <!-- Code Example: Emitting Custom Events -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ emittingCustomEventsCode }}</code></pre>
      </div>

      <!-- Handling Custom Events in Parent Components -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Handling Custom Events in Parent Components</h3>
      <p class="text-base md:text-lg mb-4">
        In the parent component, listen for the custom event using <code>v-on</code> or its shorthand <code>@</code>:
      </p>

      <!-- Code Example: Handling Custom Events -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ handlingCustomEventsCode }}</code></pre>
      </div>

      <!-- Slots in Vue Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Slots in Vue Components</h2>

      <!-- Understanding Slots -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Understanding Slots</h3>
      <p class="text-base md:text-lg mb-4">
        Slots allow you to pass content from a parent component into a child component, enabling greater flexibility and reusability.
      </p>

      <!-- Code Example: Basic Slot -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ basicSlotCode }}</code></pre>
      </div>

      <!-- Named Slots -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Named Slots</h3>
      <p class="text-base md:text-lg mb-4">
        Named slots allow you to define multiple slots within a component. Each slot has a name and can be targeted specifically:
      </p>

      <!-- Code Example: Named Slots -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ namedSlotsCode }}</code></pre>
      </div>

      <!-- Scoped Slots -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Scoped Slots</h3>
      <p class="text-base md:text-lg mb-4">
        Scoped slots allow you to pass data from the child component to the slot content in the parent component:
      </p>

      <!-- Code Example: Scoped Slots -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ scopedSlotsCode }}</code></pre>
      </div>

      <!-- Reusable and Dynamic Components -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Reusable and Dynamic Components</h2>

      <!-- Component Reusability -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Component Reusability</h3>
      <p class="text-base md:text-lg mb-4">
        By designing components to be reusable, you can use them throughout your application with different data and configurations.
      </p>

      <!-- Dynamic Components with <component> Tag -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Dynamic Components with <code>&lt;component&gt;</code> Tag</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>&lt;component&gt;</code> element allows you to render different components dynamically based on a variable:
      </p>

      <!-- Code Example: Dynamic Components -->
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-html">{{ dynamicComponentsCode }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Understanding components and props is essential in Vue.js development. Components allow you to encapsulate functionality and UI, while props enable communication between components. Mastering these concepts will help you build scalable and maintainable Vue.js applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueComponentsAndProps",
  data() {
    return {
      // Code Examples
      globalComponentCode: `Vue.component('my-component', {
  template: '<div>This is a global component!</div>'
});`,
      singleFileComponentCode: `<template>
  <div>
    <h2>{{ title }}</h2>
    <p>This is a single-file component.</p>
  </div>
</template>

<script>
export default {
  name: 'ChildComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
<\/script>

<style scoped>
h2 {
  color: #42b983;
}
</style>`,
      globalRegistrationCode: `// In main.js
import Vue from 'vue';
import ChildComponent from './components/ChildComponent.vue';

Vue.component('ChildComponent', ChildComponent);

new Vue({
  render: h => h(App)
}).$mount('#app');`,
      localRegistrationCode: `<template>
  <div>
    <ChildComponent :title="componentTitle" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  data() {
    return {
      componentTitle: 'Hello from Parent'
    };
  }
};
<\/script>`,
      definingPropsCode: `export default {
  name: 'ChildComponent',
  props: ['message']
};`,
      passingPropsCode: `<!-- In ParentComponent.vue -->
<template>
  <div>
    <ChildComponent message="Hello from Parent!" />
  </div>
</template>`,
      propTypesCode: `export default {
  props: {
    count: Number,
    user: Object,
    isActive: Boolean,
    tags: Array
  }
};`,
      defaultPropsCode: `export default {
  props: {
    title: {
      type: String,
      default: 'Default Title'
    }
  }
};`,
      propValidationCode: `export default {
  props: {
    age: {
      type: Number,
      validator: function(value) {
        return value >= 0;
      }
    }
  }
};`,
      staticPropsCode: `<ChildComponent message="Static Message" />`,
      dynamicPropsCode: `<!-- Assuming 'dynamicMessage' is a data property -->
<ChildComponent :message="dynamicMessage" />`,
      watchingPropsCode: `export default {
  props: ['value'],
  watch: {
    value(newVal, oldVal) {
      console.log('Value changed from', oldVal, 'to', newVal);
    }
  }
};`,
      emittingEventsCode: `export default {
  methods: {
    sendMessage() {
      this.$emit('message-sent', 'Hello Parent!');
    }
  }
};`,
      emittingCustomEventsCode: `<!-- In ChildComponent.vue -->
<template>
  <button @click="notifyParent">Click Me</button>
</template>

<script>
export default {
  methods: {
    notifyParent() {
      this.$emit('custom-event', { data: 'Some data' });
    }
  }
};
<\/script>`,
      handlingCustomEventsCode: `<!-- In ParentComponent.vue -->
<template>
  <div>
    <ChildComponent @custom-event="handleCustomEvent" />
  </div>
</template>

<script>
export default {
  methods: {
    handleCustomEvent(eventData) {
      console.log('Received event:', eventData);
    }
  }
};
<\/script>`,
      basicSlotCode: `<!-- In ChildComponent.vue -->
<template>
  <div>
    <slot></slot>
  </div>
</template>`,
      namedSlotsCode: `<!-- In ChildComponent.vue -->
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>`,
      scopedSlotsCode: `<!-- In ChildComponent.vue -->
<template>
  <div>
    <slot :user="userData"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: 'John Doe',
        age: 30
      }
    };
  }
};
<\/script>`,
      dynamicComponentsCode: `<template>
  <div>
    <component :is="currentComponent"></component>

    <button @click="currentComponent = 'ComponentA'">Load Component A</button>
    <button @click="currentComponent = 'ComponentB'">Load Component B</button>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      currentComponent: 'ComponentA'
    };
  }
};
<\/script>
      `
    };
  }
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
