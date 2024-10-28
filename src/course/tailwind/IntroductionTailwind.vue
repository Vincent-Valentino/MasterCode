<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-cyan-300 rounded-t-xl p-4">
      <img src="/tailwindcss/logo.svg" alt="TailwindCSS Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-emerald-950">Introduction to TailwindCSS</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        TailwindCSS is a utility-first CSS framework that allows developers to style their websites directly in their HTML. Created by <strong>Adam Wathan</strong>, TailwindCSS provides a wide range of CSS classes that make it easy to design responsive and modern websites without leaving your HTML.
      </p>

      <!-- Why Learn TailwindCSS -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Learn TailwindCSS?</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Utility-First:</span> Write styles using pre-defined CSS classes instead of custom CSS rules.</li>
        <li><span class="font-semibold">Customizable:</span> TailwindCSS is highly customizable, allowing you to easily override default styles or create your own utility classes.</li>
        <li><span class="font-semibold">Responsive Design:</span> Build responsive websites effortlessly by using Tailwind’s built-in responsive utilities.</li>
        <li><span class="font-semibold">Faster Development:</span> Styling directly in HTML can speed up development by reducing the need for switching between files.</li>
      </ul>

      <!-- TailwindCSS Features -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Features of TailwindCSS</h2>
      <p class="text-base md:text-lg mb-4">
        TailwindCSS includes a variety of powerful features:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Utility Classes:</span> Provides thousands of utility classes for controlling layout, spacing, typography, and more.</li>
        <li><span class="font-semibold">PurgeCSS Integration:</span> Automatically removes unused styles in production, making your CSS file smaller.</li>
        <li><span class="font-semibold">Custom Themes:</span> Easily create custom themes using the configuration file.</li>
        <li><span class="font-semibold">Dark Mode:</span> Built-in support for dark mode, which can be enabled with a single class.</li>
      </ul>

      <!-- Comparison with Other CSS Frameworks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">TailwindCSS vs. Other CSS Frameworks</h2>
      <p class="text-base md:text-lg mb-4">
        Here’s a quick comparison of how you’d implement a simple button with TailwindCSS, Bootstrap, and custom CSS:
      </p>

      <!-- Code Comparison -->
      <div class="space-y-6">
        <!-- TailwindCSS Code -->
        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2">TailwindCSS</h3>
          <div class="bg-gray-800 text-white rounded-lg p-4">
            <pre><code class="language-html">{{ tailwindCode }}</code></pre>
          </div>
        </div>

        <!-- Bootstrap Code -->
        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2">Bootstrap</h3>
          <div class="bg-gray-800 text-white rounded-lg p-4">
            <pre><code class="language-html">{{ bootstrapCode }}</code></pre>
          </div>
        </div>

        <!-- Custom CSS Code -->
        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2">Custom CSS</h3>
          <div class="bg-gray-800 text-white rounded-lg p-4">
            <pre><code class="language-css">{{ customCssCode }}</code></pre>
          </div>
        </div>
      </div>

      <!-- Explanation of Comparison -->
      <p class="text-base md:text-lg my-6">
        As you can see, TailwindCSS allows you to style components directly in your HTML using utility classes, while Bootstrap relies on predefined classes, and custom CSS requires writing your own styles in a separate file.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">The Power of TailwindCSS</h2>
      <p class="text-base md:text-lg mb-6">
        TailwindCSS offers a streamlined approach to styling, making it easier to maintain a consistent design throughout your project. Its flexibility and utility-first approach make it an excellent choice for developers who want to focus on building fast, responsive websites without the overhead of writing custom CSS from scratch.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionToTailwindCSS",

  data() {
    return {
      tailwindCode: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>`,
      bootstrapCode: `<button class="btn btn-primary">Button</button>`,
      customCssCode: 
`.btn {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
.btn:hover {
  background-color: darkblue;
}`,
    };
  },
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
