<template>
  <div class="relative min-h-screen bg-black text-white p-4 md:p-8 overflow-hidden">
    <!-- Floating SVG Elements -->
    <FloatingElements />
    <OtherNavbar :first="'FAQ'" :second="'Contact'"/>

    <h1
      class="text-4xl md:text-5xl font-bold md:text-center md:mb-12 mb-6 animate-fade-in-down"
    >
      About MasterCode
    </h1>

    <div class="space-y-6 max-w-3xl mx-auto animate-fade-in">
      <div class="space-y-6 max-w-3xl mx-auto animate-fade-in">
      <p class="text-lg leading-relaxed">
        Welcome to MasterCode, your premier destination for cutting-edge, AI-powered online coding education. We're revolutionizing the way people learn to code by harnessing the power of artificial intelligence to create comprehensive, adaptive, and engaging courses.
      </p>

      <p class="text-lg leading-relaxed">
        At MasterCode, we believe that everyone should have access to high-quality coding education, regardless of their background or prior experience. Our mission is to empower individuals with the skills they need to thrive in the digital age, opening doors to exciting career opportunities and personal growth.
      </p>

      <p class="text-lg leading-relaxed">
        What sets us apart is our unique approach to course creation. Every course on MasterCode is meticulously crafted by advanced AI algorithms, ensuring that our content is always up-to-date, relevant, and aligned with industry standards. This innovative method allows us to offer a wide range of courses across various programming languages and frameworks, catering to beginners and experienced developers alike.
      </p>

      <p class="text-lg leading-relaxed">
        Our AI-driven platform adapts to your learning style, providing personalized recommendations and adjusting the difficulty level to match your progress. This ensures that you're always challenged but never overwhelmed, maximizing your learning potential and keeping you motivated throughout your coding journey.
      </p>

      <p class="text-lg leading-relaxed">
        We're committed to fostering a supportive community of learners and developers. Through our interactive forums, live coding sessions, and collaborative projects, you'll have the opportunity to connect with like-minded individuals, share your experiences, and grow together.
      </p>

      <p class="text-lg leading-relaxed">
        At MasterCode, we're not just teaching you to code; we're preparing you for the future. Join us in our mission to democratize coding education and unlock your potential in the world of technology. Your journey to becoming a master coder starts here.
      </p>
    </div>
    </div>
  </div>
</template>

<script>
import FloatingElements from './FloatingElements.vue';
import OtherNavbar from "./OtherNavbar.vue"

export default {
  name: 'AboutPage',
  components: {
    FloatingElements,
    OtherNavbar
  },
}
</script>

<style scoped>
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

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
</style>
