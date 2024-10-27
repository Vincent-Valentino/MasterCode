<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-orange-600 rounded-t-xl p-4">
      <img src="/java/logo.svg" alt="Java Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to Java</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        Java is a versatile and widely-used object-oriented programming language known for its portability, robustness, and performance. It was created by <strong>Sun Microsystems</strong> (now owned by Oracle) and first released in 1995. Java’s “write once, run anywhere” (WORA) principle ensures that Java programs can run on any platform with a compatible Java Virtual Machine (JVM).
      </p>

      <!-- Why Learn Java -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Why Learn Java?</h2>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Platform Independence:</span> Java programs can run on any platform that has a JVM installed.</li>
        <li><span class="font-semibold">Popular for Large Systems:</span> Java is widely used in enterprise-level applications, including banking systems, e-commerce platforms, and Android development.</li>
        <li><span class="font-semibold">Strong Community Support:</span> Java has a massive and active global community, providing libraries, tools, and frameworks to accelerate development.</li>
      </ul>

      <!-- Applications of Java -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Applications of Java</h2>
      <p class="text-base md:text-lg mb-4">
        Java can be used in various fields, including:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Android App Development</span></li>
        <li><span class="font-semibold">Web Applications:</span> Using frameworks like Spring or Java EE</li>
        <li><span class="font-semibold">Desktop GUI Applications</span></li>
        <li><span class="font-semibold">Scientific Applications</span></li>
      </ul>

      <!-- Java Code Example -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Java Code Example</h2>
      <div class="bg-gray-800 text-white rounded-lg p-4">
        <pre><code class="language-java">{{ javaCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroductionToJava",

  data() {
    return {
      javaCode: 
`class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
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
