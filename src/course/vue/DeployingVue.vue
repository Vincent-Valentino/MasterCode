<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-green-600 rounded-t-xl p-4">
      <img src="/vue/logo.svg" alt="Vue.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Deploying Vue Application</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction to Deployment -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction to Deployment</h2>
        <p class="mb-4">
          Deploying your Vue.js application is a crucial step in making your project accessible to users. This course will guide you through the various methods and best practices for deploying Vue applications to different platforms.
        </p>
        <p class="mb-4">
          Whether you're deploying a simple static site or a complex single-page application (SPA), understanding the deployment process ensures that your app runs smoothly in production environments.
        </p>
      </section>

      <!-- Preparing Your Vue Application for Deployment -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Preparing Your Vue Application for Deployment</h2>
        <p class="mb-4">
          Before deploying your Vue.js application, it's essential to prepare it for production. This involves optimizing your build, configuring environment variables, and ensuring that your application is secure and performant.
        </p>

        <!-- Optimizing the Build -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Optimizing the Build</h3>
          <p class="mb-2">
            Use Vue CLI to create a production-ready build of your application. The production build is optimized for performance and excludes development-specific code.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>npm run build</code></pre>
            <p class="text-gray-400 mt-2">or</p>
            <pre><code>yarn build</code></pre>
          </div>
        </div>

        <!-- Configuring Environment Variables -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Configuring Environment Variables</h3>
          <p class="mb-2">
            Manage different configurations for development and production environments using environment variables.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>// .env.production
VUE_APP_API_URL=https://api.production.com
VUE_APP_OTHER_VARIABLE=someValue
            </code></pre>
          </div>
        </div>

        <!-- Ensuring Security -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Ensuring Security</h3>
          <p class="mb-2">
            Implement best security practices to protect your application and users. This includes using HTTPS, securing API keys, and sanitizing user input.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>// Example: Using HTTPS in production
