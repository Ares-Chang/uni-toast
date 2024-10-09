<script setup lang="ts">
import { Toast, useToast } from 'uni-toast'

const { success, error, warning, info } = useToast()
</script>

<template>
  <div>
    <Toast />

    <button @click="success('success')">
      success
    </button>
    <button @click="error('error')">
      error
    </button>
    <button @click="warning('warning')">
      warning
    </button>
    <button @click="info('info')">
      info
    </button>
  </div>
</template>
