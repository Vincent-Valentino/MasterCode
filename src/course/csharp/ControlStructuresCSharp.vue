<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-purple-950 rounded-t-xl p-4">
      <img src="/csharp/logo.svg" alt="C# Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">C# Control Structures</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Control structures are fundamental components of any programming language, allowing developers to dictate the flow of execution within their applications. In C#, control structures enable you to implement decision-making processes, iterate over data collections, and manage the execution flow based on specific conditions. This section explores the various control structures available in C#, including conditional statements, looping constructs, and jump statements, providing detailed explanations and practical examples to illustrate their usage.
      </p>

      <!-- Conditional Statements -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conditional Statements</h2>
      <p class="text-base md:text-lg mb-4">
        Conditional statements allow your program to make decisions based on certain conditions. They enable the execution of specific blocks of code when particular criteria are met, enhancing the flexibility and responsiveness of your applications. C# provides several conditional statements, including <code>if</code>, <code>else if</code>, <code>else</code>, and <code>switch</code>, each serving unique purposes.
      </p>

      <!-- If, Else If, Else -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">If, Else If, Else</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>if</code>, <code>else if</code>, and <code>else</code> statements are used to execute code blocks based on boolean expressions. They allow your program to handle multiple conditions and execute the appropriate code segment when a condition evaluates to true.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>When to Use:</strong> Use these statements when you need to perform different actions based on varying conditions. They are ideal for scenarios where multiple mutually exclusive conditions determine the flow of execution.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Determine the grade based on score
int score = 85;
string grade;

if (score >= 90)
{
    grade = "A";
}
else if (score >= 80)
{
    grade = "B";
}
else if (score >= 70)
{
    grade = "C";
}
else
{
    grade = "F";
}

Console.WriteLine($"Grade: {grade}"); // Output: Grade: B
</code>
      </pre>

      <!-- Switch Statement -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Switch Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>switch</code> statement provides a more readable and organized way to handle multiple conditions that depend on the value of a single expression. It compares the expression against a list of case labels and executes the corresponding block of code when a match is found.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>When to Use:</strong> Utilize the <code>switch</code> statement when you have a single variable or expression that can take on multiple discrete values, and you want to execute different code blocks based on each value.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Day of the week
int day = 3;
string dayName;

switch (day)
{
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
        break;
}

Console.WriteLine($"Day {day} is {dayName}"); // Output: Day 3 is Wednesday
</code>
      </pre>

      <!-- Looping Constructs -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Looping Constructs</h2>
      <p class="text-base md:text-lg mb-4">
        Looping constructs enable your program to execute a block of code repeatedly based on specific conditions. They are essential for tasks that require iteration, such as processing items in a collection, performing repetitive calculations, or generating sequences. C# offers several looping constructs, including <code>for</code>, <code>foreach</code>, <code>while</code>, and <code>do-while</code>, each suited to different scenarios.
      </p>

      <!-- For Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">For Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>for</code> loop is ideal for scenarios where the number of iterations is known beforehand. It consists of three parts: initialization, condition, and iteration expression.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>When to Use:</strong> Use the <code>for</code> loop when you need to execute a block of code a specific number of times, especially when iterating over arrays or collections with a known size.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Print numbers from 1 to 5
for (int i = 1; i <= 5; i++)
{
    Console.WriteLine(i);
}
// Output:
// 1
// 2
// 3
// 4
// 5
</code>
      </pre>

      <!-- Foreach Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Foreach Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>foreach</code> loop simplifies the process of iterating over elements in a collection, such as arrays, lists, or dictionaries. It abstracts the complexity of managing indices or enumerators, making the code more readable and less error-prone.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>When to Use:</strong> Use the <code>foreach</code> loop when you need to access each element in a collection without modifying the collection itself.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Iterate over an array of names
string[] names = { "Alice", "Bob", "Charlie" };

foreach (string name in names)
{
    Console.WriteLine(name);
}
// Output:
// Alice
// Bob
// Charlie
</code>
      </pre>

      <!-- While Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">While Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>while</code> loop continues to execute a block of code as long as a specified condition remains true. It is useful when the number of iterations is not known in advance and depends on dynamic conditions.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>When to Use:</strong> Use the <code>while</code> loop when you need to perform an action repeatedly until a certain condition changes, such as reading data until the end of a file is reached.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Sum numbers until a negative number is entered
int sum = 0;
int number;

