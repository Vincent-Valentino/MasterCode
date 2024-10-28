<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-indigo-600 rounded-t-xl p-4">
      <img src="/icons/css3.svg" alt="Next.js Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to Next.js</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        **Next.js** is a robust React framework developed by **Vercel** (formerly Zeit) that enhances the capabilities of React for building production-ready web applications. By offering features like Server-Side Rendering (SSR), Static Site Generation (SSG), and an intuitive routing system, Next.js streamlines the development process, improves performance, and enhances SEO. This introduction explores what Next.js is, why it's beneficial compared to using React alone, the key differences between Next.js and React, and how Next.js stands in popularity compared to other front-end frameworks.
      </p>

      <!-- What is Next.js? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What is Next.js?</h2>
      <p class="text-base md:text-lg mb-4">
        Next.js is an open-source React framework that enables developers to build server-rendered and statically generated web applications with ease. It abstracts away much of the configuration required in setting up a React project, allowing developers to focus on building features rather than managing tooling. Next.js enhances React by adding powerful features that are essential for modern web development.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Key Features of Next.js:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Server-Side Rendering (SSR):</strong> Renders React components on the server at request time, improving performance and SEO.</li>
        <li><strong>Static Site Generation (SSG):</strong> Pre-renders pages at build time, enabling fast load times and better scalability.</li>
        <li><strong>Automatic Code Splitting:</strong> Optimizes application performance by splitting code into smaller bundles.</li>
        <li><strong>File-Based Routing:</strong> Simplifies navigation by using the file system to define routes.</li>
        <li><strong>API Routes:</strong> Allows developers to build API endpoints within the Next.js application.</li>
        <li><strong>Built-In CSS Support:</strong> Supports CSS and CSS-in-JS solutions out of the box.</li>
        <li><strong>TypeScript Support:</strong> Seamlessly integrates with TypeScript for type-safe development.</li>
        <li><strong>Optimized Image Handling:</strong> Provides automatic image optimization for better performance.</li>
        <li><strong>Internationalization (i18n):</strong> Offers support for building multilingual websites with ease.</li>
      </ul>

      <!-- Why Use Next.js Instead of Just React? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Use Next.js Instead of Just React?</h2>
      <p class="text-base md:text-lg mb-4">
        While **React** is a powerful library for building user interfaces, it primarily handles the view layer of your application. Next.js builds upon React by providing a comprehensive framework that addresses many of the challenges associated with building scalable, high-performance, and SEO-friendly web applications. Here’s why Next.js is often preferred over using React alone:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Enhanced Performance:</strong> With SSR and SSG, Next.js delivers pre-rendered HTML to the client, resulting in faster load times and improved performance compared to client-side rendering alone.</li>
        <li><strong>SEO Optimization:</strong> Server-rendered pages are more easily crawled by search engines, enhancing the visibility and ranking of your web applications.</li>
        <li><strong>Routing Simplification:</strong> Next.js’s file-based routing system eliminates the need for additional routing libraries, making navigation setup straightforward and intuitive.</li>
        <li><strong>Built-In Features:</strong> Features like automatic code splitting, image optimization, and API routes are integrated into Next.js, reducing the need for manual configuration and third-party libraries.</li>
        <li><strong>Developer Experience:</strong> Next.js offers a rich developer experience with features like hot module replacement, TypeScript integration, and a powerful CLI, streamlining the development workflow.</li>
        <li><strong>Scalability:</strong> Next.js is well-suited for both small projects and large-scale applications, ensuring consistent performance and maintainability as your project grows.</li>
      </ul>

      <!-- Differences Between Next.js and React -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Differences Between Next.js and React</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding the distinctions between Next.js and React is crucial for making informed decisions about your web development projects. Here’s a detailed comparison:
      </p>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left bg-white border-collapse mb-8">
          <thead>
            <tr>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Criteria</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">React</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Next.js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Type</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Library</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Framework</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Rendering Methods</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Client-Side Rendering (CSR)</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Server-Side Rendering (SSR), Static Site Generation (SSG)</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Routing</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Manual setup using React Router or other libraries</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">File-based routing built-in</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Performance Optimization</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Requires manual configuration and optimization</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Automatic code splitting, optimized performance out of the box</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">SEO</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Limited SEO capabilities due to CSR</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Enhanced SEO with SSR and SSG</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">API Routes</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Not included, requires separate backend setup</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Built-in API routes</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Setup Complexity</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Simple, minimal configuration</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">More complex due to additional features</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-base md:text-lg mb-6">
        **Key Differences:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Nature:</strong> React is a library focused on building UI components, while Next.js is a full-fledged framework that includes React and adds powerful features for server-side rendering, routing, and more.</li>
        <li><strong>Rendering:</strong> React primarily relies on client-side rendering, whereas Next.js supports both server-side rendering and static site generation, providing flexibility in how content is delivered.</li>
        <li><strong>Routing:</strong> Next.js offers a built-in file-based routing system, eliminating the need for external routing libraries required in React.</li>
        <li><strong>SEO:</strong> Next.js enhances SEO capabilities through SSR and SSG, making it easier for search engines to index content compared to React’s CSR approach.</li>
        <li><strong>Performance:</strong> Next.js optimizes performance with automatic code splitting and server-side rendering, whereas React requires manual setup and optimization for similar performance enhancements.</li>
        <li><strong>API Integration:</strong> Next.js includes built-in API routes, allowing developers to create backend endpoints within the same project, whereas React typically requires a separate backend setup.</li>
      </ul>

      <!-- Why Next.js is Popular Compared to Other Frameworks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Popularity of Next.js Compared to Other Frameworks</h2>
      <p class="text-base md:text-lg mb-4">
        **Next.js** has rapidly gained popularity within the web development community due to its seamless integration with React and the advanced features it offers out of the box. Compared to other front-end frameworks like **Vue.js** and **Angular**, Next.js stands out for several reasons:
      </p>
      <div class="overflow-x-auto mb-8">
        <table class="w-full text-left bg-white border-collapse mb-8">
          <thead>
            <tr>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Framework</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Created By</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Year of Release</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Primary Features</th>
              <th class="border-b p-2 text-sm font-semibold md:p-4 md:text-lg">Market Adoption</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Next.js</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Vercel</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">2016</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">SSR, SSG, File-Based Routing, API Routes</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">High (Vercel, Hulu, TikTok)</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">React</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Facebook (Meta)</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">2013</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Component-Based, Virtual DOM, JSX</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Very High (Facebook, Instagram, Airbnb)</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Vue.js</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Evan You</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">2014</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Progressive Framework, Reactivity System, Single File Components</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">High (Alibaba, Xiaomi, Adobe)</td>
            </tr>
            <tr>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Angular</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Google</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">2010 (AngularJS), 2016 (Angular)</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">Full-Fledged MVC Framework, Two-Way Data Binding, Dependency Injection</td>
              <td class="border-b p-2 text-xs md:p-4 md:text-sm">High (Microsoft, IBM, Deutsche Bank)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-base md:text-lg mb-6">
        **Popularity Insights:**
      </p>
      <p class="text-base md:text-lg mb-6">
        According to [Stack Overflow Developer Surveys](https://insights.stackoverflow.com/survey), Next.js has been consistently ranked among the most loved and wanted frameworks. Its seamless integration with React, combined with powerful features like SSR and SSG, make it a preferred choice for developers aiming to build high-performance web applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        Additionally, Next.js has seen widespread adoption in the industry, with companies like **Vercel**, **Hulu**, and **TikTok** leveraging its capabilities to build scalable and efficient web platforms. Its growing ecosystem, active community, and continuous improvements ensure that Next.js remains at the forefront of modern web development.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        **Next.js** significantly enhances the React ecosystem by providing a comprehensive framework that addresses key challenges in web development. Its features like Server-Side Rendering, Static Site Generation, and built-in routing empower developers to build scalable, high-performance, and SEO-friendly applications with ease.
      </p>
      <p class="text-base md:text-lg mb-6">
        By choosing Next.js over React alone, developers gain access to a suite of powerful tools and optimizations that streamline the development process and elevate the quality of their web applications. As Next.js continues to evolve and expand its capabilities, it solidifies its position as a leading framework for modern web development.
      </p>
      <p class="text-base md:text-lg mb-6">
        Embrace Next.js to harness its full potential in your projects, ensuring that your applications are not only robust and efficient but also maintainable and future-proof in the ever-evolving landscape of web technologies.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToNextjs',
  data() {
    return {
      // Additional data properties can be added here if needed
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

