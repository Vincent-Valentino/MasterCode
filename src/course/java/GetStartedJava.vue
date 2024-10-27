<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Get Started with Java" value="java" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction -->
      <Text
          text="Before you begin learning Java, it's important to set up your computer with the necessary tools and resources.
        This guide will help you prepare for your Java journey by outlining the steps you need to take,
        including downloading Java, setting up your development environment, and understanding basic requirements."
      />

      <!-- System Requirements -->
      <TextSection text="System Requirements" />
      <Text
          text="Java is compatible with most operating systems, including Windows, macOS, and Linux. Ensure your system meets the following minimum requirements:"
      />
      <ListSection :items="systemRequirementsItems" />

      <!-- Download Java -->
      <TextSection text="Downloading Java" />
      <TextCode
          text="First, you'll need to download Java based on your operating system. Visit the official Java website: "
      />
      <a class="text-blue-800 underline" href="https://www.oracle.com/java/technologies/javase-downloads.html">
        https://www.oracle.com/java/technologies/javase-downloads.html
      </a>
      <Text
          text="It's recommended to download the latest version of Java SE Development Kit (JDK)."
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
              text="To check if Java is installed, open the terminal and type:"
          />
          <TextCode text="Command to check Java version:" />
          <PreCode :code="linuxCheckCommand" language="bash" />

          <Text
              text="If Java is not installed, you can install it using your package manager. For example, on Debian-based systems:"
          />
          <PreCode :code="linuxInstallCommands" language="bash" />
        </div>
      </div>

      <!-- Verifying the Installation -->
      <TextSection text="Verifying the Installation" />
      <Text text="To ensure Java has been installed correctly, follow these steps:" />
      <ListSection type="s" :items="verificationSteps" />

      <!-- Choosing a Code Editor -->
      <TextSection text="Choosing a Code Editor" />
      <Text
          text="A code editor enhances your programming experience by providing features like syntax highlighting and code completion. Here are some popular options:"
      />
      <ListSection type="s" :items="codeEditors" />

      <!-- Writing Your First Java Program -->
      <TextSection text="Writing Your First Java Program" />
      <Text text="Let's write a simple Java program that prints 'Hello, World!' to the console." />
      <ListSection type="s" :items="firstProgramSteps" />

      <!-- Running Your Java Program -->
      <TextSection text="Running Your Java Program" />
      <Text text="Now, let's execute the program to see the output." />
      <ListSection type="s" :items="runProgramSteps" />

      <!-- Congratulations -->
      <TextSection text="Congratulations!" />
      <Text
          text="You've successfully installed Java and run your first program. You're now ready to embark on your Java programming journey!"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const systemRequirementsItems = ref([
  {
    title: "Minimum Operating System (OS)",
    description: "**Windows 7**, **macOS 10.10** or **Linux (Newest)**",
  },
  {
    title: "Memory (RAM)",
    description: "At least 2 GB (4 GB or more recommended)",
  },
  {
    title: "Disk Space",
    description: "Approximately 500 MB for JDK installation",
  },
]);

const windowsInstructions = ref([
  {
    description:
        'Download the **Windows installer** from the Java website.',
  },
  {
    description:
        'Run the downloaded **jdk-XX-windows.exe** file.',
  },
  {
    description:
        'Follow the prompts to complete the installation.',
  },
]);

const macOSInstructions = ref([
  {
    description:
        'Download the **macOS installer** from the Java website.',
  },
  {
    description:
        'Open the downloaded **.dmg** file.',
  },
  {
    description:
        "Follow the installation wizard's instructions to install Java.",
  },
]);

const linuxCheckCommand = ref(`java -version`);

const linuxInstallCommands = ref(`sudo apt update
sudo apt install default-jdk`);

const verificationSteps = ref([
  {
    description:
        "Open the command prompt (Windows) or terminal (macOS/Linux).",
  },
  {
    description:
        'Type `java -version` and press Enter. This should display the Java version, confirming the installation.',
  },
]);

const codeEditors = ref([
  {
    title: "IntelliJ IDEA:",
    description:
        "A powerful Java IDE with numerous features. Download at <a class='text-blue-800 underline' href='https://www.jetbrains.com/idea/'>https://www.jetbrains.com/idea/</a>.",
  },
  {
    title: "Eclipse:",
    description:
        'A popular IDE for Java development. Download at <a class="text-blue-800 underline" href="https://www.eclipse.org/downloads/">https://www.eclipse.org/downloads/</a>.',
  },
  {
    title: "VS Code with Java Extension Pack:",
    description:
        'A lightweight editor with Java support. Download at <a class="text-blue-800 underline" href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>.',
  },
]);

const firstProgramSteps = ref([
  {
    description: "Open your chosen code editor.",
  },
  {
    description:
        'Create a new file and save it as `HelloWorld.java`.',
  },
  {
    description:
        'Type the following code:',
    code: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
    language: "java",
  },
  {
    description: "Save the file.",
  },
]);

const runProgramSteps = ref([
  {
    description:
        "Open the command prompt (Windows) or terminal (macOS/Linux).",
  },
  {
    description:
        'Navigate to the directory where you saved `HelloWorld.java` using the `cd` command.',
  },
  {
    description:
        'Compile the program by typing:',
    code: "javac HelloWorld.java",
    language: "bash",
  },
  {
    description:
        'Run the program by typing:',
    code: "java HelloWorld",
    language: "bash",
  },
  {
    description:
        'You should see the following output:',
    code: "Hello, World!",
    language: "bash",
  },
]);
</script>

<style scoped>
h2, p , h1, h3, h4{
  font-family: "Roboto Condensed", sans-serif;
}

a {
  font-family: "JetBrains Mono", sans-serif;
}
</style>
