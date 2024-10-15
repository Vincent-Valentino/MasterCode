<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-green-600 rounded-t-xl p-4">
      <img src="/vue/logo.svg" alt="Vue.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Mastering Vuex State Management</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction to Vuex -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction to Vuex</h2>
        <p class="mb-4">
          Vuex is the official state management library for Vue.js applications. It serves as a centralized store for all the components in an application, ensuring that the state is managed in a predictable and efficient manner.
        </p>
        <p class="mb-4">
          This section will introduce you to the core concepts of Vuex and guide you through setting it up in your Vue.js projects.
        </p>
      </section>

      <!-- Setting Up Vuex -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Setting Up Vuex</h2>
        <p class="mb-4">
          To begin using Vuex, you need to install it and integrate it into your Vue.js application.
        </p>

        <!-- Installation -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Installation</h3>
          <p class="mb-2">
            Install Vuex via npm or yarn:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>npm install vuex@4</code></pre>
            <pre><code>yarn add vuex@4</code></pre>
          </div>
        </div>

        <!-- Creating the Store -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Creating the Store</h3>
          <p class="mb-2">
            After installation, create a Vuex store to manage the state of your application:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ storeSetupExample }}</code></pre>
          </div>
        </div>

        <!-- Integrating with Vue -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Integrating with Vue</h3>
          <p class="mb-2">
            Integrate the Vuex store with your Vue application:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ appIntegrationExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Core Concepts of Vuex -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Core Concepts of Vuex</h2>
        <p class="mb-4">
          Understanding Vuex's core concepts is essential for effective state management. This section covers State, Getters, Mutations, and Actions.
        </p>

        <!-- State -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">State</h3>
          <p class="mb-2">
            State is the single source of truth in Vuex. It represents the data shared across components.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ stateExample }}</code></pre>
          </div>
        </div>

        <!-- Getters -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Getters</h3>
          <p class="mb-2">
            Getters are computed properties for the Vuex store. They allow you to compute derived state based on store state.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ gettersExample }}</code></pre>
          </div>
        </div>

        <!-- Mutations -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Mutations</h3>
          <p class="mb-2">
            Mutations are the only way to actually change state in a Vuex store. They must be synchronous.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ mutationsExample }}</code></pre>
          </div>
        </div>

        <!-- Actions -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Actions</h3>
          <p class="mb-2">
            Actions are similar to mutations, but instead of mutating the state, they commit mutations. Actions can contain arbitrary asynchronous operations.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ actionsExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Modules -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Modules</h2>
        <p class="mb-4">
          Vuex allows you to divide the store into modules, each with its own state, mutations, actions, and getters. This helps in organizing the store for larger applications.
        </p>

        <!-- Creating Modules -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Creating Modules</h3>
          <p class="mb-2">
            Define modules within your Vuex store:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ modulesExample }}</code></pre>
          </div>
        </div>

        <!-- Accessing Module State -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Accessing Module State</h3>
          <p class="mb-2">
            Access state from modules within your components:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ accessingModuleStateExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Best Practices</h2>
        <p class="mb-4">
          Adhering to best practices ensures that your Vuex store remains maintainable and scalable as your application grows.
        </p>

        <!-- Keep State Minimal -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Keep State Minimal</h3>
          <p class="mb-2">
            Only store essential data in the Vuex state. Avoid duplicating state and keep it as minimal as possible.
          </p>
        </div>

        <!-- Use Namespaces -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Use Namespaces</h3>
          <p class="mb-2">
            Namespacing modules helps in avoiding naming collisions and makes the store easier to navigate.
          </p>
        </div>

        <!-- Mutations Should Be Synchronous -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Mutations Should Be Synchronous</h3>
          <p class="mb-2">
            Ensure that all mutations are synchronous to maintain predictable state changes.
          </p>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Wrapping Up</h2>
        <p class="mb-4">
          Vuex is a powerful state management tool that, when used correctly, can greatly enhance the maintainability and scalability of your Vue.js applications. By understanding and implementing the core concepts covered in this course, you can manage complex state interactions with ease.
        </p>
        <p class="mb-4">
          Continue exploring advanced Vuex features such as plugins, reactivity enhancements, and integrating Vuex with other libraries to further elevate your state management capabilities.
        </p>
        <p>
          For more detailed information and advanced topics, refer to the official <a href="https://vuex.vuejs.org/" class="text-purple-500 underline">Vuex documentation</a>. Happy coding!
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuexCourse',
  data() {
    return {
      storeSetupExample: `<script>
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  }
})

export default store
<\/script>`,
      
      appIntegrationExample: `<script>
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

createApp(App)
  .use(store)
  .mount('#app')
<\/script>`,
      
      stateExample: `<script>
export default {
  state() {
    return {
      todos: []
    }
  }
}
<\/script>`,
      
      gettersExample: `<script>
export default {
  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => todo.completed)
    }
  }
}
<\/script>`,
      
      mutationsExample: `<script>
export default {
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    toggleTodo(state, todoId) {
      const todo = state.todos.find(t => t.id === todoId)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
}
<\/script>`,
      
      actionsExample: `<script>
export default {
  actions: {
    fetchTodos({ commit }) {
      fetch('/api/todos')
        .then(response => response.json())
        .then(data => {
          data.forEach(todo => {
            commit('addTodo', todo)
          })
        })
    },
    toggleTodoAsync({ commit }, todoId) {
      setTimeout(() => {
        commit('toggleTodo', todoId)
      }, 1000)
    }
  }
}
<\/script>`,
      
      modulesExample: `<script>
import user from './modules/user'
import products from './modules/products'

const store = createStore({
  modules: {
    user,
    products
  }
})

export default store
<\/script>`,
      
      accessingModuleStateExample: `<template>
  <div>
    <p>User Name: {{ $store.state.user.name }}</p>
    <p>Product Count: {{ $store.state.products.count }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    },
    productCount() {
      return this.$store.state.products.count
    }
  }
}
<\/script>`,
    }
  }
}
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
a {
  color: #6b21a8; /* Tailwind's purple-700 */
}
</style>
