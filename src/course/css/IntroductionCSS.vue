<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-blue-50 rounded-t-xl p-4">
      <img src="/css/logo.svg" alt="CSS Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-blue-800">Introduction to CSS</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <p class="text-base md:text-lg mb-6">
        CSS (Cascading Style Sheets) is the language used to describe the presentation of a document written in HTML or XML. While HTML structures the content of a web page, CSS defines its visual appearance, including layout, colors, fonts, and responsiveness. Mastering CSS is essential for creating visually appealing and user-friendly websites.
      </p>

      <!-- What is CSS and How It Works -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">What is CSS and How It Works</h2>
      <p class="text-base md:text-lg mb-4">
        CSS is a style sheet language that enables developers to separate the content of a web page from its presentation. By doing so, it allows for greater flexibility and control over the layout and design of multiple web pages, all from a single CSS file. CSS works by selecting HTML elements and applying styles to them based on selectors, properties, and values.
      </p>
      <p class="text-base md:text-lg mb-6">
        Key Concepts of CSS:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Selectors:</strong> Patterns used to select the elements you want to style.</li>
        <li><strong>Properties:</strong> The aspects of an element you want to change (e.g., color, font-size, margin).</li>
        <li><strong>Values:</strong> The settings you apply to the properties (e.g., red, 16px, 10px).</li>
      </ul>

      <!-- Inline, Internal, and External Stylesheets -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Inline, Internal, and External Stylesheets</h2>
      <p class="text-base md:text-lg mb-4">
        CSS can be applied to HTML documents in three primary ways: inline, internal, and external stylesheets. Each method has its own use cases and advantages.
      </p>

      <h3 class="text-lg md:text-xl font-semibold mb-2">1. Inline Styles</h3>
      <p class="text-base md:text-lg mb-4">
        Inline styles are applied directly to HTML elements using the <code>style</code> attribute. This method is useful for quick, specific style changes but is generally discouraged for maintaining larger projects due to lack of scalability and reusability.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code>
    &lt;!-- Example of Inline Styles --&gt;
    &lt;p style=&quot;color: blue; font-size: 16px;&quot;&gt;
      This is a paragraph with inline styles.
    &lt;/p&gt;
        </code>
      </pre>

      <h3 class="text-lg md:text-xl font-semibold mb-2">2. Internal Stylesheets</h3>
      <p class="text-base md:text-lg mb-4">
        Internal stylesheets are defined within the <code>&lt;style&gt;</code> tag inside the <code>&lt;head&gt;</code> section of an HTML document. This approach is suitable for single-page applications or when styles are specific to one page.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code>
    &lt;!-- Example of Internal Stylesheet --&gt;
        &lt;!DOCTYPE html&gt;
        &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;
            &lt;meta charset=&quot;UTF-8&quot;&gt;
            &lt;title&gt;Internal Stylesheet Example&lt;/title&gt;
            &lt;style&gt;
                p {
                    color: green;
                    font-size: 18px;
                }
            &lt;/style&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;p&gt;This paragraph is styled using an internal stylesheet.&lt;/p&gt;
        &lt;/body&gt;
        &lt;/html&gt;
        </code>
      </pre>

      <h3 class="text-lg md:text-xl font-semibold mb-2">3. External Stylesheets</h3>
      <p class="text-base md:text-lg mb-4">
        External stylesheets are separate <code>.css</code> files linked to HTML documents using the <code>&lt;link&gt;</code> tag. This method promotes reusability and maintainability, especially for larger websites with multiple pages sharing the same styles.
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code>
    &lt;!-- Example of External Stylesheet Link in HTML --&gt;
    &lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;title&gt;External Stylesheet Example&lt;/title&gt;
        &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;p&gt;This paragraph is styled using an external stylesheet.&lt;/p&gt;
    &lt;/body&gt;
    &lt;/html&gt;
        </code>
      </pre>

      <!-- CSS Syntax -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">CSS Syntax</h2>
      <p class="text-base md:text-lg mb-4">
        Understanding CSS syntax is fundamental to effectively styling web pages. A CSS rule consists of a selector and a declaration block. The selector targets the HTML elements you want to style, and the declaration block contains one or more declarations separated by semicolons.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Basic CSS Rule Structure:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code>
    /* CSS Rule Example */
    selector {
        property: value;
        property: value;
    }
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Example: Styling a Paragraph</strong>
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code>
    /* CSS Rule to Style All Paragraphs */
    p {
        color: #333333;
        font-size: 16px;
        line-height: 1.5;
    }
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        In this example, the selector <code>p</code> targets all <code>&lt;p&gt;</code> elements in the HTML document. The declarations within the curly braces set the text color to a dark gray (<code>#333333</code>), the font size to <code>16px</code>, and the line height to <code>1.5</code> for better readability.
      </p>

      <!-- Code Example: Linking a CSS File to an HTML Document -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Code Example: Linking a CSS File to an HTML Document</h2>
      <p class="text-base md:text-lg mb-4">
        Linking an external CSS file to your HTML document is a best practice for maintaining clean and organized code. Here's how to do it:
      </p>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code>
    &lt;!-- HTML Document (index.html) --&gt;
    &lt;!DOCTYPE html&gt;
    &lt;html lang=&quot;en&quot;&gt;
    &lt;head&gt;
        &lt;meta charset=&quot;UTF-8&quot;&gt;
        &lt;title&gt;Linking External CSS&lt;/title&gt;
        &lt;link rel=&quot;stylesheet&quot; href=&quot;styles.css&quot;&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
        &lt;p&gt;This paragraph is styled using an external CSS file.&lt;/p&gt;
    &lt;/body&gt;
    &lt;/html&gt;
        </code>
      </pre>
      <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto mb-6">
        <code>
    /* External CSS File (styles.css) */
    h1 {
        color: navy;
        text-align: center;
    }
    
    p {
        color: gray;
        font-family: Arial, sans-serif;
        font-size: 14px;
    }
        </code>
      </pre>
      <p class="text-base md:text-lg mb-6">
        <strong>Explanation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li>
          <strong>Link Tag:</strong> The <code>&lt;link&gt;</code> tag in the <code>&lt;head&gt;</code> section of the HTML document references the external CSS file <code>styles.css</code>. The <code>rel=&quot;stylesheet&quot;</code> attribute specifies the relationship between the HTML document and the linked file.
        </li>
        <li>
          <strong>External CSS File:</strong> The <code>styles.css</code> file contains CSS rules that define the styles for HTML elements. In this example, the <code>&lt;h1&gt;</code> elements are styled with a navy color and centered text alignment, while the <code>&lt;p&gt;</code> elements are styled with gray text, the Arial font family, and a font size of <code>14px</code>.
        </li>
        <li>
          <strong>Separation of Concerns:</strong> By separating HTML content from CSS styles, you create a more organized codebase that is easier to maintain and update.
        </li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Result:</strong>
      </p>
      <pre class="bg-gray-800 text-white p-2 rounded-md overflow-x-auto mb-6">
        <code>
    &lt;!-- Rendered Output --&gt;
    Welcome to My Website
    
    This paragraph is styled using an external CSS file.
        </code>
      </pre>

      <!-- Separation of Content and Style -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Separation of Content and Style</h2>
      <p class="text-base md:text-lg mb-4">
        One of the fundamental principles of web development is the separation of content and style. By keeping HTML (content) and CSS (style) separate, you achieve several benefits that enhance the development process and the final user experience.
      </p>
      <p class="text-base md:text-lg mb-6">
        <strong>Benefits of Separation:</strong>
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><strong>Maintainability:</strong> Keeping styles in separate CSS files makes it easier to manage and update the appearance of multiple web pages from a single location.</li>
        <li><strong>Reusability:</strong> Styles defined in external stylesheets can be reused across different HTML documents, promoting consistency and reducing redundancy.</li>
        <li><strong>Improved Readability:</strong> Separating content from style results in cleaner and more readable code, making it easier for developers to collaborate and understand each other's work.</li>
        <li><strong>Faster Load Times:</strong> External CSS files can be cached by browsers, reducing the amount of data that needs to be downloaded for subsequent page visits.</li>
        <li><strong>Flexibility:</strong> Enables designers and developers to work independently on the layout and styling without interfering with the underlying HTML structure.</li>
      </ul>
      <p class="text-base md:text-lg mb-6">
        <strong>Real-World Analogy:</strong>
      </p>
      <p class="text-base md:text-lg mb-6">
        Think of a website as a house. HTML is the structural framework—the walls, floors, and roof—that define the layout and organization of the rooms. CSS is the interior design—the colors, furniture, and decorations—that make the house aesthetically pleasing and comfortable. By keeping the structural framework separate from the interior design, you can easily change the look and feel of the house without altering its fundamental structure.
      </p>

      <!-- Conclusion -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Conclusion</h2>
      <p class="text-base md:text-lg mb-6">
        <strong>CSS</strong> is an indispensable tool in web development, enabling developers to transform plain HTML documents into visually engaging and user-friendly web pages. By mastering CSS, you gain the ability to control the layout, design, and responsiveness of your websites, ensuring that they not only function well but also provide an excellent user experience.
      </p>
      <p class="text-base md:text-lg mb-6">
        Understanding the different methods of applying CSS—inline, internal, and external—allows you to choose the most appropriate approach for your projects, balancing flexibility, maintainability, and performance. Moreover, adhering to the principle of separating content from style enhances the scalability and manageability of your web applications.
      </p>
      <p class="text-base md:text-lg mb-6">
        As you continue to explore the vast capabilities of CSS, you'll discover its powerful features and techniques that can elevate your web development skills, enabling you to create stunning and responsive websites that stand out in today's competitive digital landscape.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionToCSS',
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
