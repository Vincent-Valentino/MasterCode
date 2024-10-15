<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-green-600 rounded-t-xl p-4">
      <img src="/vue/logo.svg" alt="Vue.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Mastering Vue Router Basics</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction to Vue Router -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Introduction to Vue Router</h2>
        <p class="mb-4">
          Vue Router is the official router for Vue.js, deeply integrating with Vue.js core to make building Single Page Applications (SPAs) a breeze. It allows you to map routes to components, enabling navigation without reloading the page.
        </p>
        <p class="mb-4">
          This section will guide you through the basics of setting up and using Vue Router in your Vue.js applications.
        </p>
      </section>

      <!-- Setting Up Vue Router -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Setting Up Vue Router</h2>
        <p class="mb-4">
          To get started with Vue Router, you need to install it and configure it within your Vue.js project.
        </p>

        <!-- Installation -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Installation</h3>
          <p class="mb-2">
            You can install Vue Router via npm or yarn:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>npm install vue-router@4</code></pre>
            <pre><code>yarn add vue-router@4</code></pre>
          </div>
        </div>

        <!-- Creating the Router Instance -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Creating the Router Instance</h3>
          <p class="mb-2">
            After installation, create a router instance and define your routes:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ routerSetupExample }}</code></pre>
          </div>
        </div>

        <!-- Integrating with Vue -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Integrating with Vue</h3>
          <p class="mb-2">
            Finally, integrate the router with your Vue app:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ appIntegrationExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Defining Routes -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Defining Routes</h2>
        <p class="mb-4">
          Routes are the backbone of your application’s navigation. Each route maps a URL path to a component.
        </p>

        <!-- Basic Route Configuration -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Basic Route Configuration</h3>
          <p class="mb-2">
            Here's how to define basic routes:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ basicRouteExample }}</code></pre>
          </div>
        </div>

        <!-- Named Routes -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Named Routes</h3>
          <p class="mb-2">
            Naming your routes allows you to refer to them by name instead of path:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ namedRoutesExample }}</code></pre>
          </div>
        </div>

        <!-- Route Components -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Route Components</h3>
          <p class="mb-2">
            Each route requires a component to display when the route is matched:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ routeComponentExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Navigation -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Navigation</h2>
        <p class="mb-4">
          Navigating between routes can be done using &grave;&lt;router-view&gt;&grave;  components or programmatically via the router instance.
        </p>

        <!-- Using <router-link> -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Using &grave;&lt;router-view&gt;&grave; </h3>
          <p class="mb-2">
            The &grave;&lt;router-view&gt;&grave;  component allows you to navigate without reloading the page:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ routerLinkExample }}</code></pre>
          </div>
        </div>

        <!-- Programmatic Navigation -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Programmatic Navigation</h3>
          <p class="mb-2">
            You can also navigate programmatically using the router instance:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ programmaticNavigationExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Route Parameters -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Route Parameters</h2>
        <p class="mb-4">
          Route parameters allow you to capture values from the URL and use them within your components.
        </p>

        <!-- Dynamic Segments -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Dynamic Segments</h3>
          <p class="mb-2">
            Define dynamic segments in your routes using the colon (`:`) syntax:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ dynamicSegmentsExample }}</code></pre>
          </div>
        </div>

        <!-- Accessing Route Params -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Accessing Route Params</h3>
          <p class="mb-2">
            Access route parameters within your component using `$route.params`:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ accessRouteParamsExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Nested Routes -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Nested Routes</h2>
        <p class="mb-4">
          Nested routes allow you to build complex user interfaces by nesting components within other components based on the route hierarchy.
        </p>

        <!-- Defining Nested Routes -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Defining Nested Routes</h3>
          <p class="mb-2">
            Use the `children` property to define nested routes:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ nestedRoutesExample }}</code></pre>
          </div>
        </div>

        <!-- <router-view> for Nested Components -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">&lt;router-view&gt; for Nested Components</h3>
          <p class="mb-2">
            Use &grave;&lt;router-view&gt;&grave; within parent components to render nested components:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ nestedRouterViewExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Navigation Guards -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Navigation Guards</h2>
        <p class="mb-4">
          Navigation guards allow you to control access to routes, perform authentication checks, and more.
        </p>

        <!-- Global Guards -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Global Guards</h3>
          <p class="mb-2">
            Apply guards that run before every route change:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ globalGuardsExample }}</code></pre>
          </div>
        </div>

        <!-- Per-Route Guards -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Per-Route Guards</h3>
          <p class="mb-2">
            Define guards directly within route definitions:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ perRouteGuardsExample }}</code></pre>
          </div>
        </div>

        <!-- In-Component Guards -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">In-Component Guards</h3>
          <p class="mb-2">
            Use guards within individual components:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ inComponentGuardsExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Lazy Loading Routes -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Lazy Loading Routes</h2>
        <p class="mb-4">
          Lazy loading routes can improve your application's performance by splitting your code into smaller chunks and loading them on demand.
        </p>

        <!-- Route-Level Code Splitting -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Route-Level Code Splitting</h3>
          <p class="mb-2">
            Implement lazy loading by using dynamic `import` statements in your route definitions:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ lazyLoadingExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Scroll Behavior -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Scroll Behavior</h2>
        <p class="mb-4">
          Customize the scroll position when navigating between routes to enhance user experience.
        </p>

        <!-- Defining Scroll Behavior -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Defining Scroll Behavior</h3>
          <p class="mb-2">
            Customize scroll behavior within the router instance:
          </p>
          <div class="bg-gray-800 text-white p-4 rounded">
            <pre><code>{{ scrollBehaviorExample }}</code></pre>
          </div>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Wrapping Up</h2>
        <p class="mb-4">
          Vue Router is a powerful tool that enables seamless navigation in your Vue.js applications. By understanding the basics covered in this course, you can create dynamic, user-friendly SPAs with efficient routing mechanisms.
        </p>
        <p class="mb-4">
          Continue exploring Vue Router's advanced features, such as route meta fields, navigation guards, and dynamic routing, to build more complex and secure applications.
        </p>
        <p>
          For more detailed information and advanced topics, refer to the official <a href="https://router.vuejs.org/" class="text-blue-500 underline">Vue Router documentation</a>. Happy coding!
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueRouterCourse',
  data() {
    return {
      routerSetupExample: `<script>
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
<\/script>`,

      appIntegrationExample: `<script>
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')
<\/script>`,

      basicRouteExample: `<script>
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]
<\/script>`,

      namedRoutesExample: `<script>
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About }
]
<\/script>`,

      routeComponentExample: `<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the Home Page!</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
<\/script>`,

      routerLinkExample: `<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>`,

      programmaticNavigationExample: `<script>
export default {
  methods: {
    goToAbout() {
      this.$router.push('/about')
    }
  }
}
<\/script>

<template>
  <button @click="goToAbout">Go to About</button>
</template>`,

      dynamicSegmentsExample: `<script>
const routes = [
  { path: '/user/:id', component: User }
]
<\/script>`,

      accessRouteParamsExample: `<script>
export default {
  computed: {
    userId() {
      return this.$route.params.id
    }
  }
}
<\/script>

<template>
  <div>
    <h1>User ID: {{ userId }}</h1>
  </div>
</template>`,

      nestedRoutesExample: `<script>
const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'posts',
        component: UserPosts
      }
    ]
  }
]
<\/script>`,

      nestedRouterViewExample: `<template>
  <div>
    <h2>User Details</h2>
    <router-view></router-view>
  </div>
</template>`,

      globalGuardsExample: `<script>
router.beforeEach((to, from, next) => {
  // Perform authentication check
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login')
  } else {
    next()
  }
})
<\/script>`,

      perRouteGuardsExample: `<script>
const routes = [
  {
    path: '/protected',
    component: Protected,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next()
      } else {
        next('/login')
      }
    }
  }
]
<\/script>`,

      inComponentGuardsExample: `<script>
export default {
  beforeRouteEnter(to, from, next) {
    // Called before the route that renders this component is confirmed.
    next(vm => {
      // Access to component instance via &grave;vm&grave;
    })
  },
  beforeRouteUpdate(to, from, next) {
    // Called when the route that renders this component has changed,
    // but this component is reused in the new route.
    next()
  },
  beforeRouteLeave(to, from, next) {
    // Called when navigating away from this component's route.
    next()
  }
}
<\/script>`,

      lazyLoadingExample: `<script>
const routes = [
  {
    path: '/about',
    component: () => import('./components/About.vue') // Lazy-loaded
  }
]
<\/script>`,

      scrollBehaviorExample: `<script>
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
<\/script>`
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
  color: #1e40af;
}
</style>
