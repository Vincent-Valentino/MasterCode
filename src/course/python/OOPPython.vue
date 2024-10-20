<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Object Oriented Programming in Python" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Introduction to Object-Oriented Programming (OOP)</h2>
      <p class="text-base md:text-lg mb-6">
        Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior. OOP focuses on the objects that developers want to manipulate rather than the logic required to manipulate them.
      </p>
      <p class="text-base md:text-lg mb-6">
        The main concepts of OOP are:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Encapsulation: Bundling data and methods that operate on that data within a single unit (class).</li>
        <li>Inheritance: A mechanism that allows a new class to be based on an existing class.</li>
        <li>Polymorphism: The ability of different classes to be treated as instances of the same class through inheritance.</li>
        <li>Abstraction: Hiding complex implementation details and showing only the necessary features of an object.</li>
      </ul>

      <h3 class="text-lg md:text-xl font-semibold mb-2">Why OOP is Important</h3>
      <p class="text-base md:text-lg mb-6">
        OOP is crucial in modern software development for several reasons:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Modularity: OOP allows you to break down your software into bite-sized problems that you can solve one at a time.</li>
        <li>Reusability: Through inheritance, you can reuse code you've already written.</li>
        <li>Flexibility and scalability: OOP makes it easier to maintain and modify existing code as projects become larger.</li>
        <li>Security: The principle of data hiding provides greater program security, protecting information from unauthorized access.</li>
        <li>Modeling real-world problems: OOP allows you to model real-world scenarios more effectively, as many things in life can be viewed as objects with attributes and behaviors.</li>
      </ul>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#encapsulation" class="text-blue-800 underline">Encapsulation</a></li>
        <li><a href="#inheritance" class="text-blue-800 underline">Inheritance</a></li>
        <li><a href="#polymorphism" class="text-blue-800 underline">Polymorphism</a></li>
        <li><a href="#abstraction" class="text-blue-800 underline">Abstraction</a></li>
      </ul>

      <!-- Encapsulation -->
      <h2 id="encapsulation" class="text-xl md:text-2xl font-semibold mb-4">1. Encapsulation</h2>
      <p class="text-base md:text-lg mb-4">
        Encapsulation is the bundling of data and the methods that operate on that data within a single unit, or object. This concept is also often used to hide the internal representation, or state, of an object from the outside. This is called information hiding.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ encapsulationCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Encapsulation provides several benefits:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Data protection: The internal representation of an object is hidden from the outside world.</li>
        <li>Flexibility: You can change the implementation without affecting the code that uses the class.</li>
        <li>Reusability: Encapsulated code can be reused easily.</li>
      </ul>

      <!-- Inheritance -->
      <h2 id="inheritance" class="text-xl md:text-2xl font-semibold mb-4">2. Inheritance</h2>
      <p class="text-base md:text-lg mb-4">
        Inheritance is a mechanism that allows a new class to be based on an existing class. The new class inherits attributes and methods from the existing class, allowing for code reuse and the creation of hierarchical relationships between classes.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ inheritanceCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Inheritance provides several advantages:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Code reusability: You can reuse code from the parent class in the child class.</li>
        <li>Method overriding: You can redefine methods in the child class that are already defined in the parent class.</li>
        <li>Extensibility: You can add new features to a class without modifying it.</li>
      </ul>

      <!-- Polymorphism -->
      <h2 id="polymorphism" class="text-xl md:text-2xl font-semibold mb-4">3. Polymorphism</h2>
      <p class="text-base md:text-lg mb-4">
        Polymorphism allows objects of different classes to be treated as objects of a common base class. It provides a way to perform a single action in different forms and allows you to invoke methods of derived classes through base class references during runtime.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ polymorphismCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Polymorphism offers several benefits:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Flexibility: It allows you to write code that doesn't depend on the specific type of object.</li>
        <li>Extensibility: You can add new classes without changing the code that uses the base class.</li>
        <li>Simplicity: It simplifies the programming interface.</li>
      </ul>

      <!-- Abstraction -->
      <h2 id="abstraction" class="text-xl md:text-2xl font-semibold mb-4">4. Abstraction</h2>
      <p class="text-base md:text-lg mb-4">
        Abstraction is the process of hiding the complex implementation details and showing only the necessary features of an object. It helps in reducing programming complexity and effort.
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-python">{{ abstractionCode }}</code></pre>
      </div>
      <p class="text-base md:text-lg mb-4">
        Abstraction provides several advantages:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Simplicity: It reduces complexity by hiding unnecessary details.</li>
        <li>Modularity: It allows you to focus on core functionality.</li>
        <li>Reusability: Abstract classes can be reused in multiple contexts.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Object-Oriented Programming is a powerful paradigm that provides a clear structure for programs, allowing for code reuse, modularity, and flexibility. By understanding and applying the four main pillars of OOP - Encapsulation, Inheritance, Polymorphism, and Abstraction - you can create more efficient, maintainable, and scalable Python programs.
      </p>
      <p class="text-base md:text-lg">
        As you continue to develop your Python skills, remember that mastering OOP concepts will greatly enhance your ability to design and implement complex software systems.
      </p>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue"
export default {
  name: "PythonOOP",
  components: {
    Header
  },
  data() {
    return {
      encapsulationCode: `
class BankAccount:
    def __init__(self, account_number, balance):
        self.__account_number = account_number  # Private attribute
        self.__balance = balance  # Private attribute

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False

    def withdraw(self, amount):
        if 0 < amount <= self.__balance:
            self.__balance -= amount
            return True
        return False

    def get_balance(self):
        return self.__balance

# Usage
account = BankAccount("1234567890", 1000)
account.deposit(500)
account.withdraw(200)
print(account.get_balance())  # Output: 1300
# print(account.__balance)  # This would raise an AttributeError
`,
      inheritanceCode: `
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        pass

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

# Usage
dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Output: Buddy says Woof!
print(cat.speak())  # Output: Whiskers says Meow!
`,
      polymorphismCode: `
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

# Usage
shapes = [Rectangle(5, 3), Circle(2)]

for shape in shapes:
    print(f"Area: {shape.area()}")

# Output:
# Area: 15
# Area: 12.56
`,
      abstractionCode: `
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start_engine(self):
        pass

    @abstractmethod
    def stop_engine(self):
        pass

class Car(Vehicle):
    def start_engine(self):
        return "Car engine started"

    def stop_engine(self):
        return "Car engine stopped"

class Motorcycle(Vehicle):
    def start_engine(self):
        return "Motorcycle engine started"

    def stop_engine(self):
        return "Motorcycle engine stopped"

# Usage
car = Car()
motorcycle = Motorcycle()

print(car.start_engine())  # Output: Car engine started
print(motorcycle.stop_engine())  # Output: Motorcycle engine stopped

# vehicle = Vehicle()  # This would raise TypeError: Can't instantiate abstract class Vehicle
`,
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