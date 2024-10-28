<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-red-600 rounded-t-xl p-4">
      <img src="/angular/logo.svg" alt="Angular Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Angular Templates and Data Binding</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-gray-50 rounded-b-lg p-6 md:p-8">
      <!-- Angular Templates: Structure and Syntax -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Angular Templates: Structure and Syntax</h2>
      <p class="text-base md:text-lg mb-4">
        In Angular, templates define the structure and layout of the view that the user interacts with. They are constructed using a combination of standard HTML and Angular's powerful directives, enabling dynamic and responsive user interfaces.
      </p>

      <!-- 1.1 Introduction to Templates -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Introduction to Templates</h3>
      <p class="text-base md:text-lg mb-4">
        Templates are at the heart of Angular applications. They determine how data is presented to the user and how the user can interact with that data. By leveraging HTML and Angular's templating syntax, developers can create rich, interactive experiences with ease.
      </p>

      <!-- 1.2 Interpolation and Template Expressions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Interpolation and Template Expressions</h3>
      <p class="text-base md:text-lg mb-4">
        Interpolation allows you to embed dynamic content within your templates using double curly braces <code>{{ }}</code>. This technique enables the display of component properties and the evaluation of expressions directly within the HTML.
      </p>
      <p class="text-base md:text-lg mb-6">
        Example:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-html">
&lt;h1&gt;Hello, {{ userName }}!&lt;/h1&gt;
</code>
      </pre>

      <!-- 1.3 Template Directives (ngIf, ngFor, ngSwitch) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Template Directives</h3>
      <p class="text-base md:text-lg mb-4">
        Directives are special markers in Angular templates that enhance the functionality of the HTML. Structural directives like <code>*ngIf</code>, <code>*ngFor</code>, and <code>*ngSwitch</code> control the rendering of elements based on conditions or iterations.
      </p>
      <p class="text-base md:text-lg mb-6">
        Example of <code>*ngIf</code>:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-html">
&lt;div *ngIf="isLoggedIn"&gt;
  Welcome back, {{ userName }}!
&lt;/div&gt;
</code>
      </pre>

      <!-- Data Binding: How It Connects the UI with Logic -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Data Binding: How It Connects the UI with Logic</h2>
      <p class="text-base md:text-lg mb-4">
        Data binding is a core concept in Angular that facilitates the synchronization between the model (component class) and the view (template). It ensures that changes in the data are reflected in the UI and vice versa.
      </p>

      <!-- 2.1 One-Way Data Binding -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">One-Way Data Binding</h3>
      <p class="text-base md:text-lg mb-4">
        One-way data binding allows data to flow from the component class to the template. This is useful for displaying static or dynamically changing data without expecting user input to modify it.
      </p>
      <p class="text-base md:text-lg mb-6">
        Example:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-html">
&lt;p&gt;Current Status: {{ status }}&lt;/p&gt;
</code>
      </pre>

      <!-- 2.2 Two-Way Data Binding (ngModel) -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Two-Way Data Binding (ngModel)</h3>
      <p class="text-base md:text-lg mb-4">
        Two-way data binding enables synchronization between the model and the view, allowing changes in the UI to update the component's data and vice versa. The <code>ngModel</code> directive facilitates this bidirectional binding.
      </p>
      <p class="text-base md:text-lg mb-6">
        Example:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-html">
&lt;input [(ngModel)]="userName" placeholder="Enter your name"&gt;
&lt;p&gt;Hello, {{ userName }}!&lt;/p&gt;
</code>
      </pre>

      <!-- 2.3 Event Binding -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Event Binding</h3>
      <p class="text-base md:text-lg mb-4">
        Event binding allows the template to respond to user actions such as clicks, input events, and form submissions. By binding events to component methods, you can create interactive and reactive applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        Example:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-html">
&lt;button (click)="submitForm()"&gt;Submit&lt;/button&gt;
</code>
      </pre>

      <!-- Advanced Template Features -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Advanced Template Features</h2>
      <p class="text-base md:text-lg mb-4">
        Angular offers advanced template features that provide greater control and flexibility over the application's UI and behavior. These features include property binding, attribute binding, and the use of decorators like <code>@Input</code> and <code>@Output</code>.
      </p>

      <!-- 3.1 Property and Attribute Binding -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Property and Attribute Binding</h3>
      <p class="text-base md:text-lg mb-4">
        Property binding allows you to bind component properties to DOM properties, enabling dynamic updates to elements' attributes, classes, and styles based on the component's state.
      </p>
      <p class="text-base md:text-lg mb-6">
        Example:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-html">
