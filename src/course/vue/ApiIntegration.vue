<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-green-600 rounded-t-xl p-4">
      <img src="/vue/logo.svg" alt="Vue.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">API Integration in Vue</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction to API Integration -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction to API Integration</h2>
        <p class="mb-4">
          APIs (Application Programming Interfaces) are essential for modern web applications, enabling communication between the frontend and backend. In Vue.js, interacting with APIs allows you to fetch, display, and manipulate data dynamically, enhancing the user experience.
        </p>
        <p class="mb-4">
          This course will guide you through the process of integrating APIs into your Vue.js applications. We'll cover setting up Axios, making various types of HTTP requests, handling responses, managing asynchronous operations, and best practices to ensure efficient and maintainable code.
        </p>
      </section>

      <!-- Setting Up Axios -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Setting Up Axios</h2>
        <p class="mb-4">
          Axios is a popular promise-based HTTP client that works seamlessly with Vue.js. It simplifies the process of making HTTP requests to APIs, handling responses, and managing errors.
        </p>

        <!-- Installation -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Installation</h3>
          <p class="mb-2">
            Install Axios via npm or yarn:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>npm install axios</code></pre>
            <pre><code>yarn add axios</code></pre>
          </div>
        </div>

        <!-- Creating an Axios Instance -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Creating an Axios Instance</h3>
          <p class="mb-2">
            Creating a dedicated Axios instance allows for centralized configuration and easier maintenance. You can set default configurations such as the base URL and headers.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ axiosInstanceExample }}</code></pre>
          </div>
        </div>

        <!-- Configuring Axios -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Configuring Axios</h3>
          <p class="mb-2">
            You can customize your Axios instance by adding default headers, setting timeout durations, and more. Additionally, Axios interceptors allow you to handle requests and responses globally.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ axiosConfigExample }}</code></pre>
          </div>
        </div>

        <!-- Adding Interceptors -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Adding Interceptors</h3>
          <p class="mb-2">
            Axios interceptors are functions that Axios calls for every request or response. They are useful for tasks like adding authentication tokens to requests or handling errors globally.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ axiosInterceptorsExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Making API Requests -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Making API Requests</h2>
        <p class="mb-4">
          Learn how to perform various types of API requests, handle responses, and manage asynchronous operations in Vue.js. We'll cover GET, POST, PUT, PATCH, and DELETE requests.
        </p>

        <!-- GET Requests -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">GET Requests</h3>
          <p class="mb-2">
            GET requests are used to retrieve data from an API. Here's how to perform a GET request using Axios within a Vue component:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ getRequestExample }}</code></pre>
          </div>
        </div>

        <!-- POST Requests -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">POST Requests</h3>
          <p class="mb-2">
            POST requests are used to send data to an API. Here's how to perform a POST request using Axios:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ postRequestExample }}</code></pre>
          </div>
        </div>

        <!-- PUT and PATCH Requests -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">PUT and PATCH Requests</h3>
          <p class="mb-2">
            PUT requests update existing data, while PATCH requests apply partial modifications. Here's how to perform these requests:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ putPatchRequestExample }}</code></pre>
          </div>
        </div>

        <!-- DELETE Requests -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">DELETE Requests</h3>
          <p class="mb-2">
            DELETE requests remove data from an API. Here's how to perform a DELETE request using Axios:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ deleteRequestExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Handling API Responses -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Handling API Responses</h2>
        <p class="mb-4">
          Properly handling API responses is crucial for ensuring your application reacts appropriately to both successful and failed requests.
        </p>

        <!-- Success Handling -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Success Handling</h3>
          <p class="mb-2">
            Upon successful API responses, update the component's state to reflect the new data:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ successHandlingExample }}</code></pre>
          </div>
        </div>

        <!-- Error Handling -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Error Handling</h3>
          <p class="mb-2">
            Manage errors gracefully to enhance user experience and provide feedback when something goes wrong:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ errorHandlingExample }}</code></pre>
          </div>
        </div>

        <!-- Response Transformation -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Response Transformation</h3>
          <p class="mb-2">
            Transform API responses before using them in your components. This is useful for formatting data or extracting specific information:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ responseTransformationExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Using Async/Await -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Using Async/Await</h2>
        <p class="mb-4">
          Async/Await syntax simplifies asynchronous code, making it more readable and easier to manage. This section demonstrates how to use Async/Await with Axios in a Vue component.
        </p>

        <!-- Async/Await Example -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Async/Await Example</h3>
          <p class="mb-2">
            Here's how to use Async/Await with Axios in a Vue component:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ asyncAwaitExample }}</code></pre>
          </div>
        </div>

        <!-- Managing Loading States and Errors -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Managing Loading States and Errors</h3>
          <p class="mb-2">
            Use data properties to manage loading states and display error messages to provide feedback to users:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ loadingErrorHandlingExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Integrating with Vuex -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Integrating with Vuex</h2>
        <p class="mb-4">
          Combining Vuex with API interactions centralizes state management and streamlines data flow within your application. This section covers fetching data with Vuex actions and accessing Vuex state in components.
        </p>

        <!-- Fetching Data with Vuex Actions -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Fetching Data with Vuex Actions</h3>
          <p class="mb-2">
            Use Vuex actions to perform API requests and commit mutations to update the state:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ vuexActionExample }}</code></pre>
          </div>
        </div>

        <!-- Accessing Vuex State in Components -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Accessing Vuex State in Components</h3>
          <p class="mb-2">
            Access and display data from the Vuex store within your Vue components:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ vuexStateExample }}</code></pre>
          </div>
        </div>

        <!-- Committing Mutations from Components -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Committing Mutations from Components</h3>
          <p class="mb-2">
            Directly commit mutations from your components to modify the Vuex state:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ commitMutationExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Authentication with APIs -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Authentication with APIs</h2>
        <p class="mb-4">
          Implementing authentication is a common requirement when working with APIs. This section covers handling JWT tokens, securing API requests, and managing authentication state in Vue.js.
        </p>

        <!-- Handling JWT Tokens -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Handling JWT Tokens</h3>
          <p class="mb-2">
            JSON Web Tokens (JWT) are commonly used for authenticating API requests. Learn how to store, retrieve, and use JWT tokens in your Vue.js applications:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ jwtHandlingExample }}</code></pre>
          </div>
        </div>

        <!-- Securing API Requests -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Securing API Requests</h3>
          <p class="mb-2">
            Ensure that API requests are secure by attaching authentication tokens and handling token expiration:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ securingApiRequestsExample }}</code></pre>
          </div>
        </div>

        <!-- Managing Authentication State in Vuex -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Managing Authentication State in Vuex</h3>
          <p class="mb-2">
            Centralize authentication state management using Vuex to handle user login status, tokens, and user information:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ vuexAuthStateExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Pagination and Infinite Scrolling -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Pagination and Infinite Scrolling</h2>
        <p class="mb-4">
          Efficiently handle large datasets by implementing pagination or infinite scrolling in your Vue.js applications. This enhances performance and improves user experience.
        </p>

        <!-- Pagination Example -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Pagination Example</h3>
          <p class="mb-2">
            Implement pagination to navigate through data in chunks:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ paginationExample }}</code></pre>
          </div>
        </div>

        <!-- Infinite Scrolling Example -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Infinite Scrolling Example</h3>
          <p class="mb-2">
            Implement infinite scrolling to load more data as the user scrolls:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ infiniteScrollExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Best Practices</h2>
        <p class="mb-4">
          Adhering to best practices ensures your API integrations are efficient, maintainable, and secure.
        </p>

        <!-- Centralized API Service -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Centralized API Service</h3>
          <p class="mb-2">
            Create a centralized service for all API interactions to promote reusability and consistency. This approach helps manage configurations, handle common request behaviors, and streamline debugging:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ centralizedApiServiceExample }}</code></pre>
          </div>
        </div>

        <!-- Error Handling and User Feedback -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Error Handling and User Feedback</h3>
          <p class="mb-2">
            Provide meaningful feedback to users when API requests fail. This enhances user experience and helps in diagnosing issues:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ errorHandlingFeedbackExample }}</code></pre>
          </div>
        </div>

        <!-- Optimistic UI Updates -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Optimistic UI Updates</h3>
          <p class="mb-2">
            Improve user experience by updating the UI before receiving a response from the API. This approach assumes the operation will succeed, providing immediate feedback:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ optimisticUiExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Wrapping Up</h2>
        <p class="mb-4">
          Integrating APIs into your Vue.js applications empowers you to build dynamic and responsive user experiences. By mastering API interactions, handling asynchronous operations, and leveraging Vuex for state management, you can create robust and scalable applications.
        </p>
        <p class="mb-4">
          Continue exploring advanced topics such as authentication, real-time data with WebSockets, and optimizing API interactions to further enhance your Vue.js skills.
        </p>
        <p>
          For more detailed information and advanced topics, refer to the official <a href="https://vuejs.org/" class="text-indigo-500 underline">Vue.js documentation</a>, <a href="https://axios-http.com/" class="text-indigo-500 underline">Axios documentation</a>, and <a href="https://vuex.vuejs.org/" class="text-indigo-500 underline">Vuex documentation</a>. Happy coding!
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApiIntegrationCourse',
  data() {
    return {
      axiosInstanceExample: `<script>
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
<\/script>`,

      axiosConfigExample: `<script>
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
apiClient.interceptors.request.use(
  config => {
    // Modify config before request is sent
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  response => {
    // Any status code within the range of 2xx cause this function to trigger
    return response
  },
  error => {
    // Any status codes outside the range of 2xx cause this function to trigger
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access, e.g., redirect to login
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient
<\/script>`,

      axiosInterceptorsExample: `<script>
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Adding a request interceptor
apiClient.interceptors.request.use(
  config => {
    // Perform actions before request is sent, such as adding auth tokens
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`
    }
    return config
  },
  error => {
    // Handle request errors
    return Promise.reject(error)
  }
)