if (process.env.NODE_ENV === 'production') {
  // Redirect to HTTPS
  if (window.location.protocol !== 'https:') {
    window.location.href = 'https://' + window.location.host + window.location.pathname
  }
}
            </code></pre>
          </div>
        </div>
      </section>

      <!-- Building the Application -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Building the Application</h2>
        <p class="mb-4">
          Building your Vue.js application compiles your code into optimized assets ready for deployment. This step ensures that your application is efficient and performs well in production.
        </p>

        <!-- Building with Vue CLI -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Building with Vue CLI</h3>
          <p class="mb-2">
            Use the Vue CLI to generate a production build of your application. This process minifies your code, optimizes assets, and prepares your app for deployment.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>npm run build</code></pre>
            <pre><code>yarn build</code></pre>
          </div>
        </div>

        <!-- Analyzing the Build -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Analyzing the Build</h3>
          <p class="mb-2">
            Analyze the size and composition of your build to identify optimization opportunities.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>npm run build --report</code></pre>
            <p class="text-gray-400 mt-2">or</p>
            <pre><code>yarn build --report</code></pre>
          </div>
        </div>
      </section>

      <!-- Deploying to Netlify -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Deploying to Netlify</h2>
        <p class="mb-4">
          Netlify is a popular platform for deploying static sites and SPAs. It offers continuous deployment, serverless functions, and a global CDN to ensure fast and reliable access to your application.
        </p>

        <!-- Steps to Deploy -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Steps to Deploy</h3>
          <ol class="list-decimal list-inside">
            <li>Sign up for a Netlify account.</li>
            <li>Connect your Git repository.</li>
            <li>Configure the build settings:
              <ul class="list-disc list-inside ml-4">
                <li><strong>Build Command:</strong> <code>npm run build</code></li>
                <li><strong>Publish Directory:</strong> <code>dist</code></li>
              </ul>
            </li>
            <li>Deploy the site and wait for the build to complete.</li>
          </ol>
        </div>

        <!-- Example Netlify Configuration -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Example Netlify Configuration</h3>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>/* netlify.toml */
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
            </code></pre>
          </div>
        </div>
      </section>

      <!-- Deploying to Vercel -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Deploying to Vercel</h2>
        <p class="mb-4">
          Vercel is a cloud platform for static sites and serverless functions, developed by the creators of Next.js. It offers seamless integration with Git, automatic scaling, and a global CDN.
        </p>

        <!-- Steps to Deploy -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Steps to Deploy</h3>
          <ol class="list-decimal list-inside">
            <li>Sign up for a Vercel account.</li>
            <li>Import your Git repository.</li>
            <li>Set the build command and output directory:
              <ul class="list-disc list-inside ml-4">
                <li><strong>Build Command:</strong> <code>npm run build</code></li>
                <li><strong>Output Directory:</strong> <code>dist</code></li>
              </ul>
            </li>
            <li>Deploy the project and monitor the build process.</li>
          </ol>
        </div>

        <!-- Example Vercel Configuration -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Example Vercel Configuration</h3>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>/* vercel.json */
{
  "builds": [
    { "src": "package.json", "use": "@vercel/static-build" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
            </code></pre>
          </div>
        </div>
      </section>

      <!-- Deploying to GitHub Pages -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Deploying to GitHub Pages</h2>
        <p class="mb-4">
          GitHub Pages is a free service for hosting static websites directly from your GitHub repository. It's an excellent choice for personal projects and documentation.
        </p>

        <!-- Steps to Deploy -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Steps to Deploy</h3>
          <ol class="list-decimal list-inside">
            <li>Add the `gh-pages` branch to your repository.</li>
            <li>Install the `gh-pages` package:
              <pre><code>npm install gh-pages --save-dev</code></pre>
            </li>
            <li>Add deployment scripts to your `package.json`:
              <pre><code>{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}</code></pre>
            </li>
            <li>Run the deploy script:
              <pre><code>npm run deploy</code></pre>
            </li>
          </ol>
        </div>

        <!-- Example Package.json Configuration -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Example Package.json Configuration</h3>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{
  "name": "my-vue-app",
  "version": "1.0.0",
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "vue": "^3.0.0"
  },
  "devDependencies": {
    "gh-pages": "^3.2.3",
    "@vue/cli-service": "^4.5.0"
  }
}
            </code></pre>
          </div>
        </div>
      </section>

      <!-- Deploying to Heroku -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Deploying to Heroku</h2>
        <p class="mb-4">
          Heroku is a cloud platform that allows you to deploy, manage, and scale modern apps. It's suitable for deploying both frontend and backend applications.
        </p>

        <!-- Steps to Deploy -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Steps to Deploy</h3>
          <ol class="list-decimal list-inside">
            <li>Install the Heroku CLI.</li>
            <li>Login to Heroku:
              <pre><code>heroku login</code></pre>
            </li>
            <li>Create a new Heroku application:
              <pre><code>heroku create my-vue-app</code></pre>
            </li>
            <li>Set the buildpack for static sites:
              <pre><code>heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git</code></pre>
            </li>
            <li>Add a `static.json` file to configure the server:
              <pre><code>{
  "root": "dist/",
  "routes": {
    "/**": "index.html"
  }
}
              </code></pre>
            </li>
            <li>Push the code to Heroku:
              <pre><code>git push heroku main</code></pre>
            </li>
          </ol>
        </div>

        <!-- Example static.json Configuration -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Example static.json Configuration</h3>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{
  "root": "dist/",
  "routes": {
    "/**": "index.html"
  }
}
            </code></pre>
          </div>
        </div>
      </section>

      <!-- Using Docker for Deployment -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Using Docker for Deployment</h2>
        <p class="mb-4">
          Docker allows you to containerize your Vue.js application, ensuring consistency across different environments. This approach simplifies deployment and scaling.
        </p>

        <!-- Creating a Dockerfile -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Creating a Dockerfile</h3>
          <p class="mb-2">
            Define a Dockerfile to specify how your application should be built and run within a container.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code># Dockerfile
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
            </code></pre>
          </div>
        </div>

        <!-- Building and Running the Docker Container -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Building and Running the Docker Container</h3>
          <p class="mb-2">
            Use Docker commands to build and run your containerized application.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code># Build the Docker image
docker build -t my-vue-app .

# Run the Docker container
docker run -d -p 8080:80 my-vue-app
            </code></pre>
          </div>
        </div>
      </section>

      <!-- Continuous Integration and Continuous Deployment (CI/CD) -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Continuous Integration and Continuous Deployment (CI/CD)</h2>
        <p class="mb-4">
          Implementing CI/CD pipelines automates the process of testing, building, and deploying your Vue.js applications. This ensures that your application is always in a deployable state.
        </p>

        <!-- Setting Up CI/CD with GitHub Actions -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Setting Up CI/CD with GitHub Actions</h3>
          <p class="mb-2">
            GitHub Actions allows you to automate workflows directly from your GitHub repository.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>// .github/workflows/deploy.yml
name: Deploy to Netlify

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install Dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v1.1
        with:
          publish-dir: ./dist
          production-deploy: true
          NETLIFY_AUTH_TOKEN: $&#123;&#123; secrets.NETLIFY_AUTH_TOKEN &#125;&#125;
          NETLIFY_SITE_ID: $&#123;&#123; secrets.NETLIFY_SITE_ID &#125;&#125;
            </code></pre>
          </div>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Best Practices</h2>
        <p class="mb-4">
          Adhering to best practices ensures your deployment process is efficient, secure, and maintainable.
        </p>

        <!-- Centralized Configuration -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Centralized Configuration</h3>
          <p class="mb-2">
            Manage all configuration settings in centralized files to simplify updates and maintenance.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>// .env.production
VUE_APP_API_URL=https://api.production.com
VUE_APP_FEATURE_FLAG=true
            </code></pre>
          </div>
        </div>

        <!-- Automate Deployments -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Automate Deployments</h3>
          <p class="mb-2">
            Use CI/CD tools to automate the testing, building, and deployment processes, reducing the risk of human error.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>// Example: GitHub Actions workflow file for deployment
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm run test

      - name: Build
        run: npm run build

      - name: Deploy
        run: npm run deploy
        env:
          DEPLOY_KEY: $&#123;&#123; secrets.DEPLOY_KEY &#125;&#125;
            </code></pre>
          </div>
        </div>

        <!-- Monitor and Maintain -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Monitor and Maintain</h3>
          <p class="mb-2">
            Continuously monitor your deployed applications for performance, errors, and security vulnerabilities.
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>// Example: Integrating Sentry for error monitoring
import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  Vue: app,
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ["localhost", "my-site.com", /^\//],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
  ],
  tracesSampleRate: 1.0,
})
            </code></pre>
          </div>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Wrapping Up</h2>
        <p class="mb-4">
          Deploying your Vue.js application is a vital step in delivering your project to users. By following the steps and best practices outlined in this course, you can ensure that your application is deployed efficiently, securely, and reliably.
        </p>
        <p class="mb-4">
          Continue exploring advanced deployment strategies, such as serverless architectures, containerization with Docker, and integrating with other cloud services to further enhance your deployment capabilities.
        </p>
        <p>
          For more detailed information and advanced topics, refer to the official <a href="https://vuejs.org/" class="text-indigo-500 underline">Vue.js documentation</a>, <a href="https://docs.netlify.com/" class="text-indigo-500 underline">Netlify documentation</a>, <a href="https://vercel.com/docs" class="text-indigo-500 underline">Vercel documentation</a>, and <a href="https://docs.github.com/en/actions" class="text-indigo-500 underline">GitHub Actions documentation</a>. Happy deploying!
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeployingVueAppCourse',
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
      <li v-for="user in users" :key="user.id">&#123;&#123; user.name &#125;&#125;</li>
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
    <p v-if="user">Name: &#123;&#123; user.name &#125;&#125;</p>
    <p v-if="user">Email: &#123;&#123; user.email &#125;&#125;</p>
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
    <p v-if="data">&#123;&#123; data &#125;&#125;</p>
    <p v-if="successMessage" class="text-green-500">&#123;&#123; successMessage &#125;&#125;</p>
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
    <p v-if="errorMessage" class="text-red-500">&#123;&#123; errorMessage &#125;&#125;</p>
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
        Name: &#123;&#123; item.name &#125;&#125;, Email: &#123;&#123; item.email &#125;&#125;
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
      &#123;&#123; loading ? 'Loading...' : 'Load Posts' &#125;&#125;
    </button>
    <p v-if="error" class="text-red-500">&#123;&#123; error &#125;&#125;</p>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">&#123;&#123; post.title &#125;&#125;</li>
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
      &#123;&#123; loading ? 'Loading...' : 'Fetch Data' &#125;&#125;
    </button>
    <p v-if="errorMessage" class="text-red-500">&#123;&#123; errorMessage &#125;&#125;</p>
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
        &#123;&#123; item.name &#125;&#125; - &#123;&#123; item.description &#125;&#125;
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