&lt;img [src]="imageUrl" [alt]="imageDescription"&gt;
</code>
      </pre>

      <!-- 3.2 Input and Output Decorators -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Input and Output Decorators</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>@Input</code> and <code>@Output</code> decorators facilitate communication between parent and child components. <code>@Input</code> allows a parent component to pass data to a child component, while <code>@Output</code> enables a child component to emit events to the parent.
      </p>
      <p class="text-base md:text-lg mb-6">
        Example:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-typescript">
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    &lt;button (click)="notifyParent()"&gt;Notify&lt;/button&gt;
  `
})
export class ChildComponent {
  @Input() childData: string;
  @Output() parentNotifier = new EventEmitter&lt;string>();

  notifyParent() {
    this.parentNotifier.emit('Data from child');
  }
}
</code>
      </pre>

      <!-- 4. Template Reference Variables and ViewChild -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Template Reference Variables and ViewChild</h2>
      <p class="text-base md:text-lg mb-4">
        Template reference variables and the <code>ViewChild</code> decorator provide ways to access and manipulate DOM elements or Angular components directly from the template or component class.
      </p>

      <!-- 4.1 Using Template Reference Variables -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Using Template Reference Variables</h3>
      <p class="text-base md:text-lg mb-4">
        Template reference variables allow you to reference DOM elements or child components within your template. They are declared using the <code>#</code> symbol and can be used to access properties and methods of the referenced element or component.
      </p>
      <p class="text-base md:text-lg mb-6">
        Example:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-html">
&lt;input #myInput type="text"&gt;
&lt;button (click)="logValue(myInput.value)"&gt;Log Input&lt;/button&gt;
</code>
      </pre>

      <!-- 4.2 ViewChild and ContentChild -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">ViewChild and ContentChild</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>ViewChild</code> and <code>ContentChild</code> decorators enable components to query and interact with their view or content. <code>ViewChild</code> is used to access elements within the component's view, while <code>ContentChild</code> accesses projected content.
      </p>
      <p class="text-base md:text-lg mb-6">
        Example using <code>ViewChild</code>:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code class="language-typescript">
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    &lt;input #inputElement type="text"&gt;
    &lt;button (click)="focusInput()"&gt;Focus Input&lt;/button&gt;
  `
})
export class ExampleComponent {
  @ViewChild('inputElement') inputRef: ElementRef;

  focusInput() {
    this.inputRef.nativeElement.focus();
  }
}
</code>
      </pre>

      <!-- 5. Best Practices for Efficient Data Binding -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Best Practices for Efficient Data Binding</h2>
      <p class="text-base md:text-lg mb-4">
        Efficient data binding is crucial for maintaining optimal performance and ensuring a smooth user experience in Angular applications. Adhering to best practices helps in minimizing performance bottlenecks and simplifying debugging processes.
      </p>

      <!-- 5.1 Performance Considerations -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Performance Considerations</h3>
      <p class="text-base md:text-lg mb-4">
        Data binding can impact the performance of your application, especially in large-scale projects. To optimize performance:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Use <code>ChangeDetectionStrategy.OnPush</code> to reduce unnecessary change detection cycles.</li>
        <li>Avoid complex expressions in templates that can slow down rendering.</li>
        <li>Minimize the use of two-way data binding where not required.</li>
      </ul>

      <!-- 5.2 Debugging Data Binding Issues -->
      <h3 class="text-lg md:text-xl font-semibold mb-2 text-black">Debugging Data Binding Issues</h3>
      <p class="text-base md:text-lg mb-4">
        Data binding can sometimes lead to unexpected behavior. Effective debugging strategies include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Utilize Angular Dev Tools to inspect component states and bindings.</li>
        <li>Check for typos or mismatches in property names between the component and template.</li>
        <li>Use console logs within component methods to trace data flow.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 text-black">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering Angular's templates and data binding is essential for building dynamic and responsive applications. By understanding the structure and syntax of templates, leveraging various data binding techniques, and adhering to best practices, developers can create efficient and maintainable Angular projects.
      </p>
      <p class="text-base md:text-lg mb-6">
        In the upcoming modules, we will explore more advanced topics such as dependency injection, routing, and state management to further enhance your Angular development skills.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AngularTemplatesAndDataBinding',
  data() {
    return {
      // Add any necessary data properties here
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
