<script setup lang="ts">
function click(): void {
  console.warn(123456)
}
</script>

<template>
  <div class="bg-red" @click="click">
    button
  </div>
</template>
