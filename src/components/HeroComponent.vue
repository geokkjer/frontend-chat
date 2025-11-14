<script setup lang="ts">
const props = defineProps<{
  userName: string
}>()
</script>
<template>
  <div class="hero">
    <h1>Welcome to the Hero Component!</h1>
    <p>Hello {{ props.userName }}</p>
    <img src="/src/assets/Hero.png" alt="Hero Image" id="boomImg"/>
  </div>
</template>
<style scoped>
.hero {
    background-color: #444;
    padding: 20px;
    color: white;
    margin-bottom: 20px;
}
h1 {
    margin: 0;
}
img {
    margin-top: 10px;
    width: 200px;
    height: 200px;
}
/* #boomImg {
    width: 20rem;
    height: 20rem;
} */
</style>
