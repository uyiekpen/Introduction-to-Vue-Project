<script setup>
import { ref } from 'vue';

const count = ref(0)

const addToCount = () =>{
  count.value = count.value + 1
}

const subToCount = () =>{
  count.value = count.value - 1
}

</script>

<template>
  <main>
    <div>
      <h4>the current count is....</h4>
      <h1>{{count}}</h1>
      <button @click="subToCount()">-</button>
      <button @click="addToCount()">+</button>
    </div>
  </main>
</template>

<style scoped>
main{
  background-color: whitesmoke;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
div{
  text-align: center;
}
</style>
