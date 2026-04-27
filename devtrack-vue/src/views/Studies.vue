<template>
  <div>
    <h2>Estudos</h2>
    <ul>
      <li v-for="study in studies" :key="study.id">
        {{ study.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const studies = ref([
  { id: 1, name: 'SQL' },
  { id: 2, name: 'C' }
])
</script>
