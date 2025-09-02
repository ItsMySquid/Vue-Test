<template>
  <div class="page">
    <h1>Dirk's Pagina</h1>
    <p>Welkom op de pagina van Dirk! Hier kun je alles zetten wat je maar wilt.</p>
    <a href="/"><button>Terug naar home</button></a>
  </div>
</template>

<style scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f2f2f2;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

button {
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background-color: #2193b0;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #6dd5ed;
}
</style>