// Adding a response interceptor
apiClient.interceptors.response.use(
  response => {
    // Any status code within the range of 2xx cause this function to trigger
    return response
  },
  error => {
    // Any status codes outside the range of 2xx cause this function to trigger
    if (error.response.status === 403) {
      // Handle forbidden access
      alert('You do not have permission to perform this action.')
    }
    return Promise.reject(error)
  }
)

export default apiClient
<\/script>`,

      getRequestExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers() {
      apiClient.get('/users')
        .then(response => {
          this.users = response.data
        })
        .catch(error => {
          console.error('Error fetching users:', error)
        })
    }
  },
  created() {
    this.fetchUsers()
  }
}
<\/script>

<template>
  <div>
    <h3>User List</h3>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>`,

      postRequestExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      newUser: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    addUser() {
      apiClient.post('/users', this.newUser)
        .then(response => {
          this.$emit('user-added', response.data)
          this.newUser.name = ''
          this.newUser.email = ''
        })
        .catch(error => {
          console.error('Error adding user:', error)
        })
    }
  }
}
<\/script>

<template>
  <div>
    <h3>Add New User</h3>
    <form @submit.prevent="addUser">
      <input v-model="newUser.name" placeholder="Name" required>
      <input v-model="newUser.email" type="email" placeholder="Email" required>
      <button type="submit">Add User</button>
    </form>
  </div>
