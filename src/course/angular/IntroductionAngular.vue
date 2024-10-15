<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-red-600 rounded-t-xl p-4">
      <img src="/angular/logo.svg" alt="Angular Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to Angular</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Angular is a powerful front-end framework developed and maintained by Google. As a robust platform for building web applications, Angular leverages a component-based architecture, two-way data binding, and a rich ecosystem of tools and libraries. Designed for scalability and maintainability, Angular is widely used in enterprise-level applications, single-page applications (SPAs), and dynamic web interfaces. This introduction explores the history of Angular, its key features and advantages, how to generate a new Angular project, and why Angular continues to gain traction in the modern development landscape.
      </p>

      <!-- History of Angular (AngularJS vs. Angular 2+) -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">History of Angular: AngularJS vs. Angular 2+</h2>
      <p class="text-base md:text-lg mb-4">
        Angular was initially released in 2010 as AngularJS, a JavaScript-based framework aimed at simplifying the development of dynamic web applications. AngularJS introduced concepts like two-way data binding, dependency injection, and directives, which significantly enhanced the ability to create interactive and maintainable web applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        In 2016, Angular underwent a complete rewrite and was rebranded as Angular 2+ (commonly referred to simply as Angular). This new version embraced TypeScript, a statically typed superset of JavaScript, and introduced a component-based architecture, improved performance, and a more modular structure. Angular 2+ offers enhanced tooling, better support for mobile development, and a more scalable framework suitable for large-scale applications.
      </p>

      <!-- Features and Advantages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Features and Advantages of Angular</h2>
      <p class="text-base md:text-lg mb-4">
        Angular boasts a comprehensive set of features that make it a preferred choice for developers seeking to build sophisticated and high-performing web applications. Some of its standout features include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Component-Based Architecture:</strong> Promotes modularity and reusability by encapsulating functionality within self-contained components.</li>
        <li><strong>Two-Way Data Binding:</strong> Automatically synchronizes data between the model and the view, reducing the need for boilerplate code.</li>
        <li><strong>Dependency Injection:</strong> Enhances testability and maintainability by allowing the injection of dependencies into components and services.</li>
        <li><strong>TypeScript Integration:</strong> Leverages TypeScript's static typing to catch errors at compile-time and improve code quality.</li>
        <li><strong>RxJS Integration:</strong> Facilitates reactive programming and efficient handling of asynchronous data streams.</li>
        <li><strong>Angular CLI:</strong> Provides powerful command-line tools for scaffolding, building, testing, and deploying applications.</li>
        <li><strong>Routing:</strong> Built-in support for client-side routing enables the creation of single-page applications with multiple views.</li>
        <li><strong>Forms Management:</strong> Offers robust form handling with validation and reactive forms capabilities.</li>
      </ul>

      <!-- Difference Between AngularJS and Angular -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Difference Between AngularJS and Angular</h2>
      <p class="text-base md:text-lg mb-4">
        While AngularJS and Angular share a common heritage, there are significant differences between the two that impact development practices and application performance:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Language:</strong> AngularJS is written in JavaScript, whereas Angular is built with TypeScript, offering static typing and modern language features.</li>
        <li><strong>Architecture:</strong> Angular adopts a component-based architecture, promoting better modularity and reusability, while AngularJS uses a more traditional MVC (Model-View-Controller) architecture.</li>
        <li><strong>Performance:</strong> Angular offers significantly improved performance due to its optimized change detection and Ahead-of-Time (AOT) compilation, making it more suitable for large-scale applications.</li>
        <li><strong>Dependency Injection:</strong> Enhanced dependency injection in Angular facilitates better testing and maintainability compared to AngularJS.</li>
        <li><strong>Mobile Support:</strong> Angular provides better support for mobile development with features like responsive design and performance optimizations.</li>
        <li><strong>Tooling:</strong> Angular CLI offers a powerful set of tools for project scaffolding, building, and testing, which were not as mature in AngularJS.</li>
      </ul>

      <!-- Code Example: Generating a New Angular Project -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Generating a New Angular Project</h2>
      <p class="text-base md:text-lg mb-4">
        Using the Angular CLI (Command Line Interface), developers can quickly scaffold a new Angular project with a predefined structure. Here's how to generate a new Angular project:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Install Angular CLI globally (if not already installed)
npm install -g @angular/cli

// Generate a new Angular project named "my-angular-app"
ng new my-angular-app

// Navigate to the project directory
cd my-angular-app

