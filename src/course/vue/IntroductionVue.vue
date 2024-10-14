<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-green-600 rounded-t-xl p-4">
      <img src="/vue/logo.svg" alt="Vue.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to Vue.js</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction to Vue.js -->
      <p class="text-base md:text-lg mb-6">
        Vue.js is a progressive JavaScript framework for building user interfaces. Created by <strong>Evan You</strong> and first released in 2014, Vue focuses on the view layer only, making it easy to integrate with other libraries or use in large single-page applications.
      </p>

      <!-- Why Use Vue.js? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Use Vue.js? Key Features and Benefits</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Ease of Learning:</span> Vue.js has a simple syntax, making it beginner-friendly.</li>
        <li><span class="font-semibold">Component-Based Architecture:</span> Vue allows you to create reusable, modular components.</li>
        <li><span class="font-semibold">Reactive Data Binding:</span> Vue automatically syncs the data model with the DOM.</li>
        <li><span class="font-semibold">Flexibility:</span> Vue can be used for both small-scale projects and large, complex applications.</li>
      </ul>

      <!-- Who Uses Vue.js? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Who Uses Vue.js?</h2>
      <p class="text-base md:text-lg mb-6">
        Vue.js is used by companies such as Alibaba, Xiaomi, and GitLab, as well as many individual developers and small teams. Its versatility makes it a popular choice for a variety of projects.
      </p>

      <!-- Comparison Table: Vue.js, React, and Angular -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Vue.js vs. React and Angular: A Comparison</h2>
      <p class="text-base md:text-lg mb-4">
        Let’s compare the basic features and characteristics of Vue.js, React, and Angular:
      </p>

      <!-- Table with Overflow for Mobile -->
      <div class="overflow-x-auto mb-6">
        <table class="w-full text-left bg-white border-collapse">
          <thead>
            <tr>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Criteria</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">React</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Vue</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Angular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Developed By</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Facebook (Meta)</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Evan You</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Google</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Year of Release</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">2013</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">2014</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">2010 (AngularJS), 2016 (Angular)</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Learning Curve</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Moderate, flexible</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Easy, beginner-friendly</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Steep, structured</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Architecture</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Library, focused on UI</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Progressive Framework</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Full-fledged MVC Framework</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Ecosystem</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Massive, highly adaptable</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Smaller, simpler</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Robust, built-in tools</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Market Adoption</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">High (Facebook, Netflix, Uber)</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Growing (Alibaba, Xiaomi)</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Enterprise (Microsoft, IBM)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Vue.js Community -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">How is the Vue.js Community?</h2>
      <p class="text-base md:text-lg mb-6">
        Vue.js has a large and vibrant community with excellent documentation, numerous tutorials, and many open-source libraries and plugins. The community-driven nature of Vue ensures constant improvements and innovation.
      </p>

      <!-- When to Use Vue.js -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">When to Use Vue.js</h2>
      <p class="text-base md:text-lg mb-6">
        Vue.js is a great choice if you need:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-bold">A framework that’s easy to integrate</span> with existing projects.</li>
        <li><span class="font-bold">Flexibility</span> to build both small-scale and large-scale applications.</li>
        <li><span class="font-bold">A simple learning curve</span> for developers familiar with HTML, CSS, and JavaScript.</li>
        <li><span class="font-bold">Strong community support</span> with plenty of resources and tools.</li>
      </ul>

      <p class="text-base md:text-lg mb-6">
        Whether you’re a beginner or an experienced developer, Vue.js provides the tools and flexibility needed to build modern web applications efficiently.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionToVue"
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
