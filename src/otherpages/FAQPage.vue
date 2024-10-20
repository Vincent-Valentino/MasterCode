<template>
  <div class="relative min-h-screen bg-black text-white p-4 md:p-8 overflow-hidden">
    <FloatingElements />
    <OtherNavbar :first="'About'" :second="'Contact'"/>
    
    <!-- FAQ Section -->
    <section class="max-w-4xl mx-auto mt-10">
      <h1 class="text-3xl md:text-5xl font-black text-center mb-8 md:mb-12 animate-fade-in-down">Frequently Asked Questions</h1>
      <div class="space-y-4">
        <FAQItem 
          :question="'What is MasterCode ?'"
          :answer="'MasterCode is an e-learning platform that offers AI-generated programming courses to help you learn faster and more efficiently.'"
        />
        <FAQItem 
          :question="'How are your courses created using AI?'"
          :answer="'Our courses are primarily generated using advanced AI models such as GPT-4, GEMINI, and Claude, ensuring high-quality, up-to-date learning materials.'"
        />
        <FAQItem 
          :question="'Are the courses suitable for beginners?'"
          :answer="'Yes, most of our courses are designed with beginners in mind, making it easy to start your programming journey.'"
        />
        <FAQItem 
          :question="'Do I need prior programming experience to enroll?'"
          :answer="'No prior experience is required! We offer beginner-friendly courses.'"
        />
        <FAQItem 
          :question="'What programming languages and technologies do you teach?'"
          :answer="'We cover various programming languages and frameworks such as Python, JavaScript, TypeScript, Ruby, Java, C-family, React, Vue, Angular, Next.js, TailwindCSS, and more.'"
        />
        <FAQItem 
          :question="'How can I enroll in a course?'"
          :answer="'Simply browse the courses, pick the one that interests you, and follow the prompts to get started!'"
        />
        <FAQItem 
          :question="'Do you offer certifications upon course completion?'"
          :answer="'Currently, we do not offer certifications. However, we are working on integrating certification options soon.'"
        />
        <FAQItem 
          :question="'How often are new courses added or existing ones updated?'"
          :answer="'New courses and updates are added every 1-2 weeks.'"
        />
        <FAQItem 
          :question="'Can I access the courses on mobile devices?'"
          :answer="'Yes, our platform is fully responsive, making it accessible on both mobile devices and desktops.'"
        />
        <FAQItem 
          :question="'Are there any fees or is everything free?'"
          :answer="'Everything on MasterCode is currently free for all users.'"
        />
        <FAQItem 
          :question="'How long do I have access to a course after purchasing?'"
          :answer="`All courses are free, so there's no limit on access! You can revisit any course at any time.`"
        />
        <FAQItem 
          :question="'How can I get support if I have questions or issues?'"
          :answer="'You can reach out to our support team via the contact page for any inquiries or issues.'"
        />
      </div>  
    </section>
  </div>
</template>

<script setup>
import FloatingElements from './FloatingElements.vue';
import OtherNavbar from './OtherNavbar.vue';
import FAQItem from './FAQitem.vue';
</script>

<style scoped>
h1 {
  text-align: center;
  color: #FFFFFF;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out;
}
</style>