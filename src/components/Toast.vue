<script setup lang="ts">
import { one } from '../index'

function click(): void {
  console.warn(one)
}
</script>

<template>
  <div @click="click">
    button
  </div>
</template>
