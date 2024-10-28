<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Java Exception Handling" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Exception handling is a critical aspect of Java programming that ensures robust and error-resistant applications. By effectively managing runtime errors, developers can maintain the normal flow of application execution, provide meaningful feedback to users, and prevent unexpected crashes. This section delves into the fundamentals of exception handling in Java, exploring various types of exceptions, mechanisms for handling them, and best practices to follow.
      </p>

      <!-- What are Exceptions? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What are Exceptions?</h2>
      <p class="text-base md:text-lg mb-4">
        Exceptions are events that disrupt the normal flow of a program's execution. They occur when an error arises during the execution of a program, such as dividing by zero or attempting to access an invalid index in an array. Java provides a structured way to handle these exceptions, ensuring that programs can recover gracefully from unexpected situations.
      </p>

      <!-- Types of Exceptions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Types of Exceptions</h2>
      <p class="text-base md:text-lg mb-4">
        Java categorizes exceptions into three main types: Checked Exceptions, Unchecked Exceptions, and Errors. Understanding these categories is essential for effective exception handling.
      </p>

      <!-- Checked Exceptions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Checked Exceptions</h3>
      <p class="text-base md:text-lg mb-4">
        Checked exceptions are exceptions that are checked at compile-time. These exceptions must be either caught using a try-catch block or declared in the method signature using the <code>throws</code> keyword. They typically represent conditions that a reasonable application might want to catch and handle.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example of Checked Exception
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class CheckedExceptionExample {
    public static void main(String[] args) {
        try {
            File file = new File("nonexistentfile.txt");
            Scanner scanner = new Scanner(file);
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        }
    }
}
</code>
      </pre>

      <!-- Unchecked Exceptions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Unchecked Exceptions</h3>
      <p class="text-base md:text-lg mb-4">
        Unchecked exceptions are exceptions that are not checked at compile-time. They are subclasses of <code>RuntimeException</code> and typically represent programming errors, such as logic mistakes or improper use of an API.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example of Unchecked Exception
public class UncheckedExceptionExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};
        // This will throw ArrayIndexOutOfBoundsException
        System.out.println(numbers[5]);
    }
}
</code>
      </pre>

      <!-- Errors -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Errors</h3>
      <p class="text-base md:text-lg mb-4">
        Errors are serious issues that applications are not expected to handle. They are subclasses of <code>Error</code> and typically indicate problems with the JVM itself, such as <code>OutOfMemoryError</code> or <code>StackOverflowError</code>.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example of Error (Do not catch Errors)
public class ErrorExample {
    public static void main(String[] args) {
        // This will cause StackOverflowError
        recursiveMethod();
    }

    public static void recursiveMethod() {
        recursiveMethod();
    }
}
</code>
      </pre>

      <!-- Handling Exceptions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Handling Exceptions</h2>
      <p class="text-base md:text-lg mb-4">
        Java provides several mechanisms to handle exceptions, ensuring that programs can respond appropriately to error conditions without terminating unexpectedly.
      </p>

      <!-- try-catch Block -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">try-catch Block</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>try-catch</code> block is the most common way to handle exceptions. Code that might throw an exception is placed inside the <code>try</code> block, and the <code>catch</code> block handles the exception.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example of try-catch
public class TryCatchExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // This will throw ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage());
        }
    }
}
</code>
      </pre>

      <!-- finally Block -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">finally Block</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>finally</code> block contains code that is always executed, regardless of whether an exception was thrown or caught. It is typically used for resource cleanup, such as closing files or releasing connections.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example of try-catch-finally
public class FinallyExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // Throws ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Invalid index access: " + e.getMessage());
        } finally {
            System.out.println("Execution of finally block.");
        }
    }
}
</code>
      </pre>

      <!-- throw and throws -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">throw and throws</h2>
      <p class="text-base md:text-lg mb-4">
        Java provides the <code>throw</code> and <code>throws</code> keywords to explicitly throw exceptions and declare them in method signatures, respectively.
      </p>

      <!-- throw Keyword -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">throw Keyword</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>throw</code> keyword is used to explicitly throw an exception from a method or any block of code.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example of throw
