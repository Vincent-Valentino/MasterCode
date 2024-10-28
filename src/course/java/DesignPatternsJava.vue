<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Java Design Patterns" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Design Patterns are proven solutions to common problems encountered during software development. They provide a standardized approach to designing and organizing code, enhancing flexibility, maintainability, and scalability. In Java, understanding and implementing design patterns is essential for building robust and efficient applications. This section delves into the fundamentals of Java Design Patterns, exploring various types, their applications, and best practices through detailed explanations and practical examples.
      </p>

      <!-- What are Design Patterns? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What are Design Patterns?</h2>
      <p class="text-base md:text-lg mb-4">
        Design Patterns are general reusable solutions to common problems in software design. They are not finished designs but templates that can be applied to solve specific design challenges. Design Patterns can be categorized into three main types:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Creational Patterns:</strong> Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation.</li>
        <li><strong>Structural Patterns:</strong> Concerned with how classes and objects are composed to form larger structures.</li>
        <li><strong>Behavioral Patterns:</strong> Focus on communication between objects, helping to manage algorithms and the assignment of responsibilities.</li>
      </ul>

      <!-- Singleton Pattern -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Singleton Pattern</h2>
      <p class="text-base md:text-lg mb-4">
        The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it. This pattern is useful when exactly one object is needed to coordinate actions across the system.
      </p>

      <!-- Code Example 1: Singleton Pattern -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Singleton Pattern Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Singleton Class
public class Singleton {
    // Private static instance of the same class
    private static Singleton instance;

    // Private constructor to prevent instantiation
    private Singleton() {}

    // Public method to provide access to the instance
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    // Example method
    public void showMessage() {
        System.out.println("Hello from Singleton!");
    }

    public static void main(String[] args) {
        // Illegal construct: new Singleton()
        // Singleton single = new Singleton();

        // Get the only object available
        Singleton single = Singleton.getInstance();

        // Show the message
        single.showMessage();
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>Singleton</code> class restricts the instantiation of itself to one object. The <code>getInstance()</code> method ensures that only one instance is created and provides a global point of access to it.
      </p>

      <!-- Factory Pattern -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Factory Pattern</h2>
      <p class="text-base md:text-lg mb-4">
        The Factory Pattern defines an interface for creating objects but allows subclasses to alter the type of objects that will be created. It promotes loose coupling by eliminating the need to bind application-specific classes into the code.
      </p>

      <!-- Code Example 2: Factory Pattern -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Factory Pattern Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Product Interface
interface Shape {
    void draw();
}

// Concrete Products
class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Inside Circle::draw() method.");
    }
}

class Rectangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Inside Rectangle::draw() method.");
    }
}

// Factory Class
class ShapeFactory {
    // Use getShape method to get object of type Shape
    public Shape getShape(String shapeType) {
        if (shapeType == null) {
            return null;
        }
        if(shapeType.equalsIgnoreCase("CIRCLE")) {
            return new Circle();
        } else if(shapeType.equalsIgnoreCase("RECTANGLE")) {
            return new Rectangle();
        }
        return null;
    }
}