</template>`,

      putPatchRequestExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
      },
      updatedEmail: 'john.new@example.com'
    }
  },
  methods: {
    updateUser() {
      apiClient.put(\`/users/\${this.user.id}\`, { email: this.updatedEmail })
        .then(response => {
          this.user.email = response.data.email
          console.log('User updated:', response.data)
        })
        .catch(error => {
          console.error('Error updating user:', error)
        })
    },
    patchUser() {
      apiClient.patch(\`/users/\${this.user.id}\`, { name: 'Jane Doe' })
        .then(response => {
          this.user.name = response.data.name
          console.log('User patched:', response.data)
        })
        .catch(error => {
          console.error('Error patching user:', error)
        })
    }
  }
}
<\/script>

<template>
  <div>
    <h3>User Details</h3>
    <p>Name: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
    <input v-model="updatedEmail" placeholder="New Email">
    <button @click="updateUser">Update Email</button>
    <button @click="patchUser">Change Name</button>
  </div>
</template>`,

      deleteRequestExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      user: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
      }
    }
  },
  methods: {
    deleteUser() {
      apiClient.delete(\`/users/\${this.user.id}\`)
        .then(() => {
          console.log('User deleted successfully.')
          // Optionally, remove the user from the UI
          this.user = null
        })
        .catch(error => {
          console.error('Error deleting user:', error)
        })
    }
  }
}
<\/script>

<template>
  <div>
    <h3>User Details</h3>
    <p v-if="user">Name: {{ user.name }}</p>
    <p v-if="user">Email: {{ user.email }}</p>
    <button @click="deleteUser">Delete User</button>
    <p v-else>User has been deleted.</p>
  </div>
</template>`,

      successHandlingExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      data: null,
      successMessage: ''
    }
  },
  methods: {
    fetchData() {
      apiClient.get('/data-endpoint')
        .then(response => {
          this.data = response.data
          this.successMessage = 'Data fetched successfully!'
        })
        .catch(error => {
          console.error('Error fetching data:', error)
        })
    }
  }
}
<\/script>