public class ThrowExample {
    public static void validateAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be at least 18.");
        }
        System.out.println("Age is valid.");
    }

    public static void main(String[] args) {
        validateAge(16); // This will throw IllegalArgumentException
    }
}
</code>
      </pre>

      <!-- throws Keyword -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">throws Keyword</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>throws</code> keyword is used in a method signature to declare that the method might throw certain exceptions, allowing the caller to handle them.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example of throws
import java.io.IOException;

public class ThrowsExample {
    public static void readFile(String filePath) throws IOException {
        FileReader reader = new FileReader(filePath); // May throw FileNotFoundException
    }

    public static void main(String[] args) {
        try {
            readFile("nonexistentfile.txt");
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
</code>
      </pre>

      <!-- Custom Exceptions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Custom Exceptions</h2>
      <p class="text-base md:text-lg mb-4">
        Creating custom exceptions allows developers to define specific error conditions tailored to their application's needs, enhancing clarity and error handling precision.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example of Custom Exception
// Defining a custom exception
public class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

// Using the custom exception
public class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("Insufficient funds for withdrawal.");
        }
        balance -= amount;
        System.out.println("Withdrawal successful. Remaining balance: " + balance);
    }

    public static void main(String[] args) {
        BankAccount account = new BankAccount(100.0);
        try {
            account.withdraw(150.0);
        } catch (InsufficientFundsException e) {
            System.out.println("Transaction failed: " + e.getMessage());
        }
    }
}
</code>
      </pre>

      <!-- try-with-resources -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">try-with-resources</h2>
      <p class="text-base md:text-lg mb-4">
        Introduced in Java 7, the try-with-resources statement ensures that each resource is closed automatically at the end of the statement. Resources must implement the <code>AutoCloseable</code> interface.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example of try-with-resources
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
            String line = reader.readLine();
            System.out.println(line);
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
</code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Exception Handling</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices in exception handling ensures that your Java applications are robust, maintainable, and user-friendly. Here are some recommended guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Use Specific Exceptions:</strong> Catch and throw specific exceptions rather than generic ones to provide clearer context and facilitate targeted handling.</li>
        <li><strong>Don’t Suppress Exceptions:</strong> Avoid empty catch blocks. Always handle exceptions appropriately or rethrow them to higher layers.</li>
        <li><strong>Clean Up Resources:</strong> Ensure that all resources are closed properly, preferably using try-with-resources.</li>
        <li><strong>Provide Meaningful Messages:</strong> When throwing exceptions, include clear and informative messages to aid in debugging.</li>
        <li><strong>Avoid Using Exceptions for Control Flow:</strong> Exceptions should represent truly exceptional conditions, not regular control flow mechanisms.</li>
        <li><strong>Log Exceptions:</strong> Log exceptions using a logging framework to maintain a record of errors for analysis and troubleshooting.</li>
        <li><strong>Document Exceptions:</strong> Clearly document the exceptions that methods can throw, especially in public APIs, to inform users of potential error conditions.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        Effective exception handling is paramount for building reliable and user-friendly Java applications. By understanding the different types of exceptions, utilizing try-catch blocks, creating custom exceptions, and following best practices, developers can ensure that their programs handle errors gracefully and maintain smooth execution. Mastery of exception handling not only enhances application stability but also contributes to better code quality and maintainability.
      </p>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of exception handling in Java, explore the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://docs.oracle.com/javase/tutorial/essential/exceptions/" class="text-blue-600 hover:underline">Java Tutorials: Exceptions</a>
        </li>
        <li>
          <a href="https://www.geeksforgeeks.org/java-exception-handling/" class="text-blue-600 hover:underline">GeeksforGeeks: Exception Handling in Java</a>
        </li>
        <li>
          <a href="https://www.javatpoint.com/exception-handling" class="text-blue-600 hover:underline">JavaTpoint: Exception Handling</a>
        </li>
        <li>
          <a href="https://www.baeldung.com/java-exceptions" class="text-blue-600 hover:underline">Baeldung: Guide to Java Exceptions</a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/java-exception-handling/" class="text-blue-600 hover:underline">Udemy: Java Exception Handling Courses</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaExceptionHandling',
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
