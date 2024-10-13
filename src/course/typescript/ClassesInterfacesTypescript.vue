<template>
  <div class="container mx-auto p-6">
    <!-- Previous Sections (1-14) -->

    <!-- Section 15: Classes and Interfaces in TypeScript -->
    <section id="classes-interfaces" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">15. Classes and Interfaces in TypeScript</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript builds upon JavaScript's object-oriented capabilities by introducing enhanced features for classes and interfaces. These features promote better code organization, reusability, and type safety, making your applications more robust and maintainable.
      </p>

      <!-- Subsection 15.1: Understanding Classes -->
      <h3 class="text-3xl font-semibold mb-2">15.1. Understanding Classes</h3>
      <p class="text-lg text-gray-700 mb-4">
        Classes in TypeScript provide a blueprint for creating objects with predefined properties and methods. They support key object-oriented programming principles such as inheritance, encapsulation, and polymorphism.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript introduces several enhancements to JavaScript classes, including access modifiers, readonly properties, and type annotations, which collectively enhance type safety and code clarity.
      </p>

      <h4 class="text-2xl font-semibold mb-2">15.1.1. Class Syntax and Members</h4>
      <p class="text-lg text-gray-700 mb-4">
        The basic syntax of a TypeScript class includes the class declaration, constructor, properties, and methods. Access modifiers such as <code>public</code>, <code>private</code>, and <code>protected</code> control the visibility of class members.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ classSyntaxExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> In the example above:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>
          <code>Person</code> is a class with a constructor that initializes the <code>name</code> and <code>age</code> properties.
        </li>
        <li>
          The <code>greet</code> method logs a greeting message to the console.
        </li>
        <li>
          Access modifiers control the visibility of class members. By default, members are <code>public</code>, but they can be explicitly marked as <code>private</code> or <code>protected</code>.
        </li>
      </ul>

      <!-- Subsection 15.2: Access Modifiers -->
      <h3 class="text-3xl font-semibold mb-2">15.2. Access Modifiers</h3>
      <p class="text-lg text-gray-700 mb-4">
        Access modifiers in TypeScript control the visibility and accessibility of class members. They help enforce encapsulation, a core principle of object-oriented programming, by restricting access to certain parts of a class.
      </p>
      
      <h4 class="text-2xl font-semibold mb-2">15.2.1. Public</h4>
      <p class="text-lg text-gray-700 mb-4">
        Members marked as <code>public</code> are accessible from anywhere. This is the default access level if no modifier is specified.
      </p>
      
      <h4 class="text-2xl font-semibold mb-2">15.2.2. Private</h4>
      <p class="text-lg text-gray-700 mb-4">
        Members marked as <code>private</code> are accessible only within the class they are declared in. They cannot be accessed or modified from outside the class.
      </p>
      
      <h4 class="text-2xl font-semibold mb-2">15.2.3. Protected</h4>
      <p class="text-lg text-gray-700 mb-4">
        Members marked as <code>protected</code> are accessible within the class they are declared in and any subclasses that extend the class. They are not accessible from outside these classes.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ accessModifiersExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The example demonstrates how access modifiers restrict the visibility of class members. Attempting to access <code>ssn</code> outside the <code>Employee</code> class will result in a TypeScript error.
      </p>

      <!-- Subsection 15.3: Readonly Properties -->
      <h3 class="text-3xl font-semibold mb-2">15.3. Readonly Properties</h3>
      <p class="text-lg text-gray-700 mb-4">
        The <code>readonly</code> modifier ensures that a property cannot be modified after it has been initialized. This is useful for defining immutable properties that should remain constant throughout the object's lifecycle.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ readonlyPropertiesExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> In this example, the <code>id</code> property is marked as <code>readonly</code>, preventing any modifications after initialization. Attempting to reassign <code>employee.id</code> will result in a TypeScript error.
      </p>

      <!-- Subsection 15.4: Inheritance -->
      <h3 class="text-3xl font-semibold mb-2">15.4. Inheritance</h3>
      <p class="text-lg text-gray-700 mb-4">
        Inheritance allows a class to inherit properties and methods from another class, promoting code reuse and establishing hierarchical relationships between classes.
      </p>

      <h4 class="text-2xl font-semibold mb-2">15.4.1. Extending a Class</h4>
      <p class="text-lg text-gray-700 mb-4">
        The <code>extends</code> keyword is used to create a subclass that inherits from a superclass. The subclass can override or extend the functionality of the superclass.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ inheritanceExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Employee</code> class extends the <code>Person</code> class, inheriting its properties and methods while adding additional ones like <code>employeeId</code> and <code>department</code>.
      </p>

      <h4 class="text-2xl font-semibold mb-2">15.4.2. Method Overriding</h4>
      <p class="text-lg text-gray-700 mb-4">
        Subclasses can override methods from their superclasses to provide specialized behavior. This is achieved by defining a method with the same name and signature in the subclass.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ methodOverridingExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Dog</code> class overrides the <code>move</code> method inherited from the <code>Animal</code> class to provide a specific implementation.
      </p>

      <!-- Subsection 15.5: Interfaces -->
      <h3 class="text-3xl font-semibold mb-2">15.5. Interfaces</h3>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces define contracts for objects, specifying the structure that an object must adhere to. They are instrumental in enforcing type safety and ensuring consistency across different parts of an application.
      </p>

      <h4 class="text-2xl font-semibold mb-2">15.5.1. Defining an Interface</h4>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces can define properties, methods, and index signatures. They can also extend other interfaces, allowing for flexible and reusable type definitions.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ interfaceDefinitionExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Person</code> interface defines the structure for person objects, specifying that they must have a <code>name</code> and an <code>age</code>.
      </p>

      <h4 class="text-2xl font-semibold mb-2">15.5.2. Implementing an Interface in a Class</h4>
      <p class="text-lg text-gray-700 mb-4">
        Classes can implement interfaces to ensure that they adhere to the defined contracts. This enforces consistency and guarantees that the class provides the required properties and methods.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ interfaceImplementationExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Employee</code> class implements the <code>Person</code> interface, ensuring that it includes the <code>name</code> and <code>age</code> properties.
      </p>

      <h4 class="text-2xl font-semibold mb-2">15.5.3. Extending Interfaces</h4>
      <p class="text-lg text-gray-700 mb-4">
        Interfaces can extend other interfaces, allowing for the creation of more complex and hierarchical type structures.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ interfaceExtensionExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Admin</code> interface extends the <code>User</code> interface, inheriting its properties and adding new ones like <code>role</code>.
      </p>

      <!-- Subsection 15.6: Abstract Classes -->
      <h3 class="text-3xl font-semibold mb-2">15.6. Abstract Classes</h3>
      <p class="text-lg text-gray-700 mb-4">
        Abstract classes serve as base classes that cannot be instantiated directly. They can contain abstract methods, which must be implemented by subclasses, ensuring a consistent interface across derived classes.
      </p>

      <h4 class="text-2xl font-semibold mb-2">15.6.1. Defining an Abstract Class</h4>
      <p class="text-lg text-gray-700 mb-4">
        Abstract classes are defined using the <code>abstract</code> keyword and can include both concrete and abstract methods.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ abstractClassExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Vehicle</code> abstract class defines an abstract method <code>move</code> that must be implemented by any subclass.
      </p>

      <h4 class="text-2xl font-semibold mb-2">15.6.2. Implementing Abstract Classes</h4>
      <p class="text-lg text-gray-700 mb-4">
        Subclasses of abstract classes must implement all abstract methods, ensuring they adhere to the defined contracts.
      </p>

      <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
        <pre><code class="language-typescript">{{ abstractClassImplementationExample }}</code></pre>
      </div>
      <p class="text-lg text-gray-700">
        <strong>Explanation:</strong> The <code>Car</code> class extends the <code>Vehicle</code> abstract class and provides a concrete implementation of the <code>move</code> method.
      </p>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: UML class diagram showing the relationship between classes and interfaces, including inheritance and implementation.
        Alt Text: "UML class diagram illustrating classes, interfaces, inheritance, and implementation in TypeScript."
      -->
    </section>

    <!-- Section 16: Practical Examples -->
    <section id="practical-examples" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">16. Practical Examples</h2>
      <p class="text-lg text-gray-700 mb-4">
        Applying classes and interfaces in real-world scenarios solidifies understanding and demonstrates their practical utility in building robust applications.
      </p>

      <!-- Example 1: Implementing Interfaces in a Class -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">16.1. Implementing Interfaces in a Class</h3>
        <p class="text-lg text-gray-700 mb-4">
          Implementing interfaces in classes ensures that the class adheres to a specific contract, promoting consistency and type safety across your codebase.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ interfaceImplementationExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Employee</code> class implements the <code>Person</code> interface, guaranteeing that it includes the required properties. This enforces a consistent structure for all employee objects.
        </p>
      </div>

      <!-- Example 2: Class Inheritance and Method Overriding -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">16.2. Class Inheritance and Method Overriding</h3>
        <p class="text-lg text-gray-700 mb-4">
          Inheritance allows classes to derive properties and methods from other classes, promoting code reuse and establishing hierarchical relationships.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ inheritanceExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Dog</code> class extends the <code>Animal</code> class and overrides the <code>move</code> method to provide specialized behavior. This demonstrates how subclasses can modify inherited methods to suit their specific needs.
        </p>
      </div>

      <!-- Example 3: Using Abstract Classes -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">16.3. Using Abstract Classes</h3>
        <p class="text-lg text-gray-700 mb-4">
          Abstract classes provide a foundation for other classes, enforcing the implementation of specific methods and promoting a clear structure.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ abstractClassImplementationExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>Car</code> class extends the abstract <code>Vehicle</code> class and implements the abstract <code>move</code> method. This ensures that all subclasses of <code>Vehicle</code> provide their own implementation of the <code>move</code> method.
        </p>
      </div>

      <!-- Example 4: Readonly Properties -->
      <div class="mb-12">
        <h3 class="text-3xl font-semibold mb-2">16.4. Readonly Properties</h3>
        <p class="text-lg text-gray-700 mb-4">
          Readonly properties prevent modifications after initialization, ensuring data integrity throughout your application.
        </p>
        <div class="bg-gray-800 text-white rounded-lg p-4 mb-4 overflow-auto">
          <pre><code class="language-typescript">{{ readonlyPropertiesExample }}</code></pre>
        </div>
        <p class="text-lg text-gray-700">
          <strong>Explanation:</strong> The <code>id</code> property in the <code>ReadonlyUser</code> type is marked as <code>readonly</code>, preventing any reassignment. This enforces immutability, making your codebase more predictable and less error-prone.
        </p>
      </div>

      <!-- Suggested Image -->
      <!-- 
        Image Suggestion: A diagram showing a class hierarchy with interfaces and abstract classes, highlighting how properties and methods are inherited and overridden.
        Alt Text: "Diagram illustrating class inheritance, interface implementation, and abstract classes in TypeScript."
      -->
    </section>

    <!-- Section 17: Best Practices -->
    <section id="best-practices" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">17. Best Practices</h2>
      <p class="text-lg text-gray-700 mb-4">
        Adhering to best practices when working with classes and interfaces in TypeScript ensures that your code is clean, efficient, and maintainable. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Use Interfaces for Type Definitions:</strong> Prefer interfaces over type aliases when defining object shapes to take advantage of declaration merging.</li>
        <li><strong>Implement Interfaces in Classes:</strong> Use the <code>implements</code> keyword to ensure classes adhere to defined interfaces, promoting consistency.</li>
        <li><strong>Leverage Access Modifiers:</strong> Use <code>public</code>, <code>private</code>, and <code>protected</code> to control access to class members, enforcing encapsulation.</li>
        <li><strong>Use Abstract Classes for Base Classes:</strong> Utilize abstract classes when you want to provide base functionality that other classes can extend and build upon.</li>
        <li><strong>Prefer Composition Over Inheritance:</strong> When appropriate, use composition to build complex types from simpler ones, enhancing flexibility and reducing tight coupling.</li>
        <li><strong>Define Readonly Properties:</strong> Use <code>readonly</code> to prevent accidental modifications to properties, ensuring data integrity.</li>
        <li><strong>Keep Classes Focused:</strong> Adhere to the Single Responsibility Principle by ensuring that each class has a single, well-defined purpose.</li>
        <li><strong>Document Your Code:</strong> Use comments and documentation to explain complex class hierarchies, interface implementations, and method functionalities.</li>
      </ul>
    </section>

    <!-- Section 18: Common Mistakes -->
    <section id="common-mistakes" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">18. Common Mistakes</h2>
      <p class="text-lg text-gray-700 mb-4">
        Being aware of common pitfalls helps you avoid errors and write more robust TypeScript code. Here are some frequent mistakes developers make when working with classes and interfaces:
      </p>
      <ul class="list-disc list-inside text-lg text-gray-700">
        <li><strong>Ignoring Interface Implementation:</strong> Failing to implement required interfaces in classes can lead to missing properties or methods, causing runtime errors.</li>
        <li><strong>Misusing Access Modifiers:</strong> Incorrectly applying access modifiers can either expose sensitive data or restrict necessary access, leading to design issues.</li>
        <li><strong>Overusing Abstract Classes:</strong> Using abstract classes when simple interfaces or composition would suffice can lead to unnecessary complexity.</li>
        <li><strong>Not Using Readonly Properties:</strong> Neglecting to mark immutable properties as <code>readonly</code> can result in accidental modifications and data inconsistencies.</li>
        <li><strong>Complex Inheritance Hierarchies:</strong> Creating overly complex class hierarchies can make the codebase difficult to understand and maintain.</li>
        <li><strong>Forgetting to Implement All Interface Members:</strong> Incomplete implementation of interface members can lead to TypeScript compilation errors and missing functionality.</li>
        <li><strong>Mixing Inheritance and Composition Improperly:</strong> Incorrectly combining inheritance and composition can lead to tight coupling and reduced flexibility.</li>
        <li><strong>Not Utilizing Generics with Classes:</strong> Ignoring generics in classes can limit their reusability and type safety, especially in collection-like structures.</li>
      </ul>
    </section>

    <!-- Section 19: Summary -->
    <section id="summary" class="mb-12">
      <h2 class="text-4xl font-semibold mb-4">19. Summary</h2>
      <p class="text-lg text-gray-700 mb-4">
        TypeScript's robust type system significantly enhances JavaScript's capabilities, especially when working with classes and interfaces. By leveraging TypeScript's features such as access modifiers, readonly properties, inheritance, and interface implementations, you can write more organized, maintainable, and type-safe code.
      </p>
      <p class="text-lg text-gray-700 mb-4">
        Understanding and applying these fundamental concepts is crucial for building scalable applications. Adhering to best practices and being mindful of common mistakes will ensure that your TypeScript codebase remains clean, efficient, and free from unnecessary errors.
      </p>
      <p class="text-lg text-gray-700">
        Embrace TypeScript to unlock the full potential of object-oriented programming in JavaScript, creating applications that are not only powerful but also maintainable and scalable for the future.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TypesTypeScript',
  data() {
    return {
      // Section 15: Classes and Interfaces in TypeScript
      classSyntaxExample: `// Class Syntax and Members
class Person {
  public name: string;
  protected age: number;
  private ssn: string;

  constructor(name: string, age: number, ssn: string) {
    this.name = name;
    this.age = age;
    this.ssn = ssn;
  }

  public greet(): void {
    console.log(\`Hello, my name is \${this.name} and I am \${this.age} years old.\`);
  }

  protected getAge(): number {
    return this.age;
  }

  private getSSN(): string {
    return this.ssn;
  }
}

const person = new Person('Alice', 30, '123-45-6789');
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// person.age = 31; // Error: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
// person.ssn = '987-65-4321'; // Error: Property 'ssn' is private and only accessible within class 'Person'.`,

      accessModifiersExample: `// Access Modifiers Example
class Employee {
  public name: string;
  private employeeId: number;
  protected department: string;

  constructor(name: string, employeeId: number, department: string) {
    this.name = name;
    this.employeeId = employeeId;
    this.department = department;
  }

  public getEmployeeInfo(): void {
    console.log(\`Name: \${this.name}, ID: \${this.employeeId}, Department: \${this.department}\`);
  }

  protected getDepartment(): string {
    return this.department;
  }

  private getEmployeeId(): number {
    return this.employeeId;
  }
}

const employee = new Employee('Bob', 101, 'Engineering');
employee.getEmployeeInfo(); // Output: Name: Bob, ID: 101, Department: Engineering
// console.log(employee.employeeId); // Error: Property 'employeeId' is private and only accessible within class 'Employee'.
// console.log(employee.department); // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.`,

      readonlyPropertiesExample: `// Readonly Properties Example
interface User {
  readonly id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};

// Attempting to modify a readonly property
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
user.name = 'Bob'; // Valid
user.email = 'bob@example.com'; // Valid`,

      inheritanceExample: `// Inheritance Example
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number): void {
    console.log(\`\${this.name} moved \${distance} meters.\`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log('Woof! Woof!');
  }

  move(distance: number): void {
    console.log('Dog is moving...');
    super.move(distance);
  }
}

const dog = new Dog('Rex');
dog.bark(); // Output: Woof! Woof!
dog.move(10); 
// Output:
// Dog is moving...
// Rex moved 10 meters.`,

      interfaceDefinitionExample: `// Defining an Interface
interface Person {
  name: string;
  age: number;
}

// Implementing an Interface in a Class
class Employee implements Person {
  name: string;
  age: number;
  employeeId: number;
  department: string;

  constructor(name: string, age: number, employeeId: number, department: string) {
    this.name = name;
    this.age = age;
    this.employeeId = employeeId;
    this.department = department;
  }

  greet(): void {
    console.log(\`Hello, my name is \${this.name} and I work in the \${this.department} department.\`);
  }
}

const employee = new Employee('Charlie', 28, 202, 'Marketing');
employee.greet(); // Output: Hello, my name is Charlie and I work in the Marketing department.`,

      interfaceImplementationExample: `// Implementing an Interface in a Class
interface Person {
  name: string;
  age: number;
}

class Employee implements Person {
  name: string;
  age: number;
  employeeId: number;
  department: string;

  constructor(name: string, age: number, employeeId: number, department: string) {
    this.name = name;
    this.age = age;
    this.employeeId = employeeId;
    this.department = department;
  }

  greet(): void {
    console.log(\`Hello, my name is \${this.name} and I work in the \${this.department} department.\`);
  }
}

const employee = new Employee('Charlie', 28, 202, 'Marketing');
employee.greet(); // Output: Hello, my name is Charlie and I work in the Marketing department.`,

      abstractClassExample: `// Abstract Class Example
abstract class Vehicle {
  abstract move(distance: number): void;

  describe(): void {
    console.log('This is a vehicle.');
  }
}

class Car extends Vehicle {
  move(distance: number): void {
    console.log(\`Car moved \${distance} kilometers.\`);
  }
}

const car = new Car();
car.describe(); // Output: This is a vehicle.
car.move(50); // Output: Car moved 50 kilometers.

// Cannot instantiate an abstract class
// const vehicle = new Vehicle(); // Error: Cannot create an instance of an abstract class.`,

      abstractClassImplementationExample: `// Implementing Abstract Classes
abstract class Vehicle {
  abstract move(distance: number): void;

  describe(): void {
    console.log('This is a vehicle.');
  }
}

class Car extends Vehicle {
  move(distance: number): void {
    console.log(\`Car moved \${distance} kilometers.\`);
  }
}

const car = new Car();
car.describe(); // Output: This is a vehicle.
car.move(50); // Output: Car moved 50 kilometers.`,

      interfaceExtensionExample: `// Interface Extension Example
interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  id: 1,
  name: 'Admin User',
  email: 'admin@example.com',
  role: 'Administrator'
};`,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1000px;
}
header h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 12px;
  text-align: left;
}
th {
  background-color: #f0f4f8;
}
tr:nth-child(even) {
  background-color: #f9fafb;
}
a {
  color: #2563eb; /* Tailwind's blue-600 */
}
a:hover {
  color: #1e40af; /* Tailwind's blue-800 */
}
pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 1em;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
}
code {
  font-family: 'Fira Code', monospace;
}
</style>