<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="data">{{ data }}</p>
    <p v-if="successMessage" class="text-green-500">{{ successMessage }}</p>
  </div>
</template>`,

      errorHandlingExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      errorMessage: '',
      data: null
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiClient.get('/data-endpoint')
        this.data = response.data
      } catch (error) {
        this.errorMessage = 'Failed to fetch data. Please try again later.'
        console.error('API Error:', error)
      }
    }
  }
}
<\/script>

<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <p v-if="data">{{ data }}</p>
  </div>
</template>`,

      responseTransformationExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      formattedData: []
    }
  },
  methods: {
    async fetchAndTransformData() {
      try {
        const response = await apiClient.get('/raw-data')
        this.formattedData = response.data.map(item => ({
          id: item.id,
          name: item.name.toUpperCase(),
          email: item.email.toLowerCase()
        }))
      } catch (error) {
        console.error('Error fetching and transforming data:', error)
      }
    }
  },
  created() {
    this.fetchAndTransformData()
  }
}
<\/script>

<template>
  <div>
    <h3>Formatted Data</h3>
    <ul>
      <li v-for="item in formattedData" :key="item.id">
        Name: {{ item.name }}, Email: {{ item.email }}
      </li>
    </ul>
  </div>
</template>`,

      asyncAwaitExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      posts: [],
      loading: false,
      error: ''
    }
  },
  methods: {
    async fetchPosts() {
      this.loading = true
      this.error = ''
      try {
        const response = await apiClient.get('/posts')
        this.posts = response.data
      } catch (err) {
        this.error = 'Error fetching posts.'
        console.error(err)
      } finally {
        this.loading = false
      }
    }
  },
  created() {
    this.fetchPosts()
  }
}
<\/script>

<template>
  <div>
    <h3>Posts</h3>
    <button @click="fetchPosts" :disabled="loading">
      {{ loading ? 'Loading...' : 'Load Posts' }}
    </button>
    <p v-if="error" class="text-red-500">{{ error }}</p>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>`,

      loadingErrorHandlingExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      data: null,
      loading: false,
      errorMessage: ''
    }
  },
  methods: {
    async fetchData() {
      this.loading = true
      this.errorMessage = ''
      try {
        const response = await apiClient.get('/data-endpoint')
        this.data = response.data
      } catch (error) {
        this.errorMessage = 'Failed to fetch data. Please try again later.'
        console.error('API Error:', error)
      } finally {
        this.loading = false
      }
    }
  }
}
<\/script>

