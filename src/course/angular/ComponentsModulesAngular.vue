<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/angular/logo.svg" alt="Angular Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Angular Components and Modules</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      <!-- Opening Section -->
      <section class="mb-8">
        <p class="text-base md:text-lg mb-4">
          Angular is a powerful framework that facilitates the development of robust and scalable web applications. At the heart of Angular's architecture lie Components and Modules, which work in tandem to create a modular and maintainable codebase. Components are the fundamental building blocks that encapsulate the UI, logic, and styles of a part of your application. Modules, on the other hand, organize these components into cohesive blocks of functionality, enabling efficient code management and lazy loading. This course delves deep into the intricacies of Angular Components and Modules, equipping you with the knowledge to build sophisticated and well-structured Angular applications.
        </p>
        <p class="text-base md:text-lg mb-6">
          Throughout this course, you will explore the creation, configuration, and best practices associated with Angular Components and Modules. Whether you're aiming to enhance your existing Angular projects or embarking on new ones, mastering these core concepts is essential for achieving optimal performance and maintainability.
        </p>
      </section>

      <!-- 1. Understanding Angular Components -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Understanding Angular Components</h2>
        <p class="text-base md:text-lg mb-4">
          Components are the cornerstone of any Angular application. They control a patch of screen called a view and encapsulate the logic and data necessary to render that view. Each component consists of three main parts: the template, the class, and the stylesheet.
        </p>
        <p class="text-base md:text-lg mb-4">
          <strong>Key Features:</strong>
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><strong>Encapsulation:</strong> Components encapsulate their own data and behavior, promoting reusability and separation of concerns.</li>
          <li><strong>Templates:</strong> Define the view using HTML and Angular's template syntax.</li>
          <li><strong>Styles:</strong> Scoped styles ensure that CSS rules apply only to the component.</li>
          <li><strong>Metadata:</strong> Decorators like <code>@Component</code> provide additional information about the component.</li>
        </ul>
        <p class="text-base md:text-lg mb-4">
          <strong>Creating a Simple Component:</strong>
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code class="language-html">&lt;!-- app-header.component.html --&gt;
&lt;header class="app-header"&gt;
  &lt;h1&gt;Welcome to Angular!&lt;/h1&gt;
&lt;/header&gt;

&lt;!-- app-header.component.ts --&gt;
&lt;script&gt;
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent {
  title = 'Angular Components and Modules';
}
&lt;/script&gt;

&lt;!-- app-header.component.css --&gt;
.app-header {
  background-color: #c0392b;
  color: white;
  padding: 1rem;
  text-align: center;
}</code></pre>
        <p class="text-base md:text-lg mb-6">
          In this example, the <code>AppHeaderComponent</code> defines a simple header for the application. The <code>@Component</code> decorator specifies the selector, template, and styles, enabling Angular to recognize and render the component within the application.
        </p>
      </section>

      <!-- 2. Component Lifecycle Hooks -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Component Lifecycle Hooks</h2>
        <p class="text-base md:text-lg mb-4">
          Angular components go through a series of lifecycle events from creation to destruction. Understanding these lifecycle hooks allows you to perform actions at specific points in a component's life.
        </p>
        <p class="text-base md:text-lg mb-4">
          <strong>Common Lifecycle Hooks:</strong>
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><strong>ngOnInit:</strong> Called once after the first <code>ngOnChanges</code>. Ideal for component initialization.</li>
          <li><strong>ngOnChanges:</strong> Called when an input property changes. Useful for reacting to data-bound input properties.</li>
          <li><strong>ngOnDestroy:</strong> Called just before Angular destroys the component. Perfect for cleanup tasks.</li>
          <li><strong>ngAfterViewInit:</strong> Called after Angular initializes the component's views and child views.</li>
        </ul>
        <p class="text-base md:text-lg mb-4">
          <strong>Example of Using ngOnInit:</strong>
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
          <code class="language-typescript">
