<template>
  <div class="relative group">
    <div class="overflow-hidden rounded-2xl shadow-2xl">
      <img
        :src="images[currentIndex]"
        :alt="`${name}'s work ${currentIndex + 1}`"
        class="w-full h-80 object-cover transition-transform duration-500 transform group-hover:scale-105"
      />
    </div>
    
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="currentIndex = index"
        :class="`w-3 h-3 rounded-full transition-all ${
          index === currentIndex 
            ? 'bg-white scale-125' 
            : 'bg-white/50 hover:bg-white/80'
        }`"
      />
    </div>

    <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
    >
      ‹
    </button>
    
    <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-lg"
    >
      ›
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  images: string[]
  name: string
}

const props = defineProps<Props>()
const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}
</script>