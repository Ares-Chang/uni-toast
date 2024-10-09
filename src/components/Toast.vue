<script setup lang="ts">
import { isShow, state } from '../share'
</script>

<template>
  <div v-if="isShow">
    <div :class="`z-9999 fixed left-50% top-45% translate--50% rd-1 px-3 py-2 ${state.class}`">
      <div v-html="state.message" />
    </div>
  </div>
</template>
