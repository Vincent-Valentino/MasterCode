<template>
  <div class="w-full">
    <!-- Header Section -->
    <Header title="Introduction to Python" value="python" />

    <!-- Content Section -->
    <div class="bg-white rounded-b-xl p-4 md:p-6">
      <!-- Introduction Paragraph -->
      <Text text="Python is a high-level, interpreted programming language known for its clear syntax and readability. Created by **Guido van Rossum** and first released in 1991, Python's design philosophy emphasizes code readability, notably using significant whitespace to enhance clarity."/>

      <!-- Why Learn Python Section -->
      <TextSection text="Why Learn Python?" />
      <ListSection :items="whyLearnPythonItems" />

      <!-- Python Applications Section -->
      <TextSection text="Applications of Python" />
      <Text text="Python can be used in various fields, including:" />
      <ListSection :items="pythonApplicationsItems" />

      <!-- Syntax Comparison Section -->
      <TextSection text="Python vs. Other Languages: A Simple Comparison" />
      <Text text="Let's compare the basic syntax for printing 'Hello, World!' in Python and other programming languages:" />

      <TextCode text="Python"/>
      <PreCode :code="pythonCode" language="python" />
      <TextCode text="C++"/>
      <PreCode :code="cppCode" language="cpp" />
      <TextCode text="Java"/>
      <PreCode :code="javaCode" language="java" />

      <!-- Explanation of Comparison -->
      <Text text="As you can see, printing 'Hello, World!' in Python is much simpler and requires fewer lines of code compared to C++ and Java. Python's simplicity allows you to focus on learning programming concepts without getting bogged down by complex syntax."/>

      <!-- Conclusion Section -->
      <TextSection text="The Simplicity of Python" />
      <Text text="Python's clear and concise syntax makes it one of the most accessible and widely-used programming languages today. Its readability and simplicity allow developers to focus on solving problems rather than worrying about intricate language rules, making it an ideal choice for both beginners and professionals."/>
    </div>
  </div>
</template>

<script>
import Header from "@/course/components/HeaderContent.vue";
import Text from "@/course/components/Text.vue";
import TextSection from "@/course/components/TextSection.vue";
import PreCode from "@/course/components/PreCode.vue";
import ListSection from "@/course/components/ListSection.vue";
import TextCode from "@/course/components/TextCode.vue";

export default {
  name: "IntroductionToPython",
  components: {
    Header,
    Text,
    TextSection,
    PreCode,
    ListSection,
    TextCode
  },
  data() {
    return {
      pythonCode: `print("Hello World")`,

      cppCode: `#include <iostream>
using namespace std;

int main() {  
    cout << "Hello, World!";
    return 0;
}`,

      javaCode: `class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

      whyLearnPythonItems: [
        {
          title: "Easy to Learn",
          description:
            "Python's straightforward syntax makes it an excellent choice for beginners.",
        },
        {
          title: "Versatile",
          description:
            "Used in web development, data analysis, artificial intelligence, scientific computing, and more.",
        },
        {
          title: "Community Support",
          description:
            "A large and active community provides plenty of resources and libraries.",
        },
        {
          title: "High Demand",
          description:
            "Python developers are in high demand in the job market.",
        },
      ],

      pythonApplicationsItems: [
        {
          title: "Web Development",
          description: "Using frameworks like Django and Flask.",
        },
        {
          title: "Data Science",
          description: "Utilizing libraries such as Pandas, NumPy, and Matplotlib.",
        },
        {
          title: "Machine Learning",
          description:
            "Leveraging its simplicity and libraries like TensorFlow and Scikit-learn.",
        },
        {
          title: "Automation",
          description:
            "Writing scripts to automate repetitive tasks, including web scraping.",
        },
      ],
    };
  },
};
</script>