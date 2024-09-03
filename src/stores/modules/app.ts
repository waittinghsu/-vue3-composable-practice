// src/stores/modules/useCounterStore.ts
import { defineStore } from 'pinia'

export const useAppStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})
