<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-2 bg-blue-600 rounded-t-xl p-4">
      <img src="/csharp/logo.png" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Exception Handling in C#</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        In the realm of software development, errors and unexpected scenarios are inevitable. Whether due to user input errors, system failures, or unforeseen circumstances, applications must be equipped to handle these anomalies gracefully to maintain robustness and ensure a smooth user experience. **Exception handling** in C# provides a structured way to detect, manage, and respond to runtime errors, preventing applications from crashing and allowing developers to implement recovery mechanisms.
      </p>

      <!-- Understanding Exceptions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Understanding Exceptions</h2>
      <p class="text-base md:text-lg mb-4">
        An **exception** is an event that occurs during the execution of a program, disrupting the normal flow of instructions. When an error occurs, an exception object is created and thrown, signaling that something went wrong. If not properly handled, exceptions can cause the application to terminate unexpectedly.
      </p>
      <p class="text-base md:text-lg mb-6">
        **Common Exceptions in C#:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>NullReferenceException</strong>: Thrown when attempting to use a reference variable that is <code>null</code>.</li>
        <li><strong>IndexOutOfRangeException</strong>: Thrown when accessing an array or collection with an invalid index.</li>
        <li><strong>InvalidOperationException</strong>: Thrown when a method call is invalid for the object's current state.</li>
        <li><strong>DivideByZeroException</strong>: Thrown when attempting to divide an integer by zero.</li>
        <li><strong>FileNotFoundException</strong>: Thrown when trying to access a file that does not exist.</li>
      </ul>

      <!-- Try-Catch-Finally Blocks -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Try-Catch-Finally Blocks</h2>
      <p class="text-base md:text-lg mb-4">
        The primary mechanism for exception handling in C# involves the use of <code>try</code>, <code>catch</code>, and <code>finally</code> blocks. This structure allows developers to attempt risky operations (<code>try</code>), handle any exceptions that arise (<code>catch</code>), and execute cleanup code regardless of whether an exception was thrown (<code>finally</code>).
      </p>

      <!-- Structure of Try-Catch-Finally -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Structure of Try-Catch-Finally</h3>
      <p class="text-base md:text-lg mb-6">
        ```csharp
        try
        {
            // Code that may cause an exception
        }
        catch (ExceptionType1 ex1)
        {
            // Handle ExceptionType1
        }
        catch (ExceptionType2 ex2)
        {
            // Handle ExceptionType2
        }
        finally
        {
            // Code that runs regardless of whether an exception occurred
        }
        ```
      </p>

      <!-- Example: Using Try-Catch-Finally -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Using Try-Catch-Finally</h3>
      <p class="text-base md:text-lg mb-4">
        Let's consider a scenario where we attempt to read a number from the user and divide 100 by that number.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using Try-Catch-Finally to handle division errors
using System;

