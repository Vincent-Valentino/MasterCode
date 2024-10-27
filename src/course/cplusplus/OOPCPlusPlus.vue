<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">OOP in C++</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to design applications and programs. C++ is renowned for its robust support of OOP, allowing developers to create modular, reusable, and maintainable code. This course delves into the core principles of OOP in C++, exploring classes, objects, inheritance, polymorphism, encapsulation, and abstraction, along with practical examples to solidify your understanding.
      </p>

      <!-- Why OOP in C++? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why OOP in C++?</h2>
      <p class="text-base md:text-lg mb-4">
        C++ offers comprehensive support for OOP, enabling developers to create complex and scalable software systems. The language's ability to blend procedural and object-oriented paradigms provides flexibility and control, making it ideal for both system-level programming and high-level application development.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Fun Fact:</strong> Bjarne Stroustrup, the creator of C++, designed it with OOP features to address the limitations of the C language, allowing for better code organization and reuse.
      </p>

      <!-- Core OOP Concepts -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Core OOP Concepts</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding the fundamental concepts of OOP is crucial for effective C++ programming. Here are the key principles:
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Concept</th>
          <th class="px-4 py-2">Description</th>
          <th class="px-4 py-2">Example</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">Classes</td>
          <td class="border px-4 py-2">Blueprints for creating objects, encapsulating data and functions.</td>
          <td class="border px-4 py-2">
            <code>
              class Car {<br />
              &nbsp;&nbsp;public:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;string brand;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;void honk() { cout &lt;&lt; "Beep beep!" &lt;&lt; endl; }<br />
              };
            </code>
          </td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Objects</td>
          <td class="border px-4 py-2">Instances of classes that hold actual data.</td>
          <td class="border px-4 py-2">
            <code>
              Car myCar;<br />
              myCar.brand = "Toyota";<br />
              myCar.honk();
            </code>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Inheritance</td>
          <td class="border px-4 py-2">Mechanism to create a new class based on an existing class.</td>
          <td class="border px-4 py-2">
            <code>
              class ElectricCar : public Car {<br />
              &nbsp;&nbsp;public:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;int batteryCapacity;<br />
              };
            </code>
          </td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Polymorphism</td>
          <td class="border px-4 py-2">Ability to process objects differently based on their data type or class.</td>
          <td class="border px-4 py-2">
            <code>
              void makeSound(Car &c) { c.honk(); }<br />
              ElectricCar ec;<br />
              makeSound(ec); // Calls honk() from Car
            </code>
          </td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">Encapsulation</td>
          <td class="border px-4 py-2">Bundling data and methods within a class, restricting direct access.</td>
          <td class="border px-4 py-2">
            <code>
              class BankAccount {<br />
              &nbsp;&nbsp;private:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;double balance;<br />
              &nbsp;&nbsp;public:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;void deposit(double amount) { balance += amount; }<br />
              };
            </code>
          </td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">Abstraction</td>
          <td class="border px-4 py-2">Hiding complex implementation details and showing only necessary features.</td>
          <td class="border px-4 py-2">
            <code>
              class Shape {<br />
              &nbsp;&nbsp;public:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;virtual double area() = 0;<br />
              };<br />
              class Circle : public Shape {<br />
              &nbsp;&nbsp;public:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;double radius;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;double area() override { return 3.14159 * radius * radius; }<br />
              };
            </code>
          </td>
        </tr>
        </tbody>
      </table>

      <!-- Constructors and Destructors -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Constructors and Destructors</h2>
      <p class="text-base md:text-lg mb-4">
        Constructors are special class functions that are called when an object is instantiated. Destructors are invoked when an object is destroyed, allowing for clean-up tasks.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>
class Person {
public:
    string name;
    int age;

    // Constructor
    Person(string n, int a) {
        name = n;
        age = a;
    }

