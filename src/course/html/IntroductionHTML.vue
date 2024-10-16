<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-yellow-500 rounded-t-xl p-4">
      <img src="/icons/html5.svg" alt="HTML Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-white">Introduction to HTML</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        HTML (HyperText Markup Language) is the foundational language for creating and structuring content on the web. It defines the structure and layout of web pages by using a variety of elements and tags. Understanding HTML is essential for anyone looking to delve into web development, as it serves as the backbone upon which other technologies like CSS and JavaScript build upon.
      </p>

      <!-- What is HTML? -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What is HTML?</h2>
      <p class="text-base md:text-lg mb-4">
        HTML is a markup language used to create the structure of web pages. Unlike programming languages that perform actions, HTML focuses on organizing and presenting content. It uses a series of elements and tags to define different parts of a web page, such as headings, paragraphs, links, images, and more.
      </p>
      <p class="text-base md:text-lg mb-6">
        Key Characteristics of HTML:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Markup Language:</strong> Uses tags to annotate and structure content.</li>
        <li><strong>Declarative:</strong> Describes what the content is, not how to perform tasks.</li>
        <li><strong>Platform-Independent:</strong> Can be used across different operating systems and devices.</li>
        <li><strong>Extensible:</strong> Works seamlessly with CSS and JavaScript to enhance design and interactivity.</li>
      </ul>

      <!-- Basic Structure of an HTML Document -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Basic Structure of an HTML Document</h2>
      <p class="text-base md:text-lg mb-4">
        Every HTML document follows a standard structure that organizes the content in a hierarchical manner. Understanding this structure is crucial for creating well-formed and functional web pages.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;My First HTML Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
    &lt;p&gt;This is a paragraph of text on my first HTML page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Explanation of the Basic Structure:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>DOCTYPE Declaration:</strong> Specifies the version of HTML being used. In modern web development, <code>&lt;!DOCTYPE html&gt;</code> declares that the document is HTML5.</li>
        <li><strong>&lt;html&gt; Tag:</strong> The root element that wraps all other elements in the document. The <code>lang</code> attribute declares the language of the document.</li>
        <li><strong>&lt;head&gt; Tag:</strong> Contains meta-information about the document, such as character set, viewport settings, and the document title.</li>
        <li><strong>&lt;meta&gt; Tags:</strong> Provide metadata like character encoding (<code>charset</code>), compatibility mode (<code>X-UA-Compatible</code>), and viewport settings for responsive design.</li>
        <li><strong>&lt;title&gt; Tag:</strong> Sets the title of the web page, which appears in the browser tab.</li>
        <li><strong>&lt;body&gt; Tag:</strong> Encloses the content of the web page that is visible to users, such as headings, paragraphs, images, links, and other elements.</li>
      </ul>

      <!-- DOCTYPE Declaration -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">DOCTYPE Declaration</h2>
      <p class="text-base md:text-lg mb-4">
        The <code>&lt;!DOCTYPE html&gt;</code> declaration is an instruction to the web browser about the version of HTML the page is written in. It ensures that the browser renders the page in standards-compliant mode, which helps maintain consistency across different browsers and devices.
      </p>
      <p class="text-base md:text-lg mb-6">
        Why is DOCTYPE Important?
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Standards Mode vs. Quirks Mode:</strong> The DOCTYPE declaration triggers the browser to render the page in standards mode, adhering to the latest HTML and CSS specifications. Without it, browsers may enter quirks mode, leading to inconsistent rendering.</li>
        <li><strong>Forward Compatibility:</strong> Ensures that your web pages remain compatible with future versions of HTML.</li>
        <li><strong>SEO Benefits:</strong> Proper DOCTYPE usage can improve search engine indexing and ranking by ensuring that your HTML is well-structured.</li>
      </ul>

      <!-- Role of HTML in Web Development -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">The Role of HTML in Web Development</h2>
      <p class="text-base md:text-lg mb-4">
        HTML serves as the skeleton of every web page, defining the structure and layout of content. It works in tandem with CSS (Cascading Style Sheets) and JavaScript to create rich, interactive, and visually appealing websites.
      </p>
      <p class="text-base md:text-lg mb-6">
        How HTML Interacts with CSS and JavaScript:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>CSS:</strong> Styles the HTML elements, controlling their appearance, layout, colors, fonts, and responsiveness.</li>
        <li><strong>JavaScript:</strong> Adds interactivity and dynamic behavior to HTML elements, enabling functionalities like form validation, animations, and real-time content updates.</li>
        <li><strong>DOM (Document Object Model):</strong> JavaScript interacts with the DOM, a tree-like representation of the HTML structure, to manipulate and update content dynamically.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        Importance of Semantic HTML:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Accessibility:</strong> Semantic HTML enhances accessibility by providing meaningful structure, making it easier for assistive technologies like screen readers to interpret and navigate content.</li>
        <li><strong>SEO:</strong> Search engines prioritize well-structured, semantic HTML, improving the visibility and ranking of your web pages.</li>
        <li><strong>Maintainability:</strong> Semantic HTML makes your code more readable and maintainable, facilitating collaboration and future updates.</li>
      </ul>

      <!-- Code Example: Basic HTML Document Structure -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Code Example: Basic HTML Document Structure</h2>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
<code>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Basic HTML Structure&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;My Website&lt;/h1&gt;
    &lt;/header&gt;
    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
    &lt;main&gt;
        &lt;section&gt;
            &lt;h2&gt;Welcome&lt;/h2&gt;
            &lt;p&gt;This is a simple HTML page.&lt;/p&gt;
        &lt;/section&gt;
    &lt;/main&gt;
    &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2024 My Website&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
</code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        Explanation of the Example:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>&lt;header&gt;:</strong> Contains introductory content or navigational links.</li>
        <li><strong>&lt;nav&gt;:</strong> Defines a set of navigation links.</li>
        <li><strong>&lt;main&gt;:</strong> Specifies the main content of the document, central to the page's purpose.</li>
        <li><strong>&lt;section&gt;:</strong> Represents a standalone section within the document, typically with a heading.</li>
        <li><strong>&lt;footer&gt;:</strong> Contains footer information like copyright notices.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        This example demonstrates a well-structured HTML document with semantic elements that enhance readability and maintainability.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        HTML is the cornerstone of web development, providing the essential structure upon which all web content is built. Its simplicity and flexibility make it accessible to beginners while its extensibility ensures that it remains relevant in the ever-evolving landscape of web technologies. By mastering HTML, developers lay a solid foundation for building sophisticated, interactive, and visually appealing websites.
      </p>
      <p class="text-base md:text-lg mb-6">
        As you continue your journey into web development, understanding HTML's role and mastering its syntax will empower you to create well-structured and accessible web pages. Combined with CSS and JavaScript, HTML enables the creation of dynamic and engaging user experiences that are fundamental to modern web applications.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToHTML',
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