public class ExceptionHandlingExample
{
    public static void Main(string[] args)
    {
        try
        {
            Console.Write("Enter a number to divide 100 by: ");
            string input = Console.ReadLine();
            int divisor = int.Parse(input); // May throw FormatException or OverflowException

            int result = 100 / divisor; // May throw DivideByZeroException
            Console.WriteLine($"Result: {result}");
        }
        catch (FormatException ex)
        {
            Console.WriteLine("Input was not a valid number.");
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine("Cannot divide by zero.");
        }
        catch (Exception ex)
        {
            // General exception handler for any other exceptions
            Console.WriteLine($"An unexpected error occurred: {ex.Message}");
        }
        finally
        {
            Console.WriteLine("Operation completed.");
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Try Block</strong>: Attempts to execute code that may throw exceptions. In this example, it parses user input and performs a division operation.
        </li>
        <li>
          <strong>Catch Blocks</strong>: Handle specific exceptions. The first <code>catch</code> handles <code>FormatException</code> if the input is not a valid number, the second handles <code>DivideByZeroException</code> if the user enters zero, and the third catches any other unforeseen exceptions.
        </li>
        <li>
          <strong>Finally Block</strong>: Executes code regardless of whether an exception was thrown, typically used for cleanup operations. Here, it simply prints a completion message.
        </li>
      </ul>

      <!-- Throwing Exceptions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Throwing Exceptions</h2>
      <p class="text-base md:text-lg mb-4">
        While C# provides built-in exceptions, developers can also **throw exceptions** intentionally to signal error conditions in their applications. This is useful when validating input, enforcing business rules, or signaling unexpected states.
      </p>

      <!-- Using the throw Keyword -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using the throw Keyword</h3>
      <p class="text-base md:text-lg mb-6">
        ```csharp
        throw new ExceptionType("Error message");
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        - <strong>ExceptionType</strong>: The type of exception to throw (e.g., <code>ArgumentException</code>, <code>InvalidOperationException</code>).
        <br>
        - <strong>"Error message"</strong>: A descriptive message explaining the error.
      </p>

      <!-- Example: Throwing an Exception -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Throwing an Exception</h3>
      <p class="text-base md:text-lg mb-4">
        Consider a method that calculates the square root of a number. If a negative number is passed, it throws an <code>ArgumentException</code>.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Throwing an ArgumentException for invalid input
using System;

public class MathOperations
{
    public static double CalculateSquareRoot(double number)
    {
        if (number < 0)
        {
            throw new ArgumentException("Cannot calculate the square root of a negative number.");
        }
        return Math.Sqrt(number);
    }

    public static void Main(string[] args)
    {
        try
        {
            Console.Write("Enter a number to calculate its square root: ");
            double num = double.Parse(Console.ReadLine());
            double sqrt = CalculateSquareRoot(num);
            Console.WriteLine($"Square root of {num} is {sqrt}");
        }
        catch (ArgumentException ex)
        {
            Console.WriteLine($"Input error: {ex.Message}");
        }
        catch (FormatException ex)
        {
            Console.WriteLine("Invalid input. Please enter a numerical value.");
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>CalculateSquareRoot Method</strong>: Checks if the input number is negative. If so, it throws an <code>ArgumentException</code> with a descriptive message. Otherwise, it returns the square root of the number.
        </li>
        <li>
          <strong>Main Method</strong>: Prompts the user to enter a number, attempts to parse and calculate the square root, and catches both <code>ArgumentException</code> and <code>FormatException</code> to handle invalid inputs and formatting errors respectively.
        </li>
      </ul>

      <!-- Custom Exceptions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Custom Exceptions</h2>
      <p class="text-base md:text-lg mb-4">
        Sometimes, the built-in exceptions are insufficient to represent specific error conditions in your application. In such cases, creating **custom exception classes** provides more clarity and control over error handling.
      </p>

      <!-- Creating a Custom Exception -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Creating a Custom Exception</h3>
      <p class="text-base md:text-lg mb-6">
        To create a custom exception:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>Inherit from the <code>Exception</code> class or one of its derived classes.</li>
        <li>Implement constructors that mirror the base class constructors.</li>
      </ul>

      <!-- Example: Creating and Using a Custom Exception -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Creating and Using a Custom Exception</h3>
      <p class="text-base md:text-lg mb-4">
        Let's create a custom exception called <code>InsufficientFundsException</code> for a banking application.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Creating and using a custom InsufficientFundsException
using System;

public class InsufficientFundsException : Exception
{
    public double CurrentBalance { get; private set; }
    public double AmountAttempted { get; private set; }

    public InsufficientFundsException()
    {
    }

    public InsufficientFundsException(string message) : base(message)
    {
    }

    public InsufficientFundsException(string message, double currentBalance, double amountAttempted)
        : base(message)
    {
        CurrentBalance = currentBalance;
        AmountAttempted = amountAttempted;
    }
}

public class BankAccount
{
    public string AccountHolder { get; set; }
    public double Balance { get; private set; }

    public BankAccount(string holder, double initialBalance)
    {
        AccountHolder = holder;
        Balance = initialBalance;
    }

    public void Withdraw(double amount)
    {
        if (amount > Balance)
        {
            throw new InsufficientFundsException(
                "Withdrawal amount exceeds current balance.",
                Balance,
                amount);
        }
        Balance -= amount;
        Console.WriteLine($"Withdrawal successful. New balance: {Balance}");
    }
}

public class CustomExceptionDemo
{
    public static void Main(string[] args)
    {
        BankAccount account = new BankAccount("Alice", 500);

        try
        {
            Console.Write("Enter amount to withdraw: ");
            double withdrawalAmount = double.Parse(Console.ReadLine());
            account.Withdraw(withdrawalAmount);
        }
        catch (InsufficientFundsException ex)
        {
            Console.WriteLine($"Error: {ex.Message}");
            Console.WriteLine($"Current Balance: {ex.CurrentBalance}");
            Console.WriteLine($"Attempted Withdrawal: {ex.AmountAttempted}");
        }
        catch (FormatException ex)
        {
            Console.WriteLine("Invalid input. Age must be a number.");
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>InsufficientFundsException Class</strong>: Inherits from <code>Exception</code> and includes additional properties to store the current balance and the attempted withdrawal amount. Multiple constructors provide flexibility in throwing the exception with different levels of detail.
        </li>
        <li>
          <strong>BankAccount Class</strong>: Represents a simple bank account with a method to withdraw funds. If the withdrawal amount exceeds the current balance, it throws an <code>InsufficientFundsException</code>.
        </li>
        <li>
          <strong>CustomExceptionDemo Class</strong>: Creates a <code>BankAccount</code> instance, prompts the user to enter a withdrawal amount, and attempts to withdraw. It catches and handles both the custom <code>InsufficientFundsException</code> and <code>FormatException</code> for invalid inputs.
        </li>
      </ul>

      <!-- Best Practices in Exception Handling -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices in Exception Handling</h2>
      <p class="text-base md:text-lg mb-4">
        Effective exception handling is crucial for building resilient applications. Here are some best practices to consider:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Catch Specific Exceptions</strong>: Always catch the most specific exception first before catching general exceptions. This ensures that each exception is handled appropriately.</li>
        <li><strong>Avoid Catching General Exceptions Unnecessarily</strong>: Catching the base <code>Exception</code> class can inadvertently swallow important exceptions. Only use it when you have a good reason to handle all exceptions.</li>
        <li><strong>Use Finally Blocks for Cleanup</strong>: Use the <code>finally</code> block to release resources, such as closing files or database connections, ensuring that cleanup code runs regardless of whether an exception was thrown.</li>
        <li><strong>Throw Exceptions Thoughtfully</strong>: Only throw exceptions to indicate truly exceptional conditions. Avoid using exceptions for regular control flow.</li>
        <li><strong>Provide Meaningful Error Messages</strong>: Ensure that exception messages are clear and provide enough context to understand the issue.</li>
        <li><strong>Log Exceptions</strong>: Implement logging to record exception details. This is invaluable for diagnosing issues in production environments.</li>
        <li><strong>Create Custom Exceptions When Necessary</strong>: For domain-specific error conditions, creating custom exceptions can provide more precise error handling and improve code clarity.</li>
        <li><strong>Validate Inputs</strong>: Prevent exceptions by validating user inputs and data before processing them.</li>
        <li><strong>Avoid Using Exceptions for Control Flow</strong>: Exceptions should be used for exceptional conditions, not for regular control flow.</li>
      </ul>

      <!-- Common Exceptions and How to Avoid Them -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Exceptions and How to Avoid Them</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding common exceptions and strategies to prevent them is vital for writing robust C# applications.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>NullReferenceException</strong>: Attempting to access members of a <code>null</code> object.
          <ul class="list-disc list-inside text-base md:text-lg mb-6">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Initialize objects before use.</li>
                <li>Use null-conditional operators (<code>?.</code>) introduced in C# 6.0.</li>
                <li>Implement null checks.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>IndexOutOfRangeException</strong>: Accessing an array or collection with an invalid index.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Ensure indices are within valid bounds.</li>
                <li>Use collection properties like <code>Count</code> or <code>Length</code> to validate indices.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>FormatException</strong>: Invalid format when converting between data types.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Validate input formats before parsing.</li>
                <li>Use <code>TryParse</code> methods that return a boolean indicating success.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>DivideByZeroException</strong>: Attempting to divide an integer by zero.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Check if the divisor is zero before performing division.</li>
                <li>Use exception handling as a last resort.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>FileNotFoundException</strong>: Attempting to access a file that does not exist.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Check if the file exists using <code>File.Exists</code> before accessing it.</li>
                <li>Handle exceptions gracefully.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>InvalidOperationException</strong>: Calling a method in an inappropriate state.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Ensure that objects are in a valid state before invoking methods.</li>
                <li>Implement state checks within methods.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Code Examples: Demonstrating Try-Catch Blocks and Custom Exceptions -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Code Examples: Demonstrating Try-Catch Blocks and Custom Exceptions</h2>
      <p class="text-base md:text-lg mb-4">
        Below are practical examples that illustrate the use of try-catch blocks and the implementation of custom exceptions in C#.
      </p>

      <!-- Example 1: Handling Division Errors with Try-Catch -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 1: Handling Division Errors with Try-Catch</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates how to handle division errors using try-catch blocks to manage <code>FormatException</code> and <code>DivideByZeroException</code>.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Handling division errors with try-catch
using System;

public class DivisionExample
{
    public static void Main(string[] args)
    {
        try
        {
            Console.Write("Enter the dividend: ");
            int dividend = int.Parse(Console.ReadLine());

            Console.Write("Enter the divisor: ");
            int divisor = int.Parse(Console.ReadLine());

            int quotient = dividend / divisor; // May throw DivideByZeroException
            Console.WriteLine($"Result: {quotient}");
        }
        catch (FormatException ex)
        {
            Console.WriteLine("Invalid input. Please enter numerical values.");
        }
        catch (DivideByZeroException ex)
        {
            Console.WriteLine("Error: Division by zero is not allowed.");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"An unexpected error occurred: {ex.Message}");
        }
        finally
        {
            Console.WriteLine("Division operation completed.");
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Sample Output:**
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Successful Division
Enter the dividend: 100
Enter the divisor: 25
Result: 4
Division operation completed.

// Division by Zero
Enter the dividend: 100
Enter the divisor: 0
Error: Division by zero is not allowed.
Division operation completed.

// Invalid Input
Enter the dividend: one hundred
Invalid input. Please enter numerical values.
Division operation completed.
</code>
      </pre>

      <!-- Example 2: Creating and Throwing a Custom Exception -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 2: Creating and Throwing a Custom Exception</h3>
      <p class="text-base md:text-lg mb-4">
        This example showcases how to create a custom exception <code>InvalidAgeException</code> to handle invalid age inputs in a <code>Person</code> class.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Creating and throwing a custom InvalidAgeException
using System;

public class InvalidAgeException : Exception
{
    public InvalidAgeException()
    {
    }

    public InvalidAgeException(string message) : base(message)
    {
    }

    public InvalidAgeException(string message, Exception inner) : base(message, inner)
    {
    }
}

public class Person
{
    public string Name { get; set; }
    private int age;

    public int Age
    {
        get { return age; }
        set
        {
            if (value < 0 || value > 150)
            {
                throw new InvalidAgeException("Age must be between 0 and 150.");
            }
            age = value;
        }
    }
}

public class CustomExceptionDemo
{
    public static void Main(string[] args)
    {
        Person person = new Person();

        try
        {
            Console.Write("Enter your name: ");
            person.Name = Console.ReadLine();

            Console.Write("Enter your age: ");
            person.Age = int.Parse(Console.ReadLine());

            Console.WriteLine($"Name: {person.Name}, Age: {person.Age}");
        }
        catch (InvalidAgeException ex)
        {
            Console.WriteLine($"Age Error: {ex.Message}");
        }
        catch (FormatException ex)
        {
            Console.WriteLine("Invalid input. Age must be a number.");
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>InvalidAgeException Class</strong>: Inherits from <code>Exception</code> and provides constructors for different exception initialization scenarios.
        </li>
        <li>
          <strong>Person Class</strong>: Contains a <code>Name</code> property and an <code>Age</code> property. The setter for <code>Age</code> validates the input and throws an <code>InvalidAgeException</code> if the age is outside the acceptable range.
        </li>
        <li>
          <strong>CustomExceptionDemo Class</strong>: Creates a <code>Person</code> instance, prompts the user for input, and attempts to set the <code>Age</code> property. It catches and handles both <code>InvalidAgeException</code> and <code>FormatException</code>.
        </li>
      </ul>

      <!-- Best Practices in Exception Handling -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices in Exception Handling</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices in exception handling ensures that your applications are resilient, maintainable, and user-friendly. Here are some key guidelines:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Catch Specific Exceptions</strong>: Always catch the most specific exception first before catching general exceptions. This ensures that each exception is handled appropriately.</li>
        <li><strong>Avoid Catching General Exceptions Unnecessarily</strong>: Catching the base <code>Exception</code> class can inadvertently swallow important exceptions. Only use it when you have a good reason to handle all exceptions.</li>
        <li><strong>Use Finally Blocks for Cleanup</strong>: Use the <code>finally</code> block to release resources, such as closing files or database connections, ensuring that cleanup code runs regardless of whether an exception was thrown.</li>
        <li><strong>Throw Exceptions Thoughtfully</strong>: Only throw exceptions to indicate truly exceptional conditions. Avoid using exceptions for regular control flow.</li>
        <li><strong>Provide Meaningful Error Messages</strong>: Ensure that exception messages are clear and provide enough context to understand the issue.</li>
        <li><strong>Log Exceptions</strong>: Implement logging to record exception details. This is invaluable for diagnosing issues in production environments.</li>
        <li><strong>Create Custom Exceptions When Necessary</strong>: For domain-specific error conditions, creating custom exceptions can provide more precise error handling and improve code clarity.</li>
        <li><strong>Validate Inputs</strong>: Prevent exceptions by validating user inputs and data before processing them.</li>
        <li><strong>Avoid Using Exceptions for Control Flow</strong>: Exceptions should be used for exceptional conditions, not for regular control flow.</li>
      </ul>

      <!-- Common Exceptions and How to Avoid Them -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Exceptions and How to Avoid Them</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding common exceptions and strategies to prevent them is vital for writing robust C# applications.
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>NullReferenceException</strong>: Attempting to access members of a <code>null</code> object.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Initialize objects before use.</li>
                <li>Use null-conditional operators (<code>?.</code>) introduced in C# 6.0.</li>
                <li>Implement null checks.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>IndexOutOfRangeException</strong>: Accessing an array or collection with an invalid index.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Ensure indices are within valid bounds.</li>
                <li>Use collection properties like <code>Count</code> or <code>Length</code> to validate indices.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>FormatException</strong>: Invalid format when converting between data types.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Validate input formats before parsing.</li>
                <li>Use <code>TryParse</code> methods that return a boolean indicating success.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>DivideByZeroException</strong>: Attempting to divide an integer by zero.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Check if the divisor is zero before performing division.</li>
                <li>Use exception handling as a last resort.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>FileNotFoundException</strong>: Attempting to access a file that does not exist.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Check if the file exists using <code>File.Exists</code> before accessing it.</li>
                <li>Handle exceptions gracefully.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>InvalidOperationException</strong>: Calling a method in an inappropriate state.
          <ul class="list-disc list-inside text-base md:text-lg">
            <li><strong>Prevention:</strong>
              <ul class="list-disc list-inside text-base md:text-lg">
                <li>Ensure that objects are in a valid state before invoking methods.</li>
                <li>Implement state checks within methods.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Exception handling is a critical aspect of developing robust and reliable C# applications. By effectively managing errors and exceptions, developers can ensure that applications behave predictably, maintain data integrity, and provide meaningful feedback to users. Understanding and implementing try-catch-finally blocks, throwing and handling exceptions appropriately, creating custom exceptions, and adhering to best practices are essential skills for any C# developer.
      </p>
      <p class="text-base md:text-lg mb-6">
        By anticipating potential error conditions and handling them gracefully, you not only enhance the stability of your applications but also improve the overall user experience. Remember to validate inputs, provide clear and informative error messages, and avoid common pitfalls such as overusing exceptions or neglecting resource cleanup. With these strategies in place, your C# applications will be well-equipped to handle the myriad of challenges that arise during execution.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExceptionHandlingInCSharp',
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