    // Destructor
    ~Person() {
        cout &lt;&lt; name << " is being destroyed." &lt;&lt; endl;
    }
};
      </code></pre>

      <!-- Access Specifiers -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Access Specifiers</h2>
      <p class="text-base md:text-lg mb-4">
        Access specifiers define the accessibility of class members. C++ has three main access specifiers:
      </p>
      <table class="min-w-full table-auto mb-6 overflow-x-auto">
        <thead>
        <tr class="bg-gray-200">
          <th class="px-4 py-2">Specifier</th>
          <th class="px-4 py-2">Description</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="border px-4 py-2 font-semibold">public</td>
          <td class="border px-4 py-2">Members are accessible from outside the class.</td>
        </tr>
        <tr class="bg-gray-100">
          <td class="border px-4 py-2 font-semibold">private</td>
          <td class="border px-4 py-2">Members are accessible only within the class.</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 font-semibold">protected</td>
          <td class="border px-4 py-2">Members are accessible within the class and its derived classes.</td>
        </tr>
        </tbody>
      </table>

      <!-- Member Functions and Variables -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Member Functions and Variables</h2>
      <p class="text-base md:text-lg mb-4">
        Member variables store the state of an object, while member functions define the behavior. Proper use of member functions and variables is key to effective OOP.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>
class Rectangle {
public:
    double width;
    double height;

    // Member function to calculate area
    double area() {
        return width * height;
    }
};

int main() {
    Rectangle rect;
    rect.width = 5.0;
    rect.height = 3.0;
    cout &lt;&lt; "Area: " &lt;&lt; rect.area() &lt;&lt; endl;
    return 0;
}
      </code></pre>

      <!-- Friend Functions and Classes -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Friend Functions and Classes</h2>
      <p class="text-base md:text-lg mb-4">
        Friend functions and classes can access the private and protected members of a class, providing flexibility in certain scenarios.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>
class Box {
private:
    double width;

public:
    Box(double w) : width(w) {}

    // Friend function
    friend void printWidth(Box b);
};

// Friend function definition
void printWidth(Box b) {
    cout &lt;&lt; "Width: " &lt;&lt; b.width &lt;&lt; endl;
}

int main() {
    Box box(10.5);
    printWidth(box);
    return 0;
}
      </code></pre>

      <!-- Operator Overloading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Operator Overloading</h2>
      <p class="text-base md:text-lg mb-4">
        Operator overloading allows you to redefine the way operators work for user-defined types, enhancing the readability and functionality of your classes.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>
class Complex {
public:
    double real;
    double imag;

    Complex(double r, double i) : real(r), imag(i) {}

    // Overloading the + operator
    Complex operator + (const Complex &c) {
        return Complex(real + c.real, imag + c.imag);
    }
};

int main() {
    Complex c1(1.2, 3.4);
    Complex c2(5.6, 7.8);
    Complex c3 = c1 + c2;
    cout &lt;&lt; "Sum: " &lt;&lt; c3.real &lt;&lt; " + " &lt;&lt; c3.imag &lt;&lt; "i" &lt;&lt; endl;
    return 0;
}
      </code></pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Encapsulation:</strong> Keep data members private and provide public getter and setter functions.</li>
        <li><strong>Single Responsibility:</strong> Each class should have a single responsibility or purpose.</li>
        <li><strong>Consistent Naming:</strong> Use clear and consistent naming conventions for classes, functions, and variables.</li>
        <li><strong>Minimize Friend Usage:</strong> Use friend functions and classes sparingly to maintain encapsulation.</li>
        <li><strong>Proper Use of Inheritance:</strong> Use inheritance only when there is a clear "is-a" relationship.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        You’ve now explored the essential concepts of Object-Oriented Programming in C++. By understanding classes, objects, inheritance, polymorphism, encapsulation, and operator overloading, you can create well-structured and maintainable code. Mastering OOP principles is a significant step towards becoming a proficient C++ developer. In the next course, we’ll delve deeper into advanced C++ topics to further enhance your programming skills.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CppOOP',
};
</script>

<style scoped>
pre {
  white-space: pre-wrap; /* Ensures text wrapping for long lines */
  overflow-x: auto;      /* Adds horizontal scroll for long code lines */
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem; /* Smaller font size for mobile devices */
  }
}
</style>