// Serve the application locally
ng serve
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Explanation:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>npm install -g @angular/cli:</strong> Installs the Angular CLI globally on your system, allowing you to use the <code>ng</code> commands from any directory.</li>
        <li><strong>ng new my-angular-app:</strong> Creates a new Angular project named "my-angular-app" with a standard directory structure and default configurations.</li>
        <li><strong>cd my-angular-app:</strong> Navigates into the newly created project directory.</li>
        <li><strong>ng serve:</strong> Compiles the application and serves it locally. By default, the app is accessible at <a href="http://localhost:4200">http://localhost:4200</a>.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Upon running <code>ng serve</code>, the Angular application will be compiled and hosted locally. Open your browser and navigate to <a href="http://localhost:4200">http://localhost:4200</a> to see your new Angular app in action.
      </p>

      <!-- Comparison with Other Frameworks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Angular Compared to Other Frameworks</h2>
      <p class="text-base md:text-lg mb-4">
        To better understand where Angular stands in the front-end development landscape, let's compare it with two other popular frameworks: React and Vue. The following table highlights key differences and similarities across various criteria:
      </p>
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

      <!-- Who Uses Angular and Why -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Who Uses Angular and Why</h2>
      <p class="text-base md:text-lg mb-4">
        Angular is a favorite among many organizations and developers for building complex and scalable web applications. Here's a look at some of the prominent users of Angular and the reasons behind their adoption:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Google:</strong> Utilizes Angular for many of its internal and external applications, benefiting from its robust framework and scalability.</li>
        <li><strong>Microsoft:</strong> Employs Angular in various enterprise solutions and web applications, leveraging its structured architecture.</li>
        <li><strong>IBM:</strong> Uses Angular for developing enterprise-grade applications that require maintainability and scalability.</li>
        <li><strong>Upwork:</strong> Implements Angular for its platform to manage complex client and freelancer interactions efficiently.</li>
        <li><strong>Deutsche Bank:</strong> Leverages Angular to build secure and scalable financial applications.</li>
        <li><strong>VMware:</strong> Uses Angular for its cloud computing and virtualization products, taking advantage of its performance and maintainability.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Reasons for Adoption:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Scalability:</strong> Angular's modular architecture allows for the development of large-scale applications with ease.</li>
        <li><strong>Maintainability:</strong> The structured framework and strong typing with TypeScript enhance code maintainability.</li>
        <li><strong>Comprehensive Tooling:</strong> Angular CLI provides powerful tools for scaffolding, building, testing, and deploying applications.</li>
        <li><strong>Community and Support:</strong> A large and active community ensures continuous improvement, support, and a wealth of resources.</li>
        <li><strong>Performance:</strong> Optimized for performance with features like Ahead-of-Time (AOT) compilation and efficient change detection.</li>
        <li><strong>Two-Way Data Binding:</strong> Simplifies the synchronization of data between the model and the view.</li>
      </ul>

      <!-- Speed Comparison -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Speed Comparison</h2>
      <p class="text-base md:text-lg mb-4">
        Performance is a critical factor in selecting a front-end framework, especially for applications that demand high responsiveness and efficiency. Here's how Angular compares to React and Vue in terms of speed:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Initial Load Time:</strong> Angular applications tend to have larger bundle sizes compared to React and Vue, which can result in longer initial load times. However, Angular's Ahead-of-Time (AOT) compilation and tree-shaking optimizations help mitigate this issue.</li>
        <li><strong>Runtime Performance:</strong> Angular's change detection mechanism is highly efficient, especially with the OnPush strategy, enabling it to handle complex data-binding scenarios with minimal performance overhead.</li>
        <li><strong>Rendering Speed:</strong> While React and Vue are known for their fast rendering capabilities due to their virtual DOM implementations, Angular matches this performance with its optimized rendering pipeline.</li>
        <li><strong>Scalability:</strong> Angular's performance remains consistent even as applications grow in size and complexity, making it suitable for enterprise-level applications.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Benchmark Insights:
      </p>
      <p class="text-base md:text-lg mb-6">
        Benchmarks show that while Angular may have a slight edge in initial load times due to larger bundle sizes, its runtime performance is comparable to React and Vue, especially in scenarios involving complex data interactions and large-scale applications. The choice between these frameworks often depends on specific project requirements, developer expertise, and the desired balance between initial load performance and scalability.
      </p>

      <!-- Why Angular is Booming -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Angular is Booming</h2>
      <p class="text-base md:text-lg mb-4">
        Angular's increasing popularity can be attributed to several factors that align with the current needs and trends in software development. Here's why Angular is experiencing a boom in the industry:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Enterprise Adoption:</strong> Angular's robust architecture and scalability make it an ideal choice for large enterprises seeking maintainable and scalable solutions.</li>
        <li><strong>Comprehensive Framework:</strong> Unlike React, which is a library, Angular is a full-fledged framework offering a complete solution for front-end development, reducing the need for additional libraries.</li>
        <li><strong>Strong Backing by Google:</strong> Continuous support and investment by Google ensure that Angular remains up-to-date with the latest web standards and best practices.</li>
        <li><strong>Angular CLI:</strong> The Angular Command Line Interface streamlines development workflows, enabling rapid project setup, scaffolding, building, and deployment.</li>
        <li><strong>TypeScript Integration:</strong> Leveraging TypeScript enhances code quality, maintainability, and developer productivity through static typing and modern language features.</li>
        <li><strong>Modular Development:</strong> Angular's modular approach facilitates the development of reusable components, improving code organization and maintainability.</li>
        <li><strong>Active Community and Ecosystem:</strong> A vibrant community contributes to a rich ecosystem of libraries, tools, and extensions, providing developers with ample resources and support.</li>
        <li><strong>Performance Optimizations:</strong> Continuous improvements in Angular's rendering and change detection mechanisms ensure that applications remain performant even as they scale.</li>
        <li><strong>Versatility:</strong> Angular's ability to handle both small and large projects with ease makes it a versatile choice for various types of applications.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Future Prospects:
      </p>
      <p class="text-base md:text-lg mb-6">
        With ongoing advancements and the introduction of new features in recent versions, Angular is poised to maintain its momentum in the front-end development sphere. Its alignment with modern development practices, commitment to performance, and continuous ecosystem growth ensure that Angular will remain a vital tool for developers in the years to come.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Angular stands as a testament to the evolution of front-end frameworks, offering a comprehensive and scalable solution for building dynamic web applications. Its rich feature set, backed by a strong community and corporate support from Google, makes it a formidable choice for developers aiming to create robust, maintainable, and high-performing applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        By understanding Angular's history, features, and how it compares to other popular frameworks like React and Vue, developers can make informed decisions about incorporating Angular into their projects. The combination of TypeScript integration, powerful CLI tools, and a structured framework design equips developers with the tools necessary to build sophisticated and scalable web applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        Embrace Angular to leverage its full potential in your front-end development endeavors, ensuring that your applications are not only efficient and performant but also maintainable and scalable in the long run.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToAngular',
  data() {
    return {
      // Additional data properties can be added here if needed
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
