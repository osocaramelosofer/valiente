<script lang="ts" setup>
import { Filter } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import {defineProps, ref} from 'vue'

// remove old logic to show menu
// const show = ref(false)
// const showMobileMenu = ()=> {
//   show.value = !show.value;
//   console.log(show.value);
// }

defineProps({
  showMenu: Function
})
</script>

<template>
  <nav class="">
    <div class="flex justify-between items-center p-5 ">
      <div class="logo-container">
        <span class="text-base md:text-5xl font-black text-black">
          FM.
        </span>
      </div>
      <div class="hamburger-btn md:hidden cursor-pointer">
        <n-icon class="text-2xl text-black"
        @click="$emit('showMenu')"
        >
          <Filter />
        </n-icon>
      </div>
      <ul class="hidden md:flex md:justify-between md:w-4/6">
        <li class="text-indigo-900 opacity-50 hover:opacity-100 cursor-pointer">Products</li>
        <li class="text-indigo-900 opacity-50 hover:opacity-100 cursor-pointer">About us</li>
        <li class="text-indigo-900 opacity-50 hover:opacity-100 cursor-pointer">Location</li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
ul{
  list-style: none;
}
li{
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
  Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: bold;
}
</style>
