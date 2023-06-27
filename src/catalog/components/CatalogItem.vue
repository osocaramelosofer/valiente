<script lang="ts" setup>
import {computed, defineProps} from "vue";

const props = defineProps({
  source: String
})

const fullUrlImage = computed(()=>{
  return new URL(`@/assets/images/${props.source}`, import.meta.url).href
})

const imageUrl = new URL(`@/assets/images/${props.source}`, import.meta.url).href

function getImageUrl() {
  // This path must be correct for your file
  return new URL(`../../assets/images/${props.source}`, import.meta.url)
}

console.log(getImageUrl())
</script>

<template>
  <div class="w-52 h-52">

    <img
        class="object-cover w-full h-full"
        :src="getImageUrl()"
    >
  </div>
</template>

<style scoped>

</style>
