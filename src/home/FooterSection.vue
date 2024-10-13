<template>
  <footer class="bg-gray-200 py-8">
    <div class="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Learning Materials -->
      <div class="flex flex-col">
        <h2 class="font-bold text-sm md:text-lg mb-4 flex items-center">
          <Book class="mr-2" />
          Learning Materials
        </h2>
        <div class="space-y-2">
          <a v-for="lang in languages" :key="lang" href="#" class="text-xs md:text-base block hover:text-blue-600">
            {{ lang }}
          </a>
        </div>
      </div>

      <!-- Advanced Materials -->
      <div class="flex flex-col">
        <h2 class="font-bold text-sm md:text-lg mb-4 flex items-center">
          <Library class="mr-2" />
          Advanced Topics
        </h2>
        <div class="space-y-2">
          <a v-for="topic in advancedTopics" :key="topic" href="#" class="text-xs md:text-base block hover:text-blue-600">
            {{ topic }}
          </a>
        </div>
      </div>

      <!-- Developer Tools -->
      <div class="flex flex-col">
        <h2 class="font-bold text-sm md:text-lg mb-4 flex items-center">
          <Wrench class="mr-2" />
          Developer Tools
        </h2>
        <div class="space-y-2">
          <a v-for="tool in devTools" :key="tool" href="#" class="text-xs md:text-base block hover:text-blue-600">
            {{ tool }}
          </a>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="flex flex-col">
        <h2 class="font-bold text-sm md:text-lg mb-4 flex items-center">
          <Mail class="mr-2" />
          Contact Us
        </h2>
        <div class="space-y-4">
          <a href="mailto:info@mastercode.com" class="flex text-xs md:text-base items-center hover:text-blue-600">
            <Mail class="mr-2 h-5 w-5" />
            info@mastercode.com
          </a>
          <a href="tel:+1234567890" class="flex text-xs md:text-base items-center hover:text-blue-600">
            <Phone class="mr-2 h-5 w-5" />
            +1 (234) 567-890
          </a>
          <a href="#" class="flex items-center text-xs md:text-base hover:text-blue-600">
            <MessageSquare class="mr-2 h-5 w-5 text-xs md:text-base" />
            Send us a message
          </a>
        </div>
        
        <!-- Newsletter Signup -->
        <div class="mt-4 pt-4 border-t border-gray-300">
          <p class="md:text-sm text-gray-600 mb-2 text-xs">Subscribe to our newsletter!</p>
          <div class="flex overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="flex-grow flex-shrink px-1 md:px-3 py-2 border border-gray-300 rounded-l text-xs md:text-base focus:outline-none focus:border-blue-500"
            />
            <button class="px-1 md:px-4 py-2 bg-blue-600 text-white rounded-r text-xs md:text-sm hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="mt-8 text-center">
      <p class="text-sm text-gray-600">&copy; 2024 MasterCode. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { Book, Library,  Wrench , Mail, Phone, MessageSquare } from 'lucide-vue-next'

const languages = [
  'Python', 'JavaScript', 'TypeScript', 'Java',
  'C++', 'C#', 'Go', 'Ruby', 'PHP', 'SQL'
]

const advancedTopics = [
  'React', 'TensorFlow', 'Pandas', 'Machine Learning',
  'Data Science', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Spring Boot'
]

const devTools = [
  'Git', 'GitHub', 'GitLab', 'Postman',
  'Docker', 'VS Code', 'IntelliJ IDEA', 'Jenkins', 'Jira', 'AWS'
]
</script>