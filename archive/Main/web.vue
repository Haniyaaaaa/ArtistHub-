<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50">
    <Navbar @signup-click="showSignup = true" />
    
    <main class="container mx-auto px-4 py-8">
      <div class="text-center mb-12">
        <h1 class="text-5xl font-bold text-indigo-900 mb-4">
          Creative Artists Hub
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover exceptional talent across web development, architecture, and fashion design
        </p>
      </div>

      <div class="space-y-16">
        <ArtistSection
          v-for="artist in artists"
          :key="artist.id"
          :artist="artist"
        />
      </div>
    </main>

    <SignupModal
      v-if="showSignup"
      @close="showSignup = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import ArtistSection from './components/ArtistSection.vue'
import SignupModal from './components/SignupModal.vue'
import type { Artist } from './types/Artist'

const showSignup = ref(false)

const artists = ref<Artist[]>([
  {
    id: 1,
    name: "Sarah Chen",
    profession: "Web Developer",
    intro: "Creative frontend developer specializing in interactive web experiences",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400"
    ],
    fullDescription: "Sarah is a passionate web developer with 5+ years of experience creating beautiful, functional websites. She specializes in React and modern CSS frameworks."
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    profession: "Architect",
    intro: "Visionary architect blending modern design with sustainable practices",
    images: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400",
      "https://images.unsplash.com/photo-1503387769-00f4bba7f07?w=400"
    ],
    fullDescription: "Marcus creates architectural marvels that harmonize with their environment while pushing the boundaries of modern design."
  },
  {
    id: 3,
    name: "Elena Petrova",
    profession: "Fashion Designer",
    intro: "Innovative fashion designer known for bold patterns and sustainable materials",
    images: [
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57?w=400",
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=400"
    ],
    fullDescription: "Elena's fashion designs have been featured in Paris Fashion Week, focusing on eco-friendly materials and innovative silhouettes."
  }
])
</script>