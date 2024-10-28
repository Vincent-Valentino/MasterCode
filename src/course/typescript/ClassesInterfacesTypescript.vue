<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-blue-950 rounded-t-xl p-4">
      <img src="/ts/logo.svg" alt="Typescript Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-200">TypeScript Class and Interfaces</h1>
    </div>

    <!-- Section: Classes and Constructors -->
    <section id="classes-constructors" class="bg-white rounded-b-xl p-4 md:p-6">
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Classes and Constructors</h2>
      <p class="text-base md:text-lg mb-6">
        TypeScript enhances JavaScript classes by adding type annotations and other features, making object-oriented programming more robust and easier to maintain.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Defining a Class</h3>
      <p class="text-base md:text-lg mb-6">
        A class in TypeScript is defined using the <code>class</code> keyword, followed by the class name.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Person {
  name: string;
  age: number;
}
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Constructors</h3>
      <p class="text-base md:text-lg mb-6">
        Constructors are special methods used to initialize objects. In TypeScript, you can define a constructor using the <code>constructor</code> keyword.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person('Alice', 30);
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 30
</code></pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>Person</code> class has a constructor that initializes the <code>name</code> and <code>age</code> properties.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Parameter Properties</h3>
      <p class="text-base md:text-lg mb-6">
        TypeScript provides a shorthand for defining and initializing class members directly in the constructor parameters using access modifiers.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Person {
  constructor(public name: string, private age: number) {}
}

let person2 = new Person('Bob', 25);
console.log(person2.name); // Output: Bob
// console.log(person2.age); // Error: Property 'age' is private
</code></pre>
      <p class="text-base md:text-lg mb-6">
        Here, <code>name</code> and <code>age</code> are automatically declared and initialized. The <code>public</code> and <code>private</code> keywords specify the access modifiers.
      </p>
    </section>

    <!-- Section: Access Modifiers (public, private, protected) -->
    <section id="access-modifiers" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xlfont-semibold mb-4">Access Modifiers</h2>
      <p class="text-base md:text-lg mb-6">
        Access modifiers control the visibility of class members. TypeScript supports <code>public</code>, <code>private</code>, and <code>protected</code> modifiers.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Public Members</h3>
      <p class="text-base md:text-lg mb-6">
        Members marked as <code>public</code> (or with no modifier) are accessible from anywhere.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Vehicle {
  public make: string;

  constructor(make: string) {
    this.make = make;
  }
}

let car = new Vehicle('Toyota');
console.log(car.make); // Output: Toyota
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Private Members</h3>
      <p class="text-base md:text-lg mb-6">
        Members marked as <code>private</code> are accessible only within the class they are declared.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // Output: 1500
