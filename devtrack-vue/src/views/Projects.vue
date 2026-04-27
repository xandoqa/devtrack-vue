<template>
  <div>
    <h2>Projetos</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const projects = ref([
  { id: 1, name: 'API FastAPI' },
  { id: 2, name: 'Sistema Vue' }
])
</script>
