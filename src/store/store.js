import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebarStore', {
    state: () => ({
         isNavOpen: false
    }),
    actions: {
        toggleNav() {
            this.isNavOpen = !this.isNavOpen
        }
    },
  })