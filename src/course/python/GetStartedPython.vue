<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Get Started with Python" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <Text
        text="Before you begin learning Python, it's important to set up your computer with the necessary tools and resources.
        This guide will help you prepare for your Python journey by outlining the steps you need to take,
        including downloading Python, setting up your development environment, and understanding basic requirements."
      />

      <!-- System Requirements -->
      <TextSection text="System Requirements" />
      <Text
        text="Python is compatible with most operating systems, including Windows, macOS, and Linux. Ensure your system meets the following minimum requirements:"
      />
      <ListSection :items="systemRequirementsItems" />

      <!-- Download Python -->
      <TextSection text="Downloading Python" />
      <TextCode
        text="First, you'll need to download Python based on your operating system. Visit the official Python website: "
      />
      <a class="text-blue-800 underline" href="https://www.python.org/downloads/">
        https://www.python.org/downloads/
      </a>
      <Text
        text="It's recommended to download the latest version of Python 3.x.x."
        class="text-xs md:text-base mb-6"
      />

      <!-- Installation Instructions -->
      <div class="flex flex-col md:flex-row gap-6">
        <!-- Windows Instructions -->
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1">
          <TextSection text="Installation on Windows" />
          <ListSection type="s" :items="windowsInstructions" />
        </div>

        <!-- macOS Instructions -->
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 flex-1">
          <TextSection text="Installation on macOS" />
          <ListSection type="s" :items="macOSInstructions" />
        </div>

        <!-- Linux Instructions -->
        <div class="bg-green-50 border border-green-200 rounded-lg p-4 flex-1">
          <TextSection text="Installation on Linux" />
          <Text
            text="Python often comes pre-installed on Linux systems. To check if you have Python installed, open the terminal and type:"
          />
          <TextCode text="Command to check Python version:" />
          <PreCode :code="linuxCheckCommand" language="bash" />

          <Text
            text="If Python is not installed, you can install it using your package manager. For example, on Debian-based systems:"
          />
          <PreCode :code="linuxInstallCommands" language="bash" />
        </div>
      </div>

      <!-- Verifying the Installation -->
      <TextSection text="Verifying the Installation" />
      <Text text="To ensure Python has been installed correctly, follow these steps:" />
      <ListSection type="s" :items="verificationSteps" />

      <!-- Choosing a Code Editor -->
      <TextSection text="Choosing a Code Editor" />
      <Text
        text="A code editor enhances your programming experience by providing features like syntax highlighting and code completion. Here are some popular options:"
      />
      <ListSection type="s" :items="codeEditors" />

      <!-- Writing Your First Python Program -->
      <TextSection text="Writing Your First Python Program" />
      <Text text="Let's write a simple Python program that prints 'Hello, World!' to the console." />
      <ListSection type="s" :items="firstProgramSteps" />

      <!-- Running Your Python Program -->
      <TextSection text="Running Your Python Program" />
      <Text text="Now, let's execute the program to see the output." />
      <ListSection type="s" :items="runProgramSteps" />

      <!-- Congratulations -->
      <TextSection text="Congratulations!" />
      <Text
        text="You've successfully installed Python and run your first program. You're now ready to embark on your Python programming journey!"
      />
    </div>
  </div>
</template>

<script setup>
const systemRequirementsItems = [
  {
    title: "Minimum Operating System (OS)",
    description: "**Windows 7**, **macOS 10.9** or **Linux (Newest)**",
  },
  {
    title: "Memory (RAM)",
    description: "At least 1 GB (2 GB or more recommended)",
  },
  {
    title: "Disk Space",
    description: "Approximately 100 MB for Python installation",
  },
];

const windowsInstructions = [
  {
    description:
      'Download the **Windows installer** from the Python website.',
  },
  {
    description:
      'Run the downloaded **python-3.x.x.exe** file.',
  },
  {
    description:
      'Check the box labeled **"Add Python 3.x to PATH"** to ensure you can run Python from the command line.',
  },
  {
    description:
      'Click on **"Install Now"** and follow the prompts to complete the installation.',
  },
];

const macOSInstructions = [
  {
    description:
      'Download the **macOS installer** from the Python website.',
  },
  {
    description:
      'Open the downloaded **.pkg** file.',
  },
  {
    description:
      "Follow the installation wizard's instructions to install Python.",
  },
  {
    description:
      "Once installed, Python will be available on your system.",
  },
];

const linuxCheckCommand = `python3 --version`;

const linuxInstallCommands = `sudo apt-get update
sudo apt-get install python3`;

const verificationSteps = [
  {
    description:
      "Open the command prompt (Windows) or terminal (macOS/Linux).",
  },
  {
    description:
      'Type `python --version` and press Enter. If this doesn\'t display the Python version, try `python3 --version`.',
  },
  {
    description:
      'You should see output similar to `Python 3.x.x`, confirming the installation.',
  },
];

const codeEditors = [
  {
    title: "IDLE:",
    description:
      "Comes bundled with Python; great for beginners.",
  },
  {
    title: "Visual Studio Code:",
    description:
      'A free, powerful editor with numerous extensions. Download at <a class="text-blue-800 underline" href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>.',
  },
  {
    title: "PyCharm:",
    description:
      'A dedicated Python IDE with advanced features. Download at <a class="text-blue-800 underline" href="https://www.jetbrains.com/pycharm/download/">https://www.jetbrains.com/pycharm/download/</a>.',
  },
];

const firstProgramSteps = [
  {
    description: "Open your chosen code editor.",
  },
  {
    description:
      'Create a new file and save it as `hello.py`.',
  },
  {
    description:
      'Type the following code:',
    code: 'print("Hello, World!")',
    language: "python",
  },
  {
    description: "Save the file.",
  },
];

const runProgramSteps = [
  {
    description:
      "Open the command prompt (Windows) or terminal (macOS/Linux).",
  },
  {
    description:
      'Navigate to the directory where you saved `hello.py` using the `cd` command.',
  },
  {
    description:
      'Run the program by typing:',
    code: "python hello.py",
    language: "bash",
    alternateText:
      "If this doesn't work, try:",
    alternateCode: "python3 hello.py",
  },
  {
    description:
      'You should see the following output:',
    code: "Hello, World!",
    language: "bash",
  },
];
</script>

<style scoped>
</style>
