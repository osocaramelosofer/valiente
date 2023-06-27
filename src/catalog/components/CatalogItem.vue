<script lang="ts" setup>
import {computed, defineProps} from "vue";

const props = defineProps({
  source: String
})

function getImageUrl() {
  // This path must be correct for your file
  return new URL(`../../assets/images/${props.source}`, import.meta.url)
}

console.log(getImageUrl())
</script>

<template>
  <div class="flex h-full">
    <div class="w-60 h-40">
      <img
          class="object-cover w-full h-full"
          :src="getImageUrl()"
      >
    </div>
    <div class="flex flex-col  justify-between h-full">
      <h3 class="text-4xl text-gray font-black opacity-70">01</h3>
      <h4 class="text-dark  text-3xl font-extrabold">Title</h4>
      <p class="text-dark font-medium">Description this is an example of how can the description could be.</p>
    </div>

  </div>
</template>

<style scoped>

</style>
