<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-green-500 rounded-t-xl p-4">
      <img src="/icons/go.svg" alt="Go Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Go Control Structures</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Control structures are fundamental components of any programming language, enabling developers to dictate the flow of execution based on conditions and iterations. Go provides a robust set of control structures that are both powerful and straightforward, aligning with its philosophy of simplicity and efficiency. This section delves into the various control structures available in Go, including conditional statements, loops, switch cases, and more. Through detailed explanations and practical examples, you'll gain a solid understanding of how to effectively use these constructs to build dynamic and responsive applications.
      </p>

      <!-- Conditional Statements -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conditional Statements</h2>
      <p class="text-base md:text-lg mb-4">
        Conditional statements allow your program to make decisions based on certain conditions. Go offers the standard <code>if</code> and <code>else</code> statements, as well as the <code>switch</code> statement for handling multiple conditions.
      </p>

      <!-- If Statement -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">The <code>if</code> Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>if</code> statement is used to execute a block of code if a specified condition is true. It can be accompanied by an <code>else</code> block to execute alternative code when the condition is false.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using if and else
package main

import "fmt"

func main() {
    age := 20

    if age >= 18 {
        fmt.Println("You are eligible to vote.")
    } else {
        fmt.Println("You are not eligible to vote.")
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Condition:</strong> The <code>if age >= 18</code> checks if the variable <code>age</code> is 18 or older.
        </li>
        <li>
          <strong>True Block:</strong> If the condition is true, it prints "You are eligible to vote."
        </li>
        <li>
          <strong>False Block:</strong> If the condition is false, it prints "You are not eligible to vote."
        </li>
      </ul>

      <!-- If Statement with Initialization -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">If Statement with Initialization</h3>
      <p class="text-base md:text-lg mb-4">
        Go allows you to include an initialization statement within the <code>if</code> statement. This is useful for declaring and initializing variables that are only needed within the scope of the <code>if</code> block.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: If statement with initialization
package main

import (
    "fmt"
    "math"
)

func main() {
    x := 16

    if sqrt := math.Sqrt(float64(x)); sqrt > 4 {
        fmt.Printf("The square root of %d is %.2f, which is greater than 4.\n", x, sqrt)
    } else {
        fmt.Printf("The square root of %d is %.2f, which is not greater than 4.\n", x, sqrt)
    }

    // Note: sqrt is not accessible here
    // fmt.Println(sqrt) // This would cause an error
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Initialization:</strong> <code>sqrt := math.Sqrt(float64(x))</code> calculates the square root of <code>x</code> and initializes <code>sqrt</code>.
        </li>
        <li>
          <strong>Scope:</strong> The variable <code>sqrt</code> is only accessible within the <code>if</code> and <code>else</code> blocks.
        </li>
        <li>
          <strong>Condition:</strong> Checks if the calculated square root is greater than 4.
        </li>
      </ul>

      <!-- Else If Statement -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">The <code>else if</code> Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>else if</code> statement allows you to check multiple conditions sequentially.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using else if
package main

import "fmt"

func main() {
    score := 85

    if score >= 90 {
        fmt.Println("Grade: A")
    } else if score >= 80 {
        fmt.Println("Grade: B")
    } else if score >= 70 {
        fmt.Println("Grade: C")
    } else {
        fmt.Println("Grade: F")
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Multiple Conditions:</strong> The program checks multiple ranges of scores to assign grades.
        </li>
        <li>
          <strong>Sequential Evaluation:</strong> Conditions are evaluated in order until one is true.
        </li>
      </ul>

      <!-- Switch Statement -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">The <code>switch</code> Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>switch</code> statement provides a more readable and organized way to handle multiple conditions compared to multiple <code>if</code> and <code>else if</code> statements.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using switch
package main

import "fmt"

func main() {
    day := "Tuesday"

    switch day {
    case "Monday":
        fmt.Println("Start of the work week.")
    case "Tuesday", "Wednesday", "Thursday":
        fmt.Println("Midweek days.")
    case "Friday":
        fmt.Println("End of the work week.")
    case "Saturday", "Sunday":
        fmt.Println("Weekend!")
    default:
        fmt.Println("Invalid day.")
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Multiple Cases:</strong> The <code>switch</code> can handle multiple cases in a single line, such as <code>"Tuesday", "Wednesday", "Thursday"</code>.
        </li>
        <li>
          <strong>Default Case:</strong> The <code>default</code> case handles any values that don't match the specified cases.
        </li>
      </ul>

      <!-- Switch with Expressions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Switch with Expressions</h3>
      <p class="text-base md:text-lg mb-4">
        Go's <code>switch</code> statement can evaluate expressions, not just direct variable comparisons. This allows for more complex condition handling.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Switch with expressions
package main

import (
    "fmt"
    "time"
)

func main() {
    currentHour := time.Now().Hour()

    switch {
    case currentHour < 12:
        fmt.Println("Good morning!")
    case currentHour < 18:
        fmt.Println("Good afternoon!")
    default:
        fmt.Println("Good evening!")
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Expression-Based Switch:</strong> The <code>switch</code> statement evaluates expressions rather than comparing a single variable.
        </li>
        <li>
          <strong>Flexible Conditions:</strong> Conditions like <code>currentHour &lt; 12</code> allow for more dynamic decision-making.
        </li>
      </ul>

      <!-- Fallthrough in Switch -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Fallthrough in Switch</h3>
      <p class="text-base md:text-lg mb-4">
        By default, Go's <code>switch</code> statements do not fall through to subsequent cases. However, you can use the <code>fallthrough</code> keyword to achieve this behavior.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using fallthrough
package main

import "fmt"

func main() {
    number := 2

    switch number {
    case 1:
        fmt.Println("One")
    case 2:
        fmt.Println("Two")
        fallthrough
    case 3:
        fmt.Println("Three")
    default:
        fmt.Println("Other number")
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Two
Three
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Fallthrough Keyword:</strong> The <code>fallthrough</code> keyword causes the execution to continue to the next case, regardless of its condition.
        </li>
        <li>
          <strong>Multiple Outputs:</strong> In this example, when <code>number</code> is 2, it prints "Two" and then falls through to print "Three".
        </li>
      </ul>

      <!-- For Loops -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">For Loops</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>for</code> loop is the only looping construct in Go, but it is versatile and can be used in various forms to achieve different types of iterations.
      </p>

      <!-- Traditional For Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Traditional For Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The traditional <code>for</code> loop in Go is similar to that in languages like C or Java, consisting of an initialization statement, a condition, and a post statement.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Traditional for loop
package main

import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Println("Iteration:", i)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Initialization:</strong> <code>i := 0</code> initializes the loop counter.
        </li>
        <li>
          <strong>Condition:</strong> <code>i &lt; 5</code> determines when the loop should terminate.
        </li>
        <li>
          <strong>Post Statement:</strong> <code>i++</code> increments the loop counter after each iteration.
        </li>
      </ul>

      <!-- While-Like For Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">While-Like For Loop</h3>
      <p class="text-base md:text-lg mb-4">
        You can use the <code>for</code> loop without initialization and post statements to mimic the behavior of a traditional <code>while</code> loop.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: While-like for loop
package main

import "fmt"

func main() {
    count := 0

    for count < 3 {
        fmt.Println("Count is:", count)
        count++
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Count is: 0
Count is: 1
Count is: 2
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Condition Only:</strong> The loop continues as long as <code>count &lt; 3</code> is true.
        </li>
        <li>
          <strong>Increment:</strong> <code>count++</code> increments the counter within the loop body.
        </li>
      </ul>

      <!-- Infinite For Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Infinite For Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>for</code> loop can be used without any conditions to create an infinite loop. Use the <code>break</code> or <code>return</code> statements to exit the loop.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Infinite for loop
package main

import "fmt"

func main() {
    i := 0

    for {
        if i >= 3 {
            break
        }
        fmt.Println("Infinite Loop Iteration:", i)
        i++
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Infinite Loop Iteration: 0
Infinite Loop Iteration: 1
Infinite Loop Iteration: 2
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Infinite Condition:</strong> The loop runs indefinitely because there are no conditions specified.
        </li>
        <li>
          <strong>Breaking the Loop:</strong> The <code>break</code> statement exits the loop when <code>i &gt;= 3</code>.
        </li>
      </ul>

      <!-- Nested For Loops -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Nested For Loops</h3>
      <p class="text-base md:text-lg mb-4">
        You can nest <code>for</code> loops within each other to handle more complex iterations.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Nested for loops
package main

import "fmt"

func main() {
    for i := 1; i <= 3; i++ {
        for j := 1; j <= 2; j++ {
            fmt.Printf("i=%d, j=%d\n", i, j)
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
i=1, j=1
i=1, j=2
i=2, j=1
i=2, j=2
i=3, j=1
i=3, j=2
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Outer Loop:</strong> Iterates <code>i</code> from 1 to 3.
        </li>
        <li>
          <strong>Inner Loop:</strong> For each value of <code>i</code>, iterates <code>j</code> from 1 to 2.
        </li>
        <li>
          <strong>Combination:</strong> Prints all combinations of <code>i</code> and <code>j</code>.
        </li>
      </ul>

      <!-- Continue and Break Statements -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Continue and Break Statements</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>continue</code> statement skips the current iteration and proceeds to the next one, while the <code>break</code> statement exits the loop entirely.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using continue and break
package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        if i == 3 {
            continue // Skip iteration when i == 3
        }
        if i == 5 {
            break // Exit loop when i == 5
        }
        fmt.Println("Value:", i)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Value: 1
Value: 2
Value: 4
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Continue:</strong> When <code>i == 3</code>, the <code>continue</code> statement skips the rest of the loop body and moves to the next iteration.
        </li>
        <li>
          <strong>Break:</strong> When <code>i == 5</code>, the <code>break</code> statement exits the loop entirely.
        </li>
      </ul>

      <!-- For-Range Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">The <code>for range</code> Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>for range</code> loop is used to iterate over elements in a variety of data structures like slices, arrays, maps, strings, and channels.
      </p>
      
      <!-- Iterating Over a Slice -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Iterating Over a Slice</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Iterating over a slice
package main

import "fmt"

func main() {
    fruits := []string{"Apple", "Banana", "Cherry"}

    for index, fruit := range fruits {
        fmt.Printf("Index: %d, Fruit: %s\n", index, fruit)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Index: 0, Fruit: Apple
Index: 1, Fruit: Banana
Index: 2, Fruit: Cherry
</code>
      </pre>

      <!-- Iterating Over a Map -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Iterating Over a Map</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Iterating over a map
package main

import "fmt"

func main() {
    capitals := map[string]string{
        "France": "Paris",
        "Japan":  "Tokyo",
        "India":  "New Delhi",
    }

    for country, capital := range capitals {
        fmt.Printf("The capital of %s is %s.\n", country, capital)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
The capital of France is Paris.
The capital of Japan is Tokyo.
The capital of India is New Delhi.
</code>
      </pre>

      <!-- Iterating Over a String -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Iterating Over a String</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Iterating over a string
package main

import "fmt"

func main() {
    message := "Hello"

    for index, char := range message {
        fmt.Printf("Index: %d, Character: %c\n", index, char)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Index: 0, Character: H
Index: 1, Character: e
Index: 2, Character: l
Index: 3, Character: l
Index: 4, Character: o
</code>
      </pre>

      <!-- Ignoring Index or Value -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Ignoring Index or Value</h4>
      <p class="text-base md:text-lg mb-4">
        If you don't need both the index and the value, you can use the blank identifier <code>_</code> to ignore one of them.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Ignoring index
package main

import "fmt"

func main() {
    fruits := []string{"Apple", "Banana", "Cherry"}

    for _, fruit := range fruits {
        fmt.Println("Fruit:", fruit)
    }
}

// Example: Ignoring value
package main

import "fmt"

func main() {
    capitals := map[string]string{
        "France": "Paris",
        "Japan":  "Tokyo",
    }

    for country, _ := range capitals {
        fmt.Println("Country:", country)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <p class="text-base md:text-lg mb-6">
        **First Example Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Fruit: Apple
Fruit: Banana
Fruit: Cherry
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Second Example Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Country: France
Country: Japan
</code>
      </pre>

      <!-- Labels and Goto -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Labels and <code>goto</code> Statement</h3>
      <p class="text-base md:text-lg mb-4">
        Go supports labels and the <code>goto</code> statement, allowing for more granular control over the flow of execution. However, their use is generally discouraged as it can lead to less readable code.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using goto and labels
package main

import "fmt"

func main() {
    i := 0

    start:
        if i >= 3 {
            goto end
        }
        fmt.Println("i =", i)
        i++
        goto start

    end:
        fmt.Println("End of loop.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
i = 0
i = 1
i = 2
End of loop.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Label:</strong> <code>start:</code> and <code>end:</code> are labels used as jump points.
        </li>
        <li>
          <strong>Goto Statement:</strong> The <code>goto</code> statement transfers control to the specified label.
        </li>
        <li>
          <strong>Flow Control:</strong> The loop continues until <code>i &gt;= 3</code>, after which it jumps to the <code>end</code> label.
        </li>
      </ul>

      <!-- Select Statement -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">The <code>select</code> Statement</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>select</code> statement is used for handling multiple channel operations. It allows a goroutine to wait on multiple communication operations.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using select with channels
package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(2 * time.Second)
        ch1 <- "Message from ch1"
    }()

    go func() {
        time.Sleep(1 * time.Second)
        ch2 <- "Message from ch2"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Message from ch2
Message from ch1
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Channels:</strong> <code>ch1</code> and <code>ch2</code> are channels used for communication between goroutines.
        </li>
        <li>
          <strong>Goroutines:</strong> Two goroutines send messages to <code>ch1</code> and <code>ch2</code> after different sleep durations.
        </li>
        <li>
          <strong>Select Statement:</strong> The <code>select</code> statement waits for messages from either channel and prints them as they arrive.
        </li>
      </ul>

      <!-- Example: Select with Default -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Select with Default Case</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Select with default case
package main

import "fmt"

func main() {
    ch := make(chan string)

    select {
    case msg := <-ch:
        fmt.Println("Received:", msg)
    default:
        fmt.Println("No message received.")
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
No message received.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Default Case:</strong> Executes immediately if no other case is ready, preventing the <code>select</code> from blocking.
        </li>
        <li>
          <strong>Non-Blocking:</strong> Useful for performing operations without waiting for channel communication.
        </li>
      </ul>

      <!-- Comparison with Other Languages -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Comparison with Other Languages</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding how Go's control structures compare with those in other programming languages can provide valuable insights, especially for developers transitioning to Go or working in multi-language environments.
      </p>

      <!-- If Statement Comparison -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">If Statement Comparison</h3>
      <p class="text-base md:text-lg mb-4">
        Here's how the <code>if</code> statement in Go compares to Python and Java:
      </p>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Go:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Go if statement
package main

import "fmt"

func main() {
    num := 10

    if num > 5 {
        fmt.Println("Greater than 5")
    } else {
        fmt.Println("5 or less")
    }
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Python:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
# Python if statement
num = 10

if num > 5:
    print("Greater than 5")
else:
    print("5 or less")
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Java:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Java if statement
public class Main {
    public static void main(String[] args) {
        int num = 10;

        if (num > 5) {
            System.out.println("Greater than 5");
        } else {
            System.out.println("5 or less");
        }
    }
}
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Key Differences:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Syntax:</strong> Go and Java use curly braces <code>{}</code> to define blocks, whereas Python uses indentation.
        </li>
        <li>
          <strong>Type Declarations:</strong> Java requires explicit type declarations, Go allows type inference with the <code>:=</code> operator, and Python is dynamically typed.
        </li>
      </ul>

      <!-- For Loop Comparison -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">For Loop Comparison</h3>
      <p class="text-base md:text-lg mb-4">
        Comparing Go's <code>for</code> loop with C and JavaScript:
      </p>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Go:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Go for loop
package main

import "fmt"

func main() {
    for i := 0; i < 3; i++ {
        fmt.Println("Go for loop iteration:", i)
    }
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">C:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// C for loop
#include &lt;stdio.h&gt;

int main() {
    for(int i = 0; i < 3; i++) {
        printf("C for loop iteration: %d\n", i);
    }
    return 0;
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">JavaScript:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// JavaScript for loop
for(let i = 0; i &lt; 3; i++) {
    console.log("JavaScript for loop iteration:", i);
}
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Key Differences:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Variable Declaration:</strong> Go uses <code>:=</code> for type inference, C requires explicit type declarations, and JavaScript uses <code>let</code> or <code>var</code>.
        </li>
        <li>
          <strong>Semicolons:</strong> C and JavaScript require semicolons at the end of statements, whereas Go does not require them in the same way.
        </li>
        <li>
          <strong>Loop Control:</strong> All three languages support similar loop control mechanisms, but their syntax differs.
        </li>
      </ul>

      <!-- Switch Statement Comparison -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Switch Statement Comparison</h3>
      <p class="text-base md:text-lg mb-4">
        Comparing Go's <code>switch</code> statement with Swift and Ruby:
      </p>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Go:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Go switch statement
package main

import "fmt"

func main() {
    fruit := "Apple"

    switch fruit {
    case "Apple":
        fmt.Println("Fruit is Apple.")
    case "Banana":
        fmt.Println("Fruit is Banana.")
    default:
        fmt.Println("Unknown fruit.")
    }
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Swift:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Swift switch statement
let fruit = "Apple"

switch fruit {
case "Apple":
    print("Fruit is Apple.")
case "Banana":
    print("Fruit is Banana.")
default:
    print("Unknown fruit.")
}
</code>
      </pre>

      <h4 class="text-lg md:text-xl font-semibold mb-2">Ruby:</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
# Ruby case statement
fruit = "Apple"

case fruit
when "Apple"
    puts "Fruit is Apple."
when "Banana"
    puts "Fruit is Banana."
else
    puts "Unknown fruit."
end
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Key Differences:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Syntax:</strong> Go uses <code>switch</code>, Swift uses <code>switch</code> with different syntax, and Ruby uses <code>case</code>.
        </li>
        <li>
          <strong>Fallthrough:</strong> Go requires the <code>fallthrough</code> keyword to continue to the next case, whereas Swift does not fall through by default. Ruby's <code>case</code> statements naturally do not fall through.
        </li>
        <li>
          <strong>Pattern Matching:</strong> Swift and Ruby offer more advanced pattern matching capabilities compared to Go.
        </li>
      </ul>

      <!-- Conclusion of Comparison -->
      <p class="text-base md:text-lg mb-6">
        **Overall**, while the fundamental concepts of control structures remain consistent across languages, the syntax and specific behaviors can vary significantly. Go's approach emphasizes simplicity and clarity, aligning with its overall design philosophy.
      </p>

      <!-- Best Practices -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Best Practices</h2>
      <p class="text-base md:text-lg mb-4">
        Adhering to best practices when using control structures in Go can lead to more readable, efficient, and maintainable code. Here are some recommended practices:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Keep Conditions Simple:</strong> Avoid overly complex conditions in <code>if</code> and <code>switch</code> statements to enhance readability.
        </li>
        <li>
          <strong>Avoid Deep Nesting:</strong> Deeply nested loops and conditionals can make code hard to follow. Consider refactoring or using functions to flatten the structure.
        </li>
        <li>
          <strong>Use Descriptive Variable Names:</strong> Clear variable names make it easier to understand the purpose of conditions and iterations.
        </li>
        <li>
          <strong>Prefer <code>switch</code> Over Multiple <code>if-else</code>:</strong> When dealing with multiple discrete conditions, <code>switch</code> statements are often more readable.
        </li>
        <li>
          <strong>Handle All Cases:</strong> In <code>switch</code> statements, ensure that all possible cases are handled, including a <code>default</code> case to catch unexpected values.
        </li>
        <li>
          <strong>Limit <code>goto</code> Usage:</strong> Use <code>goto</code> sparingly as it can make the code flow difficult to trace and understand.
        </li>
      </ul>

      <!-- Example: Refactoring Deeply Nested Loops -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Refactoring Deeply Nested Loops</h3>
      <p class="text-base md:text-lg mb-4">
        Deeply nested loops can be refactored into separate functions to improve readability and maintainability.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Before Refactoring: Deeply Nested Loops
package main

import "fmt"

func main() {
    for i := 1; i <= 3; i++ {
        for j := 1; j <= 2; j++ {
            for k := 1; k <= 2; k++ {
                fmt.Printf("i=%d, j=%d, k=%d\n", i, j, k)
            }
        }
    }
}
</code>
      </pre>

      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// After Refactoring: Using Functions
package main

import "fmt"

func main() {
    for i := 1; i <= 3; i++ {
        iterateJ(i)
    }
}

func iterateJ(i int) {
    for j := 1; j <= 2; j++ {
        iterateK(i, j)
    }
}

func iterateK(i, j int) {
    for k := 1; k <= 2; k++ {
        fmt.Printf("i=%d, j=%d, k=%d\n", i, j, k)
    }
}
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Benefits:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Readability:</strong> Separating concerns into different functions makes the code easier to understand.
        </li>
        <li>
          <strong>Maintainability:</strong> Easier to manage and modify individual parts without affecting the entire loop structure.
        </li>
        <li>
          <strong>Reusability:</strong> Functions can be reused in different parts of the program if needed.
        </li>
      </ul>

      <!-- Practical Example: Filtering and Processing Data -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Practical Example: Filtering and Processing Data</h3>
      <p class="text-base md:text-lg mb-4">
        Let's consider a practical example where we use control structures to filter and process data from a slice of structs.
      </p>

      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Filtering and Processing Data
package main

import "fmt"

// Product represents an item with a name and price
type Product struct {
    Name  string
    Price float64
}

func main() {
    products := []Product{
        {"Laptop", 999.99},
        {"Smartphone", 599.99},
        {"Tablet", 399.99},
        {"Monitor", 199.99},
        {"Keyboard", 49.99},
    }

    // Filter products with price greater than $200
    expensiveProducts := filterExpensiveProducts(products, 200)

    fmt.Println("Expensive Products:")
    for _, product := range expensiveProducts {
        fmt.Printf("- %s: $%.2f\n", product.Name, product.Price)
    }
}

// filterExpensiveProducts filters products based on a minimum price
func filterExpensiveProducts(products []Product, minPrice float64) []Product {
    var result []Product
    for _, product := range products {
        if product.Price > minPrice {
            result = append(result, product)
        }
    }
    return result
}
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Expensive Products:
- Laptop: $999.99
- Smartphone: $599.99
- Tablet: $399.99
- Monitor: $199.99
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Structs:</strong> Defines a <code>Product</code> struct with <code>Name</code> and <code>Price</code> fields.
        </li>
        <li>
          <strong>Filtering:</strong> The <code>filterExpensiveProducts</code> function uses a <code>for range</code> loop with an <code>if</code> statement to filter products based on price.
        </li>
        <li>
          <strong>Processing:</strong> The main function processes and prints the filtered list of expensive products.
        </li>
      </ul>

      <!-- Using Control Structures with Goroutines -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Control Structures with Goroutines</h3>
      <p class="text-base md:text-lg mb-4">
        Control structures can be effectively combined with goroutines to manage concurrent operations.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Control structures with goroutines
package main

import (
    "fmt"
    "sync"
    "time"
)

func main() {
    var wg sync.WaitGroup
    numbers := []int{1, 2, 3, 4, 5}

    for _, num := range numbers {
        wg.Add(1)
        go func(n int) {
            defer wg.Done()
            if n%2 == 0 {
                fmt.Printf("%d is even.\n", n)
            } else {
                fmt.Printf("%d is odd.\n", n)
            }
        }(num)
    }

    wg.Wait()
    fmt.Println("All goroutines have finished.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <p class="text-base md:text-lg mb-6">
        The output may vary in order due to concurrent execution:
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
1 is odd.
2 is even.
3 is odd.
4 is even.
5 is odd.
All goroutines have finished.
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Goroutines:</strong> Launches a separate goroutine for each number to determine if it's even or odd.
        </li>
        <li>
          <strong>Synchronization:</strong> Uses a <code>WaitGroup</code> to wait for all goroutines to finish before printing the final message.
        </li>
        <li>
          <strong>Control Structures:</strong> Utilizes an <code>if</code> statement within the goroutine to check the condition.
        </li>
      </ul>

      <!-- Error Handling with Control Structures -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Error Handling with Control Structures</h3>
      <p class="text-base md:text-lg mb-4">
        Effective error handling is crucial in building reliable applications. Control structures play a significant role in managing errors in Go.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Error handling with if statements
package main

import (
    "fmt"
    "strconv"
)

func main() {
    inputs := []string{"123", "abc", "456", "def"}

    for _, input := range inputs {
        num, err := strconv.Atoi(input)
        if err != nil {
            fmt.Printf("Error converting '%s': %v\n", input, err)
            continue
        }
        fmt.Printf("Converted '%s' to %d\n", input, num)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Converted '123' to 123
Error converting 'abc': strconv.Atoi: parsing "abc": invalid syntax
Converted '456' to 456
Error converting 'def': strconv.Atoi: parsing "def": invalid syntax
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Error Checking:</strong> After attempting to convert a string to an integer, the program checks if an error occurred.
        </li>
        <li>
          <strong>Handling Errors:</strong> If an error is detected, it prints an error message and uses <code>continue</code> to skip to the next iteration.
        </li>
        <li>
          <strong>Successful Conversion:</strong> If no error occurs, it prints the successfully converted number.
        </li>
      </ul>

      <!-- Using Control Structures in Functions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Using Control Structures in Functions</h3>
      <p class="text-base md:text-lg mb-4">
        Control structures are often used within functions to perform specific tasks based on dynamic conditions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Control structures within functions
package main

import "fmt"

// DetermineGrade returns the grade based on the score
func DetermineGrade(score int) string {
    if score >= 90 {
        return "A"
    } else if score >= 80 {
        return "B"
    } else if score >= 70 {
        return "C"
    } else {
        return "F"
    }
}

func main() {
    scores := []int{95, 82, 67, 74}

    for _, score := range scores {
        grade := DetermineGrade(score)
        fmt.Printf("Score: %d, Grade: %s\n", score, grade)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Score: 95, Grade: A
Score: 82, Grade: B
Score: 67, Grade: F
Score: 74, Grade: C
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Function Usage:</strong> The <code>DetermineGrade</code> function uses <code>if-else</code> statements to assign grades based on scores.
        </li>
        <li>
          <strong>Iterating and Processing:</strong> The main function iterates over a slice of scores, calls the <code>DetermineGrade</code> function, and prints the results.
        </li>
      </ul>

      <!-- Advanced Control Structures -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Advanced Control Structures</h2>
      <p class="text-base md:text-lg mb-4">
        Beyond the basic control structures, Go offers advanced features that provide more flexibility and control over the program's flow.
      </p>

      <!-- Select with Multiple Cases -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Select with Multiple Cases</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>select</code> statement can handle multiple cases simultaneously, enabling the program to respond to multiple channel operations.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Select with multiple cases
package main

import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)

    go func() {
        time.Sleep(1 * time.Second)
        ch1 <- "Message from ch1"
    }()

    go func() {
        time.Sleep(2 * time.Second)
        ch2 <- "Message from ch2"
    }()

    for i := 0; i < 2; i++ {
        select {
        case msg1 := <-ch1:
            fmt.Println(msg1)
        case msg2 := <-ch2:
            fmt.Println(msg2)
        }
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Message from ch1
Message from ch2
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Multiple Goroutines:</strong> Two goroutines send messages to different channels after different delays.
        </li>
        <li>
          <strong>Select with Multiple Cases:</strong> The <code>select</code> statement listens to both channels and prints messages as they arrive.
        </li>
      </ul>

      <!-- Using Select with Timeout -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Select with Timeout</h3>
      <p class="text-base md:text-lg mb-4">
        Implementing timeouts with <code>select</code> helps prevent goroutines from blocking indefinitely.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Select with timeout
package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)

    go func() {
        time.Sleep(3 * time.Second)
        ch <- "Delayed message"
    }()

    select {
    case msg := <-ch:
        fmt.Println("Received:", msg)
    case <-time.After(2 * time.Second):
        fmt.Println("Timeout: No message received within 2 seconds.")
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Timeout: No message received within 2 seconds.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Timeout Channel:</strong> <code>time.After(2 * time.Second)</code> returns a channel that sends the current time after a specified duration.
        </li>
        <li>
          <strong>Select with Timeout:</strong> If no message is received on <code>ch</code> within 2 seconds, the <code>default</code> case is executed.
        </li>
      </ul>

      <!-- Defer, Panic, and Recover -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Defer, Panic, and Recover</h3>
      <p class="text-base md:text-lg mb-4">
        Go provides built-in mechanisms for handling unexpected errors and ensuring that certain functions are executed before a function returns.
      </p>

      <!-- Defer Statement -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Defer Statement</h4>
      <p class="text-base md:text-lg mb-4">
        The <code>defer</code> statement schedules a function call to be executed after the surrounding function completes. This is useful for resource cleanup tasks such as closing files or releasing locks.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using defer
package main

import (
    "fmt"
    "os"
)

func main() {
    file, err := os.Open("example.txt")
    if err != nil {
        fmt.Println("Error opening file:", err)
        return
    }
    defer file.Close()

    // Perform file operations
    fmt.Println("File opened successfully.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Resource Management:</strong> Ensures that <code>file.Close()</code> is called when <code>main</code> function exits, even if an error occurs.
        </li>
        <li>
          <strong>Deferred Execution:</strong> The deferred function is executed after the surrounding function completes, in LIFO (Last In, First Out) order.
        </li>
      </ul>

      <!-- Panic and Recover -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Panic and Recover</h4>
      <p class="text-base md:text-lg mb-4">
        The <code>panic</code> function stops the normal execution of the current goroutine, while the <code>recover</code> function regains control of a panicking goroutine.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Using panic and recover
package main

import "fmt"

func riskyFunction() {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    fmt.Println("About to panic!")
    panic("Something went wrong!")
    fmt.Println("This line will not execute.")
}

func main() {
    fmt.Println("Starting program.")
    riskyFunction()
    fmt.Println("Program continues after recovery.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Starting program.
About to panic!
Recovered from panic: Something went wrong!
Program continues after recovery.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Panic:</strong> <code>panic("Something went wrong!")</code> triggers a panic, stopping normal execution.
        </li>
        <li>
          <strong>Recover:</strong> The deferred anonymous function checks if a panic occurred using <code>recover()</code> and handles it gracefully.
        </li>
        <li>
          <strong>Continuation:</strong> After recovery, the program continues executing subsequent lines.
        </li>
      </ul>

      <!-- Example: Using Defer, Panic, and Recover in File Operations -->
      <h4 class="text-lg md:text-xl font-semibold mb-2">Example: Using Defer, Panic, and Recover in File Operations</h4>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Defer, Panic, and Recover in file operations
package main

import (
    "fmt"
    "os"
)

func readFile(filename string) {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()

    file, err := os.Open(filename)
    if err != nil {
        panic(fmt.Sprintf("Failed to open file: %s", filename))
    }
    defer file.Close()

    // Simulate reading file
    fmt.Println("Reading file:", filename)
    // Simulate a panic during file processing
    panic("Error processing file.")
}

func main() {
    fmt.Println("Starting file read operation.")
    readFile("nonexistent.txt")
    fmt.Println("File read operation completed.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Starting file read operation.
Recovered from panic: Failed to open file: nonexistent.txt
File read operation completed.
</code>
      </pre>

      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Attempt to Open File:</strong> Tries to open a non-existent file, which triggers an error.
        </li>
        <li>
          <strong>Panic Trigger:</strong> On encountering an error, the program panics with a descriptive message.
        </li>
        <li>
          <strong>Recovery:</strong> The deferred function recovers from the panic and prints the recovery message.
        </li>
        <li>
          <strong>Program Continuation:</strong> The program continues executing after handling the panic.
        </li>
      </ul>

      <!-- Loop Control with Labels -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Loop Control with Labels</h3>
      <p class="text-base md:text-lg mb-4">
        Labels can be used to control the flow of nested loops more effectively, allowing you to break out of or continue specific loops.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Loop control with labels
package main

import "fmt"

func main() {
    OuterLoop:
    for i := 1; i <= 3; i++ {
        for j := 1; j <= 3; j++ {
            if i == 2 && j == 2 {
                break OuterLoop
            }
            fmt.Printf("i=%d, j=%d\n", i, j)
        }
    }
    fmt.Println("Exited the outer loop.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
i=1, j=1
i=1, j=2
i=1, j=3
i=2, j=1
i=2, j=2
Exited the outer loop.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Label:</strong> <code>OuterLoop:</code> is a label attached to the outer <code>for</code> loop.
        </li>
        <li>
          <strong>Break with Label:</strong> <code>break OuterLoop</code> exits the outer loop when <code>i == 2 && j == 2</code>.
        </li>
        <li>
          <strong>Flow Control:</strong> Allows breaking out of multiple nested loops efficiently.
        </li>
      </ul>

      <!-- Switch with Type Assertions -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Switch with Type Assertions</h3>
      <p class="text-base md:text-lg mb-4">
        Go's <code>switch</code> statement can be used with type assertions to determine the type of an interface variable.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Switch with type assertions
package main

import "fmt"

func describe(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("Type: int, Value: %d\n", v)
    case string:
        fmt.Printf("Type: string, Value: %s\n", v)
    case bool:
        fmt.Printf("Type: bool, Value: %t\n", v)
    default:
        fmt.Printf("Unknown type.\n")
    }
}

func main() {
    describe(10)
    describe("Go Language")
    describe(true)
    describe(3.14)
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Type: int, Value: 10
Type: string, Value: Go Language
Type: bool, Value: true
Unknown type.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Type Switch:</strong> The <code>switch</code> statement is used with <code>i.(type)</code> to determine the dynamic type of an interface variable.
        </li>
        <li>
          <strong>Type Cases:</strong> Handles different types like <code>int</code>, <code>string</code>, and <code>bool</code>.
        </li>
        <li>
          <strong>Default Case:</strong> Catches any types that are not explicitly handled.
        </li>
      </ul>

      <!-- Practical Example: Command-Line Argument Parsing -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Practical Example: Command-Line Argument Parsing</h3>
      <p class="text-base md:text-lg mb-4">
        Control structures are essential in parsing and handling command-line arguments effectively.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Command-line argument parsing
package main

import (
    "fmt"
    "os"
)

func main() {
    if len(os.Args) < 2 {
        fmt.Println("Usage: go run main.go [command]")
        return
    }

    command := os.Args[1]

    switch command {
    case "greet":
        greet()
    case "farewell":
        farewell()
    default:
        fmt.Println("Unknown command:", command)
    }
}

func greet() {
    fmt.Println("Hello! Welcome to the Go program.")
}

func farewell() {
    fmt.Println("Goodbye! Thanks for using the Go program.")
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Usage:**
      </p>
      <p class="text-base md:text-lg mb-6">
        ```bash
        go run main.go greet
        go run main.go farewell
        go run main.go unknown
        ```
      </p>
      <p class="text-base md:text-lg mb-6">
        **Possible Output:**
      </p>
      <p class="text-base md:text-lg mb-6">
        For <code>greet</code> command:
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Hello! Welcome to the Go program.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        For <code>farewell</code> command:
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Goodbye! Thanks for using the Go program.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        For an unknown command:
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Unknown command: unknown
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Argument Checking:</strong> Uses an <code>if</code> statement to ensure that a command-line argument is provided.
        </li>
        <li>
          <strong>Switch Statement:</strong> Determines which function to call based on the provided command.
        </li>
        <li>
          <strong>Default Case:</strong> Handles any unknown commands gracefully by informing the user.
        </li>
      </ul>

      <!-- Example: Looping with Early Exit -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example: Looping with Early Exit</h3>
      <p class="text-base md:text-lg mb-4">
        Combining loops with control statements allows for efficient data processing with the ability to exit early when certain conditions are met.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
// Example: Looping with early exit
package main

import "fmt"

func main() {
    numbers := []int{2, 4, 6, 8, 10, 3, 12}

    for _, num := range numbers {
        if num%2 != 0 {
            fmt.Printf("Found an odd number: %d. Exiting loop.\n", num)
            break
        }
        fmt.Printf("Even number: %d\n", num)
    }
}
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Output:**
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
<code>
Even number: 2
Even number: 4
Even number: 6
Even number: 8
Even number: 10
Found an odd number: 3. Exiting loop.
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        **Explanation:**
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Loop Iteration:</strong> Iterates over a slice of numbers.
        </li>
        <li>
          <strong>Condition Check:</strong> Checks if a number is odd using <code>num%2 != 0</code>.
        </li>
        <li>
          <strong>Early Exit:</strong> Uses <code>break</code> to exit the loop immediately upon finding an odd number.
        </li>
      </ul>

      <!-- Summary -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Summary</h2>
      <p class="text-base md:text-lg mb-4">
        Mastering control structures in Go is essential for building efficient and dynamic applications. By understanding and effectively utilizing conditional statements, loops, switch cases, and advanced control mechanisms like <code>goto</code> and <code>select</code>, developers can create programs that are both powerful and maintainable.
      </p>
      <p class="text-base md:text-lg mb-6">
        Key takeaways include:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          Go's <code>if</code> and <code>else</code> statements provide straightforward conditional execution.
        </li>
        <li>
          The <code>for</code> loop is versatile, accommodating traditional loops, while-like loops, infinite loops, and range-based iterations.
        </li>
        <li>
          <code>switch</code> statements enhance readability when handling multiple conditions.
        </li>
        <li>
          Advanced features like <code>select</code>, <code>defer</code>, <code>panic</code>, and <code>recover</code> offer powerful control over program flow and error handling.
        </li>
        <li>
          Comparing Go's control structures with those in other languages highlights its simplicity and efficiency, making it a robust choice for modern software development.
        </li>
      </ul>

      <!-- Further Reading -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Further Reading</h2>
      <p class="text-base md:text-lg mb-4">
        To deepen your understanding of Go's control structures and other language features, consider exploring the following resources:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <a href="https://golang.org/doc/effective_go.html#control-structures" class="text-blue-600 hover:underline">Effective Go: Control Structures</a>
        </li>
        <li>
          <a href="https://tour.golang.org/flowcontrol/1" class="text-blue-600 hover:underline">A Tour of Go: Flow Control</a>
        </li>
        <li>
          <a href="https://www.golang-book.com/books/intro/10" class="text-blue-600 hover:underline">The Go Programming Language Book</a>
        </li>
        <li>
          <a href="https://golangbot.com/control-statements/" class="text-blue-600 hover:underline">GolangBot: Control Statements</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoControlStructures',
  data() {
    return {
      // Additional data properties can be added here if needed
    };
  },
};
</script>

<style>
pre {
  white-space: pre-wrap;
  overflow-x: auto;
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem;
  }
}
</style>
