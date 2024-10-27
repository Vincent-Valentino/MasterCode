<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-yellow-500 rounded-t-xl p-4">
        <img src="/js/logo.png" alt="JavaScript Logo" class="w-12 h-12">
        <h1 class="text-2xl md:text-4xl font-bold text-black">JavaScript Conditions</h1>
      </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Control flow statements allow you to execute code based on specific conditions. In JavaScript, the primary control flow statements are <code>if</code>, <code>else if</code>, <code>else</code>, and <code>switch</code>. These enable decision-making and flexible code execution.
      </p>

      <!-- Table of Contents -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Table of Contents</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><a href="#if-statement" class="text-blue-800 underline">The <code>if</code> Statement</a></li>
        <li><a href="#else-statement" class="text-blue-800 underline">The <code>else</code> Statement</a></li>
        <li><a href="#else-if-statement" class="text-blue-800 underline">The <code>else if</code> Statement</a></li>
        <li><a href="#switch-statement" class="text-blue-800 underline">The <code>switch</code> Statement</a></li>
        <li><a href="#ternary-operator" class="text-blue-800 underline">Ternary Operator</a></li>
      </ul>

      <!-- The if Statement -->
      <h2 id="if-statement" class="text-xl md:text-2xl font-semibold mb-4">The <code>if</code> Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>if</code> statement is used to execute code when a specific condition evaluates to true.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ ifSyntaxCode }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Let's check if a number is positive:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ positiveNumberCode }}</code></pre>
      </div>

      <!-- The else Statement -->
      <h2 id="else-statement" class="text-xl md:text-2xl font-semibold mb-4">The <code>else</code> Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>else</code> statement executes code if the <code>if</code> condition is false.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ elseSyntaxCode }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Checking if a number is positive or negative:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ positiveNegativeCode }}</code></pre>
      </div>

      <!-- The else if Statement -->
      <h2 id="else-if-statement" class="text-xl md:text-2xl font-semibold mb-4">The <code>else if</code> Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>else if</code> statement tests a second condition if the first <code>if</code> condition is false.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ elseIfSyntaxCode }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Determine if a number is positive, negative, or zero:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ numberSignCode }}</code></pre>
      </div>

      <!-- The switch Statement -->
      <h2 id="switch-statement" class="text-xl md:text-2xl font-semibold mb-4">The <code>switch</code> Statement</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>switch</code> statement is used to execute one block of code out of many, based on the evaluation of a variable.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ switchSyntaxCode }}</code></pre>
      </div>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <p class="text-base md:text-lg mb-4">
        Determine the day of the week:
      </p>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ dayOfWeekCode }}</code></pre>
      </div>

      <!-- Ternary Operator -->
      <h2 id="ternary-operator" class="text-xl md:text-2xl font-semibold mb-4">Ternary Operator</h2>
      <p class="text-base md:text-lg mb-4">
        The ternary operator is a concise way to write an <code>if-else</code> statement.
      </p>

      <!-- Syntax -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Syntax</h3>
      <p class="text-base md:text-lg mb-4">
        <code>condition ? expressionIfTrue : expressionIfFalse</code>
      </p>

      <!-- Example -->
      <h3 class="text-lg md:text-xl font-semibold mb-2">Example</h3>
      <div class="bg-gray-800 text-white rounded-lg p-4 mb-6">
        <pre><code class="language-javascript">{{ ternaryOperatorCode }}</code></pre>
      </div>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-4">
        JavaScript offers various ways to handle conditions with <code>if</code>, <code>else if</code>, <code>else</code>, and <code>switch</code> statements. Understanding and using them properly can lead to better, more readable code.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScriptConditions',
  data() {
    return {
      ifSyntaxCode: `if (condition) {
    // Code to execute if the condition is true
}
`,
      positiveNumberCode: `let num = 5;
if (num > 0) {
    console.log("The number is positive");
}
`,
      elseSyntaxCode: `if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
`,
      positiveNegativeCode: `let num = -5;
if (num > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}
`,
      elseIfSyntaxCode: `if (condition1) {
    // Code for condition1
} else if (condition2) {
    // Code for condition2
} else {
    // Code if none of the conditions are met
}
`,
numberSignCode: `let num = 0;
if (num > 0) {
    console.log("Positive");
} else if (num === 0) {
    console.log("Zero");
} else {
    console.log("Negative");
}
`,
      switchSyntaxCode: `switch(expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
    // Code to execute if none of the cases match
}
`,
      dayOfWeekCode: `let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
`,
      ternaryOperatorCode: `let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
`,
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

  h2, p , h1, h3, h4{
    font-family: "Roboto Condensed", sans-serif;
  }

  a {
    font-family: "JetBrains Mono", sans-serif;
  }

</style>
