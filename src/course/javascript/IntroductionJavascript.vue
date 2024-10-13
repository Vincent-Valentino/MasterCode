<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-yellow-500 rounded-t-xl p-4">
      <img src="/icons/javascript.svg" alt="JavaScript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to JavaScript Programming</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        JavaScript is a versatile, high-level programming language primarily known for its role in web development. Created by <strong>Brendan Eich</strong> in 1995, JavaScript has evolved to become one of the most essential technologies in modern web applications.
      </p>

      <!-- Why Learn JavaScript -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Learn JavaScript?</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Ubiquitous:</span> Runs on nearly every device with a web browser.</li>
        <li><span class="font-semibold">Versatile:</span> Used for both front-end and back-end development.</li>
        <li><span class="font-semibold">Large Ecosystem:</span> Extensive libraries and frameworks like React, Angular, and Vue.js.</li>
        <li><span class="font-semibold">High Demand:</span> JavaScript developers are highly sought after in the job market.</li>
      </ul>

      <!-- JavaScript Applications -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Applications of JavaScript</h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript can be utilized in various domains, including:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Web Development:</span> Building interactive websites and web applications using frameworks like React and Angular.</li>
        <li><span class="font-semibold">Server-Side Development:</span> Creating scalable server applications with Node.js.</li>
        <li><span class="font-semibold">Mobile App Development:</span> Developing cross-platform mobile apps using React Native.</li>
        <li><span class="font-semibold">Game Development:</span> Creating browser-based games.</li>
        <li><span class="font-semibold">Internet of Things (IoT):</span> Programming smart devices.</li>
      </ul>

      <!-- JavaScript and Web Technologies -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">JavaScript with HTML and CSS</h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript seamlessly integrates with HTML and CSS to create dynamic and responsive web pages. While HTML structures the content and CSS styles it, JavaScript adds interactivity and complex functionalities, enabling features like form validation, interactive maps, animated graphics, and real-time updates without requiring page reloads.
      </p>
      <div class="flex flex-wrap gap-4 mb-6">
        <img src="/icons/html5.svg" alt="HTML5 Logo" class="w-16 h-16" />
        <img src="/icons/css3.svg" alt="CSS3 Logo" class="w-16 h-16" />
        <img src="/icons/javascript.svg" alt="JavaScript Logo" class="w-16 h-16" />
      </div>

      <!-- JavaScript Ecosystem -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">The JavaScript Ecosystem</h2>
      <p class="text-base md:text-lg mb-4">
        The JavaScript ecosystem is vast and continually evolving, offering a plethora of tools and frameworks to enhance development efficiency and application performance. Some key components include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Frameworks and Libraries:</span> React, Angular, Vue.js, jQuery, and more.</li>
        <li><span class="font-semibold">Build Tools:</span> Webpack, Babel, Parcel.</li>
        <li><span class="font-semibold">Package Managers:</span> npm, Yarn.</li>
        <li><span class="font-semibold">Testing Tools:</span> Jest, Mocha, Cypress.</li>
        <li><span class="font-semibold">Task Runners:</span> Gulp, Grunt.</li>
      </ul>

      <!-- The Popularity of JavaScript -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why JavaScript is the Most Popular Language</h2>
      <p class="text-base md:text-lg mb-6">
        JavaScript's unparalleled versatility, massive community support, and continuous evolution contribute to its status as the most popular programming language. Its ability to run on both client and server sides, combined with the rapid development of frameworks and libraries, ensures that JavaScript remains at the forefront of technology trends.
      </p>

      <!-- Logos Section -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">JavaScript Frameworks and Libraries</h2>
      <div class="flex flex-wrap gap-4">
        <img src="/icons/react.svg" alt="React Logo" class="w-16 h-16" />
        <img src="/icons/angular.svg" alt="Angular Logo" class="w-16 h-16" />
        <img src="/icons/vuedotjs.svg" alt="Vue.js Logo" class="w-16 h-16" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToJavaScript',
  data() {
    return {
      // You can add any additional data properties here if needed
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