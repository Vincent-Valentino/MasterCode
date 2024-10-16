<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-950 rounded-t-xl p-4">
      <img src="/icons/bootstrap.svg" alt="Bootstrap Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to Bootstrap</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Bootstrap is a popular open-source front-end framework for building responsive websites and web applications. Originally developed by <strong>Twitter</strong>, Bootstrap provides pre-designed components and a grid system that makes it easy to create modern, responsive layouts quickly.
      </p>

      <!-- Why Learn Bootstrap -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Learn Bootstrap?</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Prebuilt Components:</span> Bootstrap offers a wide range of prebuilt UI components like buttons, forms, navigation bars, and more.</li>
        <li><span class="font-semibold">Responsive Design:</span> It includes a responsive grid system and media queries, making it easy to build mobile-friendly websites.</li>
        <li><span class="font-semibold">Customizable:</span> You can easily override Bootstrap’s default styles or customize them using SASS variables.</li>
        <li><span class="font-semibold">Large Community:</span> Being widely adopted, there’s extensive documentation, tutorials, and community support.</li>
      </ul>

      <!-- Features of Bootstrap -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Features of Bootstrap</h2>
      <p class="text-base md:text-lg mb-4">
        Bootstrap provides several powerful features:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Grid System:</span> A responsive, 12-column grid layout to organize your web pages.</li>
        <li><span class="font-semibold">Utility Classes:</span> Utility classes to quickly add margin, padding, alignment, and more.</li>
        <li><span class="font-semibold">Components:</span> Prebuilt components like modals, carousels, dropdowns, and navigation bars.</li>
        <li><span class="font-semibold">JavaScript Plugins:</span> Integrated JavaScript components like modals, tooltips, and popovers for enhanced interactivity.</li>
      </ul>

      <!-- Comparison with Other CSS Frameworks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Bootstrap vs. Other CSS Frameworks</h2>
      <p class="text-base md:text-lg mb-4">
        Here’s a comparison of how you can create a button using Bootstrap, TailwindCSS, and custom CSS:
      </p>

      <!-- Code Comparison -->
      <div class="space-y-6">
        <!-- Bootstrap Code -->
        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2">Bootstrap</h3>
          <div class="bg-gray-800 text-white rounded-lg p-4">
            <pre><code class="language-html">{{ bootstrapCode }}</code></pre>
          </div>
        </div>

        <!-- TailwindCSS Code -->
        <div>
          <h3 class="text-lg md:text-xl font-semibold mb-2">TailwindCSS</h3>
          <div class="bg-gray-800 text-white rounded-lg p-4">
            <pre><code class="language-html">{{ tailwindCode }}</code></pre>
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
        In Bootstrap, you use prebuilt classes like <code>btn</code> and <code>btn-primary</code>, whereas TailwindCSS provides utility classes, and custom CSS requires writing your own styles from scratch. Bootstrap offers a faster way to style with consistency, while custom CSS provides more control.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Bootstrap?</h2>
      <p class="text-base md:text-lg mb-6">
        Bootstrap’s predefined components and responsive grid system allow developers to build beautiful, responsive websites with minimal effort. It’s perfect for those who want a fast, efficient way to style their websites without writing a lot of custom CSS. 
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionToBootstrap",

  data() {
    return {
      bootstrapCode: `<button class="btn btn-primary">Button</button>`,
      tailwindCode: `<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>`,
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

<style>
  pre {
    white-space: pre-wrap;
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    pre, code {
      font-size: 0.5rem; 
    }
  }
</style>
