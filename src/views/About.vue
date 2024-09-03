<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores";
const counter = useAppStore()
const count = computed(() => counter.count)

function increment() {
  counter.increment()
}
</script>

<style scoped>
/* 您可以在这里添加样式 */
</style>
