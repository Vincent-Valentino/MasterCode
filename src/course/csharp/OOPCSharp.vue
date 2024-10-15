<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-950 rounded-t-xl p-4">
      <img src="/csharp/logo.svg" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">C# Object Oriented Programming</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Object-Oriented Programming (OOP) is a cornerstone of modern software development, providing a structured approach to designing and implementing complex systems. In C#, OOP principles enable developers to create modular, reusable, and maintainable code by organizing software around objects rather than actions. This section delves into the fundamental principles of OOP in C#, including classes and objects, encapsulation, inheritance, polymorphism, abstraction, access modifiers, and constructors and destructors. Real-world analogies and practical code examples are provided to illustrate each concept, offering a comprehensive understanding of how OOP enhances C# programming.
      </p>

      <!-- Classes and Objects -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Classes and Objects</h2>
      <p class="text-base md:text-lg mb-4">
        At the heart of OOP are <strong>classes</strong> and <strong>objects</strong>. A class serves as a blueprint for creating objects, encapsulating data for the object and methods to manipulate that data. An object is an instance of a class, representing a specific entity with its own state and behavior.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Think of a class as a blueprint for a house. It defines the structure, rooms, and features of the house. An object, on the other hand, is an actual house built from that blueprint. Each house (object) can have its own specific details (state) while sharing the same overall structure (class).
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Defining a Class and Creating Objects:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defining a Person class and creating objects
public class Person
{
    // Properties
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }

    // Method
    public void Introduce()
    {
        Console.WriteLine($"Hello, I'm {FirstName} {LastName} and I'm {Age} years old.");
    }
}

// Usage
public class Program
{
    public static void Main(string[] args)
    {
        // Creating objects
        Person person1 = new Person
        {
            FirstName = "Alice",
            LastName = "Johnson",
            Age = 30
        };

        Person person2 = new Person
        {
            FirstName = "Bob",
            LastName = "Smith",
            Age = 25
        };

        // Calling methods
        person1.Introduce(); // Output: Hello, I'm Alice Johnson and I'm 30 years old.
        person2.Introduce(); // Output: Hello, I'm Bob Smith and I'm 25 years old.
    }
}
</code>
      </pre>

      <!-- Encapsulation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Encapsulation</h2>
      <p class="text-base md:text-lg mb-4">
        Encapsulation is the OOP principle of bundling data (properties) and methods (functions) that operate on that data within a single unit or class. It restricts direct access to some of the object's components, which is a means of preventing accidental interference and misuse of the data.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Consider a car. The internal components like the engine and transmission are encapsulated within the car's body. Users interact with the car through the steering wheel, pedals, and gear shift without needing to understand the complex workings of the engine.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Implementing Encapsulation:</strong> Encapsulation is achieved using access modifiers to control the visibility of class members. Properties are typically used to access private fields, ensuring controlled interaction.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Encapsulation in the Person class
public class Person
{
    // Private fields
    private string firstName;
    private string lastName;
    private int age;

    // Public properties
    public string FirstName
    {
        get { return firstName; }
        set { firstName = value; }
    }

    public string LastName
    {
        get { return lastName; }
        set { lastName = value; }
    }

    public int Age
    {
        get { return age; }
        set
        {
            if (value >= 0)
                age = value;
            else
                throw new ArgumentException("Age cannot be negative.");
        }
    }

    // Method
    public void Introduce()
    {
        Console.WriteLine($"Hello, I'm {FirstName} {LastName} and I'm {Age} years old.");
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In the above example, the fields <code>firstName</code>, <code>lastName</code>, and <code>age</code> are marked as <code>private</code>, restricting direct access from outside the class. The public properties <code>FirstName</code>, <code>LastName</code>, and <code>Age</code> provide controlled access to these fields, enforcing rules such as preventing negative age values.
      </p>

      <!-- Inheritance -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Inheritance</h2>
      <p class="text-base md:text-lg mb-4">
        Inheritance allows a class (derived class) to inherit fields and methods from another class (base class). It promotes code reusability and establishes a hierarchical relationship between classes.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Think of a generic vehicle as a base class. Specific types of vehicles like cars, trucks, and motorcycles can inherit from this base class, acquiring common properties like <code>Make</code>, <code>Model</code>, and <code>Year</code>, while also introducing their unique attributes.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Implementing Inheritance:</strong> In C#, inheritance is implemented using the <code>:</code> symbol followed by the base class name.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Inheritance with Vehicle and Car classes
public class Vehicle
{
    // Properties
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }

    // Method
    public void DisplayInfo()
    {
        Console.WriteLine($"Vehicle: {Year} {Make} {Model}");
    }
}

public class Car : Vehicle
{
    // Additional property
    public int NumberOfDoors { get; set; }

