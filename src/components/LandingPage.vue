<script setup>
import { ref } from 'vue'
import DirkPage from './DirkPage.vue'
import AlanaPage from './AlanaPage.vue'

const currentPage = ref('landing') // 'landing', 'dirk' of 'alana'

function goTo(page) {
  currentPage.value = page
}
</script>

<template>
  <div>
    <div v-if="currentPage === 'landing'" class="landing">
      <h1 class="title">Welkom op onze website</h1>
      <div class="buttons">
        <button @click="goTo('dirk')">Naar Dirk</button>
        <button @click="goTo('alana')">Naar Alana</button>
      </div>
    </div>

    <DirkPage v-else-if="currentPage === 'dirk'" />
    <AlanaPage v-else-if="currentPage === 'alana'" />
  </div>
</template>

<style scoped>
.landing {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6dd5ed, #2193b0);
  color: white;
  text-align: center;
}

.title {
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  gap: 1.5rem;
}

button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: white;
  color: #2193b0;
  transition: all 0.3s ease;
}

button:hover {
  background: #2193b0;
  color: white;
  transform: scale(1.05);
}
</style>