// Using the Factory
public class FactoryPatternDemo {
    public static void main(String[] args) {
        ShapeFactory shapeFactory = new ShapeFactory();

        // Get an object of Circle and call its draw method.
        Shape shape1 = shapeFactory.getShape("CIRCLE");
        shape1.draw();

        // Get an object of Rectangle and call its draw method.
        Shape shape2 = shapeFactory.getShape("RECTANGLE");
        shape2.draw();
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        The <code>ShapeFactory</code> class creates objects of concrete classes based on provided information. This approach allows for the creation of objects without exposing the instantiation logic to the client.
      </p>

      <!-- Observer Pattern -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Observer Pattern</h2>
      <p class="text-base md:text-lg mb-4">
        The Observer Pattern defines a one-to-many dependency between objects, where a change in one object notifies and updates all its dependents. This pattern is commonly used in event handling systems.
      </p>

      <!-- Code Example 3: Observer Pattern -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Observer Pattern Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Subject Interface
interface Subject {
    void registerObserver(Observer o);
    void removeObserver(Observer o);
    void notifyObservers();
}

// Observer Interface
interface Observer {
    void update(String message);
}

// Concrete Subject
class MessagePublisher implements Subject {
    private List&lt;Observer> observers = new ArrayList<>();
    private String message;

    @Override
    public void registerObserver(Observer o) {
        observers.add(o);
    }

    @Override
    public void removeObserver(Observer o) {
        observers.remove(o);
    }

    @Override
    public void notifyObservers() {
        for(Observer o : observers) {
            o.update(message);
        }
    }

    public void setMessage(String msg) {
        this.message = msg;
        notifyObservers();
    }
}

// Concrete Observer
class MessageSubscriberOne implements Observer {
    @Override
    public void update(String message) {
        System.out.println("MessageSubscriberOne :: " + message);
    }
}

class MessageSubscriberTwo implements Observer {
    @Override
    public void update(String message) {
        System.out.println("MessageSubscriberTwo :: " + message);
    }
}

// Using the Observer Pattern
public class ObserverPatternDemo {
    public static void main(String[] args) {
        MessagePublisher publisher = new MessagePublisher();

        Observer subscriber1 = new MessageSubscriberOne();
        Observer subscriber2 = new MessageSubscriberTwo();

        publisher.registerObserver(subscriber1);
        publisher.registerObserver(subscriber2);

        publisher.setMessage("First Message");
        publisher.setMessage("Second Message");
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>MessagePublisher</code> class notifies all registered observers whenever a new message is set. The observers implement the <code>Observer</code> interface and react accordingly to the updates.
      </p>

      <!-- Strategy Pattern -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Strategy Pattern</h2>
      <p class="text-base md:text-lg mb-4">
        The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It allows the algorithm to vary independently from clients that use it, promoting flexibility and reusability.
      </p>

      <!-- Code Example 4: Strategy Pattern -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Strategy Pattern Example</h3>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Strategy Interface
interface PaymentStrategy {
    void pay(int amount);
}

// Concrete Strategies
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;
    private String cardHolder;

    public CreditCardPayment(String cardNumber, String cardHolder) {
        this.cardNumber = cardNumber;
        this.cardHolder = cardHolder;
    }

    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid with Credit Card.");
    }
}

class PaypalPayment implements PaymentStrategy {
    private String email;

    public PaypalPayment(String email) {
        this.email = email;
    }

    @Override
    public void pay(int amount) {
        System.out.println(amount + " paid using PayPal.");
    }
}

// Context
class ShoppingCart {
    private List&lt;String> items = new ArrayList<>();

    public void addItem(String item) {
        items.add(item);
    }

    public void pay(PaymentStrategy paymentMethod, int amount) {
        paymentMethod.pay(amount);
    }
}

// Using the Strategy Pattern
public class StrategyPatternDemo {
    public static void main(String[] args) {
        ShoppingCart cart = new ShoppingCart();
        cart.addItem("Laptop");
        cart.addItem("Phone");

        // Pay by Credit Card
        PaymentStrategy creditCard = new CreditCardPayment("1234567890123456", "John Doe");
        cart.pay(creditCard, 1500);

        // Pay by PayPal
        PaymentStrategy paypal = new PaypalPayment("john.doe@example.com");
        cart.pay(paypal, 200);
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        The <code>ShoppingCart</code> class uses different payment strategies without being tightly coupled to the specific payment methods. This flexibility allows for easy addition of new payment methods in the future.
      </p>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Design Patterns</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when implementing design patterns ensures that your code remains efficient, maintainable, and free from common pitfalls. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Understand the Problem:</strong> Before applying a design pattern, ensure you fully understand the problem it solves and whether it is the most appropriate solution.</li>
        <li><strong>Keep It Simple:</strong> Avoid overcomplicating your design by using patterns where they are not needed. Use patterns judiciously to enhance clarity and functionality.</li>
        <li><strong>Favor Composition Over Inheritance:</strong> Whenever possible, use composition to extend functionality, as it provides greater flexibility and reduces tight coupling.</li>
        <li><strong>Follow the SOLID Principles:</strong> Ensure that your implementation of design patterns adheres to the SOLID principles to maintain code quality and scalability.</li>
        <li><strong>Document Your Patterns:</strong> Clearly document the design patterns used in your code to aid in understanding and future maintenance.</li>
        <li><strong>Refactor When Necessary:</strong> Continuously evaluate your code and refactor it to incorporate design patterns that can improve its structure and efficiency.</li>
        <li><strong>Reuse Existing Patterns:</strong> Leverage established design patterns from the Gang of Four (GoF) and other reputable sources to solve common design challenges effectively.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Java Design Patterns provide a structured and efficient way to solve recurring design problems, enhancing the flexibility and maintainability of your applications. By understanding and implementing patterns like Singleton, Factory, Observer, and Strategy, developers can create robust and scalable software systems. Adhering to best practices ensures that design patterns are applied effectively, resulting in clean, reusable, and efficient code. Mastery of design patterns is a crucial step in advancing your Java development skills and building high-quality applications.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of Java Design Patterns, explore the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://refactoring.guru/design-patterns" class="text-blue-600 hover:underline">Refactoring.Guru: Design Patterns</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/java-design-patterns/" class="text-blue-600 hover:underline">GeeksforGeeks: Java Design Patterns</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/design-patterns-in-java" class="text-blue-600 hover:underline">JavaTpoint: Design Patterns in Java</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-design-patterns" class="text-blue-600 hover:underline">Baeldung: Guide to Java Design Patterns</a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/design-patterns-java/" class="text-blue-600 hover:underline">Udemy: Java Design Patterns Courses</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaDesignPatterns',
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
