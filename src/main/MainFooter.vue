<template>
  <footer class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row justify-between">
        <div class="mb-8 md:mb-0">
          <h2 class="text-center md:text-start md:text-lg font-semibold mb-2">Contact Us</h2>
          <p class="text-center md:text-start">info@mastercode.com</p>
          <p class="text-center md:text-start">+1 (234) 567-890</p>
          <p class="text-center md:text-start">Send us a message</p>
        </div>
        <div>
          <h2 class="text-center md:text-start md:text-lg font-semibold mb-2">Subscribe to our newsletter!</h2>
          <form @submit.prevent="subscribeNewsletter" class="flex md:w-full w-3/4 mx-auto">
            <input type="email" v-model="email" placeholder="Enter your email" class="text-xs md:text-base px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <button type="submit" class="text-xs md:text-base bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="mt-8 text-center">
        <p>&copy; 2024 MasterCode. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    subscribeNewsletter() {
      // Implement newsletter subscription logic here
      console.log('Subscribing:', this.email)
      this.email = ''
    }
  }
}
</script>