// console.log(account.balance);    // Error: Property 'balance' is private
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Protected Members</h3>
      <p class="text-base md:text-lg mb-6">
        Members marked as <code>protected</code> are accessible within the class and its subclasses.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Employee {
  protected employeeId: number;

  constructor(employeeId: number) {
    this.employeeId = employeeId;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(employeeId: number, department: string) {
    super(employeeId);
    this.department = department;
  }

  getDetails() {
    return `ID: ${this.employeeId}, Department: ${this.department}`;
  }
}

let manager = new Manager(101, 'Sales');
console.log(manager.getDetails()); // Output: ID: 101, Department: Sales
// console.log(manager.employeeId);   // Error: Property 'employeeId' is protected
</code></pre>
    </section>

    <!-- Section: Inheritance and Polymorphism in TypeScript -->
    <section id="inheritance-polymorphism" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xlfont-semibold mb-4">Inheritance and Polymorphism</h2>
      <p class="text-base md:text-lg mb-6">
        TypeScript supports class inheritance and polymorphism, allowing you to create a hierarchy of classes that share functionality.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Class Inheritance</h3>
      <p class="text-base md:text-lg mb-6">
        A class can extend another class using the <code>extends</code> keyword, inheriting its properties and methods.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Animal {
  move(distance: number) {
    console.log(`Animal moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

let dog = new Dog();
dog.bark();        // Output: Woof!
dog.move(10);      // Output: Animal moved 10 meters.
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Method Overriding</h3>
      <p class="text-base md:text-lg mb-6">
        A subclass can override methods from its superclass to provide specific implementations.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Animal {
  makeSound() {
    console.log('Generic animal sound.');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}

let cat = new Cat();
cat.makeSound();   // Output: Meow!
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Polymorphism</h3>
      <p class="text-base md:text-lg mb-6">
        Polymorphism allows objects of different classes related by inheritance to be treated as objects of a common superclass.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Animal {
  makeSound() {
    console.log('Generic animal sound.');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}

function playSound(animal: Animal) {
  animal.makeSound();
}

let animals: Animal[] = [new Dog(), new Cat(), new Animal()];
animals.forEach(playSound);
// Output:
// Woof!
// Meow!
// Generic animal sound.
</code></pre>
      <p class="text-base md:text-lg mb-6">
        The <code>playSound</code> function accepts an <code>Animal</code> type, but when passed different subclasses, it calls their specific implementations.
      </p>
    </section>

    <!-- Section: Interfaces and Their Implementation -->
    <section id="interfaces" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xlfont-semibold mb-4">Interfaces and Their Implementation</h2>
      <p class="text-base md:text-lg mb-6">
        Interfaces in TypeScript define the structure of an object, specifying property names and types without implementing functionality.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Defining an Interface</h3>
      <p class="text-base md:text-lg mb-6">
        An interface is defined using the <code>interface</code> keyword.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`x: ${p.x}, y: ${p.y}`);
}

let point = { x: 10, y: 20 };
logPoint(point); // Output: x: 10, y: 20
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Implementing Interfaces in Classes</h3>
      <p class="text-base md:text-lg mb-6">
        A class can implement an interface using the <code>implements</code> keyword, ensuring it adheres to the interface's structure.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">interface Drawable {
  draw(): void;
}

class Circle implements Drawable {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  draw() {
    console.log(`Drawing a circle with radius ${this.radius}`);
  }
}

let circle = new Circle(5);
circle.draw(); // Output: Drawing a circle with radius 5
</code></pre>
    </section>

    <!-- Section: Extending Interfaces -->
    <section id="extending-interfaces" class="bg-white rounded-b-xl p-4 md:p-6 mt-6">
      <h2 class="text-xl md:text-2xlfont-semibold mb-4">Extending Interfaces</h2>
      <p class="text-base md:text-lg mb-6">
        Interfaces can extend other interfaces, allowing you to build upon existing structures.
      </p>

      <h3 class="text-2xl font-semibold mb-2">Single Interface Inheritance</h3>
      <p class="text-base md:text-lg mb-6">
        An interface can extend a single interface, inheriting its properties.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square: Square = {
  color: 'blue',
  sideLength: 10
};

console.log(square); // Output: { color: 'blue', sideLength: 10 }
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Multiple Interface Inheritance</h3>
      <p class="text-base md:text-lg mb-6">
        An interface can extend multiple interfaces, combining their properties.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square: Square = {
  color: 'red',
  sideLength: 5,
  penWidth: 2
};

console.log(square); // Output: { color: 'red', sideLength: 5, penWidth: 2 }
</code></pre>

      <h3 class="text-2xl font-semibold mb-2">Extending Classes with Interfaces</h3>
      <p class="text-base md:text-lg mb-6">
        Interfaces can also extend classes. When an interface extends a class, it inherits the class's members but not its implementation.
      </p>
      <!-- Code Example -->
      <pre class="bg-gray-800 rounded p-4 overflow-x-auto mb-4" v-pre>
<code class="language-typescript">class Control {
  private state: boolean;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() {
    console.log('Button selected');
  }
}

let btn = new Button();
btn.select(); // Output: Button selected
</code></pre>
      <p class="text-base md:text-lg mb-6">
        In this example, <code>SelectableControl</code> extends <code>Control</code>, and any class implementing <code>SelectableControl</code> must also extend <code>Control</code>.
      </p>
    </section>

  </div>
</template>

<script>
export default {
  name: 'TypeScriptClassesInterfaces',
};
</script>

<style scoped>
.container {
  max-width: 900px;
}
header h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
table {
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;
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
