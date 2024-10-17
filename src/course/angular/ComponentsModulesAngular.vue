<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/angular/logo.svg" alt="Angular Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Basic Angular Modules and Components</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      <!-- 1. Introduction to Angular Modules -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">1. Introduction to Angular Modules</h2>
        <p class="text-base md:text-lg mb-4">
          In Angular, a <strong>Module</strong> is a fundamental building block that organizes related components, directives, pipes, and services into cohesive blocks of functionality. Modules help in managing the application's structure, enhancing maintainability, and facilitating lazy loading for performance optimization.
        </p>
        <p class="text-base md:text-lg mb-4">
          The <strong>AppModule</strong> is the root module that bootstraps and launches the Angular application. It typically imports other essential modules and declares the root component.
        </p>
        <img src="/angular/modules-overview.svg" alt="Angular Modules Overview" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 2. Creating a New Module -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">2. Creating a New Module</h2>
        <p class="text-base md:text-lg mb-4">
          To create a new module, use the Angular CLI command. This ensures that the module is properly configured and integrated into your project.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-shell">
ng generate module &lt;module-name&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          <strong>Example:</strong> Creating a <code>SharedModule</code>
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-shell">
ng generate module shared
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          This command generates a new module named <code>SharedModule</code> in the <code>src/app/shared</code> directory, including the following files:
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><code>shared.module.ts</code> - The TypeScript file defining the module.</li>
          <li><code>shared-routing.module.ts</code> - Handles routing for the shared module (if routing is enabled).</li>
        </ul>
        <img src="/angular/shared-module.svg" alt="Shared Module Structure" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 3. Introduction to Angular Components -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">3. Introduction to Angular Components</h2>
        <p class="text-base md:text-lg mb-4">
          A <strong>Component</strong> in Angular is a fundamental UI building block that controls a portion of the screen called a view. Components encapsulate the logic, data, and presentation necessary to render a part of the user interface.
        </p>
        <p class="text-base md:text-lg mb-4">
          Each component consists of:
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><strong>Template:</strong> Defines the HTML structure of the component's view.</li>
          <li><strong>Class:</strong> Contains the application logic and data bindings.</li>
          <li><strong>Styles:</strong> Defines the CSS styles specific to the component.</li>
        </ul>
        <img src="/angular/components-overview.svg" alt="Angular Components Overview" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 4. Creating a New Component -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">4. Creating a New Component</h2>
        <p class="text-base md:text-lg mb-4">
          To create a new component, use the Angular CLI command. This ensures that the component is correctly declared in the appropriate module and that all necessary files are generated.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-shell">
ng generate component &lt;component-name&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          <strong>Example:</strong> Creating a <code>HeaderComponent</code>
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-shell">
ng generate component header
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          This command generates a new component named <code>HeaderComponent</code> in the <code>src/app/header</code> directory, including the following files:
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><code>header.component.ts</code> - The TypeScript class defining the component.</li>
          <li><code>header.component.html</code> - The HTML template.</li>
          <li><code>header.component.css</code> - The CSS styles.</li>
          <li><code>header.component.spec.ts</code> - The test specification file.</li>
        </ul>
        <img src="/angular/header-component.svg" alt="Header Component Structure" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 5. Understanding the Component Structure -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">5. Understanding the Component Structure</h2>
        <p class="text-base md:text-lg mb-4">
          Let's delve into the <code>HeaderComponent</code> to understand its structure and functionality.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-typescript">
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'My Angular App';
}
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          - <strong>Selector:</strong> The <code>selector</code> defines the HTML tag that represents this component (<code>&lt;app-header&gt;</code>).
        </p>
        <p class="text-base md:text-lg mb-4">
          - <strong>Template:</strong> The <code>templateUrl</code> points to the HTML file that defines the component's view.
        </p>
        <p class="text-base md:text-lg mb-4">
          - <strong>Styles:</strong> The <code>styleUrls</code> array contains paths to the CSS files for the component.
        </p>
        <p class="text-base md:text-lg mb-4">
          - <strong>Class:</strong> The <code>HeaderComponent</code> class contains the logic and data for the component. In this example, it has a <code>title</code> property that can be used within the template.
        </p>
        <img src="/angular/header-component-code.svg" alt="Header Component Code" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 6. Using Components in Modules -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">6. Using Components in Modules</h2>
        <p class="text-base md:text-lg mb-4">
          After creating a component, you need to declare it in a module to use it within your application. By default, Angular CLI declares new components in the <code>AppModule</code>.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-typescript">
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          The <code>declarations</code> array registers the <code>HeaderComponent</code>, making it available throughout the module. If you create modules other than <code>AppModule</code>, ensure that components are declared within the appropriate module.
        </p>
        <img src="/angular/app-module-declaration.svg" alt="App Module Declaration" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 7. Using the Component in Templates -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">7. Using the Component in Templates</h2>
        <p class="text-base md:text-lg mb-4">
          To use the <code>HeaderComponent</code>, include its selector in the desired template, such as <code>AppComponent</code>.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-html">
&lt;!-- app.component.html --&gt;
&lt;app-header&gt;&lt;/app-header&gt;
&lt;router-outlet&gt;&lt;/router-outlet&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          This will render the header at the top of your application. The <code>&lt;router-outlet&gt;</code> acts as a placeholder for routed components.
        </p>
        <img src="/angular/app-component-template.svg" alt="App Component Template" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 8. Example: Displaying Dynamic Data -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">8. Example: Displaying Dynamic Data</h2>
        <p class="text-base md:text-lg mb-4">
          Modify the <code>header.component.html</code> to display dynamic data from the component class using Angular's interpolation syntax.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-html">