&lt;!-- app-user.component.ts --&gt;
&lt;script&gt;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    &lt;div&gt;
      &lt;h2&gt;User Profile&lt;/h2&gt;
      &lt;p&gt;Name: &#123;&#123; user.name &#125;&#125;&lt;/p&gt;
      &lt;p&gt;Email: &#123;&#123; user.email &#125;&#125;&lt;/p&gt;
    &lt;/div&gt;
  `,
  styleUrls: ['./app-user.component.css']
})
export class UserComponent implements OnInit {
  user = { name: '', email: '' };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.user = data;
    });
  }
}
&lt;/script&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-6">
          Here, the <code>UserComponent</code> implements the <code>OnInit</code> interface and defines the <code>ngOnInit</code> method to fetch user data when the component initializes. This ensures that the component has the necessary data before rendering the view.
        </p>
      </section>

      <!-- 3. Understanding Angular Modules -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Understanding Angular Modules</h2>
        <p class="text-base md:text-lg mb-4">
          Angular Modules, or NgModules, are containers that group related components, directives, pipes, and services. They help in organizing the application into cohesive blocks of functionality, facilitating better code management and scalability.
        </p>
        <p class="text-base md:text-lg mb-4">
          <strong>Key Features:</strong>
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><strong>Declarations:</strong> Register components, directives, and pipes that belong to the module.</li>
          <li><strong>Imports:</strong> Import other modules whose exported classes are needed by component templates.</li>
          <li><strong>Providers:</strong> Register services that the module contributes to the global collection.</li>
          <li><strong>Bootstrap:</strong> Specify the root component that Angular should bootstrap when it starts the application.</li>
        </ul>
        <p class="text-base md:text-lg mb-4">
          <strong>Creating a Feature Module:</strong>
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
          <code class="language-typescript">
&lt;!-- user.module.ts --&gt;
&lt;script&gt;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UserService
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
&lt;/script&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-6">
          In this example, the <code>UserModule</code> declares the <code>UserComponent</code>, imports the <code>CommonModule</code> for common directives, provides the <code>UserService</code>, and exports the <code>UserComponent</code> so it can be used in other modules. This modular approach enhances the reusability and maintainability of the application.
        </p>
      </section>

      <!-- 4. Module Types and Organization -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Module Types and Organization</h2>
        <p class="text-base md:text-lg mb-4">
          Angular applications typically consist of several types of modules, each serving a distinct purpose. Properly organizing these modules is crucial for the application's scalability and performance.
        </p>
        <p class="text-base md:text-lg mb-4">
          <strong>Common Module Types:</strong>
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><strong>Root Module:</strong> The main module that bootstraps the application. It's usually named <code>AppModule</code>.</li>
          <li><strong>Feature Modules:</strong> Encapsulate related components, services, and other code. Examples include <code>UserModule</code>, <code>AdminModule</code>, etc.</li>
          <li><strong>Shared Modules:</strong> Contain common components, directives, and pipes that are used across multiple modules.</li>
          <li><strong>Core Modules:</strong> Provide singleton services and are imported only once in the root module.</li>
        </ul>
        <p class="text-base md:text-lg mb-4">
          <strong>Example of a Shared Module:</strong>
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
          <code class="language-typescript">
&lt;!-- shared.module.ts --&gt;
&lt;script&gt;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    HighlightDirective,
    CommonModule
  ]
})
export class SharedModule { }
&lt;/script&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-6">
          The <code>SharedModule</code> declares and exports common components like <code>NavbarComponent</code> and <code>FooterComponent</code>, as well as directives like <code>HighlightDirective</code>. By exporting these declarations, they become available to any module that imports the <code>SharedModule</code>, promoting reusability and consistency across the application.
        </p>
      </section>

      <!-- 5. Lazy Loading Modules -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">5. Lazy Loading Modules</h2>
        <p class="text-base md:text-lg mb-4">
          Lazy loading is a design pattern that loads NgModules only when they're needed, reducing the initial load time of the application. This enhances performance, especially for large applications with numerous modules.
        </p>
        <p class="text-base md:text-lg mb-4">
          <strong>Implementing Lazy Loading:</strong>
        </p>
        <ol class="list-decimal list-inside text-base md:text-lg mb-6">
          <li>Define a route that loads the module using the <code>loadChildren</code> property.</li>
          <li>Ensure the feature module is set up with its own routing.</li>
        </ol>
        <p class="text-base md:text-lg mb-4">
          <strong>Example:</strong>
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
          <code class="language-typescript">
&lt;!-- app-routing.module.ts --&gt;
&lt;script&gt;
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
&lt;/script&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-6">
          In this configuration, navigating to the <code>/user</code> path triggers the loading of the <code>UserModule</code>. This module is loaded asynchronously, ensuring that the main bundle remains lightweight and improves the application's load time.
        </p>
      </section>

      <!-- 6. Best Practices for Components and Modules -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">6. Best Practices for Components and Modules</h2>
        <p class="text-base md:text-lg mb-4">
          Adhering to best practices ensures that your Angular applications remain scalable, maintainable, and efficient. Here are some recommended practices for managing components and modules.
        </p>
        <p class="text-base md:text-lg mb-4">
          <strong>For Components:</strong>
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><strong>Single Responsibility:</strong> Each component should have a clear, singular purpose.</li>
          <li><strong>Encapsulation:</strong> Keep component logic and styles scoped to prevent unintended side effects.</li>
          <li><strong>Reusability:</strong> Design components to be reusable across different parts of the application.</li>
          <li><strong>Naming Conventions:</strong> Use consistent and descriptive naming for components to enhance readability.</li>
        </ul>
        <p class="text-base md:text-lg mb-4">
          <strong>For Modules:</strong>
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li><strong>Feature Separation:</strong> Group related components, services, and other code into feature modules.</li>
          <li><strong>Shared Modules:</strong> Extract common functionalities into shared modules to promote reusability.</li>
          <li><strong>Core Module:</strong> Use a core module to provide singleton services and application-wide components.</li>
          <li><strong>Avoid Circular Dependencies:</strong> Structure modules to prevent circular references, which can lead to runtime errors.</li>
        </ul>
      </section>

      <!-- 7. Advanced Module Configuration -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">7. Advanced Module Configuration</h2>
        <p class="text-base md:text-lg mb-4">
          Beyond the basic setup, Angular modules offer advanced configuration options to fine-tune your application's behavior and performance.
        </p>
        <p class="text-base md:text-lg mb-4">
          <strong>Providers and Dependency Injection:</strong>
        </p>
        <p class="text-base md:text-lg mb-4">
          Angular's dependency injection system allows you to provide services at different levels of the application. By configuring providers in modules, you control the scope and lifecycle of these services.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
          <code class="language-typescript">
&lt;!-- core.module.ts --&gt;
&lt;script&gt;
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
&lt;/script&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-6">
          In the <code>CoreModule</code>, the <code>AuthService</code> is provided as a singleton, ensuring a single instance throughout the application. The constructor checks to prevent multiple imports of the <code>CoreModule</code>, enforcing its singleton nature.
        </p>

        <p class="text-base md:text-lg mb-4">
          <strong>Tree Shaking and Module Imports:</strong>
        </p>
        <p class="text-base md:text-lg mb-4">
          Proper module organization can enhance tree shaking, allowing Angular to remove unused code during the build process. This leads to smaller bundle sizes and improved performance.
        </p>
        <p class="text-base md:text-lg mb-6">
          To maximize tree shaking benefits:
        </p>
        <ul class="list-disc list-inside text-base md:text-lg mb-6">
          <li>Import only the necessary modules and components.</li>
          <li>Avoid importing large libraries or modules if only a subset is needed.</li>
          <li>Use Angular's <code>providedIn</code> syntax for services to enable better tree shaking.</li>
        </ul>
      </section>

      <!-- 8. Testing Components and Modules -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">8. Testing Components and Modules</h2>
        <p class="text-base md:text-lg mb-4">
          Ensuring the reliability and stability of your Angular application requires thorough testing of both components and modules. Angular provides robust tools and methodologies for unit testing and integration testing.
        </p>
        <p class="text-base md:text-lg mb-4">
          <strong>Testing Components:</strong>
        </p>
        <p class="text-base md:text-lg mb-4">
          Utilize Angular's TestBed to create an isolated testing environment for components. This allows you to test component logic, template rendering, and interaction with services.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
          <code class="language-typescript">
&lt;!-- app-header.component.spec.ts --&gt;
&lt;script&gt;
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHeaderComponent } from './app-header.component';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture&lt;AppHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Angular Components and Modules');
  });
});
&lt;/script&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-6">
          This test suite verifies the creation of the <code>AppHeaderComponent</code> and ensures that the title is rendered correctly in the template.
        </p>

        <p class="text-base md:text-lg mb-4">
          <strong>Testing Modules:</strong>
        </p>
        <p class="text-base md:text-lg mb-4">
          When testing modules, focus on verifying that components, directives, and services are correctly declared, imported, and provided. This ensures that the module configuration aligns with the application's requirements.
        </p>
        <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
          <code class="language-typescript">
&lt;!-- user.module.spec.ts --&gt;
&lt;script&gt;
import { TestBed } from '@angular/core/testing';
import { UserModule } from './user.module';
import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UserModule ]
    }).compileComponents();
  });

  it('should create the UserModule', () => {
    const module = TestBed.inject(UserModule);
    expect(module).toBeTruthy();
  });

  it('should provide UserService', () => {
    const service = TestBed.inject(UserService);
    expect(service).toBeTruthy();
  });

  it('should create UserComponent', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
&lt;/script&gt;
          </code>
        </pre>
        <p class="text-base md:text-lg mb-6">
          The above tests confirm that the <code>UserModule</code> is successfully created, provides the <code>UserService</code>, and correctly declares the <code>UserComponent</code>.
        </p>
      </section>

      <!-- Conclusion -->
      <section class="mb-8">
        <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
        <p class="text-base md:text-lg mb-6">
          Mastering Angular Components and Modules is fundamental to building efficient, scalable, and maintainable applications. By understanding the lifecycle of components, the organizational power of modules, and implementing best practices, you can elevate your Angular development skills to new heights. This course has equipped you with the essential knowledge to structure your applications effectively, ensuring robust performance and ease of maintenance. As you continue your Angular journey, these concepts will serve as the backbone for more advanced topics and complex project architectures.
        </p>
        <p class="text-base md:text-lg mb-6">
          In the next course, we will explore <strong>Angular Services and Dependency Injection</strong>, delving into how to manage data and business logic across your application efficiently.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AngularComponentsAndModulesCourse',
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

code {
  font-family: 'Fira Code', monospace;
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}
</style>