Console.WriteLine("Enter numbers to sum (negative number to stop):");

while (true)
{
    number = Convert.ToInt32(Console.ReadLine());
    if (number < 0)
    {
        break;
    }
    sum += number;
}

Console.WriteLine($"Total Sum: {sum}");
</code>
      </pre>

      <!-- Do-While Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Do-While Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>do-while</code> loop is similar to the <code>while</code> loop but guarantees that the code block is executed at least once before the condition is evaluated. This is particularly useful for scenarios where the initial execution needs to occur regardless of the condition.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>When to Use:</strong> Use the <code>do-while</code> loop when the loop's body must be executed at least once, such as displaying a menu and processing user input before checking if the user wants to continue.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: User login attempt
bool isAuthenticated;

do
{
    Console.Write("Enter password: ");
    string password = Console.ReadLine();

    if (password == "secret")
    {
        isAuthenticated = true;
        Console.WriteLine("Access granted.");
    }
    else
    {
        isAuthenticated = false;
        Console.WriteLine("Incorrect password. Try again.");
    }

} while (!isAuthenticated);
</code>
      </pre>

      <!-- Jump Statements -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Jump Statements</h2>
      <p class="text-base md:text-lg mb-4">
        Jump statements alter the flow of execution by transferring control to different parts of the code. They are useful for exiting loops prematurely, skipping iterations, or redirecting program flow under specific conditions. C# provides several jump statements, including <code>break</code>, <code>continue</code>, and <code>goto</code>.
      </p>

      <!-- Break Statement -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Break Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>break</code> statement terminates the closest enclosing loop or switch statement, transferring control to the statement immediately following the loop or switch.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>When to Use:</strong> Use the <code>break</code> statement to exit a loop based on a condition that occurs within the loop's body, such as finding a target value.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Search for a number in an array
int[] numbers = { 2, 4, 6, 8, 10 };
int target = 6;
bool found = false;

for (int i = 0; i < numbers.Length; i++)
{
    if (numbers[i] == target)
    {
        Console.WriteLine($"Number {target} found at index {i}.");
        found = true;
        break; // Exit the loop once the number is found
    }
}

if (!found)
{
    Console.WriteLine($"Number {target} not found.");
}
// Output: Number 6 found at index 2.
</code>
      </pre>

      <!-- Continue Statement -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Continue Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>continue</code> statement skips the current iteration of a loop and proceeds to the next iteration. It does not terminate the loop but allows the program to bypass certain code within the loop based on specific conditions.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>When to Use:</strong> Use the <code>continue</code> statement when you want to skip processing certain elements within a loop without exiting the entire loop.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Print only even numbers from 1 to 10
for (int i = 1; i <= 10; i++)
{
    if (i % 2 != 0)
    {
        continue; // Skip odd numbers
    }
    Console.WriteLine(i);
}
// Output:
// 2
// 4
// 6
// 8
// 10
</code>
      </pre>

      <!-- Goto Statement -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Goto Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>goto</code> statement transfers control to a labeled statement within the same method. While it provides a way to jump to different parts of the code, its use is generally discouraged as it can make the code less readable and harder to maintain.
      </p>
      <p class="text-base md:text-lg mb-4">
        <strong>When to Use:</strong> Use the <code>goto</code> statement sparingly and only in scenarios where it significantly improves code clarity, such as exiting nested loops. However, alternative control structures like methods, loops, and exception handling are typically preferred.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using goto to exit nested loops
for (int i = 1; i <= 3; i++)
{
    for (int j = 1; j <= 3; j++)
    {
        if (i == 2 && j == 2)
        {
            goto ExitLoops;
        }
        Console.WriteLine($"i = {i}, j = {j}");
    }
}

