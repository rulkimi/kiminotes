import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => (
    {

    }
  ),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    // increment() {
    //   this.count++
    // },
  },
})