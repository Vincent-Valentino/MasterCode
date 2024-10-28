<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Object-Oriented Programming in Java" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Object-Oriented Programming (OOP) is a fundamental paradigm in Java that emphasizes the organization of code into objects and classes. Understanding OOP principles is crucial for building scalable, maintainable, and efficient Java applications. This section delves into the core concepts of OOP in Java, providing detailed explanations and practical examples to solidify your comprehension.
      </p>

      <!-- Key Concepts of OOP -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Key Concepts of OOP</h2>
      <p class="text-base md:text-lg mb-4">
        OOP in Java revolves around four main pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction. Grasping these concepts is essential for designing robust and reusable code.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Encapsulation:</strong> Bundling data and methods that operate on that data within a single unit or class, and restricting access to some of the object's components.</li>
        <li><strong>Inheritance:</strong> Allowing a new class to inherit properties and behaviors from an existing class, promoting code reusability.</li>
        <li><strong>Polymorphism:</strong> Enabling objects to be treated as instances of their parent class rather than their actual class, allowing for method overriding and interface implementation.</li>
        <li><strong>Abstraction:</strong> Hiding complex implementation details and exposing only the necessary parts of an object, often through abstract classes and interfaces.</li>
      </ul>

      <!-- Classes and Objects -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Classes and Objects</h2>
      <p class="text-base md:text-lg mb-4">
        In Java, a class is a blueprint for creating objects. It defines the attributes (fields) and behaviors (methods) that the objects created from the class can have.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>// Defining a Class
public class Car {
    // Fields (Attributes)
    private String color;
    private String model;
    private int year;

    // Constructor
    public Car(String color, String model, int year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }

    // Method (Behavior)
    public void displayInfo() {
        System.out.println("Car Model: " + model + ", Year: " + year + ", Color: " + color);
    }
}

// Creating an Object
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Red", "Toyota Camry", 2021);
        myCar.displayInfo();
    }
}</code></pre>
      <p class="text-base md:text-lg mb-6">
        In the example above, the `Car` class defines three attributes: `color`, `model`, and `year`. The constructor initializes these attributes, and the `displayInfo` method prints the car's details. The `Main` class demonstrates how to create an instance of the `Car` class and invoke its method.
      </p>

      <!-- Constructors -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Constructors</h2>
      <p class="text-base md:text-lg mb-4">
        Constructors are special methods used to initialize objects. They have the same name as the class and do not have a return type.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Constructor Overloading
public class Bicycle {
    private String type;
    private int gears;

    // Default Constructor
    public Bicycle() {
        this.type = "Mountain";
        this.gears = 18;
    }

    // Parameterized Constructor
    public Bicycle(String type, int gears) {
        this.type = type;
        this.gears = gears;
    }

    public void displayDetails() {
        System.out.println("Bicycle Type: " + type + ", Gears: " + gears);
    }
}