ExitLoops:
Console.WriteLine("Exited the loops.");
// Output:
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 2, j = 1
// Exited the loops.
</code>
      </pre>

      <!-- Detailed Explanations and Use Cases -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">When to Use Each Control Structure</h2>
      <p class="text-base md:text-lg mb-4">
        Choosing the right control structure is pivotal for writing efficient, readable, and maintainable code. Here's a guide on when to use each control structure in C#:
      </p>

      <!-- Conditional Statements Usage -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Conditional Statements</h3>
      <p class="text-base md:text-lg mb-4">
        - **<code>if</code>, <code>else if</code>, <code>else</code>**: Use these when you need to execute different code blocks based on multiple conditions. They are straightforward and flexible, making them suitable for simple to moderately complex decision-making scenarios.
      </p>
      <p class="text-base md:text-lg mb-4">
        - **<code>switch</code>**: Opt for the <code>switch</code> statement when you have a single variable or expression that can take on numerous discrete values, and you want to execute different code blocks for each value. It enhances readability compared to multiple <code>else if</code> statements.
      </p>

      <!-- Looping Constructs Usage -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Looping Constructs</h3>
      <p class="text-base md:text-lg mb-4">
        - **<code>for</code> Loop**: Ideal when the number of iterations is known beforehand. Commonly used for iterating over arrays or collections where you need to access elements by their index.
      </p>
      <p class="text-base md:text-lg mb-4">
        - **<code>foreach</code> Loop**: Best suited for iterating over collections where you don't need to modify the collection or require index-based access. It simplifies the code by eliminating the need for index management.
      </p>
      <p class="text-base md:text-lg mb-4">
        - **<code>while</code> Loop**: Use when the number of iterations depends on dynamic conditions evaluated before each loop iteration. Suitable for scenarios like reading data until a specific condition is met.
      </p>
      <p class="text-base md:text-lg mb-4">
        - **<code>do-while</code> Loop**: Preferable when the loop body must execute at least once, such as prompting user input before evaluating the continuation condition.
      </p>

      <!-- Jump Statements Usage -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Jump Statements</h3>
      <p class="text-base md:text-lg mb-4">
        - **<code>break</code>**: Utilize to exit a loop or switch statement prematurely when a specific condition is met, such as finding a target value within a collection.
      </p>
      <p class="text-base md:text-lg mb-4">
        - **<code>continue</code>**: Use to skip the current iteration and proceed to the next one when a certain condition is met, such as ignoring invalid input while processing data.
      </p>
      <p class="text-base md:text-lg mb-4">
        - **<code>goto</code>**: Exercise caution with the <code>goto</code> statement. It should only be used in rare cases where it significantly improves code clarity, like breaking out of deeply nested loops. Generally, alternative control structures are preferred for maintaining code readability and structure.
      </p>

      <!-- Practical Problem Solving -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Practical Examples Solving Simple Problems</h2>
      <p class="text-base md:text-lg mb-4">
        To solidify your understanding of control structures in C#, let's explore some practical examples that solve simple problems using various control constructs.
      </p>

      <!-- Example 1: Determine Even or Odd -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 1: Determine Even or Odd</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates the use of the <code>if-else</code> conditional statement to determine whether a given number is even or odd.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Check if a number is even or odd
Console.Write("Enter a number: ");
int number = Convert.ToInt32(Console.ReadLine());

if (number % 2 == 0)
{
    Console.WriteLine($"{number} is even.");
}
else
{
    Console.WriteLine($"{number} is odd.");
}
// Possible Output:
// Enter a number: 7
// 7 is odd.
</code>
      </pre>

      <!-- Example 2: Sum of Array Elements -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 2: Sum of Array Elements</h3>
      <p class="text-base md:text-lg mb-4">
        This example utilizes a <code>foreach</code> loop to iterate over an array of integers and calculate the sum of its elements.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Calculate the sum of array elements
int[] numbers = { 1, 2, 3, 4, 5 };
int sum = 0;

foreach (int num in numbers)
{
    sum += num;
}

Console.WriteLine($"Sum of array elements: {sum}"); // Output: Sum of array elements: 15
</code>
      </pre>

      <!-- Example 3: FizzBuzz Problem -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 3: FizzBuzz Problem</h3>
      <p class="text-base md:text-lg mb-4">
        The FizzBuzz problem is a classic exercise that involves using loops and conditional statements. It prints numbers from 1 to 100, but for multiples of three, it prints "Fizz" instead of the number, and for multiples of five, it prints "Buzz". For numbers which are multiples of both three and five, it prints "FizzBuzz".
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: FizzBuzz from 1 to 100
for (int i = 1; i <= 100; i++)
{
    if (i % 15 == 0)
    {
        Console.WriteLine("FizzBuzz");
    }
    else if (i % 3 == 0)
    {
        Console.WriteLine("Fizz");
    }
    else if (i % 5 == 0)
    {
        Console.WriteLine("Buzz");
    }
    else
    {
        Console.WriteLine(i);
    }
}
</code>
      </pre>

      <!-- Example 4: Finding the Largest Number -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 4: Finding the Largest Number</h3>
      <p class="text-base md:text-lg mb-4">
        This example demonstrates the use of nested loops and conditional statements to find the largest number in a two-dimensional array.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Find the largest number in a 2D array
