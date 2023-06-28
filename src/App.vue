<script setup lang="ts">
import Wrapper from "@/layouts/Wrapper.vue"
import NavBar  from "@/layouts/NavBar.vue";
import { NDrawer, NDrawerContent, NButton } from 'naive-ui'
import type { DrawerPlacement } from 'naive-ui'
import {ref} from 'vue'

const activeRef = ref(false)
const placementRef = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  activeRef.value = true
  placementRef.value = place
}


</script>

<template>
  <Wrapper>
    <NavBar  @show-menu="activate('right')" />
    <n-drawer
        v-model:show="activeRef"
        :default-width="250"
        :placement="placementRef"
        resizable
    >
      <n-drawer-content>
        <div class="bg-blue-950 h-full flex items-center">
          <ul class="flex flex-col h-3/6 justify-around  list-none ">
            <li class="font-semibold text-xl text-white">Home</li>
            <li class="font-semibold text-xl text-white">New</li>
            <li class="font-semibold text-xl text-white">Popular</li>
            <li class="font-semibold text-xl text-white">Trending</li>
            <li class="font-semibold text-xl text-white">Categories</li>
          </ul>
        </div>

      </n-drawer-content>
    </n-drawer>
    <router-view />


  </Wrapper>
</template>
