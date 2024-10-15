<template>
  <div class="w-full">
    <!-- Header Section -->
    <div class="w-full flex items-center gap-5 bg-blue-600 rounded-t-xl p-4">
      <img src="/python/logo.png" alt="Python Logo" class="w-12 h-12">
      <h1 class="text-2xl md:text-4xl font-bold text-yellow-400">Get Started with Python</h1>
    </div>

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <p class="text-base md:text-lg mb-6">
        Before you begin learning Python, it's important to set up your computer with the necessary tools and resources.
        This guide will help you prepare for your Python journey by outlining the steps you need to take,
        including downloading Python, setting up your development environment, and understanding basic requirements.
      </p>

      <!-- System Requirements -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">System Requirements</h2>
      <p class="text-base md:text-lg mb-4">
        Python is compatible with most operating systems, including Windows, macOS, and Linux. Ensure your system meets the following minimum requirements:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">Operating System (OS):</span>
          <ul class="list-disc list-inside ml-6">
            <li><span class="font-semibold">Windows:</span> Windows 7 or later</li>
            <li><span class="font-semibold">macOS:</span> macOS 10.9 (Mavericks) or later</li>
            <li><span class="font-semibold">Linux:</span> Most modern distributions</li>
          </ul>
        </li>
        <li><span class="font-semibold">Memory (RAM):</span> At least 1 GB (2 GB or more recommended)</li>
        <li><span class="font-semibold">Disk Space:</span> Approximately 100 MB for Python installation</li>
      </ul>

      <!-- Download Python -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Downloading Python</h2>
      <p class="text-base md:text-lg mb-4">
        First, you'll need to download Python based on your operating system. Visit the official Python website:
        <a class="text-blue-800 underline" href="https://www.python.org/downloads/">https://www.python.org/downloads/</a>.
        It's recommended to download the latest version of Python 3.x.x.
      </p>

      <!-- Installation Instructions -->
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Windows Instructions -->
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1">
          <h3 class="text-lg md:text-xl font-semibold mb-2 flex items-center">
            <img src="/icons/windows.svg" alt="Windows" class="w-6 h-6 mr-2"> Installation on Windows
          </h3>
          <ol class="list-decimal list-inside text-base md:text-lg">
            <li>Download the <strong>Windows installer</strong> from the Python website.</li>
            <li>Run the downloaded <strong>python-3.x.x.exe</strong> file.</li>
            <li>Check the box labeled <strong>"Add Python 3.x to PATH"</strong> to ensure you can run Python from the command line.</li>
            <li>Click on <strong>"Install Now"</strong> and follow the prompts to complete the installation.</li>
          </ol>
        </div>

        <!-- macOS Instructions -->
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 flex-1">
          <h3 class="text-lg md:text-xl font-semibold mb-2 flex items-center">
            <img src="/icons/apple.svg" alt="macOS" class="w-6 h-6 mr-2"> Installation on macOS
          </h3>
          <ol class="list-decimal list-inside text-base md:text-lg">
            <li>Download the <strong>macOS installer</strong> from the Python website.</li>
            <li>Open the downloaded <strong>.pkg</strong> file.</li>
            <li>Follow the installation wizard's instructions to install Python.</li>
            <li>Once installed, Python will be available on your system.</li>
          </ol>
        </div>

        <!-- Linux Instructions -->
        <div class="bg-green-50 border border-green-200 rounded-lg p-4 flex-1">
          <h3 class="text-lg md:text-xl font-semibold mb-2 flex items-center">
            <img src="/icons/linux.svg" alt="Linux" class="w-6 h-6 mr-2"> Installation on Linux
          </h3>
          <p class="text-base md:text-lg mb-2">
            Python often comes pre-installed on Linux systems. To check if you have Python installed, open the terminal and type:
          </p>
          <pre class="bg-gray-800 text-white rounded p-2 mb-2">
python3 --version
          </pre>
          <p class="text-base md:text-lg mb-2">
            If Python is not installed, you can install it using your package manager. For example, on Debian-based systems:
          </p>
          <pre class="bg-gray-800 text-white rounded p-2 mb-2">
sudo apt-get update
sudo apt-get install python3
          </pre>
        </div>
      </div>

      <!-- Verifying the Installation -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4 mt-6">Verifying the Installation</h2>
      <p class="text-base md:text-lg mb-4">
        To ensure Python has been installed correctly, follow these steps:
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-6">
        <li>Open the command prompt (Windows) or terminal (macOS/Linux).</li>
        <li>Type <code class="bg-gray-100 rounded px-1">python --version</code> and press Enter. If this doesn't display the Python version, try <code class="bg-gray-100 rounded px-1">python3 --version</code>.</li>
        <li>You should see output similar to <code class="bg-gray-100 rounded px-1">Python 3.x.x</code>, confirming the installation.</li>
      </ol>

      <!-- Choosing a Code Editor -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Choosing a Code Editor</h2>
      <p class="text-base md:text-lg mb-4">
        A code editor enhances your programming experience by providing features like syntax highlighting and code completion. Here are some popular options:
      </p>
      <ul class="list-disc list-inside text-base md:text-lg mb-6">
        <li><span class="font-semibold">IDLE:</span> Comes bundled with Python; great for beginners.</li>
        <li><span class="font-semibold">Visual Studio Code:</span> A free, powerful editor with numerous extensions. Download at <a class="text-blue-800 underline" href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>.</li>
        <li><span class="font-semibold">PyCharm:</span> A dedicated Python IDE with advanced features. Download at <a class="text-blue-800 underline" href="https://www.jetbrains.com/pycharm/download/">https://www.jetbrains.com/pycharm/download/</a>.</li>
      </ul>

      <!-- Writing Your First Python Program -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Writing Your First Python Program</h2>
      <p class="text-base md:text-lg mb-4">
        Let's write a simple Python program that prints "Hello, World!" to the console.
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-6">
        <li>Open your chosen code editor.</li>
        <li>Create a new file and save it as <code class="bg-gray-100 rounded px-1">hello.py</code>.</li>
        <li>Type the following code:
          <div class="bg-gray-800 text-white rounded p-2 mt-2 mb-2">
            <pre><code class="language-python">print("Hello, World!")</code></pre>
          </div>
        </li>
        <li>Save the file.</li>
      </ol>

      <!-- Running Your First Python Program -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Running Your Python Program</h2>
      <p class="text-base md:text-lg mb-4">
        Now, let's execute the program to see the output.
      </p>
      <ol class="list-decimal list-inside text-base md:text-lg mb-6">
        <li>Open the command prompt (Windows) or terminal (macOS/Linux).</li>
        <li>Navigate to the directory where you saved <code class="bg-gray-100 rounded px-1">hello.py</code> using the <code class="bg-gray-100 rounded px-1">cd</code> command.</li>
        <li>Run the program by typing:
          <div class="bg-gray-800 text-white rounded p-2 mt-2 mb-2">
            <pre><code>python hello.py</code></pre>
          </div>
          If this doesn't work, try:
          <div class="bg-gray-800 text-white rounded p-2 mt-2 mb-2">
            <pre><code>python3 hello.py</code></pre>
          </div>
        </li>
        <li>You should see the following output:
          <div class="bg-gray-800 text-white rounded p-2 mt-2 mb-2">
            <pre><code>Hello, World!</code></pre>
          </div>
        </li>
      </ol>

      <!-- Congratulations -->
      <h2 class="text-xl md:text-2xl font-semibold mb-4">Congratulations!</h2>
      <p class="text-base md:text-lg mb-6">
        You've successfully installed Python and run your first program. You're now ready to embark on your Python programming journey!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetStartedWithPython',
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