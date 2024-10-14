<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-cyan-400 rounded-t-xl p-4">
      <img src="/icons/react.svg" alt="React Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-black">Introduction to React</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-8 leading-relaxed">
        React, created by Facebook (now Meta) in 2013, revolutionized how developers build user interfaces for modern web applications. With its component-based architecture and virtual DOM, React has become the go-to library for creating dynamic, high-performance applications. Its declarative approach allows developers to describe what the UI should look like at any given time, while React efficiently manages updates and renders only what’s necessary.
      </p>
      <p class="text-base md:text-lg mb-6">
        One of the reasons for React’s widespread adoption is its flexibility. Unlike full-fledged frameworks like Angular, React is a library focused solely on the view layer, making it easy to integrate with other libraries or frameworks. This modularity enables React to be highly scalable, powering everything from small, single-page apps to large enterprise systems like Facebook, Instagram, and Netflix.
      </p>

      <!-- Virtual DOM Section -->
      <h2 class="text-xl md:text-2xl font-semibold mb-6 text-black">React’s Secret Sauce: The Virtual DOM</h2>
      <p class="text-base md:text-lg mb-6">
        At the core of React’s performance is the Virtual DOM. Rather than interacting directly with the browser’s DOM, React creates a lightweight copy, the Virtual DOM, and updates only the changed elements. This approach results in blazing-fast rendering speeds, even in complex applications with frequent UI updates.
      </p>

      <!-- Ecosystem -->
      <h2 class="text-xl md:text-2xl font-semibold mb-6 text-black">An Expanding Ecosystem</h2>
      <p class="text-base md:text-lg mb-6">
        React’s ecosystem has grown into one of the largest in web development. Popular tools like Redux (for state management), React Router (for navigation), and Next.js (for server-side rendering) integrate seamlessly with React. Additionally, the vast number of third-party libraries available makes React adaptable to nearly any use case, ensuring its continued dominance in the web development world.
      </p>

      <!-- Comparison Section -->
      <h2 class="text-xl md:text-2xl font-semibold mb-6 text-black">React vs Vue vs Angular</h2>
      <p class="text-base md:text-lg mb-6">
        React, Vue, and Angular are the top contenders in the web development world, but they serve different needs and audiences. Here’s a look at how they compare:
      </p>

      <!-- Comparison Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left bg-white border-collapse mb-8">
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

      <!-- Market Share Chart -->
      <h2 class="text-xl md:text-2xl font-semibold mb-6 text-black">Market Share Comparison (2023)</h2>
      <div class="flex justify-center">
        <img src="/media/reactvueangular.png" alt="Market Share of React, Vue, and Angular (2023)" class="w-full max-w-lg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReactIntroductionWithComparison',
  data() {
    return {
      // Any additional state or data properties can be added here
    };
  },
};
</script>

<style scoped>
/* Tailwind CSS classes are used directly in the template */
</style>