<template>
  <div>
    <button @click="fetchData" :disabled="loading">
      {{ loading ? 'Loading...' : 'Fetch Data' }}
    </button>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <p v-if="data">{{ data }}</p>
  </div>
</template>`,

      vuexActionExample: `<script>
import apiClient from '../apiClient'

export default {
  namespaced: true,
  state() {
    return {
      items: []
    }
  },
  mutations: {
    setItems(state, items) {
      state.items = items
    },
    addItem(state, item) {
      state.items.push(item)
    },
    removeItem(state, itemId) {
      state.items = state.items.filter(item => item.id !== itemId)
    }
  },
  actions: {
    async fetchItems({ commit }) {
      try {
        const response = await apiClient.get('/items')
        commit('setItems', response.data)
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    },
    async createItem({ commit }, newItem) {
      try {
        const response = await apiClient.post('/items', newItem)
        commit('addItem', response.data)
      } catch (error) {
        console.error('Error creating item:', error)
      }
    },
    async deleteItem({ commit }, itemId) {
      try {
        await apiClient.delete(\`/items/\${itemId}\`)
        commit('removeItem', itemId)
      } catch (error) {
        console.error('Error deleting item:', error)
      }
    }
  },
  getters: {
    allItems(state) {
      return state.items
    },
    itemCount(state) {
      return state.items.length
    }
  }
}
<\/script>`,

      vuexStateExample: `<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('itemsModule', ['allItems', 'itemCount'])
  },
  methods: {
    ...mapActions('itemsModule', ['fetchItems', 'createItem', 'deleteItem']),
    addNewItem() {
      const newItem = { name: 'New Item', description: 'This is a new item.' }
      this.createItem(newItem)
    },
    removeItem(itemId) {
      this.deleteItem(itemId)
    }
  },
  created() {
    this.fetchItems()
  }
}
<\/script>

<template>
  <div>
    <h3>Items ({{ itemCount }})</h3>
    <button @click="addNewItem">Add Item</button>
    <ul>
      <li v-for="item in allItems" :key="item.id">
        {{ item.name }} - {{ item.description }}
        <button @click="removeItem(item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>`,

      commitMutationExample: `<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    // Map the 'updateUser' mutation from the Vuex store
    ...mapMutations('userModule', ['updateUser']),
    // Method to update the user information
    handleUpdateUser() {
      const updatedUser = {
        name: this.user.name,
        email: this.user.email
      }
      // Commit the mutation to update the user in the Vuex store
      this.updateUser(updatedUser)
      console.log('User information updated.')
    }
  }
}
<\/script>

<template>
  <div>
    <h3>User Profile</h3>
    <button @click="handleUpdateUser">Update User</button>
  </div>
</template>`,

      jwtHandlingExample: `<script>
export default {
  name: 'AuthService',
  methods: {
    // Store JWT token in localStorage
    setToken(token) {
      localStorage.setItem('jwtToken', token)
    },

    // Retrieve JWT token from localStorage
    getToken() {
      return localStorage.getItem('jwtToken')
    },

    // Remove JWT token from localStorage
    removeToken() {
      localStorage.removeItem('jwtToken')
    },

    // Check if the user is authenticated
    isAuthenticated() {
      const token = this.getToken()
      // You can add more robust token validation here
      return !!token
    }
  }
}
<\/script>

<template>
  <div>
    <!-- This component can be used to manage authentication tokens -->
  </div>
</template>`,

      securingApiRequestsExample: `<script>
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor to add JWT token to headers
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jwtToken')
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle token expiration
apiClient.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response && error.response.status === 401) {
      // Token has expired or is invalid
      // Redirect to login page or trigger a logout action
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient
<\/script>`,

      vuexAuthStateExample: `<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated', 'getUser'])
  },
  methods: {
    ...mapActions('auth', ['login', 'logout']),
    handleLogin() {
      const credentials = { email: 'user@example.com', password: 'password123' }
      this.login(credentials)
        .then(() => {
          console.log('Logged in successfully.')
        })
        .catch(error => {
          console.error('Login failed:', error)
        })
    },
    handleLogout() {
      this.logout()
      console.log('Logged out successfully.')
    }
  }
}
<\/script>

<template>
  <div>
    <h3>Authentication Example</h3>
    <button @click="handleLogin" v-if="!isAuthenticated">Login</button>
    <button @click="handleLogout" v-else>Logout</button>
    <p v-if="isAuthenticated">Welcome, {{ getUser.name }}!</p>
  </div>
</template>`,

      paginationExample: `<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PaginatedList',
  computed: {
    ...mapGetters('itemsModule', ['allItems', 'hasMore']),
    currentPage() {
      return this.$store.state.itemsModule.currentPage
    },
    totalPages() {
      return this.$store.state.itemsModule.totalPages
    }
  },
  methods: {
    ...mapActions('itemsModule', ['fetchItems']),
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.fetchItems(this.currentPage + 1)
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.fetchItems(this.currentPage - 1)
      }
    }
  },
  created() {
    this.fetchItems()
  }
}
<\/script>

<template>
  <div>
    <h3>Paginated Items</h3>
    <ul>
      <li v-for="item in allItems" :key="item.id">{{ item.name }}</li>
    </ul>
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>`,

      infiniteScrollExample: `<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'InfiniteScrollList',
  computed: {
    ...mapGetters('itemsModule', ['allItems', 'hasMore'])
  },
  methods: {
    ...mapActions('itemsModule', ['fetchMoreItems']),
    handleScroll() {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.body.offsetHeight

      if (scrollTop + windowHeight >= fullHeight - 10) { // Trigger 10px before reaching the bottom
        this.fetchMoreItems()
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
<\/script>

<template>
  <div>
    <h3>Infinite Scroll Items</h3>
    <ul>
      <li v-for="item in allItems" :key="item.id">{{ item.name }}</li>
    </ul>
    <p v-if="!hasMore">No more items to load.</p>
  </div>
</template>`,

      centralizedApiServiceExample: `<script>
import axios from 'axios'

// Create a centralized API service
const apiService = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor to add auth token
apiService.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor to handle responses globally
apiService.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response.status === 401) {
      // Handle unauthorized access
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiService
<\/script>`,

      errorHandlingFeedbackExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      data: null,
      errorMessage: ''
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiClient.get('/data-endpoint')
        this.data = response.data
      } catch (error) {
        this.errorMessage = 'Failed to fetch data. Please try again later.'
        console.error('API Error:', error)
      }
    }
  }
}
<\/script>

<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <p v-if="data">{{ data }}</p>
  </div>
</template>`,

      optimisticUiExample: `<script>
import apiClient from './apiClient'

export default {
  data() {
    return {
      items: [],
      newItem: '',
      errorMessage: ''
    }
  },
  methods: {
    async addItem() {
      if (!this.newItem.trim()) return
      const tempId = Date.now()
      const tempItem = { id: tempId, name: this.newItem }

      // Optimistically add the item to the UI
      this.items.push(tempItem)
      this.newItem = ''

      try {
        const response = await apiClient.post('/items', { name: tempItem.name })
        // Replace the temporary item with the item from the server
        const index = this.items.findIndex(item => item.id === tempId)
        if (index !== -1) {
          this.$set(this.items, index, response.data)
        }
      } catch (error) {
        // Remove the temporary item if the request fails
        this.items = this.items.filter(item => item.id !== tempId)
        this.errorMessage = 'Failed to add item. Please try again.'
        console.error('Error adding item:', error)
      }
    }
  }
}
<\/script>

<template>
  <div>
    <h3>Optimistic UI Add Item</h3>
    <form @submit.prevent="addItem">
      <input v-model="newItem" placeholder="New Item" required>
      <button type="submit">Add</button>
    </form>
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>`,

      // Additional code snippets can be added here if necessary
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
  color: #818cf8; /* Tailwind's indigo-400 */
}

.text-red-500 {
  color: #ef4444;
}
.text-green-500 {
  color: #10b981;
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

