<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-indigo-900 rounded-t-xl p-4">
      <img src="/cpp/logo.svg" alt="C++ Logo" class="w-12 h-12" />
      <h1 class="text-2xl md:text-4xl font-bold text-white">C++ Control Structures</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Control structures in C++ allow you to manage the flow of your program, making decisions based on conditions or iterating through data. This course covers essential control structures, including conditional statements, loops, and ways to modify their behavior.
      </p>

      <!-- Conditional Statements -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conditional Statements</h2>
      <p class="text-base md:text-lg mb-4">
        Conditional statements allow programs to make decisions based on conditions. In C++, the <code>if</code>, <code>else if</code>, and <code>else</code> statements evaluate conditions to control the execution flow.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int age = 18;
    if (age &gt;= 18) {
        cout &lt;&lt; "You are eligible to vote." &lt;&lt; endl;
    } else {
        cout &lt;&lt; "You are not eligible to vote." &lt;&lt; endl;
    }
    return 0;
}</code></pre>
      <p class="text-base md:text-lg mb-6">
        The <code>if</code> statement checks a condition, and if it’s true, the block executes. The <code>else</code> block runs only if all prior conditions are false.
      </p>

      <!-- Switch Statements -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Switch Statements</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>switch</code> statement evaluates a variable against multiple cases, executing code based on the first matching case. This is ideal for managing multiple specific conditions.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    int day = 3;
    switch (day) {
        case 1:
            cout &lt;&lt; "Monday" &lt;&lt; endl;
            break;
        case 2:
            cout &lt;&lt; "Tuesday" &lt;&lt; endl;
            break;
        case 3:
            cout &lt;&lt; "Wednesday" &lt;&lt; endl;
            break;
        default:
            cout &lt;&lt; "Other day" &lt;&lt; endl;
    }
    return 0;
}</code></pre>
      <p class="text-base md:text-lg mb-6">
        Each <code>case</code> block ends with a <code>break</code> statement to prevent "fall through" behavior, where the code continues to the next case even if a match is found.
      </p>

      <!-- Loops in C++ -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Loops in C++</h2>
      <p class="text-base md:text-lg mb-4">
        Loops are used for repeating code blocks until a condition is met. C++ supports several types of loops: <code>for</code>, <code>while</code>, and <code>do-while</code>.
      </p>

      <!-- For Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">For Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>for</code> loop is commonly used when the number of iterations is known. It has three parts: initialization, condition, and increment.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>for (int i = 0; i &lt; 5; i++) {
    cout &lt;&lt; "Iteration " &lt;&lt; i &lt;&lt; endl;
}</code></pre>

      <!-- While Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">While Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>while</code> loop repeats a block of code as long as the condition remains true. It’s ideal for scenarios where the loop may not need to run at all if the condition is false initially.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>int count = 0;
while (count &lt; 5) {
    cout &lt;&lt; "Count is " &lt;&lt; count &lt;&lt; endl;
    count++;
}</code></pre>

      <!-- Do-While Loop -->
      <h3 class="text-lg md:text-xl font-semibold mb-4">Do-While Loop</h3>
      <p class="text-base md:text-lg mb-4">
        The <code>do-while</code> loop guarantees the code runs at least once, as the condition is evaluated at the end of the loop.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>int count = 0;
do {
    cout &lt;&lt; "Count is " &lt;&lt; count &lt;&lt; endl;
    count++;
} while (count &lt; 5);</code></pre>

      <!-- Break and Continue Statements -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Break and Continue Statements</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>break</code> statement exits a loop or <code>switch</code> statement immediately, while the <code>continue</code> statement skips the current iteration and continues with the next.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>for (int i = 0; i &lt; 10; i++) {
    if (i == 5) {
        break; // exits loop when i is 5
    }
    if (i % 2 == 0) {
        continue; // skips even numbers
    }
    cout &lt;&lt; i &lt;&lt; endl;
}</code></pre>

      <!-- Nested Control Structures -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Nested Control Structures</h2>
      <p class="text-base md:text-lg mb-4">
        C++ allows nesting control structures, where you can place loops or conditional statements inside one another. However, nesting can lead to complex and less readable code, so it’s best to keep nesting levels manageable.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6"><code>for (int i = 0; i &lt; 3; i++) {
    cout &lt;&lt; "Outer loop iteration " &lt;&lt; i &lt;&lt; endl;
    for (int j = 0; j &lt; 2; j++) {
        cout &lt;&lt; "  Inner loop iteration " &lt;&lt; j &lt;&lt; endl;
    }
}</code></pre>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        You’ve now explored the essential control structures in C++. With conditional statements and loops, you can create dynamic, responsive programs. In the next course, we’ll dive deeper into more advanced C++ topics.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CppControlStructures',
};
</script>

<style scoped>
pre {
  white-space: pre-wrap;
  overflow-x: auto;
}

@media (max-width: 768px) {
  pre, code {
    font-size: 0.5rem;
  }
}

h2, p , h1, h3, h4, li{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