int[,] matrix = {
    { 3, 5, 7 },
    { 2, 9, 4 },
    { 8, 1, 6 }
};

int largest = matrix[0, 0];

for (int i = 0; i < matrix.GetLength(0); i++)
{
    for (int j = 0; j < matrix.GetLength(1); j++)
    {
        if (matrix[i, j] > largest)
        {
            largest = matrix[i, j];
        }
    }
}

Console.WriteLine($"The largest number in the matrix is {largest}"); // Output: The largest number in the matrix is 9
</code>
      </pre>

      <!-- Example 5: Validating User Input -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example 5: Validating User Input</h3>
      <p class="text-base md:text-lg mb-4">
        This example showcases the use of the <code>do-while</code> loop and the <code>continue</code> statement to validate user input, ensuring that only positive integers are accepted.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Validate positive integer input
int number;

do
{
    Console.Write("Enter a positive integer: ");
    string input = Console.ReadLine();

    if (!int.TryParse(input, out number) || number <= 0)
    {
        Console.WriteLine("Invalid input. Please enter a positive integer.");
        continue; // Skip to the next iteration
    }

    // If valid input, exit the loop
    break;

} while (true);

Console.WriteLine($"You entered: {number}");
</code>
      </pre>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices for Using Control Structures</h2>
      <p class="text-base md:text-lg mb-4">
        Effective use of control structures can significantly enhance the quality and maintainability of your code. Here are some best practices to consider:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Keep Conditions Simple:</strong> Complex conditions can make your code harder to read and maintain. Break down complex conditions into simpler, more manageable parts or use helper methods to improve readability.</li>
        <li><strong>Avoid Deep Nesting:</strong> Excessive nesting of loops and conditional statements can lead to convoluted code. Consider refactoring nested structures into separate methods or using alternative control structures to simplify the logic.</li>
        <li><strong>Use Meaningful Labels:</strong> When using jump statements like <code>goto</code>, ensure that labels are descriptive and clearly indicate their purpose to maintain code clarity.</li>
        <li><strong>Prefer Foreach Over For:</strong> When iterating over collections where index access is not required, prefer <code>foreach</code> loops for cleaner and more readable code.</li>
        <li><strong>Validate Inputs:</strong> Always validate user inputs and conditions to prevent unexpected behavior and enhance the robustness of your application.</li>
        <li><strong>Consistent Indentation:</strong> Maintain consistent indentation and formatting to improve the readability and maintainability of your code.</li>
      </ul>

      <!-- Common Pitfalls -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Common Pitfalls to Avoid</h2>
      <p class="text-base md:text-lg mb-4">
        While control structures are powerful tools, improper use can lead to issues such as infinite loops, unreachable code, and decreased performance. Here are some common pitfalls to watch out for:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Infinite Loops:</strong> Forgetting to update loop control variables or incorrectly setting loop conditions can result in loops that never terminate.</li>
        <li><strong>Unreachable Code:</strong> Placing code after a <code>break</code> or <code>return</code> statement within the same block can make it unreachable, leading to compiler warnings or errors.</li>
        <li><strong>Misusing Goto:</strong> Overusing or improperly using the <code>goto</code> statement can make the code flow difficult to follow and maintain.</li>
        <li><strong>Off-by-One Errors:</strong> Incorrectly setting loop boundaries, especially in <code>for</code> loops, can lead to missing elements or out-of-range exceptions.</li>
        <li><strong>Complex Conditional Logic:</strong> Overly complex conditions can make the code difficult to understand and debug. Strive for clarity and simplicity in your conditional statements.</li>
      </ul>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        Mastering control structures is essential for any C# developer, as they form the backbone of program logic and flow. By understanding and effectively utilizing conditional statements, looping constructs, and jump statements, you can create dynamic, efficient, and maintainable applications. Remember to adhere to best practices, avoid common pitfalls, and continuously practice through real-world examples to reinforce your understanding. As you grow more comfortable with these control structures, you'll be well-equipped to tackle increasingly complex programming challenges with confidence and proficiency.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSharpControlStructures',
  data() {
    return {
      // Additional data properties can be added here if needed
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