    // Method
    public void DisplayCarInfo()
    {
        DisplayInfo();
        Console.WriteLine($"Number of Doors: {NumberOfDoors}");
    }
}

// Usage
public class Program
{
    public static void Main(string[] args)
    {
        Car car = new Car
        {
            Make = "Toyota",
            Model = "Camry",
            Year = 2020,
            NumberOfDoors = 4
        };

        car.DisplayCarInfo();
        // Output:
        // Vehicle: 2020 Toyota Camry
        // Number of Doors: 4
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>Car</code> class inherits from the <code>Vehicle</code> class, gaining access to its properties and methods. The <code>Car</code> class adds an additional property, <code>NumberOfDoors</code>, and a method, <code>DisplayCarInfo</code>, which utilizes both inherited and new members.
      </p>

      <!-- Polymorphism -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Polymorphism</h2>
      <p class="text-base md:text-lg mb-4">
        Polymorphism allows objects to be treated as instances of their base class rather than their actual class. It enables a single interface to represent different underlying forms (data types). There are two main types of polymorphism in C#: compile-time (method overloading) and runtime (method overriding).
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Consider a payment system where different payment methods (credit card, PayPal, bank transfer) are all processed through a common interface. Each payment method implements the processing differently, but the system interacts with them uniformly.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Implementing Polymorphism:</strong> Polymorphism is achieved through method overriding using the <code>virtual</code> and <code>override</code> keywords.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Polymorphism with Animal classes
public class Animal
{
    // Virtual method
    public virtual void MakeSound()
    {
        Console.WriteLine("The animal makes a sound.");
    }
}

public class Dog : Animal
{
    // Overriding method
    public override void MakeSound()
    {
        Console.WriteLine("The dog barks.");
    }
}

public class Cat : Animal
{
    // Overriding method
    public override void MakeSound()
    {
        Console.WriteLine("The cat meows.");
    }
}

// Usage
public class Program
{
    public static void Main(string[] args)
    {
        List&lt;Animal&gt; animals = new List&lt;Animal&gt;
        {
            new Animal(),
            new Dog(),
            new Cat()
        };

        foreach (Animal animal in animals)
        {
            animal.MakeSound();
        }
        // Output:
        // The animal makes a sound.
        // The dog barks.
        // The cat meows.
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>Animal</code> class defines a virtual method, <code>MakeSound</code>. The <code>Dog</code> and <code>Cat</code> classes override this method to provide specific implementations. When iterating through a list of <code>Animal</code> objects, the appropriate <code>MakeSound</code> method is called based on the actual object type, demonstrating polymorphism.
      </p>

      <!-- Abstraction -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Abstraction</h2>
      <p class="text-base md:text-lg mb-4">
        Abstraction involves hiding the complex implementation details of a system and exposing only the necessary parts. It allows developers to focus on what an object does rather than how it does it.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Consider driving a car. A driver interacts with the steering wheel, pedals, and gear shift without needing to understand the intricate workings of the engine, transmission, or electrical systems.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Implementing Abstraction:</strong> Abstraction can be achieved using abstract classes and interfaces in C#.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Abstraction with Abstract Classes
public abstract class Shape
{
    // Abstract method
    public abstract double CalculateArea();

    // Non-abstract method
    public void Display()
    {
        Console.WriteLine($"The area is {CalculateArea()}.");
    }
}

public class Circle : Shape
{
    public double Radius { get; set; }

    public Circle(double radius)
    {
        Radius = radius;
    }

    // Implementing abstract method
    public override double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }
}

public class Rectangle : Shape
{
    public double Length { get; set; }
    public double Width { get; set; }

    public Rectangle(double length, double width)
    {
        Length = length;
        Width = width;
    }

    // Implementing abstract method
    public override double CalculateArea()
    {
        return Length * Width;
    }
}

// Usage
public class Program
{
    public static void Main(string[] args)
    {
        Shape circle = new Circle(5);
        Shape rectangle = new Rectangle(4, 6);

        circle.Display();      // Output: The area is 78.53981633974483.
        rectangle.Display();   // Output: The area is 24.
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the abstract class <code>Shape</code> defines an abstract method, <code>CalculateArea</code>, which must be implemented by derived classes. The <code>Circle</code> and <code>Rectangle</code> classes provide specific implementations for calculating their respective areas. The <code>Display</code> method in the <code>Shape</code> class utilizes the abstract method, allowing for a unified way to display the area regardless of the shape type.
      </p>

      <!-- Access Modifiers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Access Modifiers</h2>
      <p class="text-base md:text-lg mb-4">
        Access modifiers control the visibility and accessibility of classes, methods, and other members in C#. They are crucial for implementing encapsulation and ensuring that the internal workings of a class are protected from unintended interference.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Types of Access Modifiers:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Public:</strong> The member is accessible from any other code in the same assembly or another assembly that references it.</li>
        <li><strong>Private:</strong> The member is accessible only within the body of the class or struct in which it is declared.</li>
        <li><strong>Protected:</strong> The member is accessible within its class and by derived class instances.</li>
        <li><strong>Internal:</strong> The member is accessible only within files in the same assembly.</li>
        <li><strong>Protected Internal:</strong> The member is accessible within its own assembly or from derived classes in another assembly.</li>
      </ul>
      <p class="text-base md:text-lg mb-4">
        <strong>Examples of Access Modifiers:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Access Modifiers
public class BankAccount
{
    // Public property
    public string AccountNumber { get; private set; }

    // Private field
    private double balance;

    // Protected property
    protected string Owner { get; set; }

    // Internal method
    internal void Deposit(double amount)
    {
        if (amount > 0)
        {
            balance += amount;
            Console.WriteLine($"Deposited: {amount}. New Balance: {balance}");
        }
    }

    // Constructor
    public BankAccount(string accountNumber, string owner)
    {
        AccountNumber = accountNumber;
        Owner = owner;
        balance = 0;
    }

    // Public method
    public void DisplayBalance()
    {
        Console.WriteLine($"Account Number: {AccountNumber}, Balance: {balance}");
    }
}

public class SavingsAccount : BankAccount
{
    public SavingsAccount(string accountNumber, string owner) : base(accountNumber, owner)
    {
    }

    // Accessing protected member
    public void ShowOwner()
    {
        Console.WriteLine($"Owner: {Owner}");
    }
}

// Usage
public class Program
{
    public static void Main(string[] args)
    {
        SavingsAccount savings = new SavingsAccount("SA123456", "John Doe");
        savings.Deposit(500);           // Output: Deposited: 500. New Balance: 500
        savings.DisplayBalance();       // Output: Account Number: SA123456, Balance: 500
        savings.ShowOwner();            // Output: Owner: John Doe

        // Attempting to access private set property (will cause a compile-time error)
        // savings.AccountNumber = "SA654321"; // Error: Cannot set property 'AccountNumber' outside the class
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>BankAccount</code> class utilizes various access modifiers to control the visibility of its members. The <code>AccountNumber</code> property is public but has a private setter, preventing external modification. The <code>balance</code> field is private, ensuring it can only be accessed within the class. The <code>Owner</code> property is protected, allowing derived classes like <code>SavingsAccount</code> to access it. The <code>Deposit</code> method is internal, restricting its access to within the same assembly.
      </p>

      <!-- Constructors and Destructors -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Constructors and Destructors</h2>
      <p class="text-base md:text-lg mb-4">
        Constructors and destructors are special methods in C# that manage the lifecycle of objects. Constructors initialize new instances of a class, while destructors perform cleanup operations before an object is destroyed.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong> Consider a house again. The constructor is like the process of building the house, setting up the foundation and structure. The destructor is akin to demolishing the house, ensuring that materials are disposed of properly.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>Constructors:</strong> Constructors are invoked when an object is created. They can be overloaded to provide multiple ways of initializing an object.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Constructors in the Person class
public class Person
{
    // Properties
    public string FirstName { get; set; }
    public string LastName { get; set; }

    // Default constructor
    public Person()
    {
        FirstName = "Unknown";
        LastName = "Unknown";
    }

    // Parameterized constructor
    public Person(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }

    // Method
    public void Introduce()
    {
        Console.WriteLine($"Hello, I'm {FirstName} {LastName}.");
    }

    // Destructor
    ~Person()
    {
        // Cleanup code if needed
        Console.WriteLine($"{FirstName} {LastName} is being destroyed.");
    }
}

// Usage
public class Program
{
    public static void Main(string[] args)
    {
        // Using default constructor
        Person person1 = new Person();
        person1.Introduce(); // Output: Hello, I'm Unknown Unknown.

        // Using parameterized constructor
        Person person2 = new Person("Alice", "Johnson");
        person2.Introduce(); // Output: Hello, I'm Alice Johnson.

        // Destructor will be called automatically when the garbage collector collects the objects
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the <code>Person</code> class has two constructors: a default constructor that initializes the <code>FirstName</code> and <code>LastName</code> properties to "Unknown," and a parameterized constructor that allows setting these properties to specific values upon object creation. The destructor is defined using the <code>~Person()</code> syntax and includes a message indicating when the object is being destroyed. Note that destructors are called by the garbage collector and should be used sparingly, primarily for releasing unmanaged resources.
      </p>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Object-Oriented Programming</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices in OOP ensures that your C# code is efficient, maintainable, and scalable. Here are some key guidelines to follow:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Single Responsibility Principle:</strong> Each class should have only one responsibility or reason to change. This enhances modularity and simplifies maintenance.</li>
        <li><strong>Use Meaningful Names:</strong> Choose descriptive and meaningful names for classes, methods, and properties to improve code readability.</li>
        <li><strong>Encapsulate Data:</strong> Use access modifiers to protect the internal state of objects, exposing only what is necessary through public properties and methods.</li>
        <li><strong>Favor Composition Over Inheritance:</strong> Where appropriate, use composition (building classes from other classes) instead of deep inheritance hierarchies to promote flexibility and reduce complexity.</li>
        <li><strong>Implement Interfaces:</strong> Use interfaces to define contracts for classes, enabling polymorphism and decoupling implementations from their usage.</li>
        <li><strong>Keep Classes Small:</strong> Smaller, focused classes are easier to understand, test, and maintain compared to large, monolithic classes.</li>
        <li><strong>Use Constructors Wisely:</strong> Initialize all necessary properties within constructors to ensure objects are in a valid state upon creation.</li>
        <li><strong>Avoid Magic Numbers and Strings:</strong> Use constants or enums instead of hardcoding values to make the code more maintainable and less error-prone.</li>
      </ul>

      <!-- Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Pitfalls to Avoid in OOP</h2>
      <p class="text-base md:text-lg mb-4">
        While OOP offers powerful tools for structuring code, improper use can lead to issues such as tight coupling, code duplication, and decreased performance. Here are some common pitfalls to watch out for:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Overusing Inheritance:</strong> Creating deep and complex inheritance hierarchies can make the codebase difficult to manage and understand. Prefer composition when appropriate.</li>
        <li><strong>Tight Coupling:</strong> Designing classes that are heavily dependent on each other reduces flexibility and makes maintenance challenging. Use interfaces and dependency injection to promote loose coupling.</li>
        <li><strong>Ignoring the Single Responsibility Principle:</strong> Classes that handle multiple responsibilities become hard to maintain and test. Ensure each class has a clear and focused purpose.</li>
        <li><strong>Exposing Internal State:</strong> Allowing direct access to internal fields can lead to unintended modifications and bugs. Use properties and methods to control access and enforce invariants.</li>
        <li><strong>Duplicate Code:</strong> Repeating similar code across multiple classes increases the risk of inconsistencies and makes updates cumbersome. Abstract common functionality into base classes or helper methods.</li>
        <li><strong>Not Utilizing Interfaces:</strong> Failing to define and implement interfaces limits the ability to leverage polymorphism and decoupling, reducing the flexibility of the codebase.</li>
        <li><strong>Overcomplicating Design:</strong> Adding unnecessary layers of abstraction or complexity can make the code harder to understand and maintain. Strive for simplicity and clarity in your designs.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Object-Oriented Programming is a fundamental paradigm in C#, offering a robust framework for building complex, scalable, and maintainable applications. By understanding and applying the core OOP principles—classes and objects, encapsulation, inheritance, polymorphism, and abstraction—you can design systems that are both efficient and easy to manage. Proper use of access modifiers, constructors, and destructors further enhances the structure and lifecycle management of your objects. Adhering to best practices and being mindful of common pitfalls ensures that your OOP designs remain clean, flexible, and robust. As you continue to explore and implement OOP in C#, these principles will serve as the foundation for developing sophisticated software solutions that stand the test of time.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSharpObjectOrientedProgramming',
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