&lt;!-- header.component.html --&gt;
&lt;header class="bg-primary text-white p-4"&gt;
  &lt;h1&gt;&#123;&#123; title &#125;&#125;&lt;/h1&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      <li>&lt;a href="#" class="text-white"&gt;Home&lt;/a&gt;</li>
      <li>&lt;a href="#" class="text-white"&gt;About&lt;/a&gt;</li>
      <li>&lt;a href="#" class="text-white"&gt;Contact&lt;/a&gt;</li>
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          The double curly braces (<code>&#123;&#123; &#125;&#125;</code>) bind the <code>title</code> property from the component class to the template, allowing dynamic data to be displayed.
        </p>
        <img src="/angular/dynamic-data-example.svg" alt="Dynamic Data Example" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 9. Styling the Component -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">9. Styling the Component</h2>
        <p class="text-base md:text-lg mb-4">
          Enhance the appearance of the <code>HeaderComponent</code> by adding styles to <code>header.component.css</code>.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-css">
/* header.component.css */
.bg-primary {
  background-color: #dd0031; /* Angular's primary color */
}

.text-white {
  color: white;
}

.p-4 {
  padding: 1rem;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
}

nav a {
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          These styles apply a red background to the header, center the content, and style the navigation links for better user experience.
        </p>
        <img src="/angular/header-component-styles.svg" alt="Header Component Styles" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 10. Interactive Example: Toggle Visibility -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">10. Interactive Example: Toggle Visibility</h2>
        <p class="text-base md:text-lg mb-4">
          Let's enhance the <code>HeaderComponent</code> by adding a button that toggles the visibility of a navigation menu. This example demonstrates event binding and property binding in Angular.
        </p>
        <h3 class="text-lg md:text-xl font-semibold mb-4 text-black">a. Updating the Component Class</h3>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-typescript">
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'My Angular App';
  isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
          </code>
        </pre>
        <h3 class="text-lg md:text-xl font-semibold mb-4 text-black">b. Updating the Template</h3>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-html">
&lt;!-- header.component.html --&gt;
&lt;header class="bg-primary text-white p-4"&gt;
  &lt;h1&gt;{{ title }}&lt;/h1&gt;
  &lt;button (click)="toggleMenu()" class="mt-2 px-4 py-2 bg-secondary rounded"&gt;
    Toggle Menu
  &lt;/button&gt;
  &lt;nav v-if="isMenuVisible" class="mt-4"&gt;
    &lt;ul&gt;
      <li>&lt;a href="#" class="text-white"&gt;Home&lt;/a&gt;</li>
      <li>&lt;a href="#" class="text-white"&gt;About&lt;/a&gt;</li>
      <li>&lt;a href="#" class="text-white"&gt;Contact&lt;/a&gt;</li>
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          The <code>(click)="toggleMenu()"</code> directive binds the button's click event to the <code>toggleMenu()</code> method in the component class. The <code>v-if="isMenuVisible"</code> directive conditionally displays the navigation menu based on the <code>isMenuVisible</code> property.
        </p>
        <h3 class="text-lg md:text-xl font-semibold mb-4 text-black">c. Updating the Styles</h3>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-4">
          <code class="language-css">
/* header.component.css */
.bg-primary {
  background-color: #dd0031;
}

.text-white {
  color: white;
}

.p-4 {
  padding: 1rem;
}

button {
  background-color: #ffffff;
  color: #dd0031;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ffe6e6;
}

.bg-secondary {
  background-color: #ffc107; /* Secondary color */
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
}

nav a {
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
          </code>
        </pre>
        <p class="text-base md:text-lg mb-4">
          Additional styles are added for the toggle button to enhance its appearance and interactivity.
        </p>
        <img src="/angular/toggle-menu-example.svg" alt="Toggle Menu Example" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- 11. Best Practices for Modules and Components -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">11. Best Practices for Modules and Components</h2>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><strong>Single Responsibility Principle:</strong> Each module and component should have a single responsibility to enhance maintainability.</li>
          <li><strong>Feature Modules:</strong> Organize related components, services, and other code into feature-specific modules.</li>
          <li><strong>Lazy Loading:</strong> Implement lazy loading for feature modules to improve application performance.</li>
          <li><strong>Consistent Naming Conventions:</strong> Use clear and consistent naming for modules and components to improve readability.</li>
          <li><strong>Reusability:</strong> Design components to be reusable across different parts of the application.</li>
          <li><strong>Separation of Concerns:</strong> Keep business logic separate from presentation logic within components.</li>
        </ul>
        <img src="/angular/best-practices.svg" alt="Best Practices" class="w-full h-auto my-6 rounded-md shadow-md">
      </section>

      <!-- Conclusion -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
        <p class="text-base md:text-lg mb-4">
          Understanding Angular modules and components is essential for building scalable and maintainable applications. Modules help in organizing your application into logical blocks, while components are the building blocks of your user interface. By mastering these fundamentals, you lay a strong foundation for developing complex Angular applications.
        </p>
        <p class="text-base md:text-lg mb-6">
          In the next section, we will explore <strong>Angular Services and Dependency Injection</strong>, which allow you to manage data and business logic effectively across your application.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicAngularModulesAndComponents',
  data() {
    return {
      // Any additional data properties can be added here if needed
    };
  },
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for very long lines */
  overflow-x: auto;      /* Adds horizontal scroll for overflow content */ 
}

img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}
</style>