public class Main {
    public static void main(String[] args) {
        Bicycle bike1 = new Bicycle();
        Bicycle bike2 = new Bicycle("Road", 21);

        bike1.displayDetails();
        bike2.displayDetails();
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        The `Bicycle` class demonstrates constructor overloading, allowing the creation of `Bicycle` objects with default or specified attributes.
      </p>

      <!-- Inheritance -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Inheritance</h2>
      <p class="text-base md:text-lg mb-4">
        Inheritance allows a new class to acquire the properties and behaviors of an existing class. The existing class is known as the superclass (or parent class), and the new class is called the subclass (or child class).
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Superclass
public class Animal {
    protected String name;

    public void eat() {
        System.out.println(name + " is eating.");
    }
}

// Subclass
public class Dog extends Animal {
    public Dog(String name) {
        this.name = name;
    }

    public void bark() {
        System.out.println(name + " is barking.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy");
        myDog.eat();   // Inherited method
        myDog.bark();  // Subclass-specific method
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Here, the `Dog` class inherits from the `Animal` class, gaining access to the `eat` method and the `name` attribute. Additionally, the `Dog` class introduces its own method, `bark`.
      </p>

      <!-- Polymorphism -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Polymorphism</h2>
      <p class="text-base md:text-lg mb-4">
        Polymorphism allows objects to be treated as instances of their superclass rather than their actual class. This enables a single interface to represent different underlying forms (data types).
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Superclass
public class Shape {
    public void draw() {
        System.out.println("Drawing a shape.");
    }
}

// Subclass 1
public class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle.");
    }
}

// Subclass 2
public class Rectangle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle.");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape shape1 = new Circle();
        Shape shape2 = new Rectangle();

        shape1.draw(); // Outputs: Drawing a circle.
        shape2.draw(); // Outputs: Drawing a rectangle.
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the `draw` method is overridden in both `Circle` and `Rectangle` subclasses. When invoked through a `Shape` reference, the appropriate subclass method is executed, demonstrating runtime polymorphism.
      </p>

      <!-- Abstraction -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Abstraction</h2>
      <p class="text-base md:text-lg mb-4">
        Abstraction involves hiding complex implementation details and exposing only the necessary parts of an object. In Java, abstraction is achieved using abstract classes and interfaces.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Abstract Class
public abstract class Vehicle {
    protected String brand;

    public Vehicle(String brand) {
        this.brand = brand;
    }

    // Abstract Method
    public abstract void honk();

    // Concrete Method
    public void displayBrand() {
        System.out.println("Brand: " + brand);
    }
}

// Subclass
public class Car extends Vehicle {
    public Car(String brand) {
        super(brand);
    }

    @Override
    public void honk() {
        System.out.println("Car is honking: Beep Beep!");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle myCar = new Car("Toyota");
        myCar.displayBrand();
        myCar.honk();
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        The `Vehicle` class is abstract and cannot be instantiated directly. It defines an abstract method `honk` that must be implemented by any concrete subclass, such as `Car`. This ensures that all subclasses provide specific implementations for abstract behaviors.
      </p>

      <!-- Interfaces -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Interfaces</h2>
      <p class="text-base md:text-lg mb-4">
        An interface in Java is a reference type that can contain method signatures and constants. Classes can implement interfaces, thereby agreeing to provide implementations for the methods declared in the interface. Interfaces are a powerful tool for achieving abstraction and multiple inheritance in Java.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Interface
public interface Flyable {
    void fly();
}

// Implementing Interface
public class Bird implements Flyable {
    private String species;

    public Bird(String species) {
        this.species = species;
    }

    @Override
    public void fly() {
        System.out.println(species + " is flying.");
    }
}

public class Main {
    public static void main(String[] args) {
        Flyable sparrow = new Bird("Sparrow");
        sparrow.fly();
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        The `Flyable` interface declares a `fly` method that must be implemented by any class that chooses to implement it. The `Bird` class implements `Flyable` and provides its own version of the `fly` method, demonstrating how interfaces enforce certain behaviors across different classes.
      </p>

      <!-- Method Overriding -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Method Overriding</h2>
      <p class="text-base md:text-lg mb-4">
        Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. This allows the subclass to modify or extend the behavior of that method.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Superclass
public class Employee {
    public void work() {
        System.out.println("Employee is working.");
    }
}

// Subclass
public class Manager extends Employee {
    @Override
    public void work() {
        System.out.println("Manager is overseeing the team.");
    }
}

public class Main {
    public static void main(String[] args) {
        Employee emp = new Employee();
        Employee mgr = new Manager();

        emp.work(); // Outputs: Employee is working.
        mgr.work(); // Outputs: Manager is overseeing the team.
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the `Manager` class overrides the `work` method from the `Employee` class to provide a more specific implementation. When invoked through an `Employee` reference, the overridden method in `Manager` is executed, showcasing dynamic method dispatch.
      </p>

      <!-- Access Modifiers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Access Modifiers</h2>
      <p class="text-base md:text-lg mb-4">
        Access modifiers determine the visibility and accessibility of classes, methods, and variables in Java. Understanding access levels is vital for encapsulation and protecting the integrity of your code.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>public:</strong> Accessible from any other class.</li>
        <li><strong>protected:</strong> Accessible within its own package and by subclasses.</li>
        <li><strong>default (no modifier):</strong> Accessible only within its own package.</li>
        <li><strong>private:</strong> Accessible only within its own class.</li>
      </ul>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for OOP in Java</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Follow the SOLID Principles:</strong> Adhere to the SOLID principles to create scalable and maintainable software.</li>
        <li><strong>Encapsulate Data:</strong> Keep class fields private and provide public getter and setter methods.</li>
        <li><strong>Use Meaningful Class and Method Names:</strong> Choose descriptive names that clearly convey the purpose and functionality.</li>
        <li><strong>Avoid Deep Inheritance Hierarchies:</strong> Favor composition over inheritance to reduce complexity.</li>
        <li><strong>Implement Interfaces for Flexibility:</strong> Use interfaces to define contracts and promote loose coupling.</li>
        <li><strong>Document Your Code:</strong> Provide clear documentation and comments to explain complex logic and class responsibilities.</li>
        <li><strong>Reuse Code When Possible:</strong> Leverage inheritance and composition to avoid code duplication.</li>
      </ul>

      <!-- Example: Implementing Interfaces -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Example: Implementing Interfaces</h2>
      <p class="text-base md:text-lg mb-4">
        Interfaces allow different classes to implement the same set of methods, enabling polymorphism and enhancing code flexibility.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Interface
public interface Drivable {
    void drive();
    void stop();
}

// Class implementing Interface
public class Car implements Drivable {
    private String brand;

    public Car(String brand) {
        this.brand = brand;
    }

    @Override
    public void drive() {
        System.out.println(brand + " is driving.");
    }

    @Override
    public void stop() {
        System.out.println(brand + " has stopped.");
    }
}

// Another Class implementing Interface
public class Bicycle implements Drivable {
    private String type;

    public Bicycle(String type) {
        this.type = type;
    }

    @Override
    public void drive() {
        System.out.println(type + " bicycle is being ridden.");
    }

    @Override
    public void stop() {
        System.out.println(type + " bicycle has stopped.");
    }
}

public class Main {
    public static void main(String[] args) {
        Drivable myCar = new Car("Tesla");
        Drivable myBike = new Bicycle("Mountain");

        myCar.drive();
        myCar.stop();

        myBike.drive();
        myBike.stop();
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, both `Car` and `Bicycle` classes implement the `Drivable` interface, providing their own implementations of the `drive` and `stop` methods. This allows them to be treated uniformly as `Drivable` objects, facilitating polymorphic behavior.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Object-Oriented Programming in Java provides a powerful framework for organizing and managing code through classes and objects. By mastering OOP principles such as encapsulation, inheritance, polymorphism, and abstraction, you can design applications that are modular, reusable, and maintainable. Adhering to best practices ensures that your Java programs are robust and scalable, ready to meet the demands of complex software development.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of Object-Oriented Programming in Java, explore the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/java/concepts/" class="text-blue-600 hover:underline">Java Tutorials: Object-Oriented Programming Concepts</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/object-oriented-programming-oops-concepts-in-java/" class="text-blue-600 hover:underline">GeeksforGeeks: OOP Concepts in Java</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/java-oops-concepts" class="text-blue-600 hover:underline">JavaTpoint: Java OOPs Concepts</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-oop-principles" class="text-blue-600 hover:underline">Baeldung: Java OOP Principles</a>
        </li>
        <li>
          <a href="https://www.udemy.com/topic/java-object-oriented-programming/" class="text-blue-600 hover:underline">Udemy: Java Object-Oriented Programming Courses</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaOOP',
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for long lines */
  overflow-x: auto;      /* Adds horizontal scroll for long code lines */
}

a {
  color: #1e40af; /* Tailwind's blue-800 */
}

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
