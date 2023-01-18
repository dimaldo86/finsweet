import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebarStore', {
    state: () => ({
         isNavOpen: false
    }),
    actions: {
        toggleNav() {
            this.isNavOpen = !this.isNavOpen
            if(this.isNavOpen){
                document.documentElement.style.overflow = 'hidden'
                return
              }
              
            document.documentElement.style.overflow = 'auto'
        }
    },
  